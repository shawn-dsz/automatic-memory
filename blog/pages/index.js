import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import styles from '../styles/Home.module.css';

import Cookies from 'universal-cookie';

export default function Home() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('name');
      const initialValue = JSON.parse(saved) ?? { name: 'empty' };

      setName(initialValue.name);

      const cookies = new Cookies();
      cookies.set('myCat', 'Pacman', { path: '/' });
      console.log(cookies.get('myCat')); // Pacman
    }
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      {name}
      <main className={styles.main}>
        <h1 className={styles.title}>Blog page</h1>
        <Posts />
      </main>
    </div>
  );
}
