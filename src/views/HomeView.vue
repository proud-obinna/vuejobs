<script setup>
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
  <HomeCards />
  <JobListings :limit="3" :show-button="true" />
</template>