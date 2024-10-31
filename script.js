const $textarea = document.querySelector("#generetes-password")
const buttonAdd = document.querySelector(".addpassword")
const buttonClear = document.querySelector(".clear")

const text = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","W","U","Y","Z",
                "a","b","c","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","y","z",
                "!","@","#","$","%","&","*",":","?"]
    
            
buttonAdd.addEventListener("click", ()=>{
                    
    const content = []
    const textZ = text.length
    
        
        for(let i =0; i < 14; i++){
            const indextext = Math.floor(Math.random() * textZ)
           
            content.push(text[indextext])
          
            
        }
        
        if(content.length > 0){
            $textarea.value = ""
          
            $textarea.value += content.join("")
          
        }

        
    })
    
    buttonClear.addEventListener("click", ()=>{
        if($textarea.value != ""){
            $textarea.value = ""

        }else{
            alert("Campo Vazio, Gere uma Senha Primeiro!")
        }
    })
    