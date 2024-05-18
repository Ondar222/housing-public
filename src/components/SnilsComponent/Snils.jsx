import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PDFDocument } from 'pdf-lib';



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

const Snils = () => {
  const [user, setUser] = useState()
  const [queue, setQueue] = useState()
  const [snils, setSnils] = useState()
  const navigate = useNavigate()

  const onFinish = (value) => {
    console.log(value);
  };

  const getQueue = async (snils) => {
    const queue = await axios.get(`${import.meta.env.VITE_API}/items/base_queue?fields=*.*.*.*&filter[application][applicant][snils][number]=${snils}`, {
      headers: {
        Authorization: `Bearer ${VITE_APIKEY}`
      }
    })
      .then((res) => {
        setUser(res.data.data[0].application.applicant)
        setQueue(res.data.data[0].queue)
        return res.data
      })
    return queue
  }

  async function createAndDownloadPDF() {
    try {
      // Создаем новый документ PDF
      const pdfDoc = await PDFDocument.create();
      console.log(queue)
      console.log(user)
      const data = await {
        anydata: "anydata",
        fio: `${user?.surname} ${user?.name} ${user?.patronymic}`,
        queue: queue
      }

      // Загружаем PDF-файл с сервера и расшифровываем его
      const existingPdfBytes = await fetch(`${import.meta.env.VITE_PDF_BUILDER}/pdf/${queue}`, {

        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

      })
        .then(res => {
          return res.arrayBuffer()
        });

      console.log(existingPdfBytes)

      const existingPdfDoc = await PDFDocument.load(existingPdfBytes);
      console.log(existingPdfDoc)
      const pages = await pdfDoc.copyPages(existingPdfDoc, existingPdfDoc.getPageIndices());
      pages.forEach(page => pdfDoc.addPage(page));

      // // Добавляем содержимое из ответа сервера
      // const content = 'контент';
      // const page = pdfDoc.getPage(0);
      // page.drawText(content, { x: 50, y: 50 });

      // Получаем байты PDF-файла
      const pdfBytes = await pdfDoc.save();

      // Создаем Blob из байтов PDF-файла
      const pdfBlob = await new Blob([pdfBytes], { type: 'application/pdf' });

      // Создаем ссылку для скачивания файла
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = 'new_pdf_file.pdf';

      // Добавляем ссылку на страницу и запускаем скачивание
      document.body.appendChild(link);
      link.click();

      // Удаляем ссылку из DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error('Ошибка при создании и скачивании PDF:', error);
    }
  }

  const downloadBlobAsFile = async (blob, filename) => {
    // Создаем ссылку на Blob
    const blobUrl = await window.URL.createObjectURL(blob);

    // Создаем элемент ссылки
    const link = await document.createElement('a');
    link.href = await blobUrl;
    link.download = await filename;

    // Добавляем ссылку на страницу и запускаем скачивание
    await document.body.appendChild(link);
    await link.click();

    // Очищаем ссылку и удаляем ее из DOM
    await window.URL.revokeObjectURL(blobUrl);
    await document.body.removeChild(link);
  }

  const downloadDocument = async (id) => {
    const fio = `${user.surname} ${user.name} ${user.patronymic}`
    // await downloadBlobAsFile(new Blob([file], { type: "application/pdf" }))
    await createAndDownloadPDF(queue, fio)
  }

  const [open, setOpen] = React.useState(false)
  return (
    <div className='container_snils'>
      <Form className="form_snils_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="Введите СНИЛС" label="Введите СНИЛС">
              <Input onChange={(e) => setSnils(e.target.value)} />
            </MyFormItem>
          </MyFormItemGroup>
        </MyFormItemGroup>

        <Button onClick={() => {
          getQueue(snils)
          setOpen(true)
        }} type="primary" htmlType="submit"
          className='btn__snils__check'>
          Проверить <RightOutlined />
        </Button>


        <Modal
          title="Очередь"
          cancelText="Отмена"
          okText="Ок"
          open={open}
          onCancel={() => setOpen(false)}
          footer={(_, { OkBtn, CancelBtn }) => {
            return (
              <>
                <Button type="default" onClick={async () => {

                  console.group('payload')
                  console.log({
                    fio: String().concat(user.surname, user.name, user.patronymic),
                    queue: queue
                  })
                  console.groupEnd()

                  await createAndDownloadPDF(queue, `${user.surname} ${user.name} ${user.patronymic}`)
                    .then((res) => {
                      console.log(res)
                    })
                  // downloadDocument(123)
                  setOpen(false)
                }}>
                  Скачать документ
                </Button>
                <CancelBtn />
                <OkBtn />
              </>
            )
          }}
        >
          <div>
            <h4 style={{ textAlign: "left", fontWeight: "bold" }}>Номер вашей очереди: {queue}</h4>
          </div>
        </Modal >
      </Form>
    </div>
  );
};
export default Snils;
