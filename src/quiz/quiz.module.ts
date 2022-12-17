import { Module } from '@nestjs/common'
import { QuizService } from './services/quiz.service'
import { QuizController } from './controllers/quiz.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Quiz } from './entities/quiz.entity'
import { Question } from './entities/question.entity'
import { QuestionController } from './controllers/question.controller'
import { QuestionService } from './services/question.service'
import { Option } from './entities/option.entity'
import { OptionController } from './controllers/option.controller'
import { OptionService } from './services/option.service'

@Module({
	imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
	controllers: [QuizController, QuestionController, OptionController],
	providers: [QuizService, QuestionService, OptionService],
	exports: [QuizService]
})
export class QuizModule {}
