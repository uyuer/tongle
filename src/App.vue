<template>
    <div>
        <c-header></c-header>
        <router-view></router-view>
        <c-footer></c-footer>
        <!-- <des></des> -->
    </div>
        
</template>

<script>
import cHeader from '@/components/cHeader'
import cFooter from '@/components/cFooter'
import des from '@/components/des'
export default {
    name: 'App',
    components:{
        'c-header':cHeader,
        'c-footer':cFooter,
        'des':des
    },
}
</script>

<style lang="scss">
    html,body{
        width:100%;
        background-color: #6f5582;
    }
</style>
