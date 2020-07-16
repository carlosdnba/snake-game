# Snake Game
1. Português
2. English

# Português
## O famoso jogo da cobrinha do querido Nokia 3310, recriado utilizando HTML, CSS e Javascript, no modelo de grids.
#### Primeiro, foi criado no HTML uma caixa grande (a grid central), e, em seguida, preenchi ela com pequenas grids, até que se tornasse uma caixa 20 x 20 (usei um script para que o código HTML não ficasse tão grande).
#### Em seguida, criei 3 funções no Javascript que fazem o jogo funcionar (4 funções na verdade, mas uma é só pra que o jogo pudesse ser jogado com o teclado). A primeira função, startGame(), é acionada ao apertar o botão "Jogar!" e coloca a cobra no início da grid e coloca a maçã em algum lugar aleatório do nosso "tabuleiro". A segunda função, moveOutComes(), é responsável por cuidar da jogabilidade, sendo que é a que aumenta a cobra caso ela coma uma maçã e acaba com o jogo caso ela atinja as bordas ou a si mesma. A terceira, randomApple(), como o nome já diz, é a função que coloca as maçãs em algum lugar aleatório da grid principal. É ativada na função moveOutComes() e na startGame().  