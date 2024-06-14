const { Categoria } = require('../models');

module.exports = class CategoriaController {
    // mostrar todos os categorias
    static async showCategoria(req, res) {
        try {
            const categorias = await Categoria.findAll();
            res.status(200).json({categorias});
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // mostrar categoria por id
    static async showOneCategoria(req, res) {
        try {
            const id = req.params.id
            const categoria = await Categoria.findByPk(id);
            res.status(200).json({categoria});
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // criar nova categoria
    static async createCategoria(req, res) {
        try {
            const { nome_categoria } = req.body;

            const nova_categoria = await Categoria.create({
                nome_categoria: nome_categoria
            })

            res.status(200).json({response: "Categoria criada com sucesso"})
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // atualizar categoria
    static async updateCategoria(req, res) {
        try {
            const categoriaId = req.params.id;
            const categoria = Categoria.findByPk(categoriaId);
            if(categoria) {
                const { nome_categoria } = req.body;
                Categoria.update({
                    nome_categoria: nome_categoria
                })
                res.status(200).json({response: "Categoria atualizada com sucesso"})
            } else {
                res.status(500).json({"Ocorreu um erro": erro.message})
            }
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
    // excluindo uma categoria
    static async deleteCategoria(req, res) {
        try {
            const categoriaId = req.params.id;
            const categoria = Categoria.findByPk(categoriaId);
            if(categoria) {
                Categoria.destroy()
            } else {
                res.status(500).json({"Ocorreu um erro": erro.message})
            }
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }

    static async findProdutosCategoria(req, res) {
        try {
            const categoriaId = req.params.id;
            const produtosCategoria = await Categoria.findByPk(categoriaId, {
                include: 'produto'
            })
            res.status(200).json({produtosCategoria});
        } catch(erro) {
            res.status(500).json({"Ocorreu um erro": erro.message})
        }
    }
}