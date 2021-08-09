<template>
  <div class=" list-group">
      <div @click="open = !open" class="list-group-item title">{{question.title}}</div>
      <div v-if="open" class="list-group-item">{{question.text}}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
name:'HelpQuestions',
props:['question'],
setup(){
    const open = ref(false)
    return{open}
}
}
</script>

<style>
.list-group-item{
    cursor: pointer;
}
.title:hover{
   background-color: rgb(236, 236, 236);
}
</style>