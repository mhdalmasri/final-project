const router = require("express").Router()
const verify = require("./verifyToken")
const Notification = require("../model/Notification")
const ObjectId = require("mongodb").ObjectID


// request
router.post("/request/:id", async (req, res, next) => {
    // send a notification
    const id = req.body.userID
    console.log(id)
    const notify = new Notification({
        userID: ObjectId(id),
        receiverID: ObjectId(req.body.receiverID),
        senderID: ObjectId(id),
        toyID: ObjectId(req.body.toyID),
        receiver: req.body.receiver,
        sender: req.body.sender,
        messages: [
            {
                sender: req.body.sender,
                text: req.body.message
            }
        ]
    })
    try {
        const sendNotify = await notify.save()
        res.send("your request has been sent !")
        console.log(" created")
    } catch (err) {
        console.log(err)
        // res.status(400).send("something went wrong")
    }
})
// send message

router.put("/messages/add/:id", async (req, res) => {
    // get notification's id
    const id = req.params.id
    // find it and insert the message
    await Notification.findById({ _id: id }, function (err, notification) {
        if (err) {
            console.log(err)
        }else if (req.body.message) {
            notification.date = new Date
            notification.clicked = false
            notification.messages = notification.messages.concat([{
                sender: req.body.username,
                text: req.body.message
            }])
            console.log(notification.messages)
        }
        notification.save((err, notification) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send("message has been sent")
            }
        })
    })
})

// edit clicked property
router.put("/messages/clicked/:id", async (req, res) => {
    // get notification's id
    const id = req.params.id
    // find it and insert the message
    await Notification.findById({ _id: id }, function (err, notification) {
        if (err) {
            console.log(err)
        }else {
            notification.clicked = true
        }
        notification.save((err, notification) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send("message has been read")
            }
        })
    })
})

// delete request

router.delete("/requests/delete/:id", async(req, res)=>{
    const id = req.params.id
    await Notification.findByIdAndDelete(id, (err, notification)=>{
        if(err){
            console.log(err)
        }

        res.send("it's deleted")
    })
})

// get all notifications
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
