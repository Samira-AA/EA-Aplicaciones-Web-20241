<script>
import MentalStateExamAnalyticsCard from "../components/mental-state-exam-analytics-card.component.vue";

export default {
  name: "home-page",
  components: {MentalStateExamAnalyticsCard}
}
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center ">
    <h1 aria-label="Home title">{{$t('title-home')}}</h1>
    <p class="-m-3 text-xl" aria-label="{{$t('subtitle-home')}}">{{$t('subtitle-home')}}</p>
  </div>
    <div class="flex justify-content-center m-5">
    <mental-state-exam-analytics-card/>
   </div>
</template>

<style scoped>

</style>