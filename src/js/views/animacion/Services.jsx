import React from "react";
import "./services.scss"
import { motion } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
};

export const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>
                Somos la solucion a
                <br/> su problema
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                {/* <img src="/people.webp" alt="" /> */}
                <h1><motion.b whileHover={{ color: "cyan" }}>Ideas</motion.b> Unicas</h1>
            </div>
            <div className="title">
                <h1>Para Su <motion.b whileHover={{ color: "cyan" }}>Negocio</motion.b>.</h1>
                <button>QUE HACEMOS?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                <h2>¿Quiénes somos?</h2>
                <p>Somos un grupo de desarrolladores Full-Stack que creó SERØ para solventar problemas de organización de base de datos.
                Esta Web App se especializa en automatizar todo aquello relacionado a la información importante que contenga una empresa, una firma de abogados, o cualquier otra entidad que necesite simplicidad en su sistema.
                SERØ está diseñado para ser fácil de usar, incluso para usuarios sin conocimientos técnicos. La aplicación cuenta con una interfaz intuitiva que permite crear y gestionar bases de datos sin esfuerzo.
                </p>
                <button>Ir</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                <h2>Servicios</h2>
                <ul>
                    <li>Organizar sus datos.</li>
                    <li>Crear una base de datos personalizada.</li>
                    <li>Crear formularios para rellenar su base de datos.</li>
                    <li>Ver un resumen de sus datos.</li>
                    <li>Tener un listado de clientes.</li>
                    <li>Tener control sobre un historial de reportes</li>
                    <li>Administrar sus pagos.</li>
                    <li>Pertenecer a una Organización.</li>
                </ul>
                <button>Ir</button>
            </motion.div>
            {/* <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quas ab provident, omnis voluptatem autem error distinctio odio minus sequi voluptatibus blanditiis corrupti assumenda ducimus optio vitae unde similique.</p>
                <button>Ir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quas ab provident, omnis voluptatem autem error distinctio odio minus sequi voluptatibus blanditiis corrupti assumenda ducimus optio vitae unde similique.</p>
                <button>Ir</button>
            </motion.div> */}
        </motion.div>
    </motion.div>
  )
}

export default Services
