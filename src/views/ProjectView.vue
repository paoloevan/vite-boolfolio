<script>
import axios from 'axios';
import { state } from '../state'


export default {
    name: 'ProjectView',
    data() {
        return {
            state,
            project: {},
            loading: true
        }
    },
    methods: {
        getProject() {
            const url = this.state.baseUrl + 'api/projects/' + this.$route.params.slug_title
            axios
                .get(url)
                .then(response => {
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
        }
    },
    mounted() {
        this.getProject()
    }
}
</script>

<template>
    <h1 class="text-center">{{ $route.params.slug_title }}</h1>

    <div v-if="!loading" class="single-project container">
        <div class="card">
            <img class="card-img-top" :src="state.imagePath(project.cover_image)" alt="{{project.title}}">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer">
                <ul>
                    <li v-if="project.type">
                        Type: {{ project.type.name }}
                    </li>
                    <li v-else>Not type associated</li>

                    <li v-if="project.technologies.length > 0">
                    <li>Technologies:
                        <span v-for="technology in project.technologies">
                            {{ technology.name + ' ' }}
                        </span>
                    </li>
                    </li>
                    <li v-else>
                        Not technologies associated
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>