"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../../../assets/login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import '../signin/signin.css'
import { submitHandler } from 'react-hook-form'
import { useUserSignupMutation } from "@/redux/api/authApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import Link from "next/link";


const SignUp = () => {
    const router = useRouter()
    const [userSignup] = useUserSignupMutation()

    const onSubmit = async (data) => {
        data.role = 'customer'
        try {
            const res = await userSignup(data).unwrap()
            if (res?.accessToken) {
                setToLocalStorage(authKey, res.accessToken)
                message.success('user signed in successfully')
                router.push('/profile')
            } else {
                message.error('failed to sign in, try again')
            }
        } catch (err) {
            console.error(err.message)
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
                    First Create your account
                </h1>
                <div style={{ textAlign: "center", fontSize: "16px", margin: "20px 0px" }}>
                    <p>Already have an account ?
                        <Link href='/auth/signin'>
                            sign in now
                        </Link>
                    </p>
                </div>
                <div>
                    <Form submitHandler={onSubmit}>

                        <div style={{
                            margin: "15px 0px",
                        }}>
                            <FormInput name="email" type="email" size="large" label="Email *" required={true} />
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
                                label=" Password *"
                            />
                        </div>

                        <button className="loginButton" htmlType="submit">
                            Sign Up
                        </button>
                    </Form>

                </div>
            </Col>
        </Row>
    );
};

export default SignUp;