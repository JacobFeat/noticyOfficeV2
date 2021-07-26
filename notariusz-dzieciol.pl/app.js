const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static("public"));//display css and js
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
  });

app.post('/send', (req, res) => {
    const output = `
      <p></p>
      <h3>Kontakt</h3>
      <ul>  
        <li>Imię: ${req.body.name}</li>
        <li>Nazwisko: ${req.body.surname}</li>
        <li>Telefon: ${req.body.phone}</li>
        <li>E-mail: ${req.body.email}</li>
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
        from: `"${req.body.name} ${req.body.surname}" <appektest@gmail.com>`, // sender address
        to: 'jakubk198@gmail.com', // list of receivers
        subject: 'Wiadomość z formularza na stronie', // Subject line
        text: 'Kancelaria Notarialna - Wojciech Dzięcioł', // plain text body
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

        res.sendFile(__dirname + "/success.html");
    });
});

app.listen(process.env.PORT || 8080, function(){
    console.log(`Server started on port `);
  });
  