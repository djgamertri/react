import React from 'react'
import "./dashboard.css"

const Dashboard = () => {
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