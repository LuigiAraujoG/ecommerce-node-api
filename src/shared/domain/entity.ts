import { randomUUID } from "node:crypto";
import { Domain } from "node:domain";
import { DomainException, IDEntityUUIDInvalid } from "./domain.exception.js";

//Método que verifica se é a instância de uma entidade
const isEntity = (v: any) : v is Entity<any> => {
    return v instanceof Entity;
} 

abstract class Entity<T> {
    //Atributos

    private _id: string;

    // set e get

    public get id(): string {
        return this._id;
    }
    private set id(value: string) {
        if (!Entity.validUUID(value)){
            throw new IDEntityUUIDInvalid();
        }
        this._id = value;
    }

    //construtor

    constructor(id?: string) {
        this.id = id ? id : randomUUID();
    }

    // método
    public equals(object?: Entity<T>): Boolean {
        if(object == null || object == undefined) {
            return false;
        }

        if(this === object) {
            return true;
        }

        if(!isEntity(object)) {
            return false;
        }

        return this.id == object.id;
    }

public static validUUID(UUIDD: string): boolean {
  let padraoUUID: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return padraoUUID.test(UUIDD);
}
}

export {Entity}