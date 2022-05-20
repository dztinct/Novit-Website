const router = require('express').Router()

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

module.exports = router