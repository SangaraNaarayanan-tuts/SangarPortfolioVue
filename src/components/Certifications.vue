<template>
  <div class="certificationsSection">
    <div
      class="title"
      v-motion
      :initial="{ opacity: 0, y: -100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
    >
      <span>{{ content.title }}</span>
      <v-icon style="color: #95d5b2" :icon="content.titleIcon"></v-icon>
    </div>

    <div class="certifications">
      <div
        v-for="item in content.certifications"
        :key="`${item.issuer}-${item.name}`"
        class="certCard"
        v-motion
        :initial="{ opacity: 0, X: -50 }"
        :visibleOnce="{ opacity: 1, X: 0 }"
        :delay="300"
      >
        <div class="certDate">
          <div>{{ item.issuedOn }}</div>
        </div>

        <section class="certDetails">
          <div class="certLogoWrap">
            <v-img class="certLogo" :src="logoImages[item.logoKey]"></v-img>
          </div>
          <div class="certIssuer">{{ item.issuer }}</div>
          <div class="certName">{{ item.name }}</div>
          <div class="certDescription">{{ item.description }}</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../data/certifications.json';

export default {
  name: 'CertificationsSection',
  data() {
    return {
      content,
      logoImages: {
        googleCloud: require('../assets/skills/gcp.svg')
      }
    };
  }
};
</script>

<style scoped>
.certificationsSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  padding: 20px 40px;
  gap: 20px;
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0px;
  letter-spacing: 2px;
}

.certifications {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 20px;
}

.certCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #232323;
  padding: 20px 20px;
  min-height: 220px;
  width: 260px;
  border-radius: 8px;
  transition: 0.5s;
}

.certCard:hover {
  box-shadow: 0px 0px 10px #95d5b2;
  transition: 0.5s;
}

.certDate {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 500;
}

.certDetails {
  text-align: center;
}

.certLogoWrap {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.certLogo {
  width: 56px;
  height: 56px;
}

.certIssuer {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.certName {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #95d5b2;
}

.certDescription {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7a7a7a;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
  }

  .certCard {
    min-height: 240px;
    width: 300px;
  }
}
</style>
