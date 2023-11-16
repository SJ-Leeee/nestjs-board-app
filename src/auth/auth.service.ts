import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<void> {
    return this.authRepository.createUser(createUserDto);
  }
}
