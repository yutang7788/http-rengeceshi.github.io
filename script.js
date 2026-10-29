const questions = [
  { text: "我会主动接触陌生领域，哪怕一开始并不能马上派上用场。", trait: "openness", elements: { wood: 1.2, water: 0.4 } },
  { text: "我喜欢讨论抽象概念、隐喻或事物背后的规律。", trait: "openness", elements: { water: 1.1, wood: 0.4 } },
  { text: "面对新做法时，我通常更愿意沿用熟悉的方法。", trait: "openness", reverse: true, elements: { earth: 1.0, metal: 0.5 } },
  { text: "我经常从看似无关的信息里发现新的联系。", trait: "openness", elements: { water: 0.9, wood: 0.7 } },
  { text: "我愿意为了一个有潜力的方向，容忍一段时间的不确定。", trait: "openness", elements: { wood: 1.1, fire: 0.4 } },
  { text: "陌生文化、艺术或观点通常很难引起我的兴趣。", trait: "openness", reverse: true, elements: { earth: 0.9, metal: 0.6 } },
  { text: "出现新证据时，我能够调整原先坚持的看法。", trait: "openness", elements: { water: 0.8, metal: 0.6 } },
  { text: "比起想象多种可能，我更愿意只处理眼前明确的事实。", trait: "openness", reverse: true, elements: { metal: 1.0, earth: 0.5 } },

  { text: "开始重要任务前，我通常会先安排步骤和优先级。", trait: "conscientiousness", elements: { metal: 1.0, earth: 0.6 } },
  { text: "即使没有人监督，我也会努力兑现已经答应的事情。", trait: "conscientiousness", elements: { earth: 1.0, metal: 0.6 } },
  { text: "我常把事情拖到最后，才在压力下匆忙完成。", trait: "conscientiousness", reverse: true, elements: { fire: 0.8, water: 0.5 } },
  { text: "我能在细节和截止时间较多时保持条理。", trait: "conscientiousness", elements: { metal: 1.1, earth: 0.5 } },
  { text: "任务变得重复或枯燥后，我仍能维持基本的完成质量。", trait: "conscientiousness", elements: { earth: 1.2, metal: 0.4 } },
  { text: "我经常忘记物品、约定或已经安排好的小事。", trait: "conscientiousness", reverse: true, elements: { water: 0.8, fire: 0.5 } },
  { text: "我会定期检查进度，并在偏离目标时及时调整。", trait: "conscientiousness", elements: { metal: 0.9, wood: 0.6 } },
  { text: "只要最初的新鲜感消失，我就容易放下还没完成的计划。", trait: "conscientiousness", reverse: true, elements: { wood: 0.8, fire: 0.6 } },

  { text: "进入陌生群体时，我通常能主动开启一段对话。", trait: "extraversion", elements: { fire: 1.1, wood: 0.5 } },
  { text: "热闹的互动常常让我获得能量，而不是只感到消耗。", trait: "extraversion", elements: { fire: 1.2, wood: 0.4 } },
  { text: "即使有想法，我也常等别人先开口。", trait: "extraversion", reverse: true, elements: { water: 1.0, earth: 0.4 } },
  { text: "需要推动一件事时，我愿意站到前面承担可见的压力。", trait: "extraversion", elements: { fire: 1.0, metal: 0.5 } },
  { text: "我能比较自然地表达兴奋、赞赏和热情。", trait: "extraversion", elements: { fire: 1.2, earth: 0.3 } },
  { text: "连续参加社交活动后，我往往需要很长时间才能恢复。", trait: "extraversion", reverse: true, elements: { water: 1.1, earth: 0.4 } },
  { text: "在群体讨论中，我通常会积极贡献观点或推进决定。", trait: "extraversion", elements: { fire: 0.9, metal: 0.6 } },
  { text: "我更喜欢让自己的存在感保持在不被注意的位置。", trait: "extraversion", reverse: true, elements: { water: 0.9, earth: 0.6 } },

  { text: "意见冲突时，我会先尝试理解对方真正担心的是什么。", trait: "agreeableness", elements: { earth: 0.9, water: 0.7 } },
  { text: "如果一种表达会伤害关系，我会调整说法而不只是坚持正确。", trait: "agreeableness", elements: { earth: 1.0, water: 0.5 } },
  { text: "别人犯错时，我的第一反应往往是指出问题而不是理解处境。", trait: "agreeableness", reverse: true, elements: { metal: 1.0, fire: 0.4 } },
  { text: "我愿意在不损害原则的前提下，为合作做出合理让步。", trait: "agreeableness", elements: { earth: 1.0, wood: 0.5 } },
  { text: "我能察觉到别人没有直接说出的失落或需要。", trait: "agreeableness", elements: { water: 0.9, earth: 0.7 } },
  { text: "在利益竞争中，我很少顾及对方是否会感到为难。", trait: "agreeableness", reverse: true, elements: { metal: 0.9, fire: 0.6 } },
  { text: "别人向我倾诉时，我通常能先陪伴，而不是急着给答案。", trait: "agreeableness", elements: { earth: 0.9, water: 0.7 } },
  { text: "在了解一个人之前，我倾向于先怀疑对方的动机。", trait: "agreeableness", reverse: true, elements: { metal: 0.8, water: 0.6 } },

  { text: "压力突然升高时，我通常还能维持基本的思考和行动。", trait: "emotionalStability", elements: { earth: 0.9, water: 0.6 } },
  { text: "一次不顺利发生后，我能够在合理时间内恢复节奏。", trait: "emotionalStability", elements: { water: 0.8, wood: 0.6 } },
  { text: "即使问题还没发生，我也容易反复设想最坏的结果。", trait: "emotionalStability", reverse: true, elements: { water: 1.0, metal: 0.4 } },
  { text: "被批评后，我能区分有用反馈和对自我价值的否定。", trait: "emotionalStability", elements: { metal: 0.8, earth: 0.6 } },
  { text: "我的情绪有时变化很快，让我难以继续原本的事情。", trait: "emotionalStability", reverse: true, elements: { fire: 0.8, water: 0.6 } },
  { text: "面对无法控制的变化，我通常能把注意力拉回可做的部分。", trait: "emotionalStability", elements: { earth: 0.9, metal: 0.6 } },
  { text: "一件尴尬或失败的小事，常会在我脑中反复出现很久。", trait: "emotionalStability", reverse: true, elements: { water: 1.1, metal: 0.3 } },
  { text: "情绪强烈时，我通常知道什么方法能让自己慢慢稳定下来。", trait: "emotionalStability", elements: { water: 0.8, earth: 0.7 } }
];

