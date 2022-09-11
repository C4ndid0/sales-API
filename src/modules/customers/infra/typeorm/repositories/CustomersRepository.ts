import { ICustomerRepositry } from '@modules/customers/domain/repositories/iCustomersRepository';
import Customer from '../entities/Customers';
import { getRepository, Repository } from 'typeorm';
import { ICreateCustomer } from '@modules/customers/domain/models/iCreateCustomer';
import { ICustomer } from '@modules/customers/domain/models/iCustomer';

class CustomersRepository implements ICustomerRepositry {
  private ormRepository: Repository<Customer>;
  constructor() {
    this.ormRepository = getRepository(Customer);
  }
  public async create({ name, email }: ICreateCustomer): Promise<ICustomer> {
    const customer = this.ormRepository.create({ name, email });

    await this.ormRepository.save(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    await this.ormRepository.save(customer);
    return customer;
  }

  public async fingByName(name: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { name },
    });
    return customer;
  }

  public async findByid(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { id },
    });
    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { email },
    });
    return customer;
  }
}

export default CustomersRepository;
