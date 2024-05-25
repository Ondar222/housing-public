import React, { useState } from 'react';
import { Button } from 'antd';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container__navbar">
        <div className="box">
          <div className="logo_image">
            <img
              src="/img/merya-logo.svg"
              alt="/"
              width={31}
              height={31}
            />
          </div>

          <ul className={nav ? 'menu active' : 'menu'}>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/queue">Моя очередь</a>
            </li>
            <li>
              <a href="/programs">Программы</a>
            </li>
            <li>
              <a href="/resettlements">Переселение</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>

          <ul className="container_button_navbar">
            <Button
              onClick={() => setOpen(false)}
              className="button_navbar"
              type="primary"
            >
              Вход
            </Button>
            {open && (
              <div className="overlay">
                <div className="modal">
                  <svg
                    onClick={() => setOpen(false)}
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                  >
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                  </svg>
                  <div className="form_modal">
                    <h4>Введите логин и пароль</h4>
                    <div className="login_class">
                      <h4>Ваш логин</h4>
                      <input className="input_login" placeholder="Логин" />
                    </div>
                    <div className="password_class">
                      <h4 style={{ fontWeight: 'normal' }}>Ваш пароль</h4>
                      <input
                        style={{ width: '200px', height: '44px' }}
                        placeholder="Пароль"
                      />
                    </div>
                    <div className="bottom_buttons_container">
                      <Button type="default" onClick={() => setOpen(false)}>
                        Отмена
                      </Button>
                      <Button type="primary">Войти</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ul>

          <div onClick={() => setNav(!nav)} className="mobile_btn">
            {nav ? <AiOutlineClose size={31} /> : <AiOutlineMenu size={31} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;




// import React, { useState } from "react";
// // import style from "./Navbars.module.css";
// // import Logo from "../../../public/img/merya-logo.svg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Button } from "antd";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [open, setOpen] = React.useState(false);
//   return (
//     <header className="header">
//       <div className="container__navbar">
//         <div className="box">
//           <div className="logo_image">
//             <img
//               src="../../../public/img/merya-logo.svg"
//               alt="/"
//               width={51}
//               height={51}
//             />
//           </div>

//           <div>
//             <ul className={nav ? ["menu", "active"].join(" ") : ["menu"]}>
//               <li>
//                 <a href="/">Главная</a>
//               </li>
//               <li>
//                 <a href="/">Моя очередь</a>
//               </li>
//               <li>
//                 <a href="/">Программы</a>
//               </li>
//               <li>
//                 <a href="/">Переселение</a>
//               </li>
//               <li>
//                 <a href="/">Контакты</a>
//               </li>
//             </ul>
//           </div>
//           <ul className="container_button_navbar">
//             <Button
//               onClick={() => setOpen(false)}
//               className="button_navbar"
//               type="primary"
//             >
//               Вход
//             </Button>
//             {open && (
//               <div className="overlay">
//                 <div className="modal">
//                   <svg
//                     onClick={() => setOpen(false)}
//                     height="200"
//                     viewBox="0 0 200 200"
//                     width="200"
//                   >
//                     <title />
//                     <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//                   </svg>
//                   <div className="form_modal">
//                     <h4>Введите логин и пароль</h4>
//                     <div className="login_class">
//                       <h4>Ваш логин</h4>
//                       <input className="input_login" placeholder="Логин" />
//                     </div>
//                     <div className="password_class">
//                       <h4 style={{ fontWeight: "normal" }}>Ваш пароль</h4>
//                       <input
//                         style={{ width: "200px", height: "44px" }}
//                         placeholder="Пароль"
//                       />
//                     </div>
//                     <div className="bottom_buttons_container">
//                       <Button type="default" onClick={() => setOpen(false)}>
//                         Отмена
//                       </Button>
//                       <Button type="primary">Войти</Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </ul>

//           <div onClick={() => setNav(!nav)} className="mobile_btn">
//             {nav ? <AiOutlineClose size={31} /> : <AiOutlineMenu size={31} />}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Button, Flex } from "antd";

// const NavBars = () => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     //отдельно
//     <div className="container_navbar">
//       <div className="block_container_navbar">
//         <img src="/img/merya-logo.svg" width={51} height={51}></img>
//       </div>

//       <div className="menu">
//         <div className="menu__container">
//           <li className="menuList">
//             <a className="link_menu" href="/">
//               Главная
//             </a>
//           </li>
//           <li className="menuList">
//             <a className="link_menu" href="/queue">
//               Моя очередь
//             </a>
//           </li>
//           <li className="menuList">
//             <a className="link_menu" href="/programs">
//               Программы
//             </a>
//           </li>
//           <li className="menuList">
//             <a className="link_menu" href="/resettlements">
//               Переселение
//             </a>
//           </li>
//           <li className="menuList">
//             <a className="link_menu" href="/contacts">
//               Контакты
//             </a>
//           </li>
//         </div>
//       </div>

//       <Flex gap="small" wrap="wrap" className="container_button_navbar">
//         <Button
//           onClick={() => setOpen(false)}
//           className="button_navbar"
//           type="primary"
//         >
//           <a href="/">Вход</a>
//         </Button>
//         {open && (
//           <div className="overlay">
//             <div className="modal">
//               <svg
//                 onClick={() => setOpen(false)}
//                 height="200"
//                 viewBox="0 0 200 200"
//                 width="200"
//               >
//                 <title />
//                 <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//               </svg>
//               <div className="form_modal">
//                 <h4>Введите логин и пароль</h4>
//                 <div className="login_class">
//                   <h4>Ваш логин</h4>
//                   <input className="input_login" placeholder="Логин" />
//                 </div>
//                 <div className="password_class">
//                   <h4 style={{ fontWeight: "normal" }}>Ваш пароль</h4>
//                   <input
//                     style={{ width: "200px", height: "44px" }}
//                     placeholder="Пароль"
//                   />
//                 </div>
//                 <div className="bottom_buttons_container">
//                   <Button type="default" onClick={() => setOpen(false)}>
//                     Отмена
//                   </Button>
//                   <Button type="primary">Войти</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </Flex>
//     </div>
//   );
// };

// export default NavBars;
