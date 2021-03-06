
/* pruede tener lo mismo de una instancia , data es global lo metodos la diferencia es el componente hay que definirlas como una funcion
* hay que definir aisladas para cada uno de los componentes por que el objeto es global
*
*
* en el componente hay que definir las propiedades , como una funcón o como un metodo de esa forma
* s* on aislada completamente a cada uno de los componentes
*
* */

// los componentes solo deben de contener un div central solo un root element componente must be contain root element
Vue.component('peliculas', {
    template: `<div class='componente'>
              <ul v-if="post">
                <li v-for="(p , index ) in post">
                    {{p.title}}
                </li>
              </ul>
               </div>`,
    mounted(){  /* Cargar instancia , ejecutar el codigo que tiene adentro es lo primero que se ejecuta en la carga del DOM */
        // then promesas
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (respuesta)=>{
                console.log(respuesta.data);
                this.post = respuesta.data;

            });
    },
    data(){
        return {
            titulo : 'peliculas',
            post : null
        }
    }
});
Vue.component('frutas', {
    props : ['objeto']

});


// Utilizar un componente dentro de otro.

Vue.component('padre', {
    template: `<div>
         <h1>this is a template </h1>
              <div>
                   <hijo></hijo>
              </div>
         
         </div>`
});


Vue.component('hijo', {
    template: `<div><p style="background: blue; ">Soy un parrafo en en el componente hijo</p></div>`
});

// darle click a unos enlaces y ir cambiando de componente para hacer fácil  componentes dinamicos
Vue.component('articulos', {
    template: `<div><p style="background: red; ">Soy un parrafo de articulos. </p></div>`
});

Vue.component('productos', {
    template: `<div><p style="background: blue; ">Soy un parrafo de productos. </p></div>`
});







Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue ({
    el: 'main',
    mounted(){  /* Cargar instancia , ejecutar el codigo que tiene adentro es lo primero que se ejecuta en la carga del DOM */
     // then promesas
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (respuesta)=>{
                console.log(respuesta.data);
                this.post = respuesta.data;

        });
    },
    data : {
        elegido: 'articulos',
        post : null,
        texto : 'Hola mundo des vue2',
        nombre: 'Mariana',
        apellidos: 'Gonzalez Marquez',
        nota : 5,
        peliculas :  ['Batman Vs SUperman', 'La Verdad duele', 'Spiderman'],
        objectMovie : [
            {'pelicula': 'Volver al futuro', anio: '2017', mes : 'Enero'},
            {'pelicula': 'Batman', anio: '2020', mes : 'Enero'},
            {'pelicula': 'Superman', anio: '2020', mes : 'Febrero'}

            ],
        frutas: [
            { nombre: 'mandarina', temporada : 'verano' },
            { nombre: 'manzana', temporada : 'invierno' }


        ],
        objetoSimple : { nombre: 'mandarina', temporada : 'verano' },
        peliculaNueva : null,
        peliculasAgregadas : ['Una Prueba'],
        busqueda : null,
        confirmado : null

        },
        methods: {
            crearPelicula: function () {

                this.peliculasAgregadas.unshift(this.peliculaNueva);
                this.peliculaNueva = null;
               // alert(this.peliculaNueva)

            },

            borrarPelicula: function (index) {
                this.peliculasAgregadas.splice(index, 1);
            },
            
            marcar : function (index) {
                this.confirmado = index;
            }
        },
       computed: { // propiedad computada
           nombreYapellido(){
               var date = '01/04/2017';
               var anio = '2020';
                return this.nombre+' '+ this.apellidos+ ' NOTA :' + this.nota +' '+ date;
           },
           ordenarPeliculas(){
                    return this.peliculasAgregadas.sort();
           },
           buscarFruta(){
              // return this.frutas.sort();
               if(this.busqueda == null){
                   return this.frutas;
               }
               else
               return this.frutas.filter((fruta) => fruta.nombre.includes (this.busqueda));
           }
       }
});



// Se puede crear muchos objetos vue que actuen sobre la misma etiqueta
const vue2 = new Vue ({
    el: '#app',
    data: {
         texto: 'segunda instancia Vue'
    }

});


const vue3 = new Vue ({
    el: '#app2',
    data: {
        texto: 'Texto de la segunda app'
    }

});