import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateOptionDto {
	@IsString()
	@IsNotEmpty()
	@Length(3, 225)
	text: string

	@IsNotEmpty()
	questionId: number

	@IsNotEmpty()
	@IsBoolean()
	isCorrect: boolean
}
