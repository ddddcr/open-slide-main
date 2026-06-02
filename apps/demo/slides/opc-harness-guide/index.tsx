import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#0f172a',
    text: '#f8fafc',
    accent: '#38bdf8',
  },
  fonts: {
    display: '"Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  typeScale: {
    hero: 200,
    body: 28,
  },
  radius: 14,
};

const palette = {
  bg: '#0f172a',
  surface: '#1e293b',
  surfaceLight: '#334155',
  text: '#f8fafc',
  muted: '#94a3b8',
  faint: '#64748b',
  accent: '#38bdf8',
  accentSoft: 'rgba(56, 189, 248, 0.12)',
  accentGlow: 'rgba(56, 189, 248, 0.25)',
  success: '#4ade80',
  warning: '#fbbf24',
  danger: '#f87171',
  line: '#334155',
  rule: '#475569',
};

const fonts = {
  sans: '"Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, monospace',
};

const PAD_X = 120;
const PAD_Y = 100;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--osd-font-body)',
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: fonts.sans,
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: palette.accent,
    }}
  >
    {children}
  </div>
);

const Footer = ({ section }: { section: string }) => (
  <div
    style={{
      position: 'absolute',
      left: PAD_X,
      right: PAD_X,
      bottom: 60,
      display: 'flex',
      alignItems: 'baseline',
      fontFamily: fonts.sans,
      fontSize: 16,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: palette.faint,
      borderTop: `1px solid ${palette.line}`,
      paddingTop: 16,
    }}
  >
    <span>OPC Harness · {section}</span>
    <span style={{ marginLeft: 'auto' }}>一人公司总控</span>
  </div>
);

