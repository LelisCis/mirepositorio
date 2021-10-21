let seccion = document.getElementById("section");
// seccion.style.visibility="hidden"

const comprarTickets=()=>{
    seccion.innerHTML= `

    <div class="container"
        <div class= "row">
        <div class= "row">

        <div class= "col-md-8 offset-md-2 col-lg-8 offset-lg-2 pt-5 g-4">
          <div class="card-group">

            <div class="card">
              <div class="card-body border border-primary mr-1">
              <h5 class="card-title text-center">Estudiantes</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center">80%</p>
              <p class="card-text text-center"><small class="text-muted">* Presentar documentación</small></p>
              </div>
            </div>

            <div class="card">
              <div class="card-body border border-info mr-1">
              <h5 class="card-title text-center">Trainee</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center">50%</p>
              <p class="card-text text-center"><small class="text-muted">* Presentar documentación</small></p>
              </div>
            </div> 

            <div class="card mr-1">
              <div class="card-body border border-warning mr-1">
              <h5 class="card-title text-center">Junior</h5>
              <p class="card-text text-center">Tienen un descuento</p>
              <p class="card-title text-center">15%</p>
              <p class="card-text text-center"><small class="text-muted">* Presentar documentación</small></p>
              </div>
            </div>

          </div>   
        </div>
      </div>

          <div class="row">
            <div class="col text-uppercase text-center mt-3">
            <small>Venta</small>
            <h2>Valor de ticket $200</h2>  
            </div>
          </div>


          <div class="row d-flex justify-content-center mt-3">
              
            <div class="col-4 mb-2">
            <input type="text" class="form-control" placeholder="Nombre" required>
            </div>

            <div class="col-4 mb-2">
            <input type="text" class="form-control" placeholder="Apellido" required>
            </div>

            <div class="col-8 mb-2">
            <input type="email" class="form-control" placeholder="Correo">
            </div>
            </div>

          <div class="row d-flex justify-content-center mt-3">

          <div class="col-4 mb-2">
            <label for="" class="form-label">Cantidad</label>
            <input type="text" class="form-control" id="cantidadEntrada" placeholder="Cantidad" required>
          </div>

          <div class="col-4 mb-2">
            <label for="" class="form-label">Categoría</label>

          <select class="form-select" id="inputState" required>
            <option selected disabled value=""></option>
            <option value="estudiante">Estudiante</option>
            <option value="trainee">Trainee</option>
            <option value="junior">Junior</option>
          </select>
          </div>

        </div>


        <div class="row d-flex justify-content-center mt-3">
          <div class="col-8 alert alert-primary role="alert" id="totalCompra">
          Total a pagar: $.
          </div>
        </div>

        <div class="row d-flex justify-content-center botones mt-3">

          <div class="form-group col-4">
            <button onclick="limpiar()" type="reset" class="btn btn-codo btn-block">Borrar</button>
          </div>


          <div class="form-group col-4">
            <button type="button" id="botonCalcular" class="btn btn-codo btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal" >Resumen</button> 
          </div>

          </div>       
        </div>

        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">ticket N° </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div id="" class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Confirmar compra</button>
            </div>
          </div>
        </div>
        
      </div>


      `;


  document.querySelector("#botonCalcular").addEventListener('click',()=>{

    let inputs = document.querySelectorAll("input");
    let descuento = document.querySelector("#inputState").value;

    console.log(inputs);

    let comprador = {
      nombre:inputs[0].value,
      apellido:inputs[1].value,
      correo:inputs[2].value,
      cantidad:inputs[3].value,
    };
    calcularValor(descuento, comprador.cantidad, comprador);


  });

};

const calcularValor=(desc, cantEnt, comp)=>{

  let resultado = 0;
  let descuento = 0; 
  let numT = document.querySelector("#exampleModalLabel");
  for (let index = 0; index < 8; index++){
      numT.innerHTML+=crearNumTicket();
  }

  let modal = document.querySelector(".modal-body");
  let alert = document.querySelector("#totalCompra");

    if(desc == "estudiante"){
        resultado = (cantEnt * 200)*0.2;
        descuento = (cantEnt * 200)*0.8;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else if(desc == "trainee"){
        resultado = (cantEnt * 200)*0.5;
        descuento = (cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }else{
        resultado = (cantEnt * 200)*0.85;
        descuento = (cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar: $";
        alert.innerHTML+=resultado;
    }

    modal.innerHTML=`
    <p>Nombre: ${comp.nombre}</p>
    <p>Apellido: ${comp.apellido}</p>
    <p>Correo: ${comp.correo}</p>
    <p>Categoria: ${desc}</p>
    <p>Cantidad de Entradas: ${comp.cantidad}</p>
    <p>Descuento: ${descuento}</p>
    <p>Total a pagar: ${resultado}</p>
    `;
}

  const crearNumTicket=()=>{
      return Math.floor(Math.random()*9);
    };

  const limpiar=()=>{

    let alert = document.querySelector("#totalCompra");
    alert.innerHTML="Total a pagar: $";

  }
