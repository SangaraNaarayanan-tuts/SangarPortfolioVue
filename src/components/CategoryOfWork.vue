<template>
    <div class="CatOfWork">
        <div class="title"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        >
                <span> Converting </span> 
                    <v-icon style="color: #95d5b2" icon="mdi-xml"></v-icon>
         </div>
         <div id="wizard"
         v-motion
         :initial="{ opacity: 0, y: 50 }"
         :enter="{ opacity: 1, y: 0 }"
         :delay="300"
         >  
            <p> Diagrams into <span id="wiz1"> Architectures</span>,
              Designs into <span id="wiz2"> Digital Reality</span>,
              Concepts into <span id="wiz3"> Code</span>.</p>
         </div>
        <div class="categories">
            <div class="cateCard"
            v-motion
            :initial="{ opacity: 0, X: -50 }"
            :enter="{ opacity: 1, X: 0 }"
            :delay="400"
            >
                <div class="catImg"
            >
                <v-img src="../assets/webDevelop.png"></v-img>
                </div>
                <p class="catTitle">
                    Website Development
                </p>
                <p class="catText">
                    Creating and maintaining websites or web applications, creating a seamless website experience.
                </p>
            </div>
            <div class="cateCard"
            v-motion
            :initial="{ opacity: 0, X: -50}"
            :enter="{ opacity: 1, X: 0 }"
            :delay="400">
                <div class="catImg">
                    <v-img src="../assets/mobileAppDevelop.png"></v-img>
                    </div>
                    <p class="catTitle">
                        Mobile App Development
                    </p>
                    <p class="catText">
                        Creating and maintaining android applications, creating a seamless application experience.
                    </p>
            </div>
            <div class="cateCard"
            v-motion
            :initial="{ opacity: 0, X: -50 }"
            :enter="{ opacity: 1, X: 0 }"
            :delay="400">
                <div class="catImg">
                    <v-img src="../assets/archDevelop.png"></v-img>
                    </div>
                    <p class="catTitle">
                        Aws Architecture Designing
                    </p>
                    <p class="catText">
                        Designing powerful and scalable cloud solutions on AWS, building efficient architectures for seamless digital experiences.
                    </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.CatOfWork{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin: 20px 0px;
    padding: 20px 40px;
}
.title{
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0px;
    letter-spacing: 2px;
}
#wizard{
    margin: 10px 0px;
    font-size: 14px;
    display:flex;
    flex-direction:column;
    gap: 5px
}
#wiz1{
    font-size:16px;
    color: #ff85a1;
}
#wiz2{
    font-size:16px;
    color: #90e0ef;
}
#wiz3{
    font-size:16px;
    color: #ecbcfd;
}
.categories{
    margin:15px 0px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap:20px
}
.cateCard{
    display:flex;
    flex-direction:column;
    align-items : center;
    border-radius:8px;
    background-color:#232323;
    padding: 20px 25px;
    max-width: 250px;
    height: 360px;
    transition: .5s;
}
.cateCard:hover{
    box-shadow: 0px 0px 10px #95d5b2;
    transition: .5s;
}
.catImg{
    height:140px;
    width:140px;
}
.catTitle{
    margin:10px 0px;
    font-size:16px;
    font-weight:550
}
.catText{
   font-size:14px;
   color: #7a7a7a
}
    /*for web*/
    @media only screen and (min-width: 768px) {
        .categories{
            margin:15px 0px;
            display: flex;
            flex-direction: row;
            align-items:center;
            justify-content: center;
            gap:40px
        }
        .title{
            font-size: 20px;
        }
        #wizard{
            font-size: 20px;

        }
        #wiz1{
            font-size:22px;
            color: #ff85a1;
        }
        #wiz2{
            font-size:22px;
            color: #90e0ef;
        }
        #wiz3{
            font-size:22px;
            color: #ecbcfd;
        }
        .cateCard{
            max-width: 300px;
            height: 360px;
            gap: 10px;
            transition: .5s;
        }
        .catImg{
            height:160px;
            width:160px;
        }
    }

</style>