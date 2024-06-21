<script>
    // Datos de ejemplo (puedes cargarlos desde un archivo externo)
    const triviaData = [
      {
        question: '¿Cuál es la capital de Francia?',
        answers: ['París', 'Londres', 'Madrid'],
        correctAnswer: 'París'
      },
      // Agrega más preguntas aquí
    ];
  
    let currentQuestionIndex = 0;
    let userScore = 0;
  
    function checkAnswer(selectedAnswer) {
      const currentQuestion = triviaData[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        userScore++;
      }
      nextQuestion();
    }
  
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < triviaData.length) {
        // Mostrar la siguiente pregunta
      } else {
        // Mostrar el puntaje final
      }
    }
  </script>
  
  <main>
    {#if currentQuestionIndex < triviaData.length}
      <h1>Pregunta {currentQuestionIndex + 1}</h1>
      <p>{triviaData[currentQuestionIndex].question}</p>
      {#each triviaData[currentQuestionIndex].answers as answer}
        <button on:click={() => checkAnswer(answer)}>{answer}</button>
      {/each}
    {:else}
      <h1>¡Trivia completada!</h1>
      <p>Tu puntaje final es: {userScore} / {triviaData.length}</p>
    {/if}
  </main>
  
  <style>
    /* Estilos CSS para personalizar la apariencia */
    /* Por ejemplo, colores, fuentes, márgenes, etc. */
  </style>
  