import Product from '../entities/Product';

class ProductRepository {
    async createProduct(data: Partial<IProduct>) {
        return Product.create(data);
    }

    async findProductById(productId: string) {
        return Product.findById(productId).exec();
    }

    async findAllProducts() {
        return Product.find().exec();
    }

    async updateProduct(productId: string, updateData: Partial<IProduct>) {
        return Product.findByIdAndUpdate(productId, updateData, { new: true }).exec();
    }

    async deleteProduct(productId: string) {
        return Product.findByIdAndDelete(productId).exec();
    }
}

export default new ProductRepository();