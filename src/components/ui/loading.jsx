import React from 'react'
import './loading.css'

function LoadingSpinner() {
    return (
        <div style={{ margin: "20% 20%" }}>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingSpinner
