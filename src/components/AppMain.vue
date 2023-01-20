<script>
import { state } from '../state'
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },

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
    <ProjectCard :projects="state.projects.data" :image="state.imagePath" />

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