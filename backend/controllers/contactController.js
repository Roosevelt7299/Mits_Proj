const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// @desc   Submit contact form
// @route  POST /api/contact
// @access Public
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message });

    // Send email notification (optional — works if EMAIL_USER/PASS are set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use Gmail App Password
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `📬 New Message: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailErr) {
        // Don't fail the request if email fails
        console.warn("Email send failed:", emailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error("submitContact error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// @desc   Get all contact messages (admin)
// @route  GET /api/contact
// @access Private (add auth middleware later)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc   Mark message as read
// @route  PATCH /api/contact/:id/read
// @access Private
const markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { submitContact, getContacts, markAsRead };
