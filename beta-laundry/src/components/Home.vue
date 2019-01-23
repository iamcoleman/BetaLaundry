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
              <p>Status: {{ leftWasherOpen }}</p>
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
              <p>Status: {{ rightWasherOpen }}</p>
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
              <p>Status: {{ leftDryerOpen }}</p>
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
              <p>Status: {{ rightDryerOpen }}</p>
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
      leftWasherOpen: true,
      
      rightWasherOpen: true,
      
      leftDryerOpen: true,
      
      rightDryerOpen: true,
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
          vueGuy.leftWasherOpen = childData;
        });
      });

      refRightWasher.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.rightWasherOpen = childData;
        });
      });

      refLeftDryer.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.leftDryerOpen = childData;
        });
      });

      refRightDryer.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          // console.log(childData);
          vueGuy.rightDryerOpen = childData;
        });
      });
    }
  }
};
</script>

<style scoped>
</style>
