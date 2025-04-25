import { useState } from "react"
import Button from "./Button"


const From = ({ 
    user, 
    onCancel, 
    isLoading,
    onSubmit}) => {
    const [formData, setFormData] = useState({
        firstname: user?.firstname || '',
        lastname: user?.lastname || '',
        email: user?.email || '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-center">
        {user ? 'Edit User' : 'Add New User'}
      </h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
          disabled={isLoading}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}  disabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" variant="primary"  disabled={isLoading}>
        {isLoading ? 'Processing...' : (user ? 'Update' : 'Save')}
        </Button>
      </div>
    </form>
  )
}

export default From