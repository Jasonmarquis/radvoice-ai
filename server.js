import express from "express";
import cors from "cors";
import multer from "multer";
import OpenAI from "openai";
import fs from "fs";


const app = express();


app.use(cors());


const upload = multer({
    dest:"uploads/"
});


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});



app.get("/", (req,res)=>{

    res.send(
        "RadVoice AI server running"
    );

});



app.post(
"/transcribe",
upload.single("audio"),
async(req,res)=>{


try{


const result =
await client.audio.transcriptions.create({

model:"whisper-1",

file:
fs.createReadStream(
req.file.path
),

language:"en"

});



fs.unlinkSync(
req.file.path
);



res.json({

text:
result.text

});


}

catch(error){

console.log(error);

res.status(500).json({

error:
error.message

});

}


});



app.listen(

process.env.PORT || 3000,

()=>{

console.log(
"Server started"
);

}

);
