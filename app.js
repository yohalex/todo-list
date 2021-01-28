


const selection = document.querySelector('select')
const btnAddUser = document.querySelector('.btn-add-user') ; 
const saisi  = document.querySelector('.saisi')
const containerFullName = document.querySelector('.list-full-names')
btnAddUser.addEventListener('click', addUser)

function addUser(){
    verifiValueOfFullName()
}

function verifiValueOfFullName(){
    saisi.value === "" ? alert("Veuillez remplir le champ fullname") : createFullName()
}


function createFullName (){

    //create le container de fullname 
    const componentFullName = document.createElement('div') ; 
    componentFullName.classList.add('component-full-name') ; 
    //create fullname 
    const newFullName = document.createElement('input') ; 
    newFullName.classList.add('saisi','full-name','clone') ; 
    newFullName.setAttribute('disabled','disabled') ; 
    //create btn update 
    const btnUpdate = document.createElement('span') ; 
    btnUpdate.classList.add('icon','good') ; 
    //create image btn update 
    const btnUpdateIcon = document.createElement('img') ; 
    btnUpdateIcon.setAttribute('src','https://img.icons8.com/nolan/64/approve-and-update.png')
    //create btn delete 
    const btnDelete = document.createElement('span') ; 
    btnDelete.classList.add("icon","corbeille") ; 
    //create  icon btn delete
    const btnDeleteIcon = document.createElement('img') ; 
    btnDeleteIcon.setAttribute('src','https://img.icons8.com/fluent-systems-regular/24/000000/delete-trash--v1.png')


    containerFullName.appendChild(componentFullName) ; 
    componentFullName.appendChild(newFullName)
    componentFullName.appendChild(btnUpdate)
    btnUpdate.appendChild(btnUpdateIcon)
    componentFullName.appendChild(btnDelete)
    btnDelete.appendChild(btnDeleteIcon)
    newFullName.value = saisi.value
    saisi.value =""

    deleteFullName()
    updateFullName()
    selectFullNameAndShow()

}


function deleteFullName (){
    const corbeilles = document.querySelectorAll('.corbeille') ; 
    corbeilles.forEach((corbeille)=>{
            corbeille.addEventListener('click', ()=>{
                corbeille.parentNode.remove() ; 
            }) 
    })
}

function updateFullName(){
    const updates = document.querySelectorAll('.good') ; 
    updates.forEach((update)=>{
            update.addEventListener('click', ()=>{
                update.parentNode.childNodes[0].removeAttribute('disabled','false')

                update.parentNode.childNodes[0].addEventListener('change',()=>update.parentNode.childNodes[0].setAttribute('disabled',"disabled"))
            })


    })
}

function selectFullNameAndShow(){
    selection.addEventListener('input',()=>{
        // all 
        if(selection.value === "all"){
            const fullNames = document.querySelectorAll('.component-full-name')
            fullNames.forEach(fullName =>fullName.style.display ="flex")     
        }else{
            const fullNames = document.querySelectorAll('.clone') ; 
            fullNames.forEach(fullName=>{
                fullName.parentNode.style.display = fullName.value.toLowerCase().startsWith(selection.value) ? "flex" : "none"
            }) 
        }
    })
}


