import { Categoria } from "../domain/categoria.entity.js";
import type { ICategoria, RecuperarCategoriaProps } from "../domain/categoria.types.js";

class CategoriaMap {
    public static toDTO(categoria: Categoria): ICategoria {
        return {
            id: categoria.id,
            nome: categoria.nome
        }
    }

    public static toDomain(categoria: RecuperarCategoriaProps): Categoria {
        return Categoria.recuperar(categoria);
    }
}

export {
    CategoriaMap
}