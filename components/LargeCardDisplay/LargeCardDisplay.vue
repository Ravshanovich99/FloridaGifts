<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container largeCardDisplay">
    <h4 class="header">{{ cardsInfo?.title }}</h4>
    <p class="snippet">{{ cardsInfo?.subtitle }}</p>
    <LargeCard :cards="cardsInfo?.cards" :cardsWithSlider="cardsWithSlider" />
    <div v-show="cardsWithSlider" class="see-all-link">
      <NuxtLink
        :to="`/${cardsInfo?.stateName}`"
        :class="$store.state.darkMode ? 'see-all dark' : 'see-all'"
        >Посмотреть все {{ cardsInfo?.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import './LargeCardDisplay.scss'
export default {
  props: {
    cardsInfo: {
      type: Object,
      required: true,
    },
    cardsWithSlider: {
      type: Boolean,
      /* 
        cardsWithSlider should be true just for heroSection,
        if cards are in slider there should not be link "See all"
      */
    },
  },
}
</script>
