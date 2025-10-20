//Esto es para que en una función, se pueda llamar otra función.
//function mayorQue(n) {
//    return function(m) {
//        return m > n;
//    }
//}

//let mayorQueDiez = mayorQue(10);

//console.log(mayorQueDiez(12)); // true
//console.log(mayorQueDiez(8));  // false

//let mayorQueCuarenta = mayorQue(40);

//console.log(mayorQueCuarenta(72)); // true
//console.log(mayorQueCuarenta(8));  // false

//let numbers = [1,2,3,4,5];

//const mostrar = (array, funcion) => {
//    for (const elem of array) { //Por cada elemento del array, se ejecutará la "funcion"  
//        funcion(elem);
//    }};
//mostrar(numbers, console.log);

//let mayorQueTres = (m) => {
//    let resultado =  m > 3;
//    console.log(resultado); 
//}
//mostrar(numbers, mayorQueTres);

//FOR EACH: En este caso, por cada número se está pidiendo que me lo muestra en consola. La traducción por eso dice "for each" - "por cada uno". Ejemplo, se hace un for each al array de un carro de compras, y por cada produto, se debe mostrar, ejemplo, dentro de una caja. 
//let numbersforeach = [1,2,3,4,5];
//numbersforeach.forEach((num)=>{
//    console.log(num);
//})

//FIND: Para encontrar un producto según nombre, precios, etc. Devuelve el primer elemento que cumpla la condición que le entregue. 
//let productos = [
//    {id:1,nombre: "remera", precio:1000},
//    {id:2,nombre: "pantalón", precio:3000},
//];

//let prodEncontrado = productos.find((prod) => prod.precio > 1500);
//console.log(prodEncontrado);


//FILTER: En vez de devolver un solo producto o elemento, así como o hace find, sino que me va a mostrar todos los eementos que cumplan esa condición. 
//let prodEncontrados = productos.filter((prod)=>prod.precio > 900);
//console.log(prodEncontrados);


//SOME: Solo devuelve true o false. Solo te dice si existe o no existe un producto.
//let prodEncontrado = productos.some((prod) => prod.precio > 1000);
//console.log(prodEncontrado);



//MAP: Crea un nuevo array con todos los elementos del original, pero transofrmado. Transforma el array que le estamos pasando. Esto se puede usar cuando hay productos con recargo por ubicación, o en el caso de sumarle el IVA. 
//let prodsCantidad = productos.map((prod) => {
//    return {id:prod.id,
//        nombre:prod.nombre,
//        precio:prod.precio,
//        cantidad: 0
//    }
//})

//console.log(prodsCantidad);



//EMPEZAMOS A VER TODO LO DE DOM


//1. Métodos de Acceso al DOM
//1.1. getElementById() Este método es ideal cuando se sabe con certeza que el elemento tiene un id único y se necesita acceder a él de manera directa.

// HTML de referencia
//<div id="app">
//  <p id="parrafo1">Hola Mundo</p>
//</div>
// JavaScript
//let div = document.getElementById("app");
//let parrafo1 = document.getElementById("parrafo1");
//console.log(div.innerHTML); // Muestra el contenido HTML dentro del div
//console.log(parrafo1.innerHTML); // Muestra "Hola Mundo"


//2. getElementsByClassName() Este método es útil cuando se necesita trabajar con múltiples elementos que comparten una misma clase, como cuando se aplican estilos o se realizan manipulaciones a un grupo de elementos.

// HTML de referencia
//<ul>
//  <li class="paises">AR</li><li class="paises">CL</li><li class="paises">UY</li>
//</ul>

// JavaScript
//let paises = document.getElementsByClassName("paises");
//console.log(paises[0].innerHTML); // Muestra "AR"
//console.log(paises[1].innerHTML); // Muestra "CL"
//console.log(paises[2].innerHTML); // Muestra "UY"


//3. getElementsByTagName() Este método es conveniente cuando se desea acceder a todos los elementos de un tipo particular, como todos los <div>, <p>, o <span> en un documento.

