let screen = ""
let number = document.querySelectorAll(".button")
console.log(number);
Array.from(number).forEach((btn)=>btn.addEventListener('click',(e)=>{  
    try{
        if(e.target.innerHTML == 'AC'){
            let output = document.getElementById('display')
            screen = 0           
            output.value =null;  

        }else if(e.target.innerHTML == '='){
            screen = eval(screen)
            let output = document.getElementById('display')
            output.value = screen

        }else if(e.target.innerHTML == 'DEL'){
            screen =screen.slice(0,-1)
            let output = document.getElementById('display')
            output.value = screen        }
        else{
            screen = screen + e.target.innerHTML;
            let output = document.getElementById('display')
            output.value = screen
        }
    }catch{
        alert('Wrong Input')
    }  
    
}))

