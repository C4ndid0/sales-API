import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customers';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async fingByName(name: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: { name },
    });
    return customer;
  }

  public async findByid(id: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: { id },
    });
    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.findOne({
      where: { email },
    });
    return customer;
  }
}

export default CustomersRepository;
