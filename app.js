window.addEventListener('load', init, false);

function init() {

  //firebaseInit();
  var urlBase = "https://theevilmouseblog.firebaseio.com/posts.json";
  var titleTxt = document.getElementById('titleTxt');
  var bodyTxt = document.getElementById('bodyTxt');
  var postBtn = document.getElementById('postBtn');
  var updateBtn = document.getElementById('updateBtn');
  var deleteBtn = document.getElementById('deleteBtn');
  var cancelBtn = document.getElementById('cancelBtn');
  var editBtn = document.getElementById('editBtn');
  var owner = 'Jeison';

  postBtn.hidden = false;
  updateBtn.hidden = true;
  cancelBtn.hidden = true;

  postBtn.onclick = postBtnOnClick;
  updateBtn.onclick = updateBtnOnClick;
  //deleteBtn.onclick = deleteBtnOnClick;
  //cancelBtn.onclick = cancelBtnOnClick;
  //editBtn.onclick = editBtnOnClick;

  var posts = [];
  var slectedPostUI = null;
  var moveToBottom = false;





  var getPost = new XMLHttpRequest();
   getPost.onreadystatechange = function() {

     if (this.readyState == 4 && this.status == 200) {

      var postsData = JSON.parse(getPost.responseText);

        for (const key in postsData){
          var postData = postsData[key];
          var editable = false;
          if (postData.owner === owner){
            editable = true;
          }

          var newPost = new Post(key, postData.title, postData.body, postData.owner, postData.timestamp);
          var newPostUI = new PostUI(newPost);
          
        }

     }
   };
   getPost.open("GET", urlBase, true);
   getPost.send();


   function requestAllPost(){
     
   }

  /*var getPost = new XMLHttpRequest();
  getPost.onreadystatechange = function () {
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
  getPost.send();*/

  function sendPostCallback(event){
    var request = event.target;
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        requestAllPost();
        
      } else {
        console.log('Error on request: ', request.status)
      }
      
    }
  }

  function postBtnOnClick() {

    if (titleTxt.value === '' || bodyTxt.value === '') {
      alert('Los datos del post no estan completos');
      
    } else {
      var post = new Post(null, titleTxt.value, bodyTxt.value, owner, true);
      var request = new XMLHttpRequest();
      request.open('Post', urlBase, true);
      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      request.onreadystatechange = sendPostCallback;
      request.send(JSON.stringify(post));
    }

  };

  
  updateBtn = document.getElementById('updateBtn');
  updateBtn.onclick = updateBtnOnClick;

  function updateBtnOnClick(){
    console.log('ok');

  };
}