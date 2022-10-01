import { LivroSchema } from "../database/schemas/livro_schema.js";
import { LivroEntity } from "../entities/livro_entity.js";

export class LivroRepository {
  constructor(private database: typeof LivroSchema) {}

  async create(livro: LivroEntity) {
    return this.database.create(livro);
  }

  async findAll() {
    return await this.database.find();
  }

  async findById(id: string) {
    return await this.database.findOne({ _id: id });
  }

  async findByAutorId(autorId: String) {
    return await this.database.find({ autores: autorId });
  }
}

export const LivroRepositoryInstance = new LivroRepository(LivroSchema);
