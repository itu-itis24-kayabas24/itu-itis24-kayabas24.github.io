/* Variables*/

const wanted_word= "STOCK"
let lives_count = 3
let tried_letters = []
let score = 0

let restart_button = document.getElementById("refresh")

let remaining_lives = document.getElementById("remaining_lives")

let word =  document.getElementById('word')


let input = document.getElementById('input')
let submit_button= document.getElementById("submit")


 function game() {
    restart_button.addEventListener('click', restart_game)

    submit_button.addEventListener('click', sumbit_letter)
    


    
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

 function sumbit_letter() {

    if(input.value.length == 1 || input.value.length == 5 ){


        if(wanted_word.indexOf(input.value.toUpperCase())>= 0 ){
            /*transform: rotateY(180deg);*/
            /* Harfi döndür  
            Tried letterse ekle
            score arttır
            score'a html css çalış
    
            
            
            */
    
    
            if(input.value.toUpperCase() == wanted_word){
                console.log("tam buldun")
            }
    
            else{
                console.log("o harf var")
            }
    
        }
    
        else if(wanted_word.indexOf(input.value.toUpperCase())< 0){
    
    
    

    
            

            if(input.value.length == 5){

                console.log("direkt kayıp")

                /* kayıp alert */
            }

            else{
                console.log("o harf yok")

                            /*
            Tried letters'a ekle
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




    
