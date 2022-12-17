import { ConfigModule, ConfigService } from '@nestjs/config'
import {
	TypeOrmModuleAsyncOptions,
	TypeOrmModuleOptions
} from '@nestjs/typeorm'

export default class TypeOrmConfig {
	static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
		return {
			type: 'mysql',
			host: configService.get('DB_HOST'),
			port: configService.get('DB_PORT'),
			username: configService.get('DB_USERNAME'),
			password: configService.get('DB_PASSWORD'),
			database: configService.get('DB_NAME'),
			entities: [__dirname + '/../**/*.entity.{js,ts}'],
			synchronize: true,
			logging: true

			// type: 'mysql',
			// host: 'localhost',
			// port: 3306,
			// username: 'root',
			// password: 'Artyom_2006',
			// database: 'project_1',
			// // entities: [__dirname + '/**/*.entity{.ts,.js}'],
			// entities: [__dirname + '/../**/*.entity.{js,ts}'],
			// synchronize: true,
			// logging: true
		}
	}
}

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	useFactory: async (
		configService: ConfigService
	): Promise<TypeOrmModuleOptions> =>
		TypeOrmConfig.getOrmConfig(configService),
	inject: [ConfigService]
}
