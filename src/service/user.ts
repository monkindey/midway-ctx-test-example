import { Context, provide, inject } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interface';

@provide('userService')
export class UserService implements IUserService {
  @inject() ctx: Context;
  async getUser(options: IUserOptions): Promise<IUserResult> {
    console.log(this.ctx);
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
