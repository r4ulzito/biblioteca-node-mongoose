import { LivroRepositoryInstance } from "../../repositories/livro_repository.js";

export const buscarLivroIDController = async (livroId: string) => {
  return await LivroRepositoryInstance.findById(livroId);
};
