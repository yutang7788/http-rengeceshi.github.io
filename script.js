const questions = [
  {
    text: "面对一个全新的机会，我通常会先想象它可能打开哪些空间。",
    traits: { openness: 1.4, vitality: 0.5 },
    elements: { wood: 1.3, fire: 0.3 }
  },
  {
    text: "当事情变得混乱时，我会自然地想把流程、边界和优先级整理清楚。",
    traits: { order: 1.5, introspection: 0.2 },
    elements: { metal: 1.3, earth: 0.3 }
  },
  {
    text: "如果团队气氛低落，我往往会主动点燃现场，让大家重新参与。",
    traits: { vitality: 1.4, empathy: 0.5 },
    elements: { fire: 1.4 }
  },
  {
    text: "我做决定时，会认真考虑它对身边人的感受和长期关系的影响。",
    traits: { empathy: 1.5, order: 0.2 },
    elements: { earth: 1.2, water: 0.2 }
  },
  {
    text: "我需要独处时间来消化经验，否则很难真正知道自己想要什么。",
    traits: { introspection: 1.5, openness: 0.2 },
    elements: { water: 1.4 }
  },
  {
    text: "我喜欢从书、电影、旅行或谈话里获得新的理解框架。",
    traits: { openness: 1.5 },
    elements: { wood: 1.1, water: 0.4 }
  },
  {
    text: "我对质量和标准比较敏感，不太愿意把明显粗糙的东西交出去。",
    traits: { order: 1.4, introspection: 0.3 },
    elements: { metal: 1.4 }
  },
  {
    text: "我在表达观点时有热度，也愿意让别人感受到我的态度。",
    traits: { vitality: 1.5 },
    elements: { fire: 1.3, metal: 0.2 }
  },
  {
    text: "我更相信稳定的陪伴和持续的行动，而不是一时强烈的承诺。",
    traits: { empathy: 0.8, order: 0.7 },
    elements: { earth: 1.5 }
  },
  {
    text: "遇到复杂问题时，我会先观察水流一样的变化，不急着下结论。",
    traits: { introspection: 1.3, openness: 0.4 },
    elements: { water: 1.4 }
  },
  {
    text: "我常常能看到一个人或项目尚未长成的潜力。",
    traits: { openness: 1.2, empathy: 0.4 },
    elements: { wood: 1.4 }
  },
  {
    text: "我喜欢明确的规则，因为清晰的规则能减少无谓消耗。",
    traits: { order: 1.5 },
    elements: { metal: 1.2, earth: 0.3 }
  },
  {
    text: "越是在关键时刻，我越容易进入行动状态，先把局面带起来。",
    traits: { vitality: 1.5, order: 0.2 },
    elements: { fire: 1.2, metal: 0.3 }
  },
  {
    text: "我能在别人没有开口时，察觉到对方其实需要被支持。",
    traits: { empathy: 1.5, introspection: 0.3 },
    elements: { earth: 1.1, water: 0.4 }
  },
  {
    text: "我会记住一些微妙的细节，并在后来把它们连成一个更大的图案。",
    traits: { introspection: 1.3, openness: 0.5 },
    elements: { water: 1.2, wood: 0.3 }
  },
  {
    text: "我愿意为了一个正在生长的方向，承受一段时间的不确定。",
    traits: { openness: 1.2, vitality: 0.4 },
    elements: { wood: 1.3, fire: 0.2 }
  },
  {
    text: "我擅长切掉不必要的选项，让事情回到最重要的判断。",
    traits: { order: 1.1, introspection: 0.5 },
    elements: { metal: 1.5 }
  },
  {
    text: "我容易被有生命力的人、场景和创意感染，并想参与其中。",
    traits: { vitality: 1.2, openness: 0.4 },
    elements: { fire: 1.4 }
  },
  {
    text: "别人信任我，多半是因为我不轻易失约，也愿意把事落到实处。",
    traits: { order: 0.8, empathy: 0.8 },
    elements: { earth: 1.5 }
  },
  {
    text: "我对自己的情绪和动机有追问习惯，不满足于表面的答案。",
    traits: { introspection: 1.5 },
    elements: { water: 1.3, metal: 0.2 }
  },
  {
    text: "我做计划时，会留出试探、调整和分枝的空间。",
    traits: { openness: 1.1, order: 0.4 },
    elements: { wood: 1.1, water: 0.3 }
  },
  {
    text: "我欣赏简洁、克制和准确，尤其在沟通和作品里。",
    traits: { order: 1.1, introspection: 0.4 },
    elements: { metal: 1.4 }
  },
  {
    text: "当我相信一件事值得做，会愿意站到前面承担可见的压力。",
    traits: { vitality: 1.4, order: 0.3 },
    elements: { fire: 1.1, metal: 0.4 }
  },
  {
    text: "我会主动照顾一个群体里的节奏，让不同的人都能找到位置。",
    traits: { empathy: 1.3, order: 0.3 },
    elements: { earth: 1.2, wood: 0.3 }
  },
  {
    text: "我的判断经常来自长期观察后的直觉，而不是当场的热闹。",
    traits: { introspection: 1.3, openness: 0.3 },
    elements: { water: 1.4 }
  }
];

