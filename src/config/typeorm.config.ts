import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'Artyom_2006',
	database: 'project_1',
	entities: [__dirname + '/**/*.entity{.ts,.js}'],
	synchronize: true
}
