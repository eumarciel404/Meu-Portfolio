import Image from "next/image";
import Link from "next/link";

export default function PluginMinecraft() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open(
                    "https://github.com/Marciel404/teste-plugin-bau-de-morte",
                    "_blank",
                )
            }
        >
            <div>
                <header className="headerProjectContainer">
                    <div
                        className="alignItens"
                        style={{ justifyContent: "space-between" }}
                    >
                        <div className="alignItens">
                            <i
                                style={{
                                    fontSize: "30px",
                                    fontStyle: "unset",
                                }}
                            >
                                ☕
                            </i>

                            <div>Plugin Minecraft</div>
                        </div>

                        <div>
                            <Link
                                href={
                                    "https://github.com/Marciel404/teste-plugin-bau-de-morte"
                                }
                                target="_blank"
                            >
                                <Image
                                    src={"/svgs/githubicon.svg"}
                                    alt="githubIcon"
                                    width={35}
                                    height={35}
                                />
                            </Link>
                        </div>
                    </div>

                    <h5
                        style={{
                            margin: 0,
                            marginLeft: 5,
                            color: "rgb(76, 76, 190)",
                        }}
                    >
                        2023
                    </h5>
                </header>

                <div className="bodyProjectContainer">
                    Um plugin de minecraft que estava desenvolvendo para testar meus conhecimentos
                    e aprender mais sobre a linguagem de programação java
                </div>

                <h4
                    style={{
                        margin: 0,
                        marginLeft: 5,
                        marginTop: 10,
                    }}
                >
                    Função
                </h4>

                <footer className="footerProjectContainer">
                    <div title="Desenvolvedor">Dev</div>
                    <div title="Criador">Criador</div>
                </footer>

                <h4
                    style={{
                        margin: 0,
                        marginLeft: 5,
                        marginTop: 10,
                    }}
                >
                    Tags
                </h4>

                <footer className="footerProjectContainer">
                    <div title="Java">Java</div>
                    <div title="Minecraft">Minecraft</div>
                    <div title="Plugin">Plugin</div>
                </footer>
            </div>
        </div>
    );
}
