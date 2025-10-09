'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚽</span>
          <h1>Football Manager</h1>
        </div>
        <nav className={styles.nav}>
          <a href="/login" className={styles.loginBtn}>Login</a>
          <a href="/register" className={styles.registerBtn}>Começar</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            Gerencie seus jogos de futebol
            <span className={styles.highlight}> de forma profissional</span>
          </h2>
          <p className={styles.heroDescription}>
            Registre partidas, acompanhe estatísticas e organize seus torneios
            em uma plataforma completa e fácil de usar.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/register" className={styles.primaryBtn}>
              Criar Conta Grátis
            </a>
            <a href="#features" className={styles.secondaryBtn}>
              Conhecer Recursos
            </a>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <h3 className={styles.sectionTitle}>Recursos Principais</h3>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h4>Registre Partidas</h4>
              <p>Adicione informações detalhadas de cada jogo com facilidade</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h4>Estatísticas</h4>
              <p>Acompanhe o desempenho com gráficos e relatórios completos</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h4>Torneios</h4>
              <p>Organize campeonatos e gerencie tabelas de classificação</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h4>Times</h4>
              <p>Cadastre equipes e acompanhe histórico de confrontos</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h3>Pronto para começar?</h3>
          <p>Crie sua conta agora e comece a gerenciar seus jogos hoje mesmo!</p>
          <a href="/register" className={styles.ctaBtn}>
            Começar Agora
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Football Manager. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
