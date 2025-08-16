const PDFDocument = require('pdfkit');

exports.generatePDF = (questions) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    
    doc.fontSize(18).text('WAEC Questions', { align: 'center' });
    questions.forEach((q, i) => {
      doc.fontSize(12).text(`${i+1}. ${q.question}`);
    });
    
    doc.end();
  });
};