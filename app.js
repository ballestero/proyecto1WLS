window.addEventListener('load', init, false);

function init() {

    //firebaseInit();
    var titleTxt = document.getElementById('titleTxt');
    var bodyTxt = document.getElementById('bodyTxt');
    var postBtn = document.getElementById('postBtn');
    var updateBtn = document.getElementById('updateBtn');
    var deleteBtn = document.getElementById('deleteBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var editBtn = document.getElementById('editBtn');

    postBtn.hidden = false;
    updateBtn.hidden = true;
    cancelBtn.hidden = true;

    postBtn.onclick = postBtnOnClick;
    //updateBtn.onclick = updateBtnOnClick;
    //deleteBtn.onclick = deleteBtnOnClick;
    //cancelBtn.onclick = cancelBtnOnClick;
    //editBtn.onclick = editBtnOnClick;

    var posts = [];
    var slectedPostUI = null;
    var moveToBottom = false;





    /*var getPost = new XMLHttpRequest();
     getPost.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         var request = JSON.parse(getPost.responseText);
         var posts = request.posts;

         var salida = '';

         console.log(posts);

       }
     };
     getPost.open("GET", "https://theevilmouseblog.firebaseio.com/posts.json", true);
     getPost.send();*/

     var getPost = new XMLHttpRequest();
     getPost.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         var request = JSON.parse(getPost.responseText);
         console.log(request);
         posts = request.posts;

         for (var i = 0; i < posts.length; i++) {
            var newPost = new Post(i, posts[i].title, posts[i].body, posts[i].owner, posts[i].timestamp);
            var newPostUI = new PostUI(newPost);
}

       }
     };
     getPost.open("GET", "js/posts.json", true);
     getPost.send();


     function postBtnOnClick(){
       console.log('OKJJ');

      var newPost = new Post('1',titleTxt.value,bodyTxt.value,'Jeison');
      var newPostUI = new PostUI(newPost);
        
     };
}