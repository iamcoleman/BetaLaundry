<template>
<div>
  <v-layout row wrap>

    <!-- Left Washer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Left Washer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text></v-card-text>
      </v-card>
    </v-flex>

    <!-- Right Washer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Right Washer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text></v-card-text>
      </v-card>
    </v-flex>

    <!-- Left Dryer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Left Dryer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text></v-card-text>
      </v-card>
    </v-flex>

    <!-- Right Dryer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Right Dryer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <p>Status: {{ rightDryer.open }}</p>
          <p>gotDatabase: {{ gotDatabase }}</p>
        </v-card-text>
      </v-card>
    </v-flex>

  </v-layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      leftWasher: {
        open: true,
        timeRemaining: 0.0
      },
      rightWasher: {
        open: true,
        timeRemaining: 0.0
      },
      leftDryer: {
        open: true,
        timeRemaining: 0.0
      },
      rightDryer: {
        open: true,
        timeRemaining: 0.0
      },

      gotDatabase: null
    };
  },

  created() {
    this.gotDatabase = getFullDatabase();
  }
};

function getFullDatabase() {
  return firebase.database().ref('/rightWasher').once('value').then(function(snapshot) {
    var db = snapshot.val() || 'Anonymous';
    console.log(db);
    return db;
  });
}
</script>

<style scoped>
</style>
