<script>

    import {preguntas} from "../contents/Preguntas";
    // Datos de ejemplo (puedes cargarlos desde un archivo externo)
    const triviaData = preguntas.sort(() => Math.random() - 0.5).splice(0,5);
  
    let currentQuestionIndex = 0;
    let userScore = 0;
  
    function checkAnswer(selectedAnswer) {
      
      const currentQuestion = triviaData[currentQuestionIndex];
      
      if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswer]) {
        userScore++;
      }

      currentQuestionIndex++;
    }
  
    function resetTrivia(){
      currentQuestionIndex = 0;
      userScore = 0;
    }
  </script>
  
  <main class="flex flex-col items-center gap-2 m-5">
    {#if currentQuestionIndex < triviaData.length}    
      <div class="border border-second p-5 w-full text-center">
        <h1 class="text-lg font-sans font-bold  text-second">Pregunta {currentQuestionIndex + 1}</h1>
        <p class="font-sans text-lef text-ter">{triviaData[currentQuestionIndex].question}</p>
      </div>
      {#each triviaData[currentQuestionIndex].answers as answer}
        <button class="p-5 border border-second rounded-full w-full font-sans text-lef text-ter" on:click={()=>checkAnswer(answer)}>{answer}</button>
      {/each}
    {:else}
      <div class="border-second flex flex-col items-center gap-2">
        <h1 class="text-lg font-sans font-bold  text-second" >¡Trivia completada!</h1>
        <p class="font-sans text-lef text-ter">Tu puntaje final es: {userScore} / {triviaData.length}</p>
        <button class="p-5 border border-second rounded-full" on:click={()=>resetTrivia()}>Jugar de nuevo</button>
      </div>
    {/if}
  </main>
  