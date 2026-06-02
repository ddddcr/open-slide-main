import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

import imgAuthenticator from './assets/IMG_51963.jpg';
import imgQrScan from './assets/image-2025-4-18_10-45-30.png';
import imgGitlab2fa from './assets/image-2025-4-18_10-50-42.png';
import imgPinEntry from './assets/image-2025-4-18_10-56-36.png';
import imgGitlabTicket from './assets/image-20260518143535330.png';
import imgPreviewComment from './assets/image-20260522142337336.png';
import imgPreviewWindow from './assets/image-20260522143034633-9431439.png';
import imgPipelineDebug2 from './assets/image-20260522151755306-9434277.png';
import imgPipelineDebug from './assets/image-20260522152018801.png';
import imgCdnDeploy from './assets/image-20260522152901900.png';
import imgPaasDeploy from './assets/mac_1779432056893-9432084.png';

export const design: DesignSystem = {
  palette: { bg: '#0a0e14', text: '#e6edf3', accent: '#6ee7ff' },
  fonts: {
    display: "'JetBrains Mono', 'Menlo', 'Consolas', monospace",
    body: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  typeScale: { hero: 132, body: 34 },
  radius: 6,
};

const surface = '#121823';
const text2 = '#aab5c4';
const muted = '#6b7889';
const rule = '#1c2533';
const mint = '#84ffae';
const warm = '#ffa860';
const violet = '#c598ff';
const danger = '#ff7a85';

const TOTAL = 24;

const keyframes = `
@keyframes osa-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes osa-fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes osa-rise { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes osa-pulse { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
@keyframes osa-glow { 0%, 100% { box-shadow: 0 0 0 1px ${rule}, 0 0 24px rgba(110, 231, 255, 0.06); } 50% { box-shadow: 0 0 0 1px rgba(110, 231, 255, 0.5), 0 0 40px rgba(110, 231, 255, 0.25); } }
@keyframes osa-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes osa-scaleIn { from { transform: scale(0.94); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes binary-fall {
  0% { transform: translateY(-120%); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(120%); opacity: 0; }
}
@keyframes binary-blink {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.7; }
}
`;

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  boxSizing: 'border-box' as const,
};

const GridBg = () => (
  <>
    <style>{keyframes}</style>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(${rule} 1px, transparent 1px), linear-gradient(90deg, ${rule} 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        opacity: 0.2,
        maskImage: 'radial-gradient(circle at 20% 50%, black, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
  </>
);

const BinaryRain = () => {
  const columns = 82;
  const rows = 24;
  const colData = Array.from({ length: columns }, (_, ci) => ({
    id: ci,
    delay: Math.random() * -10,
    duration: 3 + Math.random() * 5,
    chars: Array.from({ length: rows }, () => (Math.random() > 0.5 ? '1' : '0')),
  }));

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        overflow: 'hidden',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 60%)',
        opacity: 0.45,
      }}
    >
      {colData.map((col) => (
        <div
          key={col.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 14,
            color: 'var(--osd-accent)',
            lineHeight: 1,
            animation: `binary-fall ${col.duration}s linear ${col.delay}s infinite`,
          }}
        >
          {col.chars.map((ch, ri) => (
            <span
              key={ri}
              style={{
                animation: `binary-blink ${1.5 + Math.random() * 2}s ease-in-out ${Math.random() * -3}s infinite`,
              }}
            >
              {ch}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const Eyebrow = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <div
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--osd-accent)',
      animation: `osa-fadeUp 600ms ease-out ${delay}ms both`,
    }}
  >
    {children}
  </div>
);

const Heading = ({
  children,
  size = 80,
  delay = 0,
}: {
  children: ReactNode;
  size?: number;
  delay?: number;
}) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      margin: 0,
      color: 'var(--osd-text)',
      animation: `osa-fadeUp 700ms ease-out ${delay}ms both`,
    }}
  >
    {children}
  </h2>
);

