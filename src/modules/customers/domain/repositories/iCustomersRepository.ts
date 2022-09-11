import { ICreateCustomer } from '../models/iCreateCustomer';
import { ICustomer } from '../models/iCustomer';

export interface ICustomerRepositry {
  fingByName(name: string): Promise<ICustomer | undefined>;
  findByid(id: string): Promise<ICustomer | undefined>;
  findByEmail(email: string): Promise<ICustomer | undefined>;
  create(data: ICreateCustomer): Promise<ICustomer>;
  save(customer: ICustomer): Promise<ICustomer>;
}
