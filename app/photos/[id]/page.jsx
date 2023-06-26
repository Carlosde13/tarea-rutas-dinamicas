//'use client'  //-> para renderizar todo en el cliente

async function getPhoto(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

    const photo = await response.json();
    
    return photo;
}
export default async function Page({params}){

    const photo =  await getPhoto(params.id);

    return(
        <>
            <div className="resultado">
                <img src={photo.thumbnailUrl}></img>
                <h2>{photo.title}</h2>
                <p>ID: {photo.id}</p>
            </div>
        </>
    )
}
