<template>
    <div class="tabbar">
        <van-tabbar
         v-model="active"
         active-color="#ee0a24" 
         inactive-color="#000"
        
         route
         >
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/fen">分销</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/cart">购物</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
   import {ref} from "vue";
   import {useRouter} from "vue-router"
   let router=useRouter();
   let active:any = ref(0);
//    let onchange_fn:(index?:number | string)=>void=function(index?:number | string){
//       console.log(index)
//       switch(index){
//         case 0:router.push("/") ;break
//         case 1:router.push("/fen");break
//         case 2:router.push("/cart");break
//         case 3:router.push("/mine");break
//       }
//    }
</script>

<style lang="scss" scoped>
.tabbar{
    position: fixed;
    bottom:0;
    left:0;
   
}
</style>