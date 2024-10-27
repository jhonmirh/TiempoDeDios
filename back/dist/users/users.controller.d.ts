import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.entity").User[]>;
    findOne(id: string): Promise<import("./users.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./users.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./users.entity").User>;
}
