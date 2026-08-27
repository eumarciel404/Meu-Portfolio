import Image from "next/image";
import Link from "next/link";

export default function BotGerenciamentoDiscord() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open(
                    "https://github.com/eumarciel404/Bot-Gerenciamento-Discord",
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
                                🤖
                            </i>

                            <div>Bot Greenciamento Discord</div>
                        </div>

                        <div>
                            <Link
                                href={
                                    "https://github.com/eumarciel404/Bot-Gerenciamento-Discord"
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
                    Esse é um bot onde gerenciava um servidor do discord do
                    cantor Kamaitachi mas hj em dia não atualizo mais o codigo
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
                    <div title="TypeScript">TypeScript</div>
                    <div title="Discord">Discord</div>
                    <div title="Discord.Js">Discord.Js</div>
                    <div title="Kamaitachi">Kamaitachi</div>
                    <div title="Bot">Bot</div>
                    <div title="Gerenciamento">Gerenciamento</div>
                </footer>
            </div>
        </div>
    );
}
