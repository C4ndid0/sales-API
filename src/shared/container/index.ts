import { container } from 'tsyringe';
import { ICustomerRepositry } from '@modules/customers/domain/repositories/iCustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

container.registerSingleton<ICustomerRepositry>(
  'CustomerRepositiry',
  CustomersRepository,
);
