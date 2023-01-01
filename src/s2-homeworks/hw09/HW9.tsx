import React from 'react';
import Clock from './Clock';
import s2 from '../../s1-main/App.module.css';

/*
 * 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
 * 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
 * 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW9 = () => {
	return (
		<section className={s2.section} id={'hw9'}>
            <div className={s2.container}>
                <h2 className={s2.hwTitle}>Homework #9</h2>
             </div>

            <div className={s2.wrapper}>
            	<div className={`${s2.hw} ${s2.container}`}>
                	<Clock/>
           		 </div>
			</div>
        </section>
	);
};

export default HW9;
