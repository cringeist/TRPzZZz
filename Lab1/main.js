const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));


const trigger = document.getElementById('modalTrigger');

trigger.addEventListener('click', () => {
    myModal.show();
})