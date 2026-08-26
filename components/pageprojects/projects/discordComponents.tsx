import Image from "next/image";
import Link from "next/link";

export default function DiscordComponents() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open(
                    "https://github.com/eumarciel404/discord-components",
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
                                🌐
                            </i>

                            <div>Discord Components</div>
                        </div>

                        <div>
                            <Link
                                href={
                                    "https://github.com/eumarciel404/discord-components"
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
                        2024
                    </h5>
                </header>

                <div className="bodyProjectContainer">
                    Um livraria que cria components web para recriar facilemnte mensagens
                    falsas do discord compativel com a maioria dos frameworks
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
                    <div title="Contribuidor">Contribuidor</div>
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
                    <div title="TypeScript">TypeScript</div>
                    <div title="Web Componentes">Web Componentes</div>
                    <div title="Lit">Lit</div>
                    <div title="Discord">Discord</div>
                </footer>
            </div>
        </div>
    );
}
