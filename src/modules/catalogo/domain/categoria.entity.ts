import type {ICategoria, CriarCategoriaProps, RecuperarCategoriaProps} from "./categoria.types.js";
import { NomeCategoriaNuloOuIndefinido, NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exception.js";
import { randomUUID } from "node:crypto";
import { Entity } from "../../../shared/domain/entity.js";
import { CategoriaMap } from "../mappers/categoria.map.js";

class Categoria extends Entity<ICategoria> implements ICategoria {
    //Atributos de classe
    private _nome: string;

    // Gets e sets

    public get nome(): string {
        return this._nome;
    }
    
    private set nome(value: string) {
        if (value === null || value === undefined){
            throw new NomeCategoriaNuloOuIndefinido();
        }

        if (value.trim().length < 3){
            throw new NomeCategoriaTamanhoMinimoInvalido();
        }

        if (value.trim().length > 50) {
            throw new NomeCategoriaTamanhoMaximoInvalido();
        }
        this._nome = value;
    }

    //Construtor

    private constructor(categoria:ICategoria){
        super(categoria.id);
        this.nome = categoria.nome;
    }

    // Static Factory Method

    public static criar(props: CriarCategoriaProps): Categoria {
        let {nome} = props;
        return new Categoria({nome});
    }

    public static recuperar(props: RecuperarCategoriaProps): Categoria {
        return new Categoria(props)
    }

    //Método

    public toDTO():ICategoria {
        return CategoriaMap.toDTO(this);
    }

}

export {Categoria};