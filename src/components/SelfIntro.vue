<template>
    <div class="intro" >
        <div class="child1"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="100"
        >
            <v-img  class="blobImage" :src="imageSources[content.imageKey]"></v-img>
        </div>
        <div class="child2" 
        
        >
            <div class="mainIntro">
                <p id="title"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="100"
                >
                    {{ content.title }}
                </p>
                <p class="selfIntroCont"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="200"
                >
                {{ content.description }}
                </p>
                <div class="social"
                v-motion
                :initial="{ opacity: 0, y: -100 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="300"
                >
                    <a v-for="social in content.socialLinks" :key="social.href" :href="social.href" target="_blank" class="socialButton"><v-icon :icon="social.icon"></v-icon></a>
                </div>
            </div>
            <div class="professionalDetails"
            v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0 }"
                :delay="300"
            >
                <div v-for="highlight in content.highlights" :key="highlight.label" class="yoe">
                    <p class="years">
                        {{ highlight.value }}
                    </p>
                    <p class="exp" v-html="highlight.label">
                    </p>
                </div>

                <button @click="downloadCv" id="downloadBtn" >
                    {{ apiInprogress ? content.downloadButton.loadingText : content.downloadButton.defaultText }}
                </button>
                <v-snackbar
                v-model="showSnackBar"
                location="bottom"
                :timeout="2000"
                color="#303234"
                rounded="pill"
                >
                <p class="notification">
                    <template v-if="!isError">
                        <v-icon color="green" icon="mdi-emoticon-cool-outline"> </v-icon>
                    </template>
                    <template v-else>
                        <v-icon color="red" icon="mdi-emoticon-dead-outline"> </v-icon>
                    </template>
                    <span style="margin-left: 10px; font-weight:500">{{ isError ? content.snackbarMessage.error : content.snackbarMessage.success }}</span></p>
            </v-snackbar>
            </div>
        </div>
</div>
</template>

<script>
import content from '../data/selfIntro.json';
    export default {
        data() {
            return {
                content,
                imageSources: {
                    profileBlob: require('../assets/SangarImageBlobed.png')
                },
                apiInprogress: false,
                isError: false,
                showSnackBar: false,    
            }
        },
        methods: {
            async downloadCv(){
                try {
                    this.apiInprogress = true;
                    this.showSnackBar = false;
                    let endpoint= this.content.cvEndpoint;
                    this.apiInprogress = false;
                    this.showSnackBar = true;
                    window.open(endpoint, "_blank");
                  
                } catch(e){
                    this.apiInprogress = false;
                    this.isError = true;
                    this.showSnackBar = true;
                }
            },
        },
    }
</script>

<style scoped>
    .intro{
        margin-top:65px;
        width: 100%;
        padding: 20px 30px;
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
        width: 100%;
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
        flex-wrap: nowrap;
    }
    .yoe{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex: 0 0 auto;
        min-width: 90px;
    }
    .years{
        font-size:30px;
        color: #95d5b2;
    }
    .exp{
        font-size:15px
    }
    #downloadBtn{
        height: 50px;
        width: 140px;
        padding: 10px 10px;
        border: 1px solid #95d5b2 ;   
        border-radius: 3px;
        color: #95d5b2;
        transition: .5s ;
        flex: 0 0 auto;
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
            flex-wrap: nowrap;
        }
        .yoe{
            flex: 0 0 auto;
            min-width: unset;
        }
    }

    @media only screen and (max-width: 767px) {
        .mainIntro{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        #title{
            text-align: center;
        }
        .selfIntroCont{
            text-align: center;
        }
        .social{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .socialButton{
            margin: 0;
        }
        .professionalDetails{
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        #downloadBtn{
            order: 2;
            flex-basis: 100%;
            width: 100%;
            max-width: 220px;
            margin: 6px auto 0;
        }
        .yoe{
            order: 1;
            flex: 1 1 0;
            min-width: 90px;
        }
    }
</style>