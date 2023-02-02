<template>
  <div>
    <PageLoading :load="load"></PageLoading>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table" id="example">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Cód barra</th>
                        <th>Marca</th>
                        <th>Categoría</th>
                        <th>Inversión</th>
                        <th>Valorizado</th>
                        <th>Ganancia</th>
                        <th>Stock</th>
                        <th class="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in list" :key="m.id">
                        <td>{{ i + 1 }}</td>
                        <td>{{ m.nombre }}</td>
                        <td>{{ m.barra }}</td>
                        <td>{{ m.marca.nombre }}</td>
                        <td>{{ m.categoria.nombre }}</td>
                        <td>Q. {{ Number(m.inversion).toFixed(2) }}</td>
                        <td>Q. {{ Number(m.valorizado).toFixed(2)}}</td>
                        <td>Q. {{ Number(m.ganancia).toFixed(2)}}</td>
                        <td><span class="badge" :class="[m.stock<=m.stock_minimo?'badge-danger':'badge-success']"
                            >{{ m.stock + " " + m.medida.codigo }}</span
                          ></td>
                        <td class="text-center">
                          <div class="btn-group">
                            <nuxtLink
                              class="btn btn-info btn py-1 px-2"
                              type="button"
                              id=""
                              :to="url_editar+m.id"                              
                            >
                              <i class="fas fa-eye"></i>
                            </nuxtLink>
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
      apiUrl:'inventarios',
      page:'Listado',
      modulo:'Inventarios',
      url_nuevo: '/inventarios/nuevo',
      url_editar: '/inventarios/kardex/'
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
        await Promise.all([this.GET_DATA(this.apiUrl)]).then((v) => {
          this.list = v[0];
        });
        $('#example').DataTable({
          "language": {
            "paginate": {
              "previous": "<i class='fas fa-angle-double-left'></i>",
              "next":"<i class='fas fa-angle-double-right'></i>"
            },
            "lengthMenu": "Mostrar _MENU_ entradas",
            "zeroRecords": "No hay ningun registro",
            "info": "Mostrando _PAGE_ de _PAGES_",
            "infoEmpty": "No hay ningun registro",
            "search":"Buscar"
          }
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