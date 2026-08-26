import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open(
                    "https://github.com/eumarciel404/Meu-Portfolio",
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

                            <div>Portfólio</div>
                        </div>

                        <div>
                            <Link
                                href={
                                    "https://github.com/eumarciel404/Meu-Portfolio"
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
                        2026 (Atualizado)
                    </h5>
                </header>

                <div className="bodyProjectContainer">
                    Meu portfólio atualizado com nova aparencia e nova logica por traz
                    nele mostro projetos, me descrevo e minhas competencias
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
                    <div title="Site">Site</div>
                    <div title="Portfólio">Portfólio</div>
                </footer>
            </div>
        </div>
    );
}
