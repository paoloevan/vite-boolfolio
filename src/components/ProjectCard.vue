<script>
import { state } from '../state';

export default {
    name: 'ProjectCard',
    props: {
        projects: Array,
        image: Function
    },

    data() {
        return {
            state
        }
    },
    methods: {
        /**
         * 
         * @param {string} string the string to be truncate
         */
        trimBody(string) {
            const body = string.substring(0, 100) + '...'
            return body
        }
    }
}
</script>

<template>
    <div class="container my-4">
        <div class="row row-cols-3 g-5">
            <div v-for="project in projects" class="col">
                <div class="card">
                    <img class="card-img-top" :src="image(project.cover_image)" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p v-if="project.description" class="card-text">{{ trimBody(project.description) }}</p>
                        <router-link :to="{ name: 'project', params: { slug_title: project.slug_title } }">
                            Show more...
                        </router-link>
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
        </div>
    </div>
</template>