<template>
    <div id="app">
        <todo></todo>
    </div>
</template>

<script>
    import todo from './todo/todo.vue'
    export default {
        name: 'app',
        components: {
            'todo': todo
        },
        data(){
            return {
                content: '三人行'
            }
        }
    }
</script>
