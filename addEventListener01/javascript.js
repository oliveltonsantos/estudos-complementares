// const c1 = document.getElementById('c1')

const c1 = document.querySelector('#c1')

const msg = () => {
    alert('Clicou!')
}

c1.addEventListener('click', () => {
    msg()
})


