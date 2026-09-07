type Section = { id: string; title: string; paragraphs: string[] };
type PolicyCopy = { title: string; lead: string; updated: string; date: string; summaryLabel: string; summary: string[]; contents: string; googleLink: string; githubLink: string; contactLabel: string; back: string; sections: Section[] };

export const policies: Record<'en' | 'zh', PolicyCopy> = {
  en: {
    title: 'Privacy policy.',
    lead: 'Your photographs hold personal memories. Here is how Memory Camera handles them, and the choices you have.',
    updated: 'Effective & last updated:', date: 'September 7, 2026', summaryLabel: 'Privacy at a glance',
    summary: ['Photos processed on your device', 'No advertising or analytics SDKs', 'No Memory Camera account required'],
    contents: 'IN THIS POLICY', googleLink: 'Google Privacy Policy', githubLink: 'GitHub Privacy Statement', contactLabel: 'PRIVACY CONTACT', back: 'Back to top',
    sections: [
      { id: 'scope', title: 'About this policy', paragraphs: [
        'This policy explains how Memory Camera (Android package: com.memorycamera.app) accesses, uses, stores and shares information when you use the app, visit this policy page or contact us. “We” and “us” refer to the provider of Memory Camera. Jocelyn is our privacy contact; you can reach us at seansheaton@gmail.com.',
        'The app lets you take or import photographs and apply retro camera effects. It does not require a Memory Camera account and does not operate a developer-run photo upload or cloud editing service.'
      ] },
      { id: 'photos', title: 'Camera & photographs', paragraphs: [
        'Camera access is used for the live viewfinder and for photographs you choose to take. Android asks for camera permission before access. You may decline or revoke it in Android Settings; taking new photographs will then be unavailable, but you can still import a photograph.',
        'Importing uses the Android system photo picker. The app reads the image you select and information needed to display it correctly, such as orientation. It does not request broad access to your photo library. Image decoding, filters, previews and export run on your device; we do not upload your images to our servers or use them to train AI models.',
        'When you save, the edited JPEG is written to your device’s photo library. If you enable “Save original,” an additional original copy is saved. The app does not request location, microphone, contacts or phone permissions and does not add GPS location to exported photographs.'
      ] },
      { id: 'settings', title: 'Settings & local storage', paragraphs: [
        'The app stores preferences on your device, including onboarding status, selected camera preset, date stamp, watermark, saving the original, shutter sound, haptics and whether Pro is unlocked. These settings support the features you select. Temporary capture and sharing files may also be stored in the app’s cache.',
        'The app has Android backup enabled. Depending on your device and backup settings, Android or your device provider may back up or transfer app settings. A gallery or cloud-photo service you enable may separately sync saved photographs. These services are controlled by your device or service settings, and are not an upload service operated by Memory Camera.'
      ] },
      { id: 'purchases', title: 'Google Play purchases', paragraphs: [
        'Optional Pro purchases use Google Play Billing. The app communicates with Google Play to load product and price information, check or restore ownership, and acknowledge purchases. It handles purchase information returned by Google Play, including product identifiers, purchase status and purchase tokens. The app stores a local Pro entitlement flag.',
        'Google handles payment details and the Google account used for the transaction. Memory Camera does not receive your full payment card details. Google may make order information available to us through its merchant tools for purchase support or refunds. Google processes purchase, account, device and service information under its own policies.'
      ] },
      { id: 'sharing', title: 'Sharing & disclosure', paragraphs: [
        'When you choose Share, the app creates a temporary image and gives the app you select access to that image through Android sharing. That recipient’s privacy policy applies to its handling of the image. We do not automatically send photographs to other apps.',
        'We do not sell personal information or use it for targeted advertising. The current app includes no advertising SDK, third-party analytics SDK or developer-operated remote crash reporting SDK. Information may be handled by Google Play for purchases, by a service you choose for sharing or backups, or by our email provider when you contact us.',
        'We may disclose information actually held by us when required by applicable law or a valid legal request, or when necessary to protect users’ rights and security. This does not give us access to photographs stored only on your device.'
      ] },
      { id: 'support', title: 'Support & this website', paragraphs: [
        'If you email us, we receive your email address, message and any attachments or details you choose to provide. We use them to respond, resolve your request and maintain necessary support records. Please send only information needed for your request.',
        'This policy is hosted on GitHub Pages. GitHub processes technical information, including visitors’ IP addresses, to deliver the website and for security. This page adds no advertising trackers, analytics scripts or nonessential cookies. GitHub and email providers may process information in countries other than yours, under their applicable safeguards and policies.'
      ] },
      { id: 'retention', title: 'Retention & deletion', paragraphs: [
        'Saved photographs remain in your device’s photo library until you delete them there. Uninstalling Memory Camera does not delete exported photographs. To remove those images, use your gallery or file manager, empty any recently deleted folder, and manage any separate cloud copies in your photo service.',
        'Local settings remain until you clear app storage or uninstall the app, subject to any restoration from a system backup. Temporary cache files may remain until cleared by the app, Android or you. In Android Settings, open Apps → Memory Camera → Storage (labels vary by device); use Clear cache for temporary files, or Clear storage/data to reset app settings and private files. Manage or delete system backups through your device’s backup service.',
        'We retain support correspondence only for as long as reasonably necessary to resolve and follow up on your request, or to meet applicable legal obligations or resolve disputes. You may request deletion by emailing us. Any information that must be retained will be limited to that purpose and removed when the obligation ends.',
        'Google controls retention of Google Play transaction records; GitHub controls retention of its hosting logs. Clearing app data does not erase purchase history or cancel a completed purchase. Contact the relevant provider to manage its records. There is no Memory Camera account to delete.'
      ] },
      { id: 'security', title: 'Keeping information secure', paragraphs: [
        'We minimize remote processing by performing image editing on your device. The app uses Android’s app-private storage for preferences and cache, runtime camera permission, and temporary file access grants for sharing. Exported images are stored in the shared photo library you control.',
        'This policy page is served over HTTPS; payment processing is handled by Google Play. Access to support information is limited to what is needed to handle requests. No storage or transmission method can guarantee absolute security. Your device lock, installed apps, sharing choices and backup settings also affect protection of your photographs.'
      ] },
      { id: 'choices', title: 'Your choices & rights', paragraphs: [
        'You can revoke camera access, choose which image to import, decide whether to save or share, manage backups, and delete local information as described above. No advertising or analytics opt-out is needed for the current app because those SDKs are not included.',
        'Depending on where you live, you may have rights to access, correct, delete or receive a copy of personal information we hold, object to or restrict processing, or withdraw consent where processing relies on consent. Contact Jocelyn to exercise these rights. We may request only the information necessary to verify and handle the request. You may also complain to your local data protection authority.',
        'Where applicable, processing is based on providing the features or support you request, your consent when required, our legitimate interests in responding to support and protecting services, or compliance with legal obligations. We cannot remotely access or erase photographs that are stored only on your device.'
      ] },
      { id: 'children', title: 'Children’s privacy', paragraphs: [
        'We do not knowingly collect personal information from children under 13 through support communications. The app does not create child profiles or use advertising or analytics tracking. If you believe a child has sent personal information to us, contact Jocelyn so we can review it and delete it where required. Device access and purchases should be managed by a parent or guardian when appropriate.'
      ] },
      { id: 'services', title: 'Third-party services', paragraphs: [
        'Google Play Billing, Android backup, your photo backup service, selected sharing apps, GitHub Pages and your email service may handle information as described above. Their practices are governed by their respective privacy policies. Review Google’s policy for Google Play, Google account and applicable Google services, and GitHub’s statement for this website.'
      ] },
      { id: 'changes', title: 'Policy updates', paragraphs: [
        'We will update this page when the app or our data practices change and revise the date above. If a change requires additional notice or consent, we will provide it before the relevant new processing begins. The English and Chinese versions describe the same practices.'
      ] },
      { id: 'contact', title: 'Contact us', paragraphs: [
        'For privacy questions, requests about information we hold, or deletion requests, contact Jocelyn. Please mention Memory Camera and describe your request. You do not need to send a photograph to ask a privacy question.'
      ] },
    ],
  },
  zh: {
    title: '隐私政策', lead: '照片承载着你的私人回忆。这里说明 Memory Camera 如何处理这些照片，以及你可以如何管理自己的信息。',
    updated: '生效及最后更新日期：', date: '2026 年 9 月 7 日', summaryLabel: '隐私概览',
    summary: ['照片在设备本地处理', '无广告或统计 SDK', '无需注册 Memory Camera 账号'],
    contents: '政策目录', googleLink: 'Google 隐私政策', githubLink: 'GitHub 隐私声明', contactLabel: '隐私联系人', back: '返回顶部',
    sections: [
      { id: 'scope', title: '政策适用范围', paragraphs: [
        '本政策说明你使用 Memory Camera（Android 包名：com.memorycamera.app）、浏览本政策页面或联系我们时，信息如何被访问、使用、保存和共享。“我们”指 Memory Camera 的提供方。隐私联系人为 Jocelyn，联系邮箱为 seansheaton@gmail.com。',
        '本应用用于拍摄或导入照片并添加复古相机效果，无需注册 Memory Camera 账号，也没有由开发者运营的照片上传或云端编辑服务。'
      ] },
      { id: 'photos', title: '相机与照片', paragraphs: [
        '相机权限用于实时取景及你主动拍摄的照片。访问前，Android 会请求相机权限。你可拒绝授权，或在 Android 设置中撤销权限；此时拍摄功能不可用，但仍可导入照片。',
        '导入通过 Android 系统照片选择器完成。应用只读取你选择的图片，以及正确显示图片所需的信息，例如方向信息，不申请整个相册的广泛访问权限。图片解码、滤镜、预览及导出都在设备上完成；我们不会将照片上传至自己的服务器，也不会将其用于训练 AI 模型。',
        '点击保存后，编辑后的 JPEG 会写入设备相册。开启“同时保存原图”时，还会保存一份原图副本。应用不申请定位、麦克风、通讯录或电话权限，也不会在导出照片中添加 GPS 位置信息。'
      ] },
      { id: 'settings', title: '设置与本地存储', paragraphs: [
        '应用在设备上保存首次使用状态、所选年代、日期印记、水印、保存原图、快门声、触感反馈及 Pro 解锁状态等偏好，用于提供你选择的功能。拍摄和分享产生的临时图片也可能存放在应用缓存中。',
        '本应用已开启 Android 系统备份。根据设备及备份设置，Android 或设备服务商可能备份或迁移应用设置。你启用的相册或云照片服务也可能单独同步已保存照片。这些服务由你在相应设备或服务设置中管理，并非 Memory Camera 运营的上传服务。'
      ] },
      { id: 'purchases', title: 'Google Play 购买', paragraphs: [
        '可选的 Pro 内购使用 Google Play Billing。应用会与 Google Play 通信以获取商品及价格、查询或恢复已购权益，并确认购买。应用处理 Google Play 返回的商品标识、购买状态、购买令牌等信息，并在本地保存 Pro 权益状态。',
        '付款资料及交易所用的 Google 账号由 Google 处理，Memory Camera 不会收到完整银行卡资料。Google 可能通过商家工具向我们提供订单信息，以便处理购买支持或退款。Google 根据其自身政策处理购买、账号、设备和服务信息。'
      ] },
      { id: 'sharing', title: '共享与披露', paragraphs: [
        '只有你主动选择分享时，应用才会创建临时图片，并通过 Android 分享功能向你选定的应用授予该图片的访问权限。接收方对图片的处理适用其自身隐私政策。我们不会自动将照片发送给其他应用。',
        '我们不出售个人信息，也不将其用于定向广告。当前应用未接入广告 SDK、第三方统计 SDK 或由开发者运营的远程崩溃报告 SDK。Google Play 会处理购买所需的信息；你选择的分享或备份服务会处理相应信息；你联系我们时，邮件服务商会处理邮件。',
        '在适用法律、有效法律请求要求下，或为保护用户权利及服务安全确有必要时，我们可能披露实际持有的信息。这并不意味着我们能访问仅保存在你设备上的照片。'
      ] },
      { id: 'support', title: '联系支持与浏览网页', paragraphs: [
        '你发送邮件时，我们会收到你的邮箱地址、邮件内容，以及你主动提供的附件或其他信息。这些信息用于答复、处理请求及保留必要的支持记录。请仅提供处理请求所需的信息。',
        '本政策通过 GitHub Pages 托管。GitHub 会为提供网页及保障安全处理访问者 IP 地址等技术信息。本页面不添加广告追踪器、统计脚本或非必要 Cookie。GitHub 及邮件服务商可能在你所在国家以外处理信息，并适用其相应保障措施和政策。'
      ] },
      { id: 'retention', title: '保存期限与删除', paragraphs: [
        '已保存的照片会保留在设备相册中，直到你主动删除。卸载 Memory Camera 不会删除已导出的照片。请通过相册或文件管理器删除，并清空“最近删除”等目录；如存在云端副本，还需在相应照片服务中管理。',
        '本地设置通常保存至你清除应用数据或卸载应用，但系统备份可能在之后恢复这些设置。临时缓存可能保留至应用、Android 或你将其清理。在 Android 设置中进入“应用 → Memory Camera → 存储”（名称因设备而异）：清除缓存可移除临时文件，清除存储空间或数据可重置设置和应用私有文件。系统备份需通过设备备份服务管理或删除。',
        '支持邮件仅在处理请求、必要跟进，或履行适用法律义务、解决争议所合理需要的期间内保留。你可通过邮件申请删除；依法必须保留的部分会仅用于该目的，并在保留义务结束后移除。',
        'Google Play 交易记录的保存期限由 Google 管理，网页访问日志的保存期限由 GitHub 管理。清除应用数据不会删除购买历史，也不会撤销已完成的购买。请通过相应服务商管理其持有的记录。本应用没有需要注销的 Memory Camera 账号。'
      ] },
      { id: 'security', title: '信息安全', paragraphs: [
        '我们通过本地图片处理减少远程处理。应用使用 Android 私有存储保存偏好与缓存，使用运行时相机授权，并在分享时授予临时文件访问权限。已导出图片保存在你控制的系统相册中。',
        '本政策网页通过 HTTPS 提供，付款由 Google Play 处理。对支持信息的访问限于处理请求所需的范围。任何存储或传输方式都无法保证绝对安全；设备锁屏、已安装应用、分享选择与备份设置也会影响照片安全。'
      ] },
      { id: 'choices', title: '你的选择与权利', paragraphs: [
        '你可以撤销相机权限、选择导入图片、决定是否保存或分享、管理备份，并按上文删除本地信息。当前应用没有接入广告或统计 SDK，因此无需额外退出此类跟踪。',
        '根据所在地法律，你可能享有查阅、更正、删除、获取个人信息副本、反对或限制处理，以及在基于同意处理时撤回同意等权利。请联系 Jocelyn 行使相关权利；我们仅会索取核实和处理请求所必要的信息。你也可以向当地数据保护监管机构投诉。',
        '在适用情况下，信息处理依据包括提供你请求的功能或支持、法律要求时取得的同意、答复支持和保护服务的合法利益，以及履行法律义务。我们无法远程访问或删除仅存于你设备的照片。'
      ] },
      { id: 'children', title: '儿童隐私', paragraphs: [
        '我们不会通过支持邮件明知地收集未满 13 周岁儿童的个人信息。应用不建立儿童用户档案，也不使用广告或统计追踪。若你认为儿童已向我们发送个人信息，请联系 Jocelyn，以便我们核实并依法删除。必要时，设备使用和购买应由家长或监护人管理。'
      ] },
      { id: 'services', title: '第三方服务', paragraphs: [
        'Google Play Billing、Android 备份、你使用的照片备份服务、所选分享应用、GitHub Pages 及邮件服务，可能按上文说明处理信息。其处理方式适用各自隐私政策。有关 Google Play、Google 账号及相关 Google 服务，请阅读 Google 隐私政策；有关本网页托管，请阅读 GitHub 隐私声明。'
      ] },
      { id: 'changes', title: '政策更新', paragraphs: [
        '应用功能或数据处理方式变化时，我们会更新本页面及上方日期。若变化需要额外告知或同意，我们会在相关新处理开始前完成。中英文版本说明相同的数据处理方式。'
      ] },
      { id: 'contact', title: '联系我们', paragraphs: [
        '如有隐私问题，或希望查询、删除我们持有的信息，请联系 Jocelyn，并注明 Memory Camera 及你的具体请求。咨询隐私问题不需要发送照片。'
      ] },
    ],
  },
};
