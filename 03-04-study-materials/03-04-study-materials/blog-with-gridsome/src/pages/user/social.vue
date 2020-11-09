<template>
    <Layout>
        <el-tabs type="card" @tab-click="onSelect" v-model="activeTab">
            <el-tab-pane label="粉丝" name="followers">
                <div v-if="followers.length">
                    <el-row>
                        <el-col :span="8" v-for="item in followers" :key="item.id" style="padding: 10px">
                            <el-card shadow='hover'  style="font-size: 13px;color: #606266;line-height: 20px">
                                <i class="el-icon-star-off"></i>&emsp;
                                <span>{{item.login}}</span>
                                <br>
                                <i class="el-icon-message"></i>&emsp;
                                <a :href="item.htmlUrl">TA的主页</a>
                                <img :src="item.avatar_url" style="width: 100%;border-radius:5px;margin-top: 5px">
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div v-else>
                    <font style="font-size: 30px;color:#dddddd ">
                        <b>(￢_￢) 没有一个粉丝</b>
                    </font>
                </div>
            </el-tab-pane>
            <el-tab-pane label="关注" name="following">
                <div v-if="following.length">
                    <el-row>
                        <el-col :span="8" v-for="item in following" :key="item.id" style="padding: 10px">
                            <el-card shadow='hover'  style="font-size: 13px;color: #606266;line-height: 20px">
                                <i class="el-icon-star-off"></i>&emsp;
                                <span>{{item.login}}</span>
                                <br>
                                <i class="el-icon-message"></i>&emsp;
                                <a :href="item.htmlUrl">TA的主页</a>
                                <img :src="item.avatar_url" style="width: 100%;border-radius:5px;margin-top: 5px">
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                    <font style="font-size: 30px;color:#dddddd ">
                        <b>(￢_￢) 还没有关注一个人</b>
                    </font>
                </div>
            </el-tab-pane>
        </el-tabs>
    </Layout>
</template>

<script>
import {followers, following} from '@/api/user'
export default {
    name: 'social',
    data(){
        return {
            activeTab: 'followers',
            query:{
                page: 1,
                pageSize: 9,
                pageNumber: 1
            },
            followers: [],
            following: []
        }
    },
    methods: {
        onSelect(tab){
            console.log(this.activeTab)
            switch(tab){
                case 'followers':
                    followers(this.query).then(res=>{
                        console.log(res)
                        this.followers = res.data
                    })
                    break;
                case 'following':
                    following(this.query).then(res=>{
                        console.log(res)
                        this.following = res.data
                    })
                    break;
                default:
                    break
            }

        }
    },
    created(){
        followers(this.query).then(res=>{
            console.log(res)
            this.followers = res.data
        })
    }
}
</script>

<style>

</style>