let wordInput=document.querySelector("#word-input")
let currentWord=document.querySelector("#current-word")
let timeDisplay=document.querySelector("#time")
let scoreDisplay=document.querySelector("#score")
let message=document.querySelector("#message")
let time=5
let score=0

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];
window.addEventListener("DOMContentLoaded",init)

function init(){
    showWords(words)  
    wordInput.addEventListener("input",startMatch)
    setInterval(countDown,1000)
    setInterval(checkStatus,50)
}     

function showWords(words){
    const randomIndex=Math.floor(Math.random()*words.length)
    currentWord.innerHTML=words[randomIndex]
}

function startMatch(){
    if(matchWords()){
        showWords(words)
        wordInput.value=''
        message.innerHTML='correct!!!'
        score++
        time=6
    }else{
        message.innerHTML='incorrect!!!'
    }
    scoreDisplay.innerHTML=score
}

function matchWords(){
    if(currentWord.innerHTML===wordInput.value){
        return true;
    } else{
        return false;
    }
}

function checkStatus(){
    if(time===0){
        message.innerHTML="game over"
        scoreDisplay.innerHTML=0
    }
}

function countDown(){
    if(time>0)
        time--
        timeDisplay.innerHTML=time
       
}