const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { adduser, selectAlluser } = require("./user");

app.get("/users", async ( req, res) => 

{

    const list = await selectAlluser();
    res.json(list);

}

);

app.post("/add-user", async (req, res) =>

{


    const message = req.body;
    await adduser(message);

    res.json({message:"user successfully in database"});
});

app.listen(4000, () => console.log("server started successfully"));