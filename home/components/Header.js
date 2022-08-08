import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function Header() {
  const [cat, setCat] = useState();
  useEffect(() => {
    const cookies = new Cookies();

    setCat(cookies.get('myCat'));
    // storing input name
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('name', JSON.stringify({ name: 'Jesus' }));
    }
  }, []);
  return (
    <nav>
      {cat}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
}

export default Header;
