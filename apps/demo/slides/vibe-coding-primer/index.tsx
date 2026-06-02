import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

export const meta: SlideMeta = {
  title: 'Vibe Coding 实战基础指南',
};

export const design: DesignSystem = {
  palette: { bg: '#000000', text: '#f5f5f7', accent: '#8ec5ff' },
  fonts: {
    display:
      '"SF Pro Display", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "Helvetica Neue", sans-serif',
    body: '"SF Pro Text", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "Helvetica Neue", sans-serif',
  },
  typeScale: { hero: 136, body: 28 },
  radius: 30,
};

const TOTAL = 11;

const palette = {
  bg: '#000000',
  bgSoft: '#0b0d12',
  card: 'rgba(255,255,255,0.05)',
  cardStrong: 'rgba(255,255,255,0.08)',
  text: '#f5f5f7',
  muted: '#ccd2dc',
  faint: '#8992a0',
  line: 'rgba(255,255,255,0.09)',
  accent: '#8ec5ff',
  accentSoft: 'rgba(142, 197, 255, 0.14)',
  warm: '#f6cf97',
  warmSoft: 'rgba(246, 207, 151, 0.16)',
  mint: '#9ae4d4',
  pink: '#ff9f93',
  glow: 'rgba(137, 194, 255, 0.34)',
  glowSoft: 'rgba(255,255,255,0.04)',
};

const keyframes = `
@keyframes vibeFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes vibeFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes vibeSweep {
  from { transform: translateX(-105%); }
  to { transform: translateX(105%); }
}
@keyframes vibePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(142, 197, 255, 0.0); transform: scale(1); }
  50% { box-shadow: 0 0 0 12px rgba(142, 197, 255, 0.1); transform: scale(1.08); }
}
@keyframes vibeFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
@keyframes vibeGlow {
  0%, 100% { opacity: 0.32; transform: scale(1); }
  50% { opacity: 0.56; transform: scale(1.06); }
}
`;

const page = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  background:
    'radial-gradient(circle at 50% -8%, rgba(142,197,255,0.28), transparent 30%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.16), transparent 22%), linear-gradient(180deg, #050608 0%, #000000 34%, #06080d 100%)',
  color: palette.text,
  fontFamily: 'var(--osd-font-body)',
  boxSizing: 'border-box' as const,
};

const shell = {
  position: 'relative' as const,
  zIndex: 1,
  padding: '96px 112px 90px',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box' as const,
};

const Style = () => <style>{keyframes}</style>;

const Grid = () => (
  <>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 146,
        left: '8%',
        right: '8%',
        height: 1,
        background:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 18%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.06) 82%, transparent 100%)',
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: -240,
        left: '50%',
        width: 900,
        height: 900,
        transform: 'translateX(-50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(137,194,255,0.34), rgba(137,194,255,0) 62%)',
        animation: 'vibeGlow 6s ease-in-out infinite',
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: -120,
        bottom: -220,
        width: 680,
        height: 680,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.14), rgba(255,255,255,0) 72%)',
        animation: 'vibeFloat 7s ease-in-out infinite',
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: -80,
        bottom: -140,
        width: 480,
        height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246,207,151,0.14), rgba(246,207,151,0) 72%)',
        filter: 'blur(4px)',
      }}
    />
  </>
);

const Eyebrow = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <div
    style={{
      fontSize: 18,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: palette.faint,
      fontWeight: 600,
      animation: `vibeFadeUp 680ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
    }}
  >
    {children}
  </div>
);

const Title = ({
  children,
  size = 84,
  width = 1280,
  delay = 120,
}: {
  children: ReactNode;
  size?: number;
  width?: number;
  delay?: number;
}) => (
  <h2
    style={{
      margin: '26px 0 0',
      maxWidth: width,
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      lineHeight: 1.04,
      letterSpacing: '-0.04em',
      fontWeight: 600,
      animation: `vibeFadeUp 760ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
    }}
  >
    {children}
  </h2>
);

