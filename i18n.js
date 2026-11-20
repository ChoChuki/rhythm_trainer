/* Rhythm Lab v1.1 localization. All strings are bundled for fully offline use. */
(function(){
  "use strict";
  const languages = ["zh-CN","en","de","it","fr","ja","el","zh-TW"];
  const translations = {
  "title": {
    "zh-CN": "节奏训练室",
    "en": "Rhythm Lab",
    "de": "Rhythmuslabor",
    "it": "Laboratorio del ritmo",
    "fr": "Atelier du rythme",
    "ja": "リズム練習室",
    "el": "Εργαστήριο Ρυθμού",
    "zh-TW": "節奏訓練室"
  },
  "tagline": {
    "zh-CN": "从听见拍子，到拥有自己的时间感。",
    "en": "Hear the beat. Make time your own.",
    "de": "Den Puls hören. Den Takt selbst halten.",
    "it": "Ascolta il battito. Trova il tuo tempo.",
    "fr": "Écoutez la pulsation. Gardez votre propre tempo.",
    "ja": "拍を聴き、自分のリズム感を育てよう。",
    "el": "Άκου τον παλμό. Κράτησε τον δικό σου χρόνο.",
    "zh-TW": "從聽見拍子，到擁有自己的時間感。"
  },
  "modeTitle": {
    "zh-CN": "训练模式",
    "en": "Training modes",
    "de": "Trainingsmodi",
    "it": "Modalità di allenamento",
    "fr": "Modes d’entraînement",
    "ja": "練習モード",
    "el": "Λειτουργίες εξάσκησης",
    "zh-TW": "訓練模式"
  },
  "modePulse": {
    "zh-CN": "① 跟随节拍",
    "en": "① Follow the beat",
    "de": "① Im Takt mitspielen",
    "it": "① Segui il battito",
    "fr": "① Suivre la pulsation",
    "ja": "① 拍に合わせる",
    "el": "① Ακολούθησε τον παλμό",
    "zh-TW": "① 跟隨節拍"
  },
  "modeSilent": {
    "zh-CN": "② 静音保持",
    "en": "② Silent continuation",
    "de": "② Stille Takte",
    "it": "② Mantieni il ritmo in silenzio",
    "fr": "② Maintien sans métronome",
    "ja": "② 無音で拍を保つ",
    "el": "② Συνέχισε σιωπηλά",
    "zh-TW": "② 靜音保持"
  },
  "modeReading": {
    "zh-CN": "③ 节奏视读",
    "en": "③ Rhythm sight-reading",
    "de": "③ Rhythmus vom Blatt",
    "it": "③ Lettura ritmica a prima vista",
    "fr": "③ Lecture rythmique",
    "ja": "③ リズム初見",
    "el": "③ Ανάγνωση ρυθμού",
    "zh-TW": "③ 節奏視讀"
  },
  "introPulse": {
    "zh-CN": "先听一小节预备拍；随后连续四小节跟着节拍点击。结束后查看命中率和时间误差。",
    "en": "Hear one count-in bar, then tap with the beat for four bars. Review accuracy and timing afterward.",
    "de": "Höre einen Takt zum Einzählen und tippe vier Takte zum Puls. Danach siehst du Trefferquote und Timing.",
    "it": "Ascolta una battuta di preparazione, poi segui il battito per quattro battute. Al termine vedrai precisione e scarti.",
    "fr": "Écoutez une mesure de préparation, puis tapez quatre mesures au rythme. Consultez ensuite les résultats.",
    "ja": "1小節のカウントインを聴き、4小節にわたって拍に合わせてタップします。終了後に正答率と時間誤差を確認します。",
    "el": "Άκου ένα μέτρο προετοιμασίας και χτύπα στον παλμό για τέσσερα μέτρα. Μετά δες την ακρίβεια και το χρονικό σφάλμα.",
    "zh-TW": "先聽一小節預備拍；隨後連續四小節跟著節拍點擊。結束後查看命中率和時間誤差。"
  },
  "introSilent": {
    "zh-CN": "先听一小节预备拍，再跟随两小节；随后两小节完全静音，继续点击，最后一小节恢复声音。只评分静音段。",
    "en": "One count-in bar, two guided bars, two silent bars, then one bar of sound again. Only silent bars are scored.",
    "de": "Ein Takt zum Einzählen, zwei mit Klick, zwei völlig stille Takte und ein Takt mit Klick zum Schluss. Bewertet werden nur die stillen Takte.",
    "it": "Una battuta di preparazione, due con guida, due in silenzio e una con suono ripristinato. Si valutano solo quelle silenziose.",
    "fr": "Une mesure de préparation, deux guidées, deux silencieuses, puis une avec le son. Seules les mesures silencieuses sont évaluées.",
    "ja": "1小節のカウントイン、2小節のガイド音の後、2小節は完全に無音でタップし、最後に音が戻ります。採点は無音区間のみです。",
    "el": "Ένα μέτρο προετοιμασίας, δύο με ήχο, δύο χωρίς ήχο και ένα ξανά με ήχο. Βαθμολογούνται μόνο τα σιωπηλά μέτρα.",
    "zh-TW": "先聽一小節預備拍，再跟隨兩小節；隨後兩小節完全靜音，繼續點擊，最後一小節恢復聲音。只評分靜音段。"
  },
  "introReading": {
    "zh-CN": "先观察两小节节奏谱，听完一小节预备拍后，根据谱面自行点击。正式练习时没有节拍声或移动提示。",
    "en": "Study two bars of notation. After one count-in bar, tap the written rhythm without sound or moving cues.",
    "de": "Lies zwei notierte Takte. Tippe den Rhythmus nach einem Takt zum Einzählen ohne Klick oder bewegte Hinweise.",
    "it": "Osserva due battute di notazione. Dopo una battuta di preparazione, esegui il ritmo senza guida sonora o visiva.",
    "fr": "Lisez deux mesures de partition. Après une mesure de préparation, tapez le rythme sans clic ni indice animé.",
    "ja": "2小節の楽譜を読み、1小節のカウントイン後に譜面どおりにタップします。練習中は音や動くヒントはありません。",
    "el": "Διάβασε δύο μέτρα παρτιτούρας. Μετά από ένα μέτρο προετοιμασίας, χτύπα τον ρυθμό χωρίς ήχο ή οπτική καθοδήγηση.",
    "zh-TW": "先觀察兩小節節奏譜，聽完一小節預備拍後，根據譜面自行點擊。正式練習時沒有節拍聲或移動提示。"
  },
  "settings": {
    "zh-CN": "训练设置",
    "en": "Training settings",
    "de": "Trainingseinstellungen",
    "it": "Impostazioni",
    "fr": "Réglages",
    "ja": "練習設定",
    "el": "Ρυθμίσεις",
    "zh-TW": "訓練設定"
  },
  "tempo": {
    "zh-CN": "速度 BPM",
    "en": "Tempo (BPM)",
    "de": "Tempo (BPM)",
    "it": "Tempo (BPM)",
    "fr": "Tempo (BPM)",
    "ja": "テンポ（BPM）",
    "el": "Τέμπο (BPM)",
    "zh-TW": "速度 BPM"
  },
  "perMinute": {
    "zh-CN": "每分钟拍数",
    "en": "beats per minute",
    "de": "Schläge/Minute",
    "it": "battiti al minuto",
    "fr": "battements/minute",
    "ja": "1分間の拍数",
    "el": "χτύποι ανά λεπτό",
    "zh-TW": "每分鐘拍數"
  },
  "meter": {
    "zh-CN": "拍号",
    "en": "Time signature",
    "de": "Taktart",
    "it": "Indicazione di tempo",
    "fr": "Chiffrage de mesure",
    "ja": "拍子記号",
    "el": "Μέτρο",
    "zh-TW": "拍號"
  },
  "difficulty": {
    "zh-CN": "节奏难度",
    "en": "Rhythm difficulty",
    "de": "Schwierigkeitsgrad",
    "it": "Difficoltà ritmica",
    "fr": "Difficulté rythmique",
    "ja": "リズムの難易度",
    "el": "Δυσκολία ρυθμού",
    "zh-TW": "節奏難度"
  },
  "basic": {
    "zh-CN": "基础 · 四分/八分/二分",
    "en": "Basic · quarter/eighth/half notes",
    "de": "Basis · Viertel/Achtel/Halbe",
    "it": "Base · semiminime/crome/minime",
    "fr": "Débutant · noires/croches/blanches",
    "ja": "基本 · 4分/8分/2分音符",
    "el": "Βασικό · τέταρτα/όγδοα/μισά",
    "zh-TW": "基礎 · 四分/八分/二分"
  },
  "advanced": {
    "zh-CN": "进阶 · 附点/切分",
    "en": "Advanced · dotted/syncopated",
    "de": "Fortgeschritten · punktiert/synkopiert",
    "it": "Avanzato · puntati/sincopi",
    "fr": "Avancé · pointés/syncopes",
    "ja": "応用 · 付点/シンコペーション",
    "el": "Προχωρημένο · παρεστιγμένα/συγκοπές",
    "zh-TW": "進階 · 附點/切分"
  },
  "fineTempo": {
    "zh-CN": "细调速度",
    "en": "Fine-tune tempo",
    "de": "Tempo fein einstellen",
    "it": "Regola il tempo",
    "fr": "Ajuster le tempo",
    "ja": "テンポの微調整",
    "el": "Λεπτή ρύθμιση τέμπο",
    "zh-TW": "細調速度"
  },
  "hintSettings": {
    "zh-CN": "声音仅用于预备与引导；建议先用 60–80 BPM。",
    "en": "Sound is used for count-in and guidance. Start at 60–80 BPM.",
    "de": "Klicks dienen zum Einzählen und zur Orientierung. Beginne mit 60–80 BPM.",
    "it": "Il suono serve per la preparazione e la guida. Inizia a 60–80 BPM.",
    "fr": "Le son sert au décompte et au guidage. Commencez à 60–80 BPM.",
    "ja": "音はカウントインとガイドに使います。最初は60～80 BPMを推奨します。",
    "el": "Ο ήχος χρησιμοποιείται για προετοιμασία και καθοδήγηση. Ξεκίνα στα 60–80 BPM.",
    "zh-TW": "聲音僅用於預備與引導；建議先用 60–80 BPM。"
  },
  "hintSettingsReading": {
    "zh-CN": "基础：四分、八分、二分音符及四分休止；进阶：附点、八分休止与切分。",
    "en": "Basic: quarter, eighth, half notes and quarter rests. Advanced: dotted notes, eighth rests, syncopation.",
    "de": "Basis: Viertel-, Achtel-, halbe Noten und Viertelpausen. Fortgeschritten: Punktierungen, Achtelpausen, Synkopen.",
    "it": "Base: semiminime, crome, minime e pause da un quarto. Avanzato: puntati, pause da un ottavo e sincopi.",
    "fr": "Débutant : noires, croches, blanches et soupirs. Avancé : pointés, demi-soupirs et syncopes.",
    "ja": "基本：4分・8分・2分音符と4分休符。応用：付点、8分休符、シンコペーション。",
    "el": "Βασικό: τέταρτα, όγδοα, μισά και παύσεις τετάρτου. Προχωρημένο: παρεστιγμένα, παύσεις ογδόου και συγκοπές.",
    "zh-TW": "基礎：四分、八分、二分音符及四分休止；進階：附點、八分休止與切分。"
  },
  "start": {
    "zh-CN": "▶ 开始训练",
    "en": "▶ Start training",
    "de": "▶ Training starten",
    "it": "▶ Inizia",
    "fr": "▶ Commencer",
    "ja": "▶ 練習開始",
    "el": "▶ Έναρξη εξάσκησης",
    "zh-TW": "▶ 開始訓練"
  },
  "stop": {
    "zh-CN": "■ 停止",
    "en": "■ Stop",
    "de": "■ Stopp",
    "it": "■ Ferma",
    "fr": "■ Arrêter",
    "ja": "■ 停止",
    "el": "■ Διακοπή",
    "zh-TW": "■ 停止"
  },
  "newPattern": {
    "zh-CN": "↻ 换一组节奏",
    "en": "↻ New rhythm",
    "de": "↻ Neuer Rhythmus",
    "it": "↻ Nuovo ritmo",
    "fr": "↻ Nouveau rythme",
    "ja": "↻ 新しいリズム",
    "el": "↻ Νέος ρυθμός",
    "zh-TW": "↻ 換一組節奏"
  },
  "calibrate": {
    "zh-CN": "校准点击偏移",
    "en": "Calibrate tap offset",
    "de": "Tippversatz kalibrieren",
    "it": "Calibra ritardo del tocco",
    "fr": "Étalonner le décalage",
    "ja": "タップのずれを校正",
    "el": "Βαθμονόμηση χρονικής απόκλισης",
    "zh-TW": "校準點擊偏移"
  },
  "preview": {
    "zh-CN": "试听节拍",
    "en": "Test beat sound",
    "de": "Klick vorhören",
    "it": "Prova il suono",
    "fr": "Tester le clic",
    "ja": "拍の音を試聴",
    "el": "Δοκιμή ήχου παλμού",
    "zh-TW": "試聽節拍"
  },
  "practice": {
    "zh-CN": "训练区",
    "en": "Practice area",
    "de": "Übungsbereich",
    "it": "Area di esercizio",
    "fr": "Zone d’exercice",
    "ja": "練習エリア",
    "el": "Περιοχή εξάσκησης",
    "zh-TW": "訓練區"
  },
  "ready": {
    "zh-CN": "准备就绪 · 点击“开始训练”",
    "en": "Ready · press “Start training”",
    "de": "Bereit · „Training starten“ drücken",
    "it": "Pronto · premi «Inizia»",
    "fr": "Prêt · appuyez sur « Commencer »",
    "ja": "準備完了 ·「練習開始」を押してください",
    "el": "Έτοιμο · πάτησε «Έναρξη εξάσκησης»",
    "zh-TW": "準備就緒 · 點擊「開始訓練」"
  },
  "waiting": {
    "zh-CN": "等待开始",
    "en": "Not started",
    "de": "Warten auf Start",
    "it": "In attesa",
    "fr": "En attente",
    "ja": "開始待ち",
    "el": "Αναμονή",
    "zh-TW": "等待開始"
  },
  "initialPhase": {
    "zh-CN": "音频会在开始后播放",
    "en": "Audio starts with the exercise",
    "de": "Der Ton beginnt beim Start",
    "it": "L'audio partirà all'inizio",
    "fr": "Le son débutera au lancement",
    "ja": "開始すると音が鳴ります",
    "el": "Ο ήχος ξεκινά με την άσκηση",
    "zh-TW": "音訊會在開始後播放"
  },
  "spaceTouch": {
    "zh-CN": "空格键 / 触屏",
    "en": "Space / touch",
    "de": "Leertaste / Touch",
    "it": "Spazio / tocco",
    "fr": "Espace / tactile",
    "ja": "スペースキー / タッチ",
    "el": "Κενό / αφή",
    "zh-TW": "空白鍵 / 觸屏"
  },
  "padBig": {
    "zh-CN": "点击这里打拍子",
    "en": "Tap here to keep time",
    "de": "Hier im Takt tippen",
    "it": "Tocca qui a tempo",
    "fr": "Tapez ici en rythme",
    "ja": "ここをタップして拍を刻む",
    "el": "Χτύπα εδώ στον ρυθμό",
    "zh-TW": "點擊這裡打拍子"
  },
  "padSmall": {
    "zh-CN": "手机触摸 · 电脑按空格键",
    "en": "Touch on phone · Space on computer",
    "de": "Touch am Handy · Leertaste am PC",
    "it": "Tocca sul telefono · Spazio sul computer",
    "fr": "Touchez sur téléphone · Espace sur ordinateur",
    "ja": "スマホはタップ · PCはスペースキー",
    "el": "Άγγιγμα στο κινητό · Κενό στον υπολογιστή",
    "zh-TW": "手機觸控 · 電腦按空白鍵"
  },
  "modeHintPulse": {
    "zh-CN": "训练期间不要切换到其他应用；iPhone 请保持屏幕点亮。",
    "en": "Keep the page in the foreground and your iPhone screen awake during training.",
    "de": "Bleibe während der Übung auf dieser Seite; lass das iPhone-Display eingeschaltet.",
    "it": "Non cambiare app durante l'esercizio; tieni acceso lo schermo dell'iPhone.",
    "fr": "Ne changez pas d’application pendant l’exercice ; gardez l’écran de l’iPhone allumé.",
    "ja": "練習中はほかのアプリに切り替えず、iPhoneの画面を点灯させてください。",
    "el": "Μην αλλάζεις εφαρμογή κατά την άσκηση· κράτησε ενεργή την οθόνη του iPhone.",
    "zh-TW": "訓練期間不要切換到其他應用；iPhone 請保持螢幕點亮。"
  },
  "modeHintSilent": {
    "zh-CN": "静音段不显示节拍位置或倒计时，防止视觉提示代替内部节拍。",
    "en": "Silent bars show no beat position or countdown, to avoid visual cues.",
    "de": "In stillen Takten erscheinen weder Schlagposition noch Countdown, damit keine visuellen Hinweise helfen.",
    "it": "Nelle battute mute non appaiono posizioni o conto alla rovescia, per evitare indizi visivi.",
    "fr": "Dans les mesures silencieuses, aucun repère ni décompte ne s’affiche pour éviter les indices visuels.",
    "ja": "無音区間では拍位置やカウントダウンを表示せず、視覚的なヒントを防ぎます。",
    "el": "Στα σιωπηλά μέτρα δεν εμφανίζονται ενδείξεις παλμού ή αντίστροφη μέτρηση.",
    "zh-TW": "靜音段不顯示節拍位置或倒數計時，防止視覺提示代替內部節拍。"
  },
  "modeHintReading": {
    "zh-CN": "音符均记在五线谱中间的 B 线上，只考节奏。休止符期间不要点击。",
    "en": "All notes are on the middle B line; only rhythm matters. Do not tap during rests.",
    "de": "Alle Noten stehen auf der mittleren H-Linie; nur der Rhythmus zählt. In Pausen nicht tippen.",
    "it": "Tutte le note sono sulla linea centrale del Si; conta solo il ritmo. Non toccare durante le pause.",
    "fr": "Toutes les notes sont sur la ligne centrale du si ; seul le rythme compte. Ne tapez pas pendant les silences.",
    "ja": "音符はすべて五線譜中央のBの線上にあり、リズムだけを採点します。休符ではタップしないでください。",
    "el": "Όλες οι νότες είναι στη μεσαία γραμμή (σι)· αξιολογείται μόνο ο ρυθμός. Μην πατάς στις παύσεις.",
    "zh-TW": "音符均記在五線譜中間的 B 線上，只考節奏。休止符期間不要點擊。"
  },
  "results": {
    "zh-CN": "本次结果",
    "en": "Session results",
    "de": "Ergebnis",
    "it": "Risultati",
    "fr": "Résultats",
    "ja": "今回の結果",
    "el": "Αποτελέσματα",
    "zh-TW": "本次結果"
  },
  "history": {
    "zh-CN": "练习记录",
    "en": "Practice history",
    "de": "Übungsverlauf",
    "it": "Cronologia esercizi",
    "fr": "Historique des séances",
    "ja": "練習履歴",
    "el": "Ιστορικό εξάσκησης",
    "zh-TW": "練習記錄"
  },
  "export": {
    "zh-CN": "导出 CSV",
    "en": "Export CSV",
    "de": "CSV exportieren",
    "it": "Esporta CSV",
    "fr": "Exporter CSV",
    "ja": "CSVを書き出す",
    "el": "Εξαγωγή CSV",
    "zh-TW": "匯出 CSV"
  },
  "clear": {
    "zh-CN": "清除记录",
    "en": "Clear history",
    "de": "Verlauf löschen",
    "it": "Cancella cronologia",
    "fr": "Effacer l’historique",
    "ja": "履歴を消去",
    "el": "Διαγραφή ιστορικού",
    "zh-TW": "清除記錄"
  },
  "privacy": {
    "zh-CN": "记录只保存在当前浏览器，不会上传。Safari 无痕浏览或清除网站数据后可能丢失；需要长期保存请定期导出 CSV。",
    "en": "History stays in this browser and is never uploaded. Private browsing or clearing site data can erase it; export CSV regularly for backup.",
    "de": "Daten bleiben nur in diesem Browser und werden nicht hochgeladen. Privates Surfen oder das Löschen von Websitedaten kann sie entfernen; exportiere regelmäßig CSV.",
    "it": "I dati restano nel browser, senza caricamenti. La navigazione privata o la cancellazione dei dati del sito li può eliminare; esporta periodicamente un CSV.",
    "fr": "Les données restent dans ce navigateur et ne sont jamais envoyées. La navigation privée ou l’effacement des données peut les supprimer ; exportez régulièrement un CSV.",
    "ja": "履歴はこのブラウザー内だけに保存され、送信されません。プライベートブラウズやサイトデータの消去で失われる場合があるため、定期的にCSVを保存してください。",
    "el": "Το ιστορικό μένει μόνο σε αυτό το πρόγραμμα περιήγησης. Η ιδιωτική περιήγηση ή η διαγραφή δεδομένων μπορεί να το σβήσει· κάνε τακτικά εξαγωγή CSV.",
    "zh-TW": "記錄只保存在目前瀏覽器，不會上傳。Safari 私密瀏覽或清除網站資料後可能遺失；需要長期保存請定期匯出 CSV。"
  },
  "footer": {
    "zh-CN": "Rhythm Lab v1.1 · 离线可用 · 仅供日常节奏练习，不代替专业演奏时值测量",
    "en": "Rhythm Lab v1.1 · Works offline · For daily rhythm practice, not precision performance measurement",
    "de": "Rhythm Lab v1.1 · Offline nutzbar · Zum täglichen Üben, keine professionelle Zeitmessung",
    "it": "Rhythm Lab v1.1 · Offline · Per esercizio quotidiano, non per misurazioni professionali",
    "fr": "Rhythm Lab v1.1 · Hors ligne · Pour l’entraînement quotidien, pas pour la mesure professionnelle",
    "ja": "Rhythm Lab v1.1 · オフライン対応 · 日常練習用であり、専門的な演奏時間測定用ではありません",
    "el": "Rhythm Lab v1.1 · Εκτός σύνδεσης · Για καθημερινή άσκηση, όχι για επαγγελματική μέτρηση",
    "zh-TW": "Rhythm Lab v1.1 · 可離線使用 · 僅供日常節奏練習，不代替專業演奏時值測量"
  },
  "sessionsStat": {
    "zh-CN": "已完成 {n} 次",
    "en": "{n} sessions completed",
    "de": "{n} Übungen abgeschlossen",
    "it": "{n} esercizi completati",
    "fr": "{n} séances terminées",
    "ja": "完了 {n} 回",
    "el": "{n} ολοκληρωμένες ασκήσεις",
    "zh-TW": "已完成 {n} 次"
  },
  "recentStat": {
    "zh-CN": "最近命中率 {n}",
    "en": "Latest hit rate {n}",
    "de": "Letzte Trefferquote {n}",
    "it": "Ultima percentuale {n}",
    "fr": "Dernier taux de réussite {n}",
    "ja": "直近の的中率 {n}",
    "el": "Πρόσφατη επιτυχία {n}",
    "zh-TW": "最近命中率 {n}"
  },
  "calStat": {
    "zh-CN": "校准偏移 {n}",
    "en": "Calibrated offset {n}",
    "de": "Kalibrierter Versatz {n}",
    "it": "Scarto calibrato {n}",
    "fr": "Décalage étalonné {n}",
    "ja": "校正オフセット {n}",
    "el": "Απόκλιση βαθμονόμησης {n}",
    "zh-TW": "校準偏移 {n}"
  },
  "notSet": {
    "zh-CN": "未设置",
    "en": "not set",
    "de": "nicht eingestellt",
    "it": "non impostato",
    "fr": "non défini",
    "ja": "未設定",
    "el": "δεν ορίστηκε",
    "zh-TW": "未設定"
  },
  "measureHead": {
    "zh-CN": "第 {n} 小节 · {m}/4",
    "en": "Bar {n} · {m}/4",
    "de": "Takt {n} · {m}/4",
    "it": "Battuta {n} · {m}/4",
    "fr": "Mesure {n} · {m}/4",
    "ja": "第{n}小節 · {m}/4",
    "el": "Μέτρο {n} · {m}/4",
    "zh-TW": "第 {n} 小節 · {m}/4"
  },
  "beatsPerBar": {
    "zh-CN": "每小节 {n} 拍",
    "en": "{n} beats per bar",
    "de": "{n} Schläge pro Takt",
    "it": "{n} battiti per battuta",
    "fr": "{n} temps par mesure",
    "ja": "1小節 {n} 拍",
    "el": "{n} χτύποι ανά μέτρο",
    "zh-TW": "每小節 {n} 拍"
  },
  "beatUnits": {
    "zh-CN": "时值（拍）",
    "en": "Duration (beats)",
    "de": "Notenwert (Schläge)",
    "it": "Durata (battiti)",
    "fr": "Durée (temps)",
    "ja": "音価（拍）",
    "el": "Διάρκεια (χτύποι)",
    "zh-TW": "時值（拍）"
  },
  "restShort": {
    "zh-CN": "休",
    "en": "R",
    "de": "P",
    "it": "P",
    "fr": "S",
    "ja": "休",
    "el": "Π",
    "zh-TW": "休"
  },
  "quarter": {
    "zh-CN": "四分音符",
    "en": "quarter note",
    "de": "Viertelnote",
    "it": "semiminima",
    "fr": "noire",
    "ja": "4分音符",
    "el": "τέταρτο",
    "zh-TW": "四分音符"
  },
  "half": {
    "zh-CN": "二分音符",
    "en": "half note",
    "de": "halbe Note",
    "it": "minima",
    "fr": "blanche",
    "ja": "2分音符",
    "el": "μισό",
    "zh-TW": "二分音符"
  },
  "eighth": {
    "zh-CN": "八分音符",
    "en": "eighth note",
    "de": "Achtelnote",
    "it": "croma",
    "fr": "croche",
    "ja": "8分音符",
    "el": "όγδοο",
    "zh-TW": "八分音符"
  },
  "dotted": {
    "zh-CN": "附点四分音符",
    "en": "dotted quarter note",
    "de": "punktierte Viertelnote",
    "it": "semiminima puntata",
    "fr": "noire pointée",
    "ja": "付点4分音符",
    "el": "παρεστιγμένο τέταρτο",
    "zh-TW": "附點四分音符"
  },
  "restQuarter": {
    "zh-CN": "四分休止符",
    "en": "quarter rest",
    "de": "Viertelpause",
    "it": "pausa da un quarto",
    "fr": "soupir",
    "ja": "4分休符",
    "el": "παύση τετάρτου",
    "zh-TW": "四分休止符"
  },
  "restEighth": {
    "zh-CN": "八分休止符",
    "en": "eighth rest",
    "de": "Achtelpause",
    "it": "pausa da un ottavo",
    "fr": "demi-soupir",
    "ja": "8分休符",
    "el": "παύση ογδόου",
    "zh-TW": "八分休止符"
  },
  "measureAria": {
    "zh-CN": "第{n}小节：{notes}",
    "en": "Bar {n}: {notes}",
    "de": "Takt {n}: {notes}",
    "it": "Battuta {n}: {notes}",
    "fr": "Mesure {n} : {notes}",
    "ja": "第{n}小節：{notes}",
    "el": "Μέτρο {n}: {notes}",
    "zh-TW": "第{n}小節：{notes}"
  },
  "phasePulseLead": {
    "zh-CN": "预备拍 · 跟着声音准备",
    "en": "Count-in · listen and prepare",
    "de": "Einzählen · zuhören",
    "it": "Preparazione · ascolta",
    "fr": "Préparation · écoutez",
    "ja": "カウントイン · 音を聴く",
    "el": "Προετοιμασία · άκου",
    "zh-TW": "預備拍 · 跟著聲音準備"
  },
  "phasePulseActive": {
    "zh-CN": "跟随节拍 · 点击打拍子",
    "en": "Follow the beat · tap along",
    "de": "Im Takt · mittippen",
    "it": "Segui il battito · tocca",
    "fr": "Suivez la pulsation · tapez",
    "ja": "拍に合わせてタップ",
    "el": "Ακολούθησε τον παλμό · χτύπα",
    "zh-TW": "跟隨節拍 · 點擊打拍子"
  },
  "phaseSilentLead": {
    "zh-CN": "预备拍 · 听节拍",
    "en": "Count-in · listen to beat",
    "de": "Einzählen · Klick hören",
    "it": "Preparazione · ascolta il battito",
    "fr": "Préparation · écoutez",
    "ja": "カウントイン · 拍を聴く",
    "el": "Προετοιμασία · άκου τον παλμό",
    "zh-TW": "預備拍 · 聽節拍"
  },
  "phaseSilentGuide": {
    "zh-CN": "有声引导 · 跟随两小节",
    "en": "Guided · tap for two bars",
    "de": "Mit Klick · zwei Takte",
    "it": "Guida sonora · due battute",
    "fr": "Guidage sonore · deux mesures",
    "ja": "ガイド音あり · 2小節",
    "el": "Με ήχο · δύο μέτρα",
    "zh-TW": "有聲引導 · 跟隨兩小節"
  },
  "phaseSilentMute": {
    "zh-CN": "静音保持 · 完全没有提示",
    "en": "Silent continuation · no cues",
    "de": "Stille Takte · keine Hinweise",
    "it": "Continua in silenzio · nessun aiuto",
    "fr": "Maintien silencieux · sans indice",
    "ja": "無音で拍を維持 · ヒントなし",
    "el": "Συνέχισε σιωπηλά · χωρίς βοήθεια",
    "zh-TW": "靜音保持 · 完全沒有提示"
  },
  "phaseSilentReturn": {
    "zh-CN": "声音恢复 · 对照自己的节拍",
    "en": "Sound returns · compare your timing",
    "de": "Klick zurück · Timing vergleichen",
    "it": "Il suono ritorna · confronta il tempo",
    "fr": "Le son revient · comparez",
    "ja": "音が戻る · 拍を確認",
    "el": "Ο ήχος επιστρέφει · σύγκρινε",
    "zh-TW": "聲音恢復 · 對照自己的節拍"
  },
  "phaseReadingLead": {
    "zh-CN": "预备拍 · 看谱准备",
    "en": "Count-in · read the score",
    "de": "Einzählen · Noten lesen",
    "it": "Preparazione · leggi la partitura",
    "fr": "Préparation · lisez la partition",
    "ja": "カウントイン · 楽譜を読む",
    "el": "Προετοιμασία · διάβασε την παρτιτούρα",
    "zh-TW": "預備拍 · 看譜準備"
  },
  "phaseReadingActive": {
    "zh-CN": "按谱点击 · 没有节拍提示",
    "en": "Read and tap · no beat cues",
    "de": "Vom Blatt tippen · kein Klick",
    "it": "Leggi e tocca · senza guida",
    "fr": "Lecture et frappe · sans repère",
    "ja": "楽譜どおりにタップ · ガイドなし",
    "el": "Διάβασε και χτύπα · χωρίς οδηγό",
    "zh-TW": "按譜點擊 · 沒有節拍提示"
  },
  "phaseCalLead": {
    "zh-CN": "校准预备拍",
    "en": "Calibration count-in",
    "de": "Kalibrierung · Einzählen",
    "it": "Preparazione calibrazione",
    "fr": "Préparation de l’étalonnage",
    "ja": "校正カウントイン",
    "el": "Προετοιμασία βαθμονόμησης",
    "zh-TW": "校準預備拍"
  },
  "phaseCalActive": {
    "zh-CN": "校准中 · 随节拍稳定点击",
    "en": "Calibrating · tap steadily with the beat",
    "de": "Kalibrieren · gleichmäßig mittippen",
    "it": "Calibrazione · tocca regolarmente",
    "fr": "Étalonnage · tapez régulièrement",
    "ja": "校正中 · 拍に合わせて安定してタップ",
    "el": "Βαθμονόμηση · χτύπα σταθερά",
    "zh-TW": "校準中 · 隨節拍穩定點擊"
  },
  "aboutToStart": {
    "zh-CN": "即将开始",
    "en": "Starting soon",
    "de": "Gleich geht’s los",
    "it": "Inizio imminente",
    "fr": "Début imminent",
    "ja": "まもなく開始",
    "el": "Ξεκινά σύντομα",
    "zh-TW": "即將開始"
  },
  "preparing": {
    "zh-CN": "准备",
    "en": "Preparing",
    "de": "Bereitmachen",
    "it": "Preparazione",
    "fr": "Préparation",
    "ja": "準備",
    "el": "Προετοιμασία",
    "zh-TW": "準備"
  },
  "muteTag": {
    "zh-CN": "静音中",
    "en": "Silent",
    "de": "Stille",
    "it": "Silenzio",
    "fr": "Silence",
    "ja": "無音中",
    "el": "Σιωπή",
    "zh-TW": "靜音中"
  },
  "leadTag": {
    "zh-CN": "预备中",
    "en": "Count-in",
    "de": "Einzählen",
    "it": "Preparazione",
    "fr": "Préparation",
    "ja": "カウントイン",
    "el": "Προετοιμασία",
    "zh-TW": "預備中"
  },
  "readingTag": {
    "zh-CN": "自主视读",
    "en": "Sight-reading",
    "de": "Vom Blatt",
    "it": "Lettura a prima vista",
    "fr": "Lecture à vue",
    "ja": "初見練習",
    "el": "Ανάγνωση",
    "zh-TW": "自主視讀"
  },
  "calTag": {
    "zh-CN": "校准中",
    "en": "Calibrating",
    "de": "Kalibrierung",
    "it": "Calibrazione",
    "fr": "Étalonnage",
    "ja": "校正中",
    "el": "Βαθμονόμηση",
    "zh-TW": "校準中"
  },
  "activeTag": {
    "zh-CN": "练习中",
    "en": "Practicing",
    "de": "Übung läuft",
    "it": "In esercizio",
    "fr": "Exercice en cours",
    "ja": "練習中",
    "el": "Εξάσκηση",
    "zh-TW": "練習中"
  },
  "tapCount": {
    "zh-CN": "已击打 {n} 次",
    "en": "{n} taps",
    "de": "{n} Tippvorgänge",
    "it": "{n} tocchi",
    "fr": "{n} frappes",
    "ja": "{n} 回タップ",
    "el": "{n} χτυπήματα",
    "zh-TW": "已擊打 {n} 次"
  },
  "statusCalActive": {
    "zh-CN": "校准进行中",
    "en": "Calibration in progress",
    "de": "Kalibrierung läuft",
    "it": "Calibrazione in corso",
    "fr": "Étalonnage en cours",
    "ja": "校正中",
    "el": "Βαθμονόμηση σε εξέλιξη",
    "zh-TW": "校準進行中"
  },
  "statusActive": {
    "zh-CN": "练习进行中",
    "en": "Practice in progress",
    "de": "Übung läuft",
    "it": "Esercizio in corso",
    "fr": "Exercice en cours",
    "ja": "練習中",
    "el": "Άσκηση σε εξέλιξη",
    "zh-TW": "練習進行中"
  },
  "padActive": {
    "zh-CN": "跟随节奏点击",
    "en": "Tap with the rhythm",
    "de": "Im Rhythmus tippen",
    "it": "Tocca a ritmo",
    "fr": "Tapez en rythme",
    "ja": "リズムに合わせてタップ",
    "el": "Χτύπα στον ρυθμό",
    "zh-TW": "跟隨節奏點擊"
  },
  "padActiveSmall": {
    "zh-CN": "每次击打只记录一次",
    "en": "Each tap is recorded once",
    "de": "Jeder Tipp wird einmal gezählt",
    "it": "Ogni tocco viene registrato una sola volta",
    "fr": "Chaque frappe est comptée une fois",
    "ja": "各タップを1回だけ記録します",
    "el": "Κάθε χτύπημα καταγράφεται μία φορά",
    "zh-TW": "每次擊打只記錄一次"
  },
  "statusStopped": {
    "zh-CN": "训练已停止，未保存结果。",
    "en": "Stopped; result not saved.",
    "de": "Angehalten; Ergebnis nicht gespeichert.",
    "it": "Interrotto; risultato non salvato.",
    "fr": "Arrêté ; résultat non enregistré.",
    "ja": "停止しました。結果は保存されません。",
    "el": "Διακόπηκε· το αποτέλεσμα δεν αποθηκεύτηκε.",
    "zh-TW": "訓練已停止，未儲存結果。"
  },
  "statusDone": {
    "zh-CN": "训练完成 · 下方查看成绩",
    "en": "Completed · see results below",
    "de": "Abgeschlossen · Ergebnis unten",
    "it": "Completato · risultati sotto",
    "fr": "Terminé · résultats ci-dessous",
    "ja": "練習終了 · 下に結果を表示",
    "el": "Ολοκληρώθηκε · δες τα αποτελέσματα παρακάτω",
    "zh-TW": "訓練完成 · 下方查看成績"
  },
  "phaseDone": {
    "zh-CN": "可以调整速度，或再练习一次。",
    "en": "Adjust tempo or try again.",
    "de": "Tempo ändern oder erneut üben.",
    "it": "Regola il tempo o riprova.",
    "fr": "Changez le tempo ou recommencez.",
    "ja": "テンポを変えるか、もう一度練習できます。",
    "el": "Ρύθμισε το τέμπο ή ξαναπροσπάθησε.",
    "zh-TW": "可以調整速度，或再練習一次。"
  },
  "doneTag": {
    "zh-CN": "已完成",
    "en": "Completed",
    "de": "Fertig",
    "it": "Completato",
    "fr": "Terminé",
    "ja": "完了",
    "el": "Ολοκληρώθηκε",
    "zh-TW": "已完成"
  },
  "newRhythmStatus": {
    "zh-CN": "已生成新节奏，准备开始。",
    "en": "New rhythm generated; ready.",
    "de": "Neuer Rhythmus erstellt; bereit.",
    "it": "Nuovo ritmo generato; pronto.",
    "fr": "Nouveau rythme généré ; prêt.",
    "ja": "新しいリズムを生成しました。",
    "el": "Δημιουργήθηκε νέος ρυθμός· έτοιμο.",
    "zh-TW": "已產生新節奏，準備開始。"
  },
  "calResults": {
    "zh-CN": "校准结果",
    "en": "Calibration results",
    "de": "Kalibrierungsergebnis",
    "it": "Risultati calibrazione",
    "fr": "Résultats de l’étalonnage",
    "ja": "校正結果",
    "el": "Αποτελέσματα βαθμονόμησης",
    "zh-TW": "校準結果"
  },
  "validTaps": {
    "zh-CN": "有效击打",
    "en": "Valid taps",
    "de": "Gültige Tipps",
    "it": "Tocchi validi",
    "fr": "Frappes valides",
    "ja": "有効なタップ",
    "el": "Έγκυρα χτυπήματα",
    "zh-TW": "有效擊打"
  },
  "measuredOffset": {
    "zh-CN": "测得系统性偏移",
    "en": "Measured systematic offset",
    "de": "Gemessener systematischer Versatz",
    "it": "Scarto sistematico misurato",
    "fr": "Décalage systématique mesuré",
    "ja": "測定された系統的ずれ",
    "el": "Μετρημένη συστηματική απόκλιση",
    "zh-TW": "測得系統性偏移"
  },
  "rawMae": {
    "zh-CN": "原始平均绝对偏差",
    "en": "Raw mean absolute error",
    "de": "Roher mittlerer absoluter Fehler",
    "it": "Errore assoluto medio grezzo",
    "fr": "Erreur absolue moyenne brute",
    "ja": "未補正の平均絶対誤差",
    "el": "Αρχικό μέσο απόλυτο σφάλμα",
    "zh-TW": "原始平均絕對偏差"
  },
  "calFail": {
    "zh-CN": "有效击打不足，未保存校准；请稳定跟随节拍重试。",
    "en": "Too few valid taps; calibration not saved. Tap steadily and try again.",
    "de": "Zu wenige gültige Tipps; nicht gespeichert. Tippe gleichmäßig und versuche es erneut.",
    "it": "Troppi pochi tocchi validi; calibrazione non salvata. Riprova con regolarità.",
    "fr": "Trop peu de frappes valides ; étalonnage non enregistré. Réessayez régulièrement.",
    "ja": "有効なタップが不足したため保存しませんでした。安定した拍で再試行してください。",
    "el": "Πολύ λίγα έγκυρα χτυπήματα· δεν αποθηκεύτηκε. Δοκίμασε ξανά σταθερά.",
    "zh-TW": "有效擊打不足，未儲存校準；請穩定跟隨節拍重試。"
  },
  "calSaved": {
    "zh-CN": "已保存偏移。以后评估时将扣除此偏移；它包含设备输出、触控及个人习惯性提前或滞后，不能当成纯设备延迟。",
    "en": "Offset saved and applied to future scores. It includes audio, touch and personal timing bias—not just hardware latency.",
    "de": "Versatz gespeichert und wird künftig verrechnet. Er umfasst Audio-, Touch- und persönliche Timing-Abweichungen, nicht nur Gerätelatenz.",
    "it": "Scarto salvato e applicato ai risultati futuri. Include audio, tocco e abitudini personali, non solo latenza hardware.",
    "fr": "Décalage enregistré pour les prochaines évaluations. Il inclut la latence audio/tactile et les habitudes de frappe, pas seulement le matériel.",
    "ja": "ずれを保存し、以後の採点で補正します。音声・タッチの遅延だけでなく個人の打拍傾向も含みます。",
    "el": "Η απόκλιση αποθηκεύτηκε και θα αφαιρείται στις επόμενες βαθμολογίες. Περιλαμβάνει ήχο, αφή και προσωπική συνήθεια, όχι μόνο καθυστέρηση συσκευής.",
    "zh-TW": "已儲存偏移。以後評估時將扣除此偏移；它包含設備輸出、觸控及個人習慣性提前或落後，不能當成純設備延遲。"
  },
  "calNote": {
    "zh-CN": "推荐在同一设备、同一耳机或扬声器条件下校准。换设备或蓝牙耳机后重新校准；最好使用有线耳机或手机扬声器。",
    "en": "Calibrate using the same device and audio output. Recalibrate after switching devices or Bluetooth headphones; wired headphones or built-in speakers are best.",
    "de": "Kalibriere mit demselben Gerät und Audioausgang. Bei Geräte- oder Bluetooth-Wechsel erneut kalibrieren; Kabelkopfhörer oder Lautsprecher sind besser.",
    "it": "Calibra con lo stesso dispositivo e uscita audio. Ripeti dopo un cambio o con cuffie Bluetooth; meglio cuffie cablate o altoparlanti integrati.",
    "fr": "Étalonnez avec le même appareil et la même sortie audio. Recommencez en changeant de matériel ou de casque Bluetooth ; préférez le filaire ou les haut-parleurs intégrés.",
    "ja": "同じ端末と出力機器で校正してください。端末やBluetoothイヤホンを変えた場合は再校正し、有線イヤホンや内蔵スピーカーを推奨します。",
    "el": "Βαθμονόμησε στην ίδια συσκευή και έξοδο ήχου. Επανάλαβε αν αλλάξεις συσκευή ή Bluetooth· προτίμησε ενσύρματα ακουστικά ή ηχεία.",
    "zh-TW": "建議在同一設備、同一耳機或揚聲器條件下校準。換設備或藍牙耳機後重新校準；最好使用有線耳機或手機揚聲器。"
  },
  "resultHeading": {
    "zh-CN": "{mode} · 本次结果",
    "en": "{mode} · results",
    "de": "{mode} · Ergebnis",
    "it": "{mode} · risultati",
    "fr": "{mode} · résultats",
    "ja": "{mode} · 今回の結果",
    "el": "{mode} · αποτελέσματα",
    "zh-TW": "{mode} · 本次結果"
  },
  "matched": {
    "zh-CN": "正确匹配拍点",
    "en": "Matched targets",
    "de": "Passende Schläge",
    "it": "Battiti corretti",
    "fr": "Points correctement placés",
    "ja": "一致した打点",
    "el": "Σωστά χτυπήματα",
    "zh-TW": "正確匹配拍點"
  },
  "hitRate": {
    "zh-CN": "命中率",
    "en": "Hit rate",
    "de": "Trefferquote",
    "it": "Percentuale corretta",
    "fr": "Taux de réussite",
    "ja": "的中率",
    "el": "Ποσοστό επιτυχίας",
    "zh-TW": "命中率"
  },
  "meanAbs": {
    "zh-CN": "平均绝对时间偏差",
    "en": "Mean absolute timing error",
    "de": "Mittlerer absoluter Zeitfehler",
    "it": "Errore temporale assoluto medio",
    "fr": "Écart temporel absolu moyen",
    "ja": "平均絶対時間誤差",
    "el": "Μέσο απόλυτο χρονικό σφάλμα",
    "zh-TW": "平均絕對時間偏差"
  },
  "meanBias": {
    "zh-CN": "平均提前 / 滞后",
    "en": "Mean early / late offset",
    "de": "Mittlere Verfrühung / Verspätung",
    "it": "Anticipo / ritardo medio",
    "fr": "Avance / retard moyen",
    "ja": "平均の早め／遅れ",
    "el": "Μέση πρόωρη / όψιμη απόκλιση",
    "zh-TW": "平均提前 / 落後"
  },
  "misses": {
    "zh-CN": "遗漏次数",
    "en": "Missed targets",
    "de": "Ausgelassene Schläge",
    "it": "Battiti mancati",
    "fr": "Frappes manquées",
    "ja": "未打点数",
    "el": "Χαμένα χτυπήματα",
    "zh-TW": "遺漏次數"
  },
  "extras": {
    "zh-CN": "额外击打",
    "en": "Extra taps",
    "de": "Zusätzliche Tipps",
    "it": "Tocchi extra",
    "fr": "Frappes en trop",
    "ja": "余分なタップ",
    "el": "Επιπλέον χτυπήματα",
    "zh-TW": "額外擊打"
  },
  "resultExplanation": {
    "zh-CN": "匹配容许误差 ±{n} ms。正偏差表示较晚，负偏差表示较早。",
    "en": "Match tolerance ±{n} ms. Positive errors mean late taps; negative errors mean early taps.",
    "de": "Trefferfenster ±{n} ms. Positive Abweichungen sind zu spät, negative zu früh.",
    "it": "Tolleranza ±{n} ms. Valori positivi = in ritardo; negativi = in anticipo.",
    "fr": "Tolérance ±{n} ms. Un écart positif signifie en retard ; négatif, en avance.",
    "ja": "許容誤差 ±{n} ms。正は遅れ、負は早めを示します。",
    "el": "Ανοχή ±{n} ms. Θετικό σφάλμα = αργά· αρνητικό = νωρίς.",
    "zh-TW": "匹配容許誤差 ±{n} ms。正偏差表示較晚，負偏差表示較早。"
  },
  "silentDrift": {
    "zh-CN": "静音段首尾偏移变化 {n} ms（正值表示越打越慢）。",
    "en": "Silent-section drift {n} ms (positive means slowing down).",
    "de": "Drift zwischen Anfang und Ende der Stille: {n} ms (positiv = langsamer).",
    "it": "Deriva nella sezione muta {n} ms (positivo = rallentamento).",
    "fr": "Dérive entre le début et la fin du silence : {n} ms (positif = ralentissement).",
    "ja": "無音区間の最初と最後のずれの変化 {n} ms（正なら徐々に遅くなる）。",
    "el": "Μεταβολή απόκλισης στη σιωπή {n} ms (θετικό = επιβράδυνση).",
    "zh-TW": "靜音段首尾偏移變化 {n} ms（正值表示越打越慢）。"
  },
  "silentOutside": {
    "zh-CN": "静音段以外的点击不计分。",
    "en": "Taps outside the silent section are not scored.",
    "de": "Tipps außerhalb der Stille werden nicht gewertet.",
    "it": "I tocchi fuori dalla sezione muta non vengono valutati.",
    "fr": "Les frappes hors des mesures silencieuses ne sont pas notées.",
    "ja": "無音区間以外のタップは採点しません。",
    "el": "Τα χτυπήματα εκτός σιωπηλού τμήματος δεν βαθμολογούνται.",
    "zh-TW": "靜音段以外的點擊不計分。"
  },
  "readingFeedback": {
    "zh-CN": "乐谱中绿色为命中，棕色为遗漏；休止符不得敲击。",
    "en": "Green notes were hit; brown notes were missed. Do not tap during rests.",
    "de": "Grün: getroffen; Braun: verfehlt. In Pausen nicht tippen.",
    "it": "Verde: corretto; marrone: mancato. Non toccare nelle pause.",
    "fr": "Vert : réussi ; brun : manqué. Ne tapez pas pendant les silences.",
    "ja": "緑は命中、茶色は未打点です。休符ではタップしないでください。",
    "el": "Πράσινο = σωστό, καφέ = χαμένο. Μην χτυπάς στις παύσεις.",
    "zh-TW": "樂譜中綠色為命中，棕色為遺漏；休止符不得敲擊。"
  },
  "notCalibrated": {
    "zh-CN": "尚未校准，系统性音频/触摸延迟可能影响偏差值。",
    "en": "Not calibrated; systematic audio/touch latency may affect timing scores.",
    "de": "Noch nicht kalibriert; Audio-/Touch-Latenz kann die Zeitwerte beeinflussen.",
    "it": "Non calibrato; la latenza audio/tocco può influire sui risultati.",
    "fr": "Non étalonné ; la latence audio/tactile peut affecter la mesure.",
    "ja": "未校正のため、音声やタッチの遅延が誤差値に影響する場合があります。",
    "el": "Χωρίς βαθμονόμηση, η καθυστέρηση ήχου/αφής μπορεί να επηρεάζει τα αποτελέσματα.",
    "zh-TW": "尚未校準，系統性音訊/觸控延遲可能影響偏差值。"
  },
  "errorHead": {
    "zh-CN": "每个目标拍点的误差（ms；— 为遗漏）",
    "en": "Error at each target (ms; — = missed)",
    "de": "Fehler je Zielschlag (ms; — = verfehlt)",
    "it": "Errore per battito (ms; — = mancato)",
    "fr": "Écart par frappe (ms ; — = manqué)",
    "ja": "各打点の誤差（ms、— は未打点）",
    "el": "Σφάλμα ανά στόχο (ms· — = χαμένο)",
    "zh-TW": "每個目標拍點的誤差（ms；— 為遺漏）"
  },
  "historyEmpty": {
    "zh-CN": "还没有完成记录。完成第一组练习后，这里会显示成绩。",
    "en": "No sessions yet. Complete your first exercise to see results here.",
    "de": "Noch keine Übungen. Das erste Ergebnis erscheint hier.",
    "it": "Nessun esercizio ancora. Qui appariranno i risultati.",
    "fr": "Aucune séance pour le moment. Le premier résultat apparaîtra ici.",
    "ja": "履歴はまだありません。最初の練習後に結果が表示されます。",
    "el": "Δεν υπάρχουν ασκήσεις ακόμη. Τα αποτελέσματα θα εμφανιστούν εδώ.",
    "zh-TW": "還沒有完成記錄。完成第一組練習後，這裡會顯示成績。"
  },
  "histTime": {
    "zh-CN": "时间",
    "en": "Time",
    "de": "Zeit",
    "it": "Ora",
    "fr": "Heure",
    "ja": "日時",
    "el": "Ώρα",
    "zh-TW": "時間"
  },
  "histMode": {
    "zh-CN": "模式",
    "en": "Mode",
    "de": "Modus",
    "it": "Modalità",
    "fr": "Mode",
    "ja": "モード",
    "el": "Λειτουργία",
    "zh-TW": "模式"
  },
  "histHit": {
    "zh-CN": "命中",
    "en": "Hits",
    "de": "Treffer",
    "it": "Corretti",
    "fr": "Réussite",
    "ja": "的中",
    "el": "Επιτυχία",
    "zh-TW": "命中"
  },
  "histError": {
    "zh-CN": "偏差",
    "en": "Error",
    "de": "Fehler",
    "it": "Errore",
    "fr": "Écart",
    "ja": "誤差",
    "el": "Σφάλμα",
    "zh-TW": "偏差"
  },
  "histExtra": {
    "zh-CN": "多击",
    "en": "Extra",
    "de": "Extra",
    "it": "Extra",
    "fr": "En trop",
    "ja": "余分",
    "el": "Επιπλέον",
    "zh-TW": "多擊"
  },
  "modeCalibration": {
    "zh-CN": "点击校准",
    "en": "Tap calibration",
    "de": "Tippkalibrierung",
    "it": "Calibrazione tocco",
    "fr": "Étalonnage tactile",
    "ja": "タップ校正",
    "el": "Βαθμονόμηση αφής",
    "zh-TW": "點擊校準"
  },
  "modeGeneric": {
    "zh-CN": "训练",
    "en": "Exercise",
    "de": "Übung",
    "it": "Esercizio",
    "fr": "Exercice",
    "ja": "練習",
    "el": "Άσκηση",
    "zh-TW": "訓練"
  },
  "exportEmpty": {
    "zh-CN": "没有可导出的记录。",
    "en": "No history to export.",
    "de": "Kein Verlauf zum Exportieren.",
    "it": "Nessun dato da esportare.",
    "fr": "Aucun historique à exporter.",
    "ja": "書き出す履歴がありません。",
    "el": "Δεν υπάρχει ιστορικό για εξαγωγή.",
    "zh-TW": "沒有可匯出的記錄。"
  },
  "clearConfirm": {
    "zh-CN": "确定清除全部练习记录吗？此操作不可撤销。",
    "en": "Delete all practice history? This cannot be undone.",
    "de": "Den gesamten Übungsverlauf unwiderruflich löschen?",
    "it": "Cancellare tutta la cronologia? Non è possibile annullare.",
    "fr": "Effacer tout l’historique ? Cette action est irréversible.",
    "ja": "練習履歴をすべて消去しますか？元に戻せません。",
    "el": "Διαγραφή ολόκληρου του ιστορικού; Δεν αναιρείται.",
    "zh-TW": "確定清除全部練習記錄嗎？此操作無法復原。"
  },
  "previewFail": {
    "zh-CN": "试听失败：{msg}",
    "en": "Sound test failed: {msg}",
    "de": "Tonprobe fehlgeschlagen: {msg}",
    "it": "Prova audio fallita: {msg}",
    "fr": "Test audio échoué : {msg}",
    "ja": "試聴失敗：{msg}",
    "el": "Αποτυχία δοκιμής ήχου: {msg}",
    "zh-TW": "試聽失敗：{msg}"
  },
  "audioFail": {
    "zh-CN": "音频启动失败：{msg}",
    "en": "Audio failed to start: {msg}",
    "de": "Audio konnte nicht starten: {msg}",
    "it": "Avvio audio fallito: {msg}",
    "fr": "Démarrage audio impossible : {msg}",
    "ja": "音声の開始に失敗：{msg}",
    "el": "Αποτυχία εκκίνησης ήχου: {msg}",
    "zh-TW": "音訊啟動失敗：{msg}"
  },
  "noWebAudio": {
    "zh-CN": "当前浏览器不支持 Web Audio。",
    "en": "This browser does not support Web Audio.",
    "de": "Dieser Browser unterstützt Web Audio nicht.",
    "it": "Questo browser non supporta Web Audio.",
    "fr": "Ce navigateur ne prend pas en charge Web Audio.",
    "ja": "このブラウザーはWeb Audioに対応していません。",
    "el": "Ο φυλλομετρητής δεν υποστηρίζει Web Audio.",
    "zh-TW": "目前瀏覽器不支援 Web Audio。"
  },
  "decrease": {
    "zh-CN": "降低每分钟拍数",
    "en": "Decrease tempo",
    "de": "Tempo verringern",
    "it": "Diminuisci tempo",
    "fr": "Ralentir",
    "ja": "テンポを下げる",
    "el": "Μείωση τέμπο",
    "zh-TW": "降低每分鐘拍數"
  },
  "increase": {
    "zh-CN": "提高每分钟拍数",
    "en": "Increase tempo",
    "de": "Tempo erhöhen",
    "it": "Aumenta tempo",
    "fr": "Accélérer",
    "ja": "テンポを上げる",
    "el": "Αύξηση τέμπο",
    "zh-TW": "提高每分鐘拍數"
  },
  "meterChoose": {
    "zh-CN": "选择拍号",
    "en": "Select time signature",
    "de": "Taktart auswählen",
    "it": "Seleziona metro",
    "fr": "Choisir la mesure",
    "ja": "拍子記号を選択",
    "el": "Επιλογή μέτρου",
    "zh-TW": "選擇拍號"
  },
  "sliderAria": {
    "zh-CN": "速度滑块",
    "en": "Tempo slider",
    "de": "Tempo-Schieberegler",
    "it": "Cursore tempo",
    "fr": "Curseur de tempo",
    "ja": "テンポスライダー",
    "el": "Ρυθμιστικό τέμπο",
    "zh-TW": "速度滑桿"
  },
  "staffAria": {
    "zh-CN": "节奏谱",
    "en": "Rhythm notation",
    "de": "Rhythmusnotation",
    "it": "Notazione ritmica",
    "fr": "Notation rythmique",
    "ja": "リズム譜",
    "el": "Ρυθμική σημειογραφία",
    "zh-TW": "節奏譜"
  },
  "padAria": {
    "zh-CN": "节奏点击板：触摸屏幕或按空格键",
    "en": "Rhythm pad: touch or press Space",
    "de": "Rhythmusfeld: tippen oder Leertaste drücken",
    "it": "Area ritmo: tocca o premi Spazio",
    "fr": "Zone de frappe : toucher ou Espace",
    "ja": "タップ板：画面をタップするかスペースキー",
    "el": "Επιφάνεια ρυθμού: άγγιγμα ή Κενό",
    "zh-TW": "節奏點擊板：觸摸螢幕或按空白鍵"
  },
  "language": {
    "zh-CN": "界面语言",
    "en": "Language",
    "de": "Sprache",
    "it": "Lingua",
    "fr": "Langue",
    "ja": "言語",
    "el": "Γλώσσα",
    "zh-TW": "介面語言"
  }
};
  const labels = {"zh-CN":"简体中文","en":"English","de":"Deutsch","it":"Italiano","fr":"Français","ja":"日本語","el":"Ελληνικά","zh-TW":"繁體中文"};
  window.RHYTHM_I18N = Object.freeze({languages, translations, labels});
})();
