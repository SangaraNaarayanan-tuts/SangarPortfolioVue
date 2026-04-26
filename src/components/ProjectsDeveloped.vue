<template>
    <div class="projectsDeveloped">
        <div class="title"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="200"
        >
            <span> {{ content.title }} </span> 
                <v-icon style="color: #95d5b2" :icon="content.titleIcon"></v-icon>
     </div>
     <div class="projects"
     
     >
        <div
        v-for="project in content.projects"
        :key="project.name"
        class="projectCard"
        v-motion
        :initial="{ opacity: 0, X: -50 }"
        :visibleOnce="{ opacity: 1, X: 0 }"
        :delay="300"
        >

            <div class="projectImage">
                <v-img :src="projectImages[project.imageKey]"></v-img>
            </div>
            
            <div class="projectName">
                    {{ project.name }}
            </div>
            
            <div class="projectDes">
                {{ project.description }}
            </div>

            <div class="projectRelease">
                <span  style="color: #95d5b2">Release Date:</span> <span >{{ project.releaseDate }}</span>
            </div>
            
            <div class="projectlinks">
                <!-- <div class="projectSource">
                    <v-icon size="28" style="color: #95d5b2" icon="mdi-github"></v-icon>
                    <a href  class="link"> Source code </a>
                </div> -->
                
                <div class="projectTry">
                    <v-icon size="28" style="color: #95d5b2" :icon="project.ctaIcon"></v-icon>
                    <a :href="project.ctaLink" target="_blank" class="link"> {{ project.ctaText }}</a>
                </div>
            </div>

        </div>
     </div>
    </div>
</template>

<script>
import content from '../data/projectsDeveloped.json';
    export default {
        data() {
            return {
                content,
                projectImages: {
                    darkNotesAppLogo: require('../assets/projects/DarkNotes/appLogo.png')
                }
            };
        }
    }
</script>

<style scoped>
.projectsDeveloped{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin: 20px 0px;
    padding: 20px 40px;
    gap: 20px
}
.title{
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0px;
    letter-spacing: 2px;
}
.projectCard{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    background-color:#232323;
    padding: 20px 20px;
    border-radius: 8px;
    width:290px;
}

.projectImage{
    height: 140px;
    width: 110px;
}
.projectName{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.5px;
}
.projectDes{
    margin:10px 0px;
    font-size: 14px;
    font-weight: 500;
    color: #7a7a7a
}
.projectRelease{
    margin: 10px 0px 0px 0px;
    font-size: 14px;
    font-weight: 500; 
    width:100%;
}
.projectlinks{
    width:100%;
    text-decoration: none;
    margin: 10px 0px 5px 0px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
}
.projectTry{
    display:flex;
    align-items: center;
}

.projectSource{
    display:flex;
    align-items: center;
    text-align:center;
}

.link{
    margin:10px 5px;
    text-decoration: none;
    font-size:14px;
    color: white
}

@media only screen and (min-width: 768px) {
    .title{
        font-size: 20px;
    }
}
</style>