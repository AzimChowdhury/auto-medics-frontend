"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../../assets/login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import '../signin/signin.css'
import { submitHandler } from 'react-hook-form'


const SignUp = () => {
    const router = useRouter()

    const onSubmit = async (data) => {
        try {
            console.log(data)
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
                <Image src={loginImage} width={500} alt="login image" />
            </Col>
            <Col style={{ margin: '0px 10%' }} sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "25px 0px",
                        textAlign: 'center'
                    }}
                >
                    First Create your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="email" type="email" size="large" label="Email" />
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
                                label=" Password"
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