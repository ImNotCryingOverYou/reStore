import React from 'react'
import './error-indicator.css'


const ErrorIndicator = () => {
    return <div className='error-indicator'>
        <h2>Все в порядке!</h2>
        <p>Это запланированная ошибка. Перезагрузите страницу.</p>
    </div>
};

export default ErrorIndicator;