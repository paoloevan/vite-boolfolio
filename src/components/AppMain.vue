<script>
import axios from 'axios'

export default {
    name: 'AppMain',

    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            projects: null,
            loading: true
        }
    },
    methods: {
        getPost(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results.data)
                    this.projects = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error.message);
                })
        },
        imagePath(url) {
            if (url.startsWith('uploads')) {
                return this.baseUrl + 'storage/' + url
            } else if (url) {
                return 'https://via.placeholder.com/300x200'
            } else {
                return 'https://via.placeholder.com/300x200'
            }
        }
    },
    mounted() {
        this.getPost(this.baseUrl + 'api/projects')
    }
}
</script>

<template>
    <div class="container my-4">
        <div v-if="!loading" class="row row-cols-3 g-5">
            <div v-for="project in projects.data" class="col">
                <div class="card">
                    <img class="card-img-top" :src="imagePath(project.cover_image)" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>