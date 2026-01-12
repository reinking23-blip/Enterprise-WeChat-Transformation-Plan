
import { 
  Users, 
  UserMinus, 
  ShieldCheck, 
  Briefcase, 
  MessageSquare, 
  AlertTriangle, 
  FileText, 
  Lock, 
  Zap, 
  Tags, 
  Share2, 
  MessageCircle, 
  CreditCard, 
  Video, 
  BarChart3, 
  QrCode, 
  RefreshCw, 
  Database 
} from 'lucide-react';
import { ModuleData } from './types';

export const modules: ModuleData[] = [
  {
    id: "module-1",
    subtitle: "CUSTOMER ASSETIZATION",
    title: "客户资产化",
    slogan: "从“私人领地”到“公司资产”",
    features: [
      {
        id: "m1-f1",
        title: "离职继承",
        description: "当员工离职并从企微后台删除后，管理员可以在后台一键将该员工的所有客户、拥有的客户群，批量分配给在职的同事。",
        effect: "客户端会收到一条提醒：“由于XX离职，后续由同事XX为您服务”。客户无需点击通过，直接就会出现在新员工的列表里，迁移成功率接近 100%。",
        icon: UserMinus,
        highlight: "100%",
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/a758edc5e52ef7d79e4d809c4f055f868f9ca587.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/a758edc5e52ef7d79e4d809c4f055f868f9ca587.png",
          "https://i0.hdslb.com/bfs/openplatform/2f214c817fb69f9d720721724843ce95847f6084.png",
          "https://i0.hdslb.com/bfs/openplatform/86e10fbdf5ae13864170624fee8fd67f863b8b80.png"
        ]
      },
      {
        id: "m1-f2",
        title: "在职继承",
        description: "岗位变动时，无需离职即可完成客户平滑交接，业务流程不断档。",
        effect: "业务调整灵活，客户体验无感过渡，保障服务连贯性。",
        icon: RefreshCw,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/309fb86d29815ad552e682b6601b39375d5c4a35.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/309fb86d29815ad552e682b6601b39375d5c4a35.png",
          "https://i0.hdslb.com/bfs/openplatform/a742ab39636b51877b38e6f3deb3322d486252e3.png",
          "https://i0.hdslb.com/bfs/openplatform/fabf28d58e5bf55dc9c27db6b99348a39345641a.png"
        ]
      },
      {
        id: "m1-f3",
        title: "客户数据保护",
        description: "管理员可以设置 “员工删除客户时提醒”和”数据恢复”。如果销售试图大规模清理客户关系，后台会立刻预警，防止恶意破坏。",
        effect: "数据保障计划致力于保障企业和员工的重要数据安全，为企业开启企业微信的数据备份，一旦企业微信的数据发生意外删除或遭遇恶意破坏，可从提前备份的数据中进行及时的恢复，避免企业因数据丢失遭受巨大损失。",
        icon: ShieldCheck,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/0adedb4ef2ba2da84a4c642e3275b2551e5843d7.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/0adedb4ef2ba2da84a4c642e3275b2551e5843d7.png",
          "https://i0.hdslb.com/bfs/openplatform/38b4bab0b7276c1bb5e2448e8cc761b9c6c2937c.png",
          "https://i0.hdslb.com/bfs/openplatform/be90a43782284a8541500e3d6a90f07ee6796141.png"
        ]
      }
    ]
  },
  {
    id: "module-2",
    subtitle: "COMPLIANCE & RISK CONTROL",
    title: "合规风控管理",
    slogan: "从“黑盒对话”到“全量合规”",
    features: [
      {
        id: "m2-f1",
        title: "会话存档",
        description: "在获得员工 and 客户双方同意的前提下，系统可以永久保存文字、图片、语音、撤回的消息等全格式内容。",
        effect: "领导或合规官可以随时通过后台检索关键对话，复盘销冠的谈单技巧，或者核查投诉案件的真实经过。",
        icon: Database,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/8a28d536c63a4fddd327abc116ca68d6a4af0ad5.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/8a28d536c63a4fddd327abc116ca68d6a4af0ad5.png",
          "https://i0.hdslb.com/bfs/openplatform/d5fa266e94c7f397632825d5f2d99644abe3c293.png"
        ]
      },
      {
        id: "m2-f2",
        title: "敏感词提醒",
        description: "管理员可以在后台设置“敏感词库”，例如：“加微信”、“转账”、“私下”、“回扣”、甚至是竞对的名字。",
        effect: "一旦销售在聊天中输入这些词汇，系统会立即实时推送预警给管理人员，让违规行为在第一时间被制止。",
        icon: AlertTriangle,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/22bfa0947c086e3db93d7b11d9b153bcf45ccbfe.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/22bfa0947c086e3db93d7b11d9b153bcf45ccbfe.png",
          "https://i0.hdslb.com/bfs/openplatform/738bb280e2c2381bd8a5a95dc7b7ea8a2f5ac2ad.png"
        ]
      },
      {
        id: "m2-f3",
        title: "企业安全管理",
        description: "安全高级功能包含企业信息防泄漏、统一管理文件权限等高级能力，可以为企业提供更丰富的安全与管理功能，保障企业安全。",
        effect: "功能涉及外部沟通管理、文件防泄漏、通讯录信息防泄漏、水印设置、截屏/录屏管控、登录设备管理、IP访问限制、企业数据自主加密。",
        icon: Lock,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/04bf7224e229c213f635a91fd002b53095647c4c.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/04bf7224e229c213f635a91fd002b53095647c4c.png",
          "https://i0.hdslb.com/bfs/openplatform/14fed1e7b13664f433f993c31fe10b308629a9d3.png",
          "https://i0.hdslb.com/bfs/openplatform/7771ccddf99b981e4c1ed05e9e7ced9bc68e4af2.png",
          "https://i0.hdslb.com/bfs/openplatform/49e475684ada0faf5fdac18a8c9826a0a60bd3d2.png",
          "https://i0.hdslb.com/bfs/openplatform/e28075befff2af9cbe735dfcf6fe1ff620eccbb5.png",
          "https://i0.hdslb.com/bfs/openplatform/8ddb83a1d314feb9402c13dec997832bc7ffb045.png",
          "https://i0.hdslb.com/bfs/openplatform/6112c827d9ed1ad462b326845360f0664a64c944.png",
          "https://i0.hdslb.com/bfs/openplatform/7b963334e62e753a6637d0b03c8eb85e048b028c.png",
          "https://i0.hdslb.com/bfs/openplatform/e19737d79e876ce6d8bfb0a0a29e0fd887b0a02b.png",
          "https://i0.hdslb.com/bfs/openplatform/98417efd9f3f038e9267f1397838a99beb731601.png",
          "https://i0.hdslb.com/bfs/openplatform/b982a29c7663fc3b28789ca3437a16e2d812a0ba.png",
          "https://i0.hdslb.com/bfs/openplatform/b7e1023db9424e888a2b9314a85cf1b503031a4b.png",
          "https://i0.hdslb.com/bfs/openplatform/a0d7f69decd9a42d39d37e8efae0a26e7a768389.png",
          "https://i0.hdslb.com/bfs/openplatform/1c6d9dc5490703aa026136a27fb4d150891d0e88.png",
          "https://i0.hdslb.com/bfs/openplatform/54133ff891499aae515a717dadba3a618b84de60.png",
          "https://i0.hdslb.com/bfs/openplatform/43ae08ce59cb628df28ed53b11b0e0bbe3eccd78.png",
          "https://i0.hdslb.com/bfs/openplatform/f51bee0739b95f295a2a9e12b245a1d2ebb5182b.png",
          "https://i0.hdslb.com/bfs/openplatform/f9f55332d0394701df449e49820aec1f086839b6.png",
          "https://i0.hdslb.com/bfs/openplatform/a739a2658d4d4e4dc183da549cbb2cc94e4cf867.png",
          "https://i0.hdslb.com/bfs/openplatform/9ab0eb5002246fffb729c90e3ef6e09e025a564e.png",
          "https://i0.hdslb.com/bfs/openplatform/ef244bd9713ef3bd223840aa591ea8fb53b2715c.png",
          "https://i0.hdslb.com/bfs/openplatform/0d3d2aecc0eb463f37bc6d871fe9ac0c0f7f565e.png",
          "https://i0.hdslb.com/bfs/openplatform/95c275b3221c28a4f057e2d9b99519299d80376a.png"
        ]
      }
    ]
  },
  {
    id: "module-3",
    subtitle: "REFINED OPERATIONS",
    title: "精细化运营赋能",
    slogan: "从“低效重复”到“数智驱动”",
    features: [
      {
        id: "m3-f1",
        title: "快捷回复与侧边栏知识库",
        description: "公司可以将标准的产品手册、报价单、PDF、甚至高转化的话术库，统一配置在聊天页面的右侧边栏。",
        effect: "销售只需点击一下即可发送。哪怕是刚入职一天的新人，也能像资深销冠一样专业地回答客户问题。",
        icon: Zap,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/f153003573ddf0f0cf31d624e234802086f44ed3.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/f153003573ddf0f0cf31d624e234802086f44ed3.png",
          "https://i0.hdslb.com/bfs/openplatform/264001d14bb7197b2154b0ed2c217bff445c214d.png",
          "https://i0.hdslb.com/bfs/openplatform/075dce14d70562c030dada2413553c3d8e27ccf1.png"
        ]
      },
      {
        id: "m3-f2",
        title: "客户标签与分层管理",
        description: "企微允许销售和公司共同定义标签体系（如：地域、消费等级、意向产品）。",
        effect: "当公司有针对“华东区”的促销活动时，销售可以一键筛选出该标签下的所有客户，实现精准触达，而不是全员骚扰。",
        icon: Tags,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/3f42dea8da2d9c13cae40886cf1c035b1a132a87.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/3f42dea8da2d9c13cae40886cf1c035b1a132a87.png"
        ]
      },
      {
        id: "m3-f3",
        title: "企业朋友圈与群发助手",
        description: "公司可以统一制作精美内容，直接下发到销售的任务栏。销售点击“确认”即可发布，且带有官方背书。",
        effect: "群发助手： 不同于个微的盲目群发，企微群发可以根据标签筛选，让营销内容更具针对性，大幅提升转化。 ",
        icon: Share2,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/d13afb7e3d7d8a459eb605abaceb4494f7bd146f.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/d13afb7e3d7d8a459eb605abaceb4494f7bd146f.png",
          "https://i0.hdslb.com/bfs/openplatform/eb8ab150b778245ba62fd987608cbafaac615aad.png"
        ]
      }
    ]
  },
  {
    id: "module-4",
    subtitle: "IMAGE SHAPING & TRUST",
    title: "品牌形象与信任感",
    slogan: "从“个人社交”到“官方认证”",
    features: [
      {
        id: "m4-f1",
        title: "统一的对外名片",
        description: "每个销售的个人信息页都经过公司实名认证，名字后面带有显眼的“@公司简称”，点开后可以看到公司的官网、备案、地址等信息。",
        effect: "就像线下见面递出的钢印名片。客户一眼就能确定销售的身份是合法的，这种官方背书能让初次沟通的拒签率降低 30% 以上。",
        icon: CreditCard,
        highlight: "30%",
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/83f00aa27d29a3a078a99b5232531b5771d6e3d7.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/83f00aa27d29a3a078a99b5232531b5771d6e3d7.png",
          "https://i0.hdslb.com/bfs/openplatform/d3287c241085f3f5612384939d2dcc10cf84ef95.png",
          "https://i0.hdslb.com/bfs/openplatform/22fece5ce7fb7229c8c77cb1d66886a79a161c82.png",
          "https://i0.hdslb.com/bfs/openplatform/0e3b42e1b8a5139785d64c20eec4b178fa6f331f.png",
          "https://i0.hdslb.com/bfs/openplatform/aec1ce39d0f7ff61298bbe37bfbb0c01c2326ce5.png"
        ]
      },
      {
        id: "m4-f2",
        title: "视频号打通与直播",
        description: "企微原生打通视频号。当销售发起直播或分享公司视频号内容时，展示的是官方认证身份。",
        effect: "客户通过视频内容建立直观信任，并能直接在视频下方点击“联系销售”，形成从看内容到加好友的信任闭环。",
        icon: Video,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/4ef7d638584fcd8751202d133dd70ce6bd5b260e.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/4ef7d638584fcd8751202d133dd70ce6bd5b260e.png"
        ]
      },
      {
        id: "m4-f3",
        title: "官方认证的欢迎语",
        description: "新客户扫码加入后，系统会自动发送一段带有礼包或引导的话术，第一时间的自动回复可以包含公司的品牌口号或服务承诺。",
        effect: "实现了“24小时自动接待”，确保每一个从广告或活动进来的线索都不会因为销售暂时忙碌而流失。让客户感觉到自己进入了一个受监管、有规范的服务体系，而非私人的随意聊天。",
        icon: MessageCircle,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/d52e0293f3665d58cc1337ec9505fbdef57bb53b.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/d52e0293f3665d58cc1337ec9505fbdef57bb53b.png"
        ]
      }
    ]
  },
  {
    id: "module-5",
    subtitle: "DATA DRIVEN DECISION",
    title: "数据驱动科学决策",
    slogan: "从“经验盲区”到“数据罗盘”",
    features: [
      {
        id: "m5-f1",
        title: "员工联系分析看板",
        description: "后台自动生成统计报表，包括：每日新增客户数、聊天总数、平均首次回复时长、甚至是被客户删号的数量。",
        effect: "领导可以一眼看出谁在“真忙”，谁在“假忙”。通过对比销冠的沟通频率和普通员工的差异，可以精准找出业绩差的症结所在。",
        icon: BarChart3,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/746b471b1e3d13243ed5fc315474496fa5e001e0.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/746b471b1e3d13243ed5fc315474496fa5e001e0.png",
          "https://i0.hdslb.com/bfs/openplatform/c5ca3bab8ed4f810f7ceeeeec904005270b37655.png"
        ]
      },
      {
        id: "m5-f2",
        title: "渠道活码统计",
        description: "公司在不同平台（朋友圈、线下展会、官网）投放带有不同统计参数的二维码。",
        effect: "后台能清晰显示每一分广告费带来了多少精准客户。领导可以根据各渠道的转化数据，决定下个月的预算投向哪里，实现投资回报率（ROI）最大化。",
        icon: QrCode,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/2e9bb397418a99521c65c2c76094486ba6204347.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/2e9bb397418a99521c65c2c76094486ba6204347.png"
        ]
      },
      {
        id: "m5-f3",
        title: "自动化的数据导出与CRM打通",
        description: "所有客户数据可以一键导出或直接与公司内部CRM系统打通。",
        effect: "彻底告别手动录入，确保数据的实时性和准确性，为公司制定年度/季度战略提供坚实的数据支撑。",
        icon: FileText,
        featureImageUrl: "https://i0.hdslb.com/bfs/openplatform/4589e9a37b0bb4539d62b4827127203120b39d63.png",
        images: [
          "https://i0.hdslb.com/bfs/openplatform/4589e9a37b0bb4539d62b4827127203120b39d63.png"
        ]
      }
    ]
  }
];
