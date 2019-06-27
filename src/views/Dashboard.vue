<template>
    <div>
        <h1>Dashboard</h1>

        <div class="tabs">
            <ul>
                <li :class="{'is-active': activeCategory === 'Newest'}"><a>Newest</a></li>
                <li :class="{'is-active': activeCategory === category.title}" v-for="category in categories">
                    <a @click="setCategory(category.title)"> {{category.title}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {db} from "../main"

    export default {
        name: 'dashboard',

        data() {
            return {
                categories: [],
                activeCategory: 'Newest'
            }
        },
        firestore() {
            return {
                categories: db.collection('categories')
            }

        },
        methods:{
            setCategory(title){
                this.activeCategory = title
            }
        }
    }

</script>