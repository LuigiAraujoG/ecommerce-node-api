import { threadCpuUsage } from "node:process";
import { Categoria } from "./modules/catalogo/domain/categoria.entity.js";
import type { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types.js";
import { DomainException } from "./shared/domain/domain.exception.js";
import { readFile, writeFile } from "node:fs";
import { CategoriaMap } from "./modules/catalogo/mappers/categoria.map.js";

try {
    let categoria = Categoria.criar({nome:"tema"});
    //console.log(categoria);

    let propsCategoria:RecuperarCategoriaProps = {
        id:'9715a8b8-2f9f-442b-a0c9-55c0da694eb2',
        nome: 'mesa'
    }

    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    //console.log(categoria2);

    // Persistindo e Recuperando Arquivo

    let arrayCategoria = [];
    arrayCategoria.push(categoria.toDTO());
    arrayCategoria.push(categoria2.toDTO());

    writeFile('categoria.json', JSON.stringify(arrayCategoria), function(error:any) {
        if(error) throw error;
        console.log('Arquivo Salvo com Sucesso!')
        readFile('categoria.json', (error, dataGravadoArquivo) => {
            if(error) throw error;
            console.log('Leitura de Arquivo!')
            let categoriaSalvas: [] = JSON.parse(dataGravadoArquivo.toString());
            categoriaSalvas.forEach(categoriaJSON => {
                console.log(categoriaJSON);
                console.log(CategoriaMap.toDomain(categoriaJSON))
            })

        
        })
    })

} catch (error: any) {
    if(error instanceof DomainException){
        console.log('Execeção de Dóminio')
        console.log(error.message); 
    } else {
        console.log('Outras Exceções')
        console.log(error.message)
    }

}finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
