const express = require('express');
    const libsql = require('libsql');
    const multer = require('multer');
    const upload = multer({ dest: 'uploads/' });

    const app = express();
    const port = 3001;

    const db = new libsql.Database(':memory:');

    db.exec(`
      CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        institution TEXT,
        yearOfStudy INTEGER,
        supportingDocuments TEXT,
        details TEXT
      );
    `);

    app.use(express.json());
    app.use('/uploads', express.static('uploads'));

    app.post('/api/applications', upload.single('supportingDocuments'), (req, res) => {
      const { name, email, institution, yearOfStudy, details } = req.body;
      const supportingDocuments = req.file ? req.file.filename : null;

      db.exec({
        sql: 'INSERT INTO applications (name, email, institution, yearOfStudy, supportingDocuments, details) VALUES (?, ?, ?, ?, ?, ?)',
        args: [name, email, institution, yearOfStudy, supportingDocuments, details],
      });
      res.status(201).json({ message: 'Application submitted successfully' });
    });

    app.listen(port, () => {
      console.log(\`Server listening at http://localhost:\${port}\`);
    });
