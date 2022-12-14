
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Init app and port
const app = express();
const PORT = process.env.PORT || 8080; 

// Set up body parsing, static, and middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("docs"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// Start server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));