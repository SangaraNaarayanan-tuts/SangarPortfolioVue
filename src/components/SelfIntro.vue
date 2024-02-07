<template>
    <div class="intro" >
        <div class="child1"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        >
            <v-img  class="blobImage" src="../assets/SangarImageBlobed.png"></v-img>
        </div>
        <div class="child2" 
        
        >
            <div class="mainIntro">
                <p id="title"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="200"
                >
                    Software Development Engineer
                </p>
                <p class="selfIntroCont"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="300"
                >
                A Software Development Engineer with an experience of nearly 2 years in Software Industry with practical experience in both frontend and backend technologies and as well as hands-on exposure to several AWS cloud services.    
                </p>
                <div class="social"
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="400"
                >
                    <a href="https://www.linkedin.com/in/sangaranaarayananr" target="_blank" class="socialButton"><v-icon icon="mdi-linkedin"></v-icon></a>
                    <a href="mailto:rsangaranaarayanan@gmail.com" target="_blank" class="socialButton"><v-icon icon="mdi-email"></v-icon></a>
                    <a href="https://github.com/SangaraNaarayanan-tuts" target="_blank" class="socialButton"><v-icon icon="mdi-github"></v-icon></a>
                    <a href="https://www.reddit.com/user/sangar-tuts" target="_blank" class="socialButton"><v-icon icon="mdi-reddit"></v-icon></a>
                </div>
            </div>
            <div class="professionalDetails"
            v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="500"
            >
                <div class="yoe"> 
                    <p id="years">
                        2+
                    </p> 
                    <p id="exp">
                        Years Of <br>Experience
                    </p> 
                </div>
                <div class=""> 
                    <p id="years">
                        2
                    </p> 
                    <p id="exp">
                        Worked For <br> Companies
                    </p> 
                </div>
                
                <button @click="downloadCV" id="downloadBtn" >
                    Download CV
                </button>
            </div>
        </div>
</div>
</template>

<script>
import {storage} from '../plugins/firebase.js';
import { ref, getDownloadURL } from "@firebase/storage";
    export default {
        data() {
            return {
                resumePath: "gs://sangaraportfoliovue.appspot.com/Sangara Naarayanan R Resume.pdf"
            }
        },
        methods: {
            downloadCV() {
                getDownloadURL(ref(storage, this.resumePath)).then((downloadUrl)=>{
                    window.open(downloadUrl, "_blank");
                })
            }
        },
    }
</script>

<style scoped>
    .intro{
        margin-top:65px;
        width: 100%;
        padding: 20px 40px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .blobImage {
        width:300px;
        height: auto;
        margin: -35px 0px;
    }
    .child2 {
        margin: 0px;
    }
    #title{
        font-size:16px;
        font-weight:600;
        margin: 15px 0px;
        color: #95d5b2;
    }
    .selfIntroCont{
        font-size:14px;
        color: #7a7a7a
    }
    .social{
        margin: 30px 0px;
    }
    .socialButton{
        padding: 8px;
        margin: 5px;
        border: 1px solid #95d5b2 ;
        color: #dee2e6;
        border-radius: 3px;
        transition: .5s ;
    }
    .socialButton:hover{
        color: #95d5b2;
        background-color: #1b4332;
        border: 1px solid #1b4332;
        transition: .5s ;
    }
    .professionalDetails{
        display:flex;
        align-items:center;
        justify-content: space-between ;
        gap: 20px;
    }
    #years{
        font-size:30px
    }
    #exp{
        font-size:15px
    }
    #downloadBtn{
        height: 50px;
        width: 130px;
        padding: 10px 10px;
        border: 1px solid #95d5b2 ;   
        border-radius: 3px;
        color: #95d5b2;
        transition: .5s ;
    }
    
    #downloadBtn:hover{
        color: #95d5b2;
        background-color: #1b4332;
        border: 1px solid #1b4332;
        transition: .5s ;
    }
 
    /*for web*/
    @media only screen and (min-width: 768px) {
        .child1{
            width: 45%;
            display: flex;
            justify-content: flex-end;
    
        }
        .child2 {
            width: 60%;
            margin-left: 35px;
           }
        .intro{
            justify-content: center;
            padding: 30px;
            flex-direction: row; 
        }
        #title{
            font-size:20px;
        }
        .selfIntroCont{
            font-size: 16px;
        }

        .mainIntro{
            width: 70%;
        }
        .professionalDetails{
            width: 50%;
            justify-content: flex-start ;
        }
    }
</style>