const Footer = ({ section, n }: { section: string; n: number }) => (
  <div
    style={{
      position: 'absolute',
      left: 100,
      right: 100,
      bottom: 48,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'var(--osd-font-display)',
      fontSize: 20,
      color: muted,
      borderTop: `1px solid ${rule}`,
      paddingTop: 18,
      letterSpacing: '0.06em',
    }}
  >
    <span>
      <span style={{ color: 'var(--osd-accent)', marginRight: 12 }}>●</span>
      {section}
      <span style={{ color: rule, margin: '0 18px' }}>·</span>
      <span style={{ color: text2 }}>项目发布指南</span>
    </span>
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {String(n).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
    </span>
  </div>
);

const StepCard = ({
  steps,
  tint = 'var(--osd-accent)',
  delay = 0,
}: {
  steps: string[];
  tint?: string;
  delay?: number;
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      animation: `osa-fadeUp 600ms ease-out ${delay}ms both`,
    }}
  >
    {steps.map((step, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          padding: '20px 24px',
          background: surface,
          border: `1px solid ${rule}`,
          borderLeft: `3px solid ${tint}`,
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            color: tint,
            fontVariantNumeric: 'tabular-nums',
            flexShrink: 0,
            minWidth: 36,
          }}
        >
          {String(i + 1).padStart(2, '0')}
        </span>
        <span style={{ fontSize: 'var(--osd-size-body)', color: text2, lineHeight: 1.4 }}>
          {step}
        </span>
      </div>
    ))}
  </div>
);

const AlertBox = ({
  children,
  color = warm,
  delay = 0,
}: {
  children: ReactNode;
  color?: string;
  delay?: number;
}) => (
  <div
    style={{
      borderLeft: `3px solid ${color}`,
      background: surface,
      borderRadius: 8,
      padding: '20px 28px',
      fontSize: 'var(--osd-size-body)',
      color: muted,
      lineHeight: 1.6,
      animation: `osa-fadeUp 600ms ease-out ${delay}ms both`,
    }}
  >
    {children}
  </div>
);

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      background: surface,
      border: `1px solid ${rule}`,
      borderRadius: 8,
      padding: '28px 32px',
      fontFamily: 'var(--osd-font-display)',
      fontSize: 22,
      lineHeight: 1.8,
      color: text2,
    }}
  >
    {children}
  </div>
);

const InfoCard = ({
  title,
  titleColor = 'var(--osd-accent)',
  children,
}: {
  title: string;
  titleColor?: string;
  children: ReactNode;
}) => (
  <div
    style={{
      background: surface,
      border: `1px solid ${rule}`,
      borderTop: `3px solid ${titleColor}`,
      borderRadius: 8,
      padding: 36,
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 22,
        color: titleColor,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

const Cover: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <BinaryRain />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: -200,
        background: `radial-gradient(closest-side, rgba(110,231,255,0.18), transparent 70%)`,
        animation: 'osa-float 6s ease-in-out infinite',
        pointerEvents: 'none',
      }}
    />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        maxWidth: 1500,
      }}
    >
      <Eyebrow>[ weekly sharing · deployment · v1 ]</Eyebrow>
      <div style={{ height: 48 }} />
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          margin: 0,
          animation: 'osa-fadeUp 700ms ease-out 200ms both',
        }}
      >OpenMirror</h1>
      <div style={{ height: 16 }} />
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          margin: 0,
          color: 'var(--osd-accent)',
          animation: 'osa-fadeUp 700ms ease-out 400ms both',
        }}
      >
        项目发布至公司生产环境
      </h1>
      <div style={{ height: 36 }} />
      <p
        style={{
          fontSize: 36,
          lineHeight: 1.45,
          color: text2,
          maxWidth: 1300,
          margin: 0,
          animation: 'osa-fadeUp 700ms ease-out 600ms both',
        }}
      >
        面向设计人员的完整发布指南 — <span style={{ color: 'var(--osd-accent)' }}>CDN</span> /{' '}
        <span style={{ color: mint }}>PaaS</span> 双通道
      </p>
      <div style={{ height: 56 }} />
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 18,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 22,
          color: muted,
          animation: 'osa-fadeIn 800ms ease-out 900ms both',
        }}
      >
        <span style={{ color: mint }}>$</span>
        <span>2026-05-22</span>
        <span style={{ color: rule }}>·</span>
        <span>@张成润</span>
        <span style={{ color: rule }}>·</span>
        <span>press F for play</span>
      </div>
    </div>
    <Footer section="cover" n={1} />
  </div>
);

