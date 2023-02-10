import React from 'react';
import { Button, Textfield } from '@/components';
import { Container } from '@/layout';
import { useLogin } from './useLogin';

export const LoginScreen = () => {
    const { handleSubmit, handleLoginUser, register, errors, loading } = useLogin();

    return (
        <Container onSubmit={handleSubmit(handleLoginUser)} component="form">
            <div className="my-6 text-3xl  border-b pb-4 font-bold">Login</div>
            <Textfield
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                error={errors.email?.message}
                validition={{ ...register('email') }}
            />
            <Textfield
                label="Password"
                type="password"
                placeholder="Enter Your Password"
                error={errors.password?.message}
                validition={{ ...register('password') }}
            />
            <Button loading={loading} className="w-full" secondary>
                Submit
            </Button>
        </Container>
    );
};
