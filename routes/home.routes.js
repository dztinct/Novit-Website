const router = require('express').Router()
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    res.render('index', {
        title : 'Welcome || Novit Technologies'
    })
})

router.get('/team', (req, res) => {
    res.render('team', {
        title : 'Our Team'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Us'
    })
})

router.get('/services', (req, res) => {
    res.render('services', {
        title : 'Our Services'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title : 'Contact Us'
    })
})

router.post('/email', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 25,
        secure : true,
        logger : true,
        debug : true,
        secureConnection : false,
        auth : {
            user : 'detunjinov@gmail.com',
            pass : '08139589883'
        },
        tls : {rejectAuthorized : true}
    })

    const mailOptions = {
        from : req.body.email,
        to : 'detunjinov@gmail.com',
        subject : `Message from ${req.body.email} : ${req.body.subject}`,
        text : req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
        }else{
            console.log('Email sent : ' + info.response)
            res.redirect('/contact')
        }
    })
})

module.exports = router