const express = require('express');
const router = express.Router();
const Paper = require('../models/Paper');

// Get papers by department
router.get('/', async (req, res) => {
  const department = req.query.department;
  try {
    const papers = department
      ? await Paper.find({ department }) // Filter papers by department
      : await Paper.find(); // Return all papers if no department is specified
    res.json(papers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single paper by ID
router.get('/:id', async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }
    res.json(paper);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
