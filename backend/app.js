import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import fs from "fs";
import cors from "cors";
const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 4200;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.post('/upload', upload.single('file'), function (req, res, next) {
    res.send('Uploaded!');
  })
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);