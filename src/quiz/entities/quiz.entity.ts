import { Question } from 'src/quiz/entities/question.entity'
import {
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from 'typeorm'

@Entity()
export class Quiz {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: 'varchar',
		unique: true
	})
	title: string

	@Column({ default: false })
	isActivated: boolean

	@OneToMany(() => Question, (question) => question.quiz)
	questions: Question[]
}
