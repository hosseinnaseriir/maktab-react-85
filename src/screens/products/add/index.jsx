import { Button, Textfield } from '@/components'
import { Container } from '@/layout'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { store } from '@/contexts';
import { useDispatch } from 'react-redux';
import { ADD } from '@/redux/slices/productsSlice';

const productSchema = yup
  .object({
    title: yup.string().required(),
    describe: yup.string().required(),
    picture: yup.string().required(),
  })
  .required();


export function AddProductScreen() {

  const { products, dispatchProducts } = useContext(store);
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(productSchema)
  });

  const handleAddProduct = (data) => {
    console.log(data);
    dispatch(ADD({ ...data, id: Date.now() }))
    // dispatchProducts({
    //   type: "ADD",
    //   payload: { ...data, id: Date.now() }
    // })
  }

  return (
    <Container onSubmit={handleSubmit(handleAddProduct)} component="form">
      <Textfield validition={{ ...register("title") }} label="title" />
      <Textfield validition={{ ...register("describe") }} label="describe" />
      <Textfield validition={{ ...register("picture") }} label="picture" />
      <Button type="submit">Add</Button>
    </Container>
  )
}
