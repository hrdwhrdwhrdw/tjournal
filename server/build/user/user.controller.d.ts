/// <reference types="multer" />
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { SearchUserDto } from './dto/search-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    getProfile(req: any): Promise<import("./entities/user.entity").UserEntity>;
    update(req: any, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    upload(req: any, updateUserDto: UpdateUserDto, file: Express.Multer.File): import("rxjs").Observable<{
        imagePath: string;
    }>;
    search(dto: SearchUserDto): Promise<{
        items: import("./entities/user.entity").UserEntity[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
}
