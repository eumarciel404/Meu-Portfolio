import HeaderPc from "@/components/headers/headerPc";
import HeaderMobile from "@/components/headers/hearderMobile";
import PageProjects from "@/components/pageprojects/pageProjects";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Marcelo Neves</title>

                <meta
                    name="description"
                    content="Portfolio de Marcelo Neves um desenvolvedor full stack dedicado"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link rel="icon" href="/images/eu.jpg" />

                <meta property="og:image" content="/images/eu.jpg" />

                <meta property="og:site_name" content="Marcelo Neves" />
                <meta property="og:title" content="Marcelo Neves Programador" />
                <meta
                    property="og:description"
                    content="Um programador dedicado e entendendor das suas necessidades"
                />
            </Head>

            <body>
                <HeaderPc />
                <HeaderMobile />

                <div
                    id="shortApresentation"
                    className="articleFull alignItens warp gap1"
                >
                    <Image
                        src="/images/eu.jpg"
                        alt="eu"
                        width={140}
                        height={140}
                        style={{ borderRadius: 99 }}
                    />

                    <div>
                        <h1 style={{ margin: 0 }}>Marcelo Neves</h1>

                        <article style={{ maxWidth: "500px" }}>
                            Eu sou o Marcelo Neves tenho{" "}
                            {new Date().getFullYear() - 2004} anos, sou um
                            desenvolvedor back-end aprendendo front-end, sei as
                            tecnologias NextJs, TailWindCss em direção a ser um
                            cientista de dados, possuo grande conhecimentos em
                            banco de dados noSql (Mongodb) e banco de dados Sql
                            (MySql)
                        </article>
                    </div>
                </div>

                <div style={{ backgroundColor: "rgba(71, 71, 71, 0.23)" }}>
                    <div id="sobre" className="articleFull">
                        <div className="alignItens center">
                            <i
                                style={{ fontSize: "40px" }}
                                className="material-symbols-outlined"
                            >
                                person
                            </i>

                            <h2>sobre</h2>
                        </div>

                        <article>
                            Me chamo Marcelo Neves De Oliveira, tenho{" "}
                            {new Date().getFullYear() - 2004} anos, gosto de
                            programação desde que eu tinha 10 anos de idade,
                            nasci em Maricá no Rio de Janeiro, vivi boa parte da
                            minha vida em Niterói/Rj, sou um entusiasta da
                            tecnologia, estudo programação desde os 15/16 anos
                            de idade quando montei meu pc depois de consegui um
                            estagio em uma casa de material de contrução e bazar
                            chamada Casa Leader situada em Itaipu no Rio de
                            Janeiro gosto de realizar projetos e de trabalhar em
                            coisas grander, refazer meus codigos para testar
                            meus conhecimentos ao maximo e ver o quão evolui
                        </article>
                    </div>
                </div>

                <PageProjects />

                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.14)" }}>
                    <div className="articleFull">
                        <div className="alignItens center">
                            <i
                                style={{ fontSize: 40 }}
                                className="material-symbols-outlined"
                            >
                                person
                            </i>
                            <h2>Perfil profissional</h2>
                        </div>
                        <div
                            className="textCenter"
                            style={{ maxBlockSize: 300 }}
                        >
                            Desenvolvedor focado na criação de aplicações web
                            modernas, interfaces funcionais e automações.
                            Experiência prática no ecossistema
                            JavaScript/TypeScript e Next.js, construindo
                            soluções completas — desde sistemas de gerenciamento
                            até bots públicos e integrações via API.
                            Constantemente aprimorando conhecimentos em
                            arquitetura de software, código limpo e trabalho em
                            equipe para resolver problemas reais através do
                            código
                        </div>
                    </div>
                </div>

                <footer id="footerPage"></footer>
            </body>
        </>
    );
}
