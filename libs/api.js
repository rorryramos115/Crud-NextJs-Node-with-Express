const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        
        if(!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        return data.data;
        
    } catch (error) {
        console.log("Failed to connect to API: ", error);
    }
}

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to add user');
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("Failed to connect to API: ", error);
    }
}


export const updateUser = async (userData) => {
   try {
    const response = await fetch(`${API_URL}update/${userData._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
     });

     if(!response.ok) {
        throw new Error('Failed to add user');
     }

     const data = await response.json();
     return data;

   } catch (error) {
    console.log("Failed to connect to API: ", error);
   }
}


export const deleteUser = async ( _id ) => {
    try {
        const response = await fetch(`${API_URL}delete/${_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if ( !response.ok ) {
            throw new Error('Failed to delete user.')
        }
    
        return response.json();

    } catch (error) {
        console.log("Failed to connect to API: ", error);
    }
}