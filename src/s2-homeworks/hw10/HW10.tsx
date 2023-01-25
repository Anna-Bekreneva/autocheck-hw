import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            //console.log(!isLoading)
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <section className={s2.section} id={'hw10'}>
            <div className={s2.container}>
                <h2 className={s2.hwTitle}>Homework #10</h2>
             </div>

            <div className={s2.wrapper}>
                <div className={`${s2.hw} ${s2.container}`}>
                    {isLoading ? (
                        <div id={'hw10-loading'}>
                            <Loader/>
                        </div>
                    ) : (
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HW10
