<template>
  <div class="nav">
    <md-toolbar class="toolbar">
      <div class="menu">
        <div class="leftmenu">
          <md-button class="md-icon-button custom-md-menu" @click="showExplorepanel = true">
            <md-icon>menu</md-icon>
          </md-button>

          <h3 class="md-body-1 custom-menu">
            <a @click="showExplorepanel = true">Explore</a>
          </h3>

          <h3 class="md-body-1 custom-menu">
            <router-link to="/#">Plant a project</router-link>
          </h3>
        </div>

        <h3 class="md-title logo">
          <router-link to="/">soltree</router-link>
        </h3>

        <div class="rightmenu">
          <router-link to="/login">
            <md-button class="md-icon-button">
              <md-icon>account_circle</md-icon>
            </md-button>
          </router-link>
        </div>
      </div>
    </md-toolbar>

    <md-drawer class="custom-menu-drawer" :md-active.sync="showExplorepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title" style="flex: 1; text-align: left;">Explore</span>
        <md-button class="md-icon-button" @click="showExplorepanel = false">
          <md-icon>close</md-icon>
        </md-button>
      </md-toolbar>

      <md-divider class="custom-menu-divider"></md-divider>

      <md-subheader>Search</md-subheader>
      <form novalidate class="md-layout">
        <input class="custom-input-text" placeholder="Search for projects" type="text" value="">
        <md-button type="submit" class="md-primary custom-menu">Search</md-button>
        <md-button type="submit" class="md-icon-button custom-md-menu">
          <md-icon>search</md-icon>
        </md-button>
      </form>
      <br />
      <md-divider></md-divider>

      <md-subheader>Section</md-subheader>

      <md-list class="custom-menu-list">
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Arts</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Comics & Illustration</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Design & Tech</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Film</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Food & Craft</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Games</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Music</span>
        </md-list-item>
        <md-list-item>
          <span class="md-list-item-text custom-md-list-item">Publishing</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    showExplorepanel: false,
  }),
};
</script>
