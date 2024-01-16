import React from "react";
import cls from './Tiktok.module.scss'
import { FiHelpCircle } from "react-icons/fi"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers/form'
import axios from "axios";

export const Tiktok = () => {
  const [activeEye, setActiveEye] = React.useState(false)
  const [activeBtn, setActiveBtn] = React.useState(false)

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

    if (data.login !== '' && data.password !== '' && formState.isValid  ) {
      setActiveBtn(true);
    }

    // axios.post('', body)
    //   .then(response => {
    //     setActiveBtn(false);
    //   })
  }

  return (
    <main className={cls.main}>
      <header className={cls.header}>
        <p className={cls.logo}></p>
        <p className={cls.text}><FiHelpCircle className={cls.icon}/> Обратная связь и помощь</p>
      </header>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={cls.head_title}>Войти</h1>
        <p className={cls.title}>Номер или имя пользователя</p>

        {
          formState.errors.login && <p className={cls.error}> {formState.errors.login.message} </p>
        }

        <input 
          type="text" 
          placeholder="Номер или имя пользователя" 
          className={cls.input}
          {...register('login', Form.Options.login)}
        />

        {
          formState.errors.password && <p className={cls.error}> {formState.errors.password.message} </p>
        }

        <div className={cls.input_box}>

          <input 
            type={activeEye !== false ? 'text' : 'password'} 
            placeholder="Пароль" 
            className={cls.input}
            {...register('password', Form.Options.password)}
          />

          {
            activeEye !== false ? 
            <IoEyeOutline  className={cls.eye_icon} onClick={() => setActiveEye(prev => !prev)}/>
            :
            <IoEyeOffOutline  className={cls.eye_icon} onClick={() => setActiveEye(prev => !prev)}/>
          }
        </div>
        <p className={cls.under_title}>Забыли пароль?</p>
        <button className={activeBtn !== false ? `${cls.button} ${cls.button_active}` : cls.button} type="submit">Войти</button>
      </form>
      <footer className={cls.footer}>
        <section className={cls.section}>
          <p className={cls.title}>Еще нет аккаунта? <span className={cls.title_link}>Регистрация</span></p>
        </section>
        <section className={cls.section}>
          <p className={cls.title_2}>Русский (Россия)</p>
          <p className={cls.title_2}>© 2023 TikTok</p>
        </section>
      </footer>
    </main>
  )
}