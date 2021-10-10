const express = require("express");
const PORT = process.env.PORT || "5000";
const path = require("path");
// creating a new app instance through express
const app = express();

// creating a route for page serving
app.use("/", express.static(path.join(__dirname, 'page-serving/build')));

app.get("/profile", (req, res)=>{
    res.send("welcome to your profile")
});

app.post("/profile", (req, res)=>{
    res.send("created your profile successfully")
});

app.put("/profile", (req, res)=>{
    res.send("Updating your profile")
});

app.delete("/profile", (req, res)=>{
    res.send("Are you sure you want to delete your profile")
});

// app.get("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "./page-serving/public/index.html"))
// })

app.listen(PORT, ()=>{
    console.log(`your app is live on HTTP://LocalHost${PORT}`)
})