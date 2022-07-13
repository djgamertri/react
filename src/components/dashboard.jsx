import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import "./dashboard.css"

const cookies = new Cookies();

const Dashboard = () => {
    
    useEffect(()=>{
        if (cookies.get("rol") != "Administrador"){
            history.push("/");
        }
    }, [])
    
    const history = useHistory();

  return (
      <div>
          <main>
           <div className="content-card" id="content-card">
                <div className="card">
                    <div>
                        <h1>12</h1>
                        <span>Usuarios</span>
                    </div>
                    <div>
                        <span><i className="las la-user"></i></span>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>30</h1>
                        <span>Reservas</span>
                    </div>
                    <div>
                        <span><i className="las la-book"></i></span>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>Erick Rodriguez</h1>
                        <span>Ultimo usuario registrado</span>
                    </div>
                    <div>
                        <span><i className="las la-user-check"></i></span>
                    </div>
                </div>
            </div>
            </main>
      </div>
  )
}

export default Dashboard