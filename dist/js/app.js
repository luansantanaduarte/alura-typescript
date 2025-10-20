import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date());
console.log(negociacao);
// no console, não foi mudado o valor privado da quantidade, e sim foi criada uma nova propriedade pública chamada quantidade.
console.log(negociacao.volume);
