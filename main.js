import Bio from './modules/Bio.js';
import Gallery from './modules/Gallery.js';
import Nav from './modules/Nav.js';

const rootDiv = document.getElementById('root')
const Main = () => {
    return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Gallery()}
       </div>
    `
}

rootDiv.innerHTML = Main()

    const editBio = document.querySelector('.edit-bio')

    editBio.addEventListener('submit', () => {
        event.preventDefault()

    const nameInput = document.querySelector('#name').value
    const nameOutput = document.querySelector('.name')

    nameOutput.innerText = nameInput
})