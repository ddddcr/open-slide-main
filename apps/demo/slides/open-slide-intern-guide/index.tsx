import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

export const meta: SlideMeta = {
  title: '给 0 代码实习生的 open-slide 使用说明',
};

export const design: DesignSystem = {
  palette: { bg: '#f6f1e7', text: '#141210', accent: '#c43a1d' },
  fonts: {
    display: '"Times New Roman", "Source Serif Pro", serif',
    body: '"Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 150, body: 34 },
  radius: 14,
};

const TOTAL = 9;

const palette = {
  bg: '#f6f1e7',
  surface: '#ffffff',
  text: '#141210',
  muted: '#7d756b',
  faint: '#a59b8f',
  line: '#1a1815',
  accent: '#c43a1d',
  accentSoft: 'rgba(196, 58, 29, 0.08)',
  warm: '#8a5a2b',
  soft: '#f1e8da',
};

const page = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  background: palette.bg,
  color: palette.text,
  fontFamily: 'var(--osd-font-body)',
  boxSizing: 'border-box' as const,
};

const shell = {
  width: '100%',
  height: '100%',
  padding: '120px 140px 100px',
  boxSizing: 'border-box' as const,
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontFamily: 'var(--osd-font-body)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: palette.accent,
    }}
  >
    {children}
  </div>
);

const Title = ({ children, size = 152 }: { children: ReactNode; size?: number }) => (
  <h1
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      lineHeight: 1.04,
      letterSpacing: '-0.015em',
      fontWeight: 700,
      margin: 0,
      color: palette.text,
      maxWidth: 1320,
    }}
  >
    {children}
  </h1>
);

const SectionTitle = ({ children, size = 68 }: { children: ReactNode; size?: number }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      fontWeight: 700,
      margin: 0,
      color: palette.text,
      maxWidth: 1200,
    }}
  >
    {children}
  </h2>
);

const Body = ({
  children,
  width = 1180,
  size = 34,
}: {
  children: ReactNode;
  width?: number;
  size?: number;
}) => (
  <p
    style={{
      margin: 0,
      maxWidth: width,
      fontSize: size,
      lineHeight: 1.56,
      color: palette.muted,
    }}
  >
    {children}
  </p>
);

const Footer = ({ index, label }: { index: number; label: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 140,
      right: 140,
      bottom: 70,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: `1px dashed ${palette.line}`,
      paddingTop: 18,
      fontFamily: 'var(--osd-font-body)',
      fontSize: 18,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: palette.faint,
    }}
  >
    <span>{label}</span>
    <span>
      p. {index} / {TOTAL}
    </span>
  </div>
);

const Panel = ({
  children,
  padding = 30,
  minHeight,
  surface = palette.surface,
}: {
  children: ReactNode;
  padding?: number;
  minHeight?: number;
  surface?: string;
}) => (
  <div
    style={{
      border: `1px solid ${palette.line}`,
      background: surface,
      padding,
      minHeight,
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

const Bullet = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 16, alignItems: 'start' }}>
    <div
      style={{
        width: 10,
        height: 10,
        marginTop: 10,
        borderRadius: '50%',
        background: palette.accent,
      }}
    />
    <div style={{ fontSize: 28, lineHeight: 1.58, color: palette.text }}>{children}</div>
  </div>
);

const LabelCard = ({ title, body }: { title: string; body: ReactNode }) => (
  <Panel padding={28} minHeight={220}>
    <div
      style={{
        fontFamily: 'var(--osd-font-body)',
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: palette.accent,
      }}
    >
      {title}
    </div>
    <div style={{ marginTop: 18, fontSize: 28, lineHeight: 1.58, color: palette.text }}>{body}</div>
  </Panel>
);

const PromptBox = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      border: `1px solid ${palette.line}`,
      background: palette.soft,
      padding: '22px 24px',
      fontSize: 26,
      lineHeight: 1.6,
      color: palette.text,
    }}
  >
    {children}
  </div>
);

const Cover: Page = () => (
  <div style={page}>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(26,24,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,24,21,0.05) 1px, transparent 1px)',
        backgroundSize: '84px 84px',
        opacity: 0.45,
        maskImage: 'radial-gradient(circle at 24% 18%, black, transparent 72%)',
      }}
    />
    <div style={{ ...shell, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1400 }}>
        <Eyebrow>open-slide · intern guide</Eyebrow>
        <div style={{ height: 34 }} />
        <Title>给 0 代码实习生的 open-slide 使用说明</Title>
        <div style={{ marginTop: 42, width: 520, height: 2, background: palette.line }} />
        <div style={{ marginTop: 30 }}>
          <Body size={36} width={1120}>
            你不用写代码。你只要把主题、资料、模板偏好和修改意见说清楚， open-slide
            就能帮你做出一套能演示、能修改、能导出的幻灯片。
          </Body>
        </div>
        <div
          style={{
            marginTop: 42,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 18px',
            border: `1px solid ${palette.line}`,
            background: '#fffdf8',
            fontSize: 20,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: palette.muted,
          }}
        >
          适合培训 · 说明 · 入门引导
        </div>
      </div>
    </div>
    <Footer index={1} label="cover" />
  </div>
);