// HTML de referencia
//<div>
//  <div>CONTENEDOR 2</div><div>CONTENEDOR 3</div>
//</div>

// JavaScript
//let contenedores = document.getElementsByTagName("div");
//console.log(contenedores[0].innerHTML); // Muestra "CONTENEDOR 2"
//console.log(contenedores[1].innerHTML); // Muestra "CONTENEDOR 3"



//MÉTODO MODERNO DE ACCESO - Y BUSCAR SELECTALL
//querySelectorAll() El método querySelectorAll() es similar a querySelector(), pero en lugar de devolver solo el primer elemento coincidente, devuelve una lista estática de todos los elementos que coinciden con los selectores CSS especificados. La lista devuelta es de tipo NodeList, que puede ser iterada con métodos como forEach.


//DOM y Eventos en JavaScript
let contenido = document.getElementById(`contenido`); //Con este modifico todo lo que se encuentre bajo el dominio de  "contenido"
contenido.innerHTML = "<h1>Bienvenido a Javascript</h1><p>Esto es un parrafo creado desde Javascript</p>";

let titulo = document.querySelector(`h1`); //Esto para poder modificar solo una parte d eun bloque que se haya creado. No todo sino solo uno. En este caso, el título. 
titulo.innerText = `Bienvenidos a mi nuevo título`;

titulo.className = `nuevo-clase`; //Esto sirve para agregar algo a un bloque, sin tener que ingresar a HTML. 



//Ejemplo para combinar fácilmente texto estático con valores dinámicos.
//const nombret = "Juan";
//const edadd = 30;

//const contenedorr = document.getElementById('info');

//contenedorr.innerHTML = `
//  <h2>Información del Usuario</h2>
//  <p>Nombre: ${nombret}</p>
//  <p>Edad: ${edadd}</p>
//`;



//Incluir Expresiones Complejas

const productoss = [
  { nombree: "Clases", precioo: 50.000 },
  { nombree: "Transporte", precioo: 70.000 },
  { nombree: "Servicios", precioo: 45.000 }
];

//const contenedor = document.getElementById('productos');

//contenedor.innerHTML = `
//<h2>Lista de Productos</h2>
//<ul>
//    ${productoss.map(producto => `<li>${producto.nombree} - $${producto.precioo}</li>`).join('')}
//</ul>
//`;



//DESDE ACÁ VIENE EL CÓDIGO PARA EL EJERCICIO REAL
//variable: es un espacio de memoria reservado para almacenar información importante del programa"

let continuar = confirm("Estás a punto de ingresar a mi mundo ¡Acepta los términos y condiciones!");
console.log(continuar);

