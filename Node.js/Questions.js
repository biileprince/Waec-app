const questionSchema = new mongoose.Schema({
    subject: String,
    program: String,
    level: String,
    year: Number,
    question: String,
    answer: String,
    explanation: String,
    curriculumVersion: String,
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Question', questionSchema);