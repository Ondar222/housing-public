import React from "react";
import { Button, Flex } from 'antd';


const NavBars = () => {
    const [open, setOpen] = React.useState(false)
    return (
        //отдельно
        <div className="container_navbar">
            <div className="block_container_navbar">
                <img src="./public/img/merya-logo.svg" width={31} height={31}></img>
                <h1 className="title_navbar">
                    ИС Жилищных программ
                </h1>
            </div>

            <div className="menu">
                <li className="menuList">
                    <a className="link_menu" href="/">Главная</a>
                </li>
                <li className="menuList" >
                    <a className="link_menu" href="/turn">Моя очередь</a>
                </li>
                <li className="menuList">
                    <a className="link_menu" href="/programs">Программы</a>
                </li>
                <li className="menuList">
                    <a className="link_menu" href="/resettlements">Переселение</a></li>
                <li className="menuList" >
                    <a className="link_menu" href="/contacts">Контакты</a></li>
            </div>

            <Flex gap="small" wrap="wrap" className="container_button_navbar">
                <Button onClick={() => setOpen(true)} className="button_navbar" type="primary">Вход</Button>
                {
                    open && (
                        <div className="overlay">
                            <div className="modal">
                                <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                                    <title />
                                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                                </svg>
                                <div style={{ display: 'flex', flexDirection: "column", gap: "20px" }}>
                                    <h4 style={{ textAlign: "left", fontWeight: "bold" }}>Введите логин и пароль</h4>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
                                        <h4 style={{ fontWeight: "normal" }}>Ваш логин</h4>
                                        <input placeholder="Логин" style={{ width: "200px", height: "44px" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "40px", }}>
                                        <h4 style={{ fontWeight: "normal" }}>Ваш пароль</h4>
                                        <input style={{ width: "200px", height: "44px" }} placeholder="Пароль" />
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px"}}>
                                        <Button type="default" onClick={() => setOpen(false)}>
                                            Отмена
                                        </Button>
                                        <Button type="primary">
                                            Войти
                                        </Button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                }
            </Flex>
        </div>

    )
}

export default NavBars;