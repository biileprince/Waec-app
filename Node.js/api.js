const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/login', authController.login);
router.get('/questions', auth, questionController.getQuestions);
router.post('/update-curriculum', auth, curriculumController.update);
router.get('/generate-pdf', auth, pdfController.generate);

module.exports = router;