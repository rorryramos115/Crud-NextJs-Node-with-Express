'use client';

import Button from "@/components/Button";
import From from "@/components/From";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import { getUsers, createUser } from "@/libs/api";

const Page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLaoding] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLaoding(true);
        const data = await getUsers();
        console.log("retrieve all users: ", data);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLaoding(false);
      }
    }

    fetchUsers();
  }, [])

  const handleCloseModal = () => {
    setCurrentUser(null)
    setIsOpenModal(false);
  }

  const handleOpenModal = (user = null) => {
    setCurrentUser(user)
    setIsOpenModal(true);
  }

  const handleSubmit = async (userData) => {
    if(currentUser) {
      setUsers(users.map(user => 
        user.user_id === currentUser.user_id ? {...user, ...userData} : user,
      ))
    } else {
      createUser(userData);
      // const newUser = {
      //   user_id: users.length > 0 ? Math.max(...users.map(u => u.user_id)) + 1 : 1,
      //   ...userData
      // }
      // setUsers([...users, newUser])
    }
    handleCloseModal();
  }

  const handleDelete = (user_id) => {
    setUsers(users.filter(user => user.user_id !== user_id));
  }


  return (
   <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className='text-center font-bold text-5xl text-white mb-10'>Crud Next Js/Node with Express</h1>
      <div className="w-full max-w-4xl bg-gray-200 p-8 rounded-lg">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">User Management</h2>

            <Button variant="primary"  onClick={()=> handleOpenModal()}>
              Add User
            </Button>
          </div>

          <Table 
            users={users} 
            onEdit={handleOpenModal} 
            onDelete={handleDelete} 
            isLoading={isLoading}
          />

          <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
            <From 
            user={currentUser}
            onCancel={handleCloseModal}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            />
          </Modal>
      </div>
    </div>
  )
}

export default Page;