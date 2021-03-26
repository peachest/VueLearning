// const templateComponent = {
export default {
  template:`
    <div> 
      <h1>以下是vue实例</h1>
      <h2>{{message}}</h2>
      <h1>{{btnClickCount}}</h1>
      <button @click="btnclick">点我</button>
    </div>
  `,
  data(){
    return {
      message: 'hello vue in app.js',
      btnClickCount: 0,
    }
  },
  methods:{
    btnclick(){
      this.btnClickCount++ ;
    }
  }
}