<script>
import axios from 'axios';

export default {
    name: 'ProjectView',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            projects: {},
            loading: true
        }
    },
    methods: {
        getProject() {
            const url = this.baseUrl + 'api/projects/' + this.$route.params.slug_title
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    },
    mounted() {
        this.getProject()
    }
}
</script>

<template>
    <h1>Proj</h1>


</template>