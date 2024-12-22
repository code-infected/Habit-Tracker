const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const getSuggestions = async () => {
  const response = await fetch(`${API_URL}/suggestions`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch suggestions');
  }
  return response.json();
};

