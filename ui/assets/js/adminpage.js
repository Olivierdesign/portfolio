function getUserCurrentLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(){
            var userlatitude = position.coords.latitude;
            var userlongitude = position.coords.longitude;
        });
    } else {
        console.log('geolocation not supported');
    }
}
getUserCurrentLocation();
var articles = firebase.database().ref('articles');
var articleId = 0;
articles.once('value', getArticles);
function getArticles(snap){
    var arts = snap.val();
    var keyarts = Object.keys(arts);
    for(var j= 0; j < keyarts.length; j++) {
        var articleTitle = arts[keyarts[j]].title;
        var artAuthor = arts[keyarts[j]].author;
        articleId = j+1;
        var artsTable = document.getElementById('articlestable');
        artsTable.innerHTML += `<tr> <td>${articleTitle} </td> <td>${artAuthor}</td><td><input
        type = 'button'  value = 'Delete' onclick='deleteArticle(${j},${articleId});'> <input
        type = 'button'  value = 'Edit' onclick=''></td></tr>`;

    }
}
function deleteArticle (j,articleId){
    articles.child(articleId).remove();
    document.getElementById('articlestable').deleteRow(j+1);
}

var messages = firebase.database().ref('message');
messages.once('value', getMessages);
function getMessages(snap){
    var msgs = snap.val();
    var keymsgs = Object.keys(msgs);
    for(var i= 0; i < keymsgs.length; i++) {
        var senderName = msgs[keymsgs[i]].name;
        var senderMessage = msgs[keymsgs[i]].message;
        var senderEmail = msgs[keymsgs[i]].email;

        var msgsTable = document.getElementById('mstable');
        msgsTable.innerHTML += `<tr> <td>${senderName} </td> <td>${senderMessage} </td><td>${senderEmail} </td></tr>`;

    }
}