const app = Vue.createApp({
    //data, function
   data(){
    return {
        showBook:true,
        url:"http://www.leess.com",
        books:[
            {title:'ABC', author:'abc', img:'asset/1.png', isfav:true},
            {title:'ABCDE', author:'abcde', img:'asset/2.png', isfav:false},
            {title:'ABCDEFG', author:'abcdefg', img:'asset/3.png', isfav:true},
        ]
    }
   },
   methods:{
    toggleshowbook(){
        this.showBook = !this.showBook
    },
    toggleFav(book){
        book.isfav = !book.isfav
    }
   },
   computed:{
    filterBook(){
        return this.books.filter((book) => book.isfav) //work true
    }
}
})

app.mount('#app')