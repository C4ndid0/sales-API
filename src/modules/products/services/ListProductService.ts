import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Products';
import { ProductRepository } from '../typeorm/respositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const products = await productRepository.find();
    return products;
  }
}

export default ListProductService;
