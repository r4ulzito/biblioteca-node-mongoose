import mongoose from "mongoose";
import { AutorEntity } from "../../entities/autor_entity.js";

const Autor = new mongoose.Schema<AutorEntity>({
  primeiro_nome: { type: String, required: true },
  ultimo_nome: { type: String, required: true },
});

export const AutorSchema = mongoose.model<AutorEntity>(
  "Autor",
  Autor,
  "autores"
);
