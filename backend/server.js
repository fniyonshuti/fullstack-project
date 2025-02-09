import express from "express"
import user from "./example.js";
import cors from "cors"
import connectDB from "./config/db.js";
const app = express();

app.use(cors())
app.get("/api/user", (req, res) => {
  res.send(user);
});
app.post("/api/user",(req,res) =>{
  const newElement = req.body;
  user.push(newElement);
  res.send(user);
});


connectDB();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
