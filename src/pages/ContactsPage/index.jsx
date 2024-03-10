import React from "react";
// import { Button, Card, Col, Row } from 'antd';
import { Form, Input, Button } from 'antd';
import ContactsBlock from "../../components/Contact/ContactsBlock";
import ActionBlock from "../../components/PerfomAction/ActionBlock";
import AddInformationBlock from "../../components/AddInformation/AddInformationBlock";
const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};


const ContactsPage = () => {
    const onFinish = (value) => {
        console.log(value);
    };

    return (
        <div className="Container_contactsPage">
            <div className="Block_contactsPage">
                <h2 className="Title_CP">Наши контакты</h2>
                <h4 className="Second_Title_CP">Most calendars are designed for teams.
                    Slate is designed for freelancers</h4>
            </div>

            <div>

           <ContactsBlock />
            </div>
            <AddInformationBlock />


        </div>

    )
}

export default ContactsPage;