if (continuar) {
    let nombreIngresado = prompt ("Ingresa tu nombre completo"); //PROMPT SE USA PARA IMPRIMIR O MOSTRAR UN POP UP CON CIERTO MENSAJE
    console.log(nombreIngresado);

    let rolIngresado = prompt (`Hola ${nombreIngresado}, bienvenid@ a CLICK, tu proveedor de confianza. (1) PROVEEDOR (2) USUARIO`);
    const rol = parseInt(rolIngresado);

if (rol === 1) { //El simbolo de acá es el que se reemplaza, dependiendo de si queremos que ambas condiciones se cumplan, o que al menos una, o que solo haya una condición. Varía entre && o ||
    let tipoProveedor = prompt ("!Bienvenido colega¡ Vamos a mover el mercado hoy. (1)NUEVO (2) ANTIGUO");
    const tipo = parseInt(tipoProveedor);
    
    if (tipo === 1) {
            let nombreCompañia = prompt (`Excelente ${nombreIngresado}, te pediré alguna información para continuar. ¿Cuál es el nombre de la compañia?`);
            console.log(nombreCompañia);

            let anioCreacion = parseInt(prompt("Según antiguedad, tendrás un descuento en la inscipción. Escriba el año de creación del negocio"));
            console.log(anioCreacion);

            const anioActual = new Date().getFullYear();
            if (anioActual - anioCreacion >= 25) {
                alert (`Por tener antiguedad superior a 25 años, su descuento de inscripción será de un 10%.`);
                console.log("Si le aplica descuento. Sigamos con el proceso.");
            } else {
                alert (`No aplica descuento`);
                console.log("No le aplica descuento. Sigamos con el proceso");
            }
                
                let ServicioOfrecido = prompt (`¿Qué tipo de servicio ofrece? 1. Servicios del hogar 2. Servicios educativos 3. Servicios automoviles 4. Servicios de compañía"`)
                console.log(ServicioOfrecido);
                                
                let arrayServicios =[];
                arrayServicios.push({ id:1 , nombre: "Servicios del hogar" });
                arrayServicios.push({ id:2 , nombre: "Servicios educativos" });
                arrayServicios.push({ id:3 , nombre: "Servicios automoviles" });
                arrayServicios.push({ id:4 , nombre: "Servicios de compañía" });
                console.log(arrayServicios);

                for(let objeto of arrayServicios) {
                    console.log(arrayServicios.nombre);
            }
        } else if (tipo === 2) {
            let usuarioProveedor = prompt ("Bienvenido de vuelta. Digita tu usuario asignado:");
            const password = "1234";

            let passwordIngresado = prompt("Ingrese su contraseña");
            while(passwordIngresado !== password) {
                passwordIngresado = prompt("La contraseña no coincide. ¿Acaso quiere robarse una identidad? Ingrese su contraseña");
        }
        console.log("El usuario ingresó exitosamente");
    }
} if (rol === 2) { //LÓGICA PARA USUARIO
        let tipoUsuario = prompt ("!Bienvenido vecino¡ Encontremos a tu proveedor de confianza. (1) NUEVO  o (2) ANTIGUO");
        const tipo = parseInt(tipoUsuario);

        if(tipo === 1) {
            let ubicacion = prompt (`Excelente ${nombreIngresado}, te pediré alguna información para continuar. ¿Cuá es tu ubicación? 1. Norte de Bogotá 2. Sur de Bogotá 3. Centro de Bogotá`);
            console.log(ubicacion);

            } else if (tipo === 2) {
            let usuarioExistente = prompt(`Bienvenido de vuelta ${nombreIngresado}. Digita tu usuario asignado:`);
            const password = "1234";
            let passwordIngresadaUsuario = prompt("Ingresa tu contraseña");

            while (passwordIngresadaUsuario !== password) {
                passwordIngresadaUsuario = prompt("La contraseña o el usuario no coinciden. ¿Acaso quieres robarte una identidad amiguito? Ingresa tu contraseña");
            }
            console.log("El usuario ingresó exitosamente");
        }
    else {
    alert("Opción de rol no válida"); 
    } 
} else {
    alert("Ha cancelado el proceso");
    }
}

//Ejemplo Práctico: Imagina que tienes un sitio web de comercio electrónico y necesitas almacenar la información del carrito de compras del usuario entre sesiones. Podrías almacenar esta información en localStorage como un string JSON y recuperarlo cada vez que el usuario visite la página.
//Supongamos que este es el carrito de compras del usuario
const carrito = {
    items: [
        { id: 1, producto: "Libro", cantidad: 2, precio: 15.00 },
        { id: 2, producto: "Lápiz", cantidad: 10, precio: 1.50 }
    ]
};

// Convertimos el objeto carrito en una cadena JSON y lo almacenamos
localStorage.setItem('carrito', JSON.stringify(carrito));

// Recuperamos la cadena JSON del almacenamiento y la convertimos de nuevo a un objeto JavaScript
const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito'));

// Ahora podemos acceder y manipular los datos del carrito como un objeto JavaScript
console.log(`Total de productos: ${carritoAlmacenado.items.length}`);





//Declaración: Reserva un lugar para guardar el nombre de run cliente. 
//let cliente;

