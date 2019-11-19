let Mobile = function (name,type) {
    this.name = name;
    this.type = type;
    this.msg = "";
    this.inbox = [];
    this.outbox = [];

    this.writeMsg = function(value){
        this.msg = value;
    };

    this.sendMsg = function(mobile){
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg);
        this.msg = "";
    };

    this.receiveMsg = function(msg){
        this.inbox.push(msg);
    };

    this.draw = function () {
        let html = `<div class="mobile">
            <div class="name" id="${this.type}-name">name</div>
            <textarea id="${this.type}-inbox" class="inbox" disabled placeholder="Inbox"></textarea>
            <textarea id="${this.type}-outbox" class="outbox" disabled placeholder="Outbox"></textarea>
            <input id="${this.type}-msg" class="msg" placeholder="message..." oninput="iphone.writeMsg(this.value)">
            <button type="button" onclick="">Send</button>
            </div>`;
        return html;
    }
}