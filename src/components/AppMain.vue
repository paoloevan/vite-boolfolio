<script>
import axios from 'axios'

export default {
    name: 'AppMain',

    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            projects: {},
            loading: true
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.loading = true
                    // console.log(response.data.results)
                    this.projects = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error.message);
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
        changePage(url) {
            console.log(url);
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.baseUrl + 'api/projects')
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
                        <router-link :to="{ name: 'project', params: { slug_title: project.slug_title } }">
                            Show more...
                        </router-link>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nav aria-label="Page navigation">
        <ul class="pagination   justify-content-center">
            <li class="page-item" v-if="!loading && projects.prev_page_url" @click="changePage(projects.prev_page_url)">
                <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-if="!loading" class="page-item"><a class="page-link" href="#">
                    {{ projects.current_page }}
                </a></li>
            <li class="page-item" v-if="!loading && projects.next_page_url" @click="changePage(projects.next_page_url)">
                <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>