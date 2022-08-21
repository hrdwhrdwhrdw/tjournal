import { SearchUserDto } from './dto/search-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    getProfile(req: any): Promise<import("./entities/user.entity").UserEntity>;
    upload(req: any, updateUserDto: UpdateUserDto, file: any): Promise<import("./entities/user.entity").UserEntity>;
    search(dto: SearchUserDto): Promise<{
        items: import("./entities/user.entity").UserEntity[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").UserEntity>;
}
