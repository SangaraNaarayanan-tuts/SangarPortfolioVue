<template>
    <div class="contactMe">
        <div class="title">
            <span> Contact Me </span> 
            <v-icon style="color: #95d5b2; margin-left:4px" icon="mdi-gmail"></v-icon>
        </div>
        <div class="subtitle">
            Connect with me to bring your<br> <span style="color:#f4e285;  font-size: 16px;"> Dream project</span> to <span style="color:#90e0ef;  font-size: 16px;">life</span>.
            Shoot me an <span style="color:#80ed99;  font-size: 16px;">email now!</span>
        </div>
        <div class="formDiv">
            <form>
            <v-text-field
                class="formField"
                v-model="name"
                base-color="#f4f3ee"
                label="Name"
                color="#95d5b2"
                variant="outlined"
            ></v-text-field>

            <v-text-field
                type="email"
                v-model="email"
                base-color="#f4f3ee"
                class="formField"
                label="Email"
                variant="outlined"
                color="#95d5b2"
            ></v-text-field>

            <v-textarea
                v-model="message"
                class="formField"
                base-color="#f4f3ee"
                label="Message"
                auto-grow
                variant="outlined"
                rows="4"
                row-height="25"
                shaped
                color="#95d5b2"
            ></v-textarea>

            <button type="submit" class="submitBtn"> Send To Me</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:"",
                email:"",
                message:""
            }
        }
    }
</script>

<style scoped>
.contactMe{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 20px 0px;
    padding: 20px 40px;
    gap: 20px
}
.title{

    display: flex;
    align-items:center;
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0px;
    letter-spacing: 2px;
}
.subtitle{
    font-size: 14px;
}
.formDiv{
    padding: 5px 10px;
    width:100%;
    
}
.formField{
    width: 100%;
    
}
.submitBtn{
    width:100%;
    height: 50px;
    color: #95d5b2;
    border: 1px solid #95d5b2;
    border-radius: 3px;
}
.submitBtn:hover{
    color: #95d5b2;
    background-color: #1b4332;
    border: 1px solid #1b4332;
    transition: .5s ;
}
</style>