const Intro = ({
  children,
  width = 1200,
  delay = 240,
}: {
  children: ReactNode;
  width?: number;
  delay?: number;
}) => (
  <p
    style={{
      margin: '30px 0 0',
      maxWidth: width,
      fontSize: 29,
      lineHeight: 1.62,
      color: palette.muted,
      animation: `vibeFadeUp 760ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
    }}
  >
    {children}
  </p>
);

const Footer = ({ index, label }: { index: number; label: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 110,
      right: 110,
      bottom: 44,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: palette.faint,
      fontSize: 18,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
    }}
  >
    <span>{label}</span>
    <span>
      {String(index).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
    </span>
  </div>
);

const Panel = ({
  children,
  padding = 32,
  minHeight,
}: {
  children: ReactNode;
  padding?: number;
  minHeight?: number;
}) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 32,
      border: `1px solid ${palette.line}`,
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.035) 55%, rgba(255,255,255,0.028) 100%)',
      backdropFilter: 'blur(24px)',
      boxShadow:
        '0 22px 60px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.03)',
      padding,
      minHeight,
      boxSizing: 'border-box',
    }}
  >
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 24%, rgba(255,255,255,0) 100%)',
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
);

const Bullet = ({
  title,
  body,
  accent = palette.accent,
}: {
  title: string;
  body: string;
  accent?: string;
}) => (
  <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 20, alignItems: 'start' }}>
    <div
      style={{
        width: 8,
        height: 8,
        marginTop: 16,
        borderRadius: '50%',
        background: accent,
        boxShadow: `0 0 0 10px ${accent === palette.warm ? palette.warmSoft : palette.accentSoft}`,
        animation: 'vibePulse 2.8s ease-out infinite',
      }}
    />
    <div>
      <div style={{ fontSize: 31, fontWeight: 600, lineHeight: 1.28, letterSpacing: '-0.02em' }}>
        {title}
      </div>
      <div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.62, color: palette.muted }}>
        {body}
      </div>
    </div>
  </div>
);

const NumberCard = ({
  step,
  title,
  body,
  tone = 'accent',
}: {
  step: string;
  title: string;
  body: string;
  tone?: 'accent' | 'warm' | 'mint';
}) => {
  const toneColor =
    tone === 'warm' ? palette.warm : tone === 'mint' ? palette.mint : palette.accent;
  return (
    <Panel padding={28} minHeight={250}>
      <div
        style={{
          fontFamily: '"SF Mono", "SFMono-Regular", monospace',
          fontSize: 16,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: toneColor,
        }}
      >
        {step}
      </div>
      <div
        style={{
          marginTop: 20,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 40,
          lineHeight: 1.14,
          letterSpacing: '-0.03em',
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div style={{ marginTop: 16, fontSize: 23, lineHeight: 1.6, color: palette.muted }}>
        {body}
      </div>
    </Panel>
  );
};

const CodeBox = ({ children, tint = palette.accent }: { children: ReactNode; tint?: string }) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 26,
      border: `1px solid ${palette.line}`,
      background: 'linear-gradient(180deg, rgba(10,14,20,0.96), rgba(8,10,14,0.92))',
      padding: '28px 30px',
      fontFamily: '"SF Mono", "SFMono-Regular", "JetBrains Mono", monospace',
      fontSize: 20,
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap',
      color: palette.text,
      boxShadow: `inset 0 0 0 1px ${tint}22, 0 18px 40px rgba(0,0,0,0.32)`,
    }}
  >
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${tint}, transparent)`,
        opacity: 0.8,
      }}
    />
    {children}
  </div>
);

