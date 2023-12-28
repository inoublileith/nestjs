import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/book/schemas/book.schemas';
import { CreateBookDto } from 'src/book/dto/create-book-dto';
import { UpdateBookDto } from 'src/book/dto/update-book-dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteById(id);
  }
}
