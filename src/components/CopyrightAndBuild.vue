<template>
    <div class="copyrightandbuild">
        <p class="build">
            Built in <span style="color:#80ed99;  font-size: 14px;">Vue js 3</span>

        </p>
        <p class="build">
            <span><v-icon icon="mdi-copyright"></v-icon> 2024 to  <a href class="link">rsangaranaarayanan@gmail.com</a> </span>
        </p>
    </div>
</template>

<script>
    export default {
        
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