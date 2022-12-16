import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateQuestionDto {
	@IsString()
	@IsNotEmpty()
	@Length(3, 225)
	question?: string

	@IsNotEmpty()
	quizId: number
}
