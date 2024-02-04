<template>
    <div class="intro">
    <v-avatar 
    size="300">    
        <v-img src="../assets/sangarImage.jpeg"></v-img>
    </v-avatar>
    <p id="title">
        Software Development Engineer
    </p>
    <p class="selfIntroCont">
    A Software Development Engineer with an experience of nearly 2 years in Software Industry with practical experience in both frontend and backend technologies and as well as hands-on exposure to several AWS cloud services.    
    </p>
    <div class="social">
        <a href class="socialButton"><v-icon icon="mdi-linkedin"></v-icon></a>
        <a href class="socialButton"><v-icon icon="mdi-email"></v-icon></a>
        <a href class="socialButton"><v-icon icon="mdi-github"></v-icon></a>
        <a href class="socialButton"><v-icon icon="mdi-reddit"></v-icon></a>
    </div>
   <div class="professionalDetails">
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
    
    <button id="downloadBtn">
        Download CV
    </button>
   </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .intro{
        margin-top:65px;
        padding: 20px 40px;
        display:flex;
        flex-direction:column;
        align-items:center;
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
    @media only screen and (min-width: 600px) {
    
    }
    
    @media only screen and (min-width: 1400px) {
        .intro{
            margin-top:0px
        }   
    }
</style>