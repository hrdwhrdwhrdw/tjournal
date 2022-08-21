import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validators/UniqueValidationi';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(5, 30, { message: 'Имя должно состоять из более 5 символов' })
  fullName: string;

  @IsEmail(undefined, { message: 'Введите корректный email' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Почта уже существует',
  })
  email: string;

  @Length(5, 30, { message: 'Пароль должен состоять из более 5 символов' })
  password?: string;

  imageUrl?: string;
}
