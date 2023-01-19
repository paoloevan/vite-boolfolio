<script>
export default {
    name: 'ProjectCard'
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