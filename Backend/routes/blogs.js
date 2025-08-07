// routes/blogs.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // newest first
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

module.exports = router;
