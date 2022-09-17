import axios from 'axios'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react'

import "./dashboard.css"
import AdminNav from "./navbars/AdminNav";


const Dashboard = () => {
    
    const cookies = new Cookies();
    const history = useHistory();
    const url = "http://api-barbershop.000webhostapp.com/dashboard.php";
    const [resultado, setresultado] = useState([])

    useEffect(()=>{
        if (cookies.get("rol") != "Administrador"){
            history.push("/");
        }
        Peticion()
    }, [])

    const Peticion = () => {
        axios.get(url)
        .then((response) => {
            const data = response.data;
            setresultado(data)
        })
    }
    
  return (
    <div>
      <AdminNav />
      <main>
        <div className="content-card" id="content-card">
          {resultado.map((item) => (
            <>
              <div className="card">
                <div>
                  <h1>{item.ContadorU}</h1>
                  <span>Usuarios</span>
                </div>
                <div>
                  <span>
                    <i className="las la-user"></i>
                  </span>
                </div>
              </div>
              <div className="card">
                <div>
                  <h1>{item.ContadorR}</h1>
                  <span>Reservas</span>
                </div>
                <div>
                  <span>
                    <i className="las la-book"></i>
                  </span>
                </div>
              </div>
              <div className="card">
                <div>
                  <h1>{item.Nombre}</h1>
                  <span>Ultimo usuario registrado</span>
                </div>
                <div>
                  <span>
                    <i className="las la-user-check"></i>
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard