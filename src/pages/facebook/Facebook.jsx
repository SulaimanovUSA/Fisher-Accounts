import React from "react";
import cls from './Facebook.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers/form'
import axios from "axios";

export const Facebook = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      login: data.login,
      password: data.password,
    }

    // axios.post('', body)
    //   .then(response => {
    //     setActiveBtn(false);
    //   })
  }

  return (
    <main className={cls.main}>
        <p className={cls.logo}></p>
        <p className={cls.title}>Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.</p>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>

          {
            formState.errors.login && <p className={cls.error}> {formState.errors.login.message} </p>
          }

          <input 
            type="text" 
            placeholder="Электронный адрес  или номер телефона" 
            className={cls.input} 
            {...register('login', Form.Options.login)}
          />

          {
            formState.errors.password && <p className={cls.error}> {formState.errors.password.message} </p>
          }

          <input 
            type="text" 
            placeholder="Пароль" 
            className={cls.input}
            {...register('password', Form.Options.password)}
          />

          <button className={cls.button}>Вход</button>
          <p className={cls.form_title} type="submit">Забыли пароль?</p>
          <button className={cls.under_button} >Создать новый аккаунт</button>
        </form>
    </main>
  )
}