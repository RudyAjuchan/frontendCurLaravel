<template>
  <div>
    <PageLoading :load="load"></PageLoading>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row">
          <h3 class="text-center">Categorías</h3>
          <div class="col-12 text-end">
            <nuxtLink :to="url_nuevo" class="btn btn-dark btn-sm">
              <i class="fas fa-plus"></i> Agregar
            </nuxtLink>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in list" :key="m.id">
                        <td>{{ i + 1 }}</td>
                        <td>{{ m.nombre }}</td>
                        <td class="text-center">
                          <div class="btn-group">
                            <nuxtLink
                              class="btn btn-warning btn py-1 px-2"
                              type="button"
                              id=""
                              :to="url_editar+m.id"                              
                            >
                              <i class="fas fa-pen"></i>
                            </nuxtLink>
                            <button
                              class="btn btn-danger btn py-1 px-2"
                              type="button"
                              id=""
                              @click="deleted(m.id)"
                            >
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
  name: "Categorías",
  head() {
    return {
      title: this.modulo,
    };
  },
  
  data() {
    return {
      load: true,
      list: [],
      apiUrl:'categorias',
      page:'Listado',
      modulo:'Categorías',
      url_nuevo: '/categorias/nuevo',
      url_editar: '/categorias/editar/'
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async EliminarItem(id) {
      let self = this;
      this.load=true;
      try {
        const res = await this.$api.$delete(this.apiUrl+"/"+id);
        this.$swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se eliminó correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        self.cargarDatos();
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '¡Error!',
          text: 'Hubo un problema al eliminar'+e,
        });
        console.log(e);
      }finally{
        this.load=false;
      }
    },
    deleted(id){
      let self = this;
      this.$swal.fire({
        title: '¿Esta seguro de eliminar el dato?',
        text: "¡Esta acción es irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#E64942',
        cancelButtonColor: '#dedede',
        confirmButtonText: 'Yes, delete it!'
      }).then( async(result) => { 
        if (result.isConfirmed) {            
          await self.EliminarItem(id)
        } else {
          this.$swal("No se eliminó el dato");
        }          
      });
    },
    async cargarDatos(){
      await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
        this.list = v[0];
      });
    }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
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