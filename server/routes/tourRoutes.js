import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "show all tours" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Show tour ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Update tour ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Delete tour ${req.params.id}` });
});

export { router as tourRouter };
