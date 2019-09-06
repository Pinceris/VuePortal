var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'm.kondrasovas@gmail.com',
        pass: 'Hitmen1997'
    }
});
var mailOptions = {
    from: 'm.kondrasovas@gmail.com',
    to: 'matas.ko8483@go.kauko.lt',
    subject: 'It Worked! NodeJS',
    text: 'hello, I am sending this via NodeJS, backend is cool!!!'
};
transporter.sendMail(mailOptions,function (error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }

});