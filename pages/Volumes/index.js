import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomVolume(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomVolume = getRandomVolume(volumes);
    router.push(`/Volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/Volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click for random Volume</button>
    </>
  );
}
