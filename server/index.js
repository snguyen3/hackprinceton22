const express = require('express');

const PORT = process.env.PORT || 3000;

// create a new express server
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
    }); 