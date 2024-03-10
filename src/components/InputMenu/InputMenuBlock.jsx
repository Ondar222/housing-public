
// import React, { useRef, useState } from 'react';
// import { Button, Input, Space, Switch } from 'antd';
// const InputMenuBlock = () => {
//   const inputRef = useRef(null);
//   const [input, setInput] = useState(true);


//   const sharedProps = {
//     style: {
//       width: '100%',
//     },
//     defaultValue: 'Ant Design love you!',
//     ref: inputRef,
//   };
//   return (
//     <Space
//       direction="vertical"
//       style={{
//         width: '100%',
//       }}
//     >
//       <Space wrap >
        
//         <Button style={{border: 'none'}}
//           onClick={() => {
//             inputRef.current.focus({
//               cursor: 'start',
//             });
//           }}
//         >
//           Описание
//         </Button>
//         <Button style={{border: 'none'}}
//           onClick={() => {
//             inputRef.current.focus({
//               cursor: 'end',
//             });
//           }}
//         >
//           Требования к участникам
//         </Button>
//         <Button style={{border: 'none'}}
//           onClick={() => {
//             inputRef.current.focus({
//               cursor: 'all',
//             });
//           }}
//         >
//           Требования к недвижимости
//         </Button>

//         <Switch
//           checked={input}
//           checkedChildren="Input"
//           unCheckedChildren="TextArea"
//           onChange={() => {
//             setInput(!input);
//           }}
//         />
//       </Space>
//       <br />
//       {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
//     </Space>
//   );
// };
// export default InputMenuBlock;