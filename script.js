let button = document.getElementById('read-button');

function readMore(){
    let card = document.querySelector('.card')
    card.classList.toggle('active')

    if(card.classList.contains('active')){
        return button.textContent = 'READ LESS';

    }

    button.textContent = 'READ MORE'
}