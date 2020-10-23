var newArticle = document.getElementById('createblog');
newArticle.addEventListener('submit', addArticle);

function addArticle(e){
    e.preventDefault();
    var articles=firebase.database().ref('articles');
    articles.once('value', function(snapshot){
        if(!snapshot.exists()){
            var articleTotalNumber=0;
        }
        else{
            articleTotalNumber = snapshot.numChildren();
        }

        var articleTitle=document.getElementById('title').value;
        var articleContent=document.getElementById('content').value;
        var author=document.getElementById('author').value;

        newArticle(articleTitle, articleContent, author);
        function newArticle(articleTitle, articleContent, author){
            articles.child(articleTotalNumber +1).set({
                title:articleTitle,
                content:articleContent,
                author: author
            });

        }
    });
}