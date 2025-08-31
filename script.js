function startQuiz() {
  let questions = [
    {
      question: "Which country’s flag has a red circle in the center of a white background?",
      options: ["A. Japan", "B. Bangladesh", "C. Turkey", "D. Switzerland"],
      correctAnswer: "A"
    },
    {
      question: "Which country’s flag has a maple leaf in the center?",
      options: ["A. Australia", "B. Canada", "C. New Zealand", "D. Austria"],
      correctAnswer: "B"
    },
    {
      question: "Which country’s flag is green, white, and orange (vertical stripes)?",
      options: ["A. India", "B. Italy", "C. Ireland", "D. Nigeria"],
      correctAnswer: "C"
    },
    {
      question: "Which country’s flag has stars and stripes in red, white, and blue?",
      options: ["A. United Kingdom", "B. United States", "C. Cuba", "D. Liberia"],
      correctAnswer: "B"
    },
    {
      question: "Which country’s flag has a red dragon on a green and white background?",
      options: ["A. Bhutan", "B. Wales", "C. China", "D. Nepal"],
      correctAnswer: "B"
    }
  ];

  let score = 0;

  alert("🌍 Welcome to the Flag Quiz!");

  // Loop through questions
  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    let answer = prompt(
      `Q${i + 1}: ${q.question}\n${q.options.join("\n")}\nYour answer (A/B/C/D):`
    );

    if (answer && answer.toUpperCase() === q.correctAnswer) {
      alert("✅ Correct!");
      score++;
    } else {
      alert("❌ Wrong! The correct answer is " + q.correctAnswer);
    }
  }

  alert(`🎉 Quiz Over! Your score: ${score}/${questions.length}`);
}
