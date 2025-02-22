import React from "react";
import { Form, Input, Modal } from "antd";

const Popup = ({ isModalOpen, setIsModalOpen, user, updateUser }) => {
    const [form] = Form.useForm();
    const handleSubmit = values => {
        updateUser(user.id, values);
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={e => form.submit()}
                onCancel={() => setIsModalOpen(false)}
                style={{ top: 100 }}
                styles={{
                    content: {
                        padding: 0,
                        borderRadius: 4,
                    },
                    mask: {
                        background: "rgba(0,0,0,.65)",
                    },
                    body: {
                        padding: "24px",
                    },
                    header: {
                        borderBottom: "1px solid #e8e8e8 ",
                        padding: "16px 24px",
                        margin: 0,
                    },
                    footer: {
                        borderTop: "1px solid #e8e8e8 ",
                        padding: "10px",
                    },
                }}
            >
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="horizontal"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={user}
                >
                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        label="Name"
                        name="name"
                    >
                        <Input type="text" />
                    </Form.Item>

                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        label="Email"
                        name="email"
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        label="Phone"
                        name="phone"
                    >
                        <Input type="tel" />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        label="Website"
                        name="website"
                    >
                        <Input type="url" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Popup;
