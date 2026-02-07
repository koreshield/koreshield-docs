"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var Link_1 = require("@docusaurus/Link");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Heading_1 = require("@theme/Heading");
var Layout_1 = require("@theme/Layout");
var clsx_1 = require("clsx");
var index_module_css_1 = require("./index.module.css");
function HomepageHeader() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<header className={(0, clsx_1.default)('hero', index_module_css_1.default.heroBanner)}>
      <div className="container">
        <Heading_1.default as="h1" className="hero__title">
          {siteConfig.title}
        </Heading_1.default>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={index_module_css_1.default.buttons}>
          <Link_1.default className="button button--primary button--lg" to="/getting-started/quick-start" style={{ marginRight: '1rem' }}>
            Get Started →
          </Link_1.default>
          <Link_1.default className="button button--secondary button--lg" to="/api/">
            View API Docs
          </Link_1.default>
        </div>
      </div>
    </header>);
}
function FeatureSection() {
    return (<section className={index_module_css_1.default.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>🛡️ Real-time Protection</h3>
              <p>
                Detect and block prompt injection attacks before they reach your LLM.
                Multi-layered defense with heuristic and AI-powered detection.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>⚡ Zero-friction Integration</h3>
              <p>
                Drop-in proxy or SDK integration. Works with OpenAI, Anthropic, DeepSeek,
                and any OpenAI-compatible API. 5-minute setup.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>🔍 Complete Visibility</h3>
              <p>
                Comprehensive audit logs and security analytics. Track threats,
                monitor usage, and maintain compliance effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
function QuickStartSection() {
    return (<section className={index_module_css_1.default.quickstart}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>Start Securing Your AI in Minutes</h2>
            <p>Deploy KoreShield as a standalone proxy or integrate our SDK directly into your application.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link_1.default className="button button--primary button--lg" to="/getting-started/installation">
                Installation Guide →
              </Link_1.default>
            </div>
          </div>
          <div className="col col--6">
            <div className={index_module_css_1.default.codeExample}>
              <pre>
                <code>{"# Deploy with Docker\ndocker run -p 8000:8000 \\\n  -e OPENAI_API_KEY=sk-... \\\n  koreshield/koreshield\n\n# Or install the SDK\npip install koreshield\nnpm install koreshield"}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
function UseCasesSection() {
    return (<section className={index_module_css_1.default.usecases}>
      <div className="container">
        <h2 className="text--center" style={{ marginBottom: '3rem' }}>Built for Modern AI Applications</h2>
        <div className="row">
          <div className="col col--6">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>🤖 AI Assistants & Chatbots</h3>
              <p>
                Protect customer-facing AI agents from manipulation. Prevent data leakage
                and ensure your AI stays on-brand and compliant.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>📚 RAG Systems</h3>
              <p>
                Secure retrieval-augmented generation pipelines. Detect context poisoning
                and prevent malicious content in your knowledge base from compromising responses.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '1.5rem' }}>
          <div className="col col--6">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>🔨 Agent Frameworks</h3>
              <p>
                Protect autonomous agents with tool access. Monitor and validate agent
                decisions to prevent unauthorized actions and data exposure.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>🏢 Enterprise Applications</h3>
              <p>
                Meet compliance requirements with comprehensive audit trails. SOC 2 ready
                with policy enforcement and detailed security reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"".concat(siteConfig.title, " Documentation")} description="Open-source security platform protecting LLM applications from prompt injection attacks">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <QuickStartSection />
        <UseCasesSection />
      </main>
    </Layout_1.default>);
}