const QuickReference: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>00 · 适用场景速查</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={88}>如何选择发布方式</Heading>
      <div style={{ height: 48 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.5fr 1fr',
            gap: 40,
            alignItems: 'center',
            background: surface,
            border: `1px solid ${rule}`,
            borderLeft: `3px solid ${mint}`,
            borderRadius: 8,
            padding: '28px 36px',
            animation: `osa-fadeUp 500ms ease-out 300ms both`,
          }}
        >
          <div>
            <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--osd-text)' }}>
              纯静态页面，无数据库，无内网 API
            </div>
            <div style={{ fontSize: 20, color: muted, marginTop: 6 }}>外网/内网用户可访问</div>
          </div>
          <div style={{ fontSize: 22, color: text2 }}>前置条件：OpenMirror</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              fontFamily: 'var(--osd-font-display)',
              color: mint,
              textAlign: 'right',
            }}
          >
            CDN 发布
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.5fr 1fr',
            gap: 40,
            alignItems: 'center',
            background: surface,
            border: `1px solid ${rule}`,
            borderLeft: `3px solid var(--osd-accent)`,
            borderRadius: 8,
            padding: '28px 36px',
            animation: `osa-fadeUp 500ms ease-out 450ms both`,
          }}
        >
          <div>
            <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--osd-text)' }}>
              有后端服务 / 数据库 / 内网 API 依赖
            </div>
            <div style={{ fontSize: 20, color: muted, marginTop: 6 }}>外网或内网</div>
          </div>
          <div style={{ fontSize: 22, color: text2 }}>
            前置条件：OpenMirror+外网 GitLab 仓库+双因子认证
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              fontFamily: 'var(--osd-font-display)',
              color: 'var(--osd-accent)',
              textAlign: 'right',
            }}
          >
            PaaS 发布
          </div>
        </div>
      </div>
      <div style={{ height: 32 }} />
      <AlertBox color={warm} delay={600}>
        <strong style={{ color: 'var(--osd-text)' }}>判定依据：</strong>
        只要项目存在后端服务调用、数据库读写或内网 API 依赖，就必须走 PaaS 发布，不可直接使用 CDN。
      </AlertBox>
    </div>
    <Footer section="scenario" n={2} />
  </div>
);

const Section1: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <BinaryRain />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Eyebrow delay={0}>Chapter 01</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={140} delay={150}>
        前置准备
      </Heading>
      <div style={{ height: 28 }} />
      <p
        style={{
          fontSize: 36,
          color: text2,
          animation: 'osa-fadeUp 700ms ease-out 400ms both',
        }}
      >
        GitLab 账号 · 安全考试 · 双因子认证 · 项目权限
      </p>
    </div>
    <Footer section="preparation" n={3} />
  </div>
);

const GitLabAccount: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>1.1 GitLab 账号申请</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>申请外网 GitLab 账号</Heading>
        <div style={{ height: 32 }} />
        <StepCard
          delay={200}
          steps={[
            '提交工单申请外网 GitLab 账号',
            '工单地址：wos.myhexin.com（流程ID: 4520）',
            '审批链：职能上级 → 行政上级 → 公司领导',
            '所属业务选择：自己负责的业务部门',
            '开通过程中问题请咨询 @林挺',
          ]}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgGitlabTicket}
          alt="工单截图"
          style={{
            maxWidth: '100%',
            maxHeight: 680,
            borderRadius: 8,
            border: `1px solid ${rule}`,
          }}
        />
      </div>
    </div>
    <Footer section="gitlab" n={4} />
  </div>
);

