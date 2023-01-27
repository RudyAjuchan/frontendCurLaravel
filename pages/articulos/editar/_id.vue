<template>
  <div>
    <PageLoading :load="load"></PageLoading>
    <AdminTemplate :page="page" :modulo="modulo">
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card">
              <div class="card-header text-center">
                <h3>Actualizar Categoría.</h3>                
              </div>
              <div class="card-body">
                <form @submit.prevent="validateBeforeSubmit">
                  <crudUpdate2 :model="model" :apiUrl="apiUrl" :statusValidate="statusValidate">
                    <div slot="body" class="row">                    
                      <div class="form-group col-12">
                        <ValidationProvider rules="required" ref="validar1" v-slot="{ errors }">
                          <label for="nombre">Nombre: </label>
                          <input type="text" v-model="model.nombre" id="nombre" name="nombre" class="form-control"/>
                          <div class="text-danger">
                            <small>{{ errors[0] }}</small>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider rules="required" ref="validar2" v-slot="{ errors }">
                          <label for="barra">Codigo barra: </label>
                          <input type="text" v-model="model.barra" id="barra" name="barra" class="form-control"/>
                          <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>                        
                      </div>
                      <div class="form-group col-4">
                        <ValidationProvider rules="required" ref="validar3" v-slot="{ errors }">
                          <label for="marca_id">Marca: </label>
                          <select name="marca_id" id="marca_id" v-model="model.marca_id" class="form-control">
                            <option v-for="m in marcas" :value="m.id" :key="m.id"> {{ m.nombre }} </option>
                          </select>
                          <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-4">
                        <ValidationProvider rules="required" ref="validar4" v-slot="{ errors }">
                          <label for="medida_id">Unidad Medida: </label>
                          <select name="medida_id" id="medida_id" v-model="model.medida_id" class="form-control">
                            <option v-for="me in medidas" :value="me.id" :key="me.id"> {{ me.nombre }} - {{ me.codigo }} </option>
                          </select>
                          <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-4">
                        <ValidationProvider rules="required" ref="validar5" v-slot="{ errors }">
                          <label for="categoria_id">Categoria: </label>
                          <select name="categoria_id" id="categoria_id" v-model="model.categoria_id" class="form-control">
                            <option v-for="c in categorias" :value="c.id" :key="c.id"> {{ c.nombre }} </option>
                          </select>
                          <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-4">
                          <ValidationProvider rules="required" ref="validar6" v-slot="{ errors }">
                            <label for="compra">Precio compra: </label>
                            <input type="number" v-model="model.compra" id="compra" name="compra" class="form-control"/>
                            <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-4">                        
                          <ValidationProvider rules="required" ref="validar7" v-slot="{ errors }">
                            <label for="venta">Precio venta: </label>
                            <input type="number" v-model="model.venta" id="venta" name="venta" class="form-control"/>
                            <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-4">
                          <ValidationProvider rules="required" ref="validar8" v-slot="{ errors }">
                            <label for="stock_minimo">Stock mínimo: </label>
                            <input type="text" v-model="model.stock_minimo" id="stock_minimo" name="stock_minimo" class="form-control"/>
                            <div class="text-danger">
                              <small>{{ errors[0] }}</small>
                            </div>
                          </ValidationProvider>
                        </div>                    
                    </div>
                  </crudUpdate2>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider
  },
  head() {
    return {
      title: "Editar artículos",
    };
  },
  data() {
    return {
      load: true,
      model: {
        nombre: '',
        barra: '',
        compra: null,
        venta: null,
        stock_minimo: null,
        medida_id: null,
        marca_id: null,
        categoria_id: null
      },      
      apiUrl:'articulos',
      page:'Editar',
      modulo:'Artículos',
      load: true,
      marcas:[],
      categorias:[],
      medidas:[],
      statusValidate: false
    };
  },
  methods: {
    async GET_DATA(path) {
      const res = await this.$api.$get(path);
      return res;
    },
    async validateBeforeSubmit() { 
      for(var i=1; i<=8; i++){
        const provider = this.$refs['validar'+i]
        provider.validate();
      }
      if(this.model.nombre!='' && this.model.barra!='' && this.model.compra!=null && this.model.venta!=null && this.model.stock_minimo!=null && this.model.medida_id!=null && this.model.marca_id!=null && this.model.categoria_id!=null){
        this.statusValidate=true;
      }
      return true;
    }
  },
  mounted() {
    this.$nextTick(async () => {
      try {
        await Promise.all([this.GET_DATA(this.apiUrl+"/"+this.$route.params.id), this.GET_DATA('marcas'), this.GET_DATA('categorias'),this.GET_DATA('medidas')]).then((v) => {
          this.model = v[0];
          this.marcas = v[1]
          this.categorias = v[2]
          this.medidas = v[3]
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
