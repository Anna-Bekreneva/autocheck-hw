import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                setText('...всё ок)')
                setInfo('')
                // дописать

            })
            .catch((e) => {
                // дописать
                console.log(e)
                if (e.request.status === 500) {
                    setCode('Ошибка 500!')
                    setText('эмитация ошибки на сервере')
                    setImage(error500)
                    setInfo('')
                } else if (e.request.status === 400) {
                    setCode('Ошибка 400!')
                    setText('Ты не отправил success в body вообще!')
                    setImage(error400)
                    setInfo('')
                } else {
                    setCode('Error!')
                    setText('Network Error\n' +
                        'AxiosError')
                    setImage(errorUnknown)
                    setInfo('Error')
                }
            })
    }

    return (
        <section className={s2.section} id={'hw13'}>
            <div className={s2.container}>
                <h2 className={s2.hwTitle}>Homework #13</h2>
            </div>

            <div className={s2.wrapper}>
                <div className={`${s2.hw} ${s2.container}`}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            className={s.button}
                            id={'hw13-send-true'}
                            onClick={send(true)}
                            xType={'secondary'}
                            disabled={info === '...loading'}
                            // дописать

                        >
                            Send true
                        </SuperButton>
                        <SuperButton
                            className={s.button}
                            id={'hw13-send-false'}
                            onClick={send(false)}
                            xType={'secondary'}
                            disabled={info === '...loading'}
                            // дописать

                        >
                            Send false
                        </SuperButton>
                        <SuperButton
                            className={s.button}
                            id={'hw13-send-undefined'}
                            onClick={send(undefined)}
                            xType={'secondary'}
                            disabled={info === '...loading'}
                            // дописать

                        >
                            Send undefined
                        </SuperButton>
                        <SuperButton
                            className={s.button}
                            id={'hw13-send-null'}
                            onClick={send(null)} // имитация запроса на не корректный адрес
                            xType={'secondary'}
                            disabled={info === '...loading'}
                            // дописать

                        >
                            Send null
                        </SuperButton>
                    </div>

                    <div className={s.responseContainer}>
                        <div className={s.imageContainer}>
                            {image && <img src={image} className={s.image} alt="status"/>}
                        </div>

                        <div className={s.textContainer}>
                            <h3 id={'hw13-code'} className={s.code}>
                                {code}
                            </h3>
                            <p id={'hw13-text'} className={s.text}>
                                {text}
                            </p>
                            <div id={'hw13-info'} className={s.info}>
                                {info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HW13
