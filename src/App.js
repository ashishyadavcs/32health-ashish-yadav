import { Col, message, Row } from "antd";
import { useEffect, useState } from "react";
import User from "./components/User";
import Loader from "./components/Loader";
import "./styles/App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();
    const fetchUsers = async () => {
        try {
            const fetchUserReq = await fetch(`https://jsonplaceholder.typicode.com/users`);
            return await fetchUserReq.json();
        } catch (err) {
            messageApi.error("error fetching users");
            return [];
        }
    };

    const deleteUser = id => {
        if (window.confirm("are you sure to delete?") == true) {
            const username = users.find(user => user.id == id).name;
            setUsers(prev => prev.filter(user => user.id !== id));
            messageApi.success(`User ${username} deleted`);
        }
    };

    const updateUser = (id, updateddata) => {
        setUsers(prev => prev.map(user => (user.id == id ? { ...user, ...updateddata } : user)));
    };
    const markFavorite = id => {
        setUsers(prev =>
            prev.map(user => (user.id == id ? { ...user, favorite: !user.favorite } : user))
        );
    };

    useEffect(() => {
        fetchUsers().then(data => {
            setisLoading(false);
            setUsers(data);
        });
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {contextHolder}
            <Row>
                {users.map((user, i) => (
                    <Col sm={12} md={8} lg={6} xs={24}>
                        <User
                            key={user.id}
                            data={user}
                            deleteUser={deleteUser}
                            updateUser={updateUser}
                            markFavorite={markFavorite}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default App;
