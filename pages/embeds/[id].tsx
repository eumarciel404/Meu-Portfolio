import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Error404 from "../404";
import Image from "next/image";

export default function Id() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (id) {
            axios
                .get("/api/teste")
                .then((x) => setData(x.data.response.find((i: any) => i.id === id)))
                .catch((err) => console.error(err));
        }
    }, [id]);

    if (data) {
        return (
            <>
                <Head>
                    <title>?</title>
                    <meta name="og:title" content={data["og:title"]} />
                    <meta
                        name="og:description"
                        content={data["og:description"]}
                    />
                    <meta name="og:image" content={data["og:image"]} />
                    <meta name="og:url" content={data["og:url"]} />
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
                                    PUUUUUUUTZZZZZZ.... Deu ERRO AqUi oh Pagina
                                    NãO EnCoNtRaDa, isso quer dizer que você
                                    entrou em uma pagina que não existe nos
                                    arquivos do meu site
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        );
    }
}
