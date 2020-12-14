# Snake Game

1. Português
2. English

# Português

O famoso jogo da cobrinha do querido Nokia 3310, recriado utilizando HTML, CSS e Javascript, no modelo de grids.
Primeiro, foi criado no HTML uma caixa grande (a grid central), e, em seguida, preenchi ela com pequenas grids, até que se tornasse uma caixa 20 x 20 (usei um script para que o código HTML não ficasse tão grande).
Em seguida, criei 3 funções no Javascript que fazem o jogo funcionar (4 funções na verdade, mas uma é só pra que o jogo pudesse ser jogado com o teclado). A primeira função, startGame(), é acionada ao apertar o botão "Jogar!" e coloca a cobra no início da grid e coloca a maçã em algum lugar aleatório do nosso "tabuleiro". A segunda função, moveOutComes(), é responsável por cuidar da jogabilidade, sendo que é a que aumenta a cobra caso ela coma uma maçã e acaba com o jogo caso ela atinja as bordas ou a si mesma. A terceira, randomApple(), como o nome já diz, é a função que coloca as maçãs em algum lugar aleatório da grid principal. É ativada na função moveOutComes() e na startGame().

# English

The famous snake game, made with HTML, CSS and Javascript, using the grid model.
First, a large grid was created in the HTML file, and thne it was filled with small grids until it became a 20 x 20 grid (I used a script to fill it with 400 small grids).
Then, I created 3 functions on the Javascript file that make the game work (actually, 4 functions, but one is just for the game be played with the keyboard). The first function, startGame(), is triggered by clicking on "Jogar!" button, and put the snake and one random apple on the game. The second function, moveOutComes(), deal with the snake moves - add one grid to the snake size if it eats an apple and ends the game if it hits itself or the big grid borders. The third function is the randomApple(), and as the name implies, it is the function that places apples all over the big grid. It is activated in the other functions.