const SecurityExam: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.2 安全考试</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>安全制度学习与考试</Heading>
      <div style={{ height: 16 }} />
      <p
        style={{
          fontSize: 'var(--osd-size-body)',
          color: text2,
          animation: 'osa-fadeUp 600ms ease-out 200ms both',
        }}
      >
        提交工单后需先完成安全考试；网络子工单开通后才会正式创建 GitLab 账号
      </p>
      <div style={{ height: 40 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {[
          {
            title: '安全制度学习',
            link: 'ehr.myhexin.com 电子看板',
            status: '必学',
            accent: 'var(--osd-accent)',
          },
          {
            title: '合规安全考试',
            link: 'vanishapp.myhexin.com',
            status: '必考，需通过',
            accent: mint,
          },
        ].map((item, i) => (
          <InfoCard key={i} title={`考试项目 ${i + 1}`} titleColor={item.accent}>
            <div
              style={{ fontSize: 32, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 12 }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 22, color: muted, marginBottom: 24 }}>{item.link}</div>
            <div
              style={{
                display: 'inline-block',
                background: `${item.accent}18`,
                color: item.accent,
                padding: '6px 16px',
                borderRadius: 4,
                fontSize: 18,
                fontWeight: 600,
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {item.status}
            </div>
          </InfoCard>
        ))}
      </div>
    </div>
    <Footer section="security" n={5} />
  </div>
);

const TwoFactor1: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>1.3 双因子认证（2FA）</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>步骤一</Heading>
        <div style={{ height: 28 }} />
        <StepCard
          delay={200}
          steps={[
            '手机安装 Microsoft Authenticator（iOS / Android 均可）',
            '安装后可关闭该 App 的网络权限，支持离线使用',
            '外网 GitLab 强制要求双因子认证，未绑定无法推送代码',
          ]}
        />
        <div style={{ height: 24 }} />
        <AlertBox color="var(--osd-accent)" delay={500}>
          <strong style={{ color: 'var(--osd-text)' }}>后续登录：</strong>
          每次登录 GitLab，均需从 Authenticator 获取最新的 6 位 PIN 码
        </AlertBox>
      </div>
      <div
        style={{
          flex: 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgAuthenticator}
          alt="Microsoft Authenticator"
          style={{
            maxHeight: 540,
            borderRadius: 8,
            border: `1px solid ${rule}`,
          }}
        />
      </div>
    </div>
    <Footer section="2fa" n={6} />
  </div>
);

const TwoFactor2: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.3 双因子认证（2FA）</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>步骤二：绑定 GitLab</Heading>
      <div style={{ height: 56 }} />
      <div style={{ display: 'flex', gap: 28, margin: 48 }}>
        {[
          { img: imgGitlab2fa, label: '打开Authenticator 进入双因子绑定页面' },
          { img: imgQrScan, label: 'Authenticator 扫描 QR 码' },
          { img: imgPinEntry, label: '输入 6 位 PIN 码完成绑定' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 180}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 380,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 16,
              }}
            />
            <div
              style={{
                fontSize: 20,
                color: text2,
                textAlign: 'center',
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="2fa" n={7} />
  </div>
);

const ProjectCreate: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.4 项目创建与权限</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>在 Gitlab 创建项目与权限配置</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="自行创建项目" titleColor="var(--osd-accent)">
          <StepCard
            steps={[
              '在 GitLab 目标 Group 下自行创建项目',
              '需具备该 Group 的 Developer 及以上权限',
              '若缺少权限，联系 Group 管理员或 Owner',
            ]}
          />
        </InfoCard>
        <InfoCard title="向 ued-project 推送" titleColor={mint}>
          <StepCard
            steps={[
              '管理员在指定路径下新建项目',
              '通过常规 Git 推送上传代码',
              '示例：poster-generator',
            ]}
          />
        </InfoCard>
      </div>
      <div style={{ height: 24 }} />
      <AlertBox color="var(--osd-accent)" delay={400}>
        若找不到子 Group 的 Owner，可联系{' '}
        <strong style={{ color: 'var(--osd-text)' }}>@林挺</strong> 或对应二级 Group 的 Owner
      </AlertBox>
    </div>
    <Footer section="project" n={8} />
  </div>
);

const Section2: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <BinaryRain />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Eyebrow delay={0}>Chapter 02</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={140} delay={150}>
        代码仓库操作
      </Heading>
      <div style={{ height: 28 }} />
      <p
        style={{
          fontSize: 36,
          color: text2,
          animation: 'osa-fadeUp 700ms ease-out 400ms both',
        }}
      >
        克隆 · 工作流 · 迁移 · Commit 规范
      </p>
    </div>
    <Footer section="git" n={9} />
  </div>
);

const CloneRepo: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.1 克隆仓库</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>获取项目代码</Heading>
      <div style={{ height: 32 }} />
      <CodeBlock>
        <div style={{ color: muted, marginBottom: 8 }}># 克隆到本地（默认创建项目同名文件夹）</div>
        <div style={{ color: mint }}>git clone http://gitlab-outer.myhexin.com/.../project.git</div>
        <div style={{ color: muted, margin: '16px 0 8px' }}># 克隆到当前目录（末尾加 .）</div>
        <div style={{ color: mint }}>
          git clone http://gitlab-outer.myhexin.com/.../project.git .
        </div>
        <div style={{ color: muted, margin: '16px 0 8px' }}># 克隆指定分支</div>
        <div style={{ color: mint }}>
          git clone -b work-ued-20475 http://gitlab-outer.myhexin.com/.../project.git
        </div>
      </CodeBlock>
    </div>
    <Footer section="git" n={10} />
  </div>
);

