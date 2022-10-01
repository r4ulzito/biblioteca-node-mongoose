import { EmprestimoRepositoryInstance } from "../../repositories/emprestimo_repository.js";

export const buscarEmprestimoIDController = async (emprestimoId: string) => {
  return await EmprestimoRepositoryInstance.findById(emprestimoId);
};
