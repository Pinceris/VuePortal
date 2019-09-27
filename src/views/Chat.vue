<template>
    <div class="chat container">
        <h2 class="text-primary text-center">Real-Time Chat</h2>
        <h5 class="text-secondary text-center">Powered by Vue.js & Firebase</h5>
        <div class="card">
            <div class="card-body">
                <p class="nomessages text-secondary" v-if="messages.length === 0">
                    [No messages yet!]
                </p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <CreateMessage :name="name"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateMessage from '../components/CreateMessage';
    import {db} from "../main"
    import moment from 'moment';
    export default {
        name: 'chat',
        components: {
            CreateMessage
        },
        data() {
            return{
                messages: [],
                name: ''
            }
        },
        created() {
            this.name = this.$route.params.name;
            let ref = db.collection('messages').orderBy('timestamp');
            ref.onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        let doc = change.doc;
                        this.messages.push({
                            id: doc.id,
                            name: doc.data().name,
                            message: doc.data().message,
                            timestamp: moment(doc.data().timestamp).format('LTS')
                        });
                    }
                });
            });
        }
    }
</script>