import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  const currentSlug = router.query.slug;

  const currentVolume = volumes.find(({ slug }) => slug === currentSlug);

  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === currentSlug
  );
  const isLastVolume = currentIndex === volumes.length - 1;
  const nextVolumeSlug = isLastVolume
    ? null
    : volumes[currentIndex + 1]?.slug || volumes[0]?.slug;

  const isFirstVolume = currentIndex === 0;
  const previousVolumeSlug = isFirstVolume
    ? null
    : volumes[currentIndex - 1]?.slug || volumes[volumes.length - 1]?.slug;

  if (!currentVolume) {
    return <h1>Volume not found!</h1>;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr></hr>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal} : <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <hr></hr>
      <Image
        src={cover}
        height={230}
        width={140}
        alt="the return of the king"
      />
      <hr></hr>
      {nextVolumeSlug !== null && (
        <Link href={`/Volumes/${nextVolumeSlug}`}>Next volume</Link>
      )}
      <br />
      {previousVolumeSlug !== null && (
        <Link href={`/Volumes/${previousVolumeSlug}`}>Previous volume</Link>
      )}
      <br />
      <Link href="/Volumes">Back to all volumes</Link>
    </>
  );
}
