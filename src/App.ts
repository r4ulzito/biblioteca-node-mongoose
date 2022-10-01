import { buscarAutorIDCOntroller } from "./controllers/Autor/buscarAutorID.js";
import { buscarEmprestimosController } from "./controllers/Emprestimo/buscarEmprestimos.js";
import { criarEmprestimoController } from "./controllers/Emprestimo/criarEmprestimo.js";
import { editarEmprestimoController } from "./controllers/Emprestimo/editarEmprestimo.js";
import { buscarLivroIDController } from "./controllers/Livro/buscarLivroID.js";
import { buscarLivrosController } from "./controllers/Livro/buscarLivros.js";
import { buscarLivrosPorAutorController } from "./controllers/Livro/buscarLivrosPorAutor.js";
import { criarLivroController } from "./controllers/Livro/criarLivro.js";
import {
  consultarLivros,
  devolverLivro,
  emprestarLivro,
} from "./controllers/negocio.js";
import { connectDB, disconnectDB } from "./database/index.js";
import { EmprestimoEntity } from "./entities/emprestimo_entity.js";
import { LivroEntity } from "./entities/livro_entity.js";

await connectDB();

async function questao4_A() {
  const busca = await buscarAutorIDCOntroller("6332ff0b4b99fc5dc8ff525a");

  if (!busca) {
    throw new Error("Autor não encontrado");
  }

  const livro: LivroEntity = {
    titulo: "Cidades de Papel",
    isbn: "1112",
    autores: [busca],
  };

  await criarLivroController(livro);

  console.log(livro);
}

async function questao4_B() {
  const livros = await buscarLivrosController();

  console.log(livros);
}

async function questao4_C() {
  const livros = await buscarLivrosPorAutorController(
    "6332ff0b4b99fc5dc8ff525a"
  );
  console.log(livros);
}

async function questao4_D() {
  const livro = await buscarLivroIDController("6333a03a2e6bb16b00cec4a4");

  if (!livro) {
    throw new Error("Livro não encontrado");
  }
  livro.disponivel = false;
  await livro.save();
  const emprestimo: EmprestimoEntity = {
    livro: livro,
    dataRetirada: new Date(),
  };

  const emprestimoEfetuado = await criarEmprestimoController(emprestimo);

  console.log(emprestimoEfetuado);
}

async function questao4_E() {
  const emprestimos = await buscarEmprestimosController();

  console.log(emprestimos);
}

async function questao4_F() {
  await editarEmprestimoController("633394e6759bf3e031792ccf", {
    dataRetirada: new Date(2002, 8, 18),
  });
}

try {
  await devolverLivro("6333a03a2e6bb16b00cec4a4");
} catch (error) {
  console.log(error);
}

await disconnectDB();
