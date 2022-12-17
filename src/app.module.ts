import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppService } from './app.service'
import { QuizModule } from './quiz/quiz.module'

@Module({
	imports: [
		QuizModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'Artyom_2006',
			database: 'project_1',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true,
			logging: true
		})
	],
	controllers: [],
	providers: [AppService]
})
export class AppModule {}
