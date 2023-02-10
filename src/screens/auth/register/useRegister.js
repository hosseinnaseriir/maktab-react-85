import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerService } from '@/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks';

const registerSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        repeatPassword: yup.string().required()
    })
    .required();

export const useRegister = () => {
    useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerSchema)
    });

    const handleRegisterUser = async (data) => {
        setLoading(true);
        try {
            const res = await registerService(data);
            toast.success(res.data.message);
            setLoading(false);
            navigate('/login')
        } catch (err) {
            setLoading(false);
            if (err.response?.data?.message) return toast.error(err.response.data.message);
            return toast.error(err.message);
        }
    };

    return { handleSubmit, handleRegisterUser, register, errors, loading };
};
