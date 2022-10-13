import "reflect-metadata";
import express from "express";
import "./database"

const app = express();

app.get("/", (request, response) => {
    return response.json({Name:"Hello World - NLW4"})
});

app.post("/", (request, response) => {
    return response.json({
        message: "NLW4"
    });
})

app.listen(3000, () => {
    console.log("Server is running!");
})