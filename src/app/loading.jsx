import LoadingSpinner from '@/components/ui/loading'
import { Spin } from 'antd'
import React from 'react'

function Loading() {
    return (
        <LoadingSpinner />
        // <div style={{ marginTop: '15%' }}>
        //     <Spin tip="Loading" size="large">
        //         <div className="content" />
        //     </Spin>
        // </div>
    )
}

export default Loading
