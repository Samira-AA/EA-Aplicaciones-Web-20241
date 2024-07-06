<script>
import {NursingService} from "../../services/nursing.service.js";

export default {
  name: "mental-state-exam-analytics-card",

  data(){
    return{
      mentalStateExams: [],
      examCount: 0,
      highestScore: null,
      lowestScore: null,
      averageScore: null,
      nursingApiService: new NursingService()
    }
  },
  created(){
    this.getMentalStateExams();
  },

  methods:{
    async getMentalStateExams(){
      try {
        const response = await this.nursingApiService.getMentalStateExam();
        this.mentalStateExams = response.data;

        if (this.mentalStateExams.length > 0) {
          // inicializamos las variables para almacenar la calificación total más alta, más baja y el promedio
          let highest = Number.MIN_SAFE_INTEGER;
          let lowest = Number.MAX_SAFE_INTEGER;
          //contador para el total score
          let totalScoreSum = 0;

          this.mentalStateExams.forEach(exam => {
            // incrementamos el contador de examenes
            this.examCount++;

            // calculamos el total score sumando todos los puntajes
            const totalScore = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;


            // comparamos las notas y actualizamos
            if (totalScore > highest) {
              highest = totalScore;
            }
            if (totalScore < lowest) {
              lowest = totalScore;
            }

            // sumamos para el promedio
            totalScoreSum += totalScore;
          });

          this.highestScore = highest;
          this.lowestScore = lowest;
          //calculamos el promedio
          this.averageScore = (totalScoreSum / this.examCount).toFixed(2);
        }
      } catch(error) {
        console.log("error", error);
      }
    }
  }
}
</script>

<template>
  <pv-card class="flex align-items-center" :aria-label="`${$t('title-card-1')}`">
    <template #title>{{$t('title-card-1')}}</template>
    <template #subtitle>{{$t('subtitle-card-1')}}</template>
    <template #content>
      <p class="m-0" :aria-label="`${$t('exam-count')} ${examCount}`">
        {{$t('exam-count')}} {{ examCount }}
      </p>
      <p class="m-0" :aria-label="`${$t('highest-score')} ${highestScore}`">
        {{$t('highest-score')}} {{ highestScore }}
      </p>
      <p class="m-0" :aria-label="`${$t('lowest-score')} ${lowestScore}`">
        {{$t('lowest-score')}} {{ lowestScore }}
      </p>
      <p class="m-0" :aria-label="`${$t('average-score')} ${averageScore}`">
        {{$t('average-score')}} {{ averageScore }}
      </p>
    </template>
  </pv-card>
</template>


<style scoped>

</style>