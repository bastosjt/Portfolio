const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});