const scaleOptions = [
  { value: 1, label: "很不像", detail: "几乎不是我" },
  { value: 2, label: "不太像", detail: "偶尔如此" },
  { value: 3, label: "一半", detail: "看情境" },
  { value: 4, label: "比较像", detail: "经常如此" },
  { value: 5, label: "很像", detail: "非常稳定" }
];

const traitMeta = {
  openness: { label: "开放性", color: "#52a36f", high: "善于接纳新经验、联结信息并想象多种可能。", low: "更重视熟悉、具体与可验证的路径，这能提升稳定性。", practice: "每周尝试一个低成本的新输入，并记录它是否真的有用。" },
  conscientiousness: { label: "尽责性", color: "#cfd4d1", high: "偏好规划、兑现承诺，并能把目标落实为持续行动。", low: "更依赖兴趣和现场状态，灵活度高，但长期任务需要外部结构。", practice: "把目标缩成一个 15 分钟动作，并为它设定明确完成点。" },
  extraversion: { label: "外向性", color: "#d55a4d", high: "容易从互动、表达和主动推进中获得能量。", low: "更偏好低刺激环境和深度交流，通常先观察再参与。", practice: "在需要被看见的场合，提前准备一句观点或一个提问。" },
  agreeableness: { label: "宜人性", color: "#c49a4a", high: "重视合作、体察与关系质量，善于理解他人的处境。", low: "更强调原则、竞争与直接判断，在复杂协商中可能更果断。", practice: "表达不同意见时，先复述对方关切，再说自己的边界。" },
  emotionalStability: { label: "情绪稳定性", color: "#4d86b8", high: "在压力和不确定中较能恢复节奏，并维持可行动状态。", low: "对风险和情绪线索更敏感，洞察细腻，但更需要主动恢复。", practice: "为压力时刻预设一个恢复动作，例如散步、书写或延迟决定。" }
};

