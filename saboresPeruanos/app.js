const btn_menu=document.getElementById('btn_menu')
const menu=document.getElementById('menu')
const icon=document.getElementById('icon')

const ChangeIcon=()=>{
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-times')
    }else{
        icon.classList.replace('fa-times','fa-bars')
    }
}

menu.addEventListener('click',()=>{
    menu.classList.remove('ChangeLeft')
    ChangeIcon()
})

btn_menu.addEventListener('click',()=>{
    menu.classList.toggle('ChangeLeft')
    ChangeIcon()
})