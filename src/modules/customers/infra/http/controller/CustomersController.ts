import { Request, Response } from 'express';
import CreateCustomerService from '../../../services/CreateCustomerService';
import DeleteCustomerService from '../../../services/DeleteCustomerService';
import ListCustomerService from '../../../services/ListCustomerService';
import ShowCustomerService from '../../../services/ShowCustomerService';
import UpdateCustomService from '../../../services/UpdateCustomerService';

export default class CustomerController {
  /**
   * async list
   */
  public async index(req: Request, res: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();
    return res.json(customers);
  }
  /**
   * async show
   */
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showCustomer = new ShowCustomerService();

    const customer = await showCustomer.execute({ id });
    return res.json(customer);
  }
  /**
   * async create
   */
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name,
      email,
    });
    return res.json(customer);
  }
  /**
   * async update
   */
  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const { id } = req.params;

    const updateCustomer = new UpdateCustomService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });
    return res.json(customer);
  }

  /**
   * async delete
   */
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ id });
    return res.json([]);
  }
}