const Mono = ({ children, accent: a = false }: { children: React.ReactNode; accent?: boolean }) => (
  <span
    style={{
      fontFamily: fonts.mono,
      fontSize: '0.85em',
      color: a ? palette.accent : 'var(--osd-text)',
      background: a ? palette.accentSoft : 'transparent',
      padding: a ? '2px 10px' : 0,
      borderRadius: a ? 4 : 0,
      letterSpacing: '-0.01em',
    }}
  >
    {children}
  </span>
);

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      background: palette.surface,
      border: `1px solid ${palette.line}`,
      borderRadius: 'var(--osd-radius)',
      padding: '32px 36px',
      ...style,
    }}
  >
    {children}
  </div>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -200,
        right: -200,
        width: 800,
        height: 800,
        background: `radial-gradient(circle, ${palette.accentGlow} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>Operation Guide · 2026</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          margin: '40px 0 0',
          color: 'var(--osd-text)',
        }}
      >
        OPC
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>Harness.</span>
      </h1>
      <div
        style={{
          height: 2,
          width: 480,
          background: `linear-gradient(90deg, ${palette.accent}, transparent)`,
          margin: '56px 0 36px',
        }}
      />
      <p
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 40,
          lineHeight: 1.4,
          color: palette.muted,
          maxWidth: 1200,
          margin: 0,
          fontWeight: 400,
        }}
      >
        一人公司总控 Skill 包 —— 把模糊需求路由成可执行的产品、研发、评审、上线或复盘链路。
      </p>
      <div
        style={{
          marginTop: 56,
          fontFamily: fonts.mono,
          fontSize: 24,
          color: palette.faint,
          letterSpacing: '-0.01em',
        }}
      >
        /opc
      </div>
    </div>
    <Footer section="No. 01 · Cover" />
  </div>
);

const WhatIsOPC: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1500 }}>
      <Eyebrow>What it is</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 96,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          margin: '36px 0 48px',
        }}
      >
        不是单个 Skill。
        <br />是<span style={{ color: 'var(--osd-accent)' }}>总控协议</span>。
      </h2>
      <div
        style={{
          height: 2,
          width: 320,
          background: `linear-gradient(90deg, ${palette.accent}, transparent)`,
          margin: '0 0 48px',
        }}
      />
      <p
        style={{
          fontSize: 34,
          lineHeight: 1.55,
          color: 'var(--osd-text)',
          maxWidth: 1300,
          fontWeight: 400,
          margin: 0,
        }}
      >
        OPC 负责意图识别、路由、状态同步、后置链路和降级说明，不直接替代子 Skill 执行专业工作。
      </p>
      <div style={{ marginTop: 48, display: 'flex', gap: 48 }}>
        {[
          {
            label: '路由',
            body: '将模糊请求稳定映射到 opc-* 子 Skill 链路',
          },
          {
            label: '状态',
            body: '维护 per-run 状态，支持中断恢复和上下文传递',
          },
          {
            label: '降级',
            body: '依赖缺失时安全降级，不伪造外部结果',
          },
        ].map((item) => (
          <div key={item.label} style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 32,
                fontWeight: 600,
                color: 'var(--osd-accent)',
                marginBottom: 12,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.5,
                color: palette.muted,
              }}
            >
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="No. 02 · Definition" />
  </div>
);

const CoreConcept: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1500 }}>
      <Eyebrow>Core Concept</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '36px 0 40px',
        }}
      >
        一人公司的核心难题
      </h2>
      <p
        style={{
          fontSize: 32,
          lineHeight: 1.55,
          color: palette.muted,
          maxWidth: 1300,
          fontWeight: 400,
          margin: '0 0 48px',
        }}
      >
        独立开发者或小型团队没有产品经理、技术负责人、运维工程师的角色分工，但必须完成从需求到上线的完整链路。
      </p>
      <div style={{ display: 'flex', gap: 32 }}>
        {[
          {
            title: '需求模糊',
            body: '"做一个搜索页" vs "为搜索页新增 AI 摘要能力，支持多轮追问，返回结构化结果"',
            solve: 'opc-context-intake 把模糊语言转化为可验收的需求文档',
          },
          {
            title: '链路断裂',
            body: 'PRD 写完后没人跟进研发，代码写完后没人做上线检查',
            solve: 'opc-router 确保每个阶段有明确的后续动作和验收标准',
          },
          {
            title: '质量失控',
            body: '没有代码评审、没有需求评审、没有上线后的复盘',
            solve: 'opc-reviewer + opc-pm-review 在每个关键节点插入质量门',
          },
          {
            title: '状态丢失',
            body: '多轮对话后上下文混乱，之前的决策被遗忘',
            solve: 'opc-state 持久化 per-run 状态，支持中断恢复',
          },
        ].map((item) => (
          <Card
            key={item.title}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 28,
                fontWeight: 600,
                color: palette.danger,
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.55, color: palette.muted, flex: 1 }}>
              {item.body}
            </div>
            <div style={{ height: 1, background: palette.line }} />
            <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.success }}>
              <span style={{ fontWeight: 600 }}>解决: </span>
              {item.solve}
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 03 · Concept" />
  </div>
);

const SkillOverview: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Architecture</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 40px',
        }}
      >
        四大能力域
      </h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {[
          {
            label: 'Context & Planning',
            color: palette.accent,
            desc: '上下文采集、需求澄清、任务拆解、意图路由',
            skills: [
              'opc-context-intake',
              'opc-planner',
              'opc-router',
              'opc-state',
              'opc-persona',
              'opc-design-context',
            ],
          },
          {
            label: 'Build & Implement',
            color: palette.success,
            desc: '研发实施、接口协同、变更提案',
            skills: ['opc-builder', 'opc-yapi', 'opc-openspec-change', 'opc-prd', 'opc-research'],
          },
          {
            label: 'Review & Quality',
            color: palette.warning,
            desc: '风险评审、PM 质量门、自驱迭代',
            skills: ['opc-reviewer', 'opc-pm-review', 'opc-iteration-gate'],
          },
          {
            label: 'Deliver & Report',
            color: '#c084fc',
            desc: '结构化汇报、上线推进、公司交付',
            skills: [
              'opc-reporter',
              'opc-ceo',
              'opc-tool-discovery',
              'opc-branch-management',
              'opc-gitlab-mr',
              'opc-pipeline-run',
            ],
          },
        ].map((domain) => (
          <Card key={domain.label} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{ width: 12, height: 12, borderRadius: '50%', background: domain.color }}
              />
              <div
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 32,
                  fontWeight: 600,
                  color: domain.color,
                }}
              >
                {domain.label}
              </div>
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.5, color: palette.muted }}>{domain.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
              {domain.skills.map((s) => (
                <Mono key={s} accent>
                  {s}
                </Mono>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 04 · Architecture" />
  </div>
);

const ContextPlanning: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Context & Planning</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        上下文与规划类 Skill
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"需求不清楚就动手"的问题。先采集背景、拆解任务、明确路由，再进入执行阶段。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          {
            skill: 'opc-context-intake',
            title: '背景信息采集与澄清',
            what: '在用户说"帮我做一个功能"时，识别出 missing context：目标用户、时间约束、代码状态、设计输入',
            how: '按 clarification-gate.md 规则，把问题分为 blocking（必须回答）、assumed（安全默认）、deferred（延后处理）。一次只问一个问题，优先给 2-4 个可选项',
            value: '避免 AI 在信息不足时盲目猜测，减少返工和方向偏离',
          },
          {
            skill: 'opc-planner',
            title: '任务拆解与里程碑',
            what: '将需求转化为可执行的任务图，包含阶段、依赖、验收标准',
            how: '输出 task graph：每个节点有 phase / deliverable / ready condition。支持多阶段请求时保留未执行任务，不一次性假装全部完成',
            value: '把"一个大需求"拆成"今天做什么、明天做什么"，降低认知负荷',
          },
          {
            skill: 'opc-router',
            title: '请求路由与阶段切换',
            what: '根据用户意图选择主 Skill 和后置链路',
            how: '按 trigger-priority.md 优先级匹配：事故 > 定时任务 > PRD 评审 > 构建 > 调研。产出 route contract，包含 degrade_path',
            value: '确保模糊请求被正确分类，不会把"上线失败复盘"当成"写代码"来处理',
          },
          {
            skill: 'opc-state',
            title: '状态读写与恢复',
            what: '维护 per-run 状态文件，支持中断后恢复',
            how: '在 skills/opc/state/runs/ 下管理 run-state.json、route-contract.json、artifacts.json。兼容全局 state.json',
            value: '多轮对话不丢失上下文，用户可以随时中断、改需求、继续执行',
          },
        ].map((item) => (
          <div
            key={item.skill}
            style={{
              display: 'flex',
              gap: 32,
              padding: '24px 32px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 12,
              borderLeft: `3px solid ${palette.accent}`,
            }}
          >
            <div style={{ width: 280, flexShrink: 0 }}>
              <Mono accent>{item.skill}</Mono>
              <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
                <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
                {item.what}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
                <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
                {item.how}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint }}>
                <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="No. 05 · Context & Planning" />
  </div>
);

const BuildImplement: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Build & Implement</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        研发实施类 Skill
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"代码写完了但接口对不上""需求文档研发看不懂"的问题。在编码前先做接口探测和文档对齐。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          {
            skill: 'opc-builder',
            title: '研发实施与代码落地',
            what: '按已有计划执行代码编写、文件修改、命令运行',
            how: '在 opc-planner 产出的任务图基础上，按步骤执行 Edit / Bash / Read 等工具调用。每步完成后检查状态，失败时停止或重试',
            value: '把计划转化为实际代码变更，避免"有计划没执行"的空转',
          },
          {
            skill: 'opc-yapi',
            title: 'YAPI 接口证据探测',
            what: '在 build-stage 不确定接口字段名、数据来源或 type 命名时，先做接口链路探测',
            how: '定位已有接口、API 函数、请求路径、Controller 或关键词。把字段名和数据来源从"默认假设"升级为"接口证据"',
            value: '避免写完前端代码后才发现后端字段名变了，减少联调返工',
          },
          {
            skill: 'opc-openspec-change',
            title: 'OpenSpec 变更提案',
            what: '将需求转化为结构化的 OpenSpec change bundle，包含 proposal、tasks、spec delta',
            how: '分析需求变更范围，生成包含接口变更、字段新增、类型调整的完整提案文档',
            value: '让前后端在编码前就对接口变更达成共识',
          },
          {
            skill: 'opc-prd',
            title: '混合型 PRD 起草',
            what: '将模糊需求转化为研发可执行的 PRD 文档',
            how: '按 opc-context-intake 采集的信息，生成包含用户故事、验收标准、技术方案、风险点的 PRD',
            value: '把"我要做一个功能"变成"开发、测试、产品都能理解的文档"',
          },
        ].map((item) => (
          <div
            key={item.skill}
            style={{
              display: 'flex',
              gap: 32,
              padding: '24px 32px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 12,
              borderLeft: `3px solid ${palette.success}`,
            }}
          >
            <div style={{ width: 280, flexShrink: 0 }}>
              <Mono accent style={{ color: palette.success, background: `${palette.success}20` }}>
                {item.skill}
              </Mono>
              <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
                <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
                {item.what}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
                <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
                {item.how}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint }}>
                <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="No. 06 · Build & Implement" />
  </div>
);

const ReviewQuality: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Review & Quality</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        评审与质量类 Skill
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"写完了直接上线，没发现漏了边界情况"的问题。在关键节点插入质量门，拦截风险。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          {
            skill: 'opc-reviewer',
            title: '风险评审与回归检查',
            what: '检查代码变更的正确性、风险、回归',
            how: '分析 diff，识别 SQL 安全、LLM 信任边界违规、条件副作用、结构性问题。按严重程度排序',
            value: '充当技术负责人的角色，在合并前发现潜在 bug 和安全风险',
          },
          {
            skill: 'opc-pm-review',
            title: 'PM 质量门与需求查缺补漏',
            what: '评审 PRD 或需求文档的完整性',
            how: '检查 scope 清晰度、acceptance quality、engineering handoff 完整度。识别模糊点',
            value: '确保研发拿到手的文档是"可执行"的，而不是"大概意思"',
          },
          {
            skill: 'opc-iteration-gate',
            title: '自驱迭代质量门与停止决策',
            what: '在 bounded iteration 模式下，判断是否需要继续迭代',
            how: '评分 artifact quality，决定 continue / stop / blocked。达到上限不等于质量达标。记录 iteration_history',
            value: '防止"看起来还行就停了"，也防止"无限循环修修补补"',
          },
        ].map((item) => (
          <Card
            key={item.skill}
            style={{ display: 'flex', gap: 32, borderLeft: `3px solid ${palette.warning}` }}
          >
            <div style={{ width: 280, flexShrink: 0 }}>
              <Mono accent style={{ color: palette.warning, background: `${palette.warning}20` }}>
                {item.skill}
              </Mono>
              <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
                <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
                {item.what}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
                <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
                {item.how}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint }}>
                <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
                {item.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 07 · Review & Quality" />
  </div>
);

const DeliverReport: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Deliver & Report</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        汇报与交付类 Skill
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"做完了但说不清楚做了什么""上线风险没评估"的问题。用结构化报告替代自由文本。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          {
            skill: 'opc-reporter',
            title: '结构化汇报',
            what: '把执行结果转化为标准化的 human-readable report contract',
            how: '输出必须包含：路由与范围、执行链路、设计上下文、实现摘要、评审结论、验证状态、阻塞项。禁止用普通代码交付摘要替代',
            value: '让任何人（包括你自己一周后）都能快速理解这个需求的完整处理过程',
          },
          {
            skill: 'opc-ceo',
            title: '目标优先级与上线取舍',
            what: '在多个需求 competing for resource 时，帮助做优先级判断',
            how: '评估 mission alignment、success metrics、priority trade-offs。在上线前确认取舍',
            value: '避免"所有功能都要做"导致的进度爆炸，聚焦最高价值交付',
          },
          {
            skill: 'opc-tool-discovery',
            title: '工具与依赖选择',
            what: '在需要引入新技术、库或工具时，做选型分析',
            how: '评估 local 和 external 工具的可用性、兼容性、维护成本。给出推荐和降级方案',
            value: '防止"随便选一个"导致的技术债务，确保选型有据可依',
          },
        ].map((item) => (
          <Card
            key={item.skill}
            style={{ display: 'flex', gap: 32, borderLeft: '3px solid #c084fc' }}
          >
            <div style={{ width: 280, flexShrink: 0 }}>
              <Mono accent style={{ color: '#c084fc', background: 'rgba(192,132,252,0.15)' }}>
                {item.skill}
              </Mono>
              <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
                <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
                {item.what}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
                <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
                {item.how}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint }}>
                <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
                {item.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 08 · Deliver & Report" />
  </div>
);

const CompanyDelivery: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Company Delivery</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        公司交付技能
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"代码写完了不知道怎么发测试""MR 不知道怎么创建"的问题。打通本地开发到公司基础设施。
      </p>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          {
            skill: 'opc-branch-management',
            title: 'GitLab 远程分支操作',
            what: '创建 feature / work / fix 分支，按任务号命名',
            how: '通过 code-manager MCP 或 HTTP fallback 执行远程分支操作。本地 work 分支 vs 远程 feature 分支语义区分',
            value: '避免手动创建分支时的命名混乱和权限问题',
          },
          {
            skill: 'opc-git-commit-message',
            title: '规范 Commit Message',
            what: '生成符合公司规范的三段式提交信息',
            how: '格式: &lt;Jira ticket&gt; &lt;type&gt; &lt;subject&gt;。只生成 message，不直接 commit，除非用户明确要求',
            value: '保持提交历史清晰，便于后续追溯和生成 CHANGELOG',
          },
          {
            skill: 'opc-gitlab-mr',
            title: 'GitLab MR 操作',
            what: '查看、创建、评论、审批、合并 MR',
            how: '通过 GitLab REST API 查询 MR 状态、未解决评论、修改建议。缺少 GITLAB_TOKEN 时停止并说明',
            value: '把 MR 评审流程自动化，减少来回切换的成本',
          },
          {
            skill: 'opc-pipeline-run',
            title: 'CICD 流水线触发',
            what: '按分支构建、按版本发布、查询运行状态',
            how: '触发测试流水线，app_id + 分支 + 程序名。正式、灰度、prod 相关触发必须显式确认',
            value: '一键触发测试构建，不用手动登录 Jenkins/GitLab CI',
          },
        ].map((item) => (
          <Card
            key={item.skill}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              borderLeft: '3px solid #60a5fa',
            }}
          >
            <div>
              <Mono accent style={{ color: '#60a5fa', background: 'rgba(96,165,250,0.15)' }}>
                {item.skill}
              </Mono>
              <div style={{ fontSize: 24, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
              <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
              {item.what}
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
              <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
              {item.how}
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint, marginTop: 'auto' }}>
              <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
              {item.value}
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 09 · Company Delivery" />
  </div>
);

const OpsMaintenance: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Ops & Maintenance</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        定时与运维类 Skill
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        解决"上线了但没人盯日志""出了问题不知道根因""经验没法沉淀"的问题。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          {
            skill: 'opc-scheduler',
            title: '定时任务规划与 Runtime Handoff',
            what: '处理定时任务、周期性观察、提醒、监控类请求',
            how: '生成 scheduled task proposal，包含 task_type / schedule / risk_level / runtime_adapter。OPC 只规划，不伪造任务已创建',
            value: '把"帮我每天看看日志"变成可执行的计划，明确风险和确认门',
          },
          {
            skill: 'opc-rca',
            title: '根因分析',
            what: '对事故、失败、异常进行系统性根因分析',
            how: '按 RCA 模板整理：现象、影响范围、根因、contributing factors、preventive actions。接入 opc-memory 沉淀',
            value: '避免"修了就完了"，确保同类问题不再发生',
          },
          {
            skill: 'opc-memory',
            title: '经验沉淀',
            what: '把本次执行的决策、教训、模式保存为可复用记忆',
            how: '写入 memory.json，包含 context、decisions、lessons learned。后续同类请求优先读取',
            value: '越用越聪明，避免每次从零开始',
          },
        ].map((item) => (
          <Card
            key={item.skill}
            style={{ display: 'flex', gap: 32, borderLeft: '3px solid #f472b6' }}
          >
            <div style={{ width: 280, flexShrink: 0 }}>
              <Mono accent style={{ color: '#f472b6', background: 'rgba(244,114,182,0.15)' }}>
                {item.skill}
              </Mono>
              <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, marginTop: 8 }}>
                {item.title}
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.text }}>
                <span style={{ color: palette.accent, fontWeight: 600 }}>做什么: </span>
                {item.what}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>
                <span style={{ color: palette.success, fontWeight: 600 }}>如何工作: </span>
                {item.how}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.faint }}>
                <span style={{ color: palette.warning, fontWeight: 600 }}>价值: </span>
                {item.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 10 · Ops & Maintenance" />
  </div>
);

const ExecutionContract: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Execution Contract</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 40px',
        }}
      >
        标准执行循环
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        OPC 不是"收到请求就直接动手"，而是按 26 步执行合同，确保每个阶段都有验收和兜底。
      </p>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px' }}>
        {[
          {
            n: '01',
            title: 'Clarification Gate',
            body: '识别 blocking questions、default assumptions、deferred questions',
          },
          {
            n: '02',
            title: 'Interface Evidence Probe',
            body: 'build-stage 有接口不确定性时，先做接口证据探测',
          },
          {
            n: '03',
            title: 'Trigger Priority',
            body: '按优先级匹配主意图：事故 > 定时任务 > PRD > 构建 > 调研',
          },
          { n: '04', title: 'Playbook Extension', body: '检查是否命中已注册的 playbook 插件' },
          {
            n: '05',
            title: 'Route Contract',
            body: '产出 normalized route，包含 intent / phase / skill chain / degrade path',
          },
          {
            n: '06',
            title: 'Runtime Preflight',
            body: '校验 route contract 完整性，阻塞错误必须先修正',
          },
        ].map((s) => (
          <div
            key={s.n}
            style={{
              display: 'flex',
              gap: 24,
              alignItems: 'flex-start',
              padding: '24px 28px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 600,
                color: palette.accent,
                background: palette.accentSoft,
                padding: '6px 14px',
                borderRadius: 8,
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {s.n}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 28,
                  fontWeight: 600,
                  color: palette.text,
                  marginBottom: 8,
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 32,
          padding: '20px 28px',
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          borderRadius: 12,
          fontSize: 20,
          color: palette.muted,
          lineHeight: 1.5,
        }}
      >
        <span style={{ color: palette.accent, fontWeight: 600 }}>后续: </span>
        状态初始化 → 执行主 Skill → Artifact Handoff → 后置链路（reviewer / iteration-gate /
        reporter）→ Runtime Exit Validation → 最终答复
      </div>
    </div>
    <Footer section="No. 11 · Execution" />
  </div>
);

const RoutingTable: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Routing</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 40px',
        }}
      >
        意图与 Skill 映射
      </h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          {
            trigger: '事故 / 失败 / 根因 / 复盘',
            skill: 'opc-rca',
            desc: '根因分析',
            color: palette.danger,
          },
          {
            trigger: '定时任务 / 监控 / 提醒 / 持续查看',
            skill: 'opc-scheduler',
            desc: '定时任务规划',
            color: '#f472b6',
          },
          {
            trigger: 'PRD 评审 / 需求文档评审',
            skill: 'opc-pm-review',
            desc: 'PM 质量门',
            color: palette.warning,
          },
          {
            trigger: 'PRD / 需求文档 / 梳理需求',
            skill: 'opc-context-intake + opc-prd',
            desc: 'PRD 起草',
            color: palette.accent,
          },
          {
            trigger: '提案 / 方案 / brief / 能力新增',
            skill: 'opc-context-intake + opc-planner',
            desc: '任务拆解',
            color: palette.accent,
          },
          {
            trigger: '评审 / 审查 / 回归 / 审计',
            skill: 'opc-reviewer',
            desc: '风险评审',
            color: palette.warning,
          },
          {
            trigger: '开发 / 实现 / 落地',
            skill: 'opc-builder',
            desc: '研发实施',
            color: palette.success,
          },
          {
            trigger: '上线 / 发布 / rollout',
            skill: 'opc-ceo + opc-tool-discovery',
            desc: '上线推进',
            color: '#c084fc',
          },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '18px 28px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 12,
              borderLeft: `3px solid ${row.color}`,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                color: palette.accent,
                width: 36,
                flexShrink: 0,
                fontWeight: 600,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{ fontSize: 22, color: palette.muted, width: 460, flexShrink: 0 }}>
              {row.trigger}
            </div>
            <div style={{ width: 1, height: 28, background: palette.line }} />
            <Mono accent style={{ color: row.color, background: `${row.color}20` }}>
              {row.skill}
            </Mono>
            <div style={{ marginLeft: 'auto', fontSize: 20, color: palette.faint }}>{row.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="No. 12 · Routing" />
  </div>
);

const PostChain: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Post-Chain</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 40px',
        }}
      >
        后置链路规则
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        主 Skill 执行完成后，必须按规则接入后置链路，确保交付质量和可观测性。
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { flow: 'OpenSpec 变更 / 规划 / 提案 / 调研', chain: '→ opc-reporter' },
          { flow: 'PRD 类流程', chain: '→ opc-pm-review → opc-reporter' },
          { flow: '构建类流程', chain: '→ opc-reviewer → opc-reporter' },
          { flow: 'RCA 类流程', chain: '→ opc-reporter' },
          { flow: '自驱迭代 enabled', chain: '→ reviewer → opc-iteration-gate → opc-reporter' },
          { flow: '定时任务', chain: '→ opc-scheduler → opc-reporter' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '22px 32px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 12,
            }}
          >
            <div style={{ fontSize: 22, color: palette.text, fontWeight: 500, flex: 1 }}>
              {item.flow}
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                color: palette.accent,
                fontWeight: 500,
              }}
            >
              {item.chain}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer section="No. 13 · Post-Chain" />
  </div>
);

const DegradeRules: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Degrade</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 40px',
        }}
      >
        降级策略
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        当依赖缺失、上下文不足或状态损坏时，OPC 按既定规则降级，不伪造结果。
      </p>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          {
            title: '子 Skill 缺失',
            body: '说明缺失项，给出仓库地址，退化为模板驱动输出',
            color: palette.danger,
          },
          {
            title: 'Route Contract 不完整',
            body: '回退到 opc-context-intake，在 recovery_note 说明缺失字段',
            color: palette.warning,
          },
          {
            title: '信息不足',
            body: '退回 opc-context-intake，一次只问一个 blocking question',
            color: palette.accent,
          },
          {
            title: '状态文件缺失或损坏',
            body: '按状态机恢复，把恢复信息写入 recovery_note',
            color: '#c084fc',
          },
          {
            title: '外部依赖不可用',
            body: '继续本地优先流程，不伪造外部结果',
            color: palette.success,
          },
          {
            title: 'Playbook 插件异常',
            body: '校验失败时拒绝注册，按 degrade_path 降级',
            color: '#f472b6',
          },
        ].map((rule) => (
          <Card
            key={rule.title}
            style={{
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
              borderLeft: `3px solid ${rule.color}`,
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 26,
                  fontWeight: 600,
                  color: rule.color,
                  marginBottom: 10,
                }}
              >
                {rule.title}
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: palette.muted }}>{rule.body}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 14 · Degrade" />
  </div>
);

const Playbooks: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Playbooks</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        场景链路映射
      </h2>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: palette.muted,
          maxWidth: 1400,
          margin: '0 0 36px',
        }}
      >
        Playbook 定义场景链路，协议定义执行规则。优先将请求映射到现成 Playbook。
      </p>
      <div style={{ flex: 1, display: 'flex', gap: 32 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 28,
              fontWeight: 600,
              color: palette.accent,
              marginBottom: 8,
            }}
          >
            内置 Playbook
          </div>
          {[
            { name: 'write-proposal', desc: '提案写作' },
            { name: 'draft-openspec-change', desc: 'OpenSpec 变更' },
            { name: 'draft-mixed-prd', desc: 'PRD 起草' },
            { name: 'build-product', desc: '构建落地' },
            { name: 'launch-project', desc: '上线推进' },
            { name: 'company-delivery', desc: '公司交付' },
          ].map((pb) => (
            <div
              key={pb.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '18px 24px',
                background: palette.surface,
                border: `1px solid ${palette.line}`,
                borderRadius: 12,
              }}
            >
              <Mono accent>{pb.name}</Mono>
              <div style={{ width: 1, height: 24, background: palette.line }} />
              <div style={{ fontSize: 20, color: palette.muted }}>{pb.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ width: 1, background: palette.line }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 28,
              fontWeight: 600,
              color: palette.accent,
              marginBottom: 8,
            }}
          >
            插件 Playbook
          </div>
          <Card style={{ flex: 1 }}>
            <div style={{ fontSize: 20, lineHeight: 1.6, color: palette.muted }}>
              <p style={{ margin: '0 0 16px', color: palette.text }}>
                插件命名为 <Mono accent>opc-pb-{'<id>'}</Mono>，OPC 只消费已注册插件：
              </p>
              <ul style={{ margin: 0, paddingLeft: 24, lineHeight: 1.8 }}>
                <li>
                  注册表: <Mono>playbooks/registry.json</Mono>
                </li>
                <li>
                  会话草稿: <Mono>$PWD/skills/opc-pb-*/</Mono>
                </li>
                <li>
                  注册入口: <Mono>playbooks/plugins/opc-pb-*/</Mono>（软链接）
                </li>
              </ul>
              <p style={{ margin: '16px 0 0' }}>
                创建 → 校验 → 注册 → 使用。插件只能补充路由，不得绕过 OPC 总控协议。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <Footer section="No. 15 · Playbooks" />
  </div>
);

const CommonPrompts: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Usage</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        常见 Prompt 与预期链路
      </h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          {
            label: 'OpenSpec 变更',
            prompt: '/opc 帮我为搜索页新增 AI 摘要能力起一个 OpenSpec change',
            chain: 'opc-context-intake → opc-openspec-change → opc-reporter',
          },
          {
            label: 'PRD 草稿',
            prompt: '/opc 把"资讯详情页增加交易想法摘要"整理成一份研发可执行 PRD',
            chain: 'opc-context-intake → opc-persona(pm) → opc-prd → opc-pm-review → opc-reporter',
          },
          {
            label: '研发实现',
            prompt: '/opc 按当前计划实现资讯详情页 Summary / Trade Ideas tab',
            chain: 'opc-router → opc-planner → opc-builder → opc-reviewer → opc-reporter',
          },
          {
            label: '复盘 / RCA',
            prompt: '/opc 复盘这次上线失败，整理根因、影响和预防动作',
            chain: 'opc-rca → opc-memory → opc-reporter',
          },
        ].map((p) => (
          <Card key={p.label} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 26,
                fontWeight: 600,
                color: palette.accent,
              }}
            >
              {p.label}
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                lineHeight: 1.5,
                color: palette.text,
                background: palette.bg,
                padding: '14px 18px',
                borderRadius: 8,
                border: `1px solid ${palette.line}`,
              }}
            >
              {p.prompt}
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.5, color: palette.muted, marginTop: 'auto' }}>
              <span style={{ color: palette.faint }}>链路: </span>
              {p.chain}
            </div>
          </Card>
        ))}
      </div>
    </div>
    <Footer section="No. 16 · Usage" />
  </div>
);

const SkillRegistry: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <Eyebrow>Skill Registry</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '32px 0 32px',
        }}
      >
        完整 Skill 注册表
      </h2>
      <div
        style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px 16px' }}
      >
        {[
          { skill: 'opc-context-intake', role: '背景信息采集', type: 'core' },
          { skill: 'opc-planner', role: '任务拆解与计划', type: 'core' },
          { skill: 'opc-router', role: '请求路由与阶段切换', type: 'core' },
          { skill: 'opc-state', role: '状态读写与恢复', type: 'core' },
          { skill: 'opc-builder', role: '研发实施', type: 'core' },
          { skill: 'opc-reviewer', role: '风险评审与回归检查', type: 'core' },
          { skill: 'opc-reporter', role: '结构化汇报', type: 'core' },
          { skill: 'opc-prd', role: '混合型 PRD 起草', type: 'core' },
          { skill: 'opc-pm-review', role: 'PM 质量门', type: 'core' },
          { skill: 'opc-research', role: '资料调研与证据整理', type: 'core' },
          { skill: 'opc-rca', role: '根因分析', type: 'core' },
          { skill: 'opc-yapi', role: 'YAPI 接口协同', type: 'core' },
          { skill: 'opc-iteration-gate', role: '自驱迭代质量门', type: 'core' },
          { skill: 'opc-scheduler', role: '定时任务规划与 handoff', type: 'core' },
          { skill: 'opc-ceo', role: '目标优先级与上线取舍', type: 'core' },
          { skill: 'opc-tool-discovery', role: '工具与依赖选择', type: 'core' },
          { skill: 'opc-persona', role: '角色选择', type: 'core' },
          { skill: 'opc-design-context', role: '设计资产上下文准备', type: 'core' },
          { skill: 'opc-openspec-change', role: 'OpenSpec 变更提案', type: 'core' },
          { skill: 'opc-memory', role: '经验沉淀', type: 'core' },
          { skill: 'opc-branch-management', role: 'GitLab 远程分支操作', type: 'delivery' },
          { skill: 'opc-git-commit-message', role: '规范 commit message', type: 'delivery' },
          { skill: 'opc-gitlab-mr', role: 'GitLab MR 操作', type: 'delivery' },
          { skill: 'opc-pipeline-run', role: 'CICD 流水线触发', type: 'delivery' },
        ].map((s) => (
          <div
            key={s.skill}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '12px 16px',
              background: palette.surface,
              border: `1px solid ${palette.line}`,
              borderRadius: 8,
              borderLeft: `3px solid ${s.type === 'core' ? palette.accent : palette.success}`,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                color: palette.accent,
                fontWeight: 500,
              }}
            >
              {s.skill}
            </div>
            <div style={{ fontSize: 16, color: palette.muted, lineHeight: 1.4 }}>{s.role}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 32, fontSize: 16, color: palette.faint }}>
        <span>
          <span style={{ color: palette.accent }}>■</span> Core Skill
        </span>
        <span>
          <span style={{ color: palette.success }}>■</span> Company Delivery
        </span>
      </div>
    </div>
    <Footer section="No. 17 · Registry" />
  </div>
);

const GetStarted: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        position: 'absolute',
        bottom: -300,
        left: -300,
        width: 900,
        height: 900,
        background: `radial-gradient(circle, ${palette.accentGlow} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>Get Started</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 120,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          margin: '36px 0 0',
        }}
      >
        一句话启动。
      </h2>
      <div
        style={{
          height: 2,
          width: 480,
          background: `linear-gradient(90deg, ${palette.accent}, transparent)`,
          margin: '64px 0 48px',
        }}
      />
      <div
        style={{
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          borderRadius: 'var(--osd-radius)',
          padding: '40px 56px',
          fontFamily: fonts.mono,
          fontSize: 32,
          lineHeight: 1.6,
          maxWidth: 1400,
          letterSpacing: '-0.01em',
        }}
      >
        <div>
          <span style={{ color: palette.faint }}>$ </span>
          <span style={{ color: palette.text }}>/opc </span>
          <span style={{ color: palette.accent }}>帮我实现一个搜索页的 AI 摘要功能</span>
        </div>
      </div>
      <div
        style={{
          marginTop: 48,
          display: 'flex',
          gap: 48,
          alignItems: 'baseline',
          fontFamily: fonts.sans,
          fontSize: 22,
          color: palette.muted,
        }}
      >
        <span>
          触发: <Mono accent>/opc</Mono>
        </span>
        <span>·</span>
        <span>
          路由: <Mono accent>opc-router</Mono>
        </span>
        <span>·</span>
        <span>
          汇报: <Mono accent>opc-reporter</Mono>
        </span>
      </div>
      <div
        style={{
          marginTop: 80,
          fontFamily: 'var(--osd-font-display)',
          fontStyle: 'italic',
          fontSize: 32,
          color: palette.faint,
        }}
      >
        — 让一人公司真正运转起来。
      </div>
    </div>
    <Footer section="No. 18 · Start" />
  </div>
);

export const meta: SlideMeta = { title: 'OPC Harness · 操作指南' };
export default [
  Cover,
  WhatIsOPC,
  CoreConcept,
  SkillOverview,
  ContextPlanning,
  BuildImplement,
  ReviewQuality,
  DeliverReport,
  CompanyDelivery,
  OpsMaintenance,
  ExecutionContract,
  RoutingTable,
  PostChain,
  DegradeRules,
  Playbooks,
  CommonPrompts,
  SkillRegistry,
  GetStarted,
] satisfies Page[];
