import React from "react";
import cls from './Instagram.module.scss'
import { 
  IoLogoFacebook ,
} from "react-icons/io5"
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers/form'
import axios from "axios";

export const Instagram = () => {
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
      <section className={cls.section}>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={cls.logo}></h1>

          {
          formState.errors.login && <p className={cls.error}> {formState.errors.login.message} </p>
          }

          <input 
            type="text" 
            placeholder="Телефон, имя пользователя или эл. адрес" 
            className={cls.input} 
            {...register('login', Form.Options.login)}
          />

        {
          formState.errors.password && <p className={cls.error}> {formState.errors.password.message} </p>
        }

          <input 
            type="password" 
            placeholder="Пароль" 
            className={cls.input} 
            {...register('password', Form.Options.password)}
          />

          <button className={cls.button}>Войти</button>
          <div className={cls.decoration}>ИЛИ</div>
          <p className={cls.title}><IoLogoFacebook className={cls.icon}/> Войти через Facebook</p>
          <p className={cls.uder_title}>Забыли пароль?</p>
        </form>
        <div className={cls.title_box}>
          <p className={cls.title}>У вас еще нет аккаунта? <span className={cls.title_link}>Зарегистрироваться</span></p>
        </div>
        <p className={cls.text}>Установите приложение.</p>
        <div className={cls.images}>
          <div className={cls.image}></div>
          <div className={cls.image}></div>
        </div>
      </section>
    </main>
  )
}