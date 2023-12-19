import StreamerCard from "./StreamerCard"

const streamers = [
    {
        name: "elded",
        isLive:true,
        status: "1.7 K",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/9eb48e6a-eae8-49f7-933a-b9a047234054-profile_image-70x70.png",
        cat: "Fortnite"
    },
    {
        name: "SoyPan",
        status: "offline",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/d1714f39-3b66-4801-b3f2-a29b93c2cbff-profile_image-70x70.png",
        cat: "Rust"
    },
    {
        name: "MAAU",
        status: "5 K",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/maau-profile_image-3e57329d9c5f4bf7-70x70.png",
        cat: "Conversando"
    },
    {
        name: "xChronoFox",
        status: "8.3 K",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/890a5a4e-bbbc-4569-aceb-3d3bdbc43fe7-profile_image-70x70.png",
        cat: "Lol"
    },
    {
        name: "Roier",
        status: "offline",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/84138061-a22c-40ff-8ca4-fc41e70ff513-profile_image-70x70.png",
        cat: "Rust"
    },
    {
        name: "AriGameplays",
        status: "2.8 K",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/a71759f1-11c4-4b0d-bec5-35a480b34958-profile_image-70x70.png",
        cat: "Ready or not"
    },
    {
        name: "MYM_ALKAPONE",
        status: "2.8 K",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/3ecade58-a91d-4399-9b2e-d6da8957d5f9-profile_image-70x70.png",
        cat: "Rust"
    },
    {
        name: "asianbunnyx",
        status: "offline",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd9bf69a-913f-4040-927e-cbdb21f40bd2-profile_image-70x70.png",
        cat: "Rust"
    },
    {
        name: "vickypalami",
        status: "350",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/058cf3c5-cdfe-4b16-b072-13da7e0ba423-profile_image-70x70.png",
        cat: "Rust"
    }
]

export default function StreamerList () {
    return (
    <aside>
        <div>
            <h2>CANALES RECOMENDADOS</h2>
        </div>
{streamers.map((streamer) => {
        return(
            /*<main key={`streamer-${streamer.name}`}> 
                <p>{streamer.name}</p>
        </main>*/
        <StreamerCard
            key={streamer.name}
            name={streamer.name}
            isLive={streamer.isLive}
            status = {streamer.status}
            avatar = {streamer.avatar}
            cat = {streamer.cat}
        />
        )
    })
}
        {/*<div>

            <StreamerCard avatar="" name="" cat="" status= ""/>
            <StreamerCard avatar="" name="" cat="" status= ""/>
            <StreamerCard avatar="" name="" cat="" status= ""/>
            <StreamerCard avatar="" name="" cat="" status= ""/>
</div>*/}
    </aside>
    )
}