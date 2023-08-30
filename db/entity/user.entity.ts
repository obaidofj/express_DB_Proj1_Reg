import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class user extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number
  
    @Column({ length: 50, nullable: false })
    userName: string

    @Column({ length: 50, nullable: false })
    password: string
}
  