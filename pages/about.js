import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About(){
  return(
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fuga, quisquam incidunt expedita repellendus ratione aliquam sit consequatur unde quos, accusantium vero debitis inventore nulla dolore voluptatem est distinctio beatae?</p>
      <Image src='/images/charizard.png' 
      width={300}
      height={300}
      alt='charizard'
      />
    </div>
  )
}