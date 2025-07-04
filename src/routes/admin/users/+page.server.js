/** @type {import('./$types').PageLoad} */
export async function load({ fetch, cookies }) {
    const token = cookies.get("token")
    console.log(token);

    // Mengirim permintaan dengan token
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`, {
        method: 'GET',
        headers: {
            Cookie: `token=${token}`
        }
    });

    const result = await response.json();
    console.log("respon result", result);

    // Assign response data to users
    const users = result.data;

    //return props `users`
    return { users };
}

export const actions = {
    delete: async ({ request, cookies }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        const token = cookies.get("token")

        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `token=${token}`,
                }
            });
            return { success: true };
        } catch (error) {
            console.error('Error:', error);
            return { success: false, error: 'Failed to delete user' }
        }
    }
};
