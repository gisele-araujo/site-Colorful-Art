let movimento = {
    renascimento: 0,
    expressionismo: 0,
    surrealismo: 0,
    popart: 0
    }
    
    function startQuiz() {
        iniciar_quiz.style.display = 'none';
        quadro_apr.style.display = 'none';
        title_quiz.style.display = 'block';
        q1.style.display = 'block';
    }

    // ------------------------QUESTÃO 1------------------------------

    function op1_1() {
        movimento.renascimento++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op2_1() {
        movimento.expressionismo++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op3_1() {
        movimento.surrealismo++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op4_1() {
        movimento.popart++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    // ------------------------QUESTÃO 2------------------------------

    function op1_2() {
        movimento.renascimento++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op2_2() {
        movimento.expressionismo++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op3_2() {
        movimento.surrealismo++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op4_2() {
        movimento.popart++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    // ------------------------QUESTÃO 3------------------------------
    function op1_3() {
        movimento.renascimento++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op2_3() {
        movimento.expressionismo++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op3_3() {
        movimento.surrealismo++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op4_3() {
        movimento.popart++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    // ------------------------QUESTÃO 4------------------------------

    function op1_4() {
        movimento.renascimento++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op2_4() {
        movimento.expressionismo++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op3_4() {
        movimento.surrealismo++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op4_4() {
        movimento.popart++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    // ------------------------QUESTÃO 5------------------------------

    function op1_5() {
        movimento.renascimento++;
        q5.style.display = 'none';
        resultado();
    }

    function op2_5() {
        movimento.expressionismo++;
        q5.style.display = 'none';
        resultado();
    }

    function op3_5() {
        movimento.surrealismo++;
        q5.style.display = 'none';
        resultado();
    }

    function op4_5() {
        movimento.popart++;
        q5.style.display = 'none';
        resultado();
    }

    // ------------------------RESULTADO DO QUIZ: PONTUAÇÃO MAIOR------------------------------

    function resultado() {

        if (movimento.renascimento > movimento.expressionismo && movimento.renascimento > movimento.surrealismo && movimento.renascimento > movimento.popart) {
            result.innerHTML = `RENASCIMENTO ${movimento.renascimento}`;
        }
        else if (movimento.expressionismo > movimento.renascimento && movimento.expressionismo > movimento.surrealismo && movimento.expressionismo > movimento.popart) {
            result.innerHTML = `EXPRESSIONISMO ${movimento.expressionismo}`;
        }
        else if (movimento.surrealismo > movimento.renascimento && movimento.surrealismo > movimento.expressionismo && movimento.surrealismo > movimento.popart) {
            result.innerHTML = `SURREALISMO ${movimento.surrealismo}`;
        }
        else if (movimento.popart > movimento.renascimento && movimento.popart > movimento.expressionismo && movimento.popart > movimento.surrealismo){
            result.innerHTML = `POP ART ${movimento.popart}`;
        } else {
            result.innerHTML = `empate!`;
        }

    }
