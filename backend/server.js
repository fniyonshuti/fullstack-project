import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config()
const DB_URI = process.env.DB_URI;

app.use(cors());

const ExampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const userData = mongoose.model("user", ExampleSchema);


app.get("/api/user", async(req, res) => {
  try {
    
  const fetched = await userData.find();
  res.json(fetched);
  } catch (error) {
    console.log("there is error")
    
  }
  
  
});

const addUser = async () => {
  try {
    const newUser = new User({ name: "John Doe", age: 25 });
    await newUser.save();
    console.log("User Added:", newUser);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
};

addUser();
// app.post("/api/user",(req,res) =>{
//   const [name,age] = req.body;
//   user.push(newElement);
//   res.send(user);
// });

console.log(DB_URI);
const connectDB = async () => {

  try {
    await mongoose.connect(DB_URI);
    console.log("DB CONNECTED SUCCESSFULLY!!")
    
  } catch (error) {
    console.error("SOMETHING WENT WRONG TRYING TO CONNECT DB ..." + error)
  }
}

connectDB();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
