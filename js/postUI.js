class PostUI {
    constructor(post){
        this.post = post;

        console.log(this.post.timestamp.getDate());

        this.postsContainer = document.getElementById('postsContainer');
        this.containerRow = document.createElement ('div');
        this.divCol1 = document.createElement ('div');
        this.titleTxt = document.createElement ('h5');
        this.bodyTxt = document.createElement ('p');
        this.timesT = document.createElement ('p');
        this.divCol2 = document.createElement ('div');
        this.deleteBtn = document.createElement ('div');
        this.editBtn = document.createElement('div');

        this.postsContainer.appendChild(this.containerRow);
        this.containerRow.appendChild(this.divCol1);
        this.containerRow.appendChild(this.divCol2);
        this.divCol1.appendChild(this.titleTxt);
        this.divCol1.appendChild(this.bodyTxt);
        this.divCol1.appendChild(this.timesT);
        this.divCol2.appendChild(this.deleteBtn);
        this.divCol2.appendChild(this.editBtn);

        this.containerRow.classList.add('post','row');
        this.divCol1.className = 'col';
        this.divCol2.classList.add('col-2','btnPost');
        this.editBtn.classList.add('btnAction', 'editBtn');
        this.editBtn.setAttribute("id", "updateBtn");
        this.deleteBtn.classList.add('btnAction', 'deleteBtn');


        if(this.post !== null) {
            this.titleTxt.innerText = this.post.title;
            this.bodyTxt.innerText = this.post.body;
           this.timesT.innerText = this.post.owner + '-' + this.post.timestamp.getDate() + '/' + this.post.timestamp.getMonth() + '/' + this.post.timestamp.getFullYear();
        }

    


    }
}

 