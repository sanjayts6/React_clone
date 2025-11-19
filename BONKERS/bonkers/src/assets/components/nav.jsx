import React ,{useState}from 'react'
 import '../components/nav.css' 
 import 'bootstrap-icons/font/bootstrap-icons.css';
  import Login from './login.jsx';
   function Nav() { 
    const [showLogin, setShowLogin] = useState(false); 
    return (
       <div className='main'> 
       <div className='logo'> BONKERS <br />CORNER</div>
        <div className='menu'> 
          <div className='wom'>
             <select name="" id="" >
               <option value="">WOMEN</option>
                <option value="">Oversized tshirt</option>
                 <option value="">Joggers</option> 
                 <option value="">Hoodies</option> 
      </select> </div> 
      <div className='ME'>
         <select name="" id="">
           <option value="">MEN</option>
            <option value="">Jeans</option>
             <option value="">Basics</option> 
             <option value="">Jackets</option> 
             </select> </div> 
             <div className='acces'>
               <select name="" id="">
                 <option value="">ACCESSORIES</option>
                  <option value="">Caps</option> 
                  <option value="">Rugs</option> 
                  </select> </div> 
                  </div> <div className='icons'> 
                    <button onClick={() => setShowLogin(true)}><i class="bi bi-person-lines-fill">
                      </i> </button> 
                       <button><i class="bi bi-search">
                        </i></button> <button><i class="bi bi-bag">
                          </i></button> </div> 
                          {showLogin && <Login show={showLogin} setShow={setShowLogin} />}
                          <div className='shop'> 
                            <h2>NEW IN</h2> <button>SHOP NOW</button> 
                            </div>
                             </div> 
                             ) }
             export default Nav 

