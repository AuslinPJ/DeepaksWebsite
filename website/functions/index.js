

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

const APP_NAME = 'Queries from Web';
const doc_email = 'drdeepaknagercoil@gmail.com'; //change

exports.sendMsg = functions.database.ref('/messages/{pushId}')
    .onWrite(event => {

        const message = event.data.val();
        return sendWelcomeEmail(message.name, message.message, message.email);

    });

function sendWelcomeEmail(name, msg, email) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: doc_email
    };


    mailOptions.subject = 'query from ' + email;
    mailOptions.text =  msg;
    return mailTransport.sendMail(mailOptions).then(() => {
        console.log('msg sent:', msg);
    });
}

