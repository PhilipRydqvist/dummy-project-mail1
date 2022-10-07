

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const sgMail = require("@sendgrid/mail");

const app = express();

sgMail.setApiKey('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')

app.use(cors());

/* // create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); */

app.get("/send-email", (req, res) => {
  res.send("welcome to the Sendgrid Email Server");
})

app.get("/send-email", (req, res) => {
  //Get Variables from query string
  
  const { recipient, from, subject, text, html } = req.query;

  //Sendgrid Requirements
  const msg = {
    to: recipient,
    from: from="krukmakeriet.proj@gmail.com",
    subject: subject="Handla gärna hos oss igen!",
    text: text="Tack för ditt köp!",
    html: html="<h1>Hej! Tack för dit tköp!</h1>",
  }

  sgMail.send(msg)
  .then((msg) => console.log(text))
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


/* const sgMail = require("@sendgrid/mail")

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'krukmakeriet.proj@gmail.com', // Change to your verified sender
  subject: 'Krukmakeriet',
  text: 'Tack för att du handlade och välkommen tillbaka!',
  html: '<strong>Med vänliga hälsningar från oss på krukmakeriet!</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  }) */