'use client'
import { Table } from "antd";


const ReuseableTables = ({
    loading = false,
    columns,
    dataSource,
    pageSize = 5,
    totalPages,
    onPaginationChange,
    onTableChange,
    showPagination = true,

}) => {

    const paginationConfig = showPagination ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        onchange: onPaginationChange
    } : false;


    return <Table
        loading={false}
        columns={columns}
        dataSource={dataSource}
        pagination={paginationConfig}
        onChange={onTableChange}
    />
};

export default ReuseableTables;