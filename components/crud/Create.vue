<template>
  <div>
    <PageLoading :load="load"></PageLoading>
        <slot name="body"></slot>        
        <div class="text-center">
            <button class="btn btn-primary" @click="save()">Guardar</button>
            <button class="btn btn-dark" @click="$router.back()">Cancelar</button>
        </div>

  </div>
</template>

<script>
export default {
  props:{
    model: {
        type: Object,
        default:()=>{}
    },
    apiUrl:{
        type: String,
        default:''
    }
  },
  data() {
    return {
      load: true,
    };
  },
  methods: {
    async save() {
      try {
        
        this.load = true;
        const res = await this.$api.$post(this.apiUrl, this.model);
        this.$swal.fire({
          icon: 'success',
          title: 'Atención',
          text: '¡Se ha registrado correctamente!',
        }).then((result) => {        
          this.$router.back();
        });
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: '¡Error!',
          text: 'Hubo un problema al guardar',
        });
        console.log(e);
      }finally{
        this.load = false;
      }
    },
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