const Cover: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div
      style={{
        ...shell,
        display: 'grid',
        gridTemplateColumns: '1.06fr 0.94fr',
        gap: 40,
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: 980 }}>
        <Eyebrow>AI coding field manual · chapter 01</Eyebrow>
        <h1
          style={{
            margin: '30px 0 0',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 'var(--osd-size-hero)',
            lineHeight: 0.96,
            maxWidth: 920,
            letterSpacing: '-0.06em',
            fontWeight: 600,
            animation: 'vibeFadeUp 820ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both',
          }}
        >
          Vibe Coding
          <br />
          实战基础指南
        </h1>
        <div
          style={{
            marginTop: 42,
            width: 520,
            height: 1,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.46), rgba(255,255,255,0))',
            animation: 'vibeFadeIn 900ms ease-out 460ms both',
          }}
        />
        <Intro delay={300}>
          把一篇写给新手的 Markdown 手册，压缩成一套
          <span style={{ color: palette.accent }}> 可展示、可讲解、可复盘 </span>
          的演示稿。主线不是“背语法”，而是先理解
          <span style={{ color: palette.warm }}> 环境、下单、验收、排错 </span>
          这四个动作。
        </Intro>
        <div
          style={{
            marginTop: 44,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 18,
            padding: '16px 24px',
            borderRadius: 999,
            border: `1px solid ${palette.line}`,
            background: 'rgba(255,255,255,0.06)',
            color: palette.muted,
            fontSize: 20,
            animation: 'vibeFadeUp 820ms cubic-bezier(0.16, 1, 0.3, 1) 560ms both',
          }}
        >
          <span style={{ color: palette.accent }}>11 slides</span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span>从 Markdown 到可展示 deck</span>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          height: 620,
          animation: 'vibeFadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) 240ms both',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: '4% 10% 8% 10%',
            borderRadius: 56,
            background:
              'radial-gradient(circle at 50% 26%, rgba(142,197,255,0.34), rgba(142,197,255,0.06) 34%, rgba(142,197,255,0) 62%)',
            filter: 'blur(8px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 56,
            border: `1px solid ${palette.line}`,
            background: 'linear-gradient(180deg, rgba(20,24,30,0.92) 0%, rgba(7,8,11,0.82) 100%)',
            boxShadow:
              '0 36px 90px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(255,255,255,0.03)',
            overflow: 'hidden',
            padding: 38,
            boxSizing: 'border-box',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0,
              left: '12%',
              right: '12%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', color: palette.faint }}>
            <div style={{ fontSize: 16, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              keynote mode
            </div>
            <div style={{ fontSize: 16, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              2026
            </div>
          </div>
          <div
            style={{
              marginTop: 52,
              maxWidth: 440,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 78,
              lineHeight: 0.98,
              letterSpacing: '-0.05em',
              fontWeight: 600,
            }}
          >
            Prompt.
            <br />
            Review.
            <br />
            Ship.
          </div>
          <div
            style={{
              marginTop: 24,
              maxWidth: 420,
              fontSize: 23,
              lineHeight: 1.58,
              color: palette.muted,
            }}
          >
            用舞台化的信息层级讲清楚新手真正要练的三件事：说清楚、看清楚、改对。
          </div>
          <div
            style={{
              marginTop: 34,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
            }}
          >
            {[
              ['环境', '降低搭建摩擦'],
              ['验收', '对齐设计结果'],
              ['排错', '给出唯一动作'],
            ].map(([label, body]) => (
              <div
                key={label}
                style={{
                  borderRadius: 24,
                  border: `1px solid ${palette.line}`,
                  background: 'rgba(255,255,255,0.045)',
                  padding: '18px 18px 20px',
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: palette.accent,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{ marginTop: 12, fontSize: 21, lineHeight: 1.45, color: palette.muted }}
                >
                  {body}
                </div>
              </div>
            ))}
          </div>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              right: 60,
              bottom: 56,
              width: 240,
              height: 240,
              borderRadius: '50%',
              border: `1px solid ${palette.line}`,
              boxShadow: '0 0 0 28px rgba(255,255,255,0.025), 0 0 0 76px rgba(255,255,255,0.015)',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              right: 116,
              bottom: 112,
              width: 128,
              height: 128,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.94) 0%, rgba(184,220,255,0.76) 38%, rgba(142,197,255,0) 78%)',
              filter: 'blur(1px)',
            }}
          />
        </div>
      </div>
    </div>
    <Footer index={1} label="cover" />
  </div>
);

