<template>
   
  <div>
    <WebNavBar class="WebNav"></WebNavBar>
    <MobileNavBar class="MobileNav"></MobileNavBar>
    <SelfIntro></SelfIntro>
    <v-divider id="sec1"></v-divider>
    <CategoryOfWork></CategoryOfWork>
    <v-divider id="sec1"></v-divider>
    <SkillsAndWork></SkillsAndWork>
    <v-divider id="sec1"></v-divider>
    <ProjectsDeveloped></ProjectsDeveloped>
  </div>
  </template>
<script>
  import WebNavBar from '../components/WebNavBar.vue';
  import MobileNavBar from '../components/MobileNavBar.vue';
  import SelfIntro from '../components/SelfIntro.vue';
  import CategoryOfWork from '../components/CategoryOfWork.vue';
  import SkillsAndWork from '../components/SkillsAndWork.vue';
  import ProjectsDeveloped from '../components/ProjectsDeveloped.vue';
export default {
  components:{
    WebNavBar,
    MobileNavBar,
    SelfIntro,
    CategoryOfWork,
    SkillsAndWork,
    ProjectsDeveloped
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
@media only screen and (max-width: 600px) {
  .MobileNav {
    display: block;
  }
  .WebNav {
    display: none;

  }
}
@media only screen and (min-width: 1400px) {
  .MobileNav {
    display: none;
  }
  .WebNav {
    display: block;

  }
}

</style>