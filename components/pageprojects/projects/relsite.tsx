import Image from "next/image";
import Link from "next/link";

export default function RelSite() {
    return (
        <div
            className="projectContainer"
            onClick={() =>
                window.open("https://github.com/RE-L-Bot/Site-ReL", "_blank")
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
                                🌐
                            </i>

                            <div>Re=L Site</div>
                        </div>

                        <div>
                            <Link
                                href={"https://github.com/RE-L-Bot/Site-ReL"}
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
                    Site do meu bot no discord, com o site, você configurava
                    comportamentos e ações do bot no seu servidor de discord,
                    tendo integração com o banco de dados do bot via API com
                    atualização instantanea para não haver atraso nas mudanças,
                    nele você configurava, idioma, saudações, moderação, canais
                    de logs
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
                    <div title="Site">Site</div>
                    <div title="NextJs">NextJs</div>
                    <div title="JavaScript">JavaScript</div>
                </footer>
            </div>
        </div>
    );
}
