import { AutorSchema } from "../database/schemas/autor_schema.js";
import { AutorEntity } from "../entities/autor_entity.js";
import { AutorRepositoryInstance } from "../repositories/autor_repository.js";

export const criarAutorControler = async (autor: AutorEntity) => {
  await AutorRepositoryInstance.create(autor);
};
