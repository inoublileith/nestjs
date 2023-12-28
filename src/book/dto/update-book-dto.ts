import { Category } from 'src/book/schemas/book.schemas';

export class UpdateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
