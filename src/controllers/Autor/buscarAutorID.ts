import { AutorRepositoryInstance } from "../../repositories/autor_repository.js";

export const buscarAutorIDCOntroller = async (autorId: string) => {
  return await AutorRepositoryInstance.findById(autorId);
};
