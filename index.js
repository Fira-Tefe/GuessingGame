
let secret = document.querySelector('.secretbox').textContent;
secret = Math.trunc((Math.random()*20)+1);
console.log(secret, typeof secret);
document.querySelector('.secretbox').textContent= secret;

document.querySelector('.gbutton').addEventListener('click', function(){
    let guessnumber = Number(document.querySelector('#inputn').value);
    console.log(guessnumber ,typeof guessnumber);
})