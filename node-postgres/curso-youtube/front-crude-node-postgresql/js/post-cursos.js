const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    // Capturar os dados do formulário
    // enviar os dados para a API
    const curso = getDadosForm()
    enviarDadosApi(curso)

})


function getDadosForm(){
    const inputNome = document.querySelector('#nome')
    const inputCh = document.querySelector('#ch')

    if(inputNome.value === null || inputCh.value === null){
        console.log('Campos vazios')
        return

    }

    const curso = {
        nome: inputNome.value, 
        ch: inputCh.value
    }

    return curso
}

async function enviarDadosApi(curso){
    try {
        

        const resposta = await fetch('http://localhost:3000/cursos',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(curso)
        })

        if(resposta.status === 201){
            limparCampos()
            window.location.href = 'index.html'
        }else {
            console.log("Erro ao adicionar curso")
        }
    } catch (error) {
        console.error(error)
    }
}


function limparCampos(){
    document.querySelector('#nome').value = ''
    document.querySelector('#ch').value = ''

}