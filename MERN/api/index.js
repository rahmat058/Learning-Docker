const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require("./Note");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res
      .status(200)
      .json({ message: "Fetched notes successfully", data: notes });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error: error });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    const saveNote = await newNote.save();

    res
      .status(201)
      .json({ message: "Note created successfully", data: saveNote });
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error: error });
  }
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>404 | Page not found</h1>");
});

app.listen(4000, () => console.log("Server running on port 4000"));
