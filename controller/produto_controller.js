import connect from "../config/connection.js";

let produto = {};
const con = await connect(); // conexão assíncrona

produto.all = async function (req, res) // res = resign (entregar) | método do express
{
    try {
        let produtos = await con.query("SELECT * FROM produto");
        res.send(produtos); // endpoint, envia o que foi selecionado | método do express
    } catch (e) {
        console.log(" erro consulta...", e);
    }
}

export {produto} // exportar o objeto