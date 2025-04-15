class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediario";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Demais Idades";
        }
    }

    calculaIMC() {
        const resultado = this.peso / (this.altura * this.altura);
        return `IMC: ${resultado.toFixed(2)}`;
    }

    calculaMediaValida() {
        let notas = [...this.notas];
        notas.sort((a, b) => a - b);
        let notasValidas = notas.slice(1, 4);
        let soma = 0;
        notasValidas.forEach(nota => soma += nota);
        let media = soma / notasValidas.length;
        return media.toFixed(2);
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}