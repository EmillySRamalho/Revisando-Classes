# 📘 Estudos de JavaScript – Classes, Objetos e Herança

Este repositório contém exemplos práticos de **JavaScript moderno (ES6+)**, abordando conceitos fundamentais como **classes**, **constructor**, **propriedades**, **setters**, **subclasses** e **uso do `super`**.

O objetivo é facilitar o entendimento desses conceitos por meio de exemplos simples e diretos.

---

## 🧩 Conteúdo abordado

* Criação de Classes
* Uso do `constructor`
* Criação e manipulação de objetos
* Uso de `set`
* Herança com `extends`
* Uso do `super` em subclasses

---

## 🚀 Classes

### Classe `Button`

Exemplo básico de uma classe que cria um botão HTML dinamicamente:

```js
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
```

📌 **O que acontece aqui:**

* O `constructor` recebe texto e cor de fundo.
* O método `element()` cria um botão no DOM usando esses valores.

Exemplo de uso:

```js
const blueButton = new Button('Comprar', 'blue');
const pinkButton = new Button('Pintar', 'pink');

console.log(blueButton);
console.log(pinkButton);
```

---

## 🔧 Constructor com mais propriedades

```js
class Button1 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}
```

Aqui o `constructor` recebe **três propriedades**, mostrando como podemos expandir uma classe facilmente.

---

## 📦 Propriedades com objeto de opções

```js
class Livro {
  constructor(options) {
    this.options = options;
  }
}
```

Objeto de configuração:

```js
const livroOptions = {
  backgroundColor: 'pink',
  color: 'black',
  number: 580,
  text: 'Senhora Mel',
  borderRadius: '4px',
};
```

📌 Esse padrão é muito usado para deixar o código mais flexível e organizado.

---

## 🧠 Setters (`set`)

### Exemplo com frutas

```js
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
```

Uso:

```js
frutas.nova = 'Banana';
frutas.nova = 'Morango';
frutas.nova = 'Abacaxi';

console.log(frutas.lista);
```

📌 O `set` permite executar uma ação ao atribuir um valor, sem precisar chamar uma função.

---

### Exemplo com nomes

```js
const nomes = {
  lista: [],
  set novo(nome) {
    this.lista.push(nome);
  },
};
```

Uso simples e intuitivo:

```js
nomes.novo = 'Emilly';
nomes.novo = 'Ellen';
nomes.novo = 'Jen';

console.log(nomes.lista);
```

---

## 🧬 Subclasses (Herança)

### Classe base `Veiculo`

```js
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('Acelerou');
  }
}
```

### Classe `Moto` herdando de `Veiculo`

```js
class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}
```

Uso:

```js
const honda = new Moto(4);
honda.empinar();
```

📌 A classe `Moto` herda as propriedades e métodos da classe `Veiculo`.

---

## ⚡ Superclasse (`super`)

```js
class Veiculos {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('Acelerou');
  }
}
```

Subclasse sobrescrevendo método:

```js
class Motos extends Veiculos {
  acelerar() {
    super.acelerar();
    console.log('Muito');
  }
}
```

📌 O `super.acelerar()` chama o método da classe pai antes de executar a lógica adicional.

