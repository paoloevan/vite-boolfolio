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
    /**
     * 
     * @param {string} url url of image calls by API (getProjects method)
     */
    imagePath(url) {
        if (url && url.startsWith('uploads')) {
            // console.log(state.loading);

            return state.baseUrl + 'storage/' + url
        } else {
            return 'https://via.placeholder.com/300x200'
        }
    },
    // pagination
    changePage(url) {
        this.getProjects(url)
    }
})