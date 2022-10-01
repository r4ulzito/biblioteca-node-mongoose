import { findSourceMap } from "module";
import { EmprestimoEntity } from "../entities/emprestimo_entity.js";
import { Biblioteca } from "../interface/biblioteca_interface.js";
import {
  EmprestimoRepository,
  EmprestimoRepositoryInstance,
} from "../repositories/emprestimo_repository.js";
import { LivroRepositoryInstance } from "../repositories/livro_repository.js";

export const consultarLivros = async () => {
  let listaDeLivros: Biblioteca[] = [];

  const livros = await LivroRepositoryInstance.findAll();

  for (let livro of livros) {
    if (!livro.disponivel) {
      const emprestimo = await EmprestimoRepositoryInstance.findByIdBook(
        livro.id
      );
      const dataEntregaFutura = emprestimo?.dataEntregaFutura;

      const informacoes: Biblioteca = {
        livro: livro,
        dataEntregaFutura: dataEntregaFutura,
      };

      listaDeLivros.push(informacoes);
    } else {
      listaDeLivros.push({
        livro: livro,
      });
    }
  }

  return listaDeLivros;
};

export const emprestarLivro = async (id: string) => {
  const livro = await LivroRepositoryInstance.findById(id);

  if (!livro) {
    throw new Error("Livro inexistente!");
  }

  if (livro.disponivel) {
    livro.disponivel = false;
    livro.save();

    function addDays(days: number) {
      const dataEntregaFutura = new Date();
      dataEntregaFutura.setDate(dataEntregaFutura.getDate() + days);
      return dataEntregaFutura;
    }

    const emprestimo: EmprestimoEntity = {
      livro: livro,
      dataRetirada: new Date(),
      dataEntregaFutura: addDays(7),
    };

    await EmprestimoRepositoryInstance.create(emprestimo);
  } else {
    throw new Error("Livro não disponivel");
  }
};

export const devolverLivro = async (id: string) => {
  let totalMulta = 0;

  const livro = await LivroRepositoryInstance.findById(id);

  if (!livro) {
    throw new Error("Código inválido, livro inexistente.");
  }

  const emprestimo = await EmprestimoRepositoryInstance.findByIdBook(livro._id);

  if (!emprestimo) {
    throw new Error("O livro não contém um emprestimo registrado.");
  }

  const dataEntrega = new Date();

  function calculaMulta(valorMulta: number) {
    if (dataEntrega <= emprestimo?.dataEntregaFutura!) {
      return "Prazo de entrega não excedido, nenhuma multa!";
    }

    const diasAtraso = Math.round(
      (dataEntrega.getTime() - emprestimo?.dataEntregaFutura?.getTime()!) /
        1000 /
        86400
    );

    totalMulta = valorMulta * diasAtraso;

    return "Valor da multa: " + totalMulta;
  }

  console.log("Devolução feita com sucesso!");
  console.log(calculaMulta(10));

  livro.disponivel = true;
  livro.save();
  await emprestimo.remove();
};
