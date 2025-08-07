require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const projectRoutes = require("./routes/projectRoutes");
const blogs = require("./routes/blogs");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogs);

app.post("/api/contact", async (req, res) => {
  const { name, message } = req.body;

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hammadmha42@gmail.com",
        pass: "fuel muoy tjqs lpyk",
      },
    });

    const mailOptions = {
      to: "hammadmha42@gmail.com",
      subject: "Message From Portfolio",
      text: `Name : ${name}\nMessage : ${message}`,
    };

    await transport.sendMail(mailOptions);
    res.status(200).send("Email sent Successfully");

  } catch (err) {
    console.error("Error sending email", err);
    res.status(500).send("Failed to send email");
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
