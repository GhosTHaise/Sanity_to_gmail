const express  = require("express");
const schedule = require("node-schedule");
const {initScheduleJobs} = require("./schedule");

const app = express(),
      PORT = process.env.PORT || 4000;

initScheduleJobs({
    sec : "*/3"
});

app.listen(PORT,()=>{
    console.log(`app start on PORT : ${PORT} -> http://localhost:${PORT}`)
})