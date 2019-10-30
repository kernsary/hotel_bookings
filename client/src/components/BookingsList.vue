<template lang="">
  <div id="bookingsList">
    <div class="bookings" v-for="booking in bookings">
      <p>{{booking.name}}, {{booking.email}}, Checked in? {{booking.checkedIn}}</p>
      <input @click="toggleCheckedIn(booking)" type="checkbox" id="checkedIn" v-model="booking.checkedIn">
      <button @click="handleDelete(booking._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService'

export default {
  name: 'bookings-list',

  props: ['bookings'],

  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },

    toggleCheckedIn(booking){
      if(booking.checkedIn === true) {
        booking.checkedIn = false;}
        else {
          booking.checkedIn = true
        };
        BookingService.updateBooking(booking)
      }
    }
  }
  </script>

  <style lang="css" scoped>

  #bookingsList {
    font-family: Helvetica, sans-serif;
    font-size: 0.5em;
  }

  </style>
