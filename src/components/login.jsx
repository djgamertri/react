import React, { Component, useRef } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./login.css";

const url_l = "http://localhost/Api/usuario.php";
const cookies = new Cookies();

class Login extends Component {

  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    if (cookies.get("nombre")) {
      window.location.href = "./";
    }
  }

  peticion = async () => {
    await axios
      .get(url_l, {
        params: {
          correo: this.state.form.email,
          pass: this.state.form.password,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var res = response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("imagen", res.imagen, { path: "/" });
          cookies.set("nombre", res.nombre, { path: "/" });
          cookies.set("correo", res.correo, { path: "/" });
          cookies.set("rol", res.rol, { path: "/" });
          alert(`Bienvenido ${res.nombre} ${res.rol}`);
          window.location.href = "../";
        } else {
          alert("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <section className="modal_login">
          <div className="contenedor_modal">
            <a href="#" className="modal_close">
              X
            </a>
            <br />
            <div className="form">
              <h1>Login</h1>
              <input type="email" required name="email" onChange={this.handleChange} id="email" placeholder="Email" />
              <input type="password" required name="password" onChange={this.handleChange} id="pass" placeholder="Password" />
              <input type="submit" name="" onClick={() => this.peticion()} id="boton" value="Login" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
