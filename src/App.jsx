import React, { useState } from 'react';
import {
  Menu, X, Mail, ChevronRight, BookOpen, Laptop, Award, Users,
  Lightbulb, ArrowUpRight, ArrowRight, Play, Sparkles, GraduationCap,
  Globe, FlaskConical, Briefcase, ExternalLink, Building2, ChevronDown,
  Newspaper, Quote, Handshake,
} from 'lucide-react';

/* ── Constants ── */

const NAV = [
  ['vision', '사업소개'],
  ['partnership', '파트너십'],
  ['ecosystem', 'AI 생태계'],
  ['ai-services', 'AI 서비스'],
  ['audience', '대상별 서비스'],
  ['education', '교육'],
  ['research', '연구'],
  ['participation', '참여'],
  ['network', '글로벌'],
];

const RESEARCH_LIST = [
  "생성형 AI를 활용한 전공별 플립드 러닝 수업 모델 개발",
  "Gemini 기반 에듀테크 도구의 교수학습 효과성 검증 연구",
  "대학 글쓰기 교육에서 AI 피드백 시스템의 신뢰도 분석",
  "AI Literacy 역량 측정을 위한 평가 도구 개발 및 타당화",
  "단과대학별 AI+X 융합 교육과정 표준 가이드라인 수립",
  "교원 AI 역량 강화를 위한 맞춤형 연수 프로그램 실증",
  "멀티모달 AI를 활용한 학습 부진 학생 조기 예측 및 처방",
  "구글 워크스페이스 기반 협력 학습이 대학생 문제해결력에 미치는 영향",
  "의료/바이오 전공자를 위한 맞춤형 AI 데이터 분석 교육 연구",
  "AI 기반 챗봇을 활용한 맞춤형 학업 상담 시스템 교수 만족도 조사",
  "지역 사회 문제 해결을 위한 산학 연계 AI 프로젝트 수업 모델",
  "디지털 취약 계층 학생을 위한 AI 리터러시 격차 해소 방안",
  "소형 언어 모델(sLLM)을 활용한 학내 교육 행정 효율화 연구",
  "AI 윤리 및 데이터 보안 강화를 위한 대학 강의 가이드라인 개발",
  "에듀테크 맞춤형 AI 스타트업 연계 교육 혁신 생태계 구축 방안",
];

