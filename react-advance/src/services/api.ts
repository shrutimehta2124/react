export const addUserToAPI = async (data: FormData) => {
  try {
    const file = data.get('file') as File;
    let fileBase64 = null;

    if (file) {
      // Convert file to Base64
      fileBase64 = await convertToBase64(file);
    }

    // Convert FormData to JSON
    const jsonData = {
      name: data.get('name'),
      email: data.get('email'),
      file: fileBase64, // Store file as Base64 string
    };

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData), // Send JSON
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    return response.json();
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Helper function to convert file to Base64
const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
