import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/book/schemas/book.schemas';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  readonly description: string;

  readonly author: string;

  readonly price: number;

  @IsEnum(Category, { message: 'please enter correct category' })
  readonly category: Category;
}
