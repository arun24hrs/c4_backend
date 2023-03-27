const express = require("express");
const mongoose = require("mongoose");
const {connect} = require("./server/connection");
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/posts.route");
const checker = require("./middleware/auth.check");
const app = express();
app.use(express.json());

app.use("/users", authRouter);
app.use("/posts",checker)
app.use("/posts", postRouter);


app.listen(process.env.PORT, async()=>{
    await connect;
    // await mongoose.connect(process.env.CONNECTOR)
    console.log("Connected to server");
    // console.log(`Sever is on port ${env.process.port}`)
    console.log(`Server running on ${process.env.PORT}`);
})
