import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { LibrosService } from './libros.service';

import { CrearLibroDto } from './dto/crear-libro';
// @Post() // C
// @Get() //  R
// @Put() // U
// @Delete() //  D

@Controller('libros')
export class LibrosController {
  constructor(private readonly libroService: LibrosService) {}

  @Get()
  getAllLibros(): string {
    return this.libroService.getAllLibros();
  }

  @Get(':id')
  getOneLibro(@Param('id') idLibro: string): string {
    //TODO:id
    return this.libroService.getOneLibro(idLibro);
  }

  @Post()
  postLibro(@Body() libroDto: CrearLibroDto): string {
    return this.libroService.postLibro(libroDto);
  }

  @Put(':id')
  putLibro(
    @Param('id') idLibro: string,
    @Body() libroDto: CrearLibroDto,
  ): string {
    return this.libroService.putLibro(idLibro, libroDto);
  }

  @Delete(':id')
  deleteLibro(@Param('id') idLibro: string): string {
    return this.libroService.deleteLibro(idLibro);
  }
}
