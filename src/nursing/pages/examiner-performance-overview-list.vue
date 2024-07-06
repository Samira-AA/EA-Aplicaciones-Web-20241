<script>
import ExaminerPerformanceOverviewCard from "../components/examiner-performance-overview-card.component.vue";

export default {
  name: "examiner-performance-overview-list",
  components: {ExaminerPerformanceOverviewCard}
}
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center">
    <p class="font-bold text-xl" aria-label="{{$t('title-examiner')}}"> {{$t('title-examiner')}}</p>
    <examiner-performance-overview-card></examiner-performance-overview-card>
  </div>

</template>

<style scoped>

</style>