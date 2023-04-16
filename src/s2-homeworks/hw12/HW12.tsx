import React, {useEffect} from 'react';
import s from './HW12.module.css';
import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeId} from './bll/themeReducer';
import {AppStoreType} from '../hw10/bll/store';

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const dispatch = useDispatch()
    const themeId = Number(useSelector<AppStoreType, number>(state => state.theme.themeId))
    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(Number(id)))
    }
    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <section className={s2.section} id={'hw12'}>
            <div className={s2.container}>
                <h2 className={s2.hwTitle}>Homework #12</h2>
             </div>

            <div className={s2.wrapper}>
                <div className={`${s2.hw} ${s2.container}`}>
                    <div className={s.box}>
                        <span className={s.title}>Выберите тему</span>
                        <SuperSelect
                            onChangeOption={change}
                            options={themes}
                            id={'hw12-select-theme'}
                            className={s.select}
                            // сделать переключение тем
                        />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default HW12
