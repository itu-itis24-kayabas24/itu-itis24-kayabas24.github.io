/* Variables*/

const wanted_word= "STOCK"
let lives_count = 3
let tried_letters = []
let score = 0

let restart_button = document.getElementById("refresh")

let remaining_lives = document.getElementById("remaining_lives")

let letters =  document.querySelectorAll(".letter")


let input = document.getElementById('input')
let submit_button= document.getElementById("submit")

let win_popup = document.getElementById("win")

let gameover_popup= document.getElementById("gameover")

let tried_letters_list = document.querySelector(".letter_list")

function lives_count_adjuster(lives_count){

}
 function game() {
    restart_button.addEventListener('click', restart_game)

    submit_button.addEventListener('click', submit_letter)
 }

 function restart_game() {

    /*
    kalpleri fulle
    score 0
    tried letters 0
    harfler döndür
    */

    console.log("restart")
    
 }

 function submit_letter() {

    if(input.value.length == 1 || input.value.length == 5 ){


        if(wanted_word.indexOf(input.value.toUpperCase())>= 0 ){
 
            if(input.value.toUpperCase() == wanted_word){

                letters.forEach(element => {
                    element.children[0].style.transform =  'rotateY(180deg)'
                });
                
            }
    
            else{
                console.log("o harf var")
                let found_letter_index = wanted_word.indexOf(input.value.toUpperCase())
                let found_letter = letters[found_letter_index].children[0]
     
                found_letter.style.transform = 'rotateY(180deg)'

                tried_letters_list.innerHTML +=  `<li><span>${wanted_word[found_letter_index]}</span></li>`

                scrore += 20

            /*
                score'a html css çalış
            */
            }
    
        }
    
        else if(wanted_word.indexOf(input.value.toUpperCase())< 0){


            if(input.value.length == 5){

                console.log("direkt kayıp")

                /* kayıp popup */
            }

            else{
                console.log("o harf yok")

                tried_letters_list.innerHTML +=  `<li><span>${input.value.toUpperCase()}</span></li>`

                            /*

                         kalp düşür
    
            */
            }

        }
    }
    else{
        alert("1 Ttane harf girin ya da 5 harflik bir tahmin yapın")
                  /*Kırmızı error css */

    }
 }

 game()
