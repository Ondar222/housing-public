import React from "react";
import { Button, Flex } from 'antd';


const NavBars = () => {
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
                    <a className="link_menu" href="/">Переселение</a></li>
                <li className="menuList" >
                    <a className="link_menu" href="/contacts">Контакты</a></li>
            </div>

            <Flex gap="small" wrap="wrap" className="container_button_navbar">
                <Button className="button_navbar" type="primary">Вход</Button>
            </Flex>
        </div>

    )
}

export default NavBars;