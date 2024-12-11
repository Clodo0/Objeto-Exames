// main.js
import { Exam } from './exam.js';

// Definindo as respostas corretas e pesos para cada questão
const questionWeights = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const correctAnswers = {
  person: 'Professor',
  values: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

// Inicializando a classe Exam com as respostas e pesos
const examResults = new Exam(correctAnswers, questionWeights);

// Registrando o primeiro exame do aluno
examResults.registerExam({
  student: 'Carlos',
  responses: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

// Exibindo os resultados
console.log('Média:', examResults.calculateAverage()); // Média: 4
console.log('Mínimo:', examResults.getMinScores()); // Mínimo: [4]
console.log('Máximo:', examResults.getMaxScores()); // Máximo: [4]
console.log('Menores que 7:', examResults.getScoresBelow(7)); // Menores que 7: [4]
console.log('Maiores que 7:', examResults.getScoresAbove(7)); // Maiores que 7: []

// Registrando o segundo exame de outro aluno
examResults.registerExam({
  student: 'Mariana',
  responses: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
});

// Exibindo os resultados novamente após adicionar mais um exame
console.log('Média:', examResults.calculateAverage()); // Média: 6
console.log('Mínimo:', examResults.getMinScores()); // Mínimo: [4]
console.log('Máximo:', examResults.getMaxScores()); // Máximo: [8]
console.log('Menores que 7:', examResults.getScoresBelow(7)); // Menores que 7: [4]
console.log('Maiores que 7:', examResults.getScoresAbove(7)); // Maiores que 7: [8]
