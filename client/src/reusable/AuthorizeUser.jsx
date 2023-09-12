import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorizeUser = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log("Hi");
      navigate("/")
    }

  })
  return (
    <div><Component /></div>
  )
}

export default AuthorizeUser