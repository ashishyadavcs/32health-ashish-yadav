import {
    DeleteFilled,
    EditOutlined,
    GlobalOutlined,
    HeartFilled,
    HeartOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import { Card, ConfigProvider, Flex, List } from "antd";
import Item from "antd/es/list/Item";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import Popup from "./Popup";

const User = ({ data, deleteUser, updateUser, markFavorite }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { name, email, username, phone, website, id, favorite = false } = data;
    const listData = [
        {
            icon: <MailOutlined />,
            text: email,
        },
        {
            icon: <PhoneOutlined />,
            text: phone,
        },
        {
            icon: <GlobalOutlined />,
            text: website.includes("http") ? website : `http://${website}`,
        },
    ];
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        actionsBg: "#fafafa",
                        actionsLiMargin: 13,
                        borderRadiusLG: 2,
                        colorBorderSecondary: "#e8e8e8",
                    },

                    List: {
                        itemPadding: 2,
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
                    favorite ? (
                        <HeartFilled
                            onClick={e => markFavorite(id)}
                            style={{ fontSize: "20px", color: "#ff0000" }}
                        />
                    ) : (
                        <HeartOutlined
                            onClick={e => markFavorite(id)}
                            style={{ fontSize: "20px", color: "#ff0000" }}
                        />
                    ),
                    <EditOutlined
                        style={{ fontSize: "18px" }}
                        onClick={e => setIsModalOpen(true)}
                    />,
                    <DeleteFilled style={{ fontSize: "18px" }} onClick={e => deleteUser(id)} />,
                ]}
            >
                <Title level={3}>{name}</Title>
                <List
                    dataSource={listData}
                    bordered={false}
                    renderItem={item => (
                        <Item>
                            <Flex style={{ gap: "10px" }} align="center">
                                {item.icon}
                                {item.text}
                            </Flex>
                        </Item>
                    )}
                />
            </Card>
            <Popup
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                user={data}
                updateUser={updateUser}
            />
        </ConfigProvider>
    );
};

export default User;
