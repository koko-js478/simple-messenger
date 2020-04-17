import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../user.service';
import { WebSocketService } from '../WebSocket.service';

@Component({
    selector: 'message-window-component',
    templateUrl: './message-window.component.html',
    styleUrls: ['./message-window.component.css'],
    providers: [UserService,WebSocketService]
})
export class MessageWindowComponent implements OnInit {
    prevmessages;
    sender;
    users;
    receiver;
    message: string;
    chatdetails;
    sentdate;

    
    messages;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private webSocketService: WebSocketService,
        ) { 
            this.chatdetails = {
                sender: null,
                receiver: null,
                textcontent: ""
            }

            this.messages = [{
                msg: "",
                senderid: 0,
                receiverid: 0
            }];

        }

    ngOnInit(){
        this.users = this.userService.getallUsers();

        this.webSocketService
            .getPrevMessages()
            .subscribe((data: any) => {
                this.prevmessages = data;
              });

        this.route.paramMap.subscribe(params => {
            this.sender = +params.get('senderId') + 1;
            this.receiver = +params.get('receiverId') + 1;
          });

        this.webSocketService.emit('join', {userid: this.sender});

        this.webSocketService
          .getMessages()
          .subscribe((data: any) => {
            this.messages.push(data);
          });
    }



    sendMessage() {

        this.chatdetails = {
            sender: this.sender,
            receiver: this.receiver,
            textcontent: this.message
        }

        this.messages.push({msg: this.message, senderid: this.sender, receiverid: this.receiver})

        this.webSocketService.storeMessagedb(this.chatdetails);
        
        this.webSocketService.emit("new-message", {receiverid: this.receiver, msg: this.message, senderid: this.sender});
        this.message = '';
    }

}