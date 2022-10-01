import { LivroRepositoryInstance } from "../../repositories/livro_repository.js";

export const buscarLivrosController = async () => {
  return await LivroRepositoryInstance.findAll();
};
