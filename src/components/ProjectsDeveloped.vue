<template>
    <div class="projectsDeveloped">
        <div class="title">
            <span> Individual Projects </span> 
                <v-icon style="color: #95d5b2" icon="mdi-hammer-wrench"></v-icon>
     </div>
     <div class="projects">
        <div class="projectCard">

            <div class="projectImage">
                <v-img src="../assets/projects/DarkNotes/appLogo.png"></v-img>
            </div>
            
            <div class="projectName">
                    Dark Notes
            </div>
            
            <div class="projectDes">
                Dark Notes is a cloud-based note-taking application that seamlessly integrates with any device using your Gmail account. It boasts a range of features designed to keep your notes accessible from any location.
            </div>

            <div class="projectRelease">
                <span  style="color: #95d5b2">Release Date:</span> <span >4 Nov 2023</span>
            </div>
            
            <div class="projectlinks">
                <div class="projectSource">
                    <v-icon size="28" style="color: #95d5b2" icon="mdi-github"></v-icon>
                    <a href  class="link"> Source code </a>
                </div>
                
                <div class="projectTry">
                    <v-icon size="28" style="color: #95d5b2"  icon="mdi-google-play"></v-icon>
                    <a href class="link"> Try Application</a>
                </div>
            </div>

        </div>
     </div>
    </div>
</template>

<script>
    export default {
        
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

</style>