 # 实战小项目
 
 ## 1. 项目基本布局
 
 compents/header.vue
 ```
 <template>
    <div id="layout">
        <div class="app-head">
            <div class="app-head-inner">
                <img src="../assets/logo.png" alt="">
                <span>啦啦啦啦啦啦啦啦啦啦啦啦阿拉啦啦啦啦啦啦啦啦阿拉阿拉</span>
                <div class="head-nav">
                    <ul class="nav-list">
                        <li>登录</li>
                        <li class="nav-pile">|</li>
                        <li>注册</li>
                        <li class="nav-pile">|</li>
                        <li>关于</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'layout',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.app-head{
    background: #363636;
    color:#b2b2b2;
    height: 90px;
    line-height:90px;
    width: 100%;
}
.app-head-inner{
    width:1200px;
    margin: 0 auto;
}
.head-logo{
    float: left;
}
.app-head-inner span{
    position: relative;
    top:-20px;
}
.app-head-inner img{
    width: 50px;
    margin-top: 20px;
}
.head-nav{
    float: right;
}
.head-nav ul{
    overflow: hidden;
}
.head-nav li{
    float: left;
    cursor: pointer;

}
.nav-pile{
    padding: 0 10px;
}
.container{
    width: 1200px;
    margin: 0 auto;
}
.hr{
    height: 1px;
    width: 100%;
    background: #ddd;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
.button:hover{
    background: #4FC08D;
}
</style>

 ```
 
 components/footer.vue
 
 ```
 <template>
    <div class="app-foot">
        <p>啦啦啦啦啦啦啦啦啦啦啦啦啦阿拉啦啦啦啦</p>
    </div>
</template>

<script>
export default {
    name:'footer',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.app-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
}
.app-foot p{
    display: inline-block;
}
</style>


 ```
 
 pages/layout.vue
 
 ```
 <template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <div v-for="(product,index) in productList" :key="index">
                    <h3>{{product.category}}</h3>
                    <ul>
                        <li v-for="(item,index) in product.list" :key="index">
                            <a :href="item.url">{{item.name}}</a>
                            <span v-if="item.hot==true" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="index%2 == 0" class="hr"></div>
                </div>
            </div>
        </div>
        <div class="index-right">

        </div>
    </div>
</template>

<script>
export default {
    name:'layout',
    data(){
        return{
            productList:[
                {
                    category:"手机应用类",
                    list:[
                        {
                            name:'91助手',
                            url:'http://www.wwtliu.com/blog',
                            hot:false,
                        },
                        {
                            name:'豌豆荚',
                            url:'http://www.wwtliu.com/blog',
                            hot:true,
                        },
                        {
                            name:'金山毒霸',
                            url:'http://www.wwtliu.com/blog',
                            hot:false,
                        },
                    ]
                },
                {
                    category:"开发工具",
                    list:[
                        {
                            name:'webstrom',
                            url:'http://www.wwtliu.com/blog',
                            hot:true,
                        },
                        {
                            name:'vscode',
                            url:'http://www.wwtliu.com/blog',
                            hot:false,
                        },
                        {
                            name:'atom',
                            url:'http://www.wwtliu.com/blog',
                            hot:false,
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped>
.index-wrap{
    width: 1200px;
    margin:0 auto;
    overflow: hidden;
}
.index-left{
    float: left;
    width: 300px;
    text-align: left;
}
.index-right{
    float: right;
    width: 900px;
}
.index-left-block{
    margin:15px;
    background: #fff;
    box-shadow:  0 0 1px #ddd;
    height: 350px;
}
.index-left-block .hr{
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #DDD;
}
.index-left-block h2{
    background: #4fc08d;
    color:#fff;
    padding:10px 20px;
    margin-bottom: 20px;
}
.index-left-block h3{
    padding:0 15px 5px 15px;
    font-weight: bold;
    color:#222;
}
.index-left-block ul{
    padding:10px 15px;
}
.index-left-block li{
    padding:5px;
}
.index-board-list{
    overflow: hidden;
}
.index-board-item{
    float:left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding:20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.index-board-item-inner{
    min-height:125px;
    padding-left: 120px;
}
.index-board-car .index-board-item-inner{
    background: url('../assets/user.jpg') 0 10px no-repeat;
}
.index-board-loud .index-board-item-inner{
    background: url('../assets/user.jpg') 0 10px no-repeat;
}
.index-board-earth .index-board-item-inner{
    background: url('../assets/user.jpg') 0 10px no-repeat;
}
.index-board-hill .index-board-item-inner{
    background: url('../assets/user.jpg') 0 10px no-repeat;
}
.index-board-item h2{
   font-size: 18px;
   font-weight: bold;
   color:#000;
   margin-bottom: 15px;
}
.line-last{
    margin-right: 0;
}
.index-board-button{
    margin-top:20px;
}
.lastest-news{
    min-height:350px;
}
.hot-tag{
    background: red;
    color:#fff;
}
.new-item{
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
 ```
 
 ## 2. 添加axios请求
 
 1. 安装 ： npm install axios --save-dev
 2. 引用：
    ```
        import Axios from 'axios'
        
        Vue.prototype.$axios=Axios
    ``` 
 3. 添加拦截器
    ```
    Axios.defaults.baseURL = 'http://wwww.wwtliu.com';
    Axios.defaults.headers.post['Content-Type']='application/x-www-form-urelncode'
    
    Vue.config.productionTip = false
    
    //添加请求拦截器
    Axios.interceptors.request.use(function(config){
    
      if(config.method == 'post') {
        config.data.qs.stringify(config.data)
      }
    
      return config;
    }, function(error){
        //对请求错误做些什么
        return Promise.reject(error)
    });
    
    //添加相应拦截器
    Axios.interceptors.response.use(function(response){
    
      return response;
    },function(error){
      //对响应错误做点什么
      return Promise.reject()
    })
    ```
 4. 数据请求+渲染
    ```
    <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
            <li v-for='(item,index) in news' :key='index'>
                <a target="_blank" :href="item.url">{{item.author_name}}</a>
            </li>
        </ul>
    </div>


     
     
     
    created(){
        this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php',{
            params:{
                count:10,
                type:'top'
            }
        })
        .then(res=>{
            // console.log(res.data)
            this.news=res.data.result.data
        })
        .catch(err=>{
            console.log(err)
        })
    }
    ```
 
 
