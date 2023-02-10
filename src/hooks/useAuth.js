import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookies } from 'react-cookie';

export const useAuth = () => {
    const [cookie] = useCookies(["token"]);
    const navigate = useNavigate()

    useEffect(() => {
        if (cookie.token) navigate('/')
    }, [cookie]);
}
