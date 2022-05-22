const router = require('express').Router()
const { createMessage } = require('../controllers/messagesController')
const Message = require('../models/Message')

router.post('/create-message', createMessage)

router.get('/success', (req, res) => {
    res.render('success', {
        title : 'Successful'
    })
})

router.get('/error', (req, res) => {
    res.render('error', {
        title : 'Error!'
    })
})

router.get('/allmessages', async (req, res) => {
    const allMessages = await Message.find().sort({_id : -1})
    res.render('messages', {
        title : 'Messages',
        data : allMessages
    })
})

router.get('/view/:id', async (req, res) => {
    try {
        const singleMessage = await Message.findById(req.params.id)
    res.render('singleMessage', {
        title : 'Message',
        data : singleMessage
    })
    } catch (error) {
        res.redirect('../error!')
}})

router.delete('/delete/:id', async (req, res) => {
    await Message.findByIdAndDelete(req.params.id)
    res.redirect('../allMessages')
})

module.exports = router