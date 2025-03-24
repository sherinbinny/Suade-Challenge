<template>
  <!-- Added v-bind to pass down inherited attributes and @click to trigger the handleClick method when the element is clicked -->
  <div v-bind="$attrs" class="details" @click="handleClick">
    <h4>{{ person.name }}</h4>
    <div><b>Age:</b> {{ person.age }}</div>
    <div><b>Eye Color:</b> {{ person.eyeColor }}</div>
    <div><b>Gender:</b> {{ person.gender }}</div>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        // Set default value for the 'person' prop to an empty object if no value is provided
        default: () => ({}),
      },
      // Define 'personClick' prop as a required function, to handle click events on the person card
      personClick: {
        type: Function,
        required: true,
      },
    },
    // Added method to handle the click event on the person card
    methods: {
      handleClick() {
        this.personClick(this.person);
      },
    },
    // Disable automatic inheritance of attributes to the root element
    inheritAttrs: false,
  };
</script>

<style scoped>
  /* Added styles inside to ensure they only apply to this component */
  .details
  {
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .details h4
  {
    font-size: 1.2em;
    margin: 0;
  }

  .details div
  {
    margin-bottom: 8px;
    font-size: 1em;
    line-height: 1.4;
  }
</style>
