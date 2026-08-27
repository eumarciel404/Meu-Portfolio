import BotGerenciamentoDiscord from "./projects/botGerenciamentoDiscord";
import DiscordComponents from "./projects/discordComponents";
import PluginMinecraft from "./projects/pluginMinecraft";
import Portifilio from "./projects/portfolio";
import RelBot from "./projects/relbot";
import RelSite from "./projects/relsite";

export default function PageProjects() {
    return (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.21)" }}>
            <div id="projetos" className="articleFull">
                <div className="alignItens center">
                    <i
                        style={{ fontSize: "40px" }}
                        className="material-symbols-outlined"
                    >
                        deployed_code
                    </i>

                    <h2>Projetos</h2>
                </div>
                <div>
                    <div className="projectsContainers">
                        <RelBot />
                        <RelSite />
                        <Portifilio />
                        <PluginMinecraft />
                        <BotGerenciamentoDiscord />
                        <DiscordComponents />
                    </div>
                </div>
            </div>
        </div>
    );
}
