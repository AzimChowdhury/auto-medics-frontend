"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useDeleteAdminsMutation, useGetAdminsQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../dashboard.css'
import DeleteModal from "@/components/ui/DeleteModal";




const ManageAdmin = () => {
    const query = {};
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteEmail, setDeleteEmail] = useState('')

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

    const [deleteAdmins] = useDeleteAdminsMutation()

    const { data, isLoading } = useGetAdminsQuery({ ...query });

    const admins = data;
    const meta = data?.meta;

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            render: function (data) {
                return (
                    <>
                        <Image className="tableImage" src={data} width={100} height={100} alt="user" />

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
            dataIndex: "email",
            render: function (data) {
                return (
                    <>
                        <Button onClick={() => { showModal(); setDeleteEmail(data) }} type="primary" danger>
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



    const deleteHandler = async (email) => {
        message.loading('deleting . . .')
        try {

            const res = await deleteAdmins(email).unwrap()
            if (res?.id) {
                message.success('Admin Deleted successfully')
            } else {
                message.error('Admin Delete Failed')
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
        deleteHandler(deleteEmail)
        setIsModalOpen(false);
        setDeleteEmail('')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };





    return (
        <div>
            <ActionBar title="Admins">
                <Input
                    size="large"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "30%",
                    }}
                />
                <div>
                    <Link href="/admin/manage-admin/create">
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
                dataSource={admins}
                pageSize={size}
                totalPages={meta?.total}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />






            {/* delete confirmation modal  */}

            <DeleteModal
                title="Are you sure you want to delete the Admin ? "
                subTitle="Remember once it will be deleted, you will never get it back. "
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />


        </div>
    );
};

export default ManageAdmin;