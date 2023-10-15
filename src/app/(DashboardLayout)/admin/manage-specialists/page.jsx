"use client";
import ReuseableTables from "@/components/ui/ReusableTables";
import ActionBar from "@/components/ui/actionBar";
import { useDeleteSpecialistMutation, useGetSpecialistsQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../dashboard.css'
import DeleteModal from "@/components/ui/DeleteModal";



const ManageSpecialists = () => {
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

    const [deleteSpecialist] = useDeleteSpecialistMutation()
    const { data, isLoading } = useGetSpecialistsQuery({ ...query });

    const specialists = data;
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
            title: "Skills",
            dataIndex: "skill",
        },
        {
            title: "Provided Services",
            dataIndex: "Services",
            render: function (data) {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: "20px" }}>{data?.length} - </div>
                        <div>
                            {data?.map(service => <p key={service?.id}>{service?.name}</p>)}
                        </div>
                    </div>
                )
            }
        },
        {
            title: "Contact no.",
            dataIndex: "contactNo",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        // {
        //     title: "Action",
        //     dataIndex: "id",
        //     render: function (data) {
        //         return (
        //             <>
        //                 <Button onClick={() => { showModal(); setDeleteId(data) }} type="primary" danger>
        //                     <DeleteOutlined />
        //                 </Button>
        //             </>
        //         );
        //     },
        // },
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
            const res = await deleteSpecialist(id).unwrap()
            console.log(res)
            if (res?.message) {
                message.success(res?.message)
            } else {
                message.error('specialist Delete Failed')
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
            <ActionBar title="Specialists">
                <Input
                    size="large"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "30%",
                    }}
                />
                <div>
                    <Link href="/admin/manage-specialists/create">
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
                dataSource={specialists}
                pageSize={size}
                totalPages={meta?.total}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />


            {/* delete confirmation modal  */}

            <DeleteModal
                title="Are you sure you want to delete the Specialist ? "
                subTitle="Remember once it will be deleted, you will never get it back. "
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />



        </div>
    );
};

export default ManageSpecialists;