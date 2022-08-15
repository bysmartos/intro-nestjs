import * as mongoose from 'mongoose';
export const LibroSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  autor: String,
  descripcion: String,
});
