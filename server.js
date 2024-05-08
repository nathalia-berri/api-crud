// ponto de entrada onde o cliente faz a requisição

//importação das rotas
//import { urlencoded } from "body-parser";
import express from "express";
import {router} from "./routes/produto_routes.js";

let server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/", router)
server.listen(3000, function() {
    console.log("Porta 3000");
})