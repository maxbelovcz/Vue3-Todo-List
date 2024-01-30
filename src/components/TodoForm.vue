<template>
    <input type="text" v-model="newPoint" class="main-font task-text" placeholder="Новая задача">
    <button :disabled="newPoint === ''" @click="save" class="main-font-bold task-btn">Добавить</button>
</template>

<script>
export default {
    emits: ['add'],
    data() {
        return {
            newPoint: ''
        }
    },
    methods: {
        save() {
            this.$emit('add', this.newPoint);
            this.newPoint = '';
        }
    },
}
</script>

<style scoped>
.task-text:focus::placeholder {
    color: transparent;
}
</style>