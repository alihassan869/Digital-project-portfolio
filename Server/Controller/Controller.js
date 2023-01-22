const UserModel = require('../DB/User1');
const bycrpt = require('bcryptjs');
const nodemailer = require('nodemailer');
const randomString = require('randomstring');
exports.Register = async (req, res) => {
  const { name, email, password, Checkbox } = req.body;
  UserModel.findOne({ email: email }, async (err, user) => {
    if (user) {
      res.send({ message: 'user already exits' });
    } else {
      await bycrpt.hash(password, 12).then(async (hashedpassword) => {
        const user = new UserModel({
          name,
          email,
          password: hashedpassword,
          Checkbox,
        });
        await user.save((err) => {
          if (!err) {
            res.send({ message: 'Register Data' });
          } else {
            console.log(err);
          }
        });
      });
    }
  });
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    UserModel.findOne({ email: email }, async (err, user) => {
      if (user) {
        bycrpt.compare(password, user.password).then(async (domatch) => {
          if (domatch) {
            res.send({ message: 'login successfully', user: user });
          } else {
            res.send({ message: 'invalid email or password' });
          }
        });
      } else {
        res.send({ message: 'invalid email or password' });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const sendnewpassword = async (name, email, token) => {
  try {
    const transporator = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const Mailoptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'reset password',
      html: `<p>hi ${name} you are requested for reset password <a href='http://localhost:3000/NewPassword/${token}'>Click Here</a> </p>`,
    };
    transporator.sendMail(Mailoptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('email sent =>', info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
exports.EmailSent = async (req, res) => {
  const { email } = req.body;
  try {
    UserModel.findOne({ email: email }, async (err, user) => {
      if (user) {
        const randomstring = randomString.generate();
        sendnewpassword(user.name, user.email, randomstring);
        const User = await UserModel.updateOne(
          { email: user.email },
          { $set: { token: randomstring } },
        );
      } else {
        console.log(err);
      }
      res.send({ message: 'please check inbox' });
    });
  } catch (error) {
    console.log(error);
  }
};
exports.NewPassword = async (req, res) => {
  const { password, token } = req.body;
  UserModel.findOne({ token: token }, async (err, user) => {
    if (user) {
      bycrpt.hash(password, 12).then(async (hashedpassword) => {
        user.password = hashedpassword;
        user.token = '';
        await user.save((err) => {
          if (!err) {
            res.send({ message: 'updated successfully' });
          } else {
            console.log(err);
          }
        });
      });
    } else {
      res.send({ message: 'Token invalid ' });
    }
  });
};
