class DomainException extends Error {
    constructor (message:string) {
        super(message);
        this.name = "DomainException";
        this.message = "Exceção de domínio genérica";
    }
}

export {DomainException};