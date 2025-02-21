import {
    DeleteFilled,
    EditOutlined,
    GlobalOutlined,
    HeartFilled,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import { Button, Card, ConfigProvider, Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const User = ({ data }) => {
    const { name, email, username, phone, website } = data;
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        actionsBg: "#fafafa",
                    },
                },
            }}
        >
            <Card
                className="user"
                cover={
                    <img
                        height={200}
                        width={200}
                        alt={name}
                        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                    />
                }
                actions={[
                    <HeartFilled width={20} height={20} />,
                    <EditOutlined width={18} height={18} />,
                    <DeleteFilled width={18} height={18} />,
                ]}
            >
                <Title level={3}>{name}</Title>
                <Flex gap="small" align="center">
                    <MailOutlined />
                    {email}
                </Flex>
                <Flex gap="small" align="center">
                    <PhoneOutlined />
                    {phone}
                </Flex>
                <Flex gap="small" align="center">
                    <GlobalOutlined />
                    {website}
                </Flex>
            </Card>
        </ConfigProvider>
    );
};

export default User;
