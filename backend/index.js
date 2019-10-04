const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./router/auth");
const organisationsRouter = require("./router/organisations");
const shiftsRouter = require("./router/shifts");
const usersRouter = require("./router/users");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.get('/auth', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use("/organisations", organisationsRouter);
app.get('/organisations', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use("/shifts", shiftsRouter);
app.get('/shifts', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use("/users", usersRouter);
app.get('/users', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3001, () => {
  console.log("CORS enabled Server running on port 3001");
});
