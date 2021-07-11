const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static("public"));//display css and js
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post('/send', (req, res) => {
    const output = `
      <p></p>
      <h3>Kontakt</h3>
      <ul>  
        <li>Osoba: ${req.body.person}</li>
        <li>e-mail: ${req.body.email}</li>
      </ul>
      <h3>Wiadomość</h3>
      <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'appektest@gmail.com', // generated ethereal user
            pass: 'Andrzej123'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"${req.body.person}" <appektest@gmail.com>`, // sender address
        to: 'jakubk198@gmail.com', // list of receivers
        subject: 'Wiadomość z formularza na stronie', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.sendFile(__dirname + "/error.html");
            // return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // res.render('contact', { msg: 'Email has been sent' });
        res.sendFile(__dirname + "/success.html");
    });
});

app.get("/send", function(req, res){
    res.sendFile(__dirname + "/success.html");
  });

app.listen(process.env.PORT || 4000, function () {
    console.log(`Server started on port `);
});