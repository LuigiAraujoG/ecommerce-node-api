import { Categoria } from "./modules/catalogo/domain/categoria.entity.js";
import { DomainException } from "./shared/domain/domain.exception.js";

try {
    let categoria = Categoria.criar({nome:"te"});
} catch (error: any) {
    if(error instanceof DomainException){
        console.log(error.message); 
    }

}finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
