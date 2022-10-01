import { LivroEntity } from "../../entities/livro_entity.js";
import { EmprestimoRepositoryInstance } from "../../repositories/emprestimo_repository.js";

export interface updatedEmprestimo {
  livro?: LivroEntity;
  dataRetirada?: Date;
  dataEntrega?: Date;
}

export const editarEmprestimoController = async (
  id: string,
  { livro, dataRetirada, dataEntrega }: updatedEmprestimo
) => {
  let emprestimoFind = await EmprestimoRepositoryInstance.findById(id);

  if (!emprestimoFind) {
    throw new Error("Emprestimo inexistente");
  }

  emprestimoFind.livro = livro ?? emprestimoFind.livro;
  emprestimoFind.dataRetirada = dataRetirada ?? emprestimoFind.dataRetirada;
  emprestimoFind.dataEntrega = dataEntrega ?? emprestimoFind.dataEntrega;

  await EmprestimoRepositoryInstance.updateEmprestimo(emprestimoFind);
};
