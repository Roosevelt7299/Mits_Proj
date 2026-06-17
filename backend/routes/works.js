const express = require("express");
const router = express.Router();
const {
  getWorks,
  getWork,
  createWork,
  updateWork,
  deleteWork,
  seedWorks,
} = require("../controllers/worksController");

router.get("/", getWorks);
router.post("/seed", seedWorks); // dev only — remove in production
router.get("/:id", getWork);
router.post("/", createWork);
router.put("/:id", updateWork);
router.delete("/:id", deleteWork);

module.exports = router;
