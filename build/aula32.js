"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
})(Veiculos || (Veiculos = {}));
var Motor;
(function (Motor_1) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motor_1.Motor = Motor;
})(Motor || (Motor = {}));
