<template>
  <Layout>
      <el-card v-for="i in 4" :key="i" shadow="hover" style="margin-bottom: 20px">
          <div slot="header">
              <el-row>
                  <el-col :span="16">
                      <span>
                        <a style="text-decoration:none;cursor:pointer">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; project
                        </a>
                    </span>
                  </el-col>
                  <el-col :span='8'>
                      <div style="text-align: right">
                          <el-button style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                          <el-button icon="el-icon-share"  style="padding: 3px 0" type="text">
                          </el-button>
                      </div>
                  </el-col>
              </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新
        </div>
        <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
            project
        </div>
      </el-card>
      
  </Layout>
</template>

<script>
export default {

}
</script>
<style>

</style>