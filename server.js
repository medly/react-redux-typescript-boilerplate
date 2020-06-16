const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  app.use(express.static(path.resolve(__dirname,'./dist')));
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, './dist/index.html'))
  })
}

app.listen(PORT, console.log(`Server running on port ${PORT}`));
