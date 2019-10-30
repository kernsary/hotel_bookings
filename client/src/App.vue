<template>
  <div id="app">
    <booking-form/>
    <bookings-list :bookings="bookings"></bookings-list>
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';
import { eventBus } from './main';
import BookingService from './services/BookingService'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking-form': BookingForm,
    'bookings-list': BookingsList
  },

  mounted() {
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
  },

  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

</style>