//Asiganción de valores
//cliente = "Carlos";

//console.log(cliente);

//Inicializar variables: 
//let edad = 37;

//console.log(edad);

//Constantes: variable cuyo valor no se puede modificar una vez se asignó. Por ejmplo, el año de nacimiento. 

//const nacimiento = 1987;

//console.log(nacimiento);

//console.log("El script está funcionando correctamente");

//const titulo = document.getElementById("titulo");
//titulo.textContent = "Texto modificado"

//let nombre = "Federico"; //String
//let edad = 42; //Number
//let esDesarrollador = true; //Boolean

//const DNI = 32000000; //Number

//console.log(nombre);

//console.log(DNI);

//let num1 = 5;
//let num2 = 27; 
//let num3 = "30";

//console.log(num1 + num2 + num2);
//console.log(num1 + num3); //Si los formatos no son los mismos, como acá, entonces los números se concatenan
//console.log(num3 - num2); 
//console.log(num2 * num1);
//console.log(num2 / num1);















//2.1. CONDICIONALES Y OPERADORES
// BAR
//let edad = 18;
//let dinero = true;

//if(edad >= 18 || dinero) { //El simbolo de acá es el que se reemplaza, dependiendo de si queremos que ambas condiciones se cumplan, o que al menos una, o que solo haya una condición. Varía entre && o ||
//    console.log("Podes ingresar al bar");
// } else {
//    console.log("Sos menor, anda a tu casa");
// }

//AND (&&) = Se deben cumplir ambas condiciones para que el resultado sea true
//OR (||) = Se debe cumplir al menos una de las cndiciones para que el resultado sea true












//2.2. CICLOS Y CONTROL DE FLUJOS
//En JavaScript, los ciclos o bucles permiten repetir una o más instrucciones de manera eficiente hasta que se cumpla una condición específica. A continuación, exploraremos los tres tipos principales de ciclos: for, while, y do...while.

//Ciclos por repetición
//for(let i = 0; i < 5 ; i++) {
//    console.log("Hola mundo");
//}

//Ciclos condicionales
//const password = "1234";

//let passwordIngresado = prompt("Ingrese su contraseña");

//while(passwordIngresado != password) {
  //  passwordIngresado = prompt("Ingrese su contraseña");
//}

//Uso de "break" = Es útil cuando necesitas detener el ciclo en una condición particular, por ejemplo, cuando se encuentra un valor específico en un array. La declaración break se utiliza para salir de un ciclo de forma inmediata, sin importar si la condición del ciclo sigue siendo verdadera.

//for (let i = 0; i < 10; i++) {
//    if (i === 5) {
//        break; // Sale del ciclo cuando i es igual a 5
//    }
//    console.log(i); // Imprime los números de 0 a 4
//}

//Uso de "Continue" = Es efectivo en casos donde solo algunas condiciones específicas requieren que el ciclo se omita, como saltarse valores especiales o erróneos dentro de una secuencia de datos. La declaración continue omite la iteración actual del ciclo y continua con la siguiente, siempre y cuando la condición del ciclo siga siendo verdadera. 

//for (let i = 0; i < 10; i++) {
//    if (i % 2 === 0) {
//        continue; // Omite los números pares
//    }
//    console.log(i); // Imprime los números impares entre 0 y 9
//}

//Validación de usuarios
//const usuarios = [
//    {nombre: "Ana", edad: 20, aceptoTerminos: true},
//    {nombre: "Luis", edad: 17, aceptoTerminos: true},
//    {nombre: "Carlos", edad: 18, aceptoTerminos: false},
//    {nombre: "María", edad: 15, aceptoTerminos: true},
//]

//for(let  i = 0; i < usuarios.length; i++) { //i=o es la variable iniciadora, desde donde arranca la verificación de la información. 
//    if(usuarios[i].edad >= 18 && usuarios[i].aceptoTerminos) {
//        console.log(usuarios[i].nombre);
//    }
//}







