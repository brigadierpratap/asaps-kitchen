const express = require("express");
const router = express.Router();
const { Client } = require("cassandra-driver");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const client = new Client({
    cloud: {
      secureConnectBundle: "./secure-connect-asapkitchen.zip",
    },
    credentials: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  });

  client
    .connect()
    .then(d => {
      client
        .execute(
          `select * from asap.users where email = '${email}' and provider = 'local' allow filtering`
        )
        .then(rs => {
          if (rs.rowLength !== 1) {
            res.send({
              status: -1,
              message: "Incorrect email/password!",
            });
          } else {
            const match = bcrypt.compareSync(
              password,
              rs.rows[0].get("password")
            );
            const user = {
              email,
              id: rs.rows[0].get("id"),
              name: rs.rows[0].get("name"),
              photourl: rs.rows[0].get("photoUrl"),
              phonenumber: rs.rows[0].get("phoneNumber"),
              provider: rs.rows[0].get("provider"),
            };
            console.log(user);
            if (match) {
              const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_SECRET,
                {
                  expiresIn: "2h",
                }
              );
              res.send({ message: token, status: 1, user });
            } else {
              res.send({
                status: -1,
                message: "Incorrect email/password!",
              });
            }
          }
        });
    })
    .catch(e => {
      console.log(e);
      res.send({
        status: -1,
        message: "Some unknown error occured!",
      });
    });
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let flag = true;
  //validating
  var regexp =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexp.test(email)) {
    flag = false;
    res.send({ status: -1, message: "Invalid Email!" });
  } else if (!password || password.length < 8) {
    flag = false;
    res.send({
      status: -1,
      message: "Password should be atleast 8 characters!",
    });
  } else if (!name || name.length === 0) {
    res.send({
      status: -1,
      message: "Name is required!",
    });
  } else {
    const client = new Client({
      cloud: {
        secureConnectBundle: "./secure-connect-asapkitchen.zip",
      },
      credentials: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET,
      },
    });

    client
      .connect()
      .then(d => {
        client
          .execute(
            `select json * from asap.users where email = '${email}' and provider = 'local' ALLOW FILTERING`
          )
          .then(rs => {
            // let a = {};
            // rs.rows.forEach(r => {
            //   const keys = r.keys();
            //   for (let i of keys) {
            //     a[i] = r.get(i);
            //   }
            // });
            // console.log(a.id);

            if (rs.rowLength !== 0) {
              res.send({
                status: -1,
                message: "User already exists!",
              });
            } else {
              var salt = bcrypt.genSaltSync(10);
              var hash = bcrypt.hashSync(password, salt);
              client
                .execute(
                  `insert into asap.users ( id, email,name,password,provider) values(uuid(),'${email}','${name}','${hash}','local')`
                )
                .then(r => {
                  res.send({
                    message: "User created successfully!",
                    status: 1,
                  });
                })
                .catch(e => {
                  console.log(e);
                  res.send({
                    status: -1,
                    message: "Some unknown error occured!",
                  });
                });
            }
          })
          .catch(e => {
            res.send({
              status: -1,
              message: "Some unknown error occured!",
            });
          });
      })
      .catch(e => {
        res.send({
          status: -1,
          message: "Some unknown error occured!",
        });
      });

    await client.shutdown();
  }
});
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

router.post("/placeOrder", authenticateToken, (req, res) => {
  const { rest, time, address, price, scheduled } = req.body;
  const client = new Client({
    cloud: {
      secureConnectBundle: "./secure-connect-asapkitchen.zip",
    },
    credentials: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  });
  let d = new Date();
  let mySqlTimestamp = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    time.split(":")[0],
    parseInt(time.split(":")[1]) + 30, // add 30 minutes
    d.getSeconds(),
    d.getMilliseconds()
  )
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  client
    .connect()
    .then(d => {
      client
        .execute(
          `INSERT INTO asap.orders (id , accepted , delivered , price , restaurant , scheduled , time , user) VALUES (uuid(), true, false,'${price}','${
            rest.id
          }',${scheduled},${
            scheduled ? `'${mySqlTimestamp}'` : `toTimeStamp(toDate(now()))`
          },'${req.user.user_id}')`
        )
        .then(rs => {
          res.send({
            status: 1,
            message: "Yay!",
          });
        })
        .catch(e => {
          console.log(e);
          res.send({
            status: -1,
            message: "Some unknown 1 error occured!",
          });
        });
    })
    .catch(e => {
      res.send({
        status: -1,
        message: "Some unknown error occured!",
      });
    });
});

router.get("/getuser", authenticateToken, (req, res) => {
  const { email, user_id } = req.user;
  const client = new Client({
    cloud: {
      secureConnectBundle: "./secure-connect-asapkitchen.zip",
    },
    credentials: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  });

  client
    .connect()
    .then(d => {
      client
        .execute(
          `select * from asap.users where email = '${email}' and id = ${user_id} allow filtering`
        )
        .then(rs => {
          if (rs.rowLength !== 1) {
            res.send({
              status: -1,
              message: "Invalid token!",
            });
          } else {
            const user = {
              email,
              id: rs.rows[0].get("id"),
              name: rs.rows[0].get("name"),
              photourl: rs.rows[0].get("photoUrl"),
              phonenumber: rs.rows[0].get("phoneNumber"),
              provider: rs.rows[0].get("provider"),
            };

            res.send({ message: user, status: 1 });
          }
        });
    })
    .catch(e => {
      console.log(e);
      res.send({
        status: -1,
        message: "Some unknown error occured!",
      });
    });
});

router.get("/restaurants", (req, res) => {
  const city = req.query.city;
  const client = new Client({
    cloud: {
      secureConnectBundle: "./secure-connect-asapkitchen.zip",
    },
    credentials: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  });

  client
    .connect()
    .then(d => {
      client
        .execute(
          `select * from asap.restau where city = '${city}' allow filtering`
        )
        .then(rs => {
          var r = [];
          rs.rows.map(x => {
            var keys = x.keys();
            var ob = {};
            for (let i of keys) {
              ob[i] = x.get(i);
            }
            r.push(ob);
            ob = {};
          });
          res.send({ message: r, status: 1 });
        });
    })
    .catch(e => {
      console.log(e);
      res.send({
        status: -1,
        message: "Some unknown error occured!",
      });
    });
});
module.exports = router;
