<template lang="html">
  <form id="bookings-form" @submit="handleSubmit">
    <h2>Add a booking</h2>
    <div class="formWrap">
      <label for="name">Name </label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="formWrap">
      <label for="email">Email address </label>
      <input type="text" id="email" v-model="email" required>
    </div>
    <div class="formWrap">
      <label for="checkedIn">Checked in? </label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>
    <input type="submit" id="save" value="Save">
  </form>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService';

export default {
  name: 'booking-form',
  data(){
    return {
      name: "",
      email: "",
      checkedIn: false
    }
  },

  methods: {
    handleSubmit(event){
      event.preventDefault();
      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
      console.log(payload);

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });

      this.checkedIn = false;
      this.name = "";
      this.email = "";

    }
  }
}
</script>

<style lang="css" scoped>

#bookings-form {
  font-family: Helvetica, sans-serif;
  font-size: 0.5em;
}

.formWrap {
  margin-bottom: 1em;
}
</style>
