<script>
import axios from 'axios';

export default {
    name: 'ProjectView',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            project: {},
            loading: true
        }
    },
    methods: {
        getProject() {
            const url = this.baseUrl + 'api/projects/' + this.$route.params.slug_title
            axios
                .get(url)
                .then(response => {
                    // console.log(response.data);
                    if (response.data.success) {
                        this.project = response.data.results
                        this.loading = false
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.log(error.message)
                })
        },
        imagePath(url) {
            // console.log(url);
            if (url && url.startsWith('uploads')) {

                return this.baseUrl + 'storage/' + url
            } else {
                return 'https://via.placeholder.com/300x200'
            }
        },
    },
    mounted() {
        this.getProject()
    }
}
</script>

<template>
    <h1>{{ $route.params.slug_title }}</h1>

    <div v-if="!loading" class="single-project container">
        <div class="card">
            <img class="card-img-top" :src="imagePath(project.cover_image)" alt="{{project.title}}">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
    </div>


</template>