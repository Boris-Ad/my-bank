<template>
  <app-page title="Help">
    <help-questions
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></help-questions>
  </app-page>
</template>

<script>
import HelpQuestions from "../components/help/HelpQuestions.vue";
import AppPage from "../components/ui/AppPage.vue";
export default {
  name: "Help",
  setup() {
    const questions = [
      {
        title: "Vue",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, harum voluptates cum necessitatibus iste nisi quas vel totam quis cupiditate!",
      },
      {
        title: "React",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, harum voluptates cum necessitatibus iste nisi quas vel totam quis cupiditate!",
      },
      {
        title: "Angular",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, harum voluptates cum necessitatibus iste nisi quas vel totam quis cupiditate!",
      },
    ];
    return { questions };
  },
  components: { AppPage, HelpQuestions },
};
</script>

<style>
</style>