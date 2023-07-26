import { introduction } from "../lib/data";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <hr></hr>
      <Link href="/Volumes">
        <h2>All Volumes</h2>
      </Link>
    </div>
  );
}
