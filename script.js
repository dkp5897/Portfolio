const cut = document.querySelector('.cut')
const ham = document.querySelector('.ham');
const sidebar = document.querySelector(".sidebar");

cut.style.display='none'

document.querySelector('.hambar').addEventListener('click',()=>{
    sidebar.classList.toggle('sidebarGo')
    if(sidebar.classList.contains('sidebarGo')){
        setTimeout(()=>{
            ham.style.display="inline"
        },300)
        cut.style.display="none"
    }else{
        ham.style.display='none'
        setTimeout(()=>{
            cut.style.display='inline'
        },300)
    }
})

// cut.addEventListener('click', ()=>{
//     sidebar.classList.add('.sidebarGo')
// })