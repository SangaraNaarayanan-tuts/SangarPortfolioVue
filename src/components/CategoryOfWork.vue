<template>
    <div class="CatOfWork">
        <div class="title"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        >
                <span> {{ content.title }} </span> 
                    <v-icon style="color: #95d5b2" :icon="content.titleIcon"></v-icon>
         </div>
         <div id="wizard"
         v-motion
         :initial="{ opacity: 0, y: 50 }"
         :enter="{ opacity: 1, y: 0 }"
         :delay="300"
         >  
            <p v-html="content.wizardHtml"></p>
         </div>
        <div class="categories">
            <div
            v-for="category in content.categories"
            :key="category.title"
            class="cateCard"
            v-motion
            :initial="{ opacity: 0, X: -50 }"
            :enter="{ opacity: 1, X: 0 }"
            :delay="400"
            >
                <div class="catImg"
            >
                <v-img :src="imageSources[category.imageKey]"></v-img>
                </div>
                <p class="catTitle">
                    {{ category.title }}
                </p>
                <p class="catText">
                    {{ category.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import content from '../data/categoryOfWork.json';
    export default {
        data() {
            return {
                content,
                imageSources: {
                    webDevelop: require('../assets/webDevelop.png'),
                    mobileAppDevelop: require('../assets/mobileAppDevelop.png'),
                    archDevelop: require('../assets/archDevelop.png')
                }
            };
        }
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