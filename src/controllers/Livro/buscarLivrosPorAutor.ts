import { LivroRepositoryInstance } from "../../repositories/livro_repository.js";

export const buscarLivrosPorAutorController = async (autorId: string) => {
  return await LivroRepositoryInstance.findByAutorId(autorId);
};
