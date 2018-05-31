class Post {
    constructor(fbkey, title, body, owner, timestamp){
        console.log('OK2');
        this.fbkey = fbkey;
        this.title = title;
        this.body = body;
        this.owner = owner;

        if (timestamp === null) {
            this.timestamp = new Date();
        } else {
            this.timestamp = new Date(timestamp);
        }

        console.log(this.fbkey, this.title, this.body, this.owner);
    }
}