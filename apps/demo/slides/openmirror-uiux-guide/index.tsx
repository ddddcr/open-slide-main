import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';
import imgClaudeConfig from './assets/img-claude-config.png';
import imgDataBinding from './assets/img-data-binding.png';
import imgDebug from './assets/img-debug.png';
import imgLoginEmail from './assets/img-login-email.png';
import imgLoginQr from './assets/img-login-qr.png';
import imgMacPerm from './assets/img-mac-perm.png';
import imgNetwork1 from './assets/img-network-1.png';
import imgNetwork2 from './assets/img-network-2.png';
import imgNetwork3 from './assets/img-network-3.png';
import imgOpencode1 from './assets/img-opencode-1.png';
import imgOpencode2 from './assets/img-opencode-2.png';
import imgOpencode3 from './assets/img-opencode-3.png';
import imgPaas1 from './assets/img-paas-1.png';
import imgPaas2 from './assets/img-paas-2.png';
import imgSkillAi from './assets/img-skill-ai.png';
import imgSkillHub1 from './assets/img-skill-hub-1.png';
import imgSkillHub2 from './assets/img-skill-hub-2.png';
import imgSkillHub3 from './assets/img-skill-hub-3.png';
import imgSkillSh1 from './assets/img-skill-sh-1.png';
import imgUiEval1 from './assets/img-ui-eval-1.png';
import imgUiEval2 from './assets/img-ui-eval-2.png';
import imgUiEval3 from './assets/img-ui-eval-3.png';
import imgUiEval4 from './assets/img-ui-eval-4.png';
import imgUiEval5 from './assets/img-ui-eval-5.png';
import imgUiEval6 from './assets/img-ui-eval-6.png';
import imgUiEval7 from './assets/img-ui-eval-7.png';
import imgUpdate1 from './assets/img-update-1.png';
import imgUpdate2 from './assets/img-update-2.png';
import imgUpdate3 from './assets/img-update-3.png';
import imgUpdate4 from './assets/img-update-4.png';

