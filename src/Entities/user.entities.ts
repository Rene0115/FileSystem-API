import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class User extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number | undefined; 

   @Column()
   firstname: string | undefined;

   @Column()
   lastname: string | undefined;

   @Column()
   email: string | undefined;

   @Column()
   password: string | undefined;


}