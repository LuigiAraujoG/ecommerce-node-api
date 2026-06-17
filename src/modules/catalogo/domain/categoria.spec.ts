import { describe, expect, test } from "vitest";
import type { CriarCategoriaProps } from "./categoria.types.js";
import { Categoria } from "./categoria.entity.js";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception.js";

//suite de Teste de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de teste ou benchmarks relacionados

describe("Entidade de Domínio: Categoria", () => {
 test("Deve criar uma categoria válida", async => {
    //given
    const categoriaValida : CriarCategoriaProps = {
        nome : "cama"
    }

    // then
    expect(Categoria.criar(categoriaValida)).to.be.instanceOf(Categoria);
 })

 test("Não deve criar uma categoria com nome ínvalido (Tamanho Mínimo)", async => {
    const nomeCategoriaInvalido: CriarCategoriaProps = {nome: "na"};

    expect(() => Categoria.criar(nomeCategoriaInvalido)).toThrow(NomeCategoriaTamanhoMinimoInvalido);
 })

  test("Não deve criar uma categoria com nome ínvalido (Tamanho Máximo)", async => {
    const nomeCategoriaInvalido: CriarCategoriaProps = {nome: "123456789101112131415161718192021222324252627282930313234353637383940414243444546474849"};

    expect(() => Categoria.criar(nomeCategoriaInvalido)).toThrow(NomeCategoriaTamanhoMaximoInvalido);
 })
})



