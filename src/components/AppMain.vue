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
    <div class="container">
        <h1 class="my-4">My projects</h1>
        <ProjectCard :projects="state.projects.data" :image="state.imagePath" />

        <!-- Pagination -->
        <nav aria-label="Page navigation">
            <ul class="pagination my-4 justify-content-center">
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
    </div>
</template>

<style lang="scss" scoped>
.page-link {
    border: 1px solid rgb(0, 0, 0);
    color: black;

    &:hover {
        color: rgb(12, 237, 0);
        cursor: pointer;
    }
}
</style>