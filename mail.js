const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'detunjinov@gmail.com',
        pass : '08139589883'
    }
})

let details = {
    from : 'detunjinov@gmail.com',
    to : 'dewalenov@gmail.com',
    Subject : 'Testing nodemiler',
    text : 'This is the body of the message'
}

mailTransporter.sendMail(details, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Sent')
})