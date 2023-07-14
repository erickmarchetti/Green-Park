import multer from "multer"
import AppError from "../errors/appError"

const csvStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/csv")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const csvUploadMiddleware = multer({
  storage: csvStorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "text/csv") {
      return cb(new AppError(400, "Must be a csv file"))
    }

    cb(null, true)
  }
})

export default csvUploadMiddleware
