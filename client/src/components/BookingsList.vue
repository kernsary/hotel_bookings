<template lang="">
  <div id="bookingsList">
    <h2>Bookings</h2>
    <table class="bookings" v-for="booking in bookings">
      <tr>
        <td>{{booking.name}}</td>
        <td>{{booking.email}}</td>
        <td>Checked in?</td>
        <td>
          <input @click="toggleCheckedIn(booking)" type="checkbox" id="checkedIn" v-model="booking.checkedIn">
          <button @click="handleDelete(booking._id)">Delete</button>
        </td>
      </tr>
    </table>
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
      display: flex;
      flex-direction: column;
      font-family: Helvetica, sans-serif;
      font-size: 0.5em;
    }

    td {
      text-align: left;
      padding-right: 2em;
    }


  </style>
