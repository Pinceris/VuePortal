<template>
    <div>
        <h1>Dashboard</h1>

        <div class="tabs">
            <ul>
                <li class="is-active"><a>Newest</a></li>
                <li v-for="category in categories"><a> {{category.title}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {db} from "../main"

    export default {
        name: 'dashboard',

        data(){
            return{
                categories: []
            }
        },
        firestore(){
            return{
                categories: db.collection('categories')

            }
        }

    }

</script>