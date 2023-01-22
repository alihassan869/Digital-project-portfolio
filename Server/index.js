require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Cors = require('cors');
require('./DB/Conn.js');
const Controllers = require('./Controller/Controller');
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded());
app.post('/Register', Controllers.Register);
app.post('/Login', Controllers.Login);
app.post('/Email', Controllers.EmailSent);
app.post('/NewPassword', Controllers.NewPassword);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
