const router = require("express").Router()
const verify = require("./verifyToken")
const Notification = require("../model/Notification")
const ObjectId = require("mongodb").ObjectID


// request
router.post("/request/:id", async (req, res, next) => {
    // send a notification
    const notify = new Notification({
        userID: ObjectId(req.params.id),
        receiverID: ObjectId(req.body.receiverID),
        senderID: ObjectId(req.params.id),
        clicked: false
    })
    try {
        const sendNotify = await notify.save()
        res.send("your request has been sent !")
        console.log(toy.toyName + " created")
    } catch (err) {
        res.status(400).send("something went wrong")
    }
})

router.get("/all", verify, async (req, res) => {
    await Notification.find({}).exec(function (err, notifications) {
        if (err) {
            console.log(err)
        } else {
            res.send(notifications)
        }
    })
})

module.exports = router
