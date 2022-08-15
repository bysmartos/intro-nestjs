import { Injectable } from '@nestjs/common';
import { LibroI } from 'src/libros/interfaces/libro.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel('Libro') private readonly libroModel: Model<LibroI>,
  ) {}

  async getAllLibros(): Promise<LibroI[]> {
    return await this.libroModel.find();
  }

  async getOneLibro(id: string): Promise<LibroI> {
    return await this.libroModel.findOne({ _id: id });
  }

  async postLibro(libro: LibroI): Promise<LibroI> {
    const nuevoLibro = new this.libroModel(libro);
    return await nuevoLibro.save();
  }

  async putLibro(id: string, libro: LibroI): Promise<LibroI> {
    return await this.libroModel.findByIdAndUpdate(id, libro, { new: true });
  }

  async deleteLibro(id: string): Promise<LibroI> {
    return await this.libroModel.findByIdAndRemove(id);
  }
}
