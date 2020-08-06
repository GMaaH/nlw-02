//Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    //Duplicar os campos //Que campos? (.schedule-item)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false
    
    //limpar os campos //Que campos? (input)
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada (forEach) campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpe-o ('')
        field.value=''
    })
    
    //Colocar na página // Onde? (#schedule-items)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    