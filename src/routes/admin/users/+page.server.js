/** @type {import('./$types').PageLoad} */
export async function load({ fetch, cookies }) {

    // Mengirim permintaan dengan token
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`, {
        method: 'GET',
        credentials: 'include'
    });

    const result = await response.json();

    // Assign response data to users
    const users = result.data;

    //return props `users`
    return { users };
}

export const actions = {
    delete: async ({ request, cookies }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/user/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return { success: true };
        } catch (error) {
            console.error('Error:', error);
            return { success: false, error: 'Failed to delete user' }
        }
    }
};
