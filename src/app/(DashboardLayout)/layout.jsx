'use client'
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { getUserInfo } from "@/helpers/auth/authHelper";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from 'next/dynamic';

const NoSSRSidebar = dynamic(() => import('../../components/ui/Sidebar'), { ssr: false });




const DashboardLayout = ({ children }) => {
    const user = getUserInfo()
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push('/auth/signin')
        }
    }, [router, user])

    return <Layout hasSider>
        <NoSSRSidebar />
        <Contents>{children}</Contents>
    </Layout>
};

export default DashboardLayout;