const pairProfiles = {
  "agreeableness|conscientiousness": { title: "可靠的协调者", body: "你倾向于同时照顾关系与责任：既希望事情被认真完成，也在意完成方式是否让人能够合作。" },
  "agreeableness|emotionalStability": { title: "温和的稳定者", body: "你更可能以平稳、体察和不过度反应的方式影响他人，是关系中的缓冲带与支持者。" },
  "agreeableness|extraversion": { title: "关系推动者", body: "你会通过主动互动建立连接，并善于让不同的人参与进来，影响力常来自亲和与表达。" },
  "agreeableness|openness": { title: "共情想象者", body: "你愿意理解不同经验，也能想象他人的处境，常在创意、文化和关系议题中看到更多层次。" },
  "conscientiousness|emotionalStability": { title: "稳健执行者", body: "你偏好清楚、持续且可控的推进方式，在压力下仍会努力守住节奏与完成标准。" },
  "conscientiousness|extraversion": { title: "目标组织者", body: "你既愿意站出来推进，也关注任务落地，适合把群体能量转化为明确行动。" },
  "conscientiousness|openness": { title: "系统创新者", body: "你不只产生新想法，也会考虑如何验证、组织和实现它们，创造力与结构感能够互相支撑。" },
  "emotionalStability|extraversion": { title: "沉着行动者", body: "你倾向于在互动与压力中维持行动感，既能进入现场，也较能从波动中重新站稳。" },
  "emotionalStability|openness": { title: "从容探索者", body: "你愿意接触复杂与未知，同时不急于被短期波动带走，通常能给新经验足够的观察时间。" },
  "extraversion|openness": { title: "灵感发起者", body: "新鲜经验与外部互动会激活你，你擅长让想法流动起来，并把可能性带进现实场景。" }
};

const elementMeta = {
  wood: { label: "木", color: "#52a36f", trigram: "☴", trigramName: "巽风", title: "青木开拓者", subtitle: "生长、规划、看见可能性", body: "木象征生发与延展，提示你习惯从潜力、方向和成长空间理解事物。" },
  fire: { label: "火", color: "#d55a4d", trigram: "☲", trigramName: "离火", title: "明火表达者", subtitle: "热度、显化、带动现场", body: "火象征表达与显化，提示你会通过热度、行动和可见影响力推动局面。" },
  earth: { label: "土", color: "#c49a4a", trigram: "☷", trigramName: "坤地", title: "厚土承载者", subtitle: "稳定、照料、让关系落地", body: "土象征承载与安定，提示你重视可靠、持续和能被现实接住的关系与成果。" },
  metal: { label: "金", color: "#cfd4d1", trigram: "☰", trigramName: "乾天", title: "白金裁断者", subtitle: "标准、边界、精准取舍", body: "金象征结构与裁断，提示你重视标准、边界、质量和清晰的取舍。" },
  water: { label: "水", color: "#4d86b8", trigram: "☵", trigramName: "坎水", title: "玄水洞察者", subtitle: "观察、内省、在流动中成形", body: "水象征流动与深察，提示你倾向于观察情境、容纳复杂度并在沉淀后判断。" }
};

const elementAdvice = {
  wood: "给生长设一个阶段终点，避免可能性过多而分散力量。",
  fire: "把热情分段释放，为高投入安排明确的恢复时间。",
  earth: "照顾整体时也要说出自己的边界，不必独自承载全部重量。",
  metal: "保留标准，同时允许探索阶段先出现不完美的初稿。",
  water: "把洞察写成一个可验证的小行动，避免只在内部循环。"
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
const resultSymbolic = document.querySelector("#resultSymbolic");
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
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const currentAnswer = answers[currentIndex];
  quizKicker.textContent = `第 ${currentIndex + 1} 题 · ${traitMeta[questions[currentIndex].trait].label}`;
  questionTitle.textContent = "请选择最符合近半年真实状态的回答";
  questionText.textContent = questions[currentIndex].text;
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
  return Object.fromEntries(Object.keys(source).map((key) => [key, 0]));
}

function computeScores() {
  const traitTotals = emptyScores(traitMeta);
  const traitCounts = emptyScores(traitMeta);
  const elementTotals = emptyScores(elementMeta);
  questions.forEach((question, index) => {
    const rawAnswer = answers[index] ?? 3;
    const traitAnswer = question.reverse ? 6 - rawAnswer : rawAnswer;
    traitTotals[question.trait] += traitAnswer;
    traitCounts[question.trait] += 1;
    Object.entries(question.elements).forEach(([key, weight]) => { elementTotals[key] += rawAnswer * weight; });
  });
  const traits = Object.fromEntries(Object.keys(traitMeta).map((key) => {
    const average = traitTotals[key] / traitCounts[key];
    return [key, Math.round(((average - 1) / 4) * 100)];
  }));
  const elementTotal = Object.values(elementTotals).reduce((sum, value) => sum + value, 0);
  const elements = Object.fromEntries(Object.entries(elementTotals).map(([key, value]) => [key, Math.round((value / elementTotal) * 100)]));
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
    row.innerHTML = `<div class="bar-label"><span>${meta[key].label}</span><span>${value}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${value}%; background:${meta[key].color}"></div></div>`;
    container.appendChild(row);
  });
}

