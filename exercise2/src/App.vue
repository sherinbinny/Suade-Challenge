<template>

  <h2>Exercise 2</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      The code behind this page should display a paginated list of
      people sorted by name. It contains common coding mistakes.
    </p>
    <p>
      Please update the files <span class="code">App.vue</span> and
      <span class="code">components/List.vue</span> in order to get
      rid of the errors (console and eslint), and make sure the
      solution works properly.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <!-- Added @page-changed="handlePageChange" to listen for the 'page-changed' event from the child component -->
    <List :data="people" :options="options" @page-changed="handlePageChange"></List>
  </div>

</template>

<script>

  import List from './components/List';

  export default {
    name: 'App',
    components: {List},
    data: ()=>{
      return {
        people: [],
        options: {pagination: {limit: 10, offset: 0}},
      };
    },
    created() {
      fetch('https://suade.org/filehosting/challenges/people.json')
        // Updated fetch logic to properly handle the response and errors
        .then(response => response.json())
        .then(data => {
          this.people = data;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    // Handle the "page-changed" event and update offset based on the new page number
    methods: {
      handlePageChange(newPage) {
        this.options.pagination.offset = newPage * this.options.pagination.limit;
      },
    },
  };

</script>

<style lang="scss">

.statement, .solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;
  min-height: 40px;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }
}

</style>
