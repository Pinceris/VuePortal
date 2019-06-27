<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Sign Up!</h1>

            <form @submit.prevent="signUp">
                <div class="field">
                    <div class="control">
                        <input type="email" placeholder="Email" class="input" v-model="email"><br>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input type="password" placeholder="Password" class="input" v-model="password"> <br>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-success">Submit</button>
                    </div>
                </div>
            </form>
            <article class="message is-danger" v-if="error">
                <div class="message-body">
                    {{error}}
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'signup',
        data() {
            return {
                email: '',
                password: '',
                isAuthenticated: false,
                error: ''
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    this.isAuthenticated = true
                    this.$router.push('./dashboard')
                }
            })
        },
        methods: {
            signUp() {
                console.log('signup')
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                    .catch(error => alert(error.message))
            }
        }
    }

</script>