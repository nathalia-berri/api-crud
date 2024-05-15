import express from "express";
import {produto} from "../controller/produto_controller.js";

let router = express.Router();
router.get('/produto', produto.all); // get = método que pega os dados
router.post('/produto', produto.create);
router.put('/produto/:nome_produto', produto.update)
//definir as demais rotas para o restante do CRUD da API

export {router};