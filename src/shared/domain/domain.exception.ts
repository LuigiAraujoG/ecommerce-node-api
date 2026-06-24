class DomainException extends Error {
    constructor (message:string) {
        super(message);
        this.name = "DomainException";
        this.message = "Exceção de domínio genérica";
    }
}

class IDEntityUUIDInvalid extends DomainException {
  public constructor(message:string = '⚠️ O ID da entidade é um UUID inválido.') {
    super(message);
    this.name = 'IDEntityUUIDInvalid'
    this.message = message;
  }
}

export {
    DomainException,
    IDEntityUUIDInvalid
};