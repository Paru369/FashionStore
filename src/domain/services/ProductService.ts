import Product from '../entities/Product';

class ProductService {
    async createProduct(name: string, description: string, price: number, category: string) {
        const product = new Product({ name, description, price, category });
        return product.save();
    }

    async getProductById(productId: string) {
        return Product.findById(productId).exec();
    }

    async getAllProducts() {
        return Product.find().exec();
    }

    async updateProduct(productId: string, updateData: Partial<IProduct>) {
        return Product.findByIdAndUpdate(productId, updateData, { new: true }).exec();
    }

    async deleteProduct(productId: string) {
        return Product.findByIdAndDelete(productId).exec();
    }
}

export default new ProductService();