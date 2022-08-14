import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CrearLibroDto } from './dto/crear-libro';
// @Post() // C
// @Get() //  R
// @Put() // U
// @Delete() //  D

@Controller('libros')
export class LibrosController {
  @Get()
  getAllLibros(): string {
    return `Todos los libros!`;
  }

  @Post()
  postLibro(@Body() libroDto: CrearLibroDto): string {
    return `Creado nuevo libro con titulo ${libroDto.titulo}`;
  }

  @Put(':id')
  putLibro(@Param('id') idLibro: string, @Body() libroDto: CrearLibroDto): string {
    return `Libro ${idLibro} modificado!`;
  }

  @Delete(':id')
  deleteLibro(@Param('id') idLibro: string): string {
    return `Libro ${idLibro} eliminado!!`;
  }
}
