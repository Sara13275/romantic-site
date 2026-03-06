require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Email transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route to send email
app.post("/login", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        console.log("Sending email to:", email);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "You Have Something Special 🤍",
            html: `
<div style="max-width:600px;margin:auto;font-family:Arial;padding:20px;text-align:center;background:#fff0f5;border-radius:10px;">
    <h1 style="color:#ff4d6d;">A Special Message For You 💌</h1>

    <p style="font-size:16px;color:#444;">
        I made something just for you.
        Click below to see it 🤍
    </p>

    <a href="https://romantic-site-u9md.onrender.com/page1.html"
       style="display:inline-block;
              margin-top:20px;
              padding:12px 25px;
              background:#ff4d6d;
              color:white;
              text-decoration:none;
              border-radius:25px;
              font-size:16px;">
        Open My Heart ❤️
    </a>

    <p style="margin-top:30px;font-size:12px;color:#999;">
        Sent with love 💕
    </p>
</div>
`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: "Email sent successfully 🤍" });

    } catch (error) {
        console.error("Mail error:", error);
        res.status(500).json({ message: "Something went wrong ❌" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});