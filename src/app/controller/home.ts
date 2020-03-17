import { Context, inject, controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    console.log(this.ctx);
    this.ctx.body = `Welcome to midwayjs!`;
  }
}
