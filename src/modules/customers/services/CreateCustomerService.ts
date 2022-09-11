import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateCustomer } from '../domain/models/iCreateCustomer';
import Customer from '../infra/typeorm/entities/Customers';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

class CreateCustomerService {
  public async execute({ name, email }: ICreateCustomer): Promise<Customer> {
    const customerRepository = await getCustomRepository(CustomersRepository);
    const emailExist = await customerRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError('Email addres already used.');
    }

    const customer = customerRepository.create({
      name,
      email,
    });

    await customerRepository.save(await customer);

    return customer;
  }
}

export default CreateCustomerService;
