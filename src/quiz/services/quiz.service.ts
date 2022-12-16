import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateQuizDto } from '../dto/create-quiz.dto'
import { UpdateQuizDto } from '../dto/update-quiz.dto'
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
			relations: ['questions']
		})
	}

	findAll() {
		return this.quizRepository.find()
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
