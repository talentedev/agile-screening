<template>
  <div>
    <table class="table table-striped table-sm">
      <tbody>
        <tr v-for="(item, index) in values" :key="index">
          <td>{{ item.info }}</td>
          <td style="width:200px;">
            <button
              type="button"
              class="btn btn-primary"
              @click="showEditModal(item)">Edit</button>
            <button
              type="button"
              class="btn btn-danger ml-2"
              @click="deleteValue(item.id)">Delete</button>
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
        @click="createValue()">Add new value</button>
    </form>

    <div>
      <b-modal id="update-modal" hide-footer>
        <template #modal-title>
          Edit value
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
              class="btn btn-success mb-2 float-right"
              @click="updateValue()">Submit</button>
          </form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { getAllValues, createValue, deleteValue, updateValue } from '../services/ValueService'

export default {
  name: 'Values',
  data() {
    return {
      value: '',
      values: [],
      error: false,
      selectedValue: {},
      errorUpdate: false
    };
  },
  mounted () {
    this.getAllValues();
  },
  methods: {
    getAllValues() {
      getAllValues().then(response => {
        console.log(response);
        this.values = response;
      })
    },
    createValue() {
      if (!this.value) {
        this.error = true
      } else {
        this.error = false
        createValue(this.value).then(response => {
          console.log(response);
          this.value = '';
          this.getAllValues();
        });
      }
    },
    deleteValue(id) {
      deleteValue(id).then(response => {
        console.log(response);
        this.getAllValues();
      });
    },
    showEditModal(value) {
      this.$bvModal.show('update-modal')
      this.selectedValue = {...value};
    },
    updateValue() {
      updateValue(this.selectedValue).then(response => {
        console.log(response);
        this.getAllValues();
        this.$bvModal.hide('update-modal');
      });
    }
  }
}
</script>