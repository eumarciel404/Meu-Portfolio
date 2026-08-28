import { teste } from "@/scripts/db/neon";
import Head from "next/head";
import Image from "next/image";

export default function Id(data: any) {
    return (
        <>
            <Head>
                <title>?</title>

                {/* Para o WPP */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={data["og:title"] || ""} />
                <meta property="og:description" content={data["og:description"] || ""}/>
                <meta property="og:image" content={data["og:image"] || ""} />
                <meta property="og:url" content={data["og:url"] || ""} />

                {/* Para o discord */}
                <meta name="theme-color" content="#5865F2" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data["og:title"] || ""} />
                <meta name="twitter:description" content={data["og:description"] || ""} />
                <meta name="twitter:image" content={data["og:image"] || ""} />
            </Head>
            <body>
                <audio id="errorsong" src={"/songs/errorsong.mp3"} loop />
                <div
                    style={{
                        backgroundColor: "black",
                    }}
                >
                    <div
                        id="buttonTriggerPlay"
                        style={{
                            height: "100vh",
                            width: "100vw",
                            display: "flex",
                            justifyContent: "center",
                            placeContent: "center",
                        }}
                    >
                        <div>
                            <button
                                style={{
                                    paddingTop: 15,
                                    paddingLeft: 25,
                                    paddingBottom: 15,
                                    paddingRight: 25,
                                    backgroundColor: "#00002e",
                                    border: "2px solid grey",
                                    borderRadius: 5,
                                }}
                                onClick={() => {
                                    const audio = document.getElementById(
                                        "errorsong",
                                    )! as HTMLAudioElement;
                                    audio.play();
                                    document.getElementById(
                                        "errorPage",
                                    )!.style.display = "flex";
                                    document.getElementById(
                                        "buttonTriggerPlay",
                                    )!.style.display = "none";
                                    document.title = "Error404";
                                    document.head.ariaDescription =
                                        "PUUUUUUUTZZZZZZ.... PaGiNa NãO EnCoNtRaDa";
                                    let novoIcon =
                                        document.createElement("link");
                                    novoIcon.rel = "icon";
                                    novoIcon.href = "/gifs/nyan_cat.gif";
                                    document.head.appendChild(novoIcon);
                                }}
                            >
                                Clique Me
                            </button>
                        </div>
                    </div>
                    <div id="errorPage">
                        <div>
                            <Image
                                src={"/gifs/nyan_cat.gif"}
                                width={150}
                                height={150}
                                alt="ErrorGif"
                                style={{
                                    borderRadius: 99,
                                }}
                            />
                        </div>
                        <div>
                            <h1>Error404 Page Not Found</h1>
                            <p>
                                PUUUUUUUTZZZZZZ.... Deu ERRO AqUi oh Pagina NãO
                                EnCoNtRaDa, isso quer dizer que você entrou em
                                uma pagina que não existe nos arquivos do meu
                                site
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export async function getServerSideProps(context: any) {
    let response = await teste();

    if (response) {
        return {
            props: response.find((x: any) => x.id === context.query.id),
        };
    }

    return { notFound: true };
}
