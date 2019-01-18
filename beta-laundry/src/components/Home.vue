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

        <v-card-text>
          <v-layout row wrap>
            <v-flex xs6 pa-2>
              <p>Status: {{ leftWasher.open }}</p>
            </v-flex>
            <v-flex xs6 pa-2>
              <p>Estimated Time Remaining</p>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

    <!-- Right Washer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Right Washer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-layout row wrap>
            <v-flex xs6 pa-2>
              <p>Status: {{ rightWasher.open }}</p>
            </v-flex>
            <v-flex xs6 pa-2>
              <p>Estimated Time Remaining</p>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

    <!-- Left Dryer -->
    <v-flex xs6 pa-2>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Left Dryer</h3>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-layout row wrap>
            <v-flex xs6 pa-2>
              <p>Status: {{ leftDryer.open }}</p>
            </v-flex>
            <v-flex xs6 pa-2>
              <p>Estimated Time Remaining</p>
            </v-flex>
          </v-layout>
        </v-card-text>
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
          <v-layout row wrap>
            <v-flex xs6 pa-2>
              <p>Status: {{ rightDryer.open }}</p>
            </v-flex>
            <v-flex xs6 pa-2>
              <p>Estimated Time Remaining</p>
            </v-flex>
          </v-layout>
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
    this.databaseConnection();
  },

  methods: {
    databaseConnection() {
      var vueGuy = this;
      var refLeftWasher = firebase.database().ref("/leftWasher");
      var refRightWasher = firebase.database().ref("/rightWasher");
      var refLeftDryer = firebase.database().ref("/leftDryer");
      var refRightDryer = firebase.database().ref("/rightDryer");

      refLeftWasher.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.leftWasher.open = childData;
        });
      });

      refRightWasher.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.rightWasher.open = childData;
        });
      });

      refLeftDryer.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.leftDryer.open = childData;
        });
      });

      refRightDryer.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.rightDryer.open = childData;
        });
      });
    }
  }
};
</script>

<style scoped>
</style>
