const textarea = document.getElementById('text')
const button = document.getElementById('btn')

button.addEventListener('click', () => {
    const text = textarea.value 
    const speaks = new SpeechSynthesisUtterance(text)
    speaks.lang = ('pt-BR', 'en-US ')
    window.speechSynthesis.speak(speaks)
})



