


function generateRandomCode(){
    let code= Math.floor((Math.random() * 9000) + 1000);
    return code;
}

function reset(){
    document.getElementById("notifyNotMatched").style.display="none";
    document.getElementById("notifyMatched").style.display= "none";
    document.getElementById("noCode").style.display= "none";
    document.getElementById("typedCode").value= "";
    document.getElementById("submitBtn").style.display= "inline-block";
    document.getElementById("tryLeft").innerText= 3;
};

const codeGeneratorBtn= document.getElementById("codeGeneratorBtn");
codeGeneratorBtn.addEventListener('click', function(){
    const randomCode= generateRandomCode();
    document.getElementById("randomPinText").value= randomCode;
    reset();
});

document.getElementById("keyPad").addEventListener('click', function(event){
    const number= event.target.innerText;
    const inputDisplay= document.getElementById("typedCode");
    const oldPin= inputDisplay.value;

    if(isNaN(number)){
        if(number== 'C'){
            document.getElementById("typedCode").value= "";
        } else if(number== '<'){
            let str= oldPin.slice(0, -1);
            console.log(str);
            inputDisplay.value= str;
        }
    } else{
        
        const newPin= oldPin+ number;
        inputDisplay.value= newPin;
    }
});

document.getElementById("submitBtn").addEventListener('click', function(){
    const generateCode= document.getElementById("randomPinText").value;
    const typedPin= document.getElementById("typedCode").value;

    if (generateCode== typedPin){
        if(generateCode == ""){
            document.getElementById("noCode").style.display= "block"
        } else{
            document.getElementById("notifyNotMatched").style.display="none";
            document.getElementById("notifyMatched").style.display= "block";
        }
        
    } else{
        document.getElementById("notifyMatched").style.display= "none";
        document.getElementById("notifyNotMatched").style.display="block";
        const tryLeft= document.getElementById("tryLeft");
        let tryLeftNum= parseInt(tryLeft.innerText);
        if(tryLeftNum>1){
            tryLeft.innerText= tryLeftNum- 1;
        } else{
            tryLeft.innerText= tryLeftNum- 1;
            document.getElementById("submitBtn").style.display= "none";
        }
        
    }
});

// document.getElementById('keyPad').addEventListener('click', function (event) {
//     const typedCodeViewer= document.getElementById("typedCode");
//     const number = event.target.innerText;
//     let submittedCode= submitValue(number);
//     typedCodeViewer.value= submittedCode;
// });

// function submitValue(number){
//     const typedCodeViewer= document.getElementById("typedCode");

//     if(isNaN(number)){
//         if(number= 'C'){
//             typedCodeViewer.value= "";
//         }
//     }
//     else{
//     let oldTypedValue= typedCodeViewer.value;
//     let submittedValue=  oldTypedValue+ number;
//     return submittedValue;
//     }

    
// }

// const submitBtn= document.getElementById("submitBtn");
// submitBtn.addEventListener('click',function(){
//     let randomCode= generateRandomCode();
//     let submittedCode= submitValue();
//     console.log (submittedCode);
// });