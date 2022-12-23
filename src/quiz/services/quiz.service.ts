import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateQuizDto } from '../dto/create-quiz.dto'
import { UpdateQuizDto } from '../dto/update-quiz.dto'
import { Question } from '../entities/question.entity'
import { Quiz } from '../entities/quiz.entity'

@Injectable()
export class QuizService {
	constructor(
		@InjectRepository(Quiz) private quizRepository: Repository<Quiz>
	) {}
	async create(createQuizDto: CreateQuizDto) {
		return await this.quizRepository.save(createQuizDto)
	}

	async getQuizById(id: number): Promise<Quiz> {
		return await this.quizRepository.findOne({
			where: { id: id },
			relations: ['questions', 'questions.options']
		})
	}

	findAll() {
		return this.quizRepository.find({
			// order: {
			// 	questions: {
			// 		question: 'ASC'
			// 	}
			// },
			relations: ['questions']
		})
	}

	async getAllQuiz(): Promise<Quiz[]> {
		return await this.quizRepository
			.createQueryBuilder('q')
			.leftJoinAndSelect('q.questions', 'qt')
			.leftJoinAndSelect('qt.options', 'o')
			.getMany()
	}

	findOne(id: number) {
		return `This action returns a #${id} quiz`
	}

	update(id: number, updateQuizDto: UpdateQuizDto) {
		return `This action updates a #${id} quiz`
	}

	remove(id: number) {
		return `This action removes a #${id} quiz`
	}
}
