<template>
    <!-- head -->
    <Header @add="handle" />  <!-- 订阅add事件 -->

    <div class="body">
        <ul>
            <li v-for="(item, index) in lists">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import Header from './components/body3/header.vue';
export default {
    components: {
        Header
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: ''
        }
    },
    methods: {
        handle(val){
            console.log(val);
            this.lists.push(val);
            this.message='';
        }
    }
}
</script>

<style lang="css" scoped>

</style>