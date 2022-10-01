import { LivroEntity } from "../entities/livro_entity.js";

export interface Biblioteca {
  livro: LivroEntity;
  dataEntregaFutura?: Date;
}
