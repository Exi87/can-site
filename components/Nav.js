import Link from "next/link";

const Nav = () => {
  return (
    <div className='my-nav'>

        <img src="/static/logo.png " alt='next logo' />
      <Link href="/">
        <a>Home</a>
      </Link> 
      <Link href="/about">
        <a>About Page</a>
      </Link>

      <style jsx>{`
        a {
          padding: 4px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
