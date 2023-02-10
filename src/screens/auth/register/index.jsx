import React from 'react';
import { Button, Textfield } from '@/components';
import { Container } from '@/layout';
import { useRegister } from './useRegister';

export const RegisterScreen = () => {
    const { handleSubmit, handleRegisterUser, register, errors, loading } = useRegister();

    return (
        <Container onSubmit={handleSubmit(handleRegisterUser)} component="form">
            <div className="my-6 text-3xl  border-b pb-4 font-bold">Register</div>
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
            <Textfield
                label="Repeat Password"
                type="password"
                placeholder="Repeat Your Password"
                error={errors.repeatPassword?.message}
                validition={{ ...register('repeatPassword') }}
            />
            <Button loading={loading} className="w-full" secondary>
                Submit
            </Button>
        </Container>
    );
};
