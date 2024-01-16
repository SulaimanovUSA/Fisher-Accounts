import React from "react";
import cls from './Terminal.module.scss'
import { 
  IoHomeOutline ,
  IoShieldOutline ,
  IoQrCodeOutline ,
  IoLogoWhatsapp ,
  IoLogoTiktok ,
  IoLogoVk ,
  IoLogoInstagram ,
  IoLogoFacebook ,
  IoLogoChrome ,
  IoImagesOutline ,
  IoInformationSharp ,
  IoDiamondOutline ,
  IoAtCircleOutline ,
  IoLockClosedOutline ,
  IoPersonOutline ,
  IoTerminalOutline ,
  IoMailOutline ,
  IoEyeOffOutline ,
  IoEyeOutline ,
  IoFingerPrintOutline ,
  IoArrowRedoOutline ,
} from "react-icons/io5"

export const Terminal = () => {
  const [lines, setLines] = React.useState(['C/applications/console >'])
  const [link, setLink] = React.useState('http//:hack.sash')
  const [active, setActive] = React.useState(false)
  const [readOnly, setReactOnly] = React.useState(false)
  const [text, setText] = React.useState('cmd console')
  
  const handlePress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/applications/console >']);
      setActive((prev) => !prev);
  
      if (e.target.value === 'cmd get instagram/page & link') {
        setTimeout(() => {
          setActive((prev) => !prev);
          setLink('http//:instagram.com');
          setText('Succsessfuly! After copying the link below, this page will update automatically')
          setReactOnly(prev => !prev)
        }, 5000);
      } else if (e.target.value === 'cmd get facebook/page & link') {
        setTimeout(() => {
          setActive((prev) => !prev);
          setLink('http//:facebook.com');
          setText('Succsessfuly! After copying the link below, this page will update automatically')
          setReactOnly(prev => !prev)
        }, 5000);
      } else if (e.target.value === 'cmd get vkontakte/page & link') {
        setTimeout(() => {
          setActive((prev) => !prev);
          setLink('http//:vkontakte.com');
          setText('Succsessfuly! After copying the link below, this page will update automatically')
          setReactOnly(prev => !prev)
        }, 5000);
      } else if (e.target.value === 'cmd get tiktok/page & link') {
        setTimeout(() => {
          setActive((prev) => !prev);
          setLink('http//:tiktok.com');
          setText('Succsessfuly! After copying the link below, this page will update automatically')
          setReactOnly(prev => !prev)
        }, 5000);
      }
    }
  };

  return (
    <main className={cls.main} onKeyPress={handlePress}>
      <h1 className={cls.head_title}>{text}</h1>
      <section className={cls.section}>
        <div className={cls.div}>
          {
            lines.map(item => (
              <p className={cls.title}> {item} </p>
            ))
          }
        </div>
        <textarea className={cls.textarea} readOnly={readOnly} >
          
        </textarea>
      </section>
      <section className={cls.section}>
        <div className={active === true ? `${cls.image} ${cls.image_active}` : cls.image}/>
      </section>
      <section className={cls.section}>
        <button className={cls.button}>Копировать</button>
        <input type="text" readOnly placeholder={link} className={cls.input} />
      </section>
    </main>
  )
}