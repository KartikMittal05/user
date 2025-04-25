import React, { useState, useEffect } from 'react';
import './UserTable.css';

const API_BASE_URL = 'https://userapp6.onrender.com';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        email: '',
        name: '',
        password: '',
        role: 'Student'
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddUser = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                setNewUser({
                    email: '',
                    name: '',
                    password: '',
                    role: 'Student'
                });
                fetchUsers();
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to add user');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Error adding user. Please try again.');
        }
    };

    const handleDelete = async (email) => {
        try {
            const response = await fetch(`${API_BASE_URL}/deleteuser/${email}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                fetchUsers();
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please try again.');
        }
    };

    const handleEdit = async (user) => {
        try {
            const response = await fetch(`${API_BASE_URL}/edituser/${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                fetchUsers();
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Error updating user. Please try again.');
        }
    };

    return (
        <div className="user-table-container">
            <h2>List of Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>User Email</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>User Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="add-user-row">
                        <td>#</td>
                        <td>
                            <input
                                type="email"
                                placeholder="Enter User Email"
                                name="email"
                                value={newUser.email}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter Name of User"
                                name="name"
                                value={newUser.name}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                value={newUser.password}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <select
                                name="role"
                                value={newUser.role}
                                onChange={handleInputChange}
                            >
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                        </td>
                        <td>
                            <button className="add-btn" onClick={handleAddUser}>Add User</button>
                        </td>
                    </tr>
                    {users.map((user, index) => (
                        <tr key={user.email}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>••••••••</td>
                            <td>{user.role}</td>
                            <td className="action-buttons">
                                <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(user.email)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable; 