export const design: DesignSystem = {
  palette: { bg: '#0a0e14', text: '#e6edf3', accent: '#6ee7ff' },
  fonts: {
    display: "'JetBrains Mono', 'Menlo', 'Consolas', monospace",
    body: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  typeScale: { hero: 140, body: 34 },
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

const TOTAL = 22;

const keyframes = `
@keyframes osa-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes osa-fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes osa-rise { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes osa-pulse { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
@keyframes osa-glow { 0%, 100% { box-shadow: 0 0 0 1px ${rule}, 0 0 24px rgba(110, 231, 255, 0.06); } 50% { box-shadow: 0 0 0 1px rgba(110, 231, 255, 0.5), 0 0 40px rgba(110, 231, 255, 0.25); } }
@keyframes osa-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes osa-scaleIn { from { transform: scale(0.94); opacity: 0; } to { transform: scale(1); opacity: 1; } }
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
      <span style={{ color: text2 }}>open-slide</span>
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
      <Eyebrow>[ OpenMirror 基础使用指南 · UIUX 设计师版 ]</Eyebrow>
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
      >
        OpenMirror
      </h1>
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
        是什么、有什么、怎么用
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
        面向 <span style={{ color: 'var(--osd-accent)' }}>UX 设计师</span> 的零基础 AI
        编程工具入门教程
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
        <span>2026-05-27</span>
        <span style={{ color: rule }}>·</span>
        <span>press F for play</span>
      </div>
    </div>
    <Footer section="cover" n={1} />
  </div>
);

const Agenda: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>00 · 目录</Eyebrow>
      <div style={{ height: 28 }} />
      <Heading size={88}>今天会讲什么</Heading>
      <div style={{ height: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {[
          { num: '01', title: '安装与环境配置', desc: '下载安装、登录、AI 环境配置、网络排查' },
          { num: '02', title: 'Skill 安装与管理', desc: 'Skill Hub、Skill.sh、AI 帮装、必装推荐' },
          { num: '03', title: '0-1 项目开发', desc: 'PRD 生成、开发计划、调试迭代' },
          {
            num: '04',
            title: 'UI 评估与数据接入',
            desc: 'Figma 对比、截图验收、真实数据、PAAS 发布',
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: surface,
              border: `1px solid ${rule}`,
              borderLeft: `3px solid ${i % 2 === 0 ? 'var(--osd-accent)' : mint}`,
              borderRadius: 8,
              padding: '32px 36px',
              animation: `osa-fadeUp 500ms ease-out ${300 + i * 120}ms both`,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 20,
                color: muted,
                marginBottom: 10,
              }}
            >
              Chapter {item.num}
            </div>
            <div
              style={{ fontSize: 32, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 8 }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 'var(--osd-size-body)', color: text2 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="agenda" n={2} />
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
        安装与环境配置
      </Heading>
      <div style={{ height: 28 }} />
      <p style={{ fontSize: 36, color: text2, animation: 'osa-fadeUp 700ms ease-out 400ms both' }}>
        下载安装 · 登录更新 · AI 环境配置 · 网络排查
      </p>
    </div>
    <Footer section="setup" n={3} />
  </div>
);

const Install: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 48, height: '100%', position: 'relative', zIndex: 1 }}>
      <div
        style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Eyebrow>1.1 安装 OpenMirror</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>下载与登录</Heading>
        <div style={{ height: 28 }} />
        <StepCard
          delay={200}
          steps={[
            '官网下载安装包',
            'mac 用户在「系统设置 → 隐私与安全性」中点击「仍要打开」',
            '输入开机密码完成安装',
            'Vanish 扫码登录或邮箱验证码登录',
          ]}
        />
        <div style={{ height: 20 }} />
        <AlertBox color={warm} delay={400}>
          <strong style={{ color: 'var(--osd-text)' }}>更新注意：</strong>
          更新重启会打断当前对话任务，请在任务间隙进行更新
        </AlertBox>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgMacPerm}
          alt="mac 权限"
          style={{
            width: '100%',
            maxHeight: 280,
            objectFit: 'contain',
            borderRadius: 8,
            border: `1px solid ${rule}`,
          }}
        />
        <div style={{ display: 'flex', gap: 12 }}>
          <img
            src={imgLoginQr}
            alt="扫码登录"
            style={{
              flex: 1,
              maxHeight: 200,
              objectFit: 'contain',
              borderRadius: 8,
              border: `1px solid ${rule}`,
            }}
          />
          <img
            src={imgLoginEmail}
            alt="邮箱登录"
            style={{
              flex: 1,
              maxHeight: 200,
              objectFit: 'contain',
              borderRadius: 8,
              border: `1px solid ${rule}`,
            }}
          />
        </div>
      </div>
    </div>
    <Footer section="install" n={4} />
  </div>
);

const UpdateFlow: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.2 新版本更新流程</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>四步完成更新</Heading>
      <div style={{ height: 32 }} />
      <StepCard
        delay={200}
        steps={[
          '收到更新通知弹窗 → 点击「下载更新」',
          '下载完成后点击「仍要打开」',
          '系统设置中「允许打开」',
          '点击「立即重启」完成更新',
        ]}
      />
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { img: imgUpdate1, label: '下载更新' },
          { img: imgUpdate2, label: '仍要打开' },
          { img: imgUpdate3, label: '允许打开' },
          { img: imgUpdate4, label: '立即重启' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 150}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 320,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 12,
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
    <Footer section="update" n={5} />
  </div>
);

const ClaudeConfig: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>1.3 配置 AI 环境</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>配置 Claude</Heading>
        <div style={{ height: 28 }} />
        <StepCard
          delay={200}
          steps={[
            '未安装过 Claude：终端执行 curl -fsSL https://claude.ai/install.sh | bash',
            '打开 OpenMirror → 设置 → 环境 → Claude',
            '输入 API_KEY，出现「已认证」标签即完成',
          ]}
        />
        <div style={{ height: 24 }} />
        <CodeBlock>
          <span style={{ color: mint }}>curl -fsSL https://claude.ai/install.sh | bash</span>
        </CodeBlock>
      </div>
      <div
        style={{
          flex: 0.9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgClaudeConfig}
          alt="Claude 配置"
          style={{ maxWidth: '100%', maxHeight: 700, borderRadius: 8, border: `1px solid ${rule}` }}
        />
      </div>
    </div>
    <Footer section="claude" n={6} />
  </div>
);

const OpencodeConfig: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.3 配置 AI 环境</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>配置 Opencode</Heading>
      <div style={{ height: 28 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        {[
          { img: imgOpencode1, label: '选择内部安装' },
          { img: imgOpencode2, label: '手动覆盖路径' },
          { img: imgOpencode3, label: '输入 API_KEY' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 150}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 340,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 12,
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
      <div style={{ height: 24 }} />
      <AlertBox color="var(--osd-accent)" delay={600}>
        <strong style={{ color: 'var(--osd-text)' }}>网络要求：</strong>
        需连接公司网络。如有代理请关闭或过滤 *.myhexin.com、*.10jqka.com.cn、*.thsi.cn
      </AlertBox>
    </div>
    <Footer section="opencode" n={7} />
  </div>
);

const CodexConfig: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>1.3 配置 AI 环境</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>配置 Codex</Heading>
        <div style={{ height: 28 }} />
        <StepCard
          delay={200}
          steps={[
            '未安装过 Codex：终端执行 npm i -g @openai/codex',
            '在 Codex 中配置好 API 后会自动同步到 OpenMirror',
            '需要绑定自己的 Codex token',
          ]}
        />
        <div style={{ height: 24 }} />
        <CodeBlock>
          <span style={{ color: muted }}># 安装 Codex CLI</span>
          <br />
          <span style={{ color: mint }}>npm i -g @openai/codex</span>
        </CodeBlock>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <InfoCard title="什么是 Codex？" titleColor="var(--osd-accent)">
          <div style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: text2 }}>
            OpenAI 推出的 AI 编程助手，擅长快速代码生成和修改。与 Claude 相比，Codex
            更轻量、响应更快。
          </div>
        </InfoCard>
        <InfoCard title="使用建议" titleColor={mint}>
          <div style={{ fontSize: 'var(--osd-size-body)', lineHeight: 1.6, color: text2 }}>
            可在 OpenMirror 中切换使用 Claude、Opencode 或 Codex，根据任务类型选择最合适的 AI
            Agent。
          </div>
        </InfoCard>
      </div>
    </div>
    <Footer section="codex" n={8} />
  </div>
);

const NetworkFix: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>1.4 网络问题排查</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>fetch failed 怎么办</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <StepCard
            delay={200}
            steps={[
              '打开设置 → 网络 → 详细信息',
              '检查 DNS 配置',
              '删除 10jqka 相关的 DNS IP：233.5.5.5 或 144.144.144.144',
              '保存后重试连接',
            ]}
          />
          <AlertBox color={danger} delay={500}>
            <strong style={{ color: 'var(--osd-text)' }}>常见现象：</strong>
            安装 Skill、连接 AI 或同步数据时出现 fetch failed 报错，多数与 DNS 配置冲突有关
          </AlertBox>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <img
            src={imgNetwork1}
            alt="网络设置1"
            style={{
              width: '100%',
              borderRadius: 8,
              border: `1px solid ${rule}`,
              animation: 'osa-scaleIn 800ms ease-out 300ms both',
            }}
          />
          <div style={{ display: 'flex', gap: 12 }}>
            <img
              src={imgNetwork2}
              alt="网络设置2"
              style={{
                flex: 1,
                borderRadius: 8,
                border: `1px solid ${rule}`,
                animation: 'osa-scaleIn 800ms ease-out 450ms both',
              }}
            />
            <img
              src={imgNetwork3}
              alt="网络设置3"
              style={{
                flex: 1,
                borderRadius: 8,
                border: `1px solid ${rule}`,
                animation: 'osa-scaleIn 800ms ease-out 600ms both',
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer section="network" n={9} />
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
        Skill 安装与管理
      </Heading>
      <div style={{ height: 28 }} />
      <p style={{ fontSize: 36, color: text2, animation: 'osa-fadeUp 700ms ease-out 400ms both' }}>
        Skill Hub · Skill.sh · AI 帮装 · 必装推荐
      </p>
    </div>
    <Footer section="skill" n={10} />
  </div>
);

const SkillInstall: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.1 Skill 安装方式</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>三种安装途径</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
        {[
          {
            title: '同花顺 Skill Hub',
            steps: [
              '设置 → Skill → 发现 → 同花顺 Skill Hub',
              '选择 Skill 安装',
              '选择「全局 Agent」或「Workspace」',
              '选择对应的 Agent（Codex / Claude / Opencode）',
            ],
            color: 'var(--osd-accent)',
          },
          {
            title: 'Skill.sh',
            steps: ['访问 skills.sh', '搜索并下载对应 Skill', '按提示完成安装'],
            color: mint,
          },
          {
            title: '让 AI 帮安装',
            steps: [
              '在 GitHub 找到 skill 根目录链接',
              '在对话中发送：帮我安装这个 skill',
              '指定全局或项目安装',
            ],
            color: violet,
          },
        ].map((item, i) => (
          <InfoCard key={i} title={item.title} titleColor={item.color}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {item.steps.map((step, j) => (
                <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      color: item.color,
                      fontFamily: 'var(--osd-font-display)',
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                  <span style={{ fontSize: 24, color: text2, lineHeight: 1.4 }}>{step}</span>
                </div>
              ))}
            </div>
          </InfoCard>
        ))}
      </div>
      <div style={{ height: 24 }} />
      <AlertBox color={warm} delay={400}>
        <strong style={{ color: 'var(--osd-text)' }}>关键概念：</strong>
        「全局 Agent」指安装至全局项目；「Workspace」指安装至某个具体项目。如果没有选择安装对应的
        Agent，则无法唤起该 Skill。
      </AlertBox>
    </div>
    <Footer section="skill-install" n={11} />
  </div>
);

const SkillHubDetail: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.1 Skill Hub 安装流程</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>分步截图演示</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { img: imgSkillHub1, label: '进入 Skill 发现页' },
          { img: imgSkillHub2, label: '浏览同花顺 Skill Hub' },
          { img: imgSkillHub3, label: '选择 Agent 安装' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 150}ms both`,
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
                padding: 12,
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
      <div style={{ height: 24 }} />
      <div style={{ display: 'flex', gap: 20 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) 750ms both`,
          }}
        >
          <img
            src={imgSkillSh1}
            alt="Skill.sh"
            style={{
              width: '100%',
              height: 180,
              objectFit: 'contain',
              borderRadius: 8,
              background: surface,
              border: `1px solid ${rule}`,
              padding: 12,
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
            Skill.sh 搜索
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) 900ms both`,
          }}
        >
          <img
            src={imgSkillAi}
            alt="AI帮装"
            style={{
              width: '100%',
              height: 180,
              objectFit: 'contain',
              borderRadius: 8,
              background: surface,
              border: `1px solid ${rule}`,
              padding: 12,
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
            AI 帮安装
          </div>
        </div>
      </div>
    </div>
    <Footer section="skill-hub" n={12} />
  </div>
);

const SkillRecommend: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>2.2 推荐必装 Skill</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>设计师的两大神器</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="skill-creator" titleColor="var(--osd-accent)">
          <div
            style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 12 }}
          >
            Claude Code 官方 Skill
          </div>
          <div
            style={{
              fontSize: 'var(--osd-size-body)',
              lineHeight: 1.6,
              color: text2,
              marginBottom: 20,
            }}
          >
            用于创建新 Skill、修改和改进已有 Skill，并衡量 Skill 性能。相当于 AI
            的「插件开发工具」。
          </div>
          <CodeBlock>
            <span style={{ color: muted }}># GitHub 地址</span>
            <br />
            <span style={{ color: mint }}>github.com/anthropics/skills</span>
          </CodeBlock>
        </InfoCard>
        <InfoCard title="product-architect" titleColor={mint}>
          <div
            style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-text)', marginBottom: 12 }}
          >
            产品架构师
          </div>
          <div
            style={{
              fontSize: 'var(--osd-size-body)',
              lineHeight: 1.6,
              color: text2,
              marginBottom: 20,
            }}
          >
            借助「Disagree & Commit」方法论，支持 0-1 生成 PRD、PRD 评审、快速咨询三种模式。
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['从零生成产品需求文档', '对已有 PRD 进行评审优化', '帮助澄清需求输出可执行方案'].map(
              (s, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ color: mint, fontFamily: 'var(--osd-font-display)' }}>✓</span>
                  <span style={{ fontSize: 24, color: text2 }}>{s}</span>
                </div>
              ),
            )}
          </div>
        </InfoCard>
      </div>
    </div>
    <Footer section="skill-rec" n={13} />
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
      >
        一句话启动。
      </h1>
      <div style={{ height: 48 }} />
      <div
        style={{
          width: 320,
          height: 2,
          background: 'linear-gradient(90deg, var(--osd-accent), transparent)',
          animation: 'osa-fadeIn 600ms ease-out 400ms both',
        }}
      />
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
        >
          /opc
        </span>
        <span style={{ fontSize: 28, color: text2 }}>帮我实现一个搜索页的 AI 摘要功能</span>
      </div>
      <div style={{ height: 80 }} />
      <div
        style={{
          display: 'flex',
          gap: 48,
          alignItems: 'center',
          animation: 'osa-fadeUp 600ms ease-out 700ms both',
        }}
      >
        {[
          { label: '触发', value: '/opc' },
          { label: '路由', value: 'opc-router' },
          { label: '汇报', value: 'opc-reporter' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: muted }}>{item.label}:</span>
            <span
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 22,
                color: 'var(--osd-accent)',
                background: surface,
                padding: '6px 14px',
                borderRadius: 6,
                border: `1px solid ${rule}`,
              }}
            >
              {item.value}
            </span>
            {i < 2 && <span style={{ color: muted, marginLeft: 12 }}>·</span>}
          </div>
        ))}
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
        0-1 项目开发
      </Heading>
      <div style={{ height: 28 }} />
      <p style={{ fontSize: 36, color: text2, animation: 'osa-fadeUp 700ms ease-out 400ms both' }}>
        PRD 生成 · 开发计划 · 调试迭代
      </p>
    </div>
    <Footer section="dev" n={15} />
  </div>
);

