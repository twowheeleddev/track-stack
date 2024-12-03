import { Router } from "express";
import multer from "multer";
import {
  organizeFilesController,
  organizeDirectoryController,
} from "../controllers/fileController.js";

const router = Router();
const upload = multer({ dest: "uploads/" }); // Temporary upload folder

// Route to handle file uploads
router.post("/organize", upload.array("files"), organizeFilesController);

// Route to handle directory organization
router.post("/organize-directory", organizeDirectoryController);

export default router;
