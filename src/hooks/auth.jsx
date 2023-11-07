import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api'

import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData ] = useState({});
  async function signIn({ email, password }){
    
    try{
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@ksgnotes:user", JSON.stringify(user));
      localStorage.setItem("@ksgnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token })


    }catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Não foi possivel entrar.")
      }
    }

  }

  function signOut(){
    localStorage.removeItem("@ksgnotes:token");
    localStorage.removeItem("@ksgnotes:user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }){
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@ksgnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      toast.success("Perfil atualizado!")
    }catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Não foi possivel atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@ksgnotes:token")
    const user = localStorage.getItem("@ksgnotes:user")
    
    if(token && user){

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }

  }, []);

  return <AuthContext.Provider value={{ 
    signIn, signOut, updateProfile,
    
    user: data.user }}>
    {children}
    </AuthContext.Provider>;
}

AuthProvider.propTypes;

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
