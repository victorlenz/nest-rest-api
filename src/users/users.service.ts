import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersModel } from 'src/Database/Models/Users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersModel) private readonly userRepository: Repository<UsersModel>
    ) {
        
    }

    async create(data: any){
        return this.userRepository.save(data)
    }

    async findOne(condition: Object): Promise<UsersModel>{
        return this.userRepository.findOne(condition)
    }
}
