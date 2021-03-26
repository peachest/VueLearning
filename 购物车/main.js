function Book(name, date, price){
  this.name = name ;
  this.date = date ;
  this.price = price ;
}
let book1 = new Book('算法导论','2006-9',85.00)
let book2 = new Book('UNIX编程艺术','2006-2',59.00)
let book3 = new Book('编程珠玑','2008-10',39.00)
let book4 = new Book('代码大全','2006-3',128.00)


const app = new Vue({
  el: "#app",
  data:{
    terms: [
      {
        book: book1,
        bookcount: 1,
      },
      {
        book: book2,
        bookcount: 1,
      },
      {
        book: book3,
        bookcount: 1,
      },
      {
        book: book4,
        bookcount: 1,
      },
    ]

  },
  methods:{
    countChange(index, event){
      this.terms[index].bookcount = event.target.value ;
    },
    decreatment(index){
      if(this.terms[index].bookcount > 1)
        this.terms[index].bookcount-- ;
      else this.removeTerm(index) ;
    },
    increatment(index){
      this.terms[index].bookcount++ ;
    },
    removeTerm(index){
      this.terms.splice(index, 1)
    },
  },
  computed:{
    totalPrice(){
      return this.terms.reduce(((previousValue, currentValue) => previousValue + currentValue.bookcount * currentValue.book.price), 0) ;
    //   result = 0 ;
    //   for (let i = 0; i < this.terms.length; i++){
    //     result += this.terms[i].bookcount * this.terms[i].book.price ;
    //   }
    //   return result ;
    // }
    },
  },
  filters:{
    showprice(price){
      return "￥" + price.toFixed(2) ;
    }
  },
})