function getPairProfile(firstKey, secondKey) {
  return pairProfiles[[firstKey, secondKey].sort().join("|")];
}

function describeTrait(key, value) {
  const direction = value >= 60 ? traitMeta[key].high : value <= 40 ? traitMeta[key].low : "在这一维度上较为平衡，会随情境调整表达方式。";
  return `${traitMeta[key].label} ${value}%：${direction}`;
}

function renderResult() {
  const { traits, elements } = computeScores();
  const rankedTraits = sortedEntries(traits);
  const rankedElements = sortedEntries(elements);
  const primaryKey = rankedElements[0][0];
  const secondaryKey = rankedElements[1][0];
  const firstTraitKey = rankedTraits[0][0];
  const secondTraitKey = rankedTraits[1][0];
  const lowestTraitKey = rankedTraits[rankedTraits.length - 1][0];
  const primary = elementMeta[primaryKey];
  const secondary = elementMeta[secondaryKey];
  const pair = getPairProfile(firstTraitKey, secondTraitKey);

  result.hidden = false;
  archetypeMark.textContent = `${primary.trigram}${secondary.trigram}`;
  resultTitle.textContent = `${pair.title} · ${primary.title}`;
  resultSubtitle.textContent = `200 种复合画像之一｜${primary.trigramName}遇${secondary.trigramName}`;
  resultBody.textContent = `${pair.body} ${describeTrait(firstTraitKey, traits[firstTraitKey])} ${describeTrait(secondTraitKey, traits[secondTraitKey])}`;
  resultSymbolic.textContent = `象征层：${primary.body} 以${secondary.label}为副轴，补充了${secondary.subtitle}的气质。此部分来自五行与易经意象，不属于心理测量结论。`;
  resultTags.innerHTML = "";
  [`心理主轴：${traitMeta[firstTraitKey].label}＋${traitMeta[secondTraitKey].label}`, `五行主副：${primary.label}＋${secondary.label}`, "含反向计分", "非临床诊断"].forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "tag";
    pill.textContent = tag;
    resultTags.appendChild(pill);
  });
  renderBars(elementBars, elements, elementMeta);
  renderBars(traitBars, traits, traitMeta);
  renderAdvice(firstTraitKey, lowestTraitKey, primaryKey, traits);
  latestSummary = buildSummary(pair, primary, secondary, traits, elements);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAdvice(topTraitKey, lowestTraitKey, primaryKey, traits) {
  const advice = [
    `优势使用：${describeTrait(topTraitKey, traits[topTraitKey])}`,
    `平衡练习：${traitMeta[lowestTraitKey].practice}`,
    `象征提醒：${elementAdvice[primaryKey]}`,
    "复核方法：回想近半年三个真实场景，分别找支持和反驳这份画像的证据。"
  ];
  adviceList.innerHTML = "";
  advice.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    adviceList.appendChild(li);
  });
}

function buildSummary(pair, primary, secondary, traits, elements) {
  const traitText = sortedEntries(traits).map(([key, value]) => `${traitMeta[key].label}${value}%`).join("、");
  const elementText = sortedEntries(elements).map(([key, value]) => `${elementMeta[key].label}${value}%`).join("、");
  return [`我的象限人格测评结果：${pair.title} · ${primary.title}`, `大五人格：${traitText}`, `五行象征：${primary.label}为主、${secondary.label}为副（${elementText}）`, "说明：这是自我探索型测评，不是标准化量表或临床诊断。"].join("\n");
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
scrollInfoBtn.addEventListener("click", () => document.querySelector("#intro").scrollIntoView({ behavior: "smooth", block: "start" }));
prevBtn.addEventListener("click", () => {
  if (!hasStarted || currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
});
nextBtn.addEventListener("click", () => {
  if (!hasStarted || answers[currentIndex] === null) return;
  if (currentIndex === questions.length - 1) return renderResult();
  currentIndex += 1;
  renderQuestion();
});
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(latestSummary);
    copyBtn.textContent = "已复制";
  } catch {
    copyBtn.textContent = "复制失败";
  }
  window.setTimeout(() => { copyBtn.innerHTML = `<span aria-hidden="true">⧉</span> 复制摘要`; }, 1400);
});
restartBtn.addEventListener("click", resetQuiz);
resetQuiz();
