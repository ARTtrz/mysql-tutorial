import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Quiz } from 'src/quiz/entities/quiz.entity'
import { QuizService } from 'src/quiz/services/quiz.service'
import { Repository } from 'typeorm'
import { CreateQuestionDto } from '../dto/create-question.dto'

import { Question } from '../entities/question.entity'

@Injectable()
export class QuestionService {
	constructor(
		@InjectRepository(Question)
		private questionRepository: Repository<Question>,
		private readonly quizService: QuizService,
		@InjectRepository(Quiz)
		private quizRepository: Repository<Quiz>
	) {}

	async create(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
		const newQuestion = await this.questionRepository.save({
			question: question.question
		})

		quiz.questions = [...quiz.questions, newQuestion]
		await this.quizRepository.save(quiz)
		return newQuestion
	}

	async findQuestionById(id: number): Promise<Question> {
		return await this.questionRepository.findOne({
			where: {
				id: id
			},
			relations: ['options']
		})
	}
	async findAll() {
		return await this.questionRepository.find({
			relations: ['options']
		})
	}
}
