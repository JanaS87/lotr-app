import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>All Volumes</h1>
      <ul>
        <li>
          <Link href="/Volumes/Volume1">
            Volume 1 - The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/Volumes/Volume2">Volume 2 - The Two Towers</Link>
        </li>
        <li>
          <Link href="/Volumes/Volume3">Volume 3 - The Return of the King</Link>
        </li>
      </ul>
    </>
  );
}