//2.3 Nullish Coalescing y Condiciones Anidadas
//2.3.1. Condiciones anidadas
//let edad = null; //Acá, si en vez de null, le pongo 8, entonces me va a decir "Tienes 8 años". Se cambia la variabe, lo valida. Sino, entonces te bota el nombre, y si no hay nombre, dice que la información es incompleta.
//let nombre = "Carlos";

//if (edad !== null && edad !== undefined) {
//  console.log(`Tienes ${edad} años`);
//} else {
//  if (nombre) {
//    console.log(`Bienvenido, ${nombre}`);
//  } else {
//    console.log("Información incompleta");
//  }
//}

//En este ejemplo de arriba: 
//Paso 1: Verificamos si edad tiene un valor válido.
//Paso 2: Si no, evaluamos si nombre está definido.
//Paso 3: Dependiendo de las condiciones, mostramos el mensaje correspondiente.

//2.3.2. Operadores Útiles para Evaluar Condiciones: Además de las estructuras if, JavaScript ofrece operadores lógicos que ayudan a simplificar y evaluar condiciones de manera más eficiente.

//- Operador OR Lógico (||) = Retorna el primer operando verdadero o el último operando si todos son falsos. Sin embargo, considera valores "falsy" como 0, '', false, null y undefined.

//|| se usa cuando se ingresan variabes FinalizationRegistry, que no exsten, como 0.

//const mensaje = document.getElementById("mensaje");
//const boton = document.getElementById("cambiarDescuento");

//let descuentoInicial;
//Una cierta lógica que pueda modificar el descuento

//const descuentoPredeterminado = 10;
//let descuentoActual = descuentoInicial ?? descuentoPredeterminado
//mensaje.textContent = 'El descuento es del ${descuentoActual}%' 

//boton.addEventListener('click', () => {
//    let descuentoIngresado = prompt("Ingrese el descuento en porcentaje")

//    descuentoIngresado = Number(descuentoIngresado)

//    descuentoActual = descuentoIngresado && descuentoPredeterminado

//    mensaje.textContent = "El descuento es del ${descuentoActual}&"
//}
//)
//NO LO LOGRÉ

//function saludar(nombre) {
//    console.log(`Hola, ${nombre}`);
//}

//saludar("Ana");
//saludar("Juan");
//saludar("María");

// Función para calcular el descuento
//function calcularDescuento(precio, porcentajeDescuento) {
//    return precio - (precio * porcentajeDescuento / 100);
//}

// Función para calcular el precio final incluyendo impuestos
//function calcularPrecioFinal(precio, descuento, impuesto) {
//    let precioConDescuento = calcularDescuento(precio, descuento);
//    return precioConDescuento + (precioConDescuento * impuesto / 100);
//}

// Invocación
//let total = calcularPrecioFinal(100, 10, 21);
//console.log(total); // Muestra: 98.9

//Prueba SCOPE GLOBAL
//let color = 'azul'; // Variable global

//function mostrarColor() {
//    console.log(color); // Accede a la variable global
//}

//mostrarColor(); // Imprime: azul


//Funciones:
//1° EJEMPLO - Declaramos: 
//function saludars() { //"Agregué "saludars" para quw no se confunda con el "saludar" de las lineas 197 a 199"
    //Cuerpo de la función
//    console.log("Hola, desde mi función");
//    }

//Invocar:
//saludars(); //"Agregué "saludars" para quw no se confunda con el "saludar" de las lineas 197 a 199"

//2° EJEMPLO - DECLARAMOS
//function mostrarLibros() {
//    console.log("Bienvenido a la biblioteca. ¡Estos son los libros disponibles!");
//}

//Invocamos: 
//mostrarLibros(); // Muestra: Bienvenido a la biblioteca. ¡Estos son los libros disponibles!

//Cotinuación de buscando Libros
//function buscarLibro(titulo) {
//    console.log(`Buscando el libro: ${titulo}...`);
//}

//buscarLibro("El Principito"); // Muestra: Buscando el libro: El Principito...


