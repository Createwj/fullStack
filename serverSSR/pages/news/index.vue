<template>
  <div>
      <h2>News Index page</h2>
      <h2>{{$route.params.newsId}}</h2>
       <ul>
          <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
         <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'jspang.com'}}">News-1</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:12}}">new-1</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:34}}">new-2</nuxt-link></li>
        <!--<li><a href="/">Home</a></li>-->
        <!--<li><a href="/news/123">News-1</a></li>-->
        <!--<li><a href="/news/456">News-2</a></li>-->
      </ul>
  </div>
</template>
<script>
export default {
  // validate ({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id)
  // }
}
</script>
