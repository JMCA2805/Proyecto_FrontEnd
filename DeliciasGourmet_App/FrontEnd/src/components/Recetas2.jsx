import React from 'react'
import Rollitos from "../assets/Rollitos.jpg"
import guacamole from "../assets/guacamole.jpg"
import miniPizza from "../assets/miniPizza.jpeg"
import platoVerde from "../assets/platoVerde.jpg"
import ajvar from "../assets/ajvar.jpg"
import galletas from "../assets/galletas.jpg"
import mesa from "../assets/mesa.jpg"


function Recetas2() {
  return (
    <div>
        <div className='main'>
            <h1 className='Titulo-Recetas'>Snacks en menos de 10 minutos</h1>
        </div>
        <section className='main-recetas2'>
            <div className='recetas-contenedor2'>
                    <img className='alineacion-imagen' src={Rollitos}  alt="Rollitos de jamón y queso"/>
                <div className='Contenidos-B'>
                    <h2 className='nombre-2'>Rollitos de jamón y queso</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Rebanadas de jamón</li>
                            <li>Queso en lonchas</li>
                            <li>Hojas de lechuga</li>
                            <li>Tomate cherry </li>
                            <li>Mayonesa</li>
                        </ul>
                </div>
                <div className='Preparacion'>
                    <h1>Preparacion</h1>
                    <p> Coloca una loncha de jamón sobre una hoja de lechuga, añade una loncha de queso y un tomate cherry cortado por la mitad. 
                        Enrolla todo junto y sujeta con un palillo. Sirve con mayonesa para mojar.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor2'>
                    <img className='alineacion-imagen' src={guacamole}  alt="Nachos con guacamole"/>
                <div className='Contenidos-B'>
                    <h2 className='nombre-2'>Nachos con guacamole</h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Nachos</li>
                            <li>Aguacate maduros</li>
                            <li>Jugo de limon</li>
                            <li>Cilantro picado </li>
                            <li>Sal</li>
                        </ul>
                </div>
                <div className='Preparacion'>
                    <h1>Preparacion</h1>
                    <p>Machaca el aguacate en un tazón hasta obtener una consistencia suave.
                    Agrega el jugo de limón, el cilantro picado y la sal al gusto. Mezcla bien y sirve con los nachos.
                    </p>
                </div>
            </div>

            <div className='recetas-contenedor2'>
                    <img className='alineacion-imagen' src={miniPizza}  alt="Mini pizzas "/>
                <div className='Contenidos-B'>
                    <h2 className='nombre-2'>Mini pizzas </h2>
                    <h3><b>Ingredientes:</b></h3>
                        <ul>
                            <li>Panecillos pequeños</li>
                            <li>Salsa de tomate</li>
                            <li>Queso rallado</li>
                            <li>Pepperoni</li>
                            <li>Oregano</li>
                        </ul>
                </div>
                <div className='Preparacion'>
                    <h1>Preparacion</h1>
                    <p>Corta los panecillos por la mitad y úntales salsa de tomate. Espolvorea queso rallado por encima y añade el pepperoni.
                    Coloca en el horno precalentado a 180°C durante unos minutos hasta que el queso se derrita.
                    </p>
                </div>
            </div>
        </section>

        <div>
    <div class="card-form">
        <p class="heading-form">Quieres que subamos alguna receta? Dinosla Aqui!</p>
            <div className="card-form">
                <div className="input-div">
                    <input type="text" className="input" placeholder="Nombre" />
                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="Apellido" />
                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="Edad" />
                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="Email" />
                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="Mensaje" />
                </div>
                <div className="button-div">
                    <button className="submit">Enviar</button>
                </div>
            </div>
        </div>
    </div>
        
            <div className="container">
                    <div className="card">
                        <span><img src={platoVerde}  alt="Mini pizzas "/></span>
                    </div>
                    <div className="card">
                        <span><img src={ajvar}  alt="Ajvar "/></span>
                    </div>
                    <div className="card">
                        <span><img src={galletas}  alt="Galletas "/></span>
                    </div>
                    <div className="card">
                        <span><img src={mesa}  alt="Mesa "/></span>
                    </div>
            </div>
</div>
  )
}

export default Recetas2;