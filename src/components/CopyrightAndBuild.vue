<template>
    <div class="copyrightandbuild">
        <p class="build">
            {{ content.buildPrefix }} <span style="color:#80ed99;  font-size: 14px;">{{ content.buildTech }}</span>

        </p>
        <p class="build">
            <span><v-icon icon="mdi-copyright"></v-icon> {{ content.copyrightStartYear }} to  <a href class="link">{{ content.email }}</a> </span>
        </p>
    </div>
</template>

<script>
import content from '../data/copyrightAndBuild.json';
    export default {
        data() {
            return {
                content
            };
        }
    }
</script>

<style scoped>
.copyrightandbuild{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 20px 0px;
    padding: 20px 40px;
    gap: 20px
}
.build{
    font-size: 12px;
    text-align:center;
}
.cpy{
    font-size: 12px;
    text-align:center;
}

.link{
    font-size: 14px;
    text-decoration: none;
    color: lightblue
}
</style>