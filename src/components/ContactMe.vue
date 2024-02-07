<template>
    <div class="contactMe">
        <div>
            <div class="title"
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="200"
            >
                <span> Contact Me </span> 
                <v-icon style="color: #95d5b2; margin-left:4px" icon="mdi-gmail"></v-icon>
            </div>
            <div class="subtitle"
            v-motion
            :initial="{ opacity: 0, y: -50 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="300"
            >
                Connect with me to bring your<br> <span style="color:#f4e285;  font-size: 16px;"> Dream project</span> to <span style="color:#90e0ef;  font-size: 16px;">life</span>.
                Shoot me an <span style="color:#80ed99;  font-size: 16px;">email now!</span>
            </div>
        </div>
        <div class="formDiv">
            <form @submit.prevent="sendEmail">
            <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="400"
            >

                <v-text-field
                class="formField"
                v-model="name"
                base-color="#f4f3ee"
                label="Name"
                color="#95d5b2"
                variant="outlined"
                ></v-text-field>
            </div>
            <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="450"
            >

                <v-text-field
                type="email"
                v-model="email"
                base-color="#f4f3ee"
                class="formField"
                label="Email"
                variant="outlined"
                color="#95d5b2"
                ></v-text-field>
            </div>
            <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="500"
            >

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
            </div>
                <div
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="500"
                >  
                    <button type="submit" class="submitBtn">

                        {{ apiInprogress ?  "Sending..." : "Send To Me" }}
                    
                    </button>
                </div>
            </form>
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
                    <span style="margin-left: 10px; font-weight:500">{{isError ? "Error Occured While Sending message" : "Message sent successfully"}}</span></p>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                name:"",
                email:"",
                message:"",
                apiInprogress: false,
                isError: false,
                showSnackBar: false,
            }
        },
        methods:{
            async sendEmail(){
                try {
                    if (
                    !this.apiInprogress && (                        
                    this.email.trim() != "" ||
                    this.name.trim() != "" ||
                    this.message.trim() != "")
                  ) {
                    this.apiInprogress = true;
                    this.showSnackBar = false;
                    let requesBody = {
                        "userEmail": this.email, "userName": this.name, "userMessage": this.message
                    };
                        let endpoint= 'https://email-storage.vercel.app/contact/emailDetails';
                    await axios.post(endpoint, requesBody);
                    this.apiInprogress = false;
                    this.showSnackBar = true;
                  }
                } catch(e){
                    this.apiInprogress = false;
                    this.isError = true;
                    this.showSnackBar = true;
                }
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
.notification{
    text-align: center;
}
    /*for web*/
    @media only screen and (min-width: 768px) {
        .contactMe{
            width: 100%;
            display: flex;
            flex-direction:row;
            align-items:center;
            justify-content: center;
            gap: 40px
        }
        .title{
            font-size: 26px;
        }
        .subtitle{
            font-size: 18px;
        }
        .formDiv{
            padding: 5px 10px;
            width:500px;
        }
    }
</style>