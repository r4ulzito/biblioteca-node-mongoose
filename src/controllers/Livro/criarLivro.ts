import { LivroEntity } from "../../entities/livro_entity.js";
import { LivroRepositoryInstance } from "../../repositories/livro_repository.js";

export const criarLivroController = async (livro: LivroEntity) => {
  return await LivroRepositoryInstance.create(livro);
};