## 3.轮播

1. 安装swiper  : npm install vue-awesome-swiper --save
2. main.js 引入：
    ```
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper)
    ```

3. 使用
```
            <div class="swiper-size">
                <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                    <!-- slides -->
                    <swiper-slide>
                        <a target="_blank" href="http://wwww.baidu.com">
                            <img class="swiperimg" src="../assets/1.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a target="_blank" href="http://wwww.baidu.com">
                            <img class="swiperimg" src="../assets/2.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a target="_blank" href="http://wwww.baidu.com">
                            <img class="swiperimg" src="../assets/3.jpg" alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a target="_blank" href="http://wwww.baidu.com">
                            <img class="swiperimg" src="../assets/2.jpg" alt="">
                        </a>
                    </swiper-slide>

                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div>
                </swiper>
            </div>






data(){
        return{
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
}





.swiper-size{
   margin-top: 15px;
}
.swiperimg{
    width: 100%;
    height: 300px;
}
```
 
 

## 4. 消息广告
### 注意：动态class  🌈

- 一个动态class
    ```
    :class=" 'index-board-' +board.tag "
    ```

- 两个动态class
    ```
    :class=" [ 'index-board-' +board.tag ,{'line-last' : index%2 !== 0 }]"
    ```
    
- 对于class的绑定 
    模板如下:
    ```
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    ```
    data如下 ：
    ```
    data: {
      isActive: true,
      hasError: false
    }
    ```
    结果渲染为：
    ```
    <div class="static active"></div>
    ```

代码:

```
<div class="index-board-list">
    <div v-for="(board,index) in boradList" :key="index" class="index-board-item" :class=" [ 'index-board-' +board.tag ,{'line-last' : index%2 !== 0 }]">
        <div class="index-board-item-inner">
            <h2>{{board.title}}</h2>
            <p>{{board.desc}}</p>
            <div class="index-board-button">
                <!-- <a href="javascript:;" class="button">立即购买</a> -->
                <router-link :to="{path:'/details/'+board.tag}" class="button">立即购买</router-link>
            </div>
        </div>
    </div>
</div>
```


