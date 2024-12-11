// exam.js
export class Exam {
    constructor(correctAnswers, questionWeights) {
      this.weights = questionWeights;
      this.correctAnswers = correctAnswers;
      this.studentExams = [];
    }
  
    registerExam(exam) {
      exam.score = Object.keys(exam.responses).reduce((total, question) => {
        return total + (exam.responses[question] === this.correctAnswers.values[question] ? this.weights[question] : 0);
      }, 0);
  
      this.studentExams.push(exam);
    }
  
    calculateAverage() {
      const totalScore = this.studentExams.reduce((sum, exam) => sum + exam.score, 0);
      return totalScore / this.studentExams.length;
    }
  
    getMinScores(count = 1) {
      const scores = this.studentExams.map(exam => exam.score);
      scores.sort((a, b) => a - b);
      return scores.slice(0, count);
    }
  
    getMaxScores(count = 1) {
      const scores = this.studentExams.map(exam => exam.score);
      scores.sort((a, b) => a - b);
      return scores.slice(-count);
    }
  
    getScoresBelow(limit) {
      return this.studentExams.map(exam => exam.score).filter(score => score < limit);
    }
  
    getScoresAbove(limit) {
      return this.studentExams.map(exam => exam.score).filter(score => score > limit);
    }
  }
  