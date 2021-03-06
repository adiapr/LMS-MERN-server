import express from "express";
import cors from "cors";
// import { readdirSync } from "fs";
import fs from "fs";
const morgan = require("morgan");

require("dotenv").config();

// create express app
const app = express();

// apply middleware 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use((req, res, next) => {
//     console.log("This is my own middleware");
//     next();
// });

// route 
fs.readdirSync('./routes').map((r) => 
    app.use('/api', require(`./routes/${r}`))
);

// port 
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));