const PRDPlan: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>3.1 从想法到计划</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>生成 PRD & 制定开发计划</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="Step 1：生成高质量 PRD" titleColor="var(--osd-accent)">
          <div
            style={{
              fontSize: 'var(--osd-size-body)',
              lineHeight: 1.6,
              color: text2,
              marginBottom: 20,
            }}
          >
            安装 product-architect Skill 后，在对话中描述你的产品想法。Skill 会自动切换三种模式：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              '0-1 生成 PRD：从零开始生成产品需求文档',
              'PRD 评审：对已有 PRD 进行评审和优化',
              '快速咨询：帮助澄清需求，输出可执行方案',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ color: 'var(--osd-accent)', fontFamily: 'var(--osd-font-display)' }}>
                  →
                </span>
                <span style={{ fontSize: 24, color: text2 }}>{s}</span>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="Step 2：制定开发计划" titleColor={mint}>
          <div
            style={{
              fontSize: 'var(--osd-size-body)',
              lineHeight: 1.6,
              color: text2,
              marginBottom: 20,
            }}
          >
            确定 PRD 后，通过「plan」指令制定开发计划：
          </div>
          <StepCard
            steps={[
              '在对话中输入 plan（或 /plan）',
              'AI 根据 PRD 拆分开发任务',
              '按步骤执行，交给 AI 完成编码',
            ]}
            tint={mint}
          />
        </InfoCard>
      </div>
    </div>
    <Footer section="prd" n={16} />
  </div>
);

