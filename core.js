fuckingtired = 0;

function check(){
    if (fuckingtired==6){
        frame2.style.display= "none";
        frame3.style.display= "block";
    }
}


document.addEventListener("DOMContentLoaded", ()=>{
    music = document.querySelector('#music')
    button = document.querySelector('#startButton')
    button.addEventListener('click',function(){
        music.play()
})
})

overlay = document.querySelector("#overlay")
center = document.querySelector('#center')
cardDisplay = document.querySelector("#cardDisplay")
continueButton = document.querySelector('#continueButton')

present1 = document.querySelector("#present1")
present1.addEventListener("click", ()=>{
    fuckingtired+=1
    present1.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present1.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card1.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"
 
    },3000)
} )

present2 = document.querySelector("#present2")
present2.addEventListener("click", ()=>{
    fuckingtired+=1
    present2.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present2.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card2.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"
  
    },3000)
} )

present3 = document.querySelector("#present3")
present3.addEventListener("click", ()=>{
    fuckingtired+=1
    present3.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present3.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card3.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"

    },3000)
} )


present4 = document.querySelector("#present4")
present4.addEventListener("click", ()=>{
    fuckingtired+=1
    present4.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present4.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card4.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"
      
    },3000)
} )


present5 = document.querySelector("#present5")
present5.addEventListener("click", ()=>{
    fuckingtired+=1
    present5.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present5.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card5.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"

    },3000)
} )


present6 = document.querySelector("#present6")
present6.addEventListener("click", ()=>{
    fuckingtired+=1
    present6.classList.add('openAnimation')
    soundEffect = document.querySelector('#openSound')
    soundEffect.play()
    setTimeout(()=>{
        present6.style.display = "none"
        soundEffect.muted = true
        overlay = document.querySelector("#overlay")
        overlay.style.display = ""
        cardDisplay.src = "images/Card6.png"
        cardDisplay.style.display= 'block'
        center.style.display= 'flex'
        continueButton.style.display ="block"
        
    },3000)
} )

continueButton.addEventListener("click",()=>{
    overlay.style.display = "none"
    cardDisplay.src = ""
    cardDisplay.style.display= 'none'
    center.style.display= 'none'
    continueButton.style.display ="none"
check()
})

frame1= document.querySelector("#frame1")
frame2= document.querySelector("#frame2")
frame3= document.querySelector("#frame3")


startButton= document.querySelector("#startButton")
startButton.addEventListener("click",()=>{
    frame1.style.display = "none"
    frame2.style.display = "block"
})


// Met VLC ra DM