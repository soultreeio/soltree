<template>
  <md-card class="custom-md-card">
    <md-card-area md-inset>
      <md-card-media md-ratio="4:3">
        <img v-bind:src="project.img" alt="Coffee House">
      </md-card-media>

      <md-card-header>
        <md-card-header-text>
          <h3 class="md-title">{{ project.title }}</h3>
          <div class="md-subhead">
            <span>by {{ project.creator }}</span>
          </div>
        </md-card-header-text>
      </md-card-header>
    </md-card-area>

    <md-card-content>
      <div style="display: flex;">
        <span class="md-subhead" style="flex: 1;">
          {{ project.funded }} {{ project.currency | capitalize }} funded
        </span>
        <span class="md-subhead">{{ (project.funded / project.goal) * 100 }} %</span>
      </div>

      <md-progress-bar class="md-accent" md-mode="determinate"
        :md-value="(project.funded / project.goal) * 100">
      </md-progress-bar>
      <div>
        <md-icon>access_time</md-icon>
        <span style="padding-left: 5px;">{{ dueDate }} days left</span>
      </div>
    </md-card-content>
  </md-card>
</template>


<script>
export default {
  name: 'ProjectItemCard',
  props: {
    project: Object,
  },
  filters: {
    capitalize: value => (!value ? '' : value.toUpperCase()),
  },
  computed: {
    dueDate: p => (Math.round(Math.abs((new Date(p.project.due).getTime()
      - new Date().getTime()) / (24 * 60 * 60 * 1000)))),
  },
};
</script>
