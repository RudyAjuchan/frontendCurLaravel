<template>
  <div>
    <PageLoading :load="load"></PageLoading>
    <AdminTemplate>
      <div slot="body">
        <div class="row">
          <div class="col-12 text-end">
            <button class="btn btn-dark btn-sm">
              <i class="fas fa-plus"></i> Agregar
            </button>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-">
                <div class="table-responsive">
                  <div class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Creado</th>
                        <th>Actualizado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(m, i) in list" :key="m.id">
                        <td>{{ i + 1 }}</td>
                        <td>{{ m.nombre }}</td>
                        <td>{{ m.created_at }}</td>
                        <td>{{ m.updated_at }}</td>
                        <td class="text-center">
                          <div class="btn-group">
                            <button
                              class="btn btn-warning btn py-1 px-2"
                              type="button"
                              id=""
                            >
                              <i class="fas fa-pen"></i>
                            </button>
                            <button
                              class="btn btn-danger btn py-1 px-2"
                              type="button"
                              id=""
                            >
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </div>
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
  name: "Marcas",
  head() {
    return {
      title: "Marcas",
    };
  },
  data() {
    return {
      load: true,
      list: [],
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
        await Promise.all([this.GET_DATA("marcas")]).then((v) => {
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