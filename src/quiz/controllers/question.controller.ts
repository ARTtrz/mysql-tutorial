import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { QuizService } from 'src/quiz/services/quiz.service'
import { CreateQuestionDto } from '../dto/create-question.dto'
import { QuestionService } from '../services/question.service'

@Controller('question')
export class QuestionController {
	constructor(
		private readonly questionService: QuestionService,
		private readonly quizService: QuizService
	) {}

	@Post()
	@UsePipes(ValidationPipe)
	async saveQuestion(@Body() question: CreateQuestionDto) {
		const quiz = await this.quizService.getQuizById(question.quizId)
		return await this.questionService.create(question, quiz)
	}

	@Get()
	findAll() {
		return this.questionService.findAll()
	}

	@Get(':id')
	getQuizById(@Param('id') id: number) {
		return this.questionService.findQuestionById(id)
	}
}
