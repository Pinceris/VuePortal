<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <h1 class="title">Login!</h1>

            <form @submit.prevent="login">
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
        name: 'login',
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
            login() {
                console.log('login')
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                    .catch(error => this.error = error.message)
            },
            logout() {
                console.log('logout')
                firebase.auth().signOut()
                    .then(() => {
                        this.isAuthenticated=false
                    })
            }
        }
    }

</script>