## 5.详情页+跳转
- 关注点：

    ```
    <ul>
        <router-link tag='li' active-class="active" v-for="(nav,index) in detailsNav" :key="index" :to="{path:'/details/'+nav.tag}">{{nav.title}}</router-link>
    </ul>
    ```
    1. tag='li'
    
        <router-link> 默认渲染为a标签，使用tag='li'可以使其渲染为 li 标签
    
    2. active-class="active" 
    
        给选中的 router-link 增加一个默认选中样式
    
    3. :to="{path:'/details/'+nav.tag}"
        
        router-link 的动态路由跳转

- 关注点

    ```
    {
      path: '/details',
      name: 'details',
      component: Details,
      redirect:'/details/earth',
      children:[
        {path:'car',name:'Car',component: Car},
        {path:'earth',name:'Earth',component: Earth},
        {path:'loud',name:'Loud',component: Loud},
        {path:'hill',name:'Hill',component: Hill},
      ]
    }
    ```
    
    1. 嵌套子路由
    2. 重定向redirect:'/details/earth', 默认右侧的展示页面

    
完整：
```
<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img src="../assets/user.jpg" alt="">
                <ul>
                    <router-link tag='li' active-class="active" v-for="(nav,index) in detailsNav" :key="index" :to="{path:'/details/'+nav.tag}">{{nav.title}}</router-link>
                </ul>
            </div>
        </div>
        <div class="detail-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'details',
    data(){
        return{
            detailsNav:[
                {
                    title:"开放产品",
                    tag:"earth"

                },
                {
                    title:"品牌营销",
                    tag:"loud"

                },
                {
                    title:"使命必达",
                    tag:"car"

                },
                {
                    title:"勇攀高峰",
                    tag:"hill"

                },
            ]
        }
    }
}
</script>

<style scoped>
.detail-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
}
.detail-left{
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
}
.product-board{
    background: #fff;
    padding:20px 0;
}
.product-board ul{
    margin-top: 20px;
}
.product-board li{
    text-align: left;
    padding:10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li:hover{
    background: #4fc08d;
    color: #fff;
}
.product-board li a {
    display: block;
}
.sales-board{
    background: #fff;
}
.sales-board-form{

}
.sales-board-intro h2{
    font-size: 20px;
    padding:20px;
}
.sales-board-intro p{
    background: #7f7cff;
    padding:10px 20px;
    color:#999;
    line-height: 1.8;
}
.sales-board-form{
    padding:30px 20px;
    font-size: 14px;
}
.sales-board-line{
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left{
    display: inline-block;
    width: 100px;
}
.sales-board-line-right{
    display: inline-block;
    width: 75%;
}
.sales-board-des{
    border-top: 20px solid #f0f2f5;
    padding:15px 20px;
}
.sales-board-des p{
    line-height: 1.6;
}
.sales-board-des h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3{
    font-size: 18px;
    font-weight: bold;
    padding:20px 0 10px 0;
}
.sales-board-des li{
    padding:5px 0;
}
.sales-board-table{
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th{
    background: #4fc08d;
    color:#fff;
}
.sales-board-table td{
    border:1px solid #f0f2f5;
    padding:15px;
}
</style>

```

 
 ## 6. 根据路由动态改变图片 🌈
 ```
 <!-- <img src="../assets/user.jpg" alt=""> -->    //这里
<img :src="getUrl" alt="">
 
 
 
 
 data(){
        return{
            imgUrl:{
                '/details/earth':require('../assets/1-1.png'),
                '/details/loud':require('../assets/1-2.png'),
                '/details/hill':require('../assets/1-3.png'),
                '/details/car':require('../assets/1-4.png'),
            }
        }
    },
    computed:{          //这里
        getUrl(){
            return this.imgUrl[this.$route.path]        //这里
        }
    }
 
 ```
 


## 7.数量加减的小组件 
 

