import { IsEmail, Min } from 'class-validator';

export class CreateUserDto {
  @Min(6, { message: 'Имя должно состоять из более 5 символов' })
  fullName: string;
  @IsEmail(
    { requireDisplayName: true },
    { message: 'Введите корректный email' }
  )
  email: string;
  @Min(6, { message: 'Пароль должен состоять из более 5 символов' })
  password?: string;
}
