const navForm = document.getElementById('navForm');
const navFeedBack = document.getElementById('navFeedBack');


navForm.addEventListener('submit', e=>{
    e.preventDefault();
    navForm.reset();
    navFeedBack.placeholder = 'ya te enviamos informacion de nosotros'
})