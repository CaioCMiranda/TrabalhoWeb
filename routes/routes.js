const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');
const ProdutoController = require('../controllers/ProdutoController');

router.get('/', (req, res) => {
    res.status(200).send("Rota inicial");
})

// Categoria
router.get('/categoria', CategoriaController.showCategoria);
router.get('/categoria/:id', CategoriaController.showOneCategoria);
router.post('/categoria', CategoriaController.createCategoria);
router.put('/categoria/:id', CategoriaController.updateCategoria);
router.delete('./categoria/:id', CategoriaController.deleteCategoria);
router.get('/categoria/:id/produtos', CategoriaController.findProdutosCategoria);

// Produto
router.get('/produto', ProdutoController.showProdutos);
router.get('/produto/:id', ProdutoController.showOneProduto);
router.post('/produto', ProdutoController.createProduto);
router.put('/produto/:id', ProdutoController.updateProduto);
router.delete('./produto/:id', ProdutoController.deleteProduto);

module.exports = router