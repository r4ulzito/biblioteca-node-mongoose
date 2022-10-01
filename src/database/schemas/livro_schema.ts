import mongoose from "mongoose";
import { LivroEntity } from "../../entities/livro_entity.js";

const Livro = new mongoose.Schema<LivroEntity>({
  titulo: { type: String, required: true },
  isbn: { type: String, required: true },
  autores: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Autor",
      required: true,
    },
  ],
  disponivel: { type: Boolean, default: true },
});

export const LivroSchema = mongoose.model<LivroEntity>(
  "Livro",
  Livro,
  "livros"
);
