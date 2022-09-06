import User from '../entities/User';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async fingByName(name: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { name },
    });
    return user;
  }

  public async findByid(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { id },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { email },
    });
    return user;
  }
}

export default UsersRepository;
