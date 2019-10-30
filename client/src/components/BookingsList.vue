<template lang="">
  <div id="bookingsList">
  <div class="bookings" v-for="booking in bookings">
    <p>{{booking.name}}, {{booking.email}}, Checked in? {{booking.checkedIn}}</p>
  </div>
</div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService'

export default {
  name: 'bookings-list',
  props: ['bookings']
}
</script>

<style lang="css" scoped>
</style>
