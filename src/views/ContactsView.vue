<script>
import { state } from '../state';

export default {
    name: 'ContactsView',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="container py-3">
        <h1>Contacts</h1>

        <form @submit.prevent="state.sendForm()" class="mb-3">

            <div class="alert alert-success" v-if="state.success">
                Email inviata correttamente!
            </div>

            <label for="name" class="form-label">Nome</label>
            <input v-model="state.name" type="text" name="name" id="name" class="form-control mb-3"
                placeholder="Inserire nome" aria-describedby="helpId">
            <div v-for="error in state.errors.name" class="alert alert-warning">
                {{ error }}
            </div>

            <label for="email" class="form-label">Email</label>
            <input v-model="state.email" type="email" name="email" id="email" class="form-control mb-3"
                placeholder="email@example.com" aria-describedby="helpId">
            <div v-for="error in state.errors.email" class="alert alert-warning">
                {{ error }}
            </div>

            <div class="mb-3">
                <label for="message" class="form-label"></label>
                <textarea v-model="state.message" class="form-control" name="message" id="message" rows="3"></textarea>
            </div>
            <div v-for="error in state.errors.message" class="alert alert-warning">
                {{ error }}
            </div>

            <input class="btn btn-primary" type="submit" :value="!state.loading ? 'Invia' : 'Invio...'"
                :disabled="state.loading">
        </form>
    </div>
</template>