const DailyWorkflow: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.2 日常开发工作流</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>标准 Git 工作流</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32 }}>
        <CodeBlock>
          <div>
            <span style={{ color: mint }}>git checkout -b work-ued-20475 </span> #创建并切换分支
          </div>
          <div>
            <span style={{ color: mint }}>git pull</span> #拉取最新分支
          </div>
          <div>
            <span style={{ color: mint }}>git add -A</span> #添加所有修改
          </div>
          <div>
            <span style={{ color: mint }}>git commit -m "UED-20475 feat ..."</span>{' '}
            #提交暂存区的更改
          </div>
          <div>
            <span style={{ color: mint }}>git push -u origin work-ued-20475</span> #将分支推送至仓库
          </div>
        </CodeBlock>
        <InfoCard title="一句话记忆" titleColor="var(--osd-accent)">
          <div style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.7, color: text2 }}>
            修改代码 → <strong style={{ color: 'var(--osd-text)' }}>add -A</strong> →{' '}
            <strong style={{ color: 'var(--osd-text)' }}>commit</strong> →{' '}
            <strong style={{ color: 'var(--osd-text)' }}>pull</strong> →{' '}
            <strong style={{ color: 'var(--osd-text)' }}>push</strong>
          </div>
          <div style={{ marginTop: 20, fontSize: 22, color: muted }}>
            分支名建议与 Jira 任务号关联
          </div>
        </InfoCard>
      </div>
    </div>
    <Footer section="git" n={11} />
  </div>
);

const ZipMigration: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.3 特殊场景：ZIP 项目迁移</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>ZIP 项目迁移至 GitLab</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="阶段一：初始推送" titleColor="var(--osd-accent)">
          <CodeBlock>
            <div>
              <span style={{ color: mint }}>git init</span> #本地初始化一个新的 Git 仓库
            </div>
            <div>
              <span style={{ color: mint }}>git remote add origin &lt;仓库地址&gt;</span>{' '}
              #添加远程仓库地址
            </div>
            <div>
              <span style={{ color: mint }}>git pull origin work-ued-20475</span> #拉取远程
              work-ued-20475 分支的代码到本地
            </div>
            <div>
              <span style={{ color: mint }}>git add .</span> #添加所有的文件到暂存区
            </div>
            <div>
              <span style={{ color: mint }}>git commit -m "UED-20475 feat ..."</span>{' '}
              #提交更改到本地仓库
            </div>
            <div>
              <span style={{ color: danger }}>git push -f origin master:work-ued-20475</span>{' '}
              #强制推送本地到远程分支
            </div>
          </CodeBlock>
        </InfoCard>
        <InfoCard title="阶段二：冲突补救" titleColor={mint}>
          <CodeBlock>
            <div>
              <span style={{ color: mint }}>git fetch origin work-ued-20475</span> #下载远程
              work-ued-20475fenzhi 的最新代码，但不合并
            </div>
            <div>
              <span style={{ color: mint }}>git reset --soft origin/work-ued-20475</span>{' '}
              #软重置：将当前分支重置到远程分支的状态
            </div>
            <div>
              <span style={{ color: mint }}>git commit -m "UED-20475 feat ..."</span>{' '}
              #将暂存区的更改提交为一个新的 commit
            </div>
            <div>
              <span style={{ color: mint }}>git push origin work-ued-20475</span>{' '}
              #推送新提交到远程分支
            </div>
          </CodeBlock>
        </InfoCard>
      </div>
      <div style={{ height: 24 }} />
      <AlertBox color={danger} delay={400}>
        <strong style={{ color: 'var(--osd-text)' }}>危险操作：</strong>git push -f
        会覆盖远程分支历史。仅限远程分支为空或确认无其他协作者时使用。
      </AlertBox>
    </div>
    <Footer section="git" n={12} />
  </div>
);

