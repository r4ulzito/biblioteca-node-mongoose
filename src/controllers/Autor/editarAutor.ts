import { updatedAutor } from "../../interface/updatedAutor_interface.js";
import { AutorRepositoryInstance } from "../../repositories/autor_repository.js";

export const editarAutorController = async (
  id: string,
  { primeiro_nome, ultimo_nome }: updatedAutor
) => {
  let findAutor = await AutorRepositoryInstance.findById(id);

  if (!findAutor) {
    throw new Error("Autor não encontrado");
  }

  findAutor.primeiro_nome = primeiro_nome ?? findAutor.primeiro_nome;
  findAutor.ultimo_nome = ultimo_nome ?? findAutor.ultimo_nome;

  await AutorRepositoryInstance.updateAutor(findAutor);
};
