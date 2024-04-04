import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.get("/Contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>Phone: 0777397298</p>");
});

app.get("/About", (req, res) => {
    res.send("<h1>About me</h1><p>Full Stack Web developer</p>");
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});