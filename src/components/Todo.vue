<template>
    <div v-if="!isEdit" class="task-wrapper">
        <div title="Чтобы отметь задачу как выполненную нажать сюда, для возврата к задаче - нажать еще раз"
            class="main-font task" :class="[isActive ? 'start' : 'done']" @click="toggleClass">
            {{ point }}
        </div>
        <div class="task-buttons">
            <button @click="edit" class="main-font-bold task-btn">Редактировать</button>
            <button @click="remove" class="main-font-bold task-btn btn-del">Удалить</button>
        </div>
    </div>
    <div v-else class="task-wrapper">
        <input type="text" v-model="newPoint" class="main-font task-text">
        <div class="task-buttons">
            <button @click="save" class="main-font-bold task-btn">Сохранить</button>
            <button @click="remove" class="main-font-bold task-btn btn-del">Удалить</button>
        </div>
    </div>
</template>
<script>
export default {
    emits: ['remove', 'change'],
    props: {
        id: Number,
        point: String
    },
    data() {
        return {
            newPoint: this.point,
            isEdit: false,
            isActive: true
        }
    },
    methods: {
        remove() {
            this.$emit('remove', this.id, this.newPoint);
        },
        edit() {
            this.isEdit = true;
        },
        save() {
            this.isEdit = false;
            this.$emit('change', this.id, this.newPoint);
        },
        toggleClass() {
            this.isActive = !this.isActive;
        }
    },
}
</script>
<style scoped>
.start {
    cursor: pointer;
    user-select: none;
}

.done {
    cursor: pointer;
    user-select: none;
    text-decoration: line-through;
}
</style>