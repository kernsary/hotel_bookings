<template>
  <div id="app">
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
