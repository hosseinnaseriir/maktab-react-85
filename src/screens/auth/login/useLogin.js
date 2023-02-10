import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginService } from '@/api';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useAuth } from '@/hooks';

const loginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

export const useLogin = () => {
    useAuth();
    const [, setCookie] = useCookies()
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    const handleLoginUser = async (data) => {
        setLoading(true);
        try {
            const res = await loginService(data);
            toast.success(res.data.message);
            console.log(res.data.token)
            setCookie("token", res.data.token, {
                maxAge: 24 * 24 * 24 * 24
            })
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.response?.data?.message) return toast.error(err.response.data.message);
            return toast.error(err.message);
        }
    };

    return { handleSubmit, handleLoginUser, register, errors, loading };
};
