<template>
<td :class="className">{{text}}</td>
</template>

<script>
import { ref } from 'vue'
export default {
name:'AppStatus',
props:{
    type:{
        type:String,
        required:true,
        validator(value){
            return ['completed','canceled','active','in-progress'].includes(value)
        }
    }
},
setup(props){
    const classesMap = {
        'completed':'table-success',
        'canceled':'table-secondary',
        'active':'table-danger',
        'in-progress':'table-warning'
    }
    const textMap = {
        'completed':'Completed',
        'canceled':'Canceled',
        'active':'Active',
        'in-progress':'In progress'
    }

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])
    return{className, text}
}
}
</script>

<style>
</style>