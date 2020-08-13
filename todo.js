const input = document.querySelector('input')
const button = document.querySelector('.add >button');

button.addEventListener('click',addList);

function addList(e){
    const notComplete = document.querySelector('.notComplete');
    const complete = document.querySelector('.complete');
    const newList= document.createElement('li');
    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    

    checkButton.innerHTML ='<i class="fa fa-check"></i>';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !==''){
        newList.textContent = input.value;
        input.value ='';
        notComplete.appendChild(newList);
        newList.appendChild(checkButton);
        newList.appendChild(deleteButton);
    }
 
    checkButton.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
        complete.appendChild(parent);

    });

    deleteButton.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
    });
}