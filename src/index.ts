import { Categoria } from "./modules/catalogo/domain/categoria.entity.js";

try {
    let categoria = Categoria.criar({nome:"te"});
} catch (error: any) {
    console.log(error);
}finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
