<template>
  <footer>
    <div style="background: #191C21; box-shadow: 0px -1px 0px #121416; color: #D8DADE;">
      <v-container grid-list-md align-start id="footer">
        <v-layout row wrap justify-space-between>
          <v-flex xs6 sm6 md3 lg3 class="mb-3">
            <h3>Engage</h3>
            <br>
            <ul style="list-style:none; padding:0; margin:0;">
              <li class="mb-2">
                <router-link to="/Contact" class="link">
                  Contact
                </router-link>
              </li>
              <li class="mb-2"><a href="http://asiato.asia/" target="_blank" class="link">About</a></li>
              <!-- <li class="mb-2">Book Now</li> -->
              <li class="mb-2">
                <router-link to="/listing/in-the-press" class="link">
                  In the press
                </router-link>
              </li>
            </ul>
          </v-flex>
          <v-flex xs6 sm6 md3 lg3 class="mb-3">
            <h3>Invest</h3>
            <br>
            <ul style="list-style:none; padding:0; margin:0;">
              <li class="mb-2">
                <router-link to="/listing/nature-city-investment-cambodia-property" class="link">
                  Lease a Property
                </router-link>
              </li>
              <!-- <li class="mb-2">Collaborate</li> -->
              <li class="mb-2">
                <router-link to="/listing/partner" class="link">
                  Partner
                </router-link>
              </li>
            </ul>
          </v-flex>
          <v-flex xs12 sm6 md3 lg3 class="mb-3">
            <h3>Learn</h3>
            <br>
            <ul style="list-style:none; padding:0; margin:0;">
              <!-- <li class="mb-2">Community Outreach</li> -->
              <li class="mb-2">
                <router-link to="/listing/our-scholarship-program" class="link">
                  Our Scholarship Program
                </router-link>
              </li>
              <li class="mb-2">
                <router-link to="/listing/Proudly-Powered-by-KIT-Students" class="link">
                  Proudly Powered by KIT
                </router-link>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.link{
  text-decoration:none; 
  color:#D8DADE;
}
</style>
