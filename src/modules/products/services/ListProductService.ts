import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Products';
import ProductRepository from '../typeorm/respositories/ProductsRepository';
import RedisCaches from '@shared/cache/RedisCache';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const redisCache = new RedisCaches();

    let products = await redisCache.recover<Product[]>(
      'api-vendas-PRODUCT_LIST',
    );

    if (!products) {
      products = await productsRepository.find();

      await redisCache.save('api-vendas-PRODUCT_LIST', products);
    }
    return products;
  }
}

export default ListProductService;
