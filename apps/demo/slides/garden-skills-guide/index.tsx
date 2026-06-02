import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

export const meta: SlideMeta = {
  title: 'gstack 功能讲解',
};

export const design: DesignSystem = {
  palette: { bg: '#000000', text: '#f5f5f7', accent: '#2997ff' },
  fonts: {
    display:
      '"SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif',
    body: '"SF Pro Text", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 28,
};

type Feature = {
  name: string;
  what: string;
  canDo: string;
  logic: string;
};

type Category = {
  key: string;
  title: string;
  countLabel: string;
  purpose: string;
  useWhen: string;
  logic: string;
  entries: Feature[];
};

let TOTAL = 0;

const palette = {
  bg: '#000000',
  bgSoft: '#0b0d12',
  surface: 'rgba(255, 255, 255, 0.04)',
  soft: 'rgba(255, 255, 255, 0.03)',
  text: '#f5f5f7',
  muted: '#86868b',
  faint: '#6e6e73',
  line: 'rgba(255, 255, 255, 0.1)',
  accent: '#2997ff',
  accentSoft: 'rgba(41, 151, 255, 0.15)',
  gold: '#f5a623',
  goldSoft: 'rgba(245, 166, 35, 0.15)',
  warn: '#ff375f',
  glow: 'rgba(41, 151, 255, 0.3)',
  cardGlow: 'rgba(255,255,255,0.06)',
};

const keyframes = `
@keyframes keynoteFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes keynoteGlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.04); }
}
@keyframes keynoteFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
`;

const page = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  background:
    'radial-gradient(circle at 50% -8%, rgba(41,151,255,0.22), transparent 32%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.12), transparent 20%), linear-gradient(180deg, #050608 0%, #000000 34%, #07090d 100%)',
  color: palette.text,
  fontFamily: 'var(--osd-font-body)',
  boxSizing: 'border-box' as const,
};

const shell = {
  width: '100%',
  height: '100%',
  padding: '90px 104px 90px',
  boxSizing: 'border-box' as const,
};

const gridBg = (
  <>
    <style>{keyframes}</style>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,151,255,0.08), transparent 60%)',
        pointerEvents: 'none',
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 144,
        left: '8%',
        right: '8%',
        height: 1,
        background:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 18%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.06) 82%, transparent 100%)',
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: -220,
        left: '50%',
        width: 900,
        height: 900,
        transform: 'translateX(-50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,151,255,0.32), rgba(41,151,255,0) 62%)',
        animation: 'keynoteGlow 7s ease-in-out infinite',
        pointerEvents: 'none',
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
        animation: 'keynoteFloat 8s ease-in-out infinite',
        pointerEvents: 'none',
      }}
    />
  </>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: palette.accent,
      animation: 'keynoteFadeUp 680ms cubic-bezier(0.16, 1, 0.3, 1) both',
    }}
  >
    {children}
  </div>
);

const Title = ({ children, size = 160 }: { children: ReactNode; size?: number }) => (
  <h1
    style={{
      margin: 0,
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      lineHeight: 1.05,
      letterSpacing: '-0.04em',
      fontWeight: 600,
      maxWidth: 1360,
      color: palette.text,
      animation: 'keynoteFadeUp 780ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both',
    }}
  >
    {children}
  </h1>
);

const SectionTitle = ({ children, size = 76 }: { children: ReactNode; size?: number }) => (
  <h2
    style={{
      margin: 0,
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
      fontWeight: 600,
      maxWidth: 1280,
      color: palette.text,
      animation: 'keynoteFadeUp 760ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both',
    }}
  >
    {children}
  </h2>
);

const Body = ({
  children,
  width = 1180,
  size = 32,
  color = palette.muted,
}: {
  children: ReactNode;
  width?: number;
  size?: number;
  color?: string;
}) => (
  <p
    style={{
      margin: 0,
      maxWidth: width,
      fontSize: size,
      lineHeight: 1.5,
      color,
      fontWeight: 400,
      animation: 'keynoteFadeUp 760ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both',
    }}
  >
    {children}
  </p>
);

