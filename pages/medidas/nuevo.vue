<template>
  <div>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header text-center">
                <h3>Agregar Medida</h3>
              </div>
              <div class="card-body">
                <crudCreate :model="model" :apiUrl="apiUrl">
                  <div slot="body">
                    <div class="form-group">
                      <label for="nombre">Nombre: </label>
                      <input type="text" v-model="model.nombre" id="nombre" name="nombre" class="form-control"/>
                      <label for="codigo">Codigo: </label>
                      <input type="text" v-model="model.codigo" id="codigo" name="codigo" class="form-control"/>
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
      title: "Nueva Medida",
    };
  },
  data() {
    return {
      model: {
        nombre: "",
        medida:""
      },
      apiUrl:'medidas',
      page:'Agregar',
      modulo:'Medidas'
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
