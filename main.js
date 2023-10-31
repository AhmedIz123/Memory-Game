var cases=document.querySelectorAll('.case');
var selecteditem;
var guessed=0;
cases.forEach((selectedcase) => {
    selectedcase.addEventListener("click",function(){
        var img=selectedcase.querySelector('img');
        if(selecteditem==null){
            selecteditem=img;
            selecteditem.style.visibility='visible';
        }else if(img.src==selecteditem.src){
            selecteditem.style.visibility='visible';
            img.style.visibility='visible';
            guessed=guessed+2;
            selecteditem=null;
        }else{
            img.style.visibility='visible';
            setTimeout(() => {
                selecteditem.style.visibility = 'hidden';
                img.style.visibility = 'hidden';
                selecteditem = null;
            }, 700);
        }
    });
});
var start=document.getElementById('start');
start.addEventListener('click',function(){
    start.style.display='none';
    let seconds = 60;
    let minuteur=document.getElementById('play');
    const interval = setInterval(function() {
        minuteur.innerHTML='<p> <i class="fa-solid fa-hourglass-half fa-spin" style="color: #ffffff;margin-right:20px"></i> '+seconds+'s </p>';
        seconds--;
        if(guessed==cases.length){
            clearInterval(interval);
            minuteur.innerHTML='<p id="winner">WINNER!</p>';
        }
        if (seconds === 0) {
            clearInterval(interval);
            minuteur.innerHTML='<p id="loser">LOSER!</p>';
        }
    }, 1000);
    cases.forEach((selectedcase) => {
        selectedcase.querySelector('img').style.visibility='hidden';
    });
    for(i=0;i<20;i++){
        let randomIndex1 = Math.floor(Math.random() * cases.length);
        let randomIndex2 = Math.floor(Math.random() * cases.length);
        img1=cases[randomIndex1].querySelector('img');
        img2=cases[randomIndex2].querySelector('img');
        a=img1.src;
        img1.src=img2.src;
        img2.src=a;
    }
    
})