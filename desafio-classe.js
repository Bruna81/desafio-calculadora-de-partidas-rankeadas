class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }

        //Mensagem de saída
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }

}

// teste da classe
const heroi1 = new Heroi("Argon", 39, 'guerreiro');
heroi1.ataque();