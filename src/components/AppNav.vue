<script>
export default {
    name: 'AppNav'
}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <router-link class="navbar-brand title" :to="{ name: 'home' }"><strong>Portfolio</strong></router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">My projects<span
                                class="visually-hidden">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
.navbar {
    // box-shadow: 0px 1px 5px;
    border-bottom: 1px solid;

    .title {
        font-size: 2rem;
    }

    .nav-link:hover,
    .nav-link:focus {
        color: black;
        text-decoration: underline;
    }
}
</style>