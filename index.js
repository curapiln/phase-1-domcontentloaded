const newText = document.querySelector('p');
   document.addEventListener('DOMContentLoaded', () => { 
    updateDOM()
    console.log('DOM fully loaded and parsed');
})

function updateDOM(){ 
    document.getElementById('text').textContent = 'This is really cool!'

}
   
   
    