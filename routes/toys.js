const router = require("express").Router();
const verify = require("./verifyToken");
const Toy = require("../model/Toy");
const { toyValidation } = require("../validation");

// add toy
router.post("/new", verify, async (req, res) => {
  // validate data b4 create user
  const { error } = toyValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // check if toy already exist
  const toyExist = await Toy.findOne({ toyName: req.body.toyName });
  if (toyExist) return res.status(400).send("this toy name already exists");
  //create toy
  const toy = new Toy({
    userID: req.user._id,
    toyName: req.body.toyName,
    condition: req.body.condition,
    description: req.body.description,
    age: req.body.age,
    location: req.body.location,
    category: req.body.category,
    status: req.body.status,
    url: "https://picsum.photos/300/300"
  });
  try {
    const savedToy = await toy.save();
    res.send({ toy: toy._id });
    console.log(toy.toyName + " created");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//all toys
router.get("/all", async (req, res) => {
  await Toy.find({}, function(err, toy) {
    if (err) {
      res.status(400).send("something went wrong");
    } else {
      res.send(toy);
    }
  });
});

//my toys
router.get("/my", async (req, res) => {
  await Toy.find({ userID: req.user._id }, function(err, toy) {
    if (err) {
      res.status(400).send("something went wrong");
    } else {
      res.send(toy);
    }
  });
});

//user toys
router.get("/:userID", verify, async (req, res) => {
  var userID = req.params.userID;
  await Toy.find({ userID }, function(err, toy) {
    if (err) {
      res.status(400).send("something went wrong");
    } else {
      res.send(toy);
    }
  });
});

//delete toys
router.delete("/del/:id", verify, (req, res) => {
  var id = req.params.id;
  Toy.findOneAndRemove({ _id: id }, function(err, toy) {
    if (err) {
      console.log("err");
      return res.status(500).send("something went wrong");
    } else {
      console.log(toy.name + " removed");
      return res.status(200).send("toy deleted");
    }
  });
});

//update toys
router.put("/update/:id", verify, (req, res) => {
  var id = req.params.id;
  Toy.findOne({ _id: id }, function(err, toy) {
    if (err) {
      console.log("err");
      res.status(500).send("something went wrong");
    } else if (!toy) {
      res.status(404).send();
    } else {
      if (req.body.name) {
        toy.name = req.body.name;
      }
      if (req.body.description) {
        toy.description = req.body.description;
      }
      if (req.body.age) {
        toy.age = req.body.age;
      }
      if (req.body.location) {
        toy.location = req.body.location;
      }
      if (req.body.category) {
        toy.category = req.body.category;
      }
      if (req.body.condition) {
        toy.condition = req.body.condition;
      }
      toy.save((err, toy) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.status(200).send(toy);
          console.log(toy.name + " updated");
        }
      });
    }
  });
});

module.exports = router;