组件Counter.vue : 
```
<template>
    <div class="counter-component">
        <div class="counter-btn" @click="minfun">-</div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="inputHandler">
        </div>
        <div class="counter-btn" @click="maxfun">+</div>
    </div>
</template>

<script>
export default {
    name:'counter',
    data(){
        return{
            number:1
        }
    },
    props:{
        max:{
            type:Number,
            default:5
        },
        min:{
            type:Number,
            default:1
        }
    },
    methods:{
        minfun(){
            if(this.number<=this.min){
                return;
            }
            this.number--;
        },
        maxfun(){
            if(this.number>=this.max){
                return;
            }
            this.number++
        },
        inputHandler(){
            //  \D->非数字，\d->数字
            let fix;
            if(typeof this.number === 'string'){
                fix=Number(this.number.replace(/\D/g,""))
            }else{
                fix=this.number  //0
            }
            if(fix>this.max || fix <this.min){
                fix=this.min
            }
            this.number=fix
        }

    }
}
</script>
<style scoped>
.counter-component{
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show{
    float: left;
}
.counter-show input{
    border:none;
    border-top: 1px solid #e3e3e3;
    border-bottom:1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}
.counter-btn{
    border:1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover{
    border-color:#4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>

```


引用: 
```
<template>
    <div class="sales-board">
        
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <Counter :max="Counter.max" :min="Counter.min"/>  //这里
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Counter from './components/counter'

export default {
    name:'earth',
    data(){
        return{
            Counter:{   //这里
                max:10,
                min:1
            }
        }
    },
    components:{      //这里
        Counter
    }
}
</script>
<style scoped>

</style>

```
 

## 8.下拉菜单
 
props：获取数组

- 错误写法: ❌

    ```
    props:{
        DownData:[
            {
                name:'初级版',
                value:1
            },
            {
                name:'中级版',
                value:2
            },
            {
                name:'高级版',
                value:3
            },
        ]
    }
    
    ```
    
- 正确写法: ✅
 
    ```
    props:{
        DownData:{
            type:Array,
            default:function(){
                return  [
                            {
                                name:'初级版',
                                value:1
                            },
                            {
                                name:'中级版',
                                value:2
                            },
                            {
                                name:'高级版',
                                value:3
                            },
                        ]
            }
        }
    }
    ```



下拉菜单的组件 downMenu.vue
```
<template>
    <div class="selection-component">
        <div class="selection-show" @click="showHide">
            <span>{{this.DownData[nowIndex].name}}</span>
            <div class="arrow"></div>
        </div>
        <div class="selection-list" v-if="show">
            <ul>
                <li v-for="(down, index) in DownData" :key="index" @click="selectList(index)">{{down.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'downshmenu',
    data(){
        return{
            nowIndex:0,
            show:false,
        }
    },
    props:{
        DownData:{
            type:Array,
            default:function(){
                return  [
                            {
                                name:'test',
                                value:1
                            },
                        ]
            }
        }
    },
    methods:{
        showHide(){
            this.show=!this.show
        },
        selectList(index){
            this.nowIndex=index
            this.show=false
        }
    }
}
</script>
<style scoped>
.selection-component{
    position: relative;
    display: inline-block;
}
.selection-show{
    border:1px solid #e3e3e3;
    padding:0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
}
.selection-show .arrow{
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top:5px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
}
.selection-list{
    display: inline-block;
    position: absolute;
    left: 0;
    top:25px;
    width: 100%;
    background: #fff;
    border-top:1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
}
.selection-list li {
    padding:5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.selection-list li:hover{
    background: #e3e3e3;
}
</style>

```


引用组件：

```
<template>
    <div class="sales-board">
        
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <Counter :max="Counter.max" :min="Counter.min"/>
                </div>
            </div>
        </div>


        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <DownMenu :DownData="DownMenu"/>      //这里
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Counter from './components/counter'
import DownMenu from './components/downMenu'    //这里

export default {
    name:'earth',
    data(){
        return{
            Counter:{
                max:10,
                min:1
            },
            DownMenu:[                         //这里
                {
                    name:'初级版',
                    value:1
                },
                {
                    name:'中级版',
                    value:2
                },
                {
                    name:'高级版',
                    value:3
                },
            ]
        }
    },
    components:{
        Counter,
        DownMenu                                 //这里
    }
}
</script>
<style scoped>

</style>

```



## 9.单选

与下拉框的思路类似

radios.vue : 

