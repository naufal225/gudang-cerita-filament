import express from "express";
import { 
    createNote,
    deleteNote, 
    editNote, 
    getAllNotes, 
    getNote 
} from "../controllers/notesController.js";

import validateNoteRequest from "../middleware/validateNoteRequest.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", validateNoteRequest ,getNote);

router.post("/", validateNoteRequest, createNote);

router.put("/:id", validateNoteRequest, editNote);

router.delete("/:id", validateNoteRequest, deleteNote);

export default router;