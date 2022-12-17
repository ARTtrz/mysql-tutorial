import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config/dist'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppService } from './app.service'
import { typeOrmAsyncConfig } from './config/typeorm.config'
import { QuizModule } from './quiz/quiz.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		QuizModule,
		// TypeOrmModule.forRoot({
		// 	type: 'mysql',
		// 	host: 'localhost',
		// 	port: 3306,
		// 	username: 'root',
		// 	password: 'Artyom_2006',
		// 	database: 'project_1',
		// 	entities: [__dirname + '/**/*.entity{.ts,.js}'],
		// 	synchronize: true,
		// 	logging: true
		// })
		TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
	],
	controllers: [],
	providers: [AppService]
})
export class AppModule {}
