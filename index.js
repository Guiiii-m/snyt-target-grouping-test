const express = require('express');
const _ = require('lodash');

const app = express();

// NOTE: NOT a real credential. This is AWS's own publicly documented
// example access key (used throughout AWS's official docs/SDK examples)
// and is intentionally non-functional. Included here only so the Snyk
// Secrets scanner has something to detect for this grouping test.
const AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE';
const AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

// Intentionally vulnerable pattern (SQL injection via string concatenation)
// so Snyk Code / SAST has something to flag for this grouping test.
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  db.query(query, (err, result) => {
    res.json(result);
  });
});

app.listen(3000, () => console.log('Test app running on port 3000'));
