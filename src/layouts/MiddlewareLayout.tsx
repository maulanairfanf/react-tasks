import { useEffect, ReactNode, useState  } from "react";
import apiService from '../services/apiService'
import { useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../features/auth/authSlice'; // Sesuaikan path ini dengan struktur proyek Anda
// import { AxiosResponse } from 'axios';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useDispatch()
  const [isSet, setIsSet] = useState(false)

  // useEffect(() => {
  //   const resInterceptor = (response: AxiosResponse) => {
  //     return response;
  //   };

  //   const errInterceptor = async (error: { response: { status: number; }; }) => {
  //     if (error.response.status === 401 || error.response.status === 500) {
	// 			localStorage.removeItem('token')
  //       apiService.defaults.headers.common['Authorization'] = ''
  //       dispatch(
  //         logoutSuccess()
  //       )
  //     }
  //     return Promise.reject();
  //   };

  //   const interceptor = apiService.interceptors.response.use(
  //     resInterceptor,
  //     errInterceptor
  //   );
    
  //   setIsSet(true)
  //   return () => apiService.interceptors.response.eject(interceptor);
  // }, []);

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch(
          loginSuccess(token),
        )
      } else {
         dispatch(
          logoutSuccess()
        )
      }
    }
    loadToken()
    setIsSet(true)
  },[])

  return isSet && children
}

export { AuthProvider };