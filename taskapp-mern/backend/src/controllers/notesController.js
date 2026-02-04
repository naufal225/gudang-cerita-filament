import mongoose from "mongoose";
import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNote controller:", error);

    // Tangani error ID
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({
        message: "Invalid note ID format",
        status: "ID must be a valid MongoDB ObjectID",
      });
    }

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    const trimmedTitle = title.trim();
    const trimmedContent = title.trim();

    const newNote = new Note({
      title: trimmedTitle,
      content: trimmedContent,
    });

    const savedNote = await newNote.save();
    res
      .status(201)
      .json({ message: "Note created successfully", note: savedNote });
  } catch (error) {
    console.error("Error in createNote controller:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function editNote(req, res) {
  try {
    const { title, content } = req.body;
    const { id } = req.params.id;

    const updateData = {};

    if (title !== undefined) {
      const trimmedTitle = title.trim();

      if (trimmedTitle.length === 0) {
        return res.status(400).json({
          message: "Title cannot be empty",
        });
      }

      updateData.title = trimmedTitle;
    }

    if (content !== undefined) {
      const trimmedContent = content.trim();

      if (trimmedContent.length === 0) {
        return res.status(400).json({
          message: "Content cannot be empty",
        });
      }

      updateData.content = trimmedContent;
    }

    const editedNote = await Note.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!editedNote) return res.status(404).json({ message: "Not found" });

    res
      .status(200)
      .json({ message: "Note edited successfully", note: editedNote });
  } catch (error) {
    console.error("Error in editNote controller:", error);

    // Tangani error ID
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({
        message: "Invalid note ID format",
        status: "ID must be a valid MongoDB ObjectID",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Note ID is required",
      });
    }

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller:", error);

    // Tangani error ID
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({
        message: "Invalid note ID format",
        status: "ID must be a valid MongoDB ObjectID",
      });
    }

    res.status(500).json({ message: "Internal server error" });
  }
}
