// ....Univesal Stracture of function and others......
// :::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here.......
const openModal = document.querySelectorAll('[data-modal-set]')
const closeBtn = document.querySelectorAll('[data-modal-close]')
const overlay = document.getElementById('overlay')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
overlay.addEventListener('click',()=>{
    const modal = document.querySelectorAll('.modal.active')
    modal.forEach(mod=>{
        mod.classList.remove('active')
        overlay.classList.remove('active')
    })
})
openModal.forEach(Omodal=>{
    Omodal.addEventListener('click',()=>{
        if(Omodal == null) return
        const aModal = document.querySelector(Omodal.dataset.modalSet)
        activeModal(aModal)
    })
})
closeBtn.forEach(singleBtn=>{
    singleBtn.addEventListener('click',()=>{
        const cBtn = singleBtn.closest('.modal.active')
        clossModal(cBtn)
        
    })
})
// :::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith...............
 function activeModal(aModal){
     aModal.classList.add('active')
     overlay.classList.add('active')
 }
function clossModal(cBtn){
 cBtn.classList.remove('active')
  overlay.classList.remove('active')
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::