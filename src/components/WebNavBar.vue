<template>
    <v-navigation-drawer 
    expand-on-hover
    :disable-resize-watcher="false"
    rail-width="60"
    width="340"
    rail
  >
        <div class="ImagelistItem">  
          <v-avatar
          class="image"
          size="45"
          >
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
      </v-avatar>
      <div class="nameCategory">
          <p class="name">Sangara naarayanan R</p>
          <p class="email"> {{ email }}
            <span>
              <v-snackbar
              :height="snackbarHeight"
              :min-width="snackbarminWidth"
              location="bottom right"
              style="margin:30px"
        
          :timeout="2000"
          color="#303234"
          rounded="pill"
        >
          <template v-slot:activator="{ props }">
            <i @click="copyEmail" v-bind="props">
              
              <v-icon icon="mdi-content-copy"></v-icon></i>
            </template>
            
          <p class="notification">
            <v-icon   style="color:green" icon="mdi-check-all"></v-icon><span style="margin-left: 10px; font-weight:500">Copied email successfully</span></p>
        </v-snackbar>
        </span>
              </p>
          
      </div>
  </div>          


    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
    export default {
        data(){
          return {
            snackbarminWidth: '250px',
      snackbarHeight: '50px', 
      hideOnMobile: false,
      email: "rsangaranaarayanan@gmail.com",
       drawer: true,
          }
        }
    }
</script>

<style scoped>
.ImagelistItem{
  display: flex;
  flex-direction: row;
  margin: 25px 0px ;
}
.image {
  margin-left: 10px;
  }

.nameCategory {
  margin-left: 8px;
}
.name{
  font-size: 15px;
  font-weight: 600;
}
.email{
  font-size: 13px;
  margin-top: 3px;
  color: grey;
}
.notification{
display: flex;
justify-items: center;
justify-content: center;
}
</style>