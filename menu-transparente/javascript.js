window.addEventListener('scroll', function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