const Mindset: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>01 · 核心心智</Eyebrow>
      <Title>写代码，先把它理解成“点外卖”。</Title>
      <div
        style={{ marginTop: 50, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28 }}
      >
        <Panel padding={36} minHeight={560}>
          <div
            style={{
              fontSize: 26,
              color: palette.faint,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Old model
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 64,
              lineHeight: 1.15,
            }}
          >
            自己下厨：
            <br />
            亲自学语法、算法、框架
          </div>
          <div style={{ marginTop: 22, fontSize: 27, lineHeight: 1.62, color: palette.muted }}>
            门槛高，反馈慢。对新手来说，错误往往不是“不会做产品”，而是连工具链都还没搭起来。
          </div>
        </Panel>
        <Panel padding={36} minHeight={560}>
          <div
            style={{
              fontSize: 26,
              color: palette.accent,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            New model
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 64,
              lineHeight: 1.15,
            }}
          >
            像点外卖：
            <br />
            你负责下清楚订单
          </div>
          <div style={{ marginTop: 22, fontSize: 27, lineHeight: 1.62, color: palette.muted }}>
            AI 是大厨。你扮演产品经理或设计师，重点变成
            <span style={{ color: palette.text }}> 目标定义、约束说明、结果验收 </span>
            ，而不是手写每一行底层代码。
          </div>
          <div
            style={{
              marginTop: 28,
              padding: '18px 20px',
              borderRadius: 20,
              background: palette.accentSoft,
              color: palette.text,
              fontSize: 24,
              lineHeight: 1.55,
            }}
          >
            新手最该练的不是“背 API”，而是把需求说具体。
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={2} label="mindset" />
  </div>
);

const Foundation: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>02 · 开工前打地基</Eyebrow>
      <Title size={78}>第一次失败，通常不是业务太难，而是环境没通。</Title>
      <div
        style={{ marginTop: 54, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
      >
        <NumberCard
          step="A1"
          title="设备"
          body="优先 Mac，尤其 Apple Silicon。不是信仰问题，而是兼容性成本更低。"
        />
        <NumberCard
          step="A2"
          title="网络"
          body="代理软件要开 TUN 或全局接管。终端不走代理，是新手最常见的隐形坑。"
          tone="warm"
        />
        <NumberCard
          step="A3"
          title="工具"
          body="准备 AI 编程工作台和足够强的模型。弱模型会把模糊需求放大成混乱实现。"
          tone="mint"
        />
      </div>
      <div
        style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 26 }}
      >
        <Panel padding={30}>
          <Bullet
            title="硬件建议是为了减少无谓摩擦"
            body="新手阶段最怕把时间花在系统兼容和环境报错上，而不是花在理解产品和交互。"
          />
        </Panel>
        <Panel padding={30}>
          <Bullet
            title="网络设置不对，会让依赖安装无限循环报错"
            body="表面看像代码问题，实质是终端根本没法访问外网资源。"
            accent={palette.warm}
          />
        </Panel>
      </div>
    </div>
    <Footer index={3} label="foundation" />
  </div>
);

const Safety: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>03 · 安全底线</Eyebrow>
      <Title size={82}>API Key 不是“配置文本”，而是你的银行卡密码。</Title>
      <div
        style={{ marginTop: 54, display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 28 }}
      >
        <Panel padding={34} minHeight={590}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: palette.pink,
            }}
          >
            Don't
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 62,
              lineHeight: 1.16,
              color: palette.text,
            }}
          >
            不要把密钥
            <br />
            直接写进业务代码
          </div>
          <CodeBox tint={palette.pink}>
            {`const apiKey = "sk-xxxx"
fetch("/api", { headers: { Authorization: apiKey } })`}
          </CodeBox>
        </Panel>
        <Panel padding={34} minHeight={590}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: palette.mint,
            }}
          >
            Do
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 62,
              lineHeight: 1.16,
            }}
          >
            让 AI
            <br />建 `.env` 和读取逻辑
          </div>
          <CodeBox tint={palette.mint}>
            {`OPENAI_API_KEY=sk-xxxx

请帮我创建 .env 文件，
并把读取逻辑接到项目配置里。`}
          </CodeBox>
          <div style={{ marginTop: 24, fontSize: 24, lineHeight: 1.6, color: palette.muted }}>
            新手最稳的指令，不是自己研究密钥放哪，而是明确要求：
            <span style={{ color: palette.text }}> “建保险箱，并把门锁接好。” </span>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={4} label="secrets" />
  </div>
);

