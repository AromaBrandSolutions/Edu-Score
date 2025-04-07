const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Batch deletion route
router.delete('/:batchId', async (req, res) => {
  try {
    // 1. Sanitize and validate batch ID
    const batchId = req.params.batchId.replace(/[^a-zA-Z0-9\-_]/g, '');
    if (!batchId) {
      return res.status(400).json({ error: 'Invalid batch ID format' });
    }

    // 2. Perform deletion
    const result = await Student.deleteMany({ 
      batch: batchId 
    });

    // 3. Handle response
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'No students found for this batch',
        batch: batchId
      });
    }

    res.json({
      message: `Successfully deleted ${result.deletedCount} students`,
      batch: batchId,
      deletedCount: result.deletedCount
    });

  } catch (error) {
    console.error(`Batch deletion error (${batchId}):`, error);
    res.status(500).json({ 
      error: 'Batch deletion failed',
      message: error.message 
    });
  }
});

module.exports = router;