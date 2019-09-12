const fs = require("fs")
const router = require("express").Router()
const verify = require("./verifyToken")
const Toy = require("../model/Toy")
const { toyValidation } = require("../validation")
const multer = require("multer")
const path = require("path")
const Cookies = require("universal-cookie")
const cookies = new Cookies()
const ObjectId = require("mongodb").ObjectID
//Set Storage Engine
const storage = multer.diskStorage({
  destination: "client/public/uploads/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    )
  }
})
//init upload
const upload = multer({
  storage: storage
}).single("url")

// add toy
router.post("/new/:id", upload, async (req, res, next) => {
  // validate data b4 create user
  const { error } = toyValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  // check if toy already exist
  const toyExist = await Toy.findOne({ toyName: req.body.toyName })
  if (toyExist) return res.status(400).send("this toy name already exists")
  //create toy
  const toy = new Toy({
    userID: ObjectId(req.params.id),
    toyName: req.body.toyName,
    condition: req.body.condition,
    description: req.body.description,
    age: req.body.age,
    location: req.body.location,
    category: req.body.category,
    status: req.body.status,
    url: "./"+req.file.path.substring(14)
  })
  try {
    const savedToy = await toy.save()
    res.redirect("http://localhost:3000/myToys")
    console.log(toy.toyName + " created")
  } catch (err) {
    res.status(400).send("something went wrong")
  }
})

//all toys
router.get("/all", verify, async (req, res) => {
  await Toy.find({}, function (err, toy) {
    if (err) {
      res.status(400).send("something went wrong")
    } else {
      res.send(toy)
    }
  })
})

//my toys
router.get("/my", verify, async (req, res) => {
  await Toy.find({ userID: req.params._id }, function (err, toy) {
    if (err) {
      res.status(400).send("something went wrong")
    } else {
      res.send(toy)
    }
  })
})

//user toys
router.get("/:userID", verify, async (req, res) => {
  var userID = req.params.userID
  await Toy.find({ userID }, function (err, toy) {
    if (err) {
      res.status(400).send("something went wrong")
    } else {
      res.send(toy)
    }
  })
})

//delete toys
router.delete("/del/:id", verify, (req, res) => {
  var id = req.params.id
  Toy.findOneAndRemove({ _id: id }, function (err, toy) {
    if (err) {
      console.log("err")
      return res.status(500).send("something went wrong")
    } else {
      // fs.unlinkSync("../uploads/url-1568249566095.jpeg", (err) => {
      //   if (err) throw err
      //   console.log('path/file.txt was deleted')
      // })
      console.log(toy.toyName + " removed")
      return res.status(200).send(toy.toyName + " is successfully removed!")
    }
  })
})

//update toys
router.put("/update/:id",upload, async (req, res) => {
  const id = req.params.id
  await Toy.findOneAndUpdate({ _id: id },upload, function(err, toy) {
    if (err) {
      console.log("err")
      res.status(500).send("something went wrong")
    } else if (!toy) {
      res.status(404).send()
    } else {
      if (req.body.toyName) {
        toy.toyName = req.body.toyName
        console.log("took toy name from body")
      }
      if (req.body.description) {
        toy.description = req.body.description
      }
      if (req.body.age) {
        toy.age = req.body.age
      }
      if (req.body.location) {
        toy.location = req.body.location
      }
      if (req.body.category) {
        toy.category = req.body.category
      }
      if (req.body.condition) {
        toy.condition = req.body.condition
      }
      // if (req.body.url) {
      //   console.log(req.file.path)
      //  toy.url = "./" + req.file.path.substring(14)
      // }
      toy.save((err, toy) => {
        if (err) {
          console.log(err)
          res.status(500).send()
        } else {
          res.status(200).send(toy.toyName + " is updated")
          console.log(toy.toyName + " is updated")
        }
      })
    }
  })
})

module.exports = router
