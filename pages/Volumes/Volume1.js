import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeOne = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);
console.log(volumeOne);

export default function Volume2(slug) {
  return (
    <>
      <h1>{volumeOne.title}</h1>
      <p>{volumeOne.description}</p>
      <hr></hr>
      <ul>
        {volumeOne.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}
            {title}
          </li>
        ))}
      </ul>
      <hr></hr>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="the fellowship of the ring"
      />
      <hr></hr>
      <Link href="/Volumes/Volume2">Next book</Link>
      <br></br>
      <Link href="/Volumes">back to all volumes</Link>
    </>
  );
}
