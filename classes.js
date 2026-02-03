//Class

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton = new Button('Comprar', 'blue');
const pinkButton = new Button ('Pintar', 'pink')
console.log(blueButton)
console.log(pinkButton)

// Constructor 
class Button1 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}

const blue1Button = new Button('Clique', 'blue', 'white');

console.log(blue1Button)

//Propriedades 
class Livro {
  constructor(options) {
    this.options = options;
  }
}

const livroOptions = {
  backgroundColor: 'pink',
  color: 'black',
  number: 580,
  text: 'Senhora Mel',
  borderRadius: '4px',
}

const livro = new Livro(livroOptions);
Livro.options;

console.log(livro)

//SET

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';
frutas.nova = 'Abacaxi'
frutas.lista; 

console.log(frutas.lista)

//Exemp 2

const nomes = {
  lista: [],
  set novo(nome) {
    this.lista.push(nome);
  },
};

nomes.novo = 'Emilly';
nomes.novo = 'Ellen';
nomes.novo = 'Jen'
nomes.lista; 

console.log(nomes.lista)

//Subclasses 

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(4);
honda.empinar()

//SuperClasse

class Veiculos {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Motos extends Veiculos {
  acelerar() {
    super.acelerar();
    console.log('Muito');
  }
}

const honda2 = new Moto(2);
honda.acelerar();

