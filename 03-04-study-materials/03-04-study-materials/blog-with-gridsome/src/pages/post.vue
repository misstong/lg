<template>
  <Layout>
      <el-card v-for="edge in $page.posts.edges" :key="edge.node.id" shadow="hover" style="margin-bottom: 20px">
          <div slot="header">
              <el-row>
                  <el-col :span="16">
                      <span>
                        <a style="text-decoration:none;cursor:pointer">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{edge.node.title}}
                        </a>
                    </span>
                  </el-col>
                  <el-col :span='8'>
                      <div style="text-align: right">
                          <el-button icon="el-icon-share"  style="padding: 3px 0" type="text">
                          </el-button>
                      </div>
                  </el-col>
              </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{edge.node.created_at}}
        </div>
        <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
            {{edge.node.content}}
        </div>
      </el-card>
      
  </Layout>
</template>

<script>
export default {

}
</script>
<page-query>
query{
  posts: allStrapiPost{
    edges{
      node{
         id
    	title
        content
        created_at
        tags {
          id
          title
        }
  	    
   
      }
    }
  }
}
</page-query>
<style>

</style>