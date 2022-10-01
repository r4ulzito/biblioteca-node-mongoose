import { EmprestimoSchema } from "../database/schemas/emprestimo_schema.js";
import { EmprestimoEntity } from "../entities/emprestimo_entity.js";

export class EmprestimoRepository {
  constructor(private database: typeof EmprestimoSchema) {}

  async create(emprestimo: EmprestimoEntity) {
    return await this.database.create(emprestimo);
  }

  async findAll() {
    return await this.database.find();
  }

  async findById(id: string) {
    return await this.database.findOne({ _id: id });
  }

  async updateEmprestimo(emprestimo: EmprestimoEntity) {
    return await this.database.updateOne({ _id: emprestimo._id! }, emprestimo);
  }

  async findByIdBook(id: string) {
    return this.database.findOne({ livro: id });
  }
}

export const EmprestimoRepositoryInstance = new EmprestimoRepository(
  EmprestimoSchema
);
