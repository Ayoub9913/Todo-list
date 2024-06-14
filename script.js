const listtodos=document.querySelector('.listoftodos');
const form=document.querySelector('.listform');

const addtolist=string => { 
    
     listtodos.innerHTML+=`
     <div class="list-item">
                 <li class="li-text">${string}<li> 
                 <i class="fas fa-trash"></i></li>
                </li>
     </div>`

}
form.addEventListener("submit",e=>{
    e.preventDefault();
    if (form.todotoadd.value.trim().length)
    addtolist(form.todotoadd.value.trim());
    form.todotoadd.value="";
    
});


listtodos.addEventListener("click",e=>{
    if (e.target.classList.contains("fas")){
        e.target.parentElement.parentElement.remove();
    }
})

