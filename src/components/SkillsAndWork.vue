<template>
    <div class="skillAndWork">
        <div class="title"
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="200"
        >
            <span> {{ content.title }} </span> 
                <v-icon style="color: #95d5b2" :icon="content.titleIcon"></v-icon>
     </div>
     <div class="skills"
     v-motion
     :initial="{ opacity: 0, X: -50 }"
     :visibleOnce="{ opacity: 1, X: 0 }"
     :delay="300"
     >
        <div
            v-for="skill in content.skills"
            :key="skill.key"
            class="skillsCard"
        >
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="skillImages[skill.key]"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    {{ skill.name }}
                </p>
        </div> 
    
    </div>
    <div class="workstitle"
    v-motion
    :initial="{ opacity: 0, X: -50 }"
    :visibleOnce="{ opacity: 1, X: 0 }"
    :delay="400"
    >
        {{ content.workIntro }}
    </div>
    <div class="work">
        <div
        v-for="item in content.experience"
        :key="`${item.company}-${item.start}`"
        class="workCard"
        v-motion
        :initial="{ opacity: 0, X: -50 }"
        :visibleOnce="{ opacity: 1, X: 0 }"
        :delay="100"
        >
            <div id="workYear">
                <div>{{ item.start }}</div>
                <div>{{ item.end }}</div>
            </div>
            
            <div :class="item.imageClass" :style="item.imageStyle">
                <v-img :src="workImages[item.imageKey]"></v-img>
            </div>
            <section class="workDetails">
            <div class="workCompany">
                {{ item.company }}
            </div>
            
            <div class="workRole">
                {{ item.role }}
            </div> 
            </section>
        </div>

       
    </div>

    </div>
</template>

<script>
import content from '../data/skillsAndWork.json';
    export default {
        data(){
            return{
                content,
                skillImages: {
                    vueJs: require('../assets/skills/vueJS.svg'),
                    react: require('../assets/skills/reactJs.svg'),
                    flutter: require('../assets/skills/flutter.svg'),
                    nodeJs: require('../assets/skills/nodeJs.svg'),
                    mysql: require('../assets/skills/mysql.svg'),
                    awsDb: require('../assets/skills/awsDynamodb.svg'),
                    aws: require('../assets/skills/aws.svg'),
                    gcp: require('../assets/skills/gcp.svg')
                },
                workImages: {
                    tensure: require('../assets/work/tensure.png'),
                    codestax: require('../assets/work/codestax.png'),
                    accolite: require('../assets/work/Accolite.png')
                }
            }
        }
        
    }
</script>

<style scoped>
.skillAndWork{
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
.workstitle{
    font-size: 16px;
    text-align:center;
    margin: 10px 0px;
}

.skills{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content:center;
    flex-wrap: wrap;
    gap: 10px
}
  
.skillsCard {
    display: flex;
    flex-direction: row;
    align-items:center;

    width: 150px;
    border-radius: 8px;
    background-color:#232323;
    padding: 12px 15px;
    transition: .5s;
}
.skillsCard:hover{
    box-shadow: 0px 0px 10px #95d5b2;
    transition: .5s;
}
.skillsImg{
    padding: 8px;
    background-color: #ffffffff;

}
.skillTitle{
    font-size:14px;
    margin-left: 12px ;
}
.work{
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    gap: 20px
}
.workCard{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    background-color:#232323;
    padding: 20px 20px;
    height:290px;
    width:260px;
    border-radius: 8px;
    transition: .5s;
}
.workCard:hover{
    box-shadow: 0px 0px 10px #95d5b2;
    transition: .5s;
}
#workYear{
    display: flex;
    width: 100%; 
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500
}
.workImageAcc{
    display: flex;
    align-items:center;
    height: 90px;
    width:150px;
    border-radius:8px;
    padding: 10px 10px;
    margin: 50px 0px;
    background-color:white
}
.workImageCode{
    display: flex;
    align-items:center;
    height: 140px;
    width: 100%;
}
.workDetails{
    text-align:center;
}
.workCompany{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.5px;

}
.workRole{
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #7a7a7a

}
@media only screen and (min-width: 768px) {
    .skills{
        gap:15px;
        margin:15px 0px;
    }
    .work{
        display: flex;
        flex-direction: row;

    }
    .title{
        font-size: 20px;
    }
    .workstitle{
        width: 800px;
    }
    .workCard{
        height: 350px;
        width: 300px;
    }
    .workImageCode{
        height: 200px;
        width: 100%;   
    }
    .workImageAcc{
        height: 140px;
        
    }
    .workCompany{
        font-size: 20px;
    }
    
}
</style>