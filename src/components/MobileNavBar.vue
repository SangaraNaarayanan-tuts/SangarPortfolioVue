<template>
    <div>
        <v-app-bar app
        height="65"
        >
            <p class="name">Sangara naarayanan R</p>
            <template   v-slot:append> 
                <v-avatar
                @click="drawer = !drawer"
                class="image"
                size="45"
                >
                <v-icon icon="mdi-card-account-details-outline"></v-icon>
                <!-- <v-img src="../assets/sangarImage.jpeg"></v-img>   -->
            </v-avatar>
        </template>
        </v-app-bar>
            <v-navigation-drawer
            v-model="drawer"
            rail-width="60"
            width="200"
         
          >
                <div class="ImagelistItem">  
              <div class="nameCategory">
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
      
    </div>
</template>

<script>
    export default {
        data(){
            return{
                snackbarminWidth: '250px',
      snackbarHeight: '50px', 
      email: "rsangaranaarayanan@gmail.com",
       drawer: false,
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

.nameCategory {
    margin-left: 8px;
}
.name{
    font-size: 15px;
    margin-left: 20px;
    font-weight: 600;
    color: #95d5b2
}
.email{
    font-size: 10px;
    margin-top: 3px;
    color: grey;
}
.notification{
  display: flex;
  justify-items: center;
  justify-content: center;
}
</style>