const WhatItDoes: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>01 · 先看懂它能做什么</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={78}>把内容变成一套可展示的幻灯片，而不是让你自己从零排版。</SectionTitle>
      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
        <Panel minHeight={360}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            你可以做
          </div>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Bullet>把 Markdown、文档、大纲变成 slide。</Bullet>
            <Bullet>先出初稿，再根据你的意见反复修改。</Bullet>
            <Bullet>选择不同模板，让同一份内容变成不同气质。</Bullet>
            <Bullet>加图标、图片、流程图，让内容更容易看懂。</Bullet>
            <Bullet>最后导出成 PDF 或 HTML，用来分享和演示。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={360}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            先记住边界
          </div>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Bullet>它更像“网页幻灯片工具”，不是原生 PowerPoint 编辑器。</Bullet>
            <Bullet>最适合做培训、汇报、说明、技术分享这类内容。</Bullet>
            <Bullet>如果事实内容很重要，最好先由用户提供资料。</Bullet>
            <Bullet>如果只是想先看样子，可以先给主题，让 AI 出初稿。</Bullet>
            <Bullet>你负责内容正确，AI 负责排版和初步组合。</Bullet>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={2} label="what-it-does" />
  </div>
);

const ContentSources: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>02 · 幻灯片内容从哪里来</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>内容可以由用户提供，也可以先给主题让 AI 帮你生成初稿。</SectionTitle>
      <div
        style={{ marginTop: 38, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}
      >
        <LabelCard
          title="只给主题"
          body={
            <>
              比如“做一套 AI 入门幻灯片”。
              <br />
              适合先看结构和风格。
            </>
          }
        />
        <LabelCard
          title="给 Markdown"
          body={
            <>
              直接用你现成的文章、手册、汇报稿。
              <br />
              适合正式内容，最稳。
            </>
          }
        />
        <LabelCard
          title="给大纲"
          body={
            <>
              先把每页要讲什么列出来。
              <br />
              适合你已经想好结构的时候。
            </>
          }
        />
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>
          最简单的判断：<span style={{ color: palette.accent }}>正式内容用文档</span>，
          <span style={{ color: palette.accent }}>先试效果用主题</span>，
          <span style={{ color: palette.accent }}>想控结构用大纲</span>。
        </PromptBox>
      </div>
    </div>
    <Footer index={3} label="content-sources" />
  </div>
);

const ThemeChoice: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>03 · 如何选模板</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>模板不是“好看就行”，而是要和内容类型匹配。</SectionTitle>
      <div style={{ marginTop: 38, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
        <LabelCard
          title="paper-press"
          body={
            <>
              适合培训、说明、文档转幻灯片。
              <br />
              清楚、稳、字多也能看。
            </>
          }
        />
        <LabelCard
          title="editorial-noir"
          body={
            <>
              适合展示感更强的汇报。
              <br />
              更像杂志封面，气质更强。
            </>
          }
        />
        <LabelCard
          title="neon-terminal"
          body={
            <>
              适合技术内容和开发者分享。
              <br />
              深色、代码感强、很像终端。
            </>
          }
        />
      </div>
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <Panel>
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            不确定怎么选时
          </div>
          <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.58, color: palette.text }}>
            直接说“请帮我选一个最适合这个主题的模板，并说明原因”。
          </div>
        </Panel>
        <Panel>
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            最简单的规则
          </div>
          <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.58, color: palette.text }}>
            培训和说明先用 `paper-press`，展示感更强用 `editorial-noir`，技术题材用
            `neon-terminal`。
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={4} label="choose-theme" />
  </div>
);

const Revision: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>04 · 生成后怎么改</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>不要说“再优化一下”，要说清楚是哪一页、哪里、怎么改。</SectionTitle>
      <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={360}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            好的说法
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>第 3 页字太多，缩短一半。</Bullet>
            <Bullet>第 5 页加一个例子，不要只讲结论。</Bullet>
            <Bullet>封面标题再大一点，副标题缩短。</Bullet>
            <Bullet>改成更正式一点，适合内部培训。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={360}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            不好的说法
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>“再高级一点”</Bullet>
            <Bullet>“不好看”</Bullet>
            <Bullet>“不太对”</Bullet>
            <Bullet>“再优化一下”</Bullet>
          </div>
        </Panel>
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>
          最稳的反馈格式是：
          <span style={{ color: palette.accent }}>页码 + 问题 + 你想要的结果</span>。
        </PromptBox>
      </div>
    </div>
    <Footer index={5} label="revise" />
  </div>
);

