import { describe, expect, test } from "vitest";
import type { CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types.js";
import { Categoria } from "./categoria.entity.js";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception.js";
import { IDEntityUUIDInvalid } from "../../../shared/domain/domain.exception.js";

//suite de Teste de Unidade - Entidade de Domínio
//Usando a descrição, você pode definir como um conjunto de teste ou benchmarks relacionados

describe("Entidade de Domínio: Criar Categoria", () => {
   test("Deve criar uma categoria válida", async => {
      //given
      const categoriaValida: CriarCategoriaProps = {
         nome: "cama"
      }

      // then
      expect(Categoria.criar(categoriaValida)).to.be.instanceOf(Categoria);
   })

   test("Não deve criar uma categoria com nome ínvalido (Tamanho Mínimo)", async => {
      const nomeCategoriaInvalido: CriarCategoriaProps = { nome: "na" };

      expect(() => Categoria.criar(nomeCategoriaInvalido)).toThrow(NomeCategoriaTamanhoMinimoInvalido);
   })

   test("Não deve criar uma categoria com nome ínvalido (Tamanho Máximo)", async => {
      const nomeCategoriaInvalido: CriarCategoriaProps = { nome: "123456789101112131415161718192021222324252627282930313234353637383940414243444546474849" };

      expect(() => Categoria.criar(nomeCategoriaInvalido)).toThrow(NomeCategoriaTamanhoMaximoInvalido);
   })
})

describe('Entidade de Domínio: Recupear Categoria', () => {

   test('Deve Recuperar Uma Categoria Válida', async () => {

      //Dado (Given)
      const categoriaValida: RecuperarCategoriaProps = {
         id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
         nome: 'cama'
      };

      //Quando (When) e Então (Then)
      expect(Categoria.recuperar(categoriaValida))
         .to.be.instanceof(Categoria);

   });

   test('Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)', async () => {

      //Dado (Given)
      //Nome menor que três caracteres
      const categoriaIdInvalido: RecuperarCategoriaProps = {
         id: '1234',
         nome: 'cama'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaIdInvalido))
         .toThrowError(IDEntityUUIDInvalid);

   });

   test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)', async () => {

      //Dado (Given)
      //Nome menor que três caracteres
      const categoriaNomeInvalido: RecuperarCategoriaProps = {
         id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
         nome: 'ma'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaNomeInvalido))
         .toThrowError(NomeCategoriaTamanhoMinimoInvalido);

   });

   test('Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)', async () => {

      //Dado (Given)
      //Nome maior que 50 caracteres
      const categoriaNomeInvalido: RecuperarCategoriaProps = {
         id: '5edbc79d-b724-4a39-a29b-0bfb2386920a',
         nome: '123456789123456789123456789123456789123456789123456'
      };

      //Quando (When) e Então (Then)
      expect(() => Categoria.recuperar(categoriaNomeInvalido))
         .toThrowError(NomeCategoriaTamanhoMaximoInvalido);

   });

});

