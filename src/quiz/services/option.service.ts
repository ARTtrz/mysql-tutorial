import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateOptionDto } from '../dto/create-option.dto'
import { Option } from '../entities/option.entity'
import { Question } from '../entities/question.entity'

@Injectable()
export class OptionService {
	constructor(
		@InjectRepository(Option)
		private optionRepository: Repository<Option>,
		@InjectRepository(Question)
		private questionRepository: Repository<Question>
	) {}

	async create(
		option: CreateOptionDto,
		question: Question
	): Promise<Option> {
		const newOption = await this.optionRepository.save({
			text: option.text,
			isCorrect: option.isCorrect
		})

		question.options = [...question.options, newOption]
		await this.questionRepository.save(question)
		return newOption
	}
}
