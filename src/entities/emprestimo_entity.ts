import { LivroEntity } from "./livro_entity.js";

export interface EmprestimoEntity {
  _id?: string;
  livro: LivroEntity;
  dataRetirada: Date;
  dataEntregaFutura?: Date;
  dataEntrega?: Date;
}
