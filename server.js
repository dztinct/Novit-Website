const express = require('express')
const app = express()
const homeRoutes = require('./routes/home.routes')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')

require('dotenv').config()

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://localhost:27017/NovitTechnologies', {
    useNewUrlParser : true,
}, () => {
    console.log('Database connected')
})

app.use(express.static(path.join(__dirname, 'assets')))

app.use('/', homeRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`App running on port ${PORT}`)})