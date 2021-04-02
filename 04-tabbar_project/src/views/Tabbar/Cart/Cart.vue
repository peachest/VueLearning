<template>
  <div>
    <p>this is Cart</p>
    <div>
      <table>
        <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>单价</th>
          <th>小结</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(term, index) in terms">
          <th>{{index+1}}</th>
          <th>{{term.book.name}}</th>
          <th>{{term.book.date}}</th>
          <th>{{term.book.price | showprice}}</th>
          <th>{{(term.bookcount * term.book.price) | showprice}}</th>
          <th>
            <button @click="decreatment(index)">-</button>
            <!--          {{term.bookcount}}-->
            <input type = 'text' v-model.lazy.number.trim="term.bookcount">
            <!--          {{typeof term.bookcount}}-->
            <!--              <input type = 'text' v-bind:value = 'term.bookcount' v-on:input="countChange(index, $event)">-->
            <!--          <input type = 'text' v-bind:value = 'term.bookcount' v-on:input="term.bookcount = $event.target.value">-->
            <button @click="increatment(index)">+</button>
          </th>
          <th><button @click="removeTerm(index)">移除</button></th>
        </tr>
        </tbody>
      </table>
      <h2>总价：{{totalPrice | showprice}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
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