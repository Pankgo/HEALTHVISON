import React from 'react';
import { Sparkles, Utensils, Dumbbell } from 'lucide-react';

const userSummary = {
  name: 'Junseo',
  status: '근육 성장기',
  analysis: '현재 골격근량(34.2kg) 대비 단백질 섭취량이 다소 부족합니다. 오늘은 고단백 식단과 함께 대근육 중심의 저항성 운동을 추천합니다.',
};

const dietRecommendations = [
  {
    id: 1,
    type: '추천 식사 (점심/저녁)',
    menu: '소고기 부채살 구이 & 현미밥 & 구운 아스파라거스',
    kcal: '580 kcal',
    nutrients: { carbs: '65g', protein: '45g', fat: '12g' },
    reason: '근회복을 위해 한 끼에 단백질 40g 이상 확보가 필요합니다.',
  },
];

const workoutRecommendations = [
  {
    id: 1,
    target: '하체 & 코어 (Hypertrophy)',
    title: '스트렝스 및 근비대 루틴',
    duration: '50 mins',
    burnKcal: '420 kcal',
    routines: ['바벨 스쿼트 4세트 (8-12회)', '레그 프레스 3세트 (12회)', '플랭크 3세트 (1분 유지)'],
  },
];

const Recommend: React.FC = () => {
  return (
    <div className="app-page">
      <main className="page-shell page-stack">
        <section className="page-title">
          <p className="page-eyebrow">Custom Target Advisor</p>
          <h2 className="page-heading muted-gradient-text">
            AI Personalized <br />
            Recommendations
          </h2>
        </section>

        <section className="card-container">
          <div className="card-glow" />
          <div className="card-content insight-card">
            <div className="card-row">
              <div className="icon-badge">
                <Sparkles size={16} />
              </div>
              <span className="card-eyebrow">InBody 데이터 분석 결과</span>
            </div>

            <div>
              <h3 className="recommend-title">
                {userSummary.name}님은 현재 <span className="brand-text">{userSummary.status}</span> 입니다.
              </h3>
              <p className="inline-card">{userSummary.analysis}</p>
            </div>
          </div>
        </section>

        <section className="recommend-list">
          <div className="section-heading">
            <Utensils size={18} className="brand-text" />
            <h4>오늘의 추천 영양 식단</h4>
          </div>

          {dietRecommendations.map((diet) => (
            <article key={diet.id} className="recommend-card">
              <div className="recommend-header">
                <span className="card-eyebrow">{diet.type}</span>
                <span className="recommend-kcal">{diet.kcal}</span>
              </div>

              <div>
                <h5 className="recommend-title">{diet.menu}</h5>
                <p className="recommend-reason">분석: {diet.reason}</p>
              </div>

              <div className="nutrition-grid">
                <div>
                  <p className="mini-label">탄수화물</p>
                  <p className="nutrition-value">{diet.nutrients.carbs}</p>
                </div>
                <div>
                  <p className="mini-label">단백질</p>
                  <p className="nutrition-value brand-text">{diet.nutrients.protein}</p>
                </div>
                <div>
                  <p className="mini-label">지방</p>
                  <p className="nutrition-value">{diet.nutrients.fat}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="recommend-list">
          <div className="section-heading">
            <Dumbbell size={18} className="brand-text" />
            <h4>오늘의 추천 트레이닝</h4>
          </div>

          {workoutRecommendations.map((workout) => (
            <article key={workout.id} className="recommend-card">
              <div className="recommend-header">
                <div>
                  <span className="card-eyebrow">{workout.target}</span>
                  <h5 className="recommend-title">{workout.title}</h5>
                </div>
                <div>
                  <span className="recommend-kcal">{workout.burnKcal}</span>
                  <p className="small-note">{workout.duration}</p>
                </div>
              </div>

              <div className="routine-list">
                {workout.routines.map((routine) => (
                  <div key={routine} className="routine-item">
                    <span className="routine-dot" />
                    <span>{routine}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Recommend;
