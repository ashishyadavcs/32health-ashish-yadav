import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import User from "./components/User";
import "./App.css";

function App() {
    const [users, setusers] = useState([]);
    const fetchUsers = async () => {
        const fetchUserReq = await fetch(`https://jsonplaceholder.typicode.com/users`);
        return await fetchUserReq.json();
    };
    useEffect(() => {
        fetchUsers().then(data => {
            console.log(data);
            setusers(data);
        });
    }, []);
    return (
        <>
            <Row>
                {users.length > 0 &&
                    users.map(user => (
                        <Col sm={12} md={8} lg={6} xs={24}>
                            <User data={user} />
                        </Col>
                    ))}
            </Row>
        </>
    );
}

export default App;
