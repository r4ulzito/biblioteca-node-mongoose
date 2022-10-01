import { AutorEntity } from "./autor_entity.js";

export interface LivroEntity {
  _id?: string;
  isbn: string;
  titulo: string;
  autores: AutorEntity[];
  disponivel?: boolean;
}
