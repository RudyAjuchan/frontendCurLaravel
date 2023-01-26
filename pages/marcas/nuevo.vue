<template>
  <div>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header text-center">
                <h3>Agregar Marca</h3>
              </div>
              <div class="card-body">
                <crudCreate :model="model" :apiUrl="apiUrl">
                  <div slot="body">
                    <div class="form-group">
                      <label for="nombre">Nombre: </label>
                      <input type="text" v-model="model.nombre" id="nombre" name="nombre" class="form-control"/>
                    </div>
                  </div>
                </crudCreate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
export default {
  name: "nuevo",
  head() {
    return {
      title: "Nueva Marca",
    };
  },
  data() {
    return {
      model: {
        nombre: "",
      },
      apiUrl:'marcas',
      page:'Agregar',
      modulo:'Marcas'
    };
  },
  methods: {

  },
  mounted() {
    this.$nextTick(async () => {
      try {
      } catch (e) {
        console.log(e);
      } finally {
        this.load=false;
      }
    });
  },
};
</script>
