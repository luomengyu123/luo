<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="">
      </div>
    </div>
    <div class="headline">
      <div class="headline_item">
        <img src="../../public/images/img_05.png" alt="">
        <p>限时抢购</p>
      </div>
      <div class="headline_item">
        <img src="../../public/images/img_07.png" alt="">
        <p>登录福利</p>
      </div>
      <div class="headline_item">
        <img src="../../public/images/img_09.png" alt="">
        <p>优惠券包</p>
      </div>
      <div class="headline_item">
        <img src="../../public/images/img_11.png" alt="">
        <p>推荐新品</p>
      </div>
    </div>
    <div class="intro">
      <div>
        <img src="../../public/images/img_20.png" alt="">
      </div>
      <div>
        <img src="../../public/images/img_18.png" alt="">
        <img src="../../public/images/img_23.png" alt="">
      </div>
    </div>
    <div class="flashSale">
       <div><p>更多好礼送给您</p></div>
       <div><p>限时抢购</p></div>
       <div><p>抓紧时间抢购啦</p></div>
    </div>
  </div>
  

</template>

<script lang="ts" setup>
import { ref,onMounted} from 'vue';
import {home_http} from "@/api/httpHome";
let mount=ref("hello seec1");
// home_http().then((res)=>console.log("-----22----",res));
getHome()
async function getHome(){
  let data=await home_http()
  console.log("----32----",data)
}
</script>
<style lang="scss" scoped>
  .home{
    position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:50px;
      overflow: scroll;
    .nav{
      .pic{
        width: 375px;
        height:296.5px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .headline{
      width: 375px;
      height:77.5px;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-top:20px;
      .headline_item{
        font-size: 12px;
        img{
          
          width: 42.5px;
          height:42.5px;
        }
        
      }
    }
    .intro{
      width: 100%;
      display: flex;
      justify-content: space-between;
      height:208px;
      box-sizing: border-box;
      padding-left: 10px;
     
      div:nth-child(1){
        img{
          width: 172.5px;
          height:190px;
          margin-top:15px;
        }
      }
      div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img:nth-child(1){
          width: 182.5px;
          height:100px;
        }
        img:nth-child(2){
          width: 173px;
          height:93.5px;
        }
      }
    }
    .flashSale{
      display: flex;
      height:53.5px;
      background:red;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding:0 10px;
      div{
        font-size: 12px;
        flex:1.5;
        text-align: center;
        position: relative;
      }
      div::after{
        content: "";
        width: 100%;
        height:1px;
        background:#000;
        position: absolute;
        left:0;
        top:50%;
        transform: translate(0,-50%);
      }
      div:nth-child(1) p{
        position: relative;
        display: inline-block;
        background:#fff;
        z-index:99;
      }
      div:nth-child(3) p{
        display: inline-block;
        background:#fff;
        position: relative;
        z-index:99;
      }
      div:nth-child(2){
        font-size:20px;
        flex:1;
      }
      div:nth-child(2)::after{
        display: none;
      }
    }
  }
</style>
