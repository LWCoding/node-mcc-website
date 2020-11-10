const nodemailer = require("nodemailer")
const express = require("express")

const emailRouter = express.Router()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendEmail = async (mailOptions) => {
    const res = await transporter.sendMail(mailOptions)
    return res.accepted.length > 0
}

emailRouter.post("/join", async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.aff || !req.body.hometown) {
        return res.status(400).send({error: "Form not complete!"})
    }
    var mailOptions = {
        from: process.env.EMAIL_ACCOUNT,
        to: "lwangprivate@gmail.com",
        subject: "MCC Member Form Submission",
        html: `<strong>Name:</strong> ${req.body.name}<br><strong>Email:</strong> ${req.body.email}<br><strong>Homewtown:</strong> ${req.body.hometown}<br><strong>Malaysian Affiliation:</strong> ${req.body.aff}`
    };
    const emailSent = await sendEmail(mailOptions)
    if (!emailSent) {
        return res.status(400).send({error: "The email was not able to be sent!"})
    }
    res.status(200).send({})
})

module.exports = emailRouter