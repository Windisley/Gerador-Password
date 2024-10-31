const $textarea = document.querySelector("#generetes-password")
const buttonAdd = document.querySelector(".addpassword")
const buttonClear = document.querySelector(".clear")
const lenghtInput = document.querySelector("#lenghtpassword")

const text = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","W","U","Y","Z",
                "a","b","c","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","w","y","z",
                "!","@","#","$","%","&","*",":","?"]
    
            
buttonAdd.addEventListener("click", ()=>{
                    
    const content = []
    const textZ = text.length
    const inputValue = lenghtInput.value
        
        
    if(inputValue !== ""){
        for(let i =0; i <  inputValue; i++){
                const indextext = Math.floor(Math.random() * textZ)
                
                content.push(text[indextext])
              
                
            }

    }else{
        alert("Defina O Tamanho Da Sua Senha")
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
    