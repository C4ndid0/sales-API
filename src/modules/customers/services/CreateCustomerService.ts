import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateCustomer } from '../domain/models/iCreateCustomer';
import { ICustomer } from '../domain/models/iCustomer';
import { ICustomerRepositry } from '../domain/repositories/iCustomersRepository';

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customerRepository: ICustomerRepositry,
  ) {}

  public async execute({ name, email }: ICreateCustomer): Promise<ICustomer> {
    const emailExist = await this.customerRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError('Email addres already used.');
    }

    const customer = await this.customerRepository.create({
      name,
      email,
    });

    return customer;
  }
}

export default CreateCustomerService;
