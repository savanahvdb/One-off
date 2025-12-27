<<<<<<< HEAD
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("One-Off is live 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
=======
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("One-Off is live 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 3e744f73df501f260a39ef2aa884fc3ee5ea2066
