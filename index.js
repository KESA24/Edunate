
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const projectRoute = require("./routes/projects");
const categoryRoute = require("./routes/categories");
const donorRoute = require("./routes/donor");

// Upload images
const multer = require("multer");

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(console.log('Connected to Edunate Database'))
  .catch((err)=> console.log(err));


const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
      cb(null, 'images')
    },
    filename: (req,file,cb) =>{
      cb(null, req.body.name);
    },
  })
  
const upload = multer({storage:storage});
  app.post('/edunate/upload', upload.single('file'), (req,res) =>{
    res.status(200).json("File uploaded successfully");
  })

app.use("/edunate/auth" , authRoute);
app.use("/edunate/user",userRoute );
app.use("edunate/projects", projectRoute);
app.use("/edunate/categories", categoryRoute);
app.use("edunate/donate", donorRoute);


app.listen("5000", ()=>{
    console.log("Backend is running")
})