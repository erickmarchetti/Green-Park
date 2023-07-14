import { Request, Response, NextFunction } from "express"
import AppError from "../errors/appError"
import { MulterError } from "multer"

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message
    })
  }

  if (err instanceof MulterError) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: `Error in the ${err.field} field. ${err.message}`
    })
  }

  console.error(err)

  return res.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error"
  })
}

export default errorMiddleware