```
<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(radio,index) in Radios" :key="index" :class="{'active': index==nowIndex}" @click="chooseItem(index)">{{radio.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'radio',
    data(){
        return{
            nowIndex:0,
        }
    },
    props:{
        Radios:{
            type:Array,
            default:function(){
                return [
                    {
                        title:'test',
                        value:1
                    },

                ]
            }
        }
    },
    methods:{
        chooseItem(index){
            console.log(index)
            this.nowIndex=index
        }
    }
}
</script>
<style scoped>
.chooser-component{
    position: relative;
    display: inline-block;
}
.chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.chooser-list li.active{
    border-color:#4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>


```


引用: 

```
<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <Counter :max="Counter.max" :min="Counter.min"/>
                </div>
            </div>
        </div>


        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <DownMenu :DownData="DownMenu"/>
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <Radios :Radios="radio"/>      //这里
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Counter from './components/counter'
import DownMenu from './components/downMenu'
import Radios from './components/radios'            //这里

export default {
    name:'earth',
    data(){
        return{
            Counter:{
                max:10,
                min:1
            },
            DownMenu:[
                {
                    name:'初级版',
                    value:1
                },
                {
                    name:'中级版',
                    value:2
                },
                {
                    name:'高级版',
                    value:3
                },
            ],
            radio:[                         //这里
                    {
                        title:'1个月',
                        value:1
                    },
                    {
                        title:'2个月',
                        value:2
                    },
                    {
                        title:'3个月',
                        value:3
                    },
                    {
                        title:'半年',
                        value:4
                    },
                ]
        }
    },
    components:{
        Counter,
        DownMenu,
        Radios                          //这里
    }
}
</script>
<style scoped>

</style>

```



