import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validation =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        message: "Validation error",
      });
    }
  };
