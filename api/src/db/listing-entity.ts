import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { ListingType } from "../utils/constants";
import { User } from "./user-entity";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: ListingType,
  })
  role: ListingType;

  @Column()
  parkingSpot: boolean;

  @Column()
  furnished: boolean;

  @Column()
  offer: boolean;

  @Column()
  regularPrice: number;

  @Column()
  discountedPrice?: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => User, (user: any) => user.listings)
  user: User;

  // @Column("string", { array: true })
  // array: string[];

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date
}
