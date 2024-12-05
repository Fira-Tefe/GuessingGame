
let secret = document.querySelector('.secretbox').textContent;
secret = Math.trunc((Math.random()*20)+1);
console.log(secret, typeof secret);
document.querySelector('.secretbox').textContent= secret;

document.querySelector('.gbutton').addEventListener('click', function(){
    let guessnumber = Number(document.querySelector('#inputn').value);
 
    if(!guessnumber){
        document.querySelector('.guess').textContent = 'Wrong Input, Try again';
    }
    else if(guessnumber > secret){
        document.querySelector('.guess').textContent = 'The number is too high';
    }
    else if(guessnumber < secret){
        document.querySelector('.guess').textContent = 'The number is too low';
    }
})