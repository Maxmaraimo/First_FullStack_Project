import './style.scss'
import { logoutEntirely } from '../../conf/common';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {
    const navigate = useNavigate()
    function logout() {
        navigate('/auth')
        toast.success('Logged out successfully', { toastId: 999 })
        logoutEntirely()
    }
    return ( 
        <div id="profile-component">
            <h1>Profile</h1>

            <hr />

            <button className='danger-btn' onClick={logout}>
                logout
            </button>
        </div>
     );
}

export default Profile;
