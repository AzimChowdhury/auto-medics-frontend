import { Spin } from 'antd'
import React from 'react'

function Loading() {
    return (
        <div>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </div>
    )
}

export default Loading
