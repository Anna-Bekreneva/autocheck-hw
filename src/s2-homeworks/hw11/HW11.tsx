import React, {useState} from 'react';
import s from './HW11.module.css';
import './slider.css';
import s2 from '../../s1-main/App.module.css';
import {restoreState} from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (typeof value === 'number') {
            setValue1(value)
        } else {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <section className={s2.section} id={'hw10'}>
            <div className={s2.container}>
                <h2 className={s2.hwTitle}>Homework #11</h2>
             </div>
            <div className={s2.wrapper}>
                <div className={`${s2.hw} ${s2.container}`}>
                    <div className={s.container}>
                        <div className={s.wrapper}>
                            <span id={'hw11-value'} className={s.number}>{value1}</span>
                            <SuperRange
                                id={'hw11-single-slider'}
                                onChangeCommitted={change}
                                // сделать так чтоб value1 изменялось // пишет студент

                            />
                        </div>
                        <div className={s.wrapper}>
                            <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                            <SuperRange
                                onChangeCommitted={change}
                                id={'hw11-double-slider'}
                                // сделать так чтоб value1/2 изменялось // пишет студент

                            />
                            <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                        </div>
                    </div>
            </div>
            </div>
        </section>


    )
}

export default HW11
