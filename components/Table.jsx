import Button from "./Button";

const Table = ({ users, onEdit, onDelete, isLoading}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                {isLoading ? 'Loading users...' : 'No users found'}
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user._id || `fallback-${index}`}>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user._id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.firstname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onEdit(user)}
                    disabled={isLoading}
                  >
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="danger" 
                    onClick={() => onDelete(user._id)}
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;