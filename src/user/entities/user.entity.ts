import { genSalt, hash } from 'bcrypt'
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({
		unique: true
	})
	email: string

	@Column()
	password: string

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@BeforeInsert()
	async setPassword(password: string) {
		const salt = await genSalt(10)
		this.password = await hash(password || this.password, salt)
	}
}
