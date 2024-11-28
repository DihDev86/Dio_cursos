// Classe Genérica do Herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "fez um ataque básico";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis
  const heroi1 = new Heroi("Artemis", 25, "mago");
  const heroi2 = new Heroi("Thor", 30, "guerreiro");
  const heroi3 = new Heroi("Shifu", 40, "monge");
  const heroi4 = new Heroi("Hanzo", 28, "ninja");
  
  // Testando os ataques
  heroi1.atacar(); // O mago atacou usando magia
  heroi2.atacar(); // O guerreiro atacou usando espada
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
  