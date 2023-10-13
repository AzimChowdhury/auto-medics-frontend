"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";




const ManageBookings = () => {
    const query = {};
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
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


    // const { data, isLoading } = useStudentsQuery({ ...query });
    const data = []
    const isLoading = false

    const bookings = data?.bookings;
    const meta = data?.meta;

    const columns = [
        {
            title: "Service Name",
            dataIndex: "service name",
        },
        {
            title: "Customer Name",
            dataIndex: "Customer Name",
        },
        {
            title: "Customer Email",
            dataIndex: "customer email",
        },
        {
            title: "Specialist Name",
            dataIndex: "specialist name",
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
            <ActionBar title="Bookings">
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
                dataSource={bookings}
                pageSize={size}
                totalPages={meta?.total}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default ManageBookings;