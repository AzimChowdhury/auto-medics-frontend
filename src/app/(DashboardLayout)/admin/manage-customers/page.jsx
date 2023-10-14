"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useGetCustomersQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../dashboard.css'



const ManageCustomers = () => {
    const query = {};
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(20);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data, isLoading } = useGetCustomersQuery({ ...query });


    const customers = data;
    const meta = data?.meta;

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            render: function (data) {
                return (
                    <>
                        <Image className="tableImage" src={data} alt="user" width={100} height={100} />
                    </>
                );
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: true
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Contact no.",
            dataIndex: "contactNo",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Action",
            dataIndex: "id",
            render: function (data) {
                return (
                    <>
                        <Button onClick={() => console.log(data)} type="primary" danger>
                            <DeleteOutlined />
                        </Button>
                    </>
                );
            },
        },
    ];
    const onPaginationChange = (page, pageSize) => {
        setPage(page);
        setSize(pageSize);
    };
    const onTableChange = (pagination, filter, sorter) => {
        const { order, field } = sorter;
        setSortBy(field);
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };
    return (
        <div>
            <ActionBar title="Customers">
                <Input
                    size="large"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "30%",
                    }}
                />
                <div>

                    {(!!sortBy || !!sortOrder || !!searchTerm) && (
                        <Button
                            style={{ margin: "0px 5px" }}
                            type="primary"
                            onClick={resetFilters}
                        >
                            <ReloadOutlined />
                        </Button>
                    )}
                </div>
            </ActionBar>

            <ReuseableTables
                loading={isLoading}
                columns={columns}
                dataSource={customers}
                pageSize={size}
                totalPages={meta?.total}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default ManageCustomers;