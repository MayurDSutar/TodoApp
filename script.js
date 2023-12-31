let todoinput=document.querySelector('.todoinput input');
let todobutton=document.querySelector('.todoinput button');
let yourtask= document.querySelector('.yourtask');
let xmark=document.querySelector("body > div > main > div > button");

function func(){
    
    if(todoinput.value!==''){
        let li = document.createElement('li');
    
        let i= document.createElement('i');
        i.classList.add('fa-solid', 'fa-xmark');
        li.innerHTML=todoinput.value;
        li.appendChild(i);
        yourtask.appendChild(li);
        todoinput.value='';
        i.addEventListener('click',()=>{
            li.remove();
            if(yourtask.innerHTML==='') xmark.style.display='none';
         })
         xmark.style.display='inline';
        }
else{
alert('Enter some input !');
}
}    

function deletetodo(){
    xmark.style.display='none';
    yourtask.innerHTML='';
}

todoinput.addEventListener('keyup',(e)=>{
    
    if(e.key==='Enter'){
    if(todoinput.value!==''){
        let li = document.createElement('li');
        let i= document.createElement('i');
        i.classList.add('fa-solid', 'fa-xmark');
        li.innerHTML=todoinput.value;
        li.appendChild(i);
        yourtask.appendChild(li);
        todoinput.value='';
        i.addEventListener('click',()=>{
            li.remove();
            if(yourtask.innerHTML==='') xmark.style.display='none';
         })
         xmark.style.display='inline';
   
}else{
    alert('Enter some input!');
    }
}
})

xmark.addEventListener('click',deletetodo);
todobutton.addEventListener('click',func);



    

    
