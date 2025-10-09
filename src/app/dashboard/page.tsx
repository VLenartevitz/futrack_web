'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      setUserName(user.email?.split('@')[0] || 'Usuário');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (loading || !user) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚽</span>
          <span>Football Manager</span>
        </div>

        <nav className={styles.nav}>
          <a href="/dashboard" className={styles.navItem + ' ' + styles.active}>
            <span className={styles.navIcon}>📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.navIcon}>⚽</span>
            <span>Partidas</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.navIcon}>👥</span>
            <span>Times</span>
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.navIcon}>🏆</span>
            <span>Torneios</span>
          </a>
        </nav>

        <button onClick={handleSignOut} className={styles.logoutBtn}>
          <span className={styles.navIcon}>🚪</span>
          <span>Sair</span>
        </button>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Dashboard</h1>
            <p className={styles.pageSubtitle}>Bem-vindo, {userName}!</p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon + ' ' + styles.iconBlue}>⚽</div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>Total de Partidas</p>
                <p className={styles.statValue}>0</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon + ' ' + styles.iconGreen}>🏆</div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>Vitórias</p>
                <p className={styles.statValue}>0</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon + ' ' + styles.iconRed}>📉</div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>Derrotas</p>
                <p className={styles.statValue}>0</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon + ' ' + styles.iconYellow}>👥</div>
              <div className={styles.statContent}>
                <p className={styles.statLabel}>Times Cadastrados</p>
                <p className={styles.statValue}>0</p>
              </div>
            </div>
          </div>

          <div className={styles.sectionsGrid}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Partidas Recentes</h2>
                <a href="#" className={styles.sectionLink}>Ver todas</a>
              </div>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>⚽</div>
                <p className={styles.emptyText}>Nenhuma partida registrada ainda</p>
                <button className={styles.addBtn}>Adicionar Partida</button>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Próximos Jogos</h2>
                <a href="#" className={styles.sectionLink}>Ver todos</a>
              </div>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📅</div>
                <p className={styles.emptyText}>Nenhum jogo agendado</p>
                <button className={styles.addBtn}>Agendar Jogo</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
