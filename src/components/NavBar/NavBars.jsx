import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const closeNav = () => {
    setNav(false)
  }

  useEffect(() => {
    if (nav) {
      document.body.classList.add('no-scroll');
    }
    if (!nav) {
      document.body.classList.remove('no-scroll');
    }
    ;
  }, [nav])

  useEffect(() => {
    if (windowSize.width > 800) {
      setNav(false)
    }
  }, [windowSize.width])

  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <header className="header">
      <div className="container__navbar">
        <div className="box">

          <div className="logo_image">
            <img src="/favicon.png" alt="/" width={60} height={60} />
          </div>

          <ul className={nav ? "menu active" : "menu"} >
            <li style={{
              display: nav ? "block" : "none"
            }}>
              {nav && <img src="/favicon.png" height={70} />}
              <Typography.Title level={3} fontWeight={800} style={{
                whiteSpace: "nowrap"
              }}>ИС жилищных программ</Typography.Title>
            </li>
            <li>
              <Link to="/" onClick={closeNav}>Главная</Link>
            </li>
            <li>
              <Link to="/queue" onClick={closeNav}>Моя очередь</Link>
            </li>
            <li>
              <Link to="/programs" onClick={closeNav}>Программы</Link>
            </li>
            <li>
              <Link to="/resettlements" onClick={closeNav}>Переселение</Link>
            </li>
            <li>
              <Link to="/contacts" onClick={closeNav}>Контакты</Link>
            </li>
          </ul>

          {open && (<div className="container_button_navbar">
            {/* <Button
              onClick={() => setOpen(false)}
              className="button_navbar"
              type="primary"
            >
              Вход
            </Button> */}

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
                    <h4 style={{ fontWeight: "normal" }}>Ваш пароль</h4>
                    <input
                      style={{ width: "200px", height: "44px" }}
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

          </div>)}


          <div onClick={() => setNav(!nav)} className="mobile_btn">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
