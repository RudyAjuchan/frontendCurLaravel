<template>
  <div>
    <PageLoading :load="load"></PageLoading>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header text-center">
                <h3>Actualizar Categoría</h3>
                {{ list }}
              </div>
              <div class="card-body">
                <crudUpdate :model="model" :apiUrl="apiUrl">
                  <div slot="body">
                    <div class="form-group">
                      <label for="nombre">Nombre: </label>
                      <input type="text" v-model="model.nombre" id="nombre" name="nombre" class="form-control"/>
                    </div>
                  </div>
                </crudUpdate>
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
  name: "Editar categoría",
  head() {
    return {
      title: "Editar categoría",
    };
  },
  data() {
    return {
      load: true,
      model: {
        nombre: "",
      },      
      apiUrl:'categorias',
      page:'Editar',
      modulo:'Categorías'
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl+"/"+this.$route.params.id)]).then((v) => {
          this.model = v[0];
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.load = false;
      }
    });
  },
};
</script>
