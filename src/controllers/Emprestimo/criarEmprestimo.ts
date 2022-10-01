import { EmprestimoEntity } from "../../entities/emprestimo_entity.js";
import { EmprestimoRepositoryInstance } from "../../repositories/emprestimo_repository.js";

export const criarEmprestimoController = async (
  emprestimo: EmprestimoEntity
) => {
  return await EmprestimoRepositoryInstance.create(emprestimo);
};