//Continuación de multas por retraso de entrega de libros
//function calcularMulta(diasRetraso) {
//    const multaPorDia = 0.50; // 50 centavos por día de retraso
//    return diasRetraso * multaPorDia;
//}

//let multa = calcularMulta(125); //Acá van los días de retraso
//console.log(`La multa total es: $${multa}`); // Muestra: La multa total es: $...


//Prueba SCOPE GLOBAL
//mostrarColor();

//3° EJEMPLO - DECLARAMOS:
//function agregarLibro(titulo, autor) {
//    return { titulo, autor };
//}

//function mostrarDetalleLibro(libro) {
//    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
//}

//INVOCAMOS:
// Agregar un libro
//let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
//mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell

//Uso Avanzado: Parámetros Predeterminados
//function devolverLibro(titulo, diasRetraso = 0) {
//    const multa = diasRetraso * 0.50;
//    const mensaje = diasRetraso > 0 
//        : `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
//        : "Devuelto a tiempo. No hay multa.";
//    console.log(`Libro "${titulo}": ${mensaje}`);
//}

//devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

//devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.

//Prueba SCOPE GLOBAL
//mostrarColor();




//FUNCIONES FLECHA
//const sumarFlecha = (a, b) => {
//    return a + b
//}

//console.log(sumarFlecha(30, 56));





//ARRAYS
//let numeros = [1,2,3,4,5]; //Están puestos en la posición 0, 1, 2, 3, 4

//console.log(numeros);

//console.log(numeros[3]); 

//let palabras = ["auto", "manzana", "pera", "programación"];

//console.log(palabras);

//console.log(palabras[0]);

//let boleanos = [true, false, true, false];

//console.log(boleanos);

//let matriz = [

//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]

//]

//console.log(matriz);

//console.log(matriz[0][1]); //Con esto, me muestra el número que está en la posición [0][1]





//ORDENAR ARRAYS
//let numeros = [40, 1, 5, 200, 3];

//numeros.sort((a,b)=> a - b); //También se puede dejar a - a si quiero que los números me los muestre de mayor a menor
//console.log(numeros);

//let palabras = ["auto", "zorro", "programación", "Banana"];
//palabras.sort((a,b)=> a.localeCompare(b)); //Esto es para que al ordenar palabras no discrimine entre maysculas y minusculas. Si le quito esto, siempre mostrará primero las mayúsuclas, sin importar si es la A o la Z.
//console.log(palabras);

//metodo reverse - Este método hace algo parecido a sort b - a. Me muestra los elementos de manera descendente.
//numeros.reverse();
//console.log(numeros);






//CONCATENAR ARRAYS

//1. Uso básico con coma (default)
//let colores = ['Rojo', 'Verde', 'Azul'];
//let resultado = colores.join();
//console.log(resultado);  // "Rojo,Verde,Azul"

//2.  Uso con separador de espacio
//let nombres = ['Ana', 'Juan', 'Carlos'];
//let listaNombres = nombres.join(' ');
//console.log(listaNombres);  // "Ana Juan Carlos"

//3. Uso con separador de guión
//let elementos = ['Hidrógeno', 'Oxígeno', 'Carbono'];
//let formula = elementos.join('-');
//console.log(formula);  // "Hidrógeno-Oxígeno-Carbono"

//4. Uso con separador vacío
//let letras = ['J', 'a', 'v', 'a'];
//let palabra = letras.join('');
//console.log(palabra);  // "Java"


//DIFERENCIA ENTRE ARRAY Y OBJETO LITERAL: A diferencia de los arrays, que son colecciones indexadas de elementos, los objetos literales no mantienen un orden específico de sus elementos y no se accede a sus valores mediante índices numéricos. En los arrays, el acceso a los elementos se realiza a través de índices comenzando desde 0, mientras que en los objetos, el acceso se realiza a través de las claves definidas.

