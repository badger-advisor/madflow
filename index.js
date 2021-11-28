const app = require('./server');
const path = require('path');
const express = require('express');

// Serve app if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolv(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