## 10.数量计算的组件 向父级传递数据
- 方法一: 
    > 该方法，每个组件都调用一个不同的方法， 不友好
    - 加减计算子组件:counter.vue
    ```
    <template>
        <div class="counter-component">
            <div class="counter-btn" @click="minfun">-</div>
            <div class="counter-show">
                <input type="text" v-model="number" @keyup="inputHandler">
            </div>
            <div class="counter-btn" @click="maxfun">+</div>
        </div>
    </template>
    
    <script>
    export default {
        name:'counter',
        data(){
            return{
                number:1
            }
        },
        props:{
            max:{
                type:Number,
                default:5
            },
            min:{
                type:Number,
                default:1
            }
        },
        methods:{
            minfun(){
                if(this.number<=this.min){
                    return;
                }
                this.number--;
                this.$emit('counter',this.number)           //这里
            },
            maxfun(){
                if(this.number>=this.max){
                    return;
                }
                this.number++
                this.$emit('counter',this.number)            //这里
            },
            inputHandler(){
                //  \D->非数字，\d->数字
                let fix;
                if(typeof this.number === 'string'){
                    fix=Number(this.number.replace(/\D/g,""))
                }else{
                    fix=this.number  //0
                }
                if(fix>this.max || fix <this.min){
                    fix=this.min
                }
                this.number=fix
                this.$emit('counter',this.number)            //这里
            }
    
        }
    }
    </script>
    <style scoped>
    
    </style>

    ```
    - 下拉框子组件:downmenu.vue
    ```
    <template>
        <div class="selection-component">
            <div class="selection-show" @click="showHide">
                <span>{{this.DownData[nowIndex].name}}</span>
                <div class="arrow"></div>
            </div>
            <div class="selection-list" v-if="show">
                <ul>
                    <li v-for="(down, index) in DownData" :key="index" @click="selectList(index)">{{down.name}}</li>
                </ul>
            </div>
        </div>
    </template>
    
    <script>
    export default {
        name:'downshmenu',
        data(){
            return{
                nowIndex:0,
                show:false,
            }
        },
        props:{
            DownData:{
                type:Array,
                default:function(){
                    return  [
                                {
                                    name:'test',
                                    value:1
                                },
                            ]
                }
            }
        },
        methods:{
            showHide(){
                this.show=!this.show
            },
            selectList(index){
                this.nowIndex=index
                this.show=false
                this.$emit('downmenu',this.DownData[index].value)    //这里
            }
        }
    }
    </script>
    <style scoped>
    
    </style>

    ```
    - 单选子组件:radio.vue
    ```
    <template>
        <div class="chooser-component">
            <ul class="chooser-list">
                <li v-for="(radio,index) in Radios" :key="index" :class="{'active': index==nowIndex}" @click="chooseItem(index)">{{radio.title}}</li>
            </ul>
        </div>
    </template>
    
    <script>
    export default {
        name:'radio',
        data(){
            return{
                nowIndex:0,
            }
        },
        props:{
            Radios:{
                type:Array,
                default:function(){
                    return [
                        {
                            title:'test',
                            value:1
                        },
    
                    ]
                }
            }
        },
        methods:{
            chooseItem(index){
                this.nowIndex=index
                this.$emit('radios',this.Radios[index].value)    //这里
            }
        }
    }
    </script>
    <style scoped>
    
    </style>

    ```
    - 父组件：
    ```
    <template>
        <div class="sales-board">
            
            <div class="sales-board-form">
                <div class="sales-board-line">
                    <div class="sales-board-line-left">
                        购买数量：
                    </div>
                    <div class="sales-board-line-right">
                        <Counter :max="Counter.max" :min="Counter.min" @counter="getCounterNum"/>     //这里@
                    </div>
                </div>
            </div>
    
    
            <div class="sales-board-form">
                <div class="sales-board-line">
                    <div class="sales-board-line-left">
                        产品类型：
                    </div>
                    <div class="sales-board-line-right">
                        <DownMenu :DownData="DownMenu" @downmenu='getDownmenu'/>    //这里@
                    </div>
                </div>
            </div>
    
            <div class="sales-board-form">
                <div class="sales-board-line">
                    <div class="sales-board-line-left">
                        有效时间：
                    </div>
                    <div class="sales-board-line-right">
                        <Radios :Radios="radio" @radios="getRadios"/>     //这里@
                    </div>
                </div>
            </div>
    
            <div class="sales-board-form">
                <div class="sales-board-line">
                    <div class="sales-board-line-left">
                        总价：
                    </div>
                    <div class="sales-board-line-right">
                        {{0}} 元
                    </div>
                </div>
            </div>
    
            <div class="sales-board-form">
                <div class="sales-board-line">
                    <div class="sales-board-line-left">
                    </div>
                    <div class="sales-board-line-right">
                        <a href="" class="button">立即购买</a>
                    </div>
                </div>
            </div>
    
        </div>
    </template>
    
    <script>
    import Counter from './components/counter'
    import DownMenu from './components/downMenu'
    import Radios from './components/radios'
    
    export default {
        name:'earth',
        data(){
            return{
                Counter:{
                    max:10,
                    min:1
                },
                DownMenu:[
                    {
                        name:'初级版',
                        value:1
                    },
                    {
                        name:'中级版',
                        value:2
                    },
                    {
                        name:'高级版',
                        value:3
                    },
                ],
                radio:[
                        {
                            title:'1个月',
                            value:1
                        },
                        {
                            title:'3个月',
                            value:3
                        },
                        {
                            title:'半年',
                            value:6
                        },
                        {
                            title:'一年',
                            value:12
                        },
                    ]
            }
        },
        components:{
            Counter,
            DownMenu,
            Radios
        },
        methods:{             //这里@
            getCounterNum(data){
                console.log(data)
            },
            getDownmenu(data){
                console.log(data)
            },
            getRadios(data){
                console.log(data)
            }
        }
    }
    </script>
    <style scoped>
    
    </style>

    ```

- 方法二:

