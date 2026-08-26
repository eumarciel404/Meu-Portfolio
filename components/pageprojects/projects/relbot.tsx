import Image from "next/image";
import Link from "next/link";

export default function RelBot() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open("https://github.com/RE-L-Bot/REL-Bot", "_blank")
            }
        >
            <div>
                <header className="headerProjectContainer">
                    <div
                        className="alignItens"
                        style={{
                            justifyContent: "space-between",
                        }}
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

                            <div>Re=L Bot</div>
                        </div>

                        <div>
                            <Link
                                href={"https://github.com/RE-L-Bot/REL-Bot"}
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
                    Meu principal bot de discord publico, ele é focado em
                    administração com logs de mensagens, canais, sistema de
                    atendimento por ticket sistema de advertencias, registro de
                    membros, "AutoRole" (dá um cargo a um membro novo ao entrar
                    no servidor), com muitas funções inovadoras
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
                    <div title="Dono">Dono</div>
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
                    <div title="Bot">Bot</div>
                    <div title="Discord">Discord</div>
                    <div title="Entretenimento">Entretenimento</div>
                    <div title="JavaScript">JavaScript</div>
                    <div title="Discord.Js">Discord.Js</div>
                </footer>
            </div>
        </div>
    );
}
