const listtodos=document.querySelector('.listoftodos');
const form=document.querySelector('.listform');
const searchinput=document.querySelector('#search');

const addtolist=string => { 
    
     listtodos.innerHTML+=`
                 <li class="list-group-item list-item li-text d-flex justify-content-between align-items-center">${string}
                <i class="fas fa-trash"></i>
            </li>`

}
form.addEventListener("submit",e=>{
    e.preventDefault();
    if (form.todotoadd.value.trim().length)
    addtolist(form.todotoadd.value.trim());
    form.todotoadd.value="";
    
});


listtodos.addEventListener("click",e=>{
    if (e.target.classList.contains("fas")){
        e.target.parentElement.remove();
    }
})

const filteritems=(term) => { 
    Array.from(listtodos.children)
    .filter((todo) =>  !todo.innerText.includes(term) )
    .forEach((todo) =>  todo.classList.add("hiddenli") );

    Array.from(listtodos.children)
    .filter((todo) =>  todo.innerText.includes(term) )
    .forEach((todo) => todo.classList.remove("hiddenli") );
 }

searchinput.addEventListener("keyup",()=>{
    const term=searchinput.value.trim();
    filteritems(term);
})

