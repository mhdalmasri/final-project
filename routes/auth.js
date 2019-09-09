const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken");
const Cookies = require('universal-cookie');


//register user
router.post("/register", async (req, res) => {
  // validate data b4 create user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if user already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //creat new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
    console.log(user.name + " created");
  } catch (err) {
    res.status(400).send(err);
  }
});

//login user
router.post("/login", async (req, res) => {
  // validate data b4 login
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // check if email  exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found");
  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Password is wrong");
  else console.log(user.name + " has logged in ///", user._id + " ur ID");
  //creat and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  console.log("Token created");

  res.json({
    token,
    _id: user._id
  });
  const cookies = new Cookies()
  cookies.set('myToken', token)
  cookies.set('myId', user._id)

});

// logout user

router.post("/logout", async (req, res) => {
  const user = await User.findOne({ email: "hahahahahaha" });
  if (!user) {
    const cookies = new Cookies()
    cookies.remove("myToken")
    cookies.remove("myId")
    console.log("user has logout")
    return res.send(cookies)
  }
})

//delete user
router.delete("/del/:id", verify, async(req, res) => {
  var id = req.params.id;
 await User.findOneAndRemove({ _id: id }, function (err, user) {
    if (err) {
      console.log("err");
      return res.status(500).send("something went wrong");
    } else {
      console.log(user.name + " removed");
      return res.status(200).send("user deleted");
    }
  });
});

//update user
router.put("/update/:id", verify, async (req, res) => {
  var id = req.params.id;
  await User.findOne({ _id: id }, async function (err, user) {
    if (err) {
      console.log("err");
      res.status(500).send("something went wrong");
    } else if (!user) {
      res.status(404).send();
    } else {
      if (req.body.name) {
        user.name = req.body.name;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashPassword;
      }
      user.save((err, user) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.status(200).send(user);
          console.log(user.name + " updated");
        }
      });
    }
  });
});
//all users

router.get("/all", verify, async(req, res) => {
  await User.find({}).exec(function (err, users) {
    if (err) console.log(err);
    else res.send(users);
  });
});




module.exports = router;
