import { getCustomRepository } from 'typeorm';
import Customer from '../infra/typeorm/entities/Customers';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customers = await customerRepository.find();

    return customers;
  }
}

export default ListCustomerService;
