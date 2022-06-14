interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;

}


const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'aquatico',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}


animal.executarRugido(456)

const felino: IFelino ={
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true

}