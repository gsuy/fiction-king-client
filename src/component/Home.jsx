import '../App.css';
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root')

const Home = () => {
  const history = useHistory();
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '50%',
      bottom                : '50%',
      marginRight           : '50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  const [login,setLogin] = React.useState(false);
  // const [,setIsOpen] = React.useState(false);
  // const [modalIsOpen,setIsOpen] = React.useState(false);
  const [token,setToken] = React.useState(null);
  const [allFiction,setAllFiction] = React.useState(null);
  const [show,setShow] = React.useState(false);
  const checkUser = async () => {
    try {
        const name = document.getElementById("inputName").value.trim()
        if (name !== ""){
          const tokens = await axios.post('http://localhost:8000/login',{userName:name})
          localStorage.setItem("fiction-king-token", tokens.data);
          setToken(tokens)
        }
    } catch (error) {
        console.log(error);
    }   
  }
  const loadFiction = async () => {
    try {
      const fiction = await axios.get('http://localhost:8000/allfiction')
      setAllFiction(fiction.data)
      // setShow(true)
      // console.log(allFiction)
    } catch (error) {
      console.log(error);
    }   
  }

  const showFiction = () => {
    if (allFiction !== null){
      allFiction.map((value, index) => {
        return (
        <div  className="box" >
        <a onClick={console.log("click"+index)}>
          <article className="media">
    
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
            </div>
    
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{value.fname}</strong>
                  <br/>
                  <small>
                  Description : {value.fdes}
                  </small>
                  <small>
                  Category : {value.dcate}
                  </small>
                  <small>
                  Ep : {value.fchap.length}
                  </small>
                </p>
              </div>
            </div>
          </article>
        </a>
    </div>)
      })
    }
  }

  useEffect(() => {
    loadFiction()
  },[]);

  useEffect(() => {
  },[allFiction]);

  useEffect(() => {
    setToken(localStorage.getItem("fiction-king-token"))
    if (token === null || token === 'null'){
      setLogin(true);
    }else{
      setLogin(false);
    }
  },[token]);

  return (
    <div id="myModal" bgcolor="#33ccff">

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1 >Fiction King</h1>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>

              <a className="navbar-item">
                My Fiction
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={()=>{
                    localStorage.setItem("fiction-king-token",null)
                    setToken(null)
                    }} className="button is-danger">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

  {showFiction()}
  
        <Modal
          isOpen={login}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="modal-content"
        >
          <center>
          <div>Login</div><br/>
          <form>
            <input id="inputName" placeholder="User Name" required/><br/><br/>
            <button onClick={checkUser}>login</button>
          </form>
          </center>
        </Modal>
      </div>
  );
}

export default Home;