import { Injectable } from '@nestjs/common';
import { LibroI } from 'src/libros/interfaces/libro.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel('Libro') private readonly libroModel: Model<LibroI>,
  ) {}

  async getAllLibros(): Promise<LibroI> {
    return await this.libroModel.find();
  }

  async getOneLibro(id: string): Promise<LibroI> {
    return await this.libroModel.findOne({ _id: id });
  }

  async postLibro(libro: LibroI): Promise<LibroI> {
    return `Creado nuevo libro con titulo ${libro.id}`;
  }

  putLibro(id: string, libro: LibroI) {
    return 'Modificar libro';
  }

  deleteLibro(id: string) {
    return 'Eliminar libro';
  }
}
