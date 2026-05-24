import React, { useState } from 'react';
import { BarChart3, Flame, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const weeklyData = [
  { day: '월', kcal: 1850, progress: '84%' },
  { day: '화', kcal: 2100, progress: '95%' },
  { day: '수', kcal: 1450, progress: '66%' },
  { day: '목', kcal: 0, progress: '0%' },
  { day: '금', kcal: 0, progress: '0%' },
  { day: '토', kcal: 0, progress: '0%' },
  { day: '일', kcal: 0, progress: '0%' },
];

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div className="app-page">
      <main className="page-shell page-stack">
        <section className="stats-top">
          <div className="page-title">
            <p className="page-eyebrow">Analytics & Progress</p>
            <h2 className="page-heading compact">건강 분석 통계</h2>
          </div>

          <div className="segmented-control" role="tablist" aria-label="통계 기간">
            <button className={activeTab === 'weekly' ? 'active' : ''} onClick={() => setActiveTab('weekly')}>
              주간
            </button>
            <button className={activeTab === 'monthly' ? 'active' : ''} onClick={() => setActiveTab('monthly')}>
              월간
            </button>
          </div>
        </section>

        <section className="card-container stats-section">
          <div className="chart-header">
            <div className="card-row">
              <div className="icon-badge">
                <Flame size={16} />
              </div>
              <span className="card-eyebrow">Calorie Intake Trend</span>
            </div>

            <div className="chart-nav">
              <button aria-label="이전 기간">
                <ChevronLeft size={16} />
              </button>
              <span>{activeTab === 'weekly' ? '5월 3주차' : '2026년 5월'}</span>
              <button aria-label="다음 기간">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="chart-bars">
            {weeklyData.map((data, index) => (
              <div key={data.day} className="chart-row">
                <span className={`chart-day ${data.kcal === 0 ? 'empty' : ''}`}>{data.day}</span>
                <div className="chart-track">
                  {data.kcal > 0 && (
                    <div className={`chart-fill ${index === 2 ? 'today' : ''}`} style={{ width: data.progress }} />
                  )}
                </div>
                <span className="chart-kcal">{data.kcal > 0 ? `${data.kcal.toLocaleString()} kcal` : '-'}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="section-heading">
            <BarChart3 size={18} className="brand-text" />
            <h3>인바디 컴포지션 변화</h3>
          </div>

          <div className="composition-grid">
            <article className="composition-card">
              <div className="composition-label">
                <span>Muscle (골격근)</span>
                <span className="brand-text">+0.7kg</span>
              </div>
              <div className="composition-value">
                <strong className="brand-text">34.2</strong>
                <span>kg</span>
              </div>
              <p>표준 이상 범주 진입 안착. 점진적 과부하 유지 추천.</p>
            </article>

            <article className="composition-card">
              <div className="composition-label">
                <span>Body Fat (체지방)</span>
                <span className="blue-text">-1.6%</span>
              </div>
              <div className="composition-value">
                <strong>18.5</strong>
                <span>%</span>
              </div>
              <p>체지방률 하향 안정세 유지 중. 유산소 비율 적정.</p>
            </article>
          </div>
        </section>

        <section className="report-card">
          <div className="report-title">
            <TrendingUp size={16} className="brand-text" />
            <h4>AI 영양/운동 종합 리포트</h4>
          </div>

          <div className="inline-card report-copy">
            <p>
              <strong>칼로리 요약:</strong> 이번 주 설정하신 기초대사량 및 활동 칼로리 매칭 성공률은 <span className="brand-text">81.6%</span>로 매우 우수합니다.
            </p>
            <p>
              <strong>피드백:</strong> 주중 단백질 섭취 타이밍이 전반적으로 운동 종료 후 2시간 이내에 잘 매칭되어 골격근 합성 효율이 극대화되고 있습니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Statistics;
