import { Quiz } from 'src/quiz/entities/quiz.entity'
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { Option } from './option.entity'

@Entity()
export class Question {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: 'varchar'
	})
	question?: string

	@ManyToOne((type) => Quiz, (quiz) => quiz.questions)
	quiz: Quiz

	@OneToMany(() => Option, (option) => option.question)
	options: Option[]
}