/* ── Component ── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('student');

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const GoogleForEdu = ({ className = '' }) => (
    <span className={className}>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC04]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
      <span className="text-gray-600"> for Education</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-navy selection:text-white">

      {/* ================================================================
          NAV
      ================================================================ */}
      <nav className="sticky top-0 z-50 glass-nav border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-14 lg:h-16 items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="text-navy">ARISE</span>
            <span className="text-g-blue">PNU</span>
            <span className="text-gray-300 font-light">|</span>
            <GoogleForEdu className="text-lg font-bold" />
          </button>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="px-3 py-1.5 rounded-md text-[13px] text-gray-500 hover:text-navy hover:bg-navy-50 font-medium transition-all">{label}</button>
            ))}
          </div>

          <a href="mailto:pnucde@pusan.ac.kr" className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-navy text-white text-[13px] font-semibold hover:bg-navy-light transition-all">
            <Mail className="w-3.5 h-3.5 mr-1.5 opacity-60" /> 문의하기
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="메뉴">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-xl">
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-sm">{label}</button>
            ))}
            <a href="mailto:pnucde@pusan.ac.kr" className="block w-full text-center py-3 px-4 rounded-xl bg-navy text-white font-bold text-sm mt-2">문의하기</a>
          </div>
        )}
      </nav>


      {/* ================================================================
          1. HERO  —  Navy 배경, KPI, 홍보 영상
      ================================================================ */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-g-blue/[0.08] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-g-green/[0.06] rounded-full blur-[100px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="pt-16 pb-8 lg:pt-24 lg:pb-12 text-center max-w-4xl mx-auto anim-fade-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-g-blue/10 text-g-blue border border-g-blue/20 mb-6">
              ARISE PNU · AI EDTECH 교육혁신 생태계 구축 사업
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.2] tracking-tight">
              부산대학교 <span className="text-g-blue">X</span>{' '}
              <GoogleForEdu className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold [&>span]:!text-white/90 [&>span.text-gray-600]:!text-white/50" />
              <br />
              <span className="relative inline-block mt-2">
                AI 교육혁신 파트너십
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-g-blue/30 via-g-red/30 to-g-yellow/30 rounded-full"></span>
              </span>
              {' '}구축
            </h1>

            <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              부산대학교와 Google for Education이 함께 대학 교육의 미래를 열어갑니다.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={() => go('vision')} className="px-6 py-3 rounded-lg bg-white text-navy font-semibold text-sm hover:bg-gray-100 transition-all">사업 소개</button>
              <button onClick={() => go('ecosystem')} className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-all border border-white/10">
                AI 서비스 이용하기 <ArrowRight className="w-4 h-4 ml-1.5 inline" />
              </button>
            </div>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto pb-8 anim-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="bg-gray-900 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden relative group aspect-video flex items-center justify-center ring-1 ring-white/10">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200')" }}></div>
              <div className="relative text-center z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 cursor-pointer ring-1 ring-white/20">
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                </div>
                <p className="text-white/90 font-semibold text-lg">부산대 X 구글 파트너십 홍보 영상</p>
                <p className="text-white/30 text-sm mt-1">Presented by 에듀테크센터</p>
              </div>
            </div>
          </div>

          {/* KPI */}
          <div className="border-t border-white/10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '국내 최초', sub: 'Cloud-to-AI Workspace 전면 도입' },
              { value: '28,000', sub: 'Google AI Pro 라이선스 제공' },
              { value: '1,000', sub: 'Gemini Enterprise 연구 계정' },
              { value: '15개 과제', sub: 'AI STAR 연구 프로젝트' },
            ].map((k) => (
              <div key={k.sub}>
                <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">{k.value}</p>
                <p className="mt-1 text-sm text-white/35 font-medium">{k.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          2. WHY PNU AI  —  4대 혁신 축
      ================================================================ */}
      <section id="vision" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-bold text-navy/40 tracking-widest uppercase mb-3">Why PNU AI</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">동남권 AI 거점대학,<br/>부산대학교의 4대 혁신 축</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {[
              { icon: <GraduationCap className="w-6 h-6" />, num: '01', title: 'AI 교육', desc: '전교생 Gemini 활용 교육, AI Literacy MOOC, Gemini Academy 국제 자격과정', accent: 'border-t-g-blue' },
              { icon: <FlaskConical className="w-6 h-6" />, num: '02', title: 'AI 연구', desc: 'AI STAR 프로젝트, 교수학습 실증 연구, 구글 공동 연구 프로그램', accent: 'border-t-g-green' },
              { icon: <Building2 className="w-6 h-6" />, num: '03', title: '산학협력', desc: '산학 AI 프로젝트, 지역 문제해결 해커톤, 에듀테크 스타트업 연계', accent: 'border-t-g-yellow' },
              { icon: <Globe className="w-6 h-6" />, num: '04', title: '글로벌', desc: 'Gemini Connect Seoul, APAC 리더 시리즈, Google Korea 파트너 포럼', accent: 'border-t-g-red' },
            ].map((item) => (
              <div key={item.num} className={`bg-white p-8 lg:p-10 border-t-[3px] ${item.accent}`}>
                <span className="text-xs font-mono font-bold text-gray-300">{item.num}</span>
                <div className="mt-4 mb-4 text-navy">{item.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          2.5. 파트너십 체결 + 보도자료 + 총장 코멘트
      ================================================================ */}
      <section id="partnership" className="py-20 lg:py-28 bg-navy-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-g-blue tracking-widest uppercase mb-3">Partnership</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">AI 교육혁신 파트너십 체결</h2>
            <p className="mt-3 text-gray-500">2026년 5월 13일, 부산대학교와 Google for Education이 공식 파트너십을 체결했습니다.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: 세레모니 사진 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/partnership-ceremony.jpg"
                  alt="부산대학교-Google for Education AI 교육혁신 파트너십 세레모니"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center flex-col gap-3 text-gray-400">
                  <Handshake className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">파트너십 세레모니 사진</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-gray-400 mb-2">2026.05.13 · 부산대 대학본부 3층 대회의실</p>
                <h4 className="font-bold text-navy mb-2">AI 교육혁신 파트너십 세레모니</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Kevin Kells Google for Education 글로벌 디렉터, 최재원 부산대학교 총장이 참석하여 'AI 교육혁신 파트너십'을 공식 체결하고 협력의 시작을 알렸습니다.
                </p>
              </div>
            </div>

            {/* Right: 보도자료 요약 + 총장 코멘트 */}
            <div className="space-y-6">
              {/* 보도 헤드라인 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <Newspaper className="w-5 h-5 text-g-blue" />
                  <span className="text-xs font-bold tracking-widest text-g-blue uppercase">Press Release</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 leading-snug">
                  국내 대학 최초 'Cloud-to-AI Workspace' 전면 도입
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  부산대학교가 국내 대학 최초로 전체 학생과 교원 대상 Google Workspace for Education Plus와 Google AI Pro for Education을 동시 도입합니다. 교수·학생 28,000여 명에게 통합 AI 학습·연구 환경을 제공하며, 글로벌 AI 선도대학으로의 도약에 속도를 냅니다.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'AI Pro', value: '28,000', unit: '라이선스' },
                    { label: 'Workspace Plus', value: '28,000', unit: '라이선스' },
                    { label: 'Gemini Enterprise', value: '1,000', unit: '계정' },
                  ].map((item) => (
                    <div key={item.label} className="bg-navy-50 rounded-xl p-3 text-center">
                      <p className="text-lg font-extrabold text-navy">{item.value}</p>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
                  <h4 className="text-sm font-bold text-navy">기존 API 중개형 서비스와의 차별점</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">기존 AI 서비스</p>
                      <p className="text-xs text-gray-500">일회성 문답 방식 AI 챗봇, 대화창 닫으면 초기화</p>
                    </div>
                    <div className="bg-g-blue/5 rounded-lg p-3 border border-g-blue/10">
                      <p className="text-[10px] font-bold text-g-blue uppercase mb-1">부산대 PNU</p>
                      <p className="text-xs text-gray-600">Gmail·Docs·Drive에 AI 엔진 직접 연결, 개인 맥락 기반 AI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 총장 코멘트 */}
              <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-6 text-white/5">
                  <Quote className="w-20 h-20" />
                </div>
                <div className="relative">
                  <p className="text-white/70 leading-relaxed text-sm mb-5">
                    "학생이 자신의 자료를 넣어 함께 분석하고, 교수가 강의 전체를 AI와 함께 다룰 수 있는 — 학습과 연구 방식 자체를 바꾸는 인프라를 구축하는 것입니다. 부산대는 모든 구성원이 디지털 격차 없이 AI 시대를 준비할 수 있도록 앞장서겠습니다."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-sm font-bold">최</div>
                    <div>
                      <p className="font-bold text-white text-sm">최재원</p>
                      <p className="text-white/35 text-xs">부산대학교 총장</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud-to-AI Workspace 핵심 가치 */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
            <h4 className="text-lg font-bold text-navy mb-6 text-center">Cloud-to-AI Workspace가 바꾸는 대학 교육</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '맥락 기반 AI', desc: '개인 드라이브 자료를 AI가 직접 분석·학습하여 맞춤형 인사이트 도출', color: 'border-l-[#4285F4]' },
                { title: 'NotebookLM 연구 인프라', desc: '수백 페이지의 논문·실험 데이터를 AI가 요약·대화·분석하는 개인 맞춤형 수석 연구원', color: 'border-l-[#EA4335]' },
                { title: '디지털 격차 해소', desc: '개인 유료 구독 없이 전 구성원에게 동일한 AI 교육 환경을 보편적 복지로 제공', color: 'border-l-[#FBBC04]' },
                { title: '멀티모달 연구 지원', desc: '고해상도 이미지 생성·편집, 실시간 코드 디버깅까지 전 학문 분야 연구 생산성 극대화', color: 'border-l-[#34A853]' },
              ].map((item) => (
                <div key={item.title} className={`border-l-[3px] ${item.color} pl-5`}>
                  <h5 className="font-bold text-navy text-sm mb-1">{item.title}</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          3. AI 생태계  —  인포그래픽 + 계정 등록 CTA
      ================================================================ */}
      <section id="ecosystem" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-g-blue tracking-widest uppercase mb-3">AI Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">교육용 Google AI 생태계 제공</h2>
            <p className="mt-3 text-gray-500">국내 최초, 교육용 Google Cloud-to-AI Workspace를 모든 교원과 학생에게 제공합니다.</p>
          </div>

          {/* Infographic: Google → PNU → Services → Users */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-5 flex items-center gap-3">
                <GoogleForEdu className="text-xl font-extrabold" />
              </div>
              <div className="w-px h-8 bg-gray-300 relative"><ChevronDown className="w-4 h-4 text-gray-300 absolute -bottom-2 left-1/2 -translate-x-1/2" /></div>
              <div className="bg-navy rounded-2xl px-8 py-5 text-center shadow-lg">
                <p className="text-white font-extrabold text-lg">PNU Cloud-to-AI Workspace</p>
                <p className="text-white/40 text-xs mt-1">부산대학교 AI 교육 통합 플랫폼</p>
              </div>
              <div className="w-px h-8 bg-gray-300 relative"><ChevronDown className="w-4 h-4 text-gray-300 absolute -bottom-2 left-1/2 -translate-x-1/2" /></div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {[
                { name: 'Workspace for Education Plus', count: '28,000 라이선스', desc: 'Gmail·Docs·Drive 통합 협업 플랫폼', color: 'border-t-g-blue' },
                { name: 'Google AI Pro for Education', count: '28,000 라이선스', desc: 'Gemini 3.1 Pro 기반 AI 교수학습 도구', color: 'border-t-g-red' },
                { name: 'Gemini Enterprise', count: '1,000 계정', desc: '고성능 AI 모델 + 커스텀 에이전트 개발', color: 'border-t-g-yellow' },
              ].map((s) => (
                <div key={s.name} className={`bg-navy-50 rounded-xl p-5 border border-gray-200 border-t-[3px] ${s.color} text-center`}>
                  <p className="font-bold text-navy text-sm">{s.name}</p>
                  <p className="text-xs text-g-blue font-semibold mt-1">{s.count}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-3 mb-3">
              <div className="w-px h-6 bg-gray-300 relative"><ChevronDown className="w-4 h-4 text-gray-300 absolute -bottom-2 left-1/2 -translate-x-1/2" /></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { who: '학생 · 대학원생', count: '28,000명', icon: <GraduationCap className="w-5 h-5" /> },
                { who: '교원', count: '전원 대상', icon: <BookOpen className="w-5 h-5" /> },
              ].map((u) => (
                <div key={u.who} className="bg-navy-50 rounded-xl p-4 border border-gray-200 text-center flex flex-col items-center gap-2">
                  <div className="text-navy/40">{u.icon}</div>
                  <p className="text-sm font-semibold text-navy">{u.who}</p>
                  <p className="text-xs text-gray-400">{u.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 계정 등록 CTA */}
          <div className="max-w-4xl mx-auto bg-navy-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-navy mb-1">서비스 이용 및 계정 등록 방법</h4>
                <p className="text-gray-500 text-sm">부산대학교 통합 인증 로그인 후 구글 에듀테크 전용 라이선스 발급 및 등록이 즉시 가능합니다.</p>
                <p className="text-xs text-gray-400 mt-1">서비스 개시: 2026년 6월 초 · 계약일로부터 1년간 운영</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a href="#register-student" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 text-sm transition-all">
                  학생 계정 등록 <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-gray-400" />
                </a>
                <a href="#register-faculty" className="inline-flex items-center px-5 py-3 bg-navy text-white rounded-xl font-semibold hover:bg-navy-light text-sm transition-all shadow-sm">
                  교수 계정 등록 <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          4. AI 서비스 바로가기  —  독립 섹션
      ================================================================ */}
      <section id="ai-services" className="py-20 lg:py-28 bg-navy-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-g-green tracking-widest uppercase mb-3">AI Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">지금 바로 사용할 수 있는 Google AI</h2>
            <p className="mt-3 text-gray-500">부산대 계정으로 로그인하면 즉시 이용 가능합니다.</p>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {[
              { name: 'Gemini', desc: 'Gemini 3.1 Pro 기반 AI. 글쓰기, 분석, 코딩, 리서치 — Gmail·Docs 내 AI 작성 지원.', color: 'from-[#4285F4] to-[#6C63FF]' },
              { name: 'NotebookLM', desc: '논문·실험 데이터·서적을 업로드하면 AI가 요약·대화·인사이트를 도출하는 개인 연구 도우미.', color: 'from-[#EA4335] to-[#FF6D5A]' },
              { name: 'Google AI Studio', desc: 'Gemini API를 직접 실험하고 프로토타입을 빠르게 만들어보세요.', color: 'from-[#FBBC04] to-[#FF9800]' },
              { name: 'Cloud Skills Boost', desc: 'Google Cloud 기반 AI/ML 실습 교육과 공인 자격증 준비.', color: 'from-[#34A853] to-[#00C853]' },
            ].map((t) => (
              <a key={t.name} href="#" className="group bg-white p-6 lg:p-7 flex flex-col justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <p className={`text-xl font-extrabold bg-gradient-to-r ${t.color} bg-clip-text text-transparent mb-3`}>{t.name}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-gray-400 group-hover:text-navy mt-5 transition-colors">
                  바로가기 <ExternalLink className="w-3 h-3 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          5. 대상별 서비스  —  학생 / 교원 탭
      ================================================================ */}
      <section id="audience" className="py-20 lg:py-28 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-bold text-g-red tracking-widest uppercase mb-3">For You</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">나에게 맞는 서비스는?</h2>
            <p className="mt-3 text-gray-500">대상별로 제공되는 AI 교육 서비스를 확인하세요.</p>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {[
              { key: 'student', label: '학생', icon: <GraduationCap className="w-4 h-4" /> },
              { key: 'faculty', label: '교원', icon: <BookOpen className="w-4 h-4" /> },
            ].map((t) => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === t.key ? 'bg-navy text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {activeTab === 'student' && (
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <span className="text-xs font-bold text-g-blue tracking-widest uppercase">Student</span>
                  <h3 className="text-2xl font-bold text-navy mt-2 mb-5">학생을 위한 AI 교육</h3>
                  <ul className="space-y-3">
                    {[
                      'Google AI Pro for Education 무료 계정 발급',
                      'Gemini Academy 국제 자격증 연계 과정',
                      'AI Literacy MOOC 기초 소양 교육',
                      '단과대학 맞춤형 AI+X 융합 교육',
                      'NotebookLM 기반 개인 맞춤 학습 도우미',
                      'VIBETHON 아이디어 경진대회 참여',
                      '구글러 멘토링 & GTO 세션',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-g-blue mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  <a href="#register-student" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-g-blue hover:underline">
                    학생 계정 등록하기 <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-g-blue/5 to-g-blue/10 p-8 lg:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 text-g-blue/20 mx-auto mb-4" />
                    <p className="text-sm text-gray-500">학부생·대학원생 전원 대상</p>
                    <p className="text-3xl font-extrabold text-g-blue mt-1">Google AI Pro</p>
                    <p className="text-sm text-gray-500 mt-2">28,000 라이선스 무료 제공</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <span className="text-xs font-bold text-g-green tracking-widest uppercase">Faculty</span>
                  <h3 className="text-2xl font-bold text-navy mt-2 mb-5">교원을 위한 AI 연구·교수 지원</h3>
                  <ul className="space-y-3">
                    {[
                      'Google AI Pro for Education 연구 전용 계정',
                      'Gemini Enterprise 고성능 AI 모델 접근 (1,000 계정)',
                      'AI STAR 프로젝트 연구비 지원',
                      '교수학습 실증 연구 공모 (15개 과제 선정)',
                      'NotebookLM 기반 논문·데이터 분석 연구 인프라',
                      '맞춤형 AI 교수법 연수 프로그램',
                      'Google Korea 전문가 공동 세미나',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-g-green mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                  <a href="#register-faculty" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-g-green hover:underline">
                    교원 계정 등록하기 <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-g-green/5 to-g-green/10 p-8 lg:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="text-center">
                    <FlaskConical className="w-16 h-16 text-g-green/20 mx-auto mb-4" />
                    <p className="text-sm text-gray-500">교원 전원 + 연구팀 전용</p>
                    <p className="text-3xl font-extrabold text-g-green mt-1">Gemini Enterprise</p>
                    <p className="text-sm text-gray-500 mt-2">커스텀 에이전트 개발 + 고성능 AI</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ================================================================
          6. 교육 프로그램  —  좌우 비대칭 + Gemini Academy 단계 카드
      ================================================================ */}
      <section id="education" className="py-20 lg:py-28 bg-g-blue/[0.03] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: 텍스트 */}
            <div>
              <p className="text-sm font-bold text-g-blue tracking-widest uppercase mb-3">Education</p>
              <h2 className="text-3xl font-bold text-navy mb-3">교육 프로그램</h2>
              <p className="text-gray-500 leading-relaxed mb-8">Google과 함께 설계한 부산대 맞춤형 AI 교육 커리큘럼. 기초 소양부터 전공 융합, 국제 자격증까지 체계적으로 제공합니다.</p>

              <div className="space-y-6">
                {[
                  { tag: '인증/자격', title: '부산대 맞춤형 Gemini Academy', desc: '부산대 교육 환경 및 인프라를 반영한 맞춤형 Gemini Academy 운영 및 구글 공인 국제 자격증 연계 과정 기회 제공', color: 'bg-g-blue', cta: '과정 상세 보기', ctaColor: 'text-g-blue' },
                  { tag: '기초/소양', title: '모두를 위한 AI Literacy', desc: '부산대 우수 교수진과 현업 구글러(Googler)가 공동으로 기획 및 제작한 MOOC 기반의 전교생 대상 AI 기초 소양 교육', color: 'bg-g-red', cta: '강좌 리스트 보기', ctaColor: 'text-g-red' },
                  { tag: '융합/전공', title: '단과대학 맞춤형 AI+X 교육', desc: '각 전공 영역 고유의 도메인 지식(X)과 최신 AI 활용 기술을 융합 결합하여 학과별 경쟁력을 높이는 단과대 맞춤 교육', color: 'bg-g-yellow', cta: '전공별 로드맵 보기', ctaColor: 'text-amber-700' },
                  { tag: '커뮤니티', title: 'AI 챔피언 그룹 & 캠퍼스 아웃리치', desc: '학생 중심 AI 기반 학습혁신 가속화 그룹 구성 및 구글 임직원 캠퍼스 방문 실전 경험 공유 프로그램', color: 'bg-g-green', cta: '참여 방법 보기', ctaColor: 'text-g-green' },
                ].map((p) => (
                  <div key={p.title} className="flex gap-4 group cursor-pointer">
                    <div className={`${p.color} w-1 rounded-full shrink-0 group-hover:w-1.5 transition-all`}></div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{p.tag}</span>
                      <h4 className="font-bold text-navy mt-0.5">{p.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{p.desc}</p>
                      <span className={`inline-flex items-center mt-2 text-sm font-semibold ${p.ctaColor} group-hover:underline`}>{p.cta} <ChevronRight className="w-4 h-4 ml-0.5" /></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Gemini Academy 단계 카드 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-g-blue/10 text-g-blue flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-navy">Gemini Academy</p>
                  <p className="text-xs text-gray-400">Google 공인 인증 과정</p>
                </div>
              </div>
              <div className="space-y-3">
                {['AI 기초 활용', '프롬프트 엔지니어링', 'Workspace AI 통합', '전공별 Gemini 심화'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 bg-navy-50 px-5 py-4 rounded-xl">
                    <span className="w-7 h-7 rounded-full bg-g-blue text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <span className="text-sm font-medium text-navy">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-g-blue cursor-pointer hover:underline">
                과정 상세 보기 <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          7. 연구 프로그램  —  다크 배경 + AI STAR + 스크롤 리스트
      ================================================================ */}
      <section id="research" className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-g-green tracking-widest uppercase mb-3">Research</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">연구 프로그램</h2>
            <p className="mt-3 text-white/35">AI 교육혁신의 첫 단추는 수업의 변화로부터 시작됩니다. 수업 혁신을 위한 깊이 있는 연구와 실증을 Google과 함께 합니다.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* AI STAR sidebar */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-white/10 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-g-green" />
                <span className="text-xs font-bold tracking-widest text-g-green uppercase">AI STAR Project</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-5">AI STAR<br/>프로젝트</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-6">
                AI STAR는 부산대학교 에듀테크센터와 구글이 공동으로 추진하는 현장 맞춤형 AI 교육과정 실증 모델 연구 사업입니다. 교실 현장의 실제적인 수업 질적 개선을 도출합니다.
              </p>
              <div className="border-t border-white/10 pt-5 space-y-2.5 text-sm text-white/30">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-g-blue"></span> 기간: 2026학년도 연중 진행</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-g-red"></span> 협력: Google Korea 교육본부</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
                {[{ v: '15', l: '선정 과제' }, { v: '50+', l: '참여 연구자' }, { v: '8', l: '연구 분야' }].map((m) => (
                  <div key={m.l} className="text-center">
                    <p className="text-2xl font-extrabold text-white">{m.v}</p>
                    <p className="text-[10px] text-white/25 mt-0.5">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 15개 연구 과제 스크롤 리스트 */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white/60 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-g-green rounded-full"></span>
                2026학년도 연구 과제 공모 선정 리스트 (15개 과제)
              </h4>
              <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5 max-h-[500px] overflow-y-auto custom-scrollbar">
                {RESEARCH_LIST.map((item, i) => (
                  <div key={i} className="px-5 py-4 hover:bg-white/5 transition-colors flex items-start gap-3 group">
                    <span className="font-mono text-xs font-bold text-g-green mt-0.5 shrink-0 w-5 text-right">{(i + 1).toString().padStart(2, '0')}</span>
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          8. 참여 프로그램  —  상시 + 완료 + 예정 구분
      ================================================================ */}
      <section id="participation" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-bold text-g-red tracking-widest uppercase mb-3">Engagement</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">참여 프로그램</h2>
            <p className="mt-3 text-gray-500">구글과 함께 생생한 현장을 직접 경험하며 AI 실무의 진짜 답을 찾아갑니다.</p>
          </div>

          {/* ── 상시 운영 프로그램 ── */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-g-blue animate-pulse"></div>
              <span className="text-xs font-bold text-g-blue tracking-widest uppercase">상시 운영</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-2xl p-7 border border-gray-200">
                <h3 className="text-lg font-bold text-navy mb-2">Google 기술 & 전문가 세션</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">구글러와의 만남, 글로벌 테크 멘토링, GTO 세션 등 다채롭고 글로벌한 구글 엔지니어 실무 전문가 파트너 기술을 만나는 기회를 매달 제공합니다.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-g-blue/10 text-g-blue text-xs font-semibold">매월 정기 운영</span>
              </div>
              <div className="bg-navy-50 rounded-2xl p-7 border border-gray-200">
                <h3 className="text-lg font-bold text-navy mb-2">실전형 산학 협력 프로젝트</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">구글의 고도화된 AI 프레임워크 기술을 활용하여 지역 사회 문제, 실제 비즈니스 프로세스 문제를 창의적으로 해결해보는 실무형 프로젝트 기회를 경험합니다.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-g-blue/10 text-g-blue text-xs font-semibold">학기별 상시 운영</span>
              </div>
            </div>
          </div>

          {/* ── 모집 중 (NOW OPEN) ── */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-g-red animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 rounded-full bg-g-red"></div>
              </div>
              <span className="text-xs font-bold text-g-red tracking-widest uppercase">모집 중 · Now Open</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Google AI Pro 계정 발급', desc: '부산대 전체 학생·대학원생 대상 Google AI Pro for Education 무료 계정을 지금 바로 발급받으세요.', who: '학생 · 대학원생', deadline: '상시 발급', cta: '계정 등록하기', color: 'border-t-[#4285F4]' },
                { title: 'Gemini Academy 수강 신청', desc: '부산대 맞춤형 Gemini Academy 과정 수강 신청이 진행 중입니다. Google 공인 국제 자격증 연계.', who: '학생 · 교원', deadline: '선착순 마감', cta: '수강 신청하기', color: 'border-t-[#34A853]' },
                { title: 'AI Literacy MOOC 수강', desc: '부산대 교수진과 구글러가 공동 제작한 AI 기초 소양 MOOC를 수강하고 이수증을 받으세요.', who: '전교생 대상', deadline: '상시 수강', cta: '강좌 바로가기', color: 'border-t-[#FBBC04]' },
                { title: 'AI STAR 프로젝트 참여 연구원 모집', desc: '15개 선정 과제에 참여할 학부·대학원 연구원을 모집합니다. 연구비 지원.', who: '학부생 · 대학원생', deadline: '과제별 상이', cta: '모집 공고 보기', color: 'border-t-[#EA4335]' },
                { title: 'AI 챔피언 그룹 1기 모집', desc: '학생 중심 AI 학습혁신 커뮤니티 1기 멤버를 모집합니다. 구글 전문가 직접 멘토링.', who: '학생 누구나', deadline: '모집 중', cta: '지원하기', color: 'border-t-[#4285F4]' },
                { title: 'NotebookLM 연구 활용 워크숍', desc: '논문·실험 데이터를 NotebookLM에 업로드하고 AI 기반 연구 워크플로를 직접 체험해보세요.', who: '학생 · 교원', deadline: '월별 개최', cta: '참가 신청', color: 'border-t-[#34A853]' },
              ].map((item) => (
                <div key={item.title} className={`bg-white rounded-xl border border-gray-200 border-t-[3px] ${item.color} p-6 flex flex-col justify-between hover:shadow-md transition-shadow group`}>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-0.5 rounded-full bg-navy-50 text-navy text-[10px] font-semibold">{item.who}</span>
                      <span className="px-2 py-0.5 rounded-full bg-g-red/10 text-g-red text-[10px] font-bold">{item.deadline}</span>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-g-blue group-hover:underline">
                    {item.cta} <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── 완료된 행사 + 예정 행사 ── */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* 완료된 행사 */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-g-green"></div>
                <span className="text-xs font-bold text-g-green tracking-widest uppercase">완료된 행사</span>
              </div>
              <div className="space-y-3">
                {[
                  { date: '2026.05.13', title: 'AI 교육혁신 파트너십 세레모니', desc: 'Kevin Kells 글로벌 디렉터 · 최재원 총장 참석, 공식 파트너십 체결', tag: 'Partnership' },
                  { date: '2026.05', title: 'Gemini Connect Seoul', desc: '에듀테크센터장 공식 스피커 참여, 파트너십 사례 전 세계 소개', tag: 'Global' },
                  { date: '2026.05', title: 'Google Tech Orientation (GTO)', desc: '구글 엔지니어 실무 세션, 학생 대상 기술 오리엔테이션 진행', tag: 'Session' },
                  { date: '2026.06', title: 'Cloud-to-AI Workspace 전면 도입', desc: '28,000 라이선스 전교생·교원 대상 서비스 개시', tag: 'Launch' },
                ].map((event) => (
                  <div key={event.title} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-200 group hover:border-g-green/30 transition-colors">
                    <div className="shrink-0 text-center pt-0.5">
                      <p className="text-xs font-mono font-bold text-g-green">{event.date}</p>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-navy text-sm">{event.title}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-g-green/10 text-g-green text-[10px] font-bold shrink-0">{event.tag}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 예정된 행사 */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-g-yellow"></div>
                <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">예정된 행사</span>
              </div>
              <div className="space-y-3">
                {[
                  { date: '2026 하반기', title: 'VIBETHON 부산대 전용 바이브톤', desc: '전공 무관! No-Code/Low-Code 생태계에서 아이디어와 분위기(Vibe)로 펼치는 바이브코딩 축제', tag: 'Hackathon', featured: true },
                  { date: '2026 하반기', title: '캠퍼스 아웃리치 프로그램', desc: '구글 임직원 캠퍼스 방문, 실전 경험 공유 및 학생 멘토링', tag: 'Outreach' },
                  { date: '2026 하반기', title: 'AI 챔피언 그룹 발대식', desc: '학생 중심 AI 기반 학습혁신 가속화 커뮤니티 공식 출범', tag: 'Community' },
                  { date: '2026', title: 'Higher Ed Leader Series APAC', desc: 'APAC 고등교육 리더 시리즈 포럼 패널 토론자 초청', tag: 'Global' },
                  { date: '2026', title: 'TRAVEL BUSAN WITH GOOGLE GEMINI', desc: '구글 Gemini 기반 부산 지역 문제 해결 산학 프로젝트', tag: 'Project' },
                ].map((event) => (
                  <div key={event.title} className={`flex gap-4 rounded-xl p-5 border group transition-colors ${event.featured ? 'bg-amber-50/50 border-amber-200/60 hover:border-amber-300' : 'bg-white border-gray-200 hover:border-g-yellow/30'}`}>
                    <div className="shrink-0 text-center pt-0.5">
                      <p className="text-xs font-mono font-bold text-amber-600">{event.date}</p>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-navy text-sm">{event.title}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold shrink-0">{event.tag}</span>
                        {event.featured && <span className="px-2 py-0.5 rounded-full bg-g-red/10 text-g-red text-[10px] font-bold shrink-0">Featured</span>}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          9. 글로벌 네트워크  —  지도형 + 마일스톤
      ================================================================ */}
      <section id="network" className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold text-g-red tracking-widest uppercase mb-3">Global Network</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">글로벌 네트워크</h2>
            <p className="mt-3 text-gray-500">Google과 함께 글로벌 허브 교육혁신 생태계를 이끌어 갑니다.</p>
          </div>

          <div className="relative bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #0B1F4A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 flex flex-col items-center justify-center gap-6">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {[
                    { city: 'Busan', flag: '\u{1F1F0}\u{1F1F7}', active: true },
                    { city: 'Seoul', flag: '\u{1F1F0}\u{1F1F7}', active: true },
                    { city: 'Singapore', flag: '\u{1F1F8}\u{1F1EC}' },
                    { city: 'Tokyo', flag: '\u{1F1EF}\u{1F1F5}' },
                    { city: 'California', flag: '\u{1F1FA}\u{1F1F8}' },
                  ].map((loc) => (
                    <div key={loc.city} className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${loc.active ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-gray-200'}`}>
                      <span className="text-lg">{loc.flag}</span>
                      <span className="text-sm font-semibold">{loc.city}</span>
                      {loc.active && <div className="w-2 h-2 rounded-full bg-g-green animate-pulse"></div>}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 tracking-widest uppercase font-mono">PNU Global AI Education Hub</p>
              </div>

              <div className="lg:col-span-2 space-y-4">
                {[
                  { label: 'Gemini Connect Seoul', desc: '에듀테크센터장 공식 스피커 참여, 파트너십 사례 전 세계 소개', tag: 'GLOBAL', color: 'border-l-g-blue' },
                  { label: 'Google Korea & PNU', desc: 'Kevin Kells 글로벌 디렉터 참석, 교육혁신본부장 VIP 포럼', tag: 'PARTNER', color: 'border-l-g-red' },
                  { label: 'Higher Ed Leader Series APAC', desc: 'APAC 고등교육 리더 시리즈 포럼 패널 토론자 초청', tag: 'APAC', color: 'border-l-g-yellow' },
                ].map((ms) => (
                  <div key={ms.label} className={`bg-gray-50 rounded-xl p-5 border border-gray-200 border-l-[3px] ${ms.color}`}>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">{ms.tag} 2026</span>
                    <h4 className="font-bold text-navy text-sm mt-1">{ms.label}</h4>
                    <p className="text-xs text-gray-500 mt-1">{ms.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs font-mono text-gray-400 tracking-[0.2em] mt-10 uppercase">and more global milestones to come</p>
        </div>
      </section>


      {/* ================================================================
          10. CTA  —  참여 신청
      ================================================================ */}
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-g-blue/[0.06] rounded-full blur-[100px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">부산대학교 AI 혁신 생태계에<br/>참여하세요</h2>
          <p className="text-white/35 mb-10 text-lg">AI 거점대학의 교육·연구·협력 프로그램에 지금 바로 참여할 수 있습니다.</p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: '학생 참여', desc: 'AI Pro 계정 발급·교육과정', href: '#register-student' },
              { label: '교원 참여', desc: 'AI STAR·Gemini Enterprise', href: '#register-faculty' },
              { label: '문의하기', desc: 'pnucde@pusan.ac.kr', href: 'mailto:pnucde@pusan.ac.kr' },
            ].map((cta) => (
              <a key={cta.label} href={cta.href} className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-5 transition-all text-center group">
                <p className="text-white font-bold">{cta.label}</p>
                <p className="text-white/35 text-xs mt-1 group-hover:text-white/50 transition-colors">{cta.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="bg-gray-950 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-gray-800/50 pb-8 mb-8">
            <div>
              <p className="font-bold text-white text-sm mb-1">부산대학교 에듀테크센터</p>
              <p className="text-xs text-gray-600">ARISE PNU AI · AI EDTECH 교육혁신 생태계 구축 사업</p>
              <p className="text-xs text-gray-700 mt-1">본 페이지는 부산대학교 x Google for Education 협력 AI 교육 거점 대학 연계 프로그램 안내 페이지입니다.</p>
              <div className="flex gap-4 mt-2 text-[10px] text-gray-700">
                <span>문의: 교육혁신본부 에듀테크센터 ☎ 051-510-7886</span>
              </div>
            </div>
            <a href="mailto:pnucde@pusan.ac.kr" className="flex items-center gap-3 bg-gray-800/50 px-5 py-3 rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-colors">
              <Mail className="w-4 h-4 text-g-blue" />
              <div>
                <p className="text-[10px] text-gray-600 font-semibold">공식 문의처</p>
                <span className="text-white text-sm font-mono font-semibold">pnucde@pusan.ac.kr</span>
              </div>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-700">
            <div className="flex gap-4">
              <span className="hover:text-gray-400 cursor-pointer font-semibold text-gray-500">개인정보처리방침</span>
              <span>&bull;</span>
              <span className="hover:text-gray-400 cursor-pointer">이용약관</span>
            </div>
            <p>&copy; 2026 Pusan National University Edutech Center. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
