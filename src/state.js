import { reactive } from 'vue'
import axios from 'axios'


export const state = reactive({
    baseUrl: 'http://127.0.0.1:8000/',
    projects: {},
    loading: true,

    getProjects(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = true
                this.projects = response.data.results;
                console.log(this.projects);
                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            })
    },
    imagePath(url) {
        if (url && url.startsWith('uploads')) {

            return this.baseUrl + 'storage/' + url
        } else {
            return 'https://via.placeholder.com/300x200'
        }
    },
    changePage(url) {
        this.getProjects(url)
    }
})