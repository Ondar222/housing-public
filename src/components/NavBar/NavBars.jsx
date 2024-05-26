import React, { useState } from "react";
import { Button } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container__navbar">
        <div className="box">
          <div className="logo_image">
            <img src="/img/merya-logo.svg" alt="/" width={41} height={41} />
          </div>
          <ul className={nav ? "menu active" : "menu"}>
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
            )}
          </ul>

          <div onClick={() => setNav(!nav)} className="mobile_btn">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
