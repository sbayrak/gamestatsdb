export default async function Home() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();
  return (
    <div>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id} className='text-white'>
          {post.title}
        </li>
      ))}
      <button>asdas</button>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id} className='text-white'>
          {post.title}
        </li>
      ))}
      <button>asdas</button>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id} className='text-white'>
          {post.title}
        </li>
      ))}
      <span className='text-white'>some text</span>
    </div>
  );
}
