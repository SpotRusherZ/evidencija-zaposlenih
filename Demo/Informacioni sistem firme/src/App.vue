

<template>
    <router-view></router-view>

<router-view></router-view>
</template>

<style scoped>

</style>


<script>
import KreiranjeZahteva from './components/Kreiranje-Zahteva.vue';
import ZahtevZaposlenog from './components/Zahtev-zaposlenog.vue';
import Zahtevi from './components/Zahtevi.vue';
export default {
  components: {
    KreiranjeZahteva,
    Zahtevi,
    ZahtevZaposlenog
  },
};
</script>