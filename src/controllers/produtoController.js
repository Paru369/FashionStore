const Produto = require('../models/Produto');


exports.criarProduto = async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        await novoProduto.save();
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};


exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

exports.buscarProdutoPorId = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
};

exports.buscarProdutoPorNome = async (req, res) => {
    try {
        const produtos = await Produto.find({ nome: new RegExp(req.params.nome, 'i') });
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

exports.atualizarProduto = async (req, res) => {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produtoAtualizado) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};


exports.atualizarProdutoParcial = async (req, res) => {
    try {
        const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produtoAtualizado) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

exports.excluirProduto = async (req, res) => {
    try {
        const produtoRemovido = await Produto.findByIdAndDelete(req.params.id);
        if (!produtoRemovido) return res.status(404).json({ error: 'Produto não encontrado' });
        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir produto' });
    }
};


exports.contarProdutos = async (req, res) => {
    try {
        const total = await Produto.countDocuments();
        res.status(200).json({ total });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao contar produtos' });
    }
};
