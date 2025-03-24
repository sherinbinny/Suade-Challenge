<template>

  <ul>
    <li v-for="item in paginatedData" :key="item._id">
      {{ item.name }}
    </li>
  </ul>
  <div class="pagination">
    <ul>
      <!-- Fixed error by placing the :class binding before @click. -->
      <li :class="{disabled: currentPage === 0}" @click="changePage(currentPage-1)">&lt;</li>
      <li v-for="p in pages" :key="p" :class="{active: p === currentPage}" @click="changePage(p)">{{ p + 1 }}</li>
      <li :class="{disabled: currentPage === pages.length - 1}" @click="changePage(currentPage+1)">&gt;</li>
    </ul>
  </div>

</template>

<script>

  export default {
    name: 'List',
    props: {
      data: {type: Array, default: ()=>[]},
      options: {type: Object, default: ()=>({limit: 25, offset: 0})},
    },
    // Declare the 'page-changed' event
    emits: ['page-changed'], 
    computed: {
      // sort data by name
      sortedData() {
        // Fixed by cloning 'this.data' with [...this.data] to avoid mutating the original array
        return [...this.data].sort((a, b)=>{
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      },
      // paginate data
      paginatedData() {
        return this.sortedData.slice(this.options.pagination.offset, this.options.pagination.offset + this.options.pagination.limit);
      },
      // list of pages to display
      pages() {
        return new Array(Math.ceil(this.data.length / this.options.pagination.limit))
          .fill()
          // Since we only need the index 'i', 'v' is removed and replaced with '_' to indicate it is ignored.
          .map((_, i)=>i);
      },
      // currently displayed page
      currentPage() {
        return (this.options.pagination.offset / this.options.pagination.limit);
      },
    },
    methods: {
      changePage(page) {
        // Removed directly mutating the options prop, which is not recommended in Vue
        if (page >= 0 && page < this.pages.length) {
          // Added 'page-changed' event to notify the parent (App.vue) about the page change
          this.$emit('page-changed', page);
        }
      },
    },
  };

</script>

<style scoped lang="scss">

  .pagination ul {
    list-style: none;
    user-select: none;

    li {
      display: inline-block;
      padding: 0 4px;
      cursor: pointer;
      color: #888;

      &:hover {
        color: #000;
        font-weight: bold;
      }
      &.active{
        color: #000;
        font-weight: bold;
        pointer-events:none;
      }
      &.disabled {
        color: #ddd;
        pointer-events:none;
      }
    }
  }

</style>
