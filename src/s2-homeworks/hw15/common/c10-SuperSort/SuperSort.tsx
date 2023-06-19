import React from 'react'
import iconUp from './../../images/arrow-up.svg'
import iconDown from './../../images/arrow-down.svg'
import iconDouble from './../../images/arrow-double.svg'

// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon = iconUp
const noneIcon = iconDouble

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент,
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else if (sort === "") {
        return down
    } else {
        return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
