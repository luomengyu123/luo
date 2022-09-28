<template>
    <div>
        <!-- 主题内容 -->
        <router-view></router-view>
        <tab-bar></tab-bar>
    </div>
</template>

<script lang="ts" setup>
   import TabBar from '@/components/tabbar/TabBar.vue';
</script>

<style lang="scss" scoped>

</style>