interface ICachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}


type CachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]: ICachorro[K];
}

class MeuCachorro implements ICachorro{
    nome;
    idade;


    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        
    }
}

const cao = new MeuCachorro('Rato', 5);

cao.idade = 8;

console.log(cao)

