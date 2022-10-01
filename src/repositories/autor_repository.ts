import { AutorSchema } from "../database/schemas/autor_schema.js";
import { AutorEntity } from "../entities/autor_entity.js";

export class AutorRepository {
  constructor(private database: typeof AutorSchema) {}

  async create(Autor: AutorEntity) {
    return this.database.create(Autor);
  }

  async findAll() {
    return await this.database.find();
  }

  async findById(id: string) {
    return await this.database.findOne({ _id: id });
  }

  async findByFirstName(name: string): Promise<AutorEntity[]> {
    return await this.database.find({ primeiro_nome: name });
  }

  async findByLastName(name: string): Promise<AutorEntity[]> {
    return await this.database.find({ ultimo_nome: name });
  }

  async updateAutor(autor: AutorEntity) {
    return await this.database.updateOne({ _id: autor._id }, autor);
  }
}

export const AutorRepositoryInstance = new AutorRepository(AutorSchema);
