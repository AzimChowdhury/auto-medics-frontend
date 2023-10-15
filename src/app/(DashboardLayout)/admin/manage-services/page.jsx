"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useDeleteServiceMutation, useGetServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../dashboard.css'
import DeleteModal from "@/components/ui/DeleteModal";




const ManageServices = () => {
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


    const [deleteService] = useDeleteServiceMutation()

    const { data, isLoading } = useGetServicesQuery({ ...query });

    const services = data;
    const meta = data?.meta;

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            render: function (data) {
                return (
                    <Image className="tableImage" src={data} width={100} height={100} alt="user" />
                )
            },
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            render: function (data) {
                return (
                    <>
                        {
                            data?.length > 25 ?
                                <Tooltip placement="bottom" title={data}>
                                    <p >{data?.slice(0, 25)} . . .</p>
                                </Tooltip>
                                : <p>{data}</p>
                        }
                    </>
                )
            }
        },
        {
            title: "Price",
            dataIndex: "price",
            render: function (data) {
                return (
                    <p>$ {data}</p>
                )
            },
            sorter: true
        },
        {
            title: "Time",
            dataIndex: "time",
            render: function (data) {
                return (
                    <p> {data}/ hr</p>
                )
            },
        },
        {
            title: "Specialist",
            dataIndex: "specialist",
            render: function (data) {
                return (
                    <p>
                        {data?.name}
                    </p>
                );
            },
        },
        {
            title: "Bookings",
            dataIndex: "Bookings",
            sorter: true,
            render: function (data) {
                return (
                    <p>
                        {data.length}
                    </p>
                );
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

            const res = await deleteService(id).unwrap()

            if (res?.id) {
                message.success('Service Deleted successfully')
            } else {
                message.error('Service Delete Failed')
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
            <ActionBar title="Services">
                <Input
                    size="large"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "30%",
                    }}
                />
                <div>
                    <Link href="/admin/manage-services/create">
                        <Button type="primary">Create</Button>
                    </Link>
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
                dataSource={services}
                pageSize={size}
                totalPages={meta?.total}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />


            {/* delete confirmation modal  */}

            <DeleteModal
                title="Are you sure you want to delete the Service ? "
                subTitle="Remember once it will be deleted, you will never get it back. "
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />



        </div>
    );
};

export default ManageServices;