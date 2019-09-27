<template>
    <div class="container">
        <label class="label">Input URL's for bulk MP3 download</label>
        <div class="field" v-for="line in lines">
            <div class="control">
                <input v-model="line.url" class="input" type="text" placeholder="Input URL" v-on:focusout="setThumbnail(line)">
            </div>
        </div>
        <div>
        <a @click="addLine">Add field</a>
        </div>
        <button @click="download" class="button is-success">Download</button>
    </div>
</template>
<script>
    export default {
        name: 'music',
        data () {
            return {
                lines:[],
            }
        },
        methods: {
            setThumbnail(line) {
                console.log(line.url)

            },
            addLine(){
                this.lines.push({
                    url: null
                })
            },
            download(){
                let lines = this.lines;
                let api = 'http://www.localhost:4000/download';
                let url = api + '?URL=';
                for(let i = 0;i < lines.length; i++){
                    console.log(lines[i].url);

                    window.open(url + lines[i].url);

                }
            }
        }
    }
</script>