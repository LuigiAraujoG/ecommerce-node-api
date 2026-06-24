import { Categoria } from "./modules/catalogo/domain/categoria.entity.js";
import type { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types.js";
import { DomainException } from "./shared/domain/domain.exception.js";

try {
    let categoria = Categoria.criar({nome:"tema"});
    console.log(categoria);

    let propsCategoria:RecuperarCategoriaProps = {
        id:'9715a8b8-2f9f-442b-a0c9-55c0da694eb2',
        nome: 'mesa'
    }

    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);

} catch (error: any) {
    if(error instanceof DomainException){
        console.log(error.message); 
    }

}finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
