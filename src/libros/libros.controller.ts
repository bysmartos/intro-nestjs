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
import { LibroI } from './interfaces/libro.interface';
import { CrearLibroDto } from './dto/crear-libro';
// @Post() // C
// @Get() //  R
// @Put() // U
// @Delete() //  D

@Controller('libros')
export class LibrosController {
  constructor(private readonly libroService: LibrosService) {}

  @Get()
  getAllLibros(): Promise<LibroI[]> {
    return this.libroService.getAllLibros();
  }

  @Get(':id')
  getOneLibro(@Param('id') idLibro: string): Promise<LibroI> {
    //TODO:id
    return this.libroService.getOneLibro(idLibro);
  }

  @Post()
  postLibro(@Body() libroDto: CrearLibroDto): Promise<LibroI> {
    return this.libroService.postLibro(libroDto);
  }

  @Put(':id')
  putLibro(
    @Param('id') idLibro: string,
    @Body() libroDto: CrearLibroDto,
  ): Promise<LibroI> {
    return this.libroService.putLibro(idLibro, libroDto);
  }

  @Delete(':id')
  deleteLibro(@Param('id') idLibro: string): Promise<LibroI> {
    return this.libroService.deleteLibro(idLibro);
  }
}
