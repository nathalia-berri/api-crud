import connect from "../config/connection.js";

// objeto para troca de dados
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

produto.create = async function(req, res) {
    try {
        let produto = req.body; // vem do cliente
        let sql = "INSERT INTO produto (id_produto, nome_produto, descricao_produto, preco_produto, id_unid_med) VALUES (?,?,?,?,?)";
        let values = [produto.id_produto, produto.nome_produto, produto.descricao_produto, produto.preco_produto, produto.id_unid_med];
        let result = await con.query(sql, values); // mandar executar a inserção
        res.send({ // objeto
            status: "Insercao Efetuada com sucess!",
            result: result
        })
    } catch (e) {
        console.log("Erro..............", e);
    }
}

/*
produto.update = async function(req, res) {
    try {
        let nome = req.params.nome_produto;
        let produto = req.body;
        let sql = "UPDATE produto SET id_produto=?, nome_produto=?, descricao_produto=?, preco_produto=?, id_unid_med=?";
        let values = [produto.id_produto, produto.nome_produto, produto.descricao_produto, produto.preco_produto, produto.id_unid_med];
        let result = await con.query(sql, values);
        res.send ({
            status: "Atualizacao do : " + id_produto, nome_produto, descricao_produto, preco_produto, id_unid_med,
            result: result
        })
    } catch (e) {
        console.log("Erro..............", e);
    }
}
*/

export {produto} // exportar o objeto para o servidor
