/// <reference types="multer" />
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';
export declare class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findById(id: any): Promise<UserEntity>;
    findByCond(cond: LoginUserDto): Promise<UserEntity>;
    update(id: number, dto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    upload(id: number, dto: UpdateUserDto, file: Express.Multer.File): Promise<UserEntity>;
    search(dto: SearchUserDto): Promise<{
        items: UserEntity[];
        total: number;
    }>;
}
