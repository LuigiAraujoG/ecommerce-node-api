import type {ICategoria, CriarCategoriaProps} from "./categoria.types.js";

class Categoria implements ICategoria {
    //Atributos de classe

    private _id: string;
    private _nome: string;

    // Gets e sets

    public get id(): string {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    private set id(value: string) {
        this._id = value;
    }
    private set nome(value: string) {
        console.log(value)
        if (value === null || value === undefined){
            throw Error("Nome da categoria e nulo ou indefinido")
        }

        if (value.trim().length < 3){
            throw Error("Nome da categoria não possui um tamanho mínimo válido")
        }

        if (value.trim().length > 50) {
            throw Error ("Nome da categoria não possui um tamanho máximo válido")
        }
        this._nome = value;
    }

    //Construtor

    private constructor(categoria:ICategoria){
        this.id = categoria.id;
        this.nome = categoria.nome;
    }

    // Static Factory Method

    public static criar(props: CriarCategoriaProps): Categoria {
        let id = "12345";
        let {nome} = props;
        return new Categoria({id, nome});
    }

}

export {Categoria};