const Footer = ({ index, label }: { index: number; label: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 104,
      right: 104,
      bottom: 54,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: `1px solid rgba(255, 255, 255, 0.08)`,
      paddingTop: 16,
      fontSize: 16,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: palette.faint,
      fontWeight: 500,
      backdropFilter: 'blur(8px)',
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
  padding = 28,
  minHeight,
  background = palette.surface,
}: {
  children: ReactNode;
  padding?: number;
  minHeight?: number;
  background?: string;
}) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid rgba(255, 255, 255, 0.08)`,
      borderRadius: 24,
      background:
        background === palette.surface
          ? 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 58%, rgba(255,255,255,0.03) 100%)'
          : background,
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
          'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 40%, rgba(255,255,255,0.015) 100%)',
        pointerEvents: 'none',
      }}
    />
    {children}
  </div>
);

const CardTitle = ({ children, tone = palette.accent }: { children: ReactNode; tone?: string }) => (
  <div
    style={{
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: tone,
    }}
  >
    {children}
  </div>
);

const Bullet = ({ children, tone = palette.accent }: { children: ReactNode; tone?: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '15px 1fr', gap: 12, alignItems: 'start' }}>
    <div
      style={{
        width: 8,
        height: 8,
        marginTop: 11,
        borderRadius: '50%',
        background: tone,
      }}
    />
    <div style={{ fontSize: 25, lineHeight: 1.54, color: palette.text }}>{children}</div>
  </div>
);

const Pill = ({
  children,
  tone = palette.accent,
  background = palette.accentSoft,
}: {
  children: ReactNode;
  tone?: string;
  background?: string;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: 1000,
      border: `1px solid rgba(255, 255, 255, 0.12)`,
      background,
      fontSize: 16,
      fontWeight: 600,
      color: tone,
      backdropFilter: 'blur(14px)',
    }}
  >
    {children}
  </span>
);

const PromptBox = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      border: `1px solid rgba(255, 255, 255, 0.08)`,
      borderRadius: 20,
      background: palette.soft,
      padding: '20px 24px',
      fontSize: 24,
      lineHeight: 1.58,
      color: palette.text,
      whiteSpace: 'pre-line' as const,
      backdropFilter: 'blur(18px)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
    }}
  >
    {children}
  </div>
);

const MetricCard = ({ title, value, body }: { title: string; value: string; body: ReactNode }) => (
  <Panel minHeight={220}>
    <CardTitle>{title}</CardTitle>
    <div
      style={{
        marginTop: 18,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 58,
        lineHeight: 1,
        color: palette.text,
        fontWeight: 600,
        letterSpacing: '-0.02em',
      }}
    >
      {value}
    </div>
    <div style={{ marginTop: 16, fontSize: 23, lineHeight: 1.55, color: palette.muted }}>
      {body}
    </div>
  </Panel>
);

const OverviewStat = ({
  title,
  value,
  body,
}: {
  title: string;
  value: string;
  body: ReactNode;
}) => (
  <Panel minHeight={212}>
    <CardTitle>{title}</CardTitle>
    <div
      style={{
        marginTop: 16,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 54,
        lineHeight: 1,
        color: palette.text,
        fontWeight: 600,
        letterSpacing: '-0.02em',
      }}
    >
      {value}
    </div>
    <div style={{ marginTop: 14, fontSize: 22, lineHeight: 1.52, color: palette.muted }}>
      {body}
    </div>
  </Panel>
);

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <Panel minHeight={384} padding={24}>
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 34,
        lineHeight: 1.04,
        color: palette.text,
        fontWeight: 600,
        letterSpacing: '-0.02em',
      }}
    >
      {feature.name}
    </div>
    <div style={{ marginTop: 16 }}>
      <CardTitle>是什么</CardTitle>
      <div style={{ marginTop: 6, fontSize: 20, lineHeight: 1.5, color: palette.text }}>
        {feature.what}
      </div>
    </div>
    <div style={{ marginTop: 14 }}>
      <CardTitle tone={palette.gold}>能做什么</CardTitle>
      <div style={{ marginTop: 6, fontSize: 20, lineHeight: 1.5, color: palette.text }}>
        {feature.canDo}
      </div>
    </div>
    <div style={{ marginTop: 14 }}>
      <CardTitle tone={palette.warn}>底层逻辑</CardTitle>
      <div style={{ marginTop: 6, fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
        {feature.logic}
      </div>
    </div>
  </Panel>
);

const chunk = <T,>(items: T[], size: number) => {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
};

const categories: Category[] = [
  {
    key: 'planning',
    title: '规划、设计与体验路线',
    countLabel: '12 skills',
    purpose:
      '这类能力负责把模糊想法变成清晰方案，并在真正开发前先把方向、范围、设计和开发体验想明白。',
    useWhen: '当你还在想“这个需求到底该怎么做”“值不值得做”“页面方向对不对”时，先走这一类。',
    logic:
      '底层是 forcing questions + 文档沉淀 + 多角色评审：先问问题，再写方案，再让 CEO、设计、工程、DX 几种角色轮流挑刺。',
    entries: [
      {
        name: '/office-hours',
        what: '产品想法梳理入口。',
        canDo: '把一句模糊想法拆成用户痛点、现状替代方案、最小切口和未来形态。',
        logic: '通过 6 个强制问题逼 AI 不要直接开做，而是先写一份能流入后续 skill 的设计文档。',
      },
      {
        name: '/plan-ceo-review',
        what: 'CEO 视角的范围与方向评审。',
        canDo: '判断需求该扩、该缩、该换角度，或者该保持原范围。',
        logic:
          '先读取已有设计文档，再从产品野心、竞争力和边界上挑战前提，防止做一个看起来完整但价值不大的功能。',
      },
      {
        name: '/plan-eng-review',
        what: '工程经理视角的方案评审。',
        canDo: '锁定架构、数据流、异常路径、测试矩阵和性能风险。',
        logic: '通过结构化 review，把“隐含假设”变成明确图示和检查项，减少开工后返工。',
      },
      {
        name: '/plan-design-review',
        what: '设计方案阶段的设计评审。',
        canDo: '给视觉、层级、交互、节奏等维度打分，并提出调整建议。',
        logic: '不是泛泛说好不好看，而是按维度逐项看缺口，让 AI 在编码前先把设计问题暴露出来。',
      },
      {
        name: '/plan-devex-review',
        what: '开发者体验计划评审。',
        canDo: '如果你的产品用户是开发者，它会检查 onboarding、TTHW、魔法时刻和摩擦点。',
        logic: '通过 persona、竞品和路径推演，提前判断“文档和接入体验会不会劝退用户”。',
      },
      {
        name: '/plan-tune',
        what: '问题敏感度与沟通偏好调参器。',
        canDo: '查看 gstack 问过什么问题，把某类追问调成少问、必问或只在高风险时问。',
        logic: '把用户的交互偏好持久化，减少之后每个 skill 都重复打扰。',
      },
      {
        name: '/autoplan',
        what: '自动跑完整评审流水线。',
        canDo: '一键串起 CEO、设计、工程、DX 几轮计划评审。',
        logic: '把多 skill 的顺序和决策原则编码起来，只有真正需要人拍板的地方才停下来。',
      },
      {
        name: '/design-consultation',
        what: '从零建立设计系统的顾问型 skill。',
        canDo: '研究调性、定义视觉语言、写 DESIGN.md、给出风格风险与方向。',
        logic: '先理解产品定位，再沉淀成可复用的设计系统，而不是直接拼一页看起来漂亮的 UI。',
      },
      {
        name: '/design-shotgun',
        what: '多方案视觉探索器。',
        canDo: '一次生成 4 到 6 套方向，开对比板，收反馈，再继续出下一轮。',
        logic:
          '核心不是“生成图”，而是把 taste selection 做成循环，帮用户通过比较而不是想象来做决定。',
      },
      {
        name: '/design-html',
        what: '把设计稿或方案变成生产级 HTML 的 skill。',
        canDo: '把 mockup、设计方案、页面描述落成真实前端成品。',
        logic:
          '依靠可计算布局和框架识别，把静态视觉意图转成可运行、可适配的页面，而不是纯展示 demo。',
      },
      {
        name: '/design-review',
        what: '上线前后的设计质检与修复循环。',
        canDo: '找视觉不一致、层级不清、节奏拖沓、AI slop 痕迹，并直接修掉。',
        logic: '通过真实页面截图和迭代修复，让 AI 不是只“点评设计”，而是真的把页面修顺。',
      },
      {
        name: '/devex-review',
        what: '真实上手路径的开发者体验审计。',
        canDo: '实际走文档、安装、示例和 CLI 路径，测 TTHW，找 onboarding 断点。',
        logic: '把“开发者体验好不好”从主观判断变成真实流程测试与时间证据。',
      },
    ],
  },
  {
    key: 'quality',
    title: '质量、测试、发布与文档路线',
    countLabel: '17 skills',
    purpose: '这类能力负责把“已经做出来的东西”变成可交付、可上线、可复盘的结果。',
    useWhen: '当你要做代码评审、真实 QA、发布上线、交接文档或周复盘时，走这一类。',
    logic:
      '底层是 diff 分析 + 真实浏览器执行 + 发版状态机 + 文档同步：每一步都尽量留证据，不靠口头保证。',
    entries: [
      {
        name: '/review',
        what: '预合并代码评审器。',
        canDo: '找出那些测试可能过了，但真实环境会出问题的 bug、回归和遗漏。',
        logic: '它读 diff、读上下文、套 checklist，并按测试、性能、安全等视角分层看问题。',
      },
      {
        name: '/investigate',
        what: '根因排查工作流。',
        canDo: '处理“为什么坏了”“昨天还能用今天不行”这类问题。',
        logic: '先调查、再假设、再验证，不允许 AI 连续瞎修，避免把偶然修好当成真解决。',
      },
      {
        name: '/codex',
        what: '第二个 AI 模型的独立意见。',
        canDo: '做另一轮代码 review、对抗性挑战，或者开放式咨询。',
        logic: '通过不同模型的视角降低单模型盲区，让“模型分歧”成为质量线索。',
      },
      {
        name: '/health',
        what: '代码健康仪表盘。',
        canDo: '汇总 typecheck、lint、测试、死代码等信号，给出综合分。',
        logic: '把零散工程检查聚合成一个可比的健康度，方便发现趋势而不是只看单项报错。',
      },
      {
        name: '/cso',
        what: '安全官视角的安全审计。',
        canDo: '检查 OWASP Top 10、STRIDE、密钥泄露、供应链风险和威胁模型。',
        logic: '通过多层过滤和独立验证降低误报，只把高置信度安全问题推给用户。',
      },
      {
        name: '/qa',
        what: '真实浏览器 QA + 自动修复循环。',
        canDo: '打开网页点流程、找 bug、修 bug、补回归测试。',
        logic: '不依赖“我猜页面可能这样”，而是让 AI 真进入浏览器，以用户路径为基准做验证。',
      },
      {
        name: '/qa-only',
        what: '只测不修的 QA 模式。',
        canDo: '给出 bug 清单、截图、复现步骤和健康分，但不改代码。',
        logic: '沿用 /qa 的真实测试方法，只是把输出停留在报告层，适合先审再改。',
      },
      {
        name: '/benchmark',
        what: '性能回归检测器。',
        canDo: '测页面加载、资源大小、Core Web Vitals，并比较改动前后。',
        logic: '先做 baseline，再看差值，让“是不是变慢了”从感觉变成指标。',
      },
      {
        name: '/benchmark-models',
        what: '模型横向基准工具。',
        canDo: '让 Claude、GPT、Gemini 跑同一任务，比较成本、速度和质量。',
        logic: '把模型选择从主观偏好变成一组可以复现的对照实验。',
      },
      {
        name: '/ship',
        what: '发 PR 与发版准备工作流。',
        canDo: '跑测试、检查版本槽位、整理变更、提交并创建 PR。',
        logic: '把“准备上线”拆成稳定顺序，避免漏跑检查或带着脏状态直接发版。',
      },
      {
        name: '/land-and-deploy',
        what: '从“PR 批了”推进到“线上通过验证”的工作流。',
        canDo: '合并、等 CI、等部署、做上线后健康检查。',
        logic: '它把上线动作和验证动作绑在一起，避免只负责按下 merge 却不管线上结果。',
      },
      {
        name: '/canary',
        what: '上线后巡检与监控。',
        canDo: '持续看页面错误、性能退化和故障信号。',
        logic: '把发布后验证从一次性检查扩展成一段观察期，尽早发现“上线后才出现”的问题。',
      },
      {
        name: '/landing-report',
        what: '发版队列看板。',
        canDo: '看当前 open PR 占了哪些版本槽位，还有哪些工作区快要 ship。',
        logic: '把“现在适不适合发版”变成可视化队列，而不是靠大家互相问。',
      },
      {
        name: '/document-release',
        what: '发版后文档同步器。',
        canDo: '把 README、ARCHITECTURE、CONTRIBUTING、CHANGELOG 跟代码变更对齐。',
        logic: '不是把文档当附属品，而是按 diff 反推文档该补什么，降低知识断层。',
      },
      {
        name: '/retro',
        what: '工程周复盘器。',
        canDo: '总结一周交付内容、代码质量趋势和个人/团队工作模式。',
        logic: '通过 commit 历史和质量信号生成趋势视角，而不是只列发生了什么。',
      },
      {
        name: '/make-pdf',
        what: '把 markdown 变成成品 PDF。',
        canDo: '给周报、方案、交接文档导出正式 PDF 版本。',
        logic: '做的不只是格式转换，而是分页、目录、页眉、水印等“可提交文档”细节。',
      },
      {
        name: '/learn',
        what: '项目经验知识库管理器。',
        canDo: '回看历史学到什么、导出经验、删掉过时知识。',
        logic: '让一次排障或一次发布积累变成团队长期可复用记忆。',
      },
    ],
  },
  {
    key: 'browser',
    title: '浏览器、现场验证与协作路线',
    countLabel: '13 skills',
    purpose: '这类能力负责真实打开页面、抓取数据、共享浏览器上下文，并让验证更贴近用户现场。',
    useWhen: '当任务跟网页、站点、浏览器登录态、部署结果或在线数据有关时，优先想这一类。',
    logic:
      '底层是 browser daemon + cookies + 共享会话 + 页面证据，把 AI 从“看代码猜页面”变成“真的去操作页面”。',
    entries: [
      {
        name: '/gstack',
        what: '通用浏览器操作入口。',
        canDo: '打开页面、点击、截图、对比改动前后、查看状态。',
        logic: '封装高频浏览器动作，让网页验证变成低成本默认动作。',
      },
      {
        name: '/browse',
        what: '快速网页 QA / dogfooding skill。',
        canDo: '测试用户流、表单、上传、弹窗、响应式布局，并产出截图证据。',
        logic: '通过浏览器自动化把“看起来没问题”变成真实可复现操作。',
      },
      {
        name: '/open-gstack-browser',
        what: '打开带侧边栏的可见 Chromium。',
        canDo: '你可以一边看 AI 操作，一边实时观察页面和行为日志。',
        logic: '让 agent 操作从黑盒变成可观察过程，更适合联调和教学。',
      },
      {
        name: '/pair-agent',
        what: '把浏览器配对给另一个 AI。',
        canDo: '生成 key，让另一个 agent 接入你的浏览器标签页。',
        logic: '把单人单浏览器扩展成多 agent 协作，同步网页上下文。',
      },
      {
        name: '/scrape',
        what: '从网页拉结构化数据。',
        canDo: '给定页面后提取表格、列表、字段并返回 JSON。',
        logic: '先原型化抓取流程，再把意图和页面结构固化成稳定脚本。',
      },
      {
        name: '/skillify',
        what: '把一次成功抓取固化成永久 skill。',
        canDo: '把临时浏览器抓取流程沉淀成脚本和测试，下次同类页面秒抓。',
        logic: '把“本次好运气”转成“下次可复用资产”。',
      },
      {
        name: '/setup-browser-cookies',
        what: '导入真实浏览器 cookies。',
        canDo: '让 headless 浏览器继承登录态，去测需要账号权限的页面。',
        logic: '解决“能打开页面但看不到真实内容”的验证断层。',
      },
      {
        name: '/verification',
        what: '全链路验证器。',
        canDo: '从浏览器一直验证到 API、数据和返回内容。',
        logic: '不是只确认页面打开，而是连同后端响应和数据链路一起验证。',
      },
      {
        name: '/canary',
        what: '上线后巡检。',
        canDo: '持续看生产页面异常和性能漂移。',
        logic: '复用浏览器和性能基线能力，把线上验证继续做下去。',
      },
      {
        name: '/setup-deploy',
        what: '给发布验证建立部署配置。',
        canDo: '探测平台、健康检查地址和部署状态命令，写入项目文档。',
        logic: '把每次都要重新解释的部署细节沉淀成可自动复用的配置。',
      },
      {
        name: '/sync-gbrain',
        what: '同步仓库知识给 gbrain。',
        canDo: '更新代码索引，让搜索和知识检索更准。',
        logic: '浏览器验证之外，再补一层“代码和知识库是最新的”。',
      },
      {
        name: '/context-save',
        what: '保存当前工作上下文。',
        canDo: '记录 git 状态、关键决定和剩余工作，方便之后续上。',
        logic: '让跨天协作和交接不中断，不靠人肉回忆。',
      },
      {
        name: '/context-restore',
        what: '恢复之前保存的上下文。',
        canDo: '一键回到上次停下来的工作状态与决策背景。',
        logic: '把“重建上下文”的成本从十几分钟压到几秒。',
      },
    ],
  },
  {
    key: 'ios',
    title: 'iOS、系统增强与底层辅助路线',
    countLabel: '10 skills',
    purpose: '这类能力负责 iOS 真机测试、桌面环境增强、运行安全边界和系统级辅助流程。',
    useWhen: '当任务跟 iPhone / iPad 真机、系统操作、文件边界或安全约束有关时，用这一类。',
    logic:
      '底层是原生桥接、目录边界控制、风险提示和工具安装，让 AI 能安全地碰系统，而不是只停留在代码层。',
    entries: [
      {
        name: '/ios-open-url',
        what: '在真机或模拟器中打开 URL。',
        canDo: '直接把页面、Deep Link 或本地调试地址推到 iOS 设备。',
        logic: '通过桥接层把“移动端验证”纳入同一套 agent 流程。',
      },
      {
        name: '/ios-tap',
        what: '在 iOS 设备上点击。',
        canDo: '完成真机页面操作与交互验证。',
        logic: '把设备输入事件暴露给 AI，使移动端验收不必手动接力。',
      },
      {
        name: '/ios-swipe',
        what: '在 iOS 设备上滑动。',
        canDo: '测试长列表、轮播、滑动关闭等手势路径。',
        logic: '补齐桌面浏览器无法模拟的真实手势行为。',
      },
      {
        name: '/ios-screenshot',
        what: '抓取 iOS 真机截图。',
        canDo: '保留移动端问题证据、对比 UI、做缺陷记录。',
        logic: '用截图作为移动端验证产物，而不是只给主观描述。',
      },
      {
        name: '/ios-list-devices',
        what: '列出当前可用设备。',
        canDo: '确认真机或模拟器是否在线、名称是什么。',
        logic: '把环境确认前置，减少“命令没问题但设备没连上”的排查时间。',
      },
      {
        name: '/careful',
        what: '高风险操作提醒器。',
        canDo: '在 `rm -rf`、force push、删库等命令前先提醒。',
        logic: '通过风险拦截，让 AI 在碰生产或共享环境时不轻易做破坏性动作。',
      },
      {
        name: '/freeze',
        what: '编辑范围冻结器。',
        canDo: '把本次修改限制在某个目录，只允许 AI 动指定范围。',
        logic: '通过目录边界降低误改概率，尤其适合多人协作仓库。',
      },
      {
        name: '/unfreeze',
        what: '解除编辑范围限制。',
        canDo: '当任务扩大时恢复全局编辑能力。',
        logic: '和 /freeze 成对使用，让安全边界可控可撤回。',
      },
      {
        name: '/guard',
        what: '最高级别安全模式。',
        canDo: '同时开启危险命令提醒和目录冻结。',
        logic: '把“碰生产时要非常小心”变成系统级约束，而不是口头约束。',
      },
      {
        name: '/setup-gbrain',
        what: '把 gbrain 环境装起来。',
        canDo: '初始化本地或远程知识层，供后续检索和同步使用。',
        logic: '把智能检索基础设施搭好，后续 skill 才能拿到更稳的上下文。',
      },
    ],
  },
];

const makeOverviewPage = (category: Category, index: number): Page => () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>{`${String(index).padStart(2, '0')} · ${category.key}`}</Eyebrow>
      <div style={{ height: 20 }} />
      <SectionTitle size={78}>{category.title}</SectionTitle>
      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
        <Pill>{category.countLabel}</Pill>
        <Pill tone={palette.gold} background={palette.goldSoft}>
          适用场景：{category.useWhen}
        </Pill>
      </div>
      <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 22 }}>
        <Panel minHeight={420}>
          <CardTitle>这一类是做什么的</CardTitle>
          <div style={{ marginTop: 18, fontSize: 28, lineHeight: 1.62, color: palette.text }}>
            {category.purpose}
          </div>
          <div style={{ marginTop: 24 }}>
            <CardTitle tone={palette.warn}>底层逻辑</CardTitle>
          </div>
          <div style={{ marginTop: 10, fontSize: 24, lineHeight: 1.58, color: palette.muted }}>
            {category.logic}
          </div>
        </Panel>
        <div style={{ display: 'grid', gap: 18 }}>
          <OverviewStat
            title="你该什么时候想起它"
            value={category.key.toUpperCase()}
            body={category.useWhen}
          />
          <Panel minHeight={180} background={palette.soft}>
            <CardTitle>这一类覆盖的 Skill</CardTitle>
            <div style={{ marginTop: 14, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
              {category.entries.map((entry) => (
                <Pill key={entry.name} tone={palette.gold} background={palette.goldSoft}>
                  {entry.name}
                </Pill>
              ))}
            </div>
          </Panel>
        </div>
      </div>
      <Footer index={index} label={`${category.key}-overview`} />
    </div>
  </div>
);

const makeDetailPage =
  (category: Category, features: Feature[], index: number, chunkIndex: number): Page =>
  () => (
    <div style={page}>
      {gridBg}
      <div style={shell}>
        <Eyebrow>{`${String(index).padStart(2, '0')} · 功能细讲`}</Eyebrow>
        <div style={{ height: 20 }} />
        <SectionTitle size={68}>{`${category.title} · 第 ${chunkIndex + 1} 组`}</SectionTitle>
        <div style={{ marginTop: 18 }}>
          <Body size={27} width={1240}>
            每张卡片都回答三件事：它是什么、能做什么、底层逻辑如何帮助用户把问题从“描述”推进到“结果”。
          </Body>
        </div>
        <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
      <Footer index={index} label={`${category.key}-${chunkIndex + 1}`} />
    </div>
  );

const Cover: Page = () => (
  <div style={page}>
    {gridBg}
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: 108,
        top: 96,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 38% 38%, rgba(41,151,255,0.25), rgba(41,151,255,0.05) 55%, transparent 72%)',
      }}
    />
    <div style={{ ...shell, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Eyebrow>gstack · ux designer onboarding</Eyebrow>
      <div style={{ height: 26 }} />
      <Title>
        gstack 是什么，
        <br />
        有哪些功能，
        <br />
        它到底怎么帮你解决问题
      </Title>
      <div style={{ marginTop: 28, width: 560, height: 2, background: palette.line }} />
      <div style={{ marginTop: 28 }}>
        <Body size={35} width={1220} color={palette.text}>
          这份 deck 面向 <span style={{ color: palette.accent }}>UX 设计师、纯开发小白</span>。
          它不只是列命令名，而是按交接文档的标准把 gstack 的
          <span style={{ color: palette.accent }}>
            功能分类、每个 Skill 的作用、能做什么、底层机制
          </span>
          全部讲清楚。
        </Body>
      </div>
      <div style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
        <Pill>项目名：gstack</Pill>
        <Pill tone={palette.gold} background={palette.goldSoft}>
          目标：会选路线、会提需求、会验结果
        </Pill>
      </div>
    </div>
    <Footer index={1} label="cover" />
  </div>
);

const Naming: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>02 · 先把名字和定位讲清楚</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={78}>
        gstack 不是一个“单独的软件界面”，而是一整套装给 AI 代理的工作流技能系统。
      </SectionTitle>
      <div style={{ marginTop: 34, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={440}>
          <CardTitle>术语</CardTitle>
          <div style={{ marginTop: 18, fontSize: 30, lineHeight: 1.6, color: palette.text }}>
            Skill = 一份结构化流程 + 方法论 + 参考资料 + 有时带脚本或浏览器能力。
          </div>
          <div style={{ marginTop: 24 }}>
            <CardTitle tone={palette.gold}>白话影响</CardTitle>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>你不是在直接“学写代码”，而是在调度不同 AI 专家。</Bullet>
            <Bullet>同一个需求，换成正确的 Skill，输出会更像专业团队协作，而不是普通聊天。</Bullet>
            <Bullet>gstack 的强项是把想法、设计、评审、QA、发布和复盘串成一条链。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={440} background={palette.soft}>
          <CardTitle>给 UX 设计师的最短心智模型</CardTitle>
          <div
            style={{
              marginTop: 18,
              display: 'grid',
              gap: 16,
              fontSize: 29,
              lineHeight: 1.58,
              color: palette.text,
            }}
          >
            <div>1. 先判断你现在卡在哪一类问题。</div>
            <div>2. 再选对应路线，而不是盲猜命令。</div>
            <div>3. 让 AI 跑 workflow，而不是只给建议。</div>
            <div>4. 最后根据产物和证据判断是否成功。</div>
          </div>
          <div style={{ marginTop: 24 }}>
            <PromptBox>
              这套系统最值钱的地方不是“命令多”，而是：
              <br />
              <span style={{ color: palette.accent }}>
                它能逼 AI 先思考、再执行、再验证、再留下交接物。
              </span>
            </PromptBox>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={2} label="what-is-gstack" />
  </div>
);

const Scope: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>03 · 这次讲解覆盖范围</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={78}>
        这不是一页功能图，而是一份按真实仓库范围整理的交接手册。
      </SectionTitle>
      <div
        style={{ marginTop: 34, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}
      >
        <MetricCard
          title="核心 Skill"
          value="52"
          body="仓库根目录当前存在 52 个对外 skill 入口。"
        />
        <MetricCard
          title="功能大类"
          value="4"
          body="规划设计、质量发布、浏览器协作、iOS 与系统增强。"
        />
        <MetricCard
          title="系统能力"
          value="5+"
          body="还包含 CLI、真机桥接、浏览器接管、注入防护、连续快照等机制。"
        />
      </div>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={318}>
          <CardTitle>这份 deck 会回答</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>每类功能是做什么的。</Bullet>
            <Bullet>这一类里每个 Skill 的介绍。</Bullet>
            <Bullet>每个 Skill 具体能帮你做什么。</Bullet>
            <Bullet>底层逻辑怎样帮助用户把问题解决掉。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={318} background={palette.soft}>
          <CardTitle>不会做的事</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet tone={palette.warn}>不会把源码实现细节逐行展开成工程文档。</Bullet>
            <Bullet tone={palette.warn}>不会把命令表当成答案，忽略用户场景。</Bullet>
            <Bullet tone={palette.warn}>不会把推测包装成仓库事实。</Bullet>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={3} label="scope" />
  </div>
);

const Workflow: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>04 · 它为什么不是普通聊天机器人</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={76}>
        gstack 的核心价值是把一整条交付流程编排出来，而不是只回答一个问题。
      </SectionTitle>
      <div
        style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
      >
        <MetricCard
          title="Think"
          value="/office-hours"
          body="先搞清楚问题是什么，不让 AI 急着动手。"
        />
        <MetricCard
          title="Plan"
          value="/autoplan"
          body="多角色评审先走一轮，避免错误方向越做越深。"
        />
        <MetricCard title="Build" value="/design-html" body="把方案和设计真正落成前端产物。" />
        <MetricCard
          title="Review"
          value="/review"
          body="先看结构性风险，而不是只看表面是否能跑。"
        />
        <MetricCard title="Test" value="/qa" body="真实浏览器验证，修完还要再测。" />
        <MetricCard title="Ship" value="/ship" body="准备 PR、版本和发布流程，再看上线是否健康。" />
      </div>
      <div style={{ marginTop: 24 }}>
        <PromptBox>
          你可以把它理解成：
          <br />
          <span style={{ color: palette.accent }}>一个 AI 版的“迷你产品团队操作系统”。</span>
        </PromptBox>
      </div>
    </div>
    <Footer index={4} label="workflow" />
  </div>
);

const Install: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>05 · 安装与启用</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={76}>
        对非开发者最实用的方式，是让工程同学先装好，然后你负责调度这些能力。
      </SectionTitle>
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={456}>
          <CardTitle>个人安装最短路径</CardTitle>
          <div style={{ marginTop: 16 }}>
            <PromptBox>{`git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup`}</PromptBox>
          </div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>支持 Claude Code，也支持 Codex、Cursor、OpenCode、OpenClaw 等。</Bullet>
            <Bullet>如果是团队使用，可以再把 routing 规则写进项目文档里。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={456} background={palette.soft}>
          <CardTitle>怎么判断装好了</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>`/office-hours` 能触发追问和设计文档，而不是直接闲聊。</Bullet>
            <Bullet>`/qa` 会真的开浏览器测页面，而不是只口头说应该怎么测。</Bullet>
            <Bullet>`/ship` 会给出 PR、版本或失败原因，而不是只说“可以发布”。</Bullet>
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <Pill>Claude Code</Pill>
            <Pill tone={palette.gold} background={palette.goldSoft}>
              Codex
            </Pill>
            <Pill>Cursor</Pill>
            <Pill>OpenCode</Pill>
            <Pill>OpenClaw</Pill>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={5} label="install" />
  </div>
);

const Prompting: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>06 · 你真正需要学会的事</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={76}>不是先背命令，而是把需求说成 AI 能正确路由的句子。</SectionTitle>
      <div
        style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24 }}
      >
        <Panel minHeight={476}>
          <CardTitle>最稳的提需求结构</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>我遇到的问题是什么：新想法、设计探索、QA、发版、文档、真机测试。</Bullet>
            <Bullet>我手里有什么材料：页面链接、文档、Figma、口播稿、报错、截图。</Bullet>
            <Bullet>我想要什么结果：方案、页面、bug 报告、PR、PDF、对比图。</Bullet>
            <Bullet>我如何判断成功：要有截图、文件、出处、链接、时间数据或上线状态。</Bullet>
          </div>
        </Panel>
        <div style={{ display: 'grid', gap: 18 }}>
          <Panel>
            <CardTitle>产品规划型需求</CardTitle>
            <div style={{ marginTop: 12 }}>
              <PromptBox>
                我是 UX 设计师，不会写代码。请先判断该走哪条 gstack
                路线，先帮我把这个想法讲清楚，再告诉我下一步要不要进入评审。
              </PromptBox>
            </div>
          </Panel>
          <Panel>
            <CardTitle>页面与体验型需求</CardTitle>
            <div style={{ marginTop: 12 }}>
              <PromptBox>
                这是一个现有页面，请先按 gstack 里的设计相关 skill
                选择合适路线，帮我找出视觉和体验问题，并告诉我如何验证改好了。
              </PromptBox>
            </div>
          </Panel>
          <Panel>
            <CardTitle>验收型需求</CardTitle>
            <div style={{ marginTop: 12 }}>
              <PromptBox>
                这是 staging 链接。请先判断是用 /qa 还是 /qa-only，给我截图、问题清单和成功验证标准。
              </PromptBox>
            </div>
          </Panel>
        </div>
      </div>
    </div>
    <Footer index={6} label="prompting" />
  </div>
);

const Routes: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>07 · 给 UX 设计师的三条常用路线</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={74}>如果你不记命令，只记路线，至少记住下面三条。</SectionTitle>
      <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        <Panel minHeight={470}>
          <CardTitle>路线 A · 新想法</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>/office-hours</Bullet>
            <Bullet>/plan-ceo-review</Bullet>
            <Bullet>/plan-eng-review</Bullet>
            <Bullet>/autoplan</Bullet>
          </div>
        </Panel>
        <Panel minHeight={470}>
          <CardTitle>路线 B · 设计与页面</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>/design-consultation</Bullet>
            <Bullet>/design-shotgun</Bullet>
            <Bullet>/design-html</Bullet>
            <Bullet>/design-review</Bullet>
          </div>
        </Panel>
        <Panel minHeight={470}>
          <CardTitle>路线 C · 验收与发布</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>/review</Bullet>
            <Bullet>/qa 或 /qa-only</Bullet>
            <Bullet>/ship</Bullet>
            <Bullet>/land-and-deploy + /canary</Bullet>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={7} label="routes" />
  </div>
);

const Verify: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={shell}>
      <Eyebrow>08 · 怎么判断这次不是“假成功”</Eyebrow>
      <div style={{ height: 22 }} />
      <SectionTitle size={76}>
        真正的成功不是“AI 说得很像懂了”，而是它留下了可核对的结果、证据和下一步。
      </SectionTitle>
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={474}>
          <CardTitle>通用成功信号</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>知道这次调用的是哪个 Skill，为什么是它。</Bullet>
            <Bullet>有具体产物：文档、页面、截图、PR、报告、PDF、知识库记录。</Bullet>
            <Bullet>有真实验证：浏览器证据、测试结果、版本状态、上线健康或失败原因。</Bullet>
            <Bullet>你知道下一步该继续哪个 Skill，而不是只能重新从头问一遍。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={474} background={palette.soft}>
          <CardTitle>常见假成功信号</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet tone={palette.warn}>只给观点，不给文件、截图、链接或保存路径。</Bullet>
            <Bullet tone={palette.warn}>
              该开浏览器时没开，该产出 PR 时没有 PR，该测试时没有测试。
            </Bullet>
            <Bullet tone={palette.warn}>用词很专业，但你无法复查它到底做了什么。</Bullet>
          </div>
          <div style={{ marginTop: 24 }}>
            <PromptBox>
              最短复盘问法：
              <br />
              <span style={{ color: palette.accent }}>
                “你这次用了哪个 Skill？产物在哪里？我现在怎么判断已经成功？”
              </span>
            </PromptBox>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={8} label="verify" />
  </div>
);

const staticPages: Page[] = [Cover, Naming, Scope, Workflow, Install, Prompting, Routes, Verify];

const generatedPages: Page[] = [];
let pageIndex = staticPages.length + 1;

for (const category of categories) {
  generatedPages.push(makeOverviewPage(category, pageIndex));
  pageIndex += 1;

  const groups = chunk(category.entries, 4);
  groups.forEach((features, chunkIndex) => {
    generatedPages.push(makeDetailPage(category, features, pageIndex, chunkIndex));
    pageIndex += 1;
  });
}

const Closing: Page = () => (
  <div style={page}>
    {gridBg}
    <div style={{ ...shell, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Eyebrow>最后收口</Eyebrow>
      <div style={{ height: 24 }} />
      <Title size={114}>
        你不需要先学会开发。
        <br />
        你需要先学会：
        <br />
        选路线、讲目标、验结果。
      </Title>
      <div style={{ marginTop: 34, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Panel minHeight={340}>
          <CardTitle>明天就能开始的最短动作</CardTitle>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bullet>有新想法：先试 /office-hours。</Bullet>
            <Bullet>要看页面问题：先试 /design-review 或 /plan-design-review。</Bullet>
            <Bullet>要测真实站点：先试 /qa-only。</Bullet>
            <Bullet>要做交接文档：先试 /document-generate 或 /make-pdf。</Bullet>
          </div>
        </Panel>
        <Panel minHeight={340} background={palette.soft}>
          <CardTitle>一条可直接复制的话术</CardTitle>
          <div style={{ marginTop: 14 }}>
            <PromptBox>
              我是 UX 设计师，不会写代码。
              <br />
              请你先判断这个任务该走哪条 gstack 路线，
              <br />
              再调用正确的 Skill 帮我完成，
              <br />
              最后告诉我怎么验证已经成功。
            </PromptBox>
          </div>
        </Panel>
      </div>
    </div>
    <Footer index={pageIndex} label="closing" />
  </div>
);

const pages: Page[] = [...staticPages, ...generatedPages, Closing];

TOTAL = pages.length;

export default pages;
