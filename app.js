const app = Vue.createApp({
    data() {
        return {
            name: 'Cristiano Ronaldo',
            age: 25,
            imgLink: 'https://blog.haposoft.com/content/images/2021/12/Logo-Vuejs.png'
        };
    },
    methods: {
        getAge() {
            return this.age + 5;
        },
        getRandom() {
           return  Math.floor(Math.random() * 2);
        }
    }
});
app.mount('#assignment')