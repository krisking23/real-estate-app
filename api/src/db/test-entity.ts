import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  yay: string;
}
