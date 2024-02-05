<template>
    <div class="skillAndWork">
        <div class="title">
            <span> Skills & Experience </span> 
                <v-icon style="color: #95d5b2" icon="mdi-sword-cross"></v-icon>
     </div>
     <div class="skills">
        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="vueJs"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Vue JS
                </p>
        </div> 
        
        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="react"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    React JS
                </p>
        </div>

        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="flutter"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Flutter
                </p>
        </div> 

        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="nodeJs"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Node Js
                </p>
        </div> 

        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="mysql"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Mysql
                </p>
        </div>
        
        
        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="awsDb"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Dynamo db
                </p>
        </div> 
    
        <div class="skillsCard">
            <div>
                <v-avatar 
                    size="40"
                    class="skillsImg">
                    <v-img
                    :src="aws"
                    ></v-img>
                </v-avatar>
            </div>
                <p class="skillTitle">
                    Aws Services
                </p>
        </div> 
    
    </div>
    <div class="workstitle">
        The companies that have been instrumental in cultivating my skills and molding me into an expert in the above mentioned areas. 
    </div>
    <div class="work">
        <div class="workCard">
            <div id="workYear">
                <div>Aug-2022</div>
                <div>Current</div>
            </div>
            
            <div class="workImageCode" >
                <v-img src="../assets/work/codestax.png"></v-img>
            </div>
            <section class="workDetails">
            <div class="workCompany">
                Codestax.Ai
            </div>
            
            <div class="workRole">
                Software Development Engineer - I
            </div> 
            </section>
        </div>
        
        <div class="workCard">
            <div id="workYear">
                <div>Feb-2022</div>
                <div>Aug-2022</div>
            </div>
            
            <div class="workImageAcc" style="">
                <v-img src="../assets/work/Accolite.png"></v-img>
            </div>
            <section class="workDetails">
            <div class="workCompany">
                Accolite
            </div>
            
            <div class="workRole">
                Software Development Engineer - Intern
            </div> 
            </section>
        </div>

       
    </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                vueJs: require('../assets/skills/vueJS.svg'),
                react: require('../assets/skills/reactJs.svg'),
                flutter: require('../assets/skills/flutter.svg'),
                nodeJs: require('../assets/skills/nodeJs.svg'),
                mysql: require('../assets/skills/mysql.svg'),
                awsDb: require('../assets/skills/awsDynamodb.svg'),
                aws: require('../assets/skills/aws.svg')
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
    background-color: #848482;

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
    justify-content: space-around;
    background-color:#232323;
    padding: 20px 20px;
    height:290px;
    width:260px;
    border-radius: 8px;
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
</style>