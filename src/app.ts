import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { ProductController } from './controllers/ProductController';
import { ProductService } from './services/ProductService';
import { ProductRepository } from './repositories/ProductRepository';
import { ProductModel } from './models/ProductModel';
import { MongoDB } from './infra/MongoDB';


const app = express();
const port = 3000;


app.use(bodyParser.json());

const mongoDB = new MongoDB();
mongoDB.connect();

const productRepository = new ProductRepository(mongoDB);


const productService = new ProductService(productRepository);

const productController = new ProductController(productService);

app.post('/products', (req: Request, res: Response) => {
  productController.createProduct(req, res);
});

app.get('/products/:id', (req: Request, res: Response) => {
  productController.getProduct(req, res);
});

app.get('/products', (req: Request, res: Response) => {
  productController.getAllProducts(req, res);
});

app.put('/products/:id', (req: Request, res: Response) => {
  productController.updateProduct(req, res);
});

app.delete('/products/:id', (req: Request, res: Response) => {
  productController.deleteProduct(req, res);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

