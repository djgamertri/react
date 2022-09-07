import React, {useEffect} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const Perfil = () => {

  return (
    <>
    <div className="user" id="user">
      <img className="img_user" src={cookies.get("imagen")} alt=""/>
      <div>
          <h4>{cookies.get("nombre")}</h4>
          <small>{cookies.get("rol")}</small>
      </div>
    </div>
    </>
  )
}

export default Perfil