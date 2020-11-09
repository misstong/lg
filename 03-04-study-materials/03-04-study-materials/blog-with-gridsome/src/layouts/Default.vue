<template>
  <div class="layout">
    <section class="page-header">
      <h1 class="project-name">tzy</h1>
       <a href="https://github.com/misstong" class="btn" target="_blank">GitHub主页</a>
    </section>
    <section class="main-content">
      <el-row>
        <el-col :span="6">
          <el-card class="box-card" shadow="never">
            <el-menu
              @select='onSelect'
              default-active="/user/new/"    
              class="el-menu-vertical-demo">
              <el-menu-item index="/user/new">
                <i class="el-icon-menu"></i>
                <span slot="title" >最新动态</span>
              </el-menu-item>
              <el-menu-item index="/user/social/">
                <i class="el-icon-menu"></i>
                <span slot="title">社交圈</span>
              </el-menu-item>
              <el-menu-item index="/post/">
                <i class="el-icon-document"></i>
                <span slot="title">博客列表</span>
              </el-menu-item>
              <el-menu-item index="/project">
                <i class="el-icon-setting"></i>
                <span slot="title">开源项目</span>
              </el-menu-item>
            </el-menu>
          </el-card>
        </el-col>
        <el-col :span="18" style="padding-left: 10px"><slot/></el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    onSelect(index) {
      console.log(index)
      console.log(this.$route)
      const {path} = this.$route
      if (path!==index){
        this.$router.push(index)
      }
      
    }
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
} */
.page-header {
      padding: 5rem 6rem;
      color: #fff;
      text-align: center;
      background-color: #159957;
      background-image: linear-gradient(120deg, #155799, #159957);
  }
   .main-content {
        max-width: 64rem;
        padding: 30px 0px 30px 0px;
        margin: 0 auto;
        font-size: 1.1rem;
        word-wrap: break-word;
        min-height: 800px;
    }
   a:hover {
        text-decoration: underline;
    }
    a:active,
    a:hover {
        outline: 0;
    }
    .btn {
        padding: 0.75rem 1rem;
        display: inline-block;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.3rem;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }
    a {
        color: #1e6bb8;
        text-decoration: none;
    }
</style>
