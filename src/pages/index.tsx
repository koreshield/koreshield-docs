import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start"
            style={{ marginRight: '1rem' }}>
            Get Started →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/api/">
            View API Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Real-time Protection</h3>
              <p>
                Detect and block prompt injection attacks before they reach your LLM.
                Multi-layered defense with heuristic and AI-powered detection.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Zero-friction Integration</h3>
              <p>
                Drop-in proxy or SDK integration. Works with OpenAI, Anthropic, DeepSeek,
                and any OpenAI-compatible API. 5-minute setup.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Complete Visibility</h3>
              <p>
                Comprehensive audit logs and security analytics. Track threats,
                monitor usage, and maintain compliance effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickstart}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>Start Securing Your AI in Minutes</h2>
            <p>Deploy Koreshield as a standalone proxy or integrate our SDK directly into your application.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link
                className="button button--primary button--lg"
                to="/getting-started/installation">
                Installation Guide →
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.codeExample}>
              <pre>
                <code>{`# Deploy with Docker
docker run -p 8000:8000 \\
  -e OPENAI_API_KEY=sk-... \\
  Koreshield/Koreshield

# Or install the SDK
pip install Koreshield
npm install Koreshield`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className={styles.usecases}>
      <div className="container">
        <h2 className="text--center" style={{ marginBottom: '3rem' }}>Built for Modern AI Applications</h2>
        <div className={styles.usecaseGrid}>
          <div className={styles.usecaseItem}>
            <h3>AI Assistants & Chatbots</h3>
            <p>
              Protect customer-facing AI agents from manipulation. Prevent data leakage
              and ensure your AI stays on-brand and compliant.
            </p>
          </div>
          <div className={styles.usecaseItem}>
            <h3>RAG Systems</h3>
            <p>
              Secure retrieval-augmented generation pipelines. Detect context poisoning
              and prevent malicious content in your knowledge base from compromising responses.
            </p>
          </div>
          <div className={styles.usecaseItem}>
            <h3>Agent Frameworks</h3>
            <p>
              Protect autonomous agents with tool access. Monitor and validate agent
              decisions to prevent unauthorized actions and data exposure.
            </p>
          </div>
          <div className={styles.usecaseItem}>
            <h3>Enterprise Applications</h3>
            <p>
              Meet compliance requirements with comprehensive audit trails. SOC 2 ready
              with policy enforcement and detailed security reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Open-source security platform protecting LLM applications from prompt injection attacks">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <QuickStartSection />
        <UseCasesSection />
      </main>
    </Layout>
  );
}
