/* Variables*/
const wanted_word= "STOCK"
let lives_count = 3
let tried_letters = []
let score = 0
let score_ui = document.querySelectorAll(".score")
let restart_buttons = document.querySelectorAll(".refresh")
let remaining_lives = document.getElementById("remaining_lives")
let letters =  document.querySelectorAll(".letter")
let input = document.getElementById('input')
let submit_button= document.getElementById("submit")
let win_popup = document.getElementById("win")
let gameover_popup= document.getElementById("gameover")
let tried_letters_list = document.querySelector(".letter_list")

restart_buttons.forEach(element => {
    element.addEventListener('click', restart_game)
});

submit_button.addEventListener('click', submit_letter)

function lives_count_adjuster(lives_count){

        remaining_lives.innerHTML = " "
        for (let index = 1; index <= lives_count; index++) {
            
            remaining_lives.innerHTML += '<li><img src="../assets/images/heart.svg" alt=""></li>'
            
        }

}

function restart_game() {
    lives_count = 3
    lives_count_adjuster(lives_count)
    score = 0

    letters.forEach(element => {
        element.children[0].style.transform =  'rotateY(0deg)'
    });
   tried_letters_list.innerHTML= ""
   tried_letters = []

    console.log("restart")

    win_popup.style.display = "none"
    gameover_popup.style.display = "none"
    
 }

function checkTriedLetters(letter){

    if(tried_letters.includes(letter)){
        return false
    }
    else{
        tried_letters.push(letter)
    }

    tried_letters_list.innerHTML = ""
    tried_letters.forEach(element => {
        tried_letters_list.innerHTML +=  `<li><span>${element}</span></li>`
        console.log("yapıldı")
    });
    return true
 }

function submit_letter() {

    if(input.value.length == 1 || input.value.length == 5 ){

        if(wanted_word.indexOf(input.value.toUpperCase())>= 0 ){

            /* TAM BULMAK */
            if(input.value.toUpperCase() == wanted_word){

                letters.forEach(element => {
                    element.children[0].style.transform =  'rotateY(180deg)'
                });
                score = 100                        
                setTimeout(function() {
                    win_popup.style.display = "flex"
                    }, 1000);

            }

            /* 1 HARFİ BULMAK */
            else{
                let found_letter_index = wanted_word.indexOf(input.value.toUpperCase())

                if(checkTriedLetters(wanted_word[found_letter_index])){
                    score += 20

                    let found_letter = letters[found_letter_index].children[0]
         
                    found_letter.style.transform = 'rotateY(180deg)'

                    if(wanted_word.split("").every(attemptedLetter => tried_letters.includes(attemptedLetter))){
                        setTimeout(function() {
                            win_popup.style.display = "flex"
                          }, 1000);

                        

                    }
                }
            }

        }

        else{
            /*YANLIŞ TAHMİN */
            if(input.value.length == 5){

                lives_count = 0
                lives_count_adjuster(lives_count)
                letters.forEach(element => {
                    element.children[0].style.transform =  'rotateY(0deg)'
                });
                setTimeout(function() {
                    gameover_popup.style.display = 'flex'
                  }, 1000);
                

                

            }
    
            /*YANLIŞ HARF TAHMİN */
            else{
                if(checkTriedLetters(input.value.toUpperCase())){
                    lives_count -= 1
        
                    lives_count_adjuster(lives_count)
        
                    if(lives_count == 0){
                        restart_game()
                        setTimeout(function() {
                            gameover_popup.style.display = "flex"
                            }, 1000);

                        
                        
                    }

                }

            }
    
        }
    
    }

    else{
        alert("1 Tane harf girin ya da 5 harflik bir tahmin yapın")
    }
    input.value = ""
    
    score_ui.forEach(element => {
        element.innerHTML = `Score : ${score}`})
    
 }

