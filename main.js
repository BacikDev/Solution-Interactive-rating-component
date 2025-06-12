const submitBtn = document.getElementById('submit-btn');
const selectCard = document.getElementById('select');
const thamkYouCard = document.getElementById('thank-you');
const circlesBtn = document.querySelectorAll('.circle');
const scoreElement = document.getElementById('score');



circlesBtn.forEach(button=>{
    button.addEventListener('click', (e)=>{
        circlesBtn.forEach(button=>{
            button.classList.remove('bg-Light-Grey', 'text-white')
        })
        button.classList.add('bg-Light-Grey', 'text-white')
        scoreElement.innerHTML = e.target.innerText

        submitBtn.addEventListener('click', ()=>{
            selectCard.classList.add('hidden')
            thamkYouCard.classList.remove('hidden')
        })
    })
})