const Debug: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>3.2 调试与迭代</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>遇到报错怎么办</Heading>
        <div style={{ height: 28 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            {
              n: '01',
              title: '让 AI 修复按钮',
              desc: '报错旁有「让 AI 修复」按钮，点击后系统自动将报错日志填入对话窗口',
            },
            { n: '02', title: '复制粘贴报错', desc: '手动将报错日志复制粘贴到对话窗口给 AI 解决' },
            {
              n: '03',
              title: '截图发对话',
              desc: '将带有报错信息的截图直接发在对话窗口给 AI 解决',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                padding: '20px 24px',
                background: surface,
                border: `1px solid ${rule}`,
                borderLeft: `3px solid ${i === 0 ? 'var(--osd-accent)' : i === 1 ? mint : violet}`,
                borderRadius: 8,
                animation: `osa-fadeUp 500ms ease-out ${200 + i * 120}ms both`,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 28,
                  color: 'var(--osd-accent)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {item.n}
              </span>
              <div>
                <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--osd-text)' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 22, color: text2, marginTop: 4 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          flex: 0.85,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgDebug}
          alt="调试报错"
          style={{ maxWidth: '100%', maxHeight: 700, borderRadius: 8, border: `1px solid ${rule}` }}
        />
      </div>
    </div>
    <Footer section="debug" n={17} />
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
        UI 评估与发布
      </Heading>
      <div style={{ height: 28 }} />
      <p style={{ fontSize: 36, color: text2, animation: 'osa-fadeUp 700ms ease-out 400ms both' }}>
        Figma 对比 · 截图验收 · 数据接入 · PAAS 发布
      </p>
    </div>
    <Footer section="ui" n={18} />
  </div>
);

const UIEvalFigma: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.1 UI 评估方式一</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>Figma + 预览地址验收</Heading>
      <div style={{ height: 28 }} />
      <StepCard
        delay={200}
        steps={[
          '选择「工作区主页」→ 点击「Figma 对比」',
          '输入开发环境预览地址',
          '输入 Figma 需验收页面的画板地址',
          '点击「开始序列化对比」',
          '查看 AI 生成的问题列表',
        ]}
      />
      <div style={{ height: 24 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { img: imgUiEval1, label: '进入 Figma 对比' },
          { img: imgUiEval2, label: '输入预览地址' },
          { img: imgUiEval3, label: '查看问题列表' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 150}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 240,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 10,
              }}
            />
            <div
              style={{
                fontSize: 18,
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
    <Footer section="ui-figma" n={19} />
  </div>
);

const UIEvalScreenshot: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.2 UI 评估方式二</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>截图对比验收</Heading>
      <div style={{ height: 28 }} />
      <StepCard
        delay={200}
        steps={[
          '选择「工作区主页」→ 点击「截图对比」',
          '上传设计稿截图和开发环境截图',
          '点击「开始对比」',
          '等待 AI 评估',
          '查看返回的问题列表',
        ]}
      />
      <div style={{ height: 24 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { img: imgUiEval4, label: '上传截图' },
          { img: imgUiEval5, label: '开始对比' },
          { img: imgUiEval6, label: '评估中' },
          { img: imgUiEval7, label: '问题列表' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              animation: `osa-rise 600ms cubic-bezier(.2,.7,.3,1) ${300 + i * 120}ms both`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: '100%',
                height: 240,
                objectFit: 'contain',
                borderRadius: 8,
                background: surface,
                border: `1px solid ${rule}`,
                padding: 8,
              }}
            />
            <div
              style={{
                fontSize: 18,
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
    <Footer section="ui-screenshot" n={20} />
  </div>
);

const DataBinding: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ display: 'flex', gap: 60, height: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow>4.3 真实数据接入</Eyebrow>
        <div style={{ height: 20 }} />
        <Heading size={72}>从 Mock 到真实数据</Heading>
        <div style={{ height: 28 }} />
        <StepCard
          delay={200}
          steps={[
            '前端开发完成后，后端提供 YAPI 数据链接',
            '拿到数据格式示例',
            '在 OpenMirror 对话中发送数据链接',
            'AI 自动完成数据绑定',
          ]}
        />
        <div style={{ height: 24 }} />
        <CodeBlock>
          <span style={{ color: muted }}># 示例 YAPI 链接</span>
          <br />
          <span style={{ color: mint }}>https://yapi.myhexin.com/yapi/mock_v2/...</span>
        </CodeBlock>
      </div>
      <div
        style={{
          flex: 0.9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'osa-scaleIn 800ms ease-out 300ms both',
        }}
      >
        <img
          src={imgDataBinding}
          alt="数据接入"
          style={{ maxWidth: '100%', maxHeight: 700, borderRadius: 8, border: `1px solid ${rule}` }}
        />
      </div>
    </div>
    <Footer section="data" n={21} />
  </div>
);

const PaasDeploy: Page = () => (
  <div style={{ ...fill, padding: '120px 100px' }}>
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>4.4 集成 PAAS 发布</Eyebrow>
      <div style={{ height: 20 }} />
      <Heading size={72}>项目发布至生产环境</Heading>
      <div style={{ height: 32 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <InfoCard title="发布流程概览" titleColor="var(--osd-accent)">
          <StepCard
            steps={[
              'OpenMirror 中执行发布指令',
              '系统调用 OPC Skill 触发流水线',
              '等待流水线执行完成',
              '验证测试环境可正常访问',
            ]}
          />
        </InfoCard>
        <InfoCard title="发布前检查" titleColor={mint}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              '流水线全部通过（绿色）',
              '测试 URL 可正常访问',
              '核心功能无异常',
              '移动端适配正常',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ color: mint, fontFamily: 'var(--osd-font-display)' }}>✓</span>
                <span style={{ fontSize: 24, color: text2 }}>{s}</span>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
      <div style={{ height: 24 }} />
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
        <img
          src={imgPaas1}
          alt="PAAS 发布1"
          style={{
            maxHeight: 220,
            borderRadius: 8,
            border: `1px solid ${rule}`,
            animation: 'osa-scaleIn 800ms ease-out 300ms both',
          }}
        />
        <img
          src={imgPaas2}
          alt="PAAS 发布2"
          style={{
            maxHeight: 220,
            borderRadius: 8,
            border: `1px solid ${rule}`,
            animation: 'osa-scaleIn 800ms ease-out 450ms both',
          }}
        />
      </div>
    </div>
    <Footer section="paas" n={22} />
  </div>
);

export const meta: SlideMeta = { title: 'OpenMirror 基础使用指南（UIUX 设计师版）' };

export default [
  Cover,
  Agenda,
  Section1,
  Install,
  UpdateFlow,
  ClaudeConfig,
  OpencodeConfig,
  CodexConfig,
  NetworkFix,
  Section2,
  SkillInstall,
  SkillHubDetail,
  SkillRecommend,
  OneCommandStart,
  Section3,
  PRDPlan,
  Debug,
  Section4,
  UIEvalFigma,
  UIEvalScreenshot,
  DataBinding,
  PaasDeploy,
] satisfies Page[];
