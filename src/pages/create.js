import React, { useRef, useState } from 'react';
import axios from 'axios';


function FileUpload() {
    const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }
    const uploadFile = () => {
        const formData = new FormData();        formData.append('file', file); // appending file
        axios.post('http://localhost:8000/upload', formData, {
            
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                     path: 'http://localhost:8000' + res.data.path
                   })
        }).catch(err => console.log(err))}
    return (
        <div>
            
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />                <div className="progessBar" style={{ width: progress }}>
                </div>
                <button onClick={uploadFile} className="upbutton">                   Upload
                </button>
            <hr />
            </div>
        </div>
    );
}
export default FileUpload;

//Simple backend to save yaml file to json format
/*
const express = require('express');
const fileUpload = require('express-fileupload');
const yaml = require('js-yaml')
const fs = require('fs')
const cors = require('cors')
const app = express();

app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
// file upload api
app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;
    const output = 'output.json'
    const input = `./public/${myFile.name}`
    const obj = yaml.load(fs.readFileSync(input, {encoding: 'utf-8'}))
    fs.writeFileSync(output, JSON.stringify(obj, null, 2))
    return res.status(200).send({ msg: "File uploaded"})

})
app.listen(8000, () => {
    console.log('server is running at port 8000');
})
*/