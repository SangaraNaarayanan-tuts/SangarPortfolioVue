<template>
   
  <div>
    <NavBar></NavBar>
    <SelfIntro></SelfIntro>
    <v-divider id="sec1"></v-divider>
    <CategoryOfWork></CategoryOfWork>
    <v-divider id="sec1"></v-divider>
    <SkillsAndWork></SkillsAndWork>
    <v-divider id="sec1"></v-divider>
    <ProjectsDeveloped></ProjectsDeveloped>
    <v-divider id="sec1"></v-divider>
    <ContactMe></ContactMe>
    <CopyrightAndBuild></CopyrightAndBuild>
  </div>
  </template>
<script>
  import NavBar from '../components/NavBar.vue';
  import SelfIntro from '../components/SelfIntro.vue';
  import CategoryOfWork from '../components/CategoryOfWork.vue';
  import SkillsAndWork from '../components/SkillsAndWork.vue';
  import ProjectsDeveloped from '../components/ProjectsDeveloped.vue';
  import ContactMe from '../components/ContactMe.vue';
  import CopyrightAndBuild from '../components/CopyrightAndBuild.vue';
export default {
  components:{
    NavBar,
    SelfIntro,
    CategoryOfWork,
    SkillsAndWork,
    ProjectsDeveloped,
    ContactMe,
    CopyrightAndBuild
  },
  data() {
    return { 
     
    }
  },
  methods: {
  copyEmail(){
    navigator.clipboard.writeText(this.email);
  }
}
}
</script>
<style scoped>
#sec1{
  margin: 20px 0px;
}
  

</style>