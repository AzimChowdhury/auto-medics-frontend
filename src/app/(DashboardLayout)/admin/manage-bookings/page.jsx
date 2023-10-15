"use client";
import DeleteModal from "@/components/ui/DeleteModal";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useDeleteBookingsMutation, useGetBookingsQuery } from "@/redux/api/bookingsApi";
import { useDebounced } from "@/redux/hooks";
import { ISOStringToDate, ISOStringToTime } from "@/utils/Date";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";




const ManageBookings = () => {
    const query = {};
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('')


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

    const [deleteBookings] = useDeleteBookingsMutation()
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
                const formattedDate = ISOStringToDate(data)
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

                const formattedTime = ISOStringToTime(data)
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
                        <Button onClick={() => { showModal(); setDeleteId(data) }} type="primary" danger>
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




    const deleteHandler = async (id) => {
        message.loading('deleting . . .')
        try {

            const res = await deleteBookings(id).unwrap()

            if (res?.id) {
                message.success('Booking canceled successfully')
            } else {
                message.error('Bookings cancelation Failed')
            }
        } catch (err) {
            console.error(err.message);
            message.error(err.message)
        }
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        deleteHandler(deleteId)
        setIsModalOpen(false);
        setDeleteId('')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
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


            {/* delete confirmation modal  */}

            <DeleteModal
                title="Are you sure you want to Cancel this booking ? "
                subTitle="Remember once it will be deleted, you will never get it back. "
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />




        </div>
    );
};

export default ManageBookings;