const scaleOptions = [
  { value: 1, label: "很不像", detail: "几乎不是我" },
  { value: 2, label: "不太像", detail: "偶尔如此" },
  { value: 3, label: "一半", detail: "看情境" },
  { value: 4, label: "比较像", detail: "经常如此" },
  { value: 5, label: "很像", detail: "非常稳定" }
];

const traitMeta = {
  openness: { label: "开放探索", color: "#52a36f" },
  order: { label: "秩序执行", color: "#cfd4d1" },
  vitality: { label: "行动能量", color: "#d55a4d" },
  empathy: { label: "关系共情", color: "#c49a4a" },
  introspection: { label: "深度内省", color: "#4d86b8" }
};

const elementMeta = {
  wood: {
    label: "木",
    color: "#52a36f",
    trigram: "☴",
    trigramName: "巽风",
    title: "青木开拓者",
    subtitle: "生长、规划、看见可能性",
    body:
      "你的核心气质偏向生发与扩展。你容易看见一个人、一件事或一段关系尚未成形的潜力，也愿意给变化留空间。你的优势是愿景、适应与学习速度；需要留意的是，方向太多时容易分散力量。"
  },
  fire: {
    label: "火",
    color: "#d55a4d",
    trigram: "☲",
    trigramName: "离火",
    title: "明火表达者",
    subtitle: "热度、显化、带动现场",
    body:
      "你的核心气质偏向点亮与显化。你常能把想法说出来、把气氛带起来，也愿意在关键处承担可见的压力。你的优势是感染力、行动感和表达欲；需要留意的是，强烈投入后也要给自己降温和复盘。"
  },
  earth: {
    label: "土",
    color: "#c49a4a",
    trigram: "☷",
    trigramName: "坤地",
    title: "厚土承载者",
    subtitle: "稳定、照料、让关系落地",
    body:
      "你的核心气质偏向承载与安定。你重视持续、可信和实际支持，擅长让身边的人感到被接住。你的优势是耐心、责任感和关系修复力；需要留意的是，不要把所有人的重量都默默放到自己身上。"
  },
  metal: {
    label: "金",
    color: "#cfd4d1",
    trigram: "☰",
    trigramName: "乾天",
    title: "白金裁断者",
    subtitle: "标准、边界、精准取舍",
    body:
      "你的核心气质偏向清晰与判断。你重视标准、结构和边界，能在复杂局面中切出重点。你的优势是决断、质量意识和原则感；需要留意的是，过度追求准确时，可能压缩了探索和情绪缓冲的空间。"
  },
  water: {
    label: "水",
    color: "#4d86b8",
    trigram: "☵",
    trigramName: "坎水",
    title: "玄水洞察者",
    subtitle: "观察、内省、在流动中成形",
    body:
      "你的核心气质偏向观察与深潜。你不急着接受表层答案，常通过长时间感受、比对和沉淀形成判断。你的优势是洞察、韧性和复杂度处理；需要留意的是，想太久时可以用小行动验证直觉。"
  }
};

