import { NextFunction, Request, Response } from "express";
import { SecretNotFoundInRepositoryError } from "../../../domain/models/errors/SecretNotFoundInRepositoryError";
import { SecretTooShortError } from "../../../domain/models/errors/SecretTooShortError";
import { UrlIdTooShortError } from "../../../domain/models/errors/UrlIdTooShortError";
import { ValidationError } from "../controllers/ValidationError";

export function errorHandler(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction) {

    if (error instanceof ValidationError ||
        error instanceof UrlIdTooShortError ||
        error instanceof SecretTooShortError) {
        response.status(400).json({
            title: error.name,
            message: error.message,
        });
    } else if (error instanceof SecretNotFoundInRepositoryError) {
        response.status(404).json({
            title: error.name,
            message: error.message,
        });
    } else {
        response.status(500).json({
            title: "InternalServerError",
            message: "Something went wrong",
        });
    }
}
