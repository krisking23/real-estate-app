import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { ListingType } from "utils/constants";

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

  // @Column("string", { array: true })
  // array: string[];

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date
}
