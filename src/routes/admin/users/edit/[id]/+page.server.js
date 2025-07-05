import { fail } from '@sveltejs/kit';

export async function load({ fetch, cookies, params}) {
  const token = cookies.get('token')

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/user/${params.id}`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${token}`
    },
  });

  const result = await response.json();
  const user = result.data;
  return { user };
}

export const actions = {
  update: async ({ request, cookies, params}) => {
    try {
      const token = cookies.get('token')
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/user/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `token=${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, {
          success: false,
          message: result.message || 'Terjadi kesalahan saat menyimpan data',
          errors: result.errors || [],
          values: { name, email }
        });
      }
      return { success: true };
    } catch (error) {
      if (error instanceof Response) {
        throw error;
      }
      console.error('Error:', error);
      return fail(500, {
        success: false,
        message: 'Terjadi kesalahan saat menyimpan data'
      });
    }
  }
};
