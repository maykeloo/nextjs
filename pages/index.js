import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>List | Home</title>
    </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa
          nobis rem nisi mollitia itaque incidunt ullam, cum molestiae iste.
        </p>
        <Link href="people/test">
          <a>See people listning</a>
        </Link>
      </div>
    </>
  );
}
