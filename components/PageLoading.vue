<template>
    <div class="vld-parent">
        <loading :active.sync="load" ></loading>
         
    </div>
</template>

<script>
    // Import component
    import { type } from 'os';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        props:{
            load:{
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isLoading: true                
            }
        },
        components: {
            Loading
        }
    }
</script>