// Array
//const colores = ["rojo", "verde", "azul"];
//console.log(colores[0]); // Accede al primer elemento: "rojo"

// Objeto Literal
//const semaforo = {
//    rojo: "Detenerse",
//    verde: "Avanzar",
//    azul: "Cuidado"
//};
//console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

//JUNTOS:
//let arrayObjetos =[];

//arrayObjetos.push({
//    id:1 , nombre: "Servicios del hogar"
//})
//arrayObjetos.push({
//    id:2 , nombre: "Servicios educativos"
//})
//arrayObjetos.push({
//    id:3 , nombre: "Servicios automoviles"
//})
//console.log(arrayObjetos);
//
//for(let objeto of arrayObjetos) {
//    console.log(objeto.nombre);
//}


//MANIPULACIÓN DE ARRAYS Y OBJETOS: 
//En JavaScript, los arrays pueden almacenar varios tipos de datos, incluidos objetos literales. Esto es especialmente útil en aplicaciones donde se manejan colecciones de datos complejos. Los métodos de array como push, sort, y otros se pueden utilizar eficientemente en arrays que contienen objetos literales, lo que permite manipular datos de formas potentes y flexibles.

//Ejemplos Prácticos
//1. Agregar Objetos con push: Para agregar nuevos objetos a un array, se utiliza el método push. Esto es especialmente útil cuando se está construyendo una lista dinámicamente.

//const usuarios = [];
//usuarios.push({ nombre: "Ana", edad: 25 });
//usuarios.push({ nombre: "Luis", edad: 30 });

//console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//2. Ordenar Objetos con sort: El método sort puede ser personalizado para ordenar arrays de objetos basándose en alguna clave específica de los objetos.

//usuarios.sort((a, b) => a.edad - b.edad);
//console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

//3. Filtrar con filter: Para filtrar elementos de un array basándose en una condición, se usa filter, que es muy útil para obtener subconjuntos de un array basados en propiedades de los objetos.

//const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
//console.log(mayoresDe25);
// Resultado: [{ nombre: "Luis", edad: 30 }]

//4. Buscar un Objeto con find: Para encontrar el primer objeto que cumple con una condición específica, se usa find.

//const luis = usuarios.find(usuario => usuario.nombre === "Luis");
//console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 }







//CLASE 25 DE SEPTIEMBRE
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    describir() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`);
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona
const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());

document.addEventListener('DOMContentLoaded', () => {
    
const saludo = document.getElementById("saludo");
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");
const botonRecuperar = document.getElementById("recuperarNombre");

if (saludo && botonGuardar && botonEliminar && botonRecuperar) {
    
//GUARDAR NOMBRE    
botonGuardar.addEventListener("click", () => {
    const nombre = prompt("Ingrese su nombre:");
        if (nombre) {
        localStorage.setItem("nombreUsuario", nombre);
        saludo.textContent = `¡Hola ${nombre}!` 
    }
});

//ELIMINAR NOMBRE
botonEliminar.addEventListener("click", () => {
    localStorage.removeItem("nombreUsuario");
    saludo.textContent = `¡Hola!`;
});

//RECUPERAR NOMBRE
botonRecuperar.addEventListener("click", () => {
    const nombreRecuperado = localStorage.getItem("NombreUsuario"); 

    if (nombreRecuperado) {
        //Si existe el nombre, se saluda
        saludo.textContent = `¡Bienvenido de vuelta ${nombreRecuperado}!`;
    } else  {
        //Si no existe, se notifica al usuario
                alert("No hay ningún nombre guardado para recuperar.");
                saludo.textContent = `¡Hola!`;
            }
        });
        
    } else {
        console.error("ERROR: No se encontraron los IDs necesarios en el HTML. Verifica 'saludo', 'guardarNombre', 'eliminarNombre' y 'recuperarNombre'.");
    }
});

let nombre = "Raul";
let edad = 40;

localStorage.setItem("nombreDeLaPersona", nombre)

let contenedor = document.getelementById('unico');
console.log(contenedor);