const Assets: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>05 · 图标和图片怎么加</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>有图就用图，没有图就让 AI 补一张能帮助理解的图。</SectionTitle>
      <div
        style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}
      >
        <LabelCard
          title="你已经有图片"
          body={
            <>
              直接提供图片文件。
              <br />
              适合产品截图、logo、插图。
            </>
          }
        />
        <LabelCard
          title="你知道要什么"
          body={
            <>
              直接说“第 4 页补一个流程图”。
              <br />
              或“第 2 页加一组图标”。
            </>
          }
        />
        <LabelCard
          title="你不确定要什么"
          body={
            <>
              直接说“请判断哪些页适合加图”。
              <br />让 AI 先给建议。
            </>
          }
        />
      </div>
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <Panel>
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            常见做法
          </div>
          <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.58, color: palette.text }}>
            图片负责“让人一眼看懂”，图标负责“把重点分清楚”，流程图负责“让步骤更直观”。
          </div>
        </Panel>
        <Panel>
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            记住一句话
          </div>
          <div style={{ marginTop: 14, fontSize: 28, lineHeight: 1.58, color: palette.text }}>
            不要为了加图而加图。能解释问题的图才值得放上去。
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={6} label="assets" />
  </div>
);

const Workflow: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>06 · 最简单的操作流程</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>实习生只要记住这 5 步，就能开始做一套幻灯片。</SectionTitle>
      <div
        style={{ marginTop: 38, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}
      >
        <LabelCard
          title="1. 说主题"
          body={
            <>
              先告诉 AI 你要讲什么。
              <br />
              例如“AI 新手入门”。
            </>
          }
        />
        <LabelCard
          title="2. 给材料"
          body={
            <>
              有 Markdown 就给 Markdown。
              <br />
              没有就给大纲。
            </>
          }
        />
        <LabelCard
          title="3. 选模板"
          body={
            <>
              培训选 paper-press。
              <br />
              展示选 editorial-noir。
            </>
          }
        />
        <LabelCard
          title="4. 看预览"
          body={
            <>
              打开页面看效果。
              <br />
              先看结构，再看细节。
            </>
          }
        />
        <LabelCard
          title="5. 提修改"
          body={
            <>
              说页码、问题和目标。
              <br />
              不满意就继续改。
            </>
          }
        />
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>
          你不需要一开始就把所有东西想完整。最有效的方法是：
          <span style={{ color: palette.accent }}>先出初稿，再改成你要的样子</span>。
        </PromptBox>
      </div>
    </div>
    <Footer index={7} label="workflow" />
  </div>
);

const Mistakes: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>07 · 常见误区</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>新手最容易踩的坑，基本都和“说得太虚”有关。</SectionTitle>
      <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={340}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            不要这样
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>“帮我做得好看一点”</Bullet>
            <Bullet>“再高级一点”</Bullet>
            <Bullet>“第 4 页不太对”</Bullet>
            <Bullet>“这里感觉怪怪的”</Bullet>
          </div>
        </Panel>
        <Panel minHeight={340}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            应该这样
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>“第 4 页字太多，压缩到 3 个要点”</Bullet>
            <Bullet>“封面更像培训课件，少一点装饰”</Bullet>
            <Bullet>“第 2 页加一个示意图”</Bullet>
            <Bullet>“把这套改成深色版本”</Bullet>
          </div>
        </Panel>
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>重点不是“你会不会代码”，而是“你能不能把修改意见说清楚”。</PromptBox>
      </div>
    </div>
    <Footer index={8} label="mistakes" />
  </div>
);

const Closing: Page = () => (
  <div style={page}>
    <div style={shell}>
      <Eyebrow>08 · 直接可复制的话术</Eyebrow>
      <div style={{ height: 24 }} />
      <SectionTitle size={76}>把需求说清楚，就是你最重要的能力。</SectionTitle>
      <div
        style={{ marginTop: 34, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24 }}
      >
        <Panel minHeight={420}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            你可以直接这样说
          </div>
          <div style={{ marginTop: 18, fontSize: 28, lineHeight: 1.72, color: palette.text }}>
            请帮我做一套关于“XXX”的幻灯片，
            <br />
            面向“XXX”人群，
            <br />8 到 10 页，
            <br />
            风格用 `paper-press`。
            <br />
            如果有资料，就先基于资料整理；
            <br />
            如果没有资料，就先出一个初稿。
          </div>
        </Panel>
        <Panel minHeight={420}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: palette.accent,
            }}
          >
            最后记住
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Bullet>内容可以来自你给的文档，也可以先让 AI 生成。</Bullet>
            <Bullet>模板先按内容类型选，不要先按“好不好看”选。</Bullet>
            <Bullet>不满意就说页码、问题和目标，不要只说“再优化”。</Bullet>
            <Bullet>有图就给图，没有图就让 AI 补图或建议图的位置。</Bullet>
          </div>
        </Panel>
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>
          给 0 代码实习生的最短版本：
          <span style={{ color: palette.accent }}>说主题，给材料，选模板，看预览，提修改。</span>
        </PromptBox>
      </div>
    </div>
    <Footer index={9} label="closing" />
  </div>
);

const pages: Page[] = [
  Cover,
  WhatItDoes,
  ContentSources,
  ThemeChoice,
  Revision,
  Assets,
  Workflow,
  Mistakes,
  Closing,
];

export default pages;
