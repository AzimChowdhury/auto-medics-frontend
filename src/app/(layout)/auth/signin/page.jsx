"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../../../assets/login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import './signin.css'
import { submitHandler } from 'react-hook-form'
import Link from "next/link";
import { useUserSigninMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";


const LoginPage = () => {
    const router = useRouter()
    const [userSignin] = useUserSigninMutation()

    const onSubmit = async (data) => {
        try {
            const res = await userSignin(data).unwrap()

            if (res?.accessToken) {
                setToLocalStorage(authKey, res.accessToken)
                message.success('user logged in successfully')
                router.push('/profile')
            } else {
                message.error('failed to log in')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image className="loginImage" src={loginImage} width={500} alt="login image" />
            </Col>
            <Col className="formDiv" sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "25px 0px",
                        textAlign: 'center'
                    }}
                >
                    First login your account
                </h1>
                <div style={{ textAlign: "center", fontSize: "16px", margin: "20px 0px" }}>
                    <p>Does not have an account ?
                        <Link href='/auth/signup'>
                            sign up first
                        </Link>
                    </p>
                </div>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="email" type="text" size="large" label="Email *" />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px",
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password *"
                            />
                        </div>
                        <button className="loginButton" htmlType="submit">
                            Login
                        </button>
                    </Form>

                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;