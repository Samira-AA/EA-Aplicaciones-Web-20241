<script>
import {MentalStateExam} from "../models/mental-state-exam.entity.js";
import {Examiner} from "../models/examiner.entity.js";
import {NursingService} from "../../services/nursing.service.js";

export default {
  name: "examiner-performance-overview-card",

  data(){
    return{
      exam:MentalStateExam,
      examiner:Examiner,
      examDataList:[],
      nursingApiService: new NursingService()
    }
  },

  created() {
    this.getExamData();
  },

  methods: {
    async getExamData() {
      try {
        // obtenemos los examenes mediante una petición get
        const examsResponse = await this.nursingApiService.getMentalStateExam();
        const exams = examsResponse.data;

        // obtenemos los examinadores mediante una petición get
        const examinersResponse = await this.nursingApiService.getExaminers();
        const examiners = examinersResponse.data;

        if (!Array.isArray(exams) || !Array.isArray(examiners)) {
          console.log('no es array');
          return;
        }

        // creamos un objeto para almacenar la cantidad de exámenes y la suma de las calificaciones totales por examinador
        const examCounts = {};
        const totalScores = {};

        // se itera sobre los examenes
        for (const exam of exams) {
          const examinerId = exam.examinerId;

          // se incrementa el contador de exámenes para el examinador actual
          examCounts[examinerId] = (examCounts[examinerId] || 0) + 1;

          // se calcula la calificación total del examen
          const totalScore = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;

          // al final se suma la calificación total al total acumulado para el examinador actual
          totalScores[examinerId] = (totalScores[examinerId] || 0) + totalScore;
        }

        // calculamos el promedio de la calificación total para cada examinador y almacenamos los resultados en examDataList
        for (const examiner of examiners) {
          const examinerId = examiner.id;
          const examCount = examCounts[examinerId] || 0;
          const totalScore = totalScores[examinerId] || 0;
          const averageTotalScore = examCount > 0 ? totalScore / examCount : 0;

          // hacemos push a examDataList para guardar todos los datos
          this.examDataList.push({
            examiner,
            examCount,
            averageTotalScore
          });
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  }
}
</script>

<template>

  <div  class="container justify-content-center   ">
    <pv-card v-for="(examData, index) in examDataList" :key="index" class="m-2" >
      <template #header aria-label="Examiner: {{ examData.examiner.firstName }}, {{ examData.examiner.lastName }}">{{$t('header-card')}} {{ examData.examiner.firstName }}, {{ examData.examiner.lastName }}</template>
      <template #title  aria-label="NPI: {{ examData.examiner.nationalProviderIdentifier }}">{{$t('title-card-2')}} {{ examData.examiner.nationalProviderIdentifier }}</template>
      <template #subtitle aria-label="Mental State Exam Performance">{{$t('subtitle-card-2')}}</template>
      <template #content>
        <p class="m-0" aria-label="Current Assigned Mental State Exam Count: {{ examData.examCount }}">
          {{$t('count')}} {{ examData.examCount }}
        </p>
        <p class="m-0" aria-label="Average Assigned Mental State Exam Total Score: {{ examData.averageTotalScore.toFixed(2) }}">
          {{$t('average')}} {{ examData.averageTotalScore.toFixed(2) }}
        </p>
      </template>
    </pv-card>
  </div>

</template>


<style scoped>
.container{
  display:grid;
  grid-template-columns: repeat(2, 1fr);

}
</style>