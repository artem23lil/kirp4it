
function openModal(modal) {
    modal.style.display = 'block';
}


function closeModal(modal) {
    modal.style.display = 'none';
}


const modal1 = document.getElementById('myModal1');
const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');


openModalBtn1.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(modal1);
});


closeModalBtn1.addEventListener('click', function() {
    closeModal(modal1);
});


window.addEventListener('click', function(event) {
    if (event.target === modal1) {
        closeModal(modal1);
    }
});


const modal2 = document.getElementById('myModal2');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');


openModalBtn2.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(modal2);
});


closeModalBtn2.addEventListener('click', function() {
    closeModal(modal2);
});


window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        closeModal(modal2);
    }
});