const CommitMsg: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.4 Commit Message 规范</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>提交信息格式</Heading>
      <div style={{ height: 32 }} />
      <div
        style={{
          background: surface,
          border: `1px solid ${rule}`,
          borderRadius: 8,
          padding: '28px 40px',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 32,
          color: text2,
          textAlign: 'center',
          animation: 'osa-fadeUp 600ms ease-out 200ms both',
        }}
      >
        <span style={{ color: mint }}>UED-20475</span> <span style={{ color: warm }}>feat</span>{' '}
        <span>新增海报生成功能</span>
      </div>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { type: 'feat', desc: '新功能' },
          { type: 'fix', desc: '修复 Bug' },
          { type: 'docs', desc: '文档变更' },
          { type: 'style', desc: '代码格式' },
          { type: 'refactor', desc: '代码重构' },
          { type: 'test', desc: '测试代码' },
          { type: 'chore', desc: '构建/杂项' },
          { type: '...', desc: '更多类型' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: surface,
              border: `1px solid ${rule}`,
              borderRadius: 8,
              padding: '18px 14px',
              textAlign: 'center',
              animation: `osa-fadeUp 400ms ease-out ${300 + i * 60}ms both`,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: 'var(--osd-accent)',
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {item.type}
            </div>
            <div style={{ fontSize: 18, color: muted, marginTop: 6 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="git" n={13} />
  </div>
);

const OneCommandStart: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Eyebrow delay={0}>GET STARTED</Eyebrow>
      <div style={{ height: 36 }} />
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 120,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          margin: 0,
          color: 'var(--osd-text)',
          animation: 'osa-fadeUp 700ms ease-out 200ms both',
        }}
      >一句话启动</h1>
      <div style={{ height: 48 }} />

      <div
        style={{
          background: surface,
          border: `1px solid ${rule}`,
          borderRadius: 12,
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          animation: 'osa-fadeUp 600ms ease-out 500ms both',
        }}
      >
        <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, color: muted }}>$</span>
        <span
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 28,
            color: 'var(--osd-accent)',
          }}
        >/opc-harness</span>
        <span style={{ fontSize: 28, color: text2 }}>帮我本地初始化一个新的 Git 仓库 </span>
      </div>
      <div style={{ height: 64 }} />
      <div
        style={{
          background: surface,
          border: `1px solid ${rule}`,
          borderRadius: 12,
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          animation: 'osa-fadeUp 600ms ease-out 500ms both',
        }}
      >
        <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, color: muted }}>$</span>
        <span
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 28,
            color: 'var(--osd-accent)',
          }}
        >/opc-harness</span>
        <span style={{ fontSize: 28, color: text2 }}>帮我将刚刚修改的代码发布到测试环境，需要静态资源发布，不要用灰度。pass 的 token 是：paas_**</span>
      </div>
      <div style={{ height: 64 }} />
      <div
        style={{
          background: surface,
          border: `1px solid ${rule}`,
          borderRadius: 12,
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          animation: 'osa-fadeUp 600ms ease-out 500ms both',
        }}
      >
        <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, color: muted }}>$</span>
        <span
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 28,
            color: 'var(--osd-accent)',
          }}
        >/opc-harness</span>
        <span style={{ fontSize: 28, color: text2 }}>提交代码到远程</span>
      </div>
    </div>
    <Footer section="opc" n={14} />
  </div>
);

const Section3: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <BinaryRain />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Eyebrow delay={0}>Chapter 03</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={140} delay={150}>
        CDN 发布
      </Heading>
      <div style={{ height: 28 }} />
      <p
        style={{
          fontSize: 36,
          color: text2,
          animation: 'osa-fadeUp 700ms ease-out 400ms both',
        }}
      >
        纯静态项目 · 无后端依赖 · 快速上线
      </p>
    </div>
    <Footer section="cdn" n={15} />
  </div>
);

const CdnDeploy: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>3. CDN 发布流程</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>纯静态项目发布步骤</Heading>
        <div style={{ height: 32 }} />
        <StepCard
          delay={200}
          steps={[
            '确保项目已推送至外网 GitLab 仓库',
            '在 OpenMirror 中执行 CDN 发布指令',
            '系统返回静态测试链接',
            '点击链接访问，确认页面渲染正常',
          ]}
        />
        <div style={{ height: 24 }} />
        <AlertBox color={danger} delay={500}>
          <strong style={{ color: 'var(--osd-text)' }}>风险提示：</strong>CDN 发布遇到问题时 AI
          可能自动修改代码。建议发布前先在本地备份一份可运行代码。
        </AlertBox>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgCdnDeploy}
          alt="CDN 发布截图"
          style={{
            maxWidth: '100%',
            maxHeight: 680,
            borderRadius: 8,
            border: `1px solid ${rule}`,
          }}
        />
      </div>
    </div>
    <Footer section="cdn" n={16} />
  </div>
);

const Section4: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <BinaryRain />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        zIndex: 1,
      }}
    >
      <Eyebrow delay={0}>Chapter 04</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={140} delay={150}>
        PaaS 发布
      </Heading>
      <div style={{ height: 28 }} />
      <p
        style={{
          fontSize: 36,
          color: text2,
          animation: 'osa-fadeUp 700ms ease-out 400ms both',
        }}
      >
        有后端服务 · 数据库依赖 · 内网 API
      </p>
    </div>
    <Footer section="paas" n={18} />
  </div>
);

