<template>
  <AdminTemplate>
    <div slot="body">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-12">
          <div class="card">
            <div class="card-header text-center">
              <h3>Agregar Marca</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="nombre">Nombre: </label>
                <input type="text" v-model="model.nombre" id="nombre" name="nombre" class="form-control"/>
              </div>
              <div class="text-center">
                <button class="btn btn-primary" @click="save()">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>

<script>
export default {
  name: "nuevo",
  head() {
    return {
      title: "nuevo",
    };
  },
  data() {
    return {
      model: {
        nombre: "",
      },
    };
  },
  methods: {
    async save() {
      const res = await this.$api.$post("marcas", this.model);
      console.log(res);
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
      } catch (e) {
        console.log(e);
      } finally {
      }
    });
  },
};
</script>
