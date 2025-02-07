const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.criarProduto);
router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.buscarProdutoPorId);
router.get('/nome/:nome', produtoController.buscarProdutoPorNome);
router.put('/:id', produtoController.atualizarProduto);
router.patch('/:id', produtoController.atualizarProdutoParcial);
router.delete('/:id', produtoController.excluirProduto);
router.get('/contagem', produtoController.contarProdutos);

module.exports = router;