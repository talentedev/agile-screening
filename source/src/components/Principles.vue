<template>
  <div>
    <table class="table table-striped table-sm">
      <tbody>
        <tr v-for="(item, index) in principles" :key="index">
          <td>{{ item.info }}</td>
          <td style="width:200px;">
            <button
              type="button"
              class="btn btn-primary"
              @click="showEditModal(item)">Edit</button>
            <button
              type="button"
              class="btn btn-danger ml-2"
              @click="deletePrinciple(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="error" class="alert alert-danger" role="alert">
      Please fill out.
    </div>
    <form>
      <textarea
        rows="3"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type here..."
        v-model="value"></textarea>
      <button
        type="button"
        class="btn btn-success mb-2"
        @click="createPrinciple()">Add new principle</button>
    </form>

    <div>
      <b-modal id="update-principle-modal" hide-footer>
        <template #modal-title>
          Edit principle
        </template>
        <div class="d-block text-center">
          <div v-if="errorUpdate" class="alert alert-danger" role="alert">
            Please fill out.
          </div>
          <form>
            <textarea
              rows="5"
              class="form-control mb-2 mr-sm-2"
              placeholder="Type here..."
              v-model="selectedValue.info"></textarea>
            <button
              type="button"
              class="btn btn-success mb-2"
              @click="updatePrinciple()">Submit</button>
          </form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { getAllPrinciples, createPrinciple, deletePrinciple, updatePrinciple } from '../services/PrincipleService'

export default {
  name: 'Principles',
  data() {
    return {
      value: '',
      principles: [],
      error: false,
      selectedValue: {},
      errorUpdate: false
    };
  },
  mounted () {
    this.getAllPrinciples();
  },
  methods: {
    getAllPrinciples() {
      getAllPrinciples().then(response => {
        console.log(response);
        this.principles = response;
      })
    },
    createPrinciple() {
      if (!this.value) {
        this.error = true
      } else {
        this.error = false
        createPrinciple(this.value).then(response => {
          console.log(response);
          this.principles = '';
          this.getAllPrinciples();
        });
      }
    },
    deletePrinciple(id) {
      deletePrinciple(id).then(response => {
        console.log(response);
        this.getAllPrinciples();
      });
    },
    showEditModal(value) {
      this.$bvModal.show('update-principle-modal')
      this.selectedValue = {...value};
    },
    updatePrinciple() {
      updatePrinciple(this.selectedValue).then(response => {
        console.log(response);
        this.getAllPrinciples();
        this.$bvModal.hide('update-principle-modal');
      });
    }
  }
}
</script>