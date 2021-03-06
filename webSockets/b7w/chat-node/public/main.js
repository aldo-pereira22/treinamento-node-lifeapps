const socket = io();

let userName = ''

let userList = [];

let loginPage = document.querySelector('#loginPage')
let chatPage = document.querySelector('#chatPage')

let loginInput = document.querySelector('#loginNameInput')
let textInput = document.querySelector('#chatTextInput')

loginPage.style.display = 'flex';
chatPage.style.display = 'none'
function addMessage(type, user, msg) {

    let ul = document.querySelector('.chatList');
    switch (type) {
        case 'status':
            ul.innerHTML += '<li class="m-status">' + msg + '</li>'
            break

        case 'msg':
            ul.innerHTML += '<li class=""m-txt"> <span>' + user + ' </span>' + msg + '</lil>'
            break
    }
}
function renderUserList() {
    let ul = document.querySelector('.userList')
    ul.innerHTML = '';
    userList.forEach(i => {
        ul.innerHTML += '<li>' + i + '</li>'
    })

}
loginInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let name = loginInput.value.trim();
        if (name != '') {
            userName = name;
            document.title = 'Chat (' + userName + ')';
            socket.emit('join-request', userName)

        }
    }
})

socket.on('user-ok', (list) => {
    loginPage.style.display = 'none'
    chatPage.style.display = 'flex'
    textInput.focus();

    addMessage('status', null, 'Conecatdo!')
    userList = list;
    renderUserList();

})

socket.on('list-update', (data) => {
    if (data.joined) {
        addMessage('status', null, data.joined + 'entrou no chat.')
    }

    if (data.left) {
        addMessage('status', null, data.left + 'saiu do chat.')
    }
    userList = data.list
    renderUserList();
})