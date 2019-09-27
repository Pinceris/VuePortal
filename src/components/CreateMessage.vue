<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="is-grouped">
                <label>
                    <input type="text" name="message" class="control" placeholder="Enter message ..." v-model="newMessage">
                </label>
                <p class="text is-danger" v-if="errorText">{{ errorText }}</p>
            </div>
            <button class="button is-success" type="submit" name="action">Submit</button>
        </form>
    </div>
</template>

<script>
    import {db} from "../main";

    export default {
        name: 'CreateMessage',
        props: ['name'],
        data(){
            return {
                newMessage: null,
                errorText: null,
            }
        },
        methods: {
            createMessage () {
                if (this.newMessage) {
                    db.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err);
                    });
                    this.newMessage = null;
                    this.errorText = null;
                } else {
                    this.errorText = "A message must be entered!"
                }
            }
        }
    }
</script>