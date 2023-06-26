
import Link from "next/link";

async function getPhotos(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");

  const fotos = await response.json();
  console.log ();
  return fotos;
}


export default async function Home() {

  const photos =  await getPhotos();
  console.log (photos);
  return (
    <main>
        <h1>Elija una Foto...</h1>
        <div className="opciones">
          {photos.map((photo)=>(
            photo.id < 50 ? (
              <div className="opcion">
                <Link href={`photos/${photo.id}`}>
                  Photo id. {photo.id}
                </Link>
              </div>
            ):(
              <></>
            )
          ))}
        </div>
    </main>
  )
}
