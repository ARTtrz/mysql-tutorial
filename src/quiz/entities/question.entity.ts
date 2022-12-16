import { Quiz } from 'src/quiz/entities/quiz.entity'
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm'

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
}
