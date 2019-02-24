var TrabSDList = document.getElementById('TrabSDList');
var AutorNameInput = document.getElementById('AutorNameInput');
var TrabNameInput = document.getElementById('TrabNameInput');
var LingProgInput = document.getElementById('LingProgInput');
var EndGithubInput = document.getElementById('EndGithubInput');
var addButton = document.getElementById('addButton');

//Ao Clicar no botão
addButton.addEventListener('click', function () {
    create(AutorNameInput.value, TrabNameInput.value, LingProgInput.value, EndGithubInput.value);
});

function create(AutorName, TrabName, LingProg, EndGithub) {

    var data = {
        AutorName: AutorName,
        TrabName: TrabName,
        LingProg: LingProg,
        EndGithub: EndGithub
    };

    return firebase.database().ref().child('TrabSD').push(data);
}

firebase.database().ref('TrabSD').on('value', function (snapshot) {
    TrabSDList.innerHTML = '  ';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode('Autor: ' + item.val().AutorName + ' --> Titulo do Trabalho : ' + item.val().TrabName + ' --> Linguagem de Programação : ' + item.val().LingProg + ' --> Endereço do Github: ' + item.val().EndGithub));
        TrabSDList.appendChild(li);
    });
});