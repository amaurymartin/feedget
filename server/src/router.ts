import express from "express";

const router = express.Router();

router.get("/health", (_req, res) => res.status(204).send());

export default router;
