// ....Univesal Stracture of function and others......
// :::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here.......
const openModal = document.querySelectorAll('[data-modal-set]')
const closeModal = document.querySelectorAll('[data-modal-close]')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
openModal.forEach(modal=>{
    modal.addEventListener('click',()=>{
        const modalOp = document.querySelector(modal.dataset.modalSet)
        if (modalOp == null){return modalOp}
        if(modalOp){
            modalOp.classList.add('active')
        }
    })
})
closeModal.forEach(closeBtn =>{
    closeBtn.addEventListener('click',()=>{
         closeBtn.closest('.modal').classList.remove('active')
         
    })
})
// :::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith...............
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::











//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::