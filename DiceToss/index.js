function diceRolling(){
    var randomNumber1=Math.ceil(Math.random()*6);
    document.querySelector(".img1").getAttribute("src");
    var a="images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src",a);
    var randomNumber2=Math.ceil(Math.random()*6);
    document.querySelector(".img2").getAttribute("src");
    var b="images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",b);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="🚩 Player 1 Won!";
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent="Player 2 Won! 🚩";
    }else{
        document.querySelector("h1").textContent="Draw!";
    }
}