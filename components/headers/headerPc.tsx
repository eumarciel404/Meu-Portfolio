import Link from "next/link";

export default function HeaderPc() {
    return (
        <header id="headerPc">
            <div>
                <Link href={"#"}>
                    <h2 style={{ margin: 0 }}>Marcelo Neves</h2>
                </Link>
            </div>

            <div className="alignItens gap1">
                <div>
                    <Link href={"#sobre"}>
                        <div className="alignItens">
                            <i className="material-symbols-outlined">person</i>

                            <h3 style={{ margin: 0 }}>sobre</h3>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link href={"#projetos"}>
                        <div className="alignItens">
                            <i className="material-symbols-outlined">
                                deployed_code
                            </i>

                            <h3 style={{ margin: 0 }}>projetos</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
