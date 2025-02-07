import { Request, Response } from 'express';
import ProductService from '../../domain/services/ProductService';

class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            const { name, description, price, category } = req.body;
            const product = await ProductService.createProduct(name, description, price, category);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    }

    async getProduct(req: Request, res: Response) {
        try {
            const product = await ProductService.getProductById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            await ProductService.deleteProduct(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }
    }
}

export default new ProductController();