const PaasPrepare: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.1 准备工作</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>PaaS 发布前置步骤</Heading>
      <div style={{ height: 32 }} />
      <StepCard
        delay={200}
        steps={[
          '找对应项目的前端开发负责人提供 GitLab 项目地址并开通权限',
          '获取 GitLab 仓库代码：git clone <仓库地址>',
          '调用 OPC Skill 切到本次功能分支（与 Jira 任务号关联）',
          '在 OpenMirror 对话中发送「启动程序预览」',
          '出现报错时，将报错日志复制给 AI 让其解决',
        ]}
      />
      <div style={{ height: 24 }} />
      <AlertBox color={warm} delay={500}>
        <strong style={{ color: 'var(--osd-text)' }}>常见问题 ERR_CONNECTION_REFUSED：</strong>
        本地服务未启动或端口被占用。检查项目是否已执行 npm run dev。
      </AlertBox>
    </div>
    <Footer section="paas" n={17} />
  </div>
);

const FrontendDebug: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.3 前端页面调试</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>调试方式与预览</Heading>
      <div style={{ height: 56 }} />
      <div style={{ display: 'flex', gap: 28 }}>
        {[
          { img: imgPreviewComment, label: '预览窗口评论标注' },
          { img: imgPreviewWindow, label: 'OpenMirror 预览界面' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 180}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 380,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 16,
              }}
            />
            <div
              style={{
                fontSize: 20,
                color: text2,
                textAlign: 'center',
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="paas" n={19} />
  </div>
);

const DataBinding: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.4 数据绑定与发布</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>Mock 数据 → 真实数据 → 发布测试环境 → ...</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="第一步：绑定 Mock 数据" titleColor="var(--osd-accent)">
          <div style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: text2 }}>
            开发提供 YAPI 数据链接，调用 OPC Skill 绑定：
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 20,
              color: mint,
              background: 'rgba(0,0,0,0.3)',
              padding: 16,
              borderRadius: 8,
            }}
          >
            /opc-harness 帮我绑定这个接口数据 {'<'}YAPI链接{'>'}
          </div>
        </InfoCard>
        <InfoCard title="第二步：发布测试环境" titleColor={mint}>
          <div style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: text2 }}>
            调用 OPC 发布测试，等待流水线执行结果全部通过：
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 20,
              color: mint,
              background: 'rgba(0,0,0,0.3)',
              padding: 16,
              borderRadius: 8,
            }}
          >
            /opc-harness 发布到测试环境
          </div>
        </InfoCard>
      </div>
      <div style={{ height: 24 }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          animation: 'osa-fadeUp 600ms ease-out 400ms both',
        }}
      >
        <img
          src={imgPaasDeploy}
          alt="PaaS 发布截图"
          style={{ maxHeight: 340, borderRadius: 8, border: `1px solid ${rule}` }}
        />
      </div>
    </div>
    <Footer section="paas" n={19} />
  </div>
);

const PipelineDebug: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>4.5 流水线排障</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>流水线失败排查</Heading>
        <div style={{ height: 32 }} />
        <StepCard
          delay={200}
          steps={[
            '进入 PaaS 流水线执行结果页面',
            '复制具体报错日志',
            '将报错日志粘贴给 AI，由其分析并修复',
            '修复后重新触发发布',
          ]}
        />
        <div style={{ height: 24 }} />
        <AlertBox color="var(--osd-accent)" delay={500}>
          若 AI 无法修复，需联系对应业务的开发人员协助排查
        </AlertBox>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          animation: 'osa-fadeUp 600ms ease-out 300ms both',
        }}
      >
        <img
          src={imgPipelineDebug}
          alt="流水线排障"
          style={{
            flex: 1,
            width: '100%',
            minHeight: 260,
            objectFit: 'contain',
            borderRadius: 8,
            background: surface,
            border: `1px solid ${rule}`,
            padding: 8,
          }}
        />
        <img
          src={imgPipelineDebug2}
          alt="排障截图"
          style={{
            flex: 1,
            width: '100%',
            minHeight: 260,
            objectFit: 'contain',
            borderRadius: 8,
            background: surface,
            border: `1px solid ${rule}`,
            padding: 8,
          }}
        />
      </div>
    </div>
    <Footer section="paas" n={21} />
  </div>
);

