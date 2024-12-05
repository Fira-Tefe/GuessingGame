
let secret = document.querySelector('.secretbox').textContent;
secret = Math.trunc((Math.random()*20)+1);
console.log(secret, typeof secret);


document.querySelector('.gbutton').addEventListener('click', function(){
    let guessnumber = Number(document.querySelector('#inputn').value);
 
    if(!guessnumber){
        document.querySelector('.guess').textContent = 'Wrong Input, Try again';
        document.querySelector('.cmessage').textContent = 'Fail!';
    }
    else if(guessnumber > secret){
        document.querySelector('.guess').textContent = 'The number is too high';
        document.querySelector('.cmessage').textContent = 'Fail!';
    }
    else if(guessnumber < secret){
        document.querySelector('.guess').textContent = 'The number is too low';
           document.querySelector('.cmessage').textContent = 'Fail!';
    }
    else if(guessnumber == secret){
        document.querySelector('.secretbox').textContent= secret;
        document.querySelector('.guess').textContent = 'Correct guessing!'
        document.querySelector('.cmessage').textContent = 'Congra!';
        document.querySelector('.container').style.backgroundColor = 'blue'; 
    }
});
document.querySelector('.button').addEventListener('click', function(){
    location.reload();
});