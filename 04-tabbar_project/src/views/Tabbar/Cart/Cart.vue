<template>
  <div>
    <p>this is Cart</p>
<!--    <div>-->
<!--      I receive the message: {{msg}}-->
<!--    </div>-->
    <table>
      <cart-head :table-head-names="tableHeadNames"></cart-head>
    </table>
  </div>
</template>

<script>
  import bus from '../../../bus' ;
  import CartHead from "./CartHead"

  export default {
    name: "Cart",
    data(){
      return {
        msg:'',
        products:[]
      }
    },
    props:{
      tableHeadNames:{
        array,
        required: true,
      }
    },
    components:{
      CartHead,
    },
    activated() {
      this.bbtn() ;
    },
    methods:{
      bbtn(){
        bus.$on("HomeEmitMsg", msg=>{
          this.msg = msg ;
        })
      },
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
      },
    },
    filters:{
      showprice(price){
        return "￥" + price.toFixed(2) ;
      }
    },
  }
</script>

<style scoped>
  table {
    border: 1px solid #e9e9e9 ;
    border-collapse: collapse ;
    border-spacing: 0 ;
  }
  th, td{
    padding: 8px 16px ;
    border: 1px solid #e9e9e9;
    text-align: left ;
  }

  th{
    background-color: #f7f7f7 ;
    color:  #5c6b77 ;
    font-weight: 600 ;
  }
</style>