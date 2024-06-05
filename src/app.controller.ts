import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiHeader(
    {
      name: 'testHeader',
      description: 'test description',
      enum: ['an enum'],
      schema: {
        default: 'default param'
      }
    }
  )
  getHello(
    @Headers('testHeader') randomString: string,
  ): string {
    return this.appService.getHello();
  }
}
