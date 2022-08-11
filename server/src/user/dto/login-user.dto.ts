/* eslint-disable prettier/prettier */
import { IsEmail, Min } from 'class-validator';

export class LoginUserDto {
  @IsEmail(
    undefined,
    { message: 'Введите корректный email' }
  )
  email: string;
  @Min(6, { message: 'Пароль должен состоять из более 5 символов' })
  password?: string;
}
