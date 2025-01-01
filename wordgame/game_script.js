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

restart_button.addEventListener('click', restart_game)

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
    /*
    tried letters 0
    harfler döndür
    */

    console.log("restart")
    
 }

 function submit_letter() {

    if(input.value.length == 1 || input.value.length == 5 ){

        if(wanted_word.indexOf(input.value.toUpperCase())>= 0 ){

            /* TAM BULMAK */
 
            if(input.value.toUpperCase() == wanted_word){

                letters.forEach(element => {
                    element.children[0].style.transform =  'rotateY(180deg)'
                });
                
            }

             /* 1 HARFİ BULMAK */
    
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
    
        else{


            if(input.value.length == 5){

                console.log("direkt kayıp")
                lives_count = 0
                lives_count_adjuster(lives_count)

                if(lives_count == 0){

                    console.log("gameover popup")
                    gameover_popup.style.display = 'flex'
                }


            }

            else{
                console.log("o harf yok")

                tried_letters_list.innerHTML +=  `<li><span>${input.value.toUpperCase()}</span></li>`

                lives_count -= 1

                lives_count_adjuster(lives_count)

                if(lives_count == 0){
                    console.log("gameover popup")
                    gameover_popup.style.display = 'flex'
                }

            }

        }
    }

    else{
        alert("1 Ttane harf girin ya da 5 harflik bir tahmin yapın")
                  /*Kırmızı error css */

    }
    console.log("geldi buraya")

    input.value = ""
 }