const JsonFirst: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>04 · 提示词框架</Eyebrow>
      <Title size={80}>先定骨架，再填血肉。先要 JSON，不要急着要 UI。</Title>
      <div
        style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 28 }}
      >
        <Panel padding={34}>
          <div
            style={{
              fontSize: 24,
              color: palette.faint,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Why
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Bullet
              title="先把设计变量说清楚"
              body="主题色、字体层级、间距、圆角，这些先固定，AI 才不会边写边飘。"
            />
            <Bullet
              title="先验收图纸，再验收界面"
              body="先看 JSON 是否符合你的设计规范，再让它基于规范产出代码。"
              accent={palette.warm}
            />
          </div>
        </Panel>
        <Panel padding={34}>
          <div
            style={{
              fontSize: 24,
              color: palette.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Prompt shape
          </div>
          <CodeBox>
            {`我们要开发一个理财产品展示卡片。

请先不要写 UI 代码，
先输出一份结构化 JSON：
- 主题色
- 字体大小层级
- 内外边距
- 圆角
- 投影规范

要求符合现代金融产品设计。`}
          </CodeBox>
        </Panel>
      </div>
    </div>
    <Footer index={5} label="json-first" />
  </div>
);

const Override: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>05 · System Override</Eyebrow>
      <Title size={78}>给 AI 植入“新手守护协议”，目的是降噪，不是炫技。</Title>
      <div
        style={{ marginTop: 46, display: 'grid', gridTemplateColumns: '0.84fr 1.16fr', gap: 26 }}
      >
        <Panel padding={32}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Bullet title="强制中文解释" body="避免 AI 丢一堆英文错误，把问题翻成能理解的白话。" />
            <Bullet
              title="依赖安装自动重试"
              body="把常见环境失败先自动兜底，别一上来就把新手扔进终端细节。"
              accent={palette.warm}
            />
            <Bullet
              title="/pack 记忆继电器"
              body="对话太长时，把当前目标、技术状态、下一步计划打包带走。"
              accent={palette.mint}
            />
          </div>
        </Panel>
        <CodeBox>
          {`# SYSTEM OVERRIDE
1. 强制简体中文解释
2. 遇到环境安装失败，静默重试最多 3 次
3. 用户输入 /pack 时，输出：
   - 当前体验目标
   - 底层技术状态
   - 下一步计划
4. 涉及密钥时，优先使用 .env`}
        </CodeBox>
      </div>
      <div
        style={{
          marginTop: 26,
          padding: '18px 22px',
          borderRadius: 22,
          background: palette.cardStrong,
          border: `1px solid ${palette.line}`,
          fontSize: 24,
          lineHeight: 1.6,
          color: palette.muted,
        }}
      >
        重点不是把规则写得越长越好，而是让 AI 在“解释、容错、记忆、安全”四个基础面上行为稳定。
      </div>
    </div>
    <Footer index={6} label="override" />
  </div>
);

const Review: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>06 · 视觉验收</Eyebrow>
      <Title size={82}>跑起来，只代表能吃。真正要验的是“像不像设计稿”。</Title>
      <div style={{ marginTop: 52, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Panel padding={34} minHeight={530}>
          <div
            style={{
              fontSize: 24,
              color: palette.faint,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Input
          </div>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div
              style={{
                borderRadius: 24,
                border: `1px solid ${palette.line}`,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                padding: 18,
                minHeight: 320,
              }}
            >
              <div style={{ fontSize: 18, color: palette.faint }}>实际运行效果</div>
              <div
                style={{
                  marginTop: 18,
                  borderRadius: 18,
                  background: 'linear-gradient(180deg, #fafbff, #dbe0e8)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                  height: 200,
                }}
              />
            </div>
            <div
              style={{
                borderRadius: 24,
                border: `1px solid ${palette.line}`,
                background:
                  'linear-gradient(180deg, rgba(142,197,255,0.18), rgba(255,255,255,0.04))',
                padding: 18,
                minHeight: 320,
              }}
            >
              <div style={{ fontSize: 18, color: palette.faint }}>高保真设计稿</div>
              <div
                style={{
                  marginTop: 18,
                  borderRadius: 18,
                  background:
                    'radial-gradient(circle at 35% 22%, #ffffff 0%, #dfeafb 42%, #95c7ff 100%)',
                  height: 200,
                }}
              />
            </div>
          </div>
        </Panel>
        <Panel padding={34} minHeight={530}>
          <div
            style={{
              fontSize: 24,
              color: palette.accent,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Review prompt
          </div>
          <CodeBox>
            {`请对比左侧实际效果与右侧设计稿：
- 间距是否一致
- 字体层级是否一致
- 投影和圆角是否一致
- 有没有被程序员默认样式带偏

直接指出差异，
并给出可替换代码。`}
          </CodeBox>
          <div style={{ marginTop: 22, fontSize: 24, lineHeight: 1.58, color: palette.muted }}>
            这一步的目标，是把“感觉差不多”升级成
            <span style={{ color: palette.text }}> 像素级复核 </span>。
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={7} label="visual-review" />
  </div>
);

const Debug: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>07 · 结构化排错</Eyebrow>
      <Title size={80}>不要对 AI 发脾气。像填病历一样报告问题。</Title>
      <div
        style={{ marginTop: 52, display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 28 }}
      >
        <Panel padding={34}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Bullet
              title="目标体验"
              body="我原本想发生什么。比如点击分析按钮后，右侧滑出预览面板。"
            />
            <Bullet
              title="实际现象"
              body="现在到底发生了什么。比如没反应、白屏、页面闪退。"
              accent={palette.warm}
            />
            <Bullet
              title="报错明细 + 指令"
              body="把截图或终端红字贴给 AI，并要求它给唯一修复步骤。"
              accent={palette.mint}
            />
          </div>
        </Panel>
        <CodeBox>
          {`🚨【请求紧急排错】
- 目标体验：点击“分析”后右侧弹出预览窗口
- 实际现象：点击后页面无反应，并且闪退
- 报错明细：贴上控制台或终端报错
- 排查指令：
  请判断这是样式遮挡、
  还是事件没有触发，
  并给我唯一修复步骤。`}
        </CodeBox>
      </div>
    </div>
    <Footer index={8} label="debug" />
  </div>
);

const UseCases: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>08 · 边界探测</Eyebrow>
      <Title size={78}>Vibe Coding 不是只能做 demo，它有一条逐级升级的实战路线。</Title>
      <div
        style={{ marginTop: 52, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
      >
        <NumberCard
          step="L1"
          title="Chrome 插件"
          body="网页辅助、竞品抓取、自动填表。重点开始理解 CORS 和页面元素抓取。"
        />
        <NumberCard
          step="L2"
          title="本地应用"
          body="走到 Electron、DMG 打包、本地文件读写和持久化。开始触碰系统权限。"
          tone="warm"
        />
        <NumberCard
          step="L3"
          title="商业系统"
          body="先做 JSON 模板和系统架构，再做批量生成。先稳骨架，再放大规模。"
          tone="mint"
        />
      </div>
      <div
        style={{
          marginTop: 28,
          padding: '22px 24px',
          borderRadius: 24,
          background: palette.cardStrong,
          border: `1px solid ${palette.line}`,
          fontSize: 24,
          lineHeight: 1.6,
          color: palette.muted,
        }}
      >
        文档里的真实价值，不是列项目名，而是告诉新手：
        <span style={{ color: palette.text }}>
          {' '}
          复杂系统要先做结构设计，别一上来就让 AI 直接冲底层实现。{' '}
        </span>
      </div>
    </div>
    <Footer index={9} label="use-cases" />
  </div>
);

const Playbook: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div style={shell}>
      <Eyebrow>09 · 本次转化方法</Eyebrow>
      <Title size={80}>把一篇 Markdown 变成一套 slide，我实际做的是这 5 步。</Title>
      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <NumberCard
          step="01"
          title="通读原文"
          body="先判断这篇文章真正想教什么，不急着按标题机械切页。"
        />
        <NumberCard
          step="02"
          title="抽主线"
          body="把内容压成：心智、环境、安全、下单、验收、排错、边界。"
          tone="warm"
        />
        <NumberCard
          step="03"
          title="定页型"
          body="封面页、对比页、步骤页、模板页、总结页混合使用，避免每页都像文档截图。"
          tone="mint"
        />
        <NumberCard
          step="04"
          title="删长句"
          body="每页只保留能讲出来的句子。原文细节留在讲解里，不堆在屏幕上。"
        />
        <NumberCard
          step="05"
          title="补视觉节奏"
          body="用信息层级、强调色、面板和对比关系，让内容适合演示，而不是适合滚动阅读。"
          tone="warm"
        />
      </div>
    </div>
    <Footer index={10} label="transformation" />
  </div>
);

const Closing: Page = () => (
  <div style={page}>
    <Style />
    <Grid />
    <div
      style={{
        ...shell,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Eyebrow>10 · 行动清单</Eyebrow>
        <Title size={88} width={1360}>
          先把环境和沟通方法练稳，
          <br />
          再让 AI 帮你放大产出。
        </Title>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 28,
          alignItems: 'end',
        }}
      >
        <Panel padding={34} minHeight={390}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Bullet
              title="先做对一件小事"
              body="比如让 AI 帮你产出一张 JSON 规范明确的卡片，而不是一上来做整站。"
            />
            <Bullet
              title="先会验收，再会扩展"
              body="你能指出差距，AI 才能持续进步，不然只会反复重写。"
              accent={palette.warm}
            />
            <Bullet
              title="先保结构，再追炫技"
              body="复杂项目的第一步永远是骨架清晰，不是动效铺满。"
              accent={palette.mint}
            />
          </div>
        </Panel>
        <div style={{ position: 'relative', minHeight: 390, paddingBottom: 18 }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 20,
              right: 6,
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(142,197,255,0.3), rgba(142,197,255,0) 68%)',
              animation: 'vibeGlow 5.8s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: 36,
              border: `1px solid ${palette.line}`,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              padding: '34px 34px 38px',
              boxShadow: '0 26px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            <div
              style={{
                fontSize: 15,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: palette.faint,
              }}
            >
              Next move
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: 'var(--osd-font-display)',
                fontSize: 56,
                lineHeight: 1,
                letterSpacing: '-0.05em',
                fontWeight: 600,
              }}
            >
              Build the next deck.
            </div>
            <div style={{ marginTop: 18, fontSize: 23, lineHeight: 1.6, color: palette.muted }}>
              下一步不是换更炫的模型，而是把你的下一篇 Markdown
              也变成一套能讲、能改、能复盘的演示稿。
            </div>
            <div
              style={{
                marginTop: 24,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 18px',
                borderRadius: 999,
                background: palette.accentSoft,
                color: palette.text,
                fontSize: 20,
              }}
            >
              <span style={{ color: palette.accent }}>11 slides</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>从知识到舞台表达</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer index={11} label="closing" />
  </div>
);

const pages: Page[] = [
  Cover,
  Mindset,
  Foundation,
  Safety,
  JsonFirst,
  Override,
  Review,
  Debug,
  UseCases,
  Playbook,
  Closing,
];

export default pages;
