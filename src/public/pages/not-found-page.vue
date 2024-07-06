<script>
export default {
  name: "not-found-page",
}
</script>

<template>

  <div class="flex flex-column align-items-center" aria-label="Error 404 Page">
    <h1 aria-label="Error 404">ERROR 404</h1>
    <p aria-label="{{$t('not-found')}}">{{$t('not-found')}}</p>

    <router-link to="/home" aria-label="Home Link">
      <pv-button severity="secondary" class="text-black-alpha-90 border-solid border-black-alpha-90 border-2" aria-label="{{$t('button-1')}}">{{$t('button-1')}}</pv-button>
    </router-link>
  </div>


</template>

<style scoped>

</style>