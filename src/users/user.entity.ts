import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { IsEmail, Length, IsNotEmpty } from 'class-validator';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  @IsNotEmpty({ message: 'Name is required' })
  @Length(2, 96, { message: 'Name must be between 2 and 96 characters' })
  name: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  @IsNotEmpty({ message: 'Password is required' })
  @Length(6, 255, { message: 'Password must be at least 6 characters long' })
  password: string;
}
