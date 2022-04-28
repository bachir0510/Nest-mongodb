import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/domain/dto/auth/login.dto';
import { RegsisterDTO } from 'src/domain/dto/auth/register.dto';
import { LoginAuth, RegisterAuth } from 'src/domain/use_cases';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerAuth: RegisterAuth,
    private readonly loginAuth: LoginAuth,
  ) {}

  @Post('register')
  async resgister(@Body() userObject: RegsisterDTO) {
    return this.registerAuth.call(userObject);
  }

  @Post('login')
  async login(@Body() useObject: LoginDTO) {
    return this.loginAuth.call(useObject);
  }
}
