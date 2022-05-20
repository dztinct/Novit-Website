const Message = require('../models/Message')

exports.createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body
        if(!name || !email || !message){
            res.send('Please fill in fields')
        }
        const createMessage = new Message({
            name : req.body.name,
            email : req.body.email,
            message : req.body.message,
        })
        savedMessage = await createMessage.save()
        res.status(307).redirect('/messages/success')
    } catch (error) {
        res.redirect('/messages/error')
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        Message.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.redirect('/messages/error!')
    }
}