class PostUI {
    constructor(post){
        this.post = post;

        console.log('Holaaaaaaaaaaaaaaaaaaaaaaaaaa');

        this.postsContainer = document.getElementById('postsContainer');
        this.containerRow = document.createElement ('div');
        this.divCol1 = document.createElement ('div');
        this.titleTxt = document.createElement ('h4');
        this.bodyTxt = document.createElement ('p');
        this.timesTamp = document.createElement ('p');
        this.divCol2 = document.createElement ('div');
        this.deleteBtn = document.createElement ('div');
        this.editBtn = document.createElement('div');

        this.postsContainer.appendChild(this.containerRow);
        this.containerRow.appendChild(this.divCol1);
        this.containerRow.appendChild(this.divCol2);
        this.divCol1.appendChild(this.titleTxt);
        this.divCol1.appendChild(this.bodyTxt);
        this.divCol1.appendChild(this.timesTamp);
        this.divCol2.appendChild(this.deleteBtn);
        this.divCol2.appendChild(this.editBtn);

        this.containerRow.className = 'post';
        this.containerRow.className = 'row';
        this.divCol1.className = 'col';
        this.divCol2.className = 'col-2';
        this.divCol2.className = 'btnPost';

        if(this.post !== null) {
            this.titleTxt.innerText = this.post.title;
            this.bodyTxt.innerText = this.post.body;
            //this.timesTamp.innerText = this.post.owner + '-' + this.post.timesTamp.getDate() + '/' + this.post.timestam.getMonday() + '/' + this.post.timestam.getYear();
        }

    


    }
}

 