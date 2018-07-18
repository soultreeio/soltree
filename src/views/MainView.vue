<template>
  <div class="main">

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-large-size-25 md-medium-size-25 md-small-size-50
      md-xsmall-size-100" v-for="project in projects" :key="project.id">
        <ProjectItemCard v-bind:project="project"></ProjectItemCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectItemCard from '@/components/ProjectItemCard.vue';

export default {
  name: 'mainview',
  components: {
    ProjectItemCard,
  },
  computed: {
    ...mapGetters([
      'projects',
      'getProjectsByType',
    ]),
  },
};
</script>
