var TrabSDList = document.getElementById('TrabSDList');
var UserNameInput = document.getElementById('UserNameInput');
var SenhaInput = document.getElementById('SenhaInput');
var AutorNameInput = document.getElementById('AutorNameInput');
var TrabNameInput = document.getElementById('TrabNameInput');
var LingProgInput = document.getElementById('LingProgInput');
var EndGithubInput = document.getElementById('EndGithubInput');
var addButton = document.getElementById('addButton');

//Ao Clicar no botão
addButton.addEventListener('click', function(){
    create(UserNameInput.value, SenhaInput.value, AutorNameInput.value, TrabNameInput.value, LingProgInput.value, EndGithubInput.value);
});

function create(UserName, Senha, AutorName, TrabName, LingProg, EndGithub){
    
    var data = {
        UserName: UserName,
        Senha: Senha,
        AutorName: AutorName,
        TrabName: TrabName,
        LingProg: LingProg,
        EndGithub: EndGithub
    };

    return firebase.database().ref().child('TrabSD').push(data);
}

firebase.database().ref('TrabSD').on('value', function(snapshot){
    TrabSDList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().UserName + ': ' + item.val().Senha + ': ' + item.val().AutorName + ': ' + item.val().TrabName + ': ' + item.val().LingProg + ': ' + item.val().EndGithub));
        TrabSDList.appendChild(li);
    });
});