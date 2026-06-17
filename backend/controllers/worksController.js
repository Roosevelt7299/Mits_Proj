const Work = require("../models/Work");

// @desc   Get all works
// @route  GET /api/works
// @access Public
const getWorks = async (req, res) => {
  try {
    const { category, featured } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (featured) filter.featured = featured === "true";

    const works = await Work.find(filter).sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: works.length, data: works });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc   Get single work
// @route  GET /api/works/:id
// @access Public
const getWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ success: false, message: "Work not found" });
    }
    res.status(200).json({ success: true, data: work });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc   Create a work
// @route  POST /api/works
// @access Private
const createWork = async (req, res) => {
  try {
    const work = await Work.create(req.body);
    res.status(201).json({ success: true, data: work });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc   Update a work
// @route  PUT /api/works/:id
// @access Private
const updateWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!work) {
      return res.status(404).json({ success: false, message: "Work not found" });
    }
    res.status(200).json({ success: true, data: work });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc   Delete a work
// @route  DELETE /api/works/:id
// @access Private
const deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) {
      return res.status(404).json({ success: false, message: "Work not found" });
    }
    res.status(200).json({ success: true, message: "Work deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @desc   Seed sample works (dev only)
// @route  POST /api/works/seed
// @access Private
const seedWorks = async (req, res) => {
  try {
    await Work.deleteMany();
    const sample = [
      { title: "Kumari – Animated Film", tag: "Film", category: "film", order: 1, featured: true, imageUrl: "https://placehold.co/220x300/1a1a1a/FFB800?text=Kumari" },
      { title: "Character Art", tag: "Art", category: "character", order: 2, imageUrl: "https://placehold.co/220x300/1a1a1a/FFB800?text=Character" },
      { title: "Concept & 2D Art", tag: "Concept", category: "concept", order: 3, imageUrl: "https://placehold.co/220x300/1a1a1a/FFB800?text=Concept" },
      { title: "Animation Works", tag: "Motion", category: "animation", order: 4, imageUrl: "https://placehold.co/220x300/1a1a1a/FFB800?text=Animation" },
      { title: "Background Art", tag: "BG Art", category: "background", order: 5, imageUrl: "https://placehold.co/220x300/1a1a1a/FFB800?text=Background" },
    ];
    const works = await Work.insertMany(sample);
    res.status(201).json({ success: true, count: works.length, data: works });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getWorks, getWork, createWork, updateWork, deleteWork, seedWorks };