const blendPhrases = {
  wood: "用小实验验证愿景，让生长拥有节奏。",
  fire: "把热情分段释放，给表达配上恢复时间。",
  earth: "在照顾别人之前，先给自己的边界留位置。",
  metal: "保留标准，也允许初稿先出现。",
  water: "把洞察写下来，再用一个具体行动试水。"
};

const answers = new Array(questions.length).fill(null);
let currentIndex = 0;
let hasStarted = false;
let latestSummary = "";

const startBtn = document.querySelector("#startBtn");
const scrollInfoBtn = document.querySelector("#scrollInfoBtn");
const quiz = document.querySelector("#quiz");
const quizKicker = document.querySelector("#quizKicker");
const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const scale = document.querySelector("#scale");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const result = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultSubtitle = document.querySelector("#resultSubtitle");
const resultBody = document.querySelector("#resultBody");
const resultTags = document.querySelector("#resultTags");
const archetypeMark = document.querySelector("#archetypeMark");
const elementBars = document.querySelector("#elementBars");
const traitBars = document.querySelector("#traitBars");
const adviceList = document.querySelector("#adviceList");
const copyBtn = document.querySelector("#copyBtn");
const restartBtn = document.querySelector("#restartBtn");

function startQuiz() {
  hasStarted = true;
  currentIndex = 0;
  renderQuestion();
  quiz.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const answeredCount = answers.filter(Boolean).length;
  const question = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  quizKicker.textContent = `第 ${currentIndex + 1} 题`;
  questionTitle.textContent = "选择最像你的回答";
  questionText.textContent = question.text;
  progressText.textContent = `${answeredCount} / ${questions.length}`;
  progressFill.style.width = `${(answeredCount / questions.length) * 100}%`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentAnswer === null;
  nextBtn.textContent = currentIndex === questions.length - 1 ? "查看结果" : "下一题";

  scale.innerHTML = "";
  scaleOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `scale-option${currentAnswer === option.value ? " is-selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", currentAnswer === option.value ? "true" : "false");
    button.innerHTML = `<strong>${option.value}</strong><span>${option.label}<br>${option.detail}</span>`;
    button.addEventListener("click", () => {
      answers[currentIndex] = option.value;
      renderQuestion();
    });
    scale.appendChild(button);
  });
}

function emptyScores(source) {
  return Object.keys(source).reduce((scores, key) => {
    scores[key] = 0;
    return scores;
  }, {});
}

function computeScores() {
  const traitScores = emptyScores(traitMeta);
  const traitMax = emptyScores(traitMeta);
  const elementScores = emptyScores(elementMeta);

  questions.forEach((question, index) => {
    const answer = answers[index] || 3;
    Object.entries(question.traits).forEach(([key, weight]) => {
      traitScores[key] += answer * weight;
      traitMax[key] += 5 * weight;
    });
    Object.entries(question.elements).forEach(([key, weight]) => {
      elementScores[key] += answer * weight;
    });
  });

  const traits = Object.fromEntries(
    Object.entries(traitScores).map(([key, value]) => [key, Math.round((value / traitMax[key]) * 100)])
  );
  const elementTotal = Object.values(elementScores).reduce((sum, value) => sum + value, 0);
  const elements = Object.fromEntries(
    Object.entries(elementScores).map(([key, value]) => [key, Math.round((value / elementTotal) * 100)])
  );

  return { traits, elements };
}

function sortedEntries(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function renderBars(container, scores, meta) {
  container.innerHTML = "";
  sortedEntries(scores).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label">
        <span>${meta[key].label}</span>
        <span>${value}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${value}%; background:${meta[key].color}"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderResult() {
  const { traits, elements } = computeScores();
  const rankedElements = sortedEntries(elements);
  const rankedTraits = sortedEntries(traits);
  const primaryKey = rankedElements[0][0];
  const secondaryKey = rankedElements[1][0];
  const primary = elementMeta[primaryKey];
  const secondary = elementMeta[secondaryKey];
  const topTrait = traitMeta[rankedTraits[0][0]].label;

  result.hidden = false;
  archetypeMark.textContent = `${primary.trigram}${secondary.trigram}`;
  resultTitle.textContent = `${primary.title} · ${primary.trigramName}遇${secondary.trigramName}`;
  resultSubtitle.textContent = `${primary.subtitle}，辅以${secondary.label}的气质`;
  resultBody.textContent = `${primary.body} 你的第二倾向是${secondary.label}，它会让这个主轴更有层次：${blendPhrases[secondaryKey]}`;

  resultTags.innerHTML = "";
  [`主导：${primary.label}`, `副轴：${secondary.label}`, `突出维度：${topTrait}`, "非临床诊断"].forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "tag";
    pill.textContent = tag;
    resultTags.appendChild(pill);
  });

  renderBars(elementBars, elements, elementMeta);
  renderBars(traitBars, traits, traitMeta);
  renderAdvice(primaryKey, secondaryKey, rankedTraits);
  latestSummary = buildSummary(primary, secondary, topTrait, elements, traits);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAdvice(primaryKey, secondaryKey, rankedTraits) {
  const topTrait = rankedTraits[0][0];
  const lowTrait = rankedTraits[rankedTraits.length - 1][0];
  const advice = [
    blendPhrases[primaryKey],
    blendPhrases[secondaryKey],
    `继续使用你的“${traitMeta[topTrait].label}”优势，但给“${traitMeta[lowTrait].label}”留一个低成本练习位。`,
    "把这份结果当成谈话起点：观察最近三次选择，看看它是否真的描述了你。"
  ];

  adviceList.innerHTML = "";
  advice.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    adviceList.appendChild(li);
  });
}

function buildSummary(primary, secondary, topTrait, elements, traits) {
  const elementText = sortedEntries(elements)
    .map(([key, value]) => `${elementMeta[key].label}${value}%`)
    .join("、");
  const traitText = sortedEntries(traits)
    .map(([key, value]) => `${traitMeta[key].label}${value}%`)
    .join("、");

  return [
    `我的象限人格测评结果：${primary.title}`,
    `卦象意象：${primary.trigramName}遇${secondary.trigramName}`,
    `突出维度：${topTrait}`,
    `五行比例：${elementText}`,
    `现代维度：${traitText}`,
    "说明：这是自我探索型测评，不是临床诊断。"
  ].join("\n");
}

function resetQuiz() {
  answers.fill(null);
  currentIndex = 0;
  hasStarted = false;
  result.hidden = true;
  quizKicker.textContent = "准备开始";
  questionTitle.textContent = "选择最像你的回答";
  questionText.textContent = "点击“开始测试”后，题目会出现在这里。";
  scale.innerHTML = "";
  progressText.textContent = `0 / ${questions.length}`;
  progressFill.style.width = "0%";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  nextBtn.textContent = "下一题";
  startBtn.focus();
}

startBtn.addEventListener("click", startQuiz);
scrollInfoBtn.addEventListener("click", () => {
  document.querySelector("#intro").scrollIntoView({ behavior: "smooth", block: "start" });
});

prevBtn.addEventListener("click", () => {
  if (!hasStarted || currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (!hasStarted || answers[currentIndex] === null) return;
  if (currentIndex === questions.length - 1) {
    renderResult();
    return;
  }
  currentIndex += 1;
  renderQuestion();
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(latestSummary);
    copyBtn.textContent = "已复制";
    window.setTimeout(() => {
      copyBtn.innerHTML = `<span aria-hidden="true">⧉</span> 复制摘要`;
    }, 1400);
  } catch {
    copyBtn.textContent = "复制失败";
    window.setTimeout(() => {
      copyBtn.innerHTML = `<span aria-hidden="true">⧉</span> 复制摘要`;
    }, 1400);
  }
});

restartBtn.addEventListener("click", resetQuiz);
resetQuiz();
