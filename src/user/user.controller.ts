import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ValidationPipe,
	HttpStatus
} from '@nestjs/common'
import { UserService } from './user.service'
import { SETTINGS } from 'src/app.utils'

import { UserRegisterRequestDto } from './dto/user-register.dto'
import { User } from './entities/user.entity'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('/register')
	async register(
		@Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto
	): Promise<User> {
		return await this.userService.register(userRegister)
	}
}
