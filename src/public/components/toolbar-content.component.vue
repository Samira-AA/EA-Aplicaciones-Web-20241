<script >
export default {
  name: 'toolbar-content',
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>

  <pv-toolbar style=" padding: 1rem 1rem 1rem 1.5rem; background-color:#2c3e50" aria-label="Toolbar">
    <template #start>
      <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" width="120vw" alt="Logo" aria-label="Logo">
      <p class="ml-4 text-white-alpha-90" aria-label="Enterprise: {{$t('enterprise')}}">{{$t('enterprise')}}</p>
    </template>

    <template #end>
      <div class=" mr-3">
        <router-link to="/home" aria-label="Home Link">
          <pv-button severity="secondary" class="text-black-alpha-90" aria-label="Button: {{$t('button-1')}}">{{$t('button-1')}}</pv-button>
        </router-link>
      </div>

      <div class=" mr-3">
        <router-link to="/nursing/examiner-performance-overview" aria-label="Examiner Performance Overview Link">
          <pv-button severity="secondary" class="text-black-alpha-90" aria-label="Button: {{$t('button-2')}}">{{$t('button-2')}}</pv-button>
        </router-link>
      </div>

      <div>
        <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase" aria-label="Language Selection"></pv-select-button>
      </div>
    </template>
  </pv-toolbar>


</template>

<style scoped>

</style>