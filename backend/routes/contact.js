const express = require("express");
const router = express.Router();
const {
  submitContact,
  getContacts,
  markAsRead,
} = require("../controllers/contactController");

router.post("/", submitContact);
router.get("/", getContacts);
router.patch("/:id/read", markAsRead);

module.exports = router;
