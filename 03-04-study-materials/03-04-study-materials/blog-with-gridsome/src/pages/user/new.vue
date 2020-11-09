<template>
  <Layout>
      <el-card shadow='never'>
        <div slot="header" v-if="$page.news">
          <span>{{$page.news.edges[0].node.title}}</span>
        </div>
        <div>发布{{$page.news.edges[0].node.created_at}}</div>
        <div>
          {{$page.news.edges[0].node.description}}
        </div>
        <div v-html="$markdown($page.news.edges[0].node.content)"></div>
      </el-card>
      <el-card shadow='never' v-if="!$page.news">
        <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
      </el-card>
  </Layout>
</template>

<script>
export default {

}
</script>
<page-query>
query{
  news: allStrapiNew(limit:1){
    edges{
      node {
        id
        title
        content
        description
        created_at
      }
    }  
  }
}
</page-query>
<style>

</style>