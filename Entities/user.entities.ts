import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
   id; 
}