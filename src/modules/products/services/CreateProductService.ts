import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Products';
import ProductRepository from '../typeorm/respositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const productExists = await productRepository.findByName(name);

    if (productExists) {
      throw new AppError('This Product already existe');
    }

    const product = productRepository.create({
      name,
      price,
      quantity,
    });
    await productRepository.save(product);
    return product;
  }
}

export default CreateProductService;
