import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/UserContext";
import avatarImg from  '../../assets/avatar.jpeg'

const Profile = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className=" mt-5 d-flex justify-content-center align-content-center align-items-center">
      <div className="mt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user?.photoURL ? user.photoURL : avatarImg} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-center align-content-center">
              <div className="card-body">
                <h5 className="card-title">{user?.displayName ? user.displayName : 'Name Not Available'}</h5>
                <p className="card-text">
                {user?.email}
                </p>
                <span className='flex items-center space-x-2 w-full'>
              <span className='text-gray-400 text-small'>
                Email Status:{' '}
                {user?.emailVerified ? (
                  <span className='text-success fw-bold'>Verified</span>
                ) : (
                  <span className='text-warning fw-bold'>Not Verified</span>
                )}
              </span>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
