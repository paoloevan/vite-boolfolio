<script>
import { state } from '../state'

export default {
    name: 'AppMain',

    data() {
        return {
            state
        }
    },
    mounted() {
        this.state.getProjects(this.state.baseUrl + 'api/projects')
    }
}
</script>

<template>
    <div class="container my-4">
        <div class="row row-cols-3 g-5">
            <div v-for="project in state.projects.data" class="col">
                <div class="card">
                    <img class="card-img-top" :src="state.imagePath(project.cover_image)" alt="">
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
            <li class="page-item" v-if="!state.loading && state.projects.prev_page_url"
                @click="state.changePage(state.projects.prev_page_url)">
                <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-if="!state.loading" class="page-item"><a class="page-link" href="#">
                    {{ state.projects.current_page }}
                </a></li>
            <li class="page-item" v-if="!state.loading && state.projects.next_page_url"
                @click="state.changePage(state.projects.next_page_url)">
                <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>