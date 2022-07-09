import express from "express";
import FeedbackController from "./controllers/feedbackController";

const router = express.Router();

router.get("/health", (_req, res) => res.status(200).send());

router.post("/feedbacks", (req, res) => FeedbackController.create(req, res));

export default router;
