import React from 'react';
import {
  User,
  RefreshCw,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Activity,
  Award,
  Calendar,
  Layers,
} from 'lucide-react';

const inbodyData = {
  lastUpdated: '2026.05.20',
  metrics: [
    { id: 1, label: 'SMM (골격근량)', value: '34.2 kg', status: 'up', desc: '지난달 대비 0.5kg 증가', className: 'brand-text' },
    { id: 2, label: 'PBF (체지방률)', value: '18.5 %', status: 'down', desc: '지난달 대비 1.2% 감소', className: '' },
    { id: 3, label: 'BMI (비만도)', value: '22.8', status: 'stable', desc: '정상 범위 유지 중', className: '' },
  ],
  history: [
    { date: '05월 20일', weight: '74.5kg', fat: '18.5%', muscle: '34.2kg' },
    { date: '04월 18일', weight: '75.2kg', fat: '19.7%', muscle: '33.7kg' },
    { date: '03월 15일', weight: '74.8kg', fat: '20.1%', muscle: '33.5kg' },
  ],
};

const TrendBadge: React.FC<{ status: string }> = ({ status }) => {
  if (status === 'up') {
    return (
      <span className="trend brand-text">
        <TrendingUp size={14} /> 추천 증가
      </span>
    );
  }

  if (status === 'down') {
    return (
      <span className="trend blue-text">
        <TrendingDown size={14} /> 감소 트렌드
      </span>
    );
  }

  return (
    <span className="trend">
      <Activity size={14} /> 안정 유지
    </span>
  );
};

const MyProfile: React.FC = () => {
  return (
    <div className="app-page">
      <main className="page-shell page-stack">
        <section className="profile-header">
          <div className="profile-person">
            <div className="profile-avatar">
              <User size={32} />
              <span className="profile-award">
                <Award size={12} />
              </span>
            </div>

            <div>
              <h2 className="profile-name">Junseo Kim</h2>
              <p className="profile-plan">Premium AI Health Member</p>
            </div>
          </div>

          <button className="small-icon-button" aria-label="인바디 데이터 새로고침">
            <RefreshCw size={18} />
          </button>
        </section>

        <section className="surface-card">
          <div className="card-glow" />
          <div className="card-content profile-sync-row">
            <div className="sync-copy">
              <div className="sync-status">
                <span className="status-dot" />
                <span className="card-eyebrow">InBody API Connected</span>
              </div>
              <p className="sync-date">최근 동기화: {inbodyData.lastUpdated}</p>
            </div>
            <ChevronRight size={20} className="muted-icon" />
          </div>
        </section>

        <section className="profile-section">
          <div className="section-heading">
            <Layers size={18} className="brand-text" />
            <h3>최근 신체 분석 지표</h3>
          </div>

          <div className="metric-list">
            {inbodyData.metrics.map((metric) => (
              <article key={metric.id} className="metric-card">
                <div className="metric-card-header">
                  <span className="metric-label">{metric.label}</span>
                  <TrendBadge status={metric.status} />
                </div>

                <div className="metric-card-body">
                  <span className={`metric-value ${metric.className}`}>{metric.value}</span>
                  <p className="metric-desc">{metric.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <div className="section-heading">
            <Calendar size={18} className="brand-text" />
            <h3>측정 기록 히스토리</h3>
          </div>

          <div className="history-card">
            {inbodyData.history.map((item) => (
              <div key={item.date} className="history-row">
                <span className="history-date">{item.date}</span>
                <div className="history-values">
                  <div>
                    <p className="mini-label">체중</p>
                    <p className="history-value">{item.weight}</p>
                  </div>
                  <div>
                    <p className="mini-label">골격근</p>
                    <p className="history-value brand-text">{item.muscle}</p>
                  </div>
                  <div>
                    <p className="mini-label">체지방</p>
                    <p className="history-value">{item.fat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyProfile;
