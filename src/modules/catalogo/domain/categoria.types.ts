//Todos os atributos/propriedades que uma categoria deve ter no sistema
//Auxilia na criação de invariantes e modelos ricos
export interface ICategoria {
    id: string;
    nome: string;
}

//Atributos que são necessarios para criar uma categoria
//Garantir a integridade dos dados de um objeto
export type CriarCategoriaProps = Omit<ICategoria, "id">;