```
<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <Counter :max="Counter.max" :min="Counter.min" @counter="getGoodInfo('counter',$event)"/>
                    //改成一样的方法getGoodInfo
                </div>
            </div>
        </div>


        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <DownMenu :DownData="DownMenu" @downmenu="getGoodInfo('downmenu',$event)"/>
                    //改成一样的方法getGoodInfo
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <Radios :Radios="radio" @radios="getGoodInfo('radios',$event)"/>
                    //改成一样的方法getGoodInfo
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    {{ getTotalprice }} 元
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                </div>
                <div class="sales-board-line-right">
                    <a href="" class="button">立即购买</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Counter from './components/counter'
import DownMenu from './components/downMenu'
import Radios from './components/radios'

export default {
    name:'earth',
    data(){
        return{
            counter:1,   //数据初始化
            downmenu:1,
            radios:1,
            totalprice:this.counter*5 + this.downmenu*2 + this.radios*10,
            Counter:{
                max:10,
                min:1
            },
            DownMenu:[
                {
                    name:'初级版',
                    value:1
                },
                {
                    name:'中级版',
                    value:2
                },
                {
                    name:'高级版',
                    value:3
                },
            ],
            radio:[
                    {
                        title:'1个月',
                        value:1
                    },
                    {
                        title:'3个月',
                        value:3
                    },
                    {
                        title:'半年',
                        value:6
                    },
                    {
                        title:'一年',
                        value:12
                    },
                ]
        }
    },
    components:{
        Counter,
        DownMenu,
        Radios
    },
    methods:{
        // getCounterNum(data){
        //     console.log(data)
        // },
        // getDownmenu(data){
        //     console.log(data)
        // },
        // getRadios(data){
        //     console.log(data)
        // }
        getGoodInfo(key,value){         //这里
            // console.log(key,value)
            /*
             * this, 指向当前组件(vuecomponent)
             */
            console.log(this)
            this[key]=value
            // =>
            // vuecomponent={
            //     counter:10
            // }
            var readyData={
                "counter":this.counter,   //5
                "downmenu":this.downmenu,  //2
                "radios":this.radios   //10
            }
            // console.log(readyData)
        }
    },
    computed:{          //计算总价
        getTotalprice(){
            return this.counter*5 + this.downmenu*2 + this.radios*10
        }
    }

}
</script>
<style scoped>

</style>

```


## 10.vuex

1. 安装: npm install vuex --save
2. 创建src/store/index.js
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        order:{}
    }
})
```
3. main.js引入并注入:  import store from './store'
4. src/store/index.js
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        order:{
            "counter":1,   //5
            "downmenu":1,  //2
            "radios":1   //10
        },
        totalPrice:0,
    },
    mutations:{
        updateOrder(state,data){  //data={key:value]}
            state.order[data[0]]=data[1]
        },
        updatePrice(state,price){
            state.totalPrice=price
        }
    },
    actions:{
        updateOrder(context,data){
            context.commit("updateOrder",data)
        },
        updatePrice(context,price){
            context.commit("updatePrice",price)
        }
    },
    getters:{
        getOrder(state){
            return state.order ? state.order: {}
        },
        getTotalPrice(state){
            return state.totalPrice>0 ? state.totalPrice : 0
        }
    }
})

```
组件1:
```
<template>
    <div class="counter-component">
        <div class="counter-btn" @click="minfun">-</div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="inputHandler">
        </div>
        <div class="counter-btn" @click="maxfun">+</div>
    </div>
</template>

<script>
export default {
    name:'counter',
    data(){
        return{
            number:1
        }
    },
    props:{
        max:{
            type:Number,
            default:5
        },
        min:{
            type:Number,
            default:1
        }
    },
    methods:{
        minfun(){
            if(this.number<=this.min){
                return;
            }
            this.number--;
            this.$emit('counter',this.number)
            this.$store.dispatch("updateOrder",["counter",this.number])    //这里
        },
        maxfun(){
            if(this.number>=this.max){
                return;
            }
            this.number++
            this.$emit('counter',this.number)
            this.$store.dispatch("updateOrder",["counter",this.number])   //这里
        },
        inputHandler(){
            //  \D->非数字，\d->数字
            let fix;
            if(typeof this.number === 'string'){
                fix=Number(this.number.replace(/\D/g,""))
            }else{
                fix=this.number  //0
            }
            if(fix>this.max || fix <this.min){
                fix=this.min
            }
            this.number=fix
            this.$emit('counter',this.number)
            this.$store.dispatch("updateOrder",["counter",this.number])    //这里
        }

    }
}
</script>
<style scoped>
.counter-component{
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show{
    float: left;
}
.counter-show input{
    border:none;
    border-top: 1px solid #e3e3e3;
    border-bottom:1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}
.counter-btn{
    border:1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover{
    border-color:#4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>

```


