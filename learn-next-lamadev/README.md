## how to create a project with next js step by step

# first => create structure of project

`layout / all of pages /`
you have to create components folder in src . because you need some components and sub-components .
like this ...
components/navbar/Navbar.jsx
........../footer/Footer.jsx

# what you learn ?

create structure of project
create loading

<!-- ! note -->

<!-- ! to fix hydration error you have 3 ways -->

1 ==> use usestate and useeffect =>
const [isClient,setIsClient]= useState(false)
const a = Math.random()
useEffect(()=>{
setIsClient(true)
},[])

return <isClient && a>

2=> use dynamic import

<!-- //! dynamic import without server side rendering -->

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
ssr: false,
});

<HydrationTestNoSSR>

3 => use suppressHydrationWarning property in your component like this

<div suppressHydrationWarning>{a}</div>

4==> create a components with "use client" and add all child in lauoyt in provider
{/_ <clientSideProvider> _/}

<div className="container" >
<Navbar />
{children}
<Footer />
</div>
{/_ </clientSideProvider> _/}

===> this is provider ==>
"use client";
export default function clientSideProvider({ children }) {
return <div>{children}</div>;
}

==============================HOOK SEREVR=========
<!-- !ما یه سری هوگ داریم که سمت سرور اجرا میشن. توی هر کامپوننتی میتونیم ازش استفاده کنیم. مثل اینا -->
this is work in server.

export default async function BlugPage({ params, searchParams }) {
  <!-- !params and searchParams is a hook in server -->
  console.log(params, searchParams);
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

----------------------------------client hook ============
example => navigation page => این هوگ ها سمت مرورگر اجرا میشن
----------------------------------=======================
2:30:51 =>