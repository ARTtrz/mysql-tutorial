import { IsString, IsBoolean, IsNotEmpty } from 'class-validator'

export class CreateQuizDto {
	@IsString()
	@IsNotEmpty({ message: 'The quiz should have a title' })
	title: string

	@IsBoolean()
	isActivated: boolean
}
