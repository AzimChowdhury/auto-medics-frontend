"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useGetBookingsQuery } from "@/redux/api/bookingsApi";
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


    const { data, isLoading } = useGetBookingsQuery();

    const bookings = data;
    const meta = data?.meta;


    const columns = [
        {
            title: "Service Name",
            dataIndex: "service",
            render: function (data) {
                return (
                    <>
                        <p>{data.name}</p>
                    </>
                )
            }
        },
        {
            title: "Price",
            dataIndex: "service",
            render: function (data) {
                return (
                    <>
                        <p>{data.price}</p>
                    </>
                )
            }
        },
        {
            title: "Customer Name",
            dataIndex: "customer",
            render: function (data) {
                return (
                    <>
                        <p>{data.name}</p>
                    </>
                )
            }
        },
        {
            title: "Customer Email",
            dataIndex: "customer",
            render: function (data) {
                return (
                    <>
                        <p>{data.email}</p>
                    </>
                )
            }
        },
        {
            title: "Booked Date",
            dataIndex: "timeSlot",
            render: function (data) {

                const dateTime = new Date(data);

                const day = dateTime.getDate().toString().padStart(2, '0');
                const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
                const year = dateTime.getFullYear();

                const formattedDate = `${day}-${month}-${year}`;
                return (
                    <>
                        <p>{formattedDate}</p>
                    </>
                )
            }
        },
        {
            title: "Booked Time",
            dataIndex: "timeSlot",
            render: function (data) {
                const dateTime = new Date(data);

                const hours = dateTime.getHours() % 12 || 12; // Convert to 12-hour format
                const minutes = dateTime.getMinutes();
                const ampm = dateTime.getHours() >= 12 ? 'pm' : 'am';

                const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
                return (
                    <>
                        <p>{formattedTime}</p>
                    </>
                )
            }
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