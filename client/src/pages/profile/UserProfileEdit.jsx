import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserProfileEdit = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const params = useParams();
  const { user, API } = useAuth();

  useEffect(() => {
    getSingleUserData();
  }, []);

  const getSingleUserData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user/${params.id}`, {
        method: 'GET',
      });
      const userData = await response.json();
      setData(userData);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/api/auth/user/update/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Update successful');
        navigate('/Profile');
      } else {
        toast.error('Update failed');
      }
    } catch (error) {
      console.log('Error updating user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className='mx-3'>
      <div className='container py-4 mt-5 mb-5 rounded-5 bg-white'  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  name='username'
                  value={data.username}
                  onChange={handleInput}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={data.email}
                  onChange={handleInput}
                  disabled={!user.isAdmin} // Disable input if user is not admin
                />
                {!user.isAdmin && (
                  <p style={{ color: 'red' }}>
                    Changing email is allowed for admin only
                  </p>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='phone' className='form-label'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='phone'
                  name='phone'
                  value={data.phone}
                  onChange={handleInput}
                  disabled={!user.isAdmin} // Disable input if user is not admin
                />
                {!user.isAdmin && (
                  <p style={{ color: 'red' }}>
                    Changing Phone Number is allowed for admin only
                  </p>
                )}
              </div>
              
              <button type='submit' className='btn btn-success'>
                {isLoading ? 'Please wait...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
