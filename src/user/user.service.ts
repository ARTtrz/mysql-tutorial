import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { genSalt, hash } from 'bcrypt'
import { Repository } from 'typeorm'
import { UserRegisterRequestDto } from './dto/user-register.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}
	async register(userRegister: UserRegisterRequestDto): Promise<User> {
		const oldUser = await this.userRepository.findOne({
			where: {
				email: userRegister.email
			}
		})
		if (oldUser) {
			throw new BadRequestException(
				'User with this email is already in the systems'
			)
		}

		const user = new User()
		user.name = userRegister.name
		user.email = userRegister.email
		user.password = userRegister.password

		return await user.save()
	}
}
