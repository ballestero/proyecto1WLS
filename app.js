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
  var postContainer = document.getElementById('postsContainer');
  var owner = 'Jeison';
  var currentPostSelected = null;

  postBtn.hidden = false;
  updateBtn.hidden = true;
  cancelBtn.hidden = true;

  postBtn.onclick = postBtnOnClick;
  updateBtn.onclick = updateBtnOnClick;
  cancelBtn.onclick = cancelBtnOnClick;
  //editBtn.onclick = editBtnOnClick;

  postContainer.addEventListener('click', selectPost, false);



  var posts = [];
  var slectedPostUI = null;
  var moveToBottom = false;





  var getPost = new XMLHttpRequest();
  getPost.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      var postsData = JSON.parse(getPost.responseText);

      for (const key in postsData) {
        var postData = postsData[key];
        var editable = false;
        if (postData.owner === owner) {
          editable = true;
        }

        var newPost = new Post(key, postData.title, postData.body, postData.owner, postData.timestamp);
        var newPostUI = new PostUI(newPost, owner);
        posts.push(newPost);


      }

    }
  };
  getPost.open("GET", urlBase, true);
  getPost.send();


  function requestAllPost() {

  }

  function sendPostCallback(event) {
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


  function editablePost(ppostInfo){
    
    postBtn.hidden = true;
    updateBtn.hidden = false;
    cancelBtn.hidden = false;

    titleTxt.value= ppostInfo.title;
    bodyTxt.value= ppostInfo.body;
  }
  function updateBtnOnClick() {

    console.log('Post Editado');

    postBtn.hidden = false;
    updateBtn.hidden = true;
    cancelBtn.hidden = true;

  };

  function cancelBtnOnClick() {
    console.log('Edicion Cancelada');

    postBtn.hidden = false;
    updateBtn.hidden = true;
    cancelBtn.hidden = true;

  };

  function deleteBtnOnClick(ppostInfo){
    console.log(ppostInfo);

    
  }



  function selectPost(event) {
    currentPostSelected = getPostByFbKey(event.target);

    if (currentPostSelected.fbkey === event.target.id) {
      editablePost(currentPostSelected);
    } else {
      deleteBtnOnClick(currentPostSelected);
    }

    

  };

  function getPostByFbKey(target) {
    var postSelected = null;

    console.log(target.id);
    

    for (var i = 0; i < posts.length; i++) {
      if (posts[i].fbkey === target.id) {
        postSelected = posts[i];
      }
    }

    if (postSelected === null && target.parentElement !== null) {
      return (target.parentElement);
    } else {
      if (postSelected !== null) {
        return postSelected;
      } else {
        return null;
      }
    }
  }
}