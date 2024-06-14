const { Produto } = require('../models');

module.exports = class ProdutoController {
    // mostrar todos os produtos
    static async showProdutos(req, res) {
        try {
            const produtos = await Produto.findAll({
                include: 'categoria'
            });
            res.status(200).json({produtos});
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // mostrar produto por id
    static async showOneProduto(req, res) {
        try {
            const id = req.params.id
            const produto = await Produto.findByPk(id, {
                include: 'categoria'
            });
            res.status(200).json({produto});
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // criar novo produto
    static async createProduto(req, res) {
        try {
            const { nome, quantidade, valor, idCategoria } = req.body;

            const novo_produto = await Produto.create({
                nome: nome,
                quantidade: quantidade,
                valor: valor,
                idCategoria: idCategoria
            })

            res.status(200).json({response: "Produto criado com sucesso"})
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // atualizar produto
    static async updateProduto(req, res) {
        try {
            const produtoId = req.params.id;
            const produto = Produto.findByPk(produtoId);
            if(produto) {
                const { nome, quantidade, valor, idCategoria } = req.body;
                produto.update({
                    nome: nome,
                    quantidade: quantidade,
                    valor: valor,
                    idCategoria: idCategoria
                })
                res.status(200).json({response: "Produto atualizado com sucesso"})
            } else {
                res.status(500).json({"Ocorreu um erro": erro.message})
            }
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // excluindo um produto
    static async deleteProduto(req, res) {
        try {
            const produtoId = req.params.id;
            const produto = Produto.findByPk(produtoId);
            if(produto) {
                produto.destroy()
            } else {
                res.status(500).json({"Ocorreu um erro": erro.message})
            }
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
}