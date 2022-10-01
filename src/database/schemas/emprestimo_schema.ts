import mongoose from "mongoose";
import { EmprestimoEntity } from "../../entities/emprestimo_entity.js";

const Emprestimo = new mongoose.Schema<EmprestimoEntity>({
  livro: { type: mongoose.SchemaTypes.ObjectId, ref: "Livro", required: true },
  dataEntrega: { type: Date },
  dataEntregaFutura: { type: Date },
  dataRetirada: { type: Date, default: new Date() },
});

export const EmprestimoSchema = mongoose.model<EmprestimoEntity>(
  "Emprestimo",
  Emprestimo,
  "emprestimos"
);