const VerifyRollback: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>5. 发布验证与回滚</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>发布前 Checklist</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[
          { label: '流水线全绿', desc: '所有 Stage 均显示成功' },
          { label: '测试 URL 可访问', desc: '浏览器能正常打开，无 502/504' },
          { label: '核心功能正常', desc: '页面渲染正常，主要交互可点击' },
          { label: '移动端适配', desc: '手机预览无错位，触摸事件正常' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: surface,
              border: `1px solid ${rule}`,
              borderTop: `3px solid ${mint}`,
              borderRadius: 8,
              padding: '22px 28px',
              animation: `osa-fadeUp 400ms ease-out ${200 + i * 80}ms both`,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--osd-text)' }}>
              {item.label}
            </div>
            <div style={{ fontSize: 20, color: muted, marginTop: 6 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
      <AlertBox color={danger} delay={500}>
        <strong style={{ color: 'var(--osd-text)' }}>回滚操作：</strong>
        若发布后发现问题，立即联系对应项目的前端开发负责人，通过 OPC 回滚指令或 GitLab
        回滚到上一版本标签。
      </AlertBox>
    </div>
    <Footer section="verify" n={22} />
  </div>
);

const FAQ: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>6. 常见问题</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>FAQ 速查</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          {
            q: 'PaaS 流水线失败',
            a: '代码规范未通过（ESLint / 类型检查）。查看具体 Stage 日志，修复错误后重新发布。',
          },
          {
            q: 'ERR_CONNECTION_REFUSED',
            a: '本地服务未启动或端口被占用。检查端口占用，执行 npm run dev。',
          },
          {
            q: '绑定接口后无数据',
            a: 'Mock 地址错误或 CORS 限制。确认 YAPI 链接在浏览器直接访问正常。',
          },
          { q: 'git push 被拒绝', a: '远程有更新的提交。先执行 git pull，解决冲突后再 push。' },
          {
            q: '手机预览无法访问',
            a: '局域网限制或防火墙。确认手机和电脑在同一网络，或使用手机浏览器直接访问测试链接。',
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: surface,
              border: `1px solid ${rule}`,
              borderRadius: 8,
              padding: '18px 28px',
              animation: `osa-fadeUp 400ms ease-out ${200 + i * 80}ms both`,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--osd-accent)',
                fontFamily: 'var(--osd-font-display)',
                marginBottom: 6,
              }}
            >
              Q: {item.q}
            </div>
            <div style={{ fontSize: 'var(--osd-size-body)', color: text2, lineHeight: 1.5 }}>
              A: {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="faq" n={23} />
  </div>
);

const Appendix: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>7. 附录</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>内部链接汇总</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { name: '外网 GitLab', url: 'gitlab-outer.myhexin.com', usage: '代码仓库' },
          {
            name: 'GitLab 使用说明',
            url: 'cf.myhexin.com/spaces/TCLOUD/pages/1307256516',
            usage: '官方文档',
          },
          { name: '工单系统', url: 'wos.myhexin.com', usage: '账号 / 权限申请' },
          { name: 'YAPI 平台', url: 'yapi.myhexin.com', usage: '接口文档与 Mock 数据' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: surface,
              border: `1px solid ${rule}`,
              borderRadius: 8,
              padding: '18px 28px',
              display: 'grid',
              gridTemplateColumns: '1.5fr 2fr 1fr',
              gap: 40,
              alignItems: 'center',
              animation: `osa-fadeUp 400ms ease-out ${200 + i * 80}ms both`,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--osd-text)' }}>
              {item.name}
            </div>
            <div
              style={{
                fontSize: 22,
                color: 'var(--osd-accent)',
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {item.url}
            </div>
            <div style={{ fontSize: 20, color: muted, textAlign: 'right' }}>{item.usage}</div>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
      <AlertBox color="var(--osd-accent)" delay={500}>
        本文档仍在完善中，如发现遗漏或错误，请联系{' '}
        <strong style={{ color: 'var(--osd-text)' }}>@张成润</strong> 反馈
      </AlertBox>
    </div>
    <Footer section="appendix" n={24} />
  </div>
);

export const meta: SlideMeta = { title: 'OpenMirror 项目发布指南' };

export default [
  Cover,
  QuickReference,
  Section1,
  GitLabAccount,
  SecurityExam,
  TwoFactor1,
  TwoFactor2,
  ProjectCreate,
  Section2,
  CloneRepo,
  DailyWorkflow,
  ZipMigration,
  CommitMsg,
  OneCommandStart,
  Section3,
  CdnDeploy,
  Section4,
  PaasPrepare,
  FrontendDebug,
  DataBinding,
  PipelineDebug,
  VerifyRollback,
  FAQ,
  Appendix,
] satisfies Page[];
