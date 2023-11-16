import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signUp(createUserDto);
  }
}
