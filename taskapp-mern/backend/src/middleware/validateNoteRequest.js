import mongoose from "mongoose";

export default function validateNoteRequest(req, res, next) {
    const {title, content} = req.body;
    const {id} = req.params;

    // Validasi jika kirim ID
    if(req.params.id && !mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Invalid note ID format",
            error: "ID must be a valid MongoDB ObjectID"
        });
    }

    // Validasi jika method POST
    if(req.method === 'POST') {
        if(!title || !content) {
            return res.status(400).json({
                message: "Title and content are required",
                status: 'Missing required data'
            });
        }

        if(typeof title !== 'string' || typeof content !== 'string') {
            return res.status(400).json({
                message: "Title and content must be strings",
                status: "Invalid data type"
            });
        }

        if(title.trim().length === 0 || content.trim().length === 0) {
            return res.status(400).json({
                message: "Title and content cannot be empty",
                status: "Empty flieds"
            });
        }
    }

    // Validasi method PUT
    if(req.method === 'PUT') {
        if((title !== undefined && typeof title !== 'string') ||
            (content !== undefined && typeof content !== 'string')) {
                return res.status(400).json({
                    message: "Title and content must be strings",
                    status: "Invalid data type"
                });
            }

        if((title !== undefined && title.trim().length === 0) ||
            (content !== undefined && content.trim().length === 0)) {
                return res.status(400).json({
                    message: "Title and content cannot be empty",
                    status: "Empty fields"
                });
            }

        // Memastikan minimal satu field harus diupdate
        if(title == undefined && content == undefined) {
            return res.status(400).json({
                message: "At least one field must be provided",
                status: "No update data"
            });
        }
    }

    next();
}