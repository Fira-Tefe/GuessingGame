
let secret = document.querySelector('.secretbox').textContent;
secret = Math.trunc((Math.random()*20)+1);
console.log(secret, typeof secret);
score = 5;
highscore = 0;

document.querySelector('.gbutton').addEventListener('click', function(){
    let guessnumber = Number(document.querySelector('#inputn').value);
 
    if(score < 1){
        location.reload();
    }
    else if(!guessnumber){
        document.querySelector('.guess').textContent = 'Wrong Input, Try again';
        document.querySelector('.cmessage').textContent = 'Fail!';
        score--;
        document.querySelector(".score span").textContent = score;
    }
    else if(guessnumber > secret){
        document.querySelector('.guess').textContent = 'The number is too high';
        document.querySelector('.cmessage').textContent = 'Fail!';
        score--;
        document.querySelector(".score span").textContent = score;
    }
    else if(guessnumber < secret){
        document.querySelector('.guess').textContent = 'The number is too low';
           document.querySelector('.cmessage').textContent = 'Fail!';
           score--;
           document.querySelector(".score span").textContent = score;
    }
    else if(guessnumber == secret){
        document.querySelector('.secretbox').textContent= secret;
        document.querySelector('.guess').textContent = 'Correct guessing!'
        document.querySelector('.cmessage').textContent = 'Congra!';
        document.querySelector('.container').style.backgroundColor = 'green'; 
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore span').textContent = highscore;
        }
        else{
            document.querySelector('.highscore span').textContent = highscore;
        }
    }
});
document.querySelector('.button').addEventListener('click', function(){
    localStorage.setItem('highscore', highscore);
    location.reload();
});

window.onload = function() {
    const storedHighscore = localStorage.getItem('highscore');
    if (storedHighscore !== null) {
        highscore = Number(storedHighscore);
        document.querySelector('.highscore span').textContent = highscore;
    }
};
