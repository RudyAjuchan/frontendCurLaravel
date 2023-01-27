<template>
  <div>
    <PageLoading :load="load"></PageLoading>
        <slot name="body"></slot>        
        <div class="text-center">
            <button class="btn btn-primary" @click="save()">Actualizar</button>
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
    },
    statusValidate:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      load: true,
    };
  },
  methods: {
    async save() {
      setTimeout( async () => {  
        try {
          if(this.statusValidate){
            this.load = true;
            const res = await this.$api.$put(this.apiUrl+"/"+this.model.id, this.model);
            this.$swal.fire({
              icon: 'success',
              title: 'Atención',
              text: '¡Se ha actualizado correctamente!',
            }).then((result) => {        
              this.$router.back();
            });
          }else{
            this.$swal({
            icon: 'warning',
            title: '¡Atención!',
            text: 'Faltan campos por completar',
          });
          }        
        } catch (e) {
          this.$swal({
            icon: 'error',
            title: '¡Error!',
            text: 'Hubo un problema al guardar'+e.message,
          });
          console.log(e);
        }finally{
          this.load = false;
        }
       }, 10);      
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
