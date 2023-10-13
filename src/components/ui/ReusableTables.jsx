'use client'
import { Table } from "antd";


const ReuseableTables = ({
    loading = false,
    columns,
    dataSource,
    pageSize = 20,
    totalPages,
    onPaginationChange,
    onTableChange,
    showPagination = true,

}) => {

    const paginationConfig = showPagination ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [20, 50, 100],
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