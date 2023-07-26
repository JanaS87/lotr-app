import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeThree = volumes.find(
  ({ slug }) => slug === "the-return-of-the-king"
);
console.log(volumeThree);

export default function Volume3() {
  return (
    <>
      <h1>{volumeThree.title}</h1>
      <p>{volumeThree.description}</p>
      <hr></hr>
      <ul>
        {volumeThree.books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}
            {title}
          </li>
        ))}
      </ul>
      <hr></hr>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="the return of the king"
      />
      <hr></hr>
      <Link href="/Volumes/Volume2">Previous book</Link>
      <br></br>
      <Link href="/Volumes">back to all volumes</Link>
    </>
  );
}
