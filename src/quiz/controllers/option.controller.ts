import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { get } from 'http'
import { CreateOptionDto } from '../dto/create-option.dto'

import { OptionService } from '../services/option.service'
import { QuestionService } from '../services/question.service'

@Controller('option')
export class OptionController {
	constructor(
		private optionService: OptionService,
		private questionService: QuestionService
	) {}

	@Post()
	@UsePipes(ValidationPipe)
	async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
		const question = await this.questionService.findQuestionById(
			createOption.questionId
		)
		const option = await this.optionService.create(createOption, question)
		return { question, option }
	}
}
