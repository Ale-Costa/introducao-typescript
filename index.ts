interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}




interface IFelino extends IAnimal{
    visaoNoturna: boolean;

}


interface Icanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | Icanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre',
}
