<template>
    <div>
        <v-table :lists="books" @add="add" @minus="minus" />
    </div>
</template>

<script>
import table from './components/table.vue';
export default {
    components: {
        'v-table': table
    },
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                },
            ],
            tatol: 0
        }
    },
    methods: {
        add(i) {
            this.books[i].count++
            // console.log(this.books);
        },
        minus(i){
            this.books[i].count--
        }
    }

}
</script>

<style lang="scss" scoped>

</style>