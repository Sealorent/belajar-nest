import { IsString, Length } from 'class-validator';

export class CourseDto {
  @IsString()
  @Length(4, 4)
  year: number;


  month: number;
  
  // other properties...
}