父组件:
```
<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <Counter :max="Counter.max" :min="Counter.min" @counter="getGoodInfo('counter',$event)"/>
                </div>
            </div>
        </div>


        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <DownMenu :DownData="DownMenu" @downmenu="getGoodInfo('downmenu',$event)"/>
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <Radios :Radios="radio" @radios="getGoodInfo('radios',$event)"/>
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    {{ getTotalprice }} 元
                </div>
            </div>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                </div>
                <div class="sales-board-line-right">
                    <a href="" class="button">立即购买</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Counter from './components/counter'
import DownMenu from './components/downMenu'
import Radios from './components/radios'

export default {
    name:'earth',
    data(){
        return{
            counter:1,   //数据初始化
            downmenu:1,
            radios:1,
            totalprice:this.counter*5 + this.downmenu*2 + this.radios*10,
            Counter:{
                max:10,
                min:1
            },
            DownMenu:[
                {
                    name:'初级版',
                    value:1
                },
                {
                    name:'中级版',
                    value:2
                },
                {
                    name:'高级版',
                    value:3
                },
            ],
            radio:[
                    {
                        title:'1个月',
                        value:1
                    },
                    {
                        title:'3个月',
                        value:3
                    },
                    {
                        title:'半年',
                        value:6
                    },
                    {
                        title:'一年',
                        value:12
                    },
                ]
        }
    },
    components:{
        Counter,
        DownMenu,
        Radios
    },
    methods:{
        // getCounterNum(data){
        //     console.log(data)
        // },
        // getDownmenu(data){
        //     console.log(data)
        // },
        // getRadios(data){
        //     console.log(data)
        // }
        getGoodInfo(key,value){
            // console.log(key,value)
            /*
             * this, 指向当前组件(vuecomponent)
             */
            // console.log(this)
            this[key]=value
            // =>
            // vuecomponent={
            //     counter:10
            // }
            var readyData={
                "counter":this.counter,   //5
                "downmenu":this.downmenu,  //2
                "radios":this.radios   //10
            }
            // console.log(readyData)
        }
    },
    computed:{
        getTotalprice(){
            this.$store.dispatch('updatePrice',this.counter*5 + this.downmenu*2 + this.radios*10)
            return this.$store.getters.getTotalPrice
        },
        getOrder(){
            return this.$store.getters.getOrder
        }
    }

}
</script>
<style scoped>
.sales-board{
    background: #fff;
}
.sales-board-intro{
    margin-bottom: 20px;
}
.sales-board-intro h2{
    font-size: 20px;
    padding:20px;
}
.sales-board-intro p{
    /* background: #7f7cff; */
    padding:10px 20px;
    /* color:#999; */
    line-height: 1.8;
}
.sales-board-form{
    padding:0px 20px;
    font-size: 14px;
}
.sales-board-line{
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left{
    display: inline-block;
    width: 100px;
}
.sales-board-line-right{
    display: inline-block;
    width: 75%;
}
.sales-board-des{
    border-top: 20px solid #f0f2f5;
    padding:15px 20px;
}
.sales-board-des p{
    line-height: 1.6;
}
.sales-board-des h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3{
    font-size: 18px;
    font-weight: bold;
    padding:20px 0 10px 0;
}
.sales-board-des li{
    padding:5px 0;
}
.sales-board-table{
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th{
    background: #4fc08d;
    color:#fff;
}
.sales-board-table td{
    border:1px solid #f0f2f5;
    padding:15px;
}






.buy-dialog-title{
    font-size: 16px;
    font-weight: bold;
}
.buy-dialog-btn{
    margin-top: 20px;
}
.buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
    border:1px solid #e3e3e3;
    text-align: center;
    padding:5px 0;
}
.buy-dialog-table th{
    background: #4fc08d;
    color:#fff;
    border:1px solid #4fc08d;
}
.button{
    background: #4fc08d;
    color:#fff;
    display: inline-block;
    padding:10px 20px;
    cursor: pointer;
}
</style>

```

别的组件:
```
<template>
    <div>
        总价：{{getTotalPrice}}
    </div>
</template>

<script>
export default {
    name:'hill',
    data(){
        return{

        }
    },
    computed:{
        getTotalPrice(){
            return this.$store.getters.getTotalPrice
        }
    }
}
</script>
<style>

</style>

```