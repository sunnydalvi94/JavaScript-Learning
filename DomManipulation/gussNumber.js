 document.querySelector('.CheckNum').addEventListener('click',
 function(){
    const entNum=Number(document.querySelector('.EntNumBox').value);
    console.log( typeof entNum,entNum);

    if (!entNum) {
        document.querySelector('.message').innerHTML="No number";

    }
    else{
        document.querySelector('.message').innerHTML="##Corrct Anwser##"
    }
 })