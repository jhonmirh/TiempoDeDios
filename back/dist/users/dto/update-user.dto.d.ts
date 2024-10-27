import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    phone?: string;
    address?: string;
    country?: string;
    city?: string;
    age?: number;
    nid?: number;
}
export {};
