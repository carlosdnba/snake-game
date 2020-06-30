document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');

    const width = 10;
    let currentIndex = 0; // first div in our grid
    let appleIndex = 0; // first div in our grid
    let currentSnake = [2, 1, 0]; // so the div in our grid 2 being (the head), and 0 being the end (tail), and the rest the body
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    // start and restart the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'));
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 500;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'));
        interval = setInterval(moveOutComes, intervalTime);
        document.querySelector('.grid').style.borderColor = '#e0daca';
    }

    // function that deals with all the ove outcomes of the snake
    function moveOutComes() {

    //snake hitting border and snake hitting it self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
            (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width) ||  //if snake hits the top
            squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
        ) {
            document.querySelector('.grid').style.borderColor = '#c11b04';
            return clearInterval(interval); //this will clear the interval if any of the above happen
        }

        const tail = currentSnake.pop(); 
        squares[tail].classList.remove('snake'); 
        currentSnake.unshift(currentSnake[0] + direction); //gives direction to the head of the array

        // snake getting the apple
        if(squares[currentSnake[0]].classList.contains('apple')) {

            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            randomApple();
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutComes, intervalTime);
        }        
        squares[currentSnake[0]].classList.add('snake');
    }

    // generate new apple once apple is eaten
    let oldApple = 0;
    function randomApple() {
        
        do {
            appleIndex = Math.floor(Math.random() * 99);
        } while (squares[appleIndex].classList.contains('snake'));

        if (appleIndex < 3 || appleIndex > 99 || appleIndex === oldApple) {
            randomApple();
        }

        oldApple = appleIndex;
        squares[appleIndex].classList.add('apple');
    }

    // functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake'); // removing the snake from all squares

        if(e.keyCode === 39) {
            direction = 1; // press the right arrow -> the snake will go right one
        } else if (e.keyCode === 38) {
            direction = - width; // press up arrow -> the snake will go back ten divs, appearing to go up
        } else if (e.keyCode === 37) {
            direction = -1; // press left -> snake will go left one div
        } else if (e.keyCode === 40) {
            direction = + width; // press down -> snake head will instantly appear in the div ten divs from where you are now
        }
    }

    upBtn.addEventListener('click', function() {
        direction = - width;
    });
    downBtn.addEventListener('click', function() {
        direction = + width;
    });
    rightBtn.addEventListener('click', function() {
        direction = 1;
    });
    leftBtn.addEventListener('click', function() {
        direction = -1;
    });

    document.addEventListener('keyup', control);
    startBtn.addEventListener('click', startGame);
});