import React, { useEffect, useState } from 'react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  time: string;
}

const AdminDashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          setContacts([]);
          setError('Failed to fetch contacts');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch contacts');
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/contacts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts(contacts.filter(c => c._id !== id));
      } else {
        alert('Failed to delete contact.');
      }
    } catch {
      alert('Failed to delete contact.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Admin Dashboard</h1>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Contact Form Submissions</h2>
        {loading ? (
          <div className="text-center text-blue-700">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-gray-500">No submissions yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact._id} className="border-t hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-2 font-semibold text-blue-900">{contact.name}</td>
                    <td className="px-4 py-2 text-blue-800">{contact.email}</td>
                    <td className="px-4 py-2">{contact.phone}</td>
                    <td className="px-4 py-2">{contact.company}</td>
                    <td className="px-4 py-2">{contact.service}</td>
                    <td className="px-4 py-2 text-gray-700 max-w-xs break-words">{contact.message}</td>
                    <td className="px-4 py-2 text-xs text-gray-500">{new Date(contact.time).toLocaleString()}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
