import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return this.authRepository.createUser(createUserDto);
  }
}
