import React, { useState, useEffect } from 'react';
import { userService, userServiceDestroy } from '@/service/user-service';
import { userType } from '@/service/data-types/user-type';
import Layout from '@/components/organisms/Layout';

const User = () => {
    const [users, setUsers] = useState<userType[]>([]);

    const getUsers = async () => {
        const response = await userService();
        if (!response.error) {
            setUsers(response.data);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const response = await userServiceDestroy(id);
            if (!response.error) {
                alert('User deleted successfully!');
                getUsers(); // Refresh the list after deletion
            } else {
                alert('Failed to delete user');
            }
        } catch (error) {
            alert((error as Error).message);
        }
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Data Users</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => user?.id && handleDelete(user.id.toString())}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default User;
