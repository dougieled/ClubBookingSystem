<template>
<div class="border border-success mb-2">
     <h2 class="display-7"><slot name="header"></slot></h2>
     <div  v-if="dateList.length >0">
     <h5>Players Missing:</h5>
            <table class="table table-striped">
            <thead>
              <tr class="table-bordered">
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="holiday in dateList"
                :key="holiday.id">
                <td>{{ holiday.title }}</td>
              </tr>
            </tbody>
          </table>
     </div>
          <b v-else><h4>No one is missing</h4></b>
</div>
</template>
<script>
 export default {
   name: 'matchComponent',
   props: [ 'dateList' ],
 }
</script>