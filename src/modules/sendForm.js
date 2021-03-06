const sendForm = ({formId, someElem = []}) => {

    // Получаем элементы со страницы
    const form = document.getElementById(formId);
    const loader = document.querySelector('.loader-box');

    // Создаем элемент и переменные для вывода сообщений
    const statusBlock = document.createElement('div');
    const errorText = 'Возникла ошибка';
    const successText = 'Спасибо! С Вами скоро свяжутся.';

    // Отправка данных на адрес
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    // Проверка данных перед отправкой
    const validate = (list) => {
        // Сохраняем регулярные выражения для каждого инпута
       const regexArray = {
            user_name: /[а-яА-я\-\ ]/g,
            user_email: /[a-zA-Z0-9\@\-\_\.\!\~\*\']/g,
            user_phone: /[\d\()\-]/g,
            user_message: /[^\d\W]/g
        }

        // Создаем объект для хранения ошибок
        let errors = {};

        // Перебираем инпуты и проверяем их на ошибки
        list.forEach(input => {

            if (regexArray[input.name].test(input.value) === false){
                errors[input.name] = false;
            } else {
                errors[input.name] = true;
            }
        })
        return errors;
    }
    
    // Действия при отправке данных
    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        // Создаем экземпляр FormData
        const formData = new FormData(form);
        // Создаем объект для хранения значений из формы
        const formBody = {};

        // Добавляем блок для вывода сообщений на страницы
        form.append(statusBlock);
        // Показываем лоадер
        loader.style.display = 'flex';

        // Записываем в объект данные из формы
        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        // Записываем в объект дополнительные данные
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                if (element.textContent !== '0') {
                    formBody[elem.id] = element.textContent;
                }  
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        // Сохраняем объект с проверкой инпутов в переменную
        let checkForm = validate(formElements);

        // Проверяем, если в объекте нет ошибок
        if (!Object.values(checkForm).includes(false) ) {

            // То отправляем данные и показываем сообщения в зависимости от статуса отправки
            sendData(formBody).then(data => {
                formElements.forEach(input => {
                    loader.style.display = 'none';
                    input.value = '';
                    statusBlock.textContent = successText;
                })
            }).catch(error => {
                loader.style.display = 'none';
                statusBlock.textContent = errorText;
            })
        } else {
            loader.style.display = 'none';
            statusBlock.textContent = errorText;
            
            for (let key in checkForm) {
                if (checkForm[key] === false){
                    form.querySelector('input[name="'+key+'"]').style.border = '1px solid red';
                }
            }
        }
    }

    // Используем try/catch, чтобы при ошибках программа запустилась
    try{
        // Проверяем наличие элемента на странице
        if (!form) {
            throw new Error('Отсутствует элемент формы!')
        }
        // Вешаем обработчик на форму
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch(error) {
        console.log(error.message)
    }
    
}

export default sendForm;