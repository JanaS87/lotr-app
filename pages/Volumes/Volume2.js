import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeTwo = volumes.find(({ slug }) => slug === "the-two-towers");
console.log(volumeTwo);

export default function Volume2() {
  return (
    <>
      <h1>{volumeTwo.title}</h1>
      <p>{volumeTwo.description}</p>
      <hr></hr>
      <ul>
        {volumeTwo.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}
            {title}
          </li>
        ))}
      </ul>
      <hr></hr>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="the two towers"
      />
      <hr></hr>
      <Link href="/Volumes/Volume1">Previous book</Link>
      <br></br>
      <Link href="/Volumes/Volume3">Next book</Link>
      <br></br>
      <Link href="/Volumes">back to all volumes</Link>
    </>
  );
}
