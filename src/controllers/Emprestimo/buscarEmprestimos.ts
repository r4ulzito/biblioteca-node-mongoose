import { EmprestimoRepositoryInstance } from "../../repositories/emprestimo_repository.js";

export const buscarEmprestimosController = async () => {
  return EmprestimoRepositoryInstance.findAll();
};
