'use strict';
/* ═══════════════════════════════════════════════════
   NEW BAR — Main Logic
   ═══════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────
// TRANSLATIONS (10 languages)
// ───────────────────────────────────────────────────
const I18N = {
  tr: {
    name:'Türkçe', flag:'🇹🇷', dir:'ltr',
    greeting:{morning:'Günaydın',afternoon:'İyi Günler',evening:'İyi Akşamlar',night:'İyi Geceler'},
    days:['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'],
    months:['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
    edit:'Düzenle', settings_title:'Ayarlar', lang_label:'Dil', edit_layout:'Yerleşimi Düzenle', done:'Bitti',
    engine_label:'Arama Motoru', weather_label:'Hava Durumu Şehri',
    cards_label:'Kartlar', city_ph:'Şehir giriniz...', save:'Kaydet',
    card_clock:'Saat', card_weather:'Hava Durumu', card_search:'Arama',
    card_links:'Hızlı Linkler', card_notes:'Notlar', card_todo:'Yapılacaklar',
    card_calendar:'Takvim', card_exchange:'Döviz Kurları',
    card_pomodoro:'Pomodoro', card_worldclock:'Dünya Saatleri',
    search_ph:'Ara...', notes_ph:'Notlarını buraya yaz...', todo_ph:'Yeni görev ekle...',
    start:'Başlat', pause:'Duraklat', reset:'Sıfırla', work:'ÇALIŞMA', break_t:'MOLA',
    loading:'Yükleniyor...', w_error:'Şehir bulunamadı.',
    feels:'Hissedilen', humidity:'Nem', wind:'Rüzgar',
    add_link:'Link Ekle', link_name:'Link ismi:', link_url:'URL:', usd:'1 USD =',
  },
  en: {
    name:'English', flag:'🇬🇧', dir:'ltr',
    greeting:{morning:'Good Morning',afternoon:'Good Afternoon',evening:'Good Evening',night:'Good Night'},
    days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    months:['January','February','March','April','May','June','July','August','September','October','November','December'],
    edit:'Customize', settings_title:'Settings', lang_label:'Language', edit_layout:'Edit Layout', done:'Done',
    engine_label:'Search Engine', weather_label:'Weather City',
    cards_label:'Cards', city_ph:'Enter city...', save:'Save',
    card_clock:'Clock', card_weather:'Weather', card_search:'Search',
    card_links:'Quick Links', card_notes:'Notes', card_todo:'To-Do',
    card_calendar:'Calendar', card_exchange:'Exchange Rates',
    card_pomodoro:'Pomodoro', card_worldclock:'World Clock',
    search_ph:'Search...', notes_ph:'Write your notes here...', todo_ph:'Add new task...',
    start:'Start', pause:'Pause', reset:'Reset', work:'WORK', break_t:'BREAK',
    loading:'Loading...', w_error:'City not found.',
    feels:'Feels like', humidity:'Humidity', wind:'Wind',
    add_link:'Add Link', link_name:'Link name:', link_url:'URL:', usd:'1 USD =',
  },
  de: {
    name:'Deutsch', flag:'🇩🇪', dir:'ltr',
    greeting:{morning:'Guten Morgen',afternoon:'Guten Tag',evening:'Guten Abend',night:'Gute Nacht'},
    days:['So','Mo','Di','Mi','Do','Fr','Sa'],
    months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    edit:'Anpassen', settings_title:'Einstellungen', lang_label:'Sprache', edit_layout:'Layout bearbeiten', done:'Fertig',
    engine_label:'Suchmaschine', weather_label:'Wetterstadt',
    cards_label:'Karten', city_ph:'Stadt eingeben...', save:'Speichern',
    card_clock:'Uhr', card_weather:'Wetter', card_search:'Suche',
    card_links:'Schnelllinks', card_notes:'Notizen', card_todo:'Aufgaben',
    card_calendar:'Kalender', card_exchange:'Wechselkurse',
    card_pomodoro:'Pomodoro', card_worldclock:'Weltzeit',
    search_ph:'Suchen...', notes_ph:'Notizen hier eingeben...', todo_ph:'Neue Aufgabe...',
    start:'Start', pause:'Pause', reset:'Zurücksetzen', work:'ARBEIT', break_t:'PAUSE',
    loading:'Laden...', w_error:'Stadt nicht gefunden.',
    feels:'Gefühlt', humidity:'Feuchtigkeit', wind:'Wind',
    add_link:'Link hinzufügen', link_name:'Linkname:', link_url:'URL:', usd:'1 USD =',
  },
  fr: {
    name:'Français', flag:'🇫🇷', dir:'ltr',
    greeting:{morning:'Bonjour',afternoon:'Bon après-midi',evening:'Bonsoir',night:'Bonne nuit'},
    days:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    edit:'Personnaliser', settings_title:'Paramètres', lang_label:'Langue', edit_layout:'Modifier disposition', done:'Terminé',
    engine_label:'Moteur de recherche', weather_label:'Ville météo',
    cards_label:'Cartes', city_ph:'Entrez une ville...', save:'Enregistrer',
    card_clock:'Horloge', card_weather:'Météo', card_search:'Recherche',
    card_links:'Liens rapides', card_notes:'Notes', card_todo:'Tâches',
    card_calendar:'Calendrier', card_exchange:'Taux de change',
    card_pomodoro:'Pomodoro', card_worldclock:'Heure mondiale',
    search_ph:'Rechercher...', notes_ph:'Écrivez vos notes...', todo_ph:'Nouvelle tâche...',
    start:'Démarrer', pause:'Pause', reset:'Réinitialiser', work:'TRAVAIL', break_t:'PAUSE',
    loading:'Chargement...', w_error:'Ville introuvable.',
    feels:'Ressenti', humidity:'Humidité', wind:'Vent',
    add_link:'Ajouter un lien', link_name:'Nom:', link_url:'URL:', usd:'1 USD =',
  },
  es: {
    name:'Español', flag:'🇪🇸', dir:'ltr',
    greeting:{morning:'Buenos días',afternoon:'Buenas tardes',evening:'Buenas tardes',night:'Buenas noches'},
    days:['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
    months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    edit:'Personalizar', settings_title:'Configuración', lang_label:'Idioma', edit_layout:'Editar diseño', done:'Hecho',
    engine_label:'Motor de búsqueda', weather_label:'Ciudad del tiempo',
    cards_label:'Tarjetas', city_ph:'Ingresa una ciudad...', save:'Guardar',
    card_clock:'Reloj', card_weather:'Clima', card_search:'Búsqueda',
    card_links:'Enlaces rápidos', card_notes:'Notas', card_todo:'Tareas',
    card_calendar:'Calendario', card_exchange:'Tipo de cambio',
    card_pomodoro:'Pomodoro', card_worldclock:'Reloj mundial',
    search_ph:'Buscar...', notes_ph:'Escribe tus notas...', todo_ph:'Nueva tarea...',
    start:'Iniciar', pause:'Pausar', reset:'Reiniciar', work:'TRABAJO', break_t:'DESCANSO',
    loading:'Cargando...', w_error:'Ciudad no encontrada.',
    feels:'Sensación', humidity:'Humedad', wind:'Viento',
    add_link:'Agregar enlace', link_name:'Nombre:', link_url:'URL:', usd:'1 USD =',
  },
  it: {
    name:'Italiano', flag:'🇮🇹', dir:'ltr',
    greeting:{morning:'Buongiorno',afternoon:'Buon pomeriggio',evening:'Buona sera',night:'Buona notte'},
    days:['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
    months:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    edit:'Personalizza', settings_title:'Impostazioni', lang_label:'Lingua', edit_layout:'Modifica layout', done:'Fatto',
    engine_label:'Motore di ricerca', weather_label:'Città meteo',
    cards_label:'Schede', city_ph:'Inserisci una città...', save:'Salva',
    card_clock:'Orologio', card_weather:'Meteo', card_search:'Ricerca',
    card_links:'Link rapidi', card_notes:'Note', card_todo:'Attività',
    card_calendar:'Calendario', card_exchange:'Tassi di cambio',
    card_pomodoro:'Pomodoro', card_worldclock:'Orologio mondiale',
    search_ph:'Cerca...', notes_ph:'Scrivi le tue note...', todo_ph:'Nuova attività...',
    start:'Avvia', pause:'Pausa', reset:'Reimposta', work:'LAVORO', break_t:'PAUSA',
    loading:'Caricamento...', w_error:'Città non trovata.',
    feels:'Percepito', humidity:'Umidità', wind:'Vento',
    add_link:'Aggiungi link', link_name:'Nome:', link_url:'URL:', usd:'1 USD =',
  },
  pt: {
    name:'Português', flag:'🇧🇷', dir:'ltr',
    greeting:{morning:'Bom dia',afternoon:'Boa tarde',evening:'Boa tarde',night:'Boa noite'},
    days:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
    months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    edit:'Personalizar', settings_title:'Configurações', lang_label:'Idioma', edit_layout:'Editar layout', done:'Concluído',
    engine_label:'Motor de busca', weather_label:'Cidade do tempo',
    cards_label:'Cartões', city_ph:'Digite uma cidade...', save:'Salvar',
    card_clock:'Relógio', card_weather:'Clima', card_search:'Busca',
    card_links:'Links rápidos', card_notes:'Notas', card_todo:'Tarefas',
    card_calendar:'Calendário', card_exchange:'Câmbio',
    card_pomodoro:'Pomodoro', card_worldclock:'Relógio mundial',
    search_ph:'Pesquisar...', notes_ph:'Escreva suas notas...', todo_ph:'Nova tarefa...',
    start:'Iniciar', pause:'Pausar', reset:'Reiniciar', work:'TRABALHO', break_t:'PAUSA',
    loading:'Carregando...', w_error:'Cidade não encontrada.',
    feels:'Sensação', humidity:'Umidade', wind:'Vento',
    add_link:'Adicionar link', link_name:'Nome:', link_url:'URL:', usd:'1 USD =',
  },
  ru: {
    name:'Русский', flag:'🇷🇺', dir:'ltr',
    greeting:{morning:'Доброе утро',afternoon:'Добрый день',evening:'Добрый вечер',night:'Доброй ночи'},
    days:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    edit:'Настроить', settings_title:'Настройки', lang_label:'Язык', edit_layout:'Изменить макет', done:'Готово',
    engine_label:'Поисковик', weather_label:'Город погоды',
    cards_label:'Карточки', city_ph:'Введите город...', save:'Сохранить',
    card_clock:'Часы', card_weather:'Погода', card_search:'Поиск',
    card_links:'Быстрые ссылки', card_notes:'Заметки', card_todo:'Задачи',
    card_calendar:'Календарь', card_exchange:'Курс валют',
    card_pomodoro:'Помодоро', card_worldclock:'Мировое время',
    search_ph:'Поиск...', notes_ph:'Пишите заметки здесь...', todo_ph:'Новая задача...',
    start:'Начать', pause:'Пауза', reset:'Сброс', work:'РАБОТА', break_t:'ПЕРЕРЫВ',
    loading:'Загрузка...', w_error:'Город не найден.',
    feels:'Ощущается', humidity:'Влажность', wind:'Ветер',
    add_link:'Добавить ссылку', link_name:'Название:', link_url:'URL:', usd:'1 USD =',
  },
  ja: {
    name:'日本語', flag:'🇯🇵', dir:'ltr',
    greeting:{morning:'おはようございます',afternoon:'こんにちは',evening:'こんばんは',night:'おやすみなさい'},
    days:['日','月','火','水','木','金','土'],
    months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    edit:'カスタマイズ', settings_title:'設定', lang_label:'言語', edit_layout:'レイアウト編集', done:'完了',
    engine_label:'検索エンジン', weather_label:'天気の都市',
    cards_label:'カード', city_ph:'都市を入力...', save:'保存',
    card_clock:'時計', card_weather:'天気', card_search:'検索',
    card_links:'クイックリンク', card_notes:'メモ', card_todo:'タスク',
    card_calendar:'カレンダー', card_exchange:'為替レート',
    card_pomodoro:'ポモドーロ', card_worldclock:'世界時計',
    search_ph:'検索...', notes_ph:'メモを入力...', todo_ph:'新しいタスク...',
    start:'開始', pause:'一時停止', reset:'リセット', work:'作業', break_t:'休憩',
    loading:'読み込み中...', w_error:'都市が見つかりません。',
    feels:'体感', humidity:'湿度', wind:'風速',
    add_link:'リンクを追加', link_name:'名前:', link_url:'URL:', usd:'1 USD =',
  },
  ar: {
    name:'العربية', flag:'🇸🇦', dir:'rtl',
    greeting:{morning:'صباح الخير',afternoon:'مساء الخير',evening:'مساء الخير',night:'تصبح على خير'},
    days:['أح','إث','ثل','أر','خم','جم','سب'],
    months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    edit:'تخصيص', settings_title:'الإعدادات', lang_label:'اللغة', edit_layout:'تعديل التخطيط', done:'تم',
    engine_label:'محرك البحث', weather_label:'مدينة الطقس',
    cards_label:'البطاقات', city_ph:'أدخل المدينة...', save:'حفظ',
    card_clock:'الساعة', card_weather:'الطقس', card_search:'البحث',
    card_links:'روابط سريعة', card_notes:'ملاحظات', card_todo:'المهام',
    card_calendar:'التقويم', card_exchange:'أسعار الصرف',
    card_pomodoro:'بومودورو', card_worldclock:'ساعة العالم',
    search_ph:'بحث...', notes_ph:'اكتب ملاحظاتك...', todo_ph:'مهمة جديدة...',
    start:'بدء', pause:'إيقاف', reset:'إعادة', work:'عمل', break_t:'استراحة',
    loading:'جاري التحميل...', w_error:'المدينة غير موجودة.',
    feels:'يشعر', humidity:'الرطوبة', wind:'الرياح',
    add_link:'إضافة رابط', link_name:'الاسم:', link_url:'الرابط:', usd:'1 دولار =',
  },
};

// ───────────────────────────────────────────────────
// CARD DEFINITIONS
// ───────────────────────────────────────────────────
const I_CLOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const I_WEATHER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.5a7.1 7.1 0 0 0-14 0H3a4.5 4.5 0 0 0 4.5 9h10Z"/></svg>`;
const I_SEARCH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const I_LINKS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
const I_NOTES = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`;
const I_TODO = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
const I_CALENDAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`;
const I_EXCHANGE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
const I_POMO = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="8"/><path d="M12 2v4"/><path d="M10 2h4"/><path d="m17.6 8.4-1.4-1.4"/></svg>`;
const I_WORLD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;

const I_GOOGLE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.945 11a9 9 0 1 1-3.284-5.997l-2.655 2.592a5.5 5.5 0 1 0 1.583 4.238H12v3.666h8.945Z"/></svg>`;
const I_BING = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l-4 4v10.5l4-1.5V3z"/><path d="M9 3v13.5l10.5 4.5v-10.5L9 3z"/></svg>`;
const I_SHIELD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;

const CARD_DEFS = [
  {id:'clock',      icon:I_CLOCK, key:'card_clock',     wide:false, on:true},
  {id:'weather',    icon:I_WEATHER, key:'card_weather',   wide:false, on:true},
  {id:'search',     icon:I_SEARCH, key:'card_search',    wide:true,  on:true},
  {id:'links',      icon:I_LINKS, key:'card_links',     wide:true,  on:true},
  {id:'notes',      icon:I_NOTES, key:'card_notes',     wide:false, on:true},
  {id:'todo',       icon:I_TODO, key:'card_todo',       wide:false, on:true},
  {id:'calendar',   icon:I_CALENDAR, key:'card_calendar',  wide:false, on:false},
  {id:'exchange',   icon:I_EXCHANGE, key:'card_exchange',  wide:false, on:false},
  {id:'pomodoro',   icon:I_POMO, key:'card_pomodoro',  wide:false, on:false},
  {id:'worldclock', icon:I_WORLD, key:'card_worldclock',wide:true,  on:false},
];

const ENGINES = {
  google:     {name:'Google',     icon:I_GOOGLE, url:'https://google.com/search?q='},
  bing:       {name:'Bing',       icon:I_BING, url:'https://bing.com/search?q='},
  duckduckgo: {name:'DuckDuckGo', icon:I_SEARCH, url:'https://duckduckgo.com/?q='},
  brave:      {name:'Brave',      icon:I_SHIELD, url:'https://search.brave.com/search?q='},
};

const WMO = {
  0:{e:'☀️',en:'Clear sky',tr:'Açık',de:'Klar',fr:'Ciel dégagé',es:'Despejado',it:'Sereno',pt:'Limpo',ru:'Ясно',ja:'快晴',ar:'صافٍ'},
  1:{e:'🌤️',en:'Mainly clear',tr:'Az bulutlu',de:'Meist klar',fr:'Peu nuageux',es:'Poco nublado',it:'Poco nuvoloso',pt:'Pouco nublado',ru:'Малооблачно',ja:'ほぼ晴れ',ar:'صافٍ جزئياً'},
  2:{e:'⛅',en:'Partly cloudy',tr:'Parçalı bulutlu',de:'Teilweise bewölkt',fr:'Partiellement nuageux',es:'Parcialmente nublado',it:'Parzialmente nuvoloso',pt:'Parcialmente nublado',ru:'Переменная облачность',ja:'一部曇り',ar:'غائم جزئياً'},
  3:{e:'☁️',en:'Overcast',tr:'Kapalı',de:'Bedeckt',fr:'Couvert',es:'Cubierto',it:'Coperto',pt:'Nublado',ru:'Пасмурно',ja:'曇り',ar:'غائم'},
  45:{e:'🌫️',en:'Fog',tr:'Sisli',de:'Nebel',fr:'Brouillard',es:'Niebla',it:'Nebbia',pt:'Nevoeiro',ru:'Туман',ja:'霧',ar:'ضبابي'},
  51:{e:'🌦️',en:'Drizzle',tr:'Çisenti',de:'Nieselregen',fr:'Bruine',es:'Llovizna',it:'Pioggerella',pt:'Chuvisco',ru:'Морось',ja:'霧雨',ar:'رذاذ'},
  61:{e:'🌧️',en:'Light rain',tr:'Hafif yağmur',de:'Leichter Regen',fr:'Pluie légère',es:'Lluvia ligera',it:'Pioggia leggera',pt:'Chuva leve',ru:'Слабый дождь',ja:'小雨',ar:'مطر خفيف'},
  63:{e:'🌧️',en:'Rain',tr:'Yağmurlu',de:'Regen',fr:'Pluie',es:'Lluvia',it:'Pioggia',pt:'Chuva',ru:'Дождь',ja:'雨',ar:'مطر'},
  65:{e:'🌧️',en:'Heavy rain',tr:'Kuvvetli yağmur',de:'Starkregen',fr:'Forte pluie',es:'Lluvia fuerte',it:'Pioggia intensa',pt:'Chuva forte',ru:'Сильный дождь',ja:'大雨',ar:'مطر غزير'},
  71:{e:'🌨️',en:'Light snow',tr:'Hafif kar',de:'Leichter Schnee',fr:'Neige légère',es:'Nieve ligera',it:'Neve leggera',pt:'Neve leve',ru:'Слабый снег',ja:'小雪',ar:'ثلج خفيف'},
  73:{e:'❄️',en:'Snow',tr:'Karlı',de:'Schnee',fr:'Neige',es:'Nieve',it:'Neve',pt:'Neve',ru:'Снег',ja:'雪',ar:'ثلج'},
  80:{e:'🌦️',en:'Showers',tr:'Sağanak',de:'Schauer',fr:'Averses',es:'Chubascos',it:'Rovesci',pt:'Pancadas',ru:'Ливни',ja:'にわか雨',ar:'زخات'},
  95:{e:'⛈️',en:'Thunderstorm',tr:'Fırtınalı',de:'Gewitter',fr:'Orage',es:'Tormenta',it:'Temporale',pt:'Trovoada',ru:'Гроза',ja:'雷雨',ar:'عاصفة رعدية'},
};

// ───────────────────────────────────────────────────
// STATE
// ───────────────────────────────────────────────────
const S = {
  lang: 'tr',
  engine: 'google',
  city: 'Istanbul',
  cards: {},
  notes: '',
  todos: [],
  positions: {},
  links: [
    {name:'YouTube', url:'https://youtube.com'},
    {name:'Gmail',   url:'https://gmail.com'},
    {name:'GitHub',  url:'https://github.com'},
    {name:'Reddit',  url:'https://reddit.com'},
    {name:'Twitter', url:'https://x.com'},
    {name:'ChatGPT', url:'https://chatgpt.com'},
    {name:'Netflix', url:'https://netflix.com'},
    {name:'Amazon',  url:'https://amazon.com'},
  ],
  weather: null,
  weatherTs: 0,
  exchange: null,
  exchangeTs: 0,
  pomo: {running:false, phase:'work', left:25*60, total:25*60, interval:null},
  calDate: new Date(),
  zones: [
    {city:'New York', tz:'America/New_York', flag:'🇺🇸'},
    {city:'London',   tz:'Europe/London',    flag:'🇬🇧'},
    {city:'Istanbul', tz:'Europe/Istanbul',  flag:'🇹🇷'},
    {city:'Tokyo',    tz:'Asia/Tokyo',       flag:'🇯🇵'},
    {city:'Dubai',    tz:'Asia/Dubai',       flag:'🇦🇪'},
  ],
};

// ───────────────────────────────────────────────────
// STORAGE
// ───────────────────────────────────────────────────
function loadState() {
  return new Promise(resolve => {
    const applyData = data => {
      if (data.lang)   S.lang   = data.lang;
      if (data.engine) S.engine = data.engine;
      if (data.city)   S.city   = data.city;
      if (data.cards)  S.cards  = data.cards;
      if (data.notes !== undefined) S.notes = data.notes;
      if (data.todos !== undefined) S.todos = data.todos;
      if (data.links !== undefined) S.links = data.links;
      
      if (data.positions) S.positions = data.positions;
      else if (data.cardOrder) {
        data.cardOrder.forEach((id, idx) => {
          if (id) S.positions[id] = { left: (idx%4)*300+20, top: Math.floor(idx/4)*200+20 };
        });
      }
      CARD_DEFS.forEach(c => {
        if (S.cards[c.id] === undefined) S.cards[c.id] = c.on;
        if (!S.positions[c.id]) {
          const idx = Object.keys(S.positions).length;
          S.positions[c.id] = { left: (idx%4)*300+20, top: Math.floor(idx/4)*200+20 };
        }
      });
      resolve();
    };
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(null, applyData);
    } else {
      try { applyData(JSON.parse(localStorage.getItem('nb')||'{}')); } catch(e){ applyData({}); }
    }
  });
}

function save() {
  const d = {lang:S.lang, engine:S.engine, city:S.city, cards:S.cards, notes:S.notes, todos:S.todos, links:S.links, positions:S.positions};
  if (typeof chrome !== 'undefined' && chrome.storage) chrome.storage.local.set(d);
  else localStorage.setItem('nb', JSON.stringify(d));
}

// ───────────────────────────────────────────────────
// HELPERS
// ───────────────────────────────────────────────────
const t = k => I18N[S.lang]?.[k] ?? I18N.en[k] ?? k;
const $ = id => document.getElementById(id);
const setText = (id, v) => { const e = $(id); if(e) e.textContent = v; };
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function greeting() {
  const h = new Date().getHours();
  const g = I18N[S.lang].greeting;
  if (h>=5&&h<12) return g.morning;
  if (h>=12&&h<18) return g.afternoon;
  if (h>=18&&h<22) return g.evening;
  return g.night;
}

// ───────────────────────────────────────────────────
// TIME
// ───────────────────────────────────────────────────
function tick() {
  const now = new Date();
  const p = n => String(n).padStart(2,'0');
  const ts = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
  const m = t('months'), dy = t('days');
  const ds = `${dy[now.getDay()]}, ${now.getDate()} ${m[now.getMonth()]} ${now.getFullYear()}`;

  setText('current-time', ts);
  setText('current-date', ds);
  setText('greeting', greeting());
  setText('clock-display', ts);
  setText('clock-date', ds);

  S.zones.forEach((z,i) => {
    const el = $(`wct-${i}`);
    if (el) el.textContent = now.toLocaleTimeString('en-US',{timeZone:z.tz,hour12:false,hour:'2-digit',minute:'2-digit'});
  });
}

// ───────────────────────────────────────────────────
// WEATHER API
// ───────────────────────────────────────────────────
async function fetchWeather(force) {
  if (!force && S.weather && Date.now()-S.weatherTs < 30*60*1000) return S.weather;
  try {
    const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(S.city)}&count=1&language=en&format=json`);
    const gd = await geo.json();
    if (!gd.results?.length) throw 0;
    const {latitude:lat, longitude:lon, name, country} = gd.results[0];
    const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`);
    const wd = await w.json();
    S.weather = {
      temp: Math.round(wd.current.temperature_2m),
      feels: Math.round(wd.current.apparent_temperature),
      humidity: wd.current.relative_humidity_2m,
      wind: Math.round(wd.current.wind_speed_10m),
      code: wd.current.weather_code,
      city: name, country
    };
    S.weatherTs = Date.now();
    return S.weather;
  } catch(e){ return null; }
}

// ───────────────────────────────────────────────────
// EXCHANGE API
// ───────────────────────────────────────────────────
async function fetchExchange(force) {
  if (!force && S.exchange && Date.now()-S.exchangeTs < 60*60*1000) return S.exchange;
  try {
    const r = await fetch('https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,TRY,RUB,CNY,AUD,CAD');
    const d = await r.json();
    S.exchange = d.rates;
    S.exchangeTs = Date.now();
    return d.rates;
  } catch(e){ return null; }
}

// ───────────────────────────────────────────────────
// CARD RENDERERS
// ───────────────────────────────────────────────────
function rClock() {
  const now = new Date(), p = n=>String(n).padStart(2,'0');
  const ts = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
  const m=t('months'),dy=t('days'),ds=`${dy[now.getDay()]}, ${now.getDate()} ${m[now.getMonth()]} ${now.getFullYear()}`;
  return `<div class="clock-display" id="clock-display">${ts}</div><div class="clock-date" id="clock-date">${ds}</div>`;
}

function rWeather() {
  if (!S.weather) return `<div class="card-loading"><div class="spinner"></div>${t('loading')}</div>`;
  const w=S.weather, wmo=WMO[w.code]??WMO[3], desc=wmo[S.lang]??wmo.en;
  return `
    <div class="weather-main">
      <div class="weather-icon-big">${wmo.e}</div>
      <div>
        <div class="weather-temp">${w.temp}°C</div>
        <div class="weather-desc">${desc}</div>
        <div class="weather-city-name">📍 ${w.city}, ${w.country}</div>
      </div>
    </div>
    <div class="weather-details">
      <div class="weather-detail"><span class="wd-label">${t('feels')}</span><span class="wd-value">${w.feels}°C</span></div>
      <div class="weather-detail"><span class="wd-label">${t('humidity')}</span><span class="wd-value">${w.humidity}%</span></div>
      <div class="weather-detail"><span class="wd-label">${t('wind')}</span><span class="wd-value">${w.wind} km/h</span></div>
    </div>`;
}

function rSearch() {
  const pills = Object.entries(ENGINES).map(([k,v])=>
    `<button class="engine-pill${k===S.engine?' active':''}" data-action="set-engine" data-engine="${k}">${v.icon} ${v.name}</button>`
  ).join('');
  return `
    <div class="search-wrapper">
      <input type="text" class="search-input" id="search-input" placeholder="${t('search_ph')}" autocomplete="off">
      <button class="search-submit" data-action="do-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </div>
    <div class="engine-pills">${pills}</div>`;
}

function rLinks() {
  const items = S.links.map((l,i)=>{
    const dom = (()=>{try{return new URL(l.url).hostname}catch(e){return ''}})();
    return `
      <a href="${esc(l.url)}" class="link-item" title="${esc(l.name)}" target="_self">
        <img class="link-favicon" src="https://www.google.com/s2/favicons?domain=${dom}&sz=64" alt="${esc(l.name)}" loading="lazy" data-idx="${i}">
        <span class="link-name">${esc(l.name)}</span>
        <button class="link-delete" data-action="del-link" data-idx="${i}" title="Remove">✕</button>
      </a>`;
  }).join('');
  return `<div class="links-grid">${items}
    <div class="link-item link-add-btn" data-action="add-link">
      <span class="link-add-icon">＋</span>
      <span class="link-name">${t('add_link')}</span>
    </div></div>`;
}

function rNotes() {
  return `<textarea class="notes-textarea" id="notes-ta" placeholder="${t('notes_ph')}">${esc(S.notes)}</textarea>`;
}

function rTodo() {
  const items = S.todos.map((td,i)=>`
    <div class="todo-item${td.done?' done':''}">
      <div class="todo-check${td.done?' checked':''}" data-action="toggle-todo" data-idx="${i}">
        ${td.done?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`:''}
      </div>
      <span class="todo-text">${esc(td.text)}</span>
      <button class="todo-del" data-action="del-todo" data-idx="${i}">✕</button>
    </div>`).join('');
  return `
    <div class="todo-input-row">
      <input type="text" class="todo-input" id="todo-input" placeholder="${t('todo_ph')}">
      <button class="todo-add-btn" data-action="add-todo">+</button>
    </div>
    <div class="todo-list" id="todo-list">${items||`<div class="todo-empty">🎉</div>`}</div>`;
}

function rCalendar() {
  const d=S.calDate, y=d.getFullYear(), mo=d.getMonth();
  const m=t('months'), dy=t('days'), today=new Date();
  const first=new Date(y,mo,1).getDay(), dim=new Date(y,mo+1,0).getDate(), prevDim=new Date(y,mo,0).getDate();
  let cells=dy.map(d=>`<div class="cal-header-cell">${d}</div>`).join('');
  for(let i=first-1;i>=0;i--) cells+=`<div class="cal-cell other">${prevDim-i}</div>`;
  for(let i=1;i<=dim;i++){
    const isT=i===today.getDate()&&mo===today.getMonth()&&y===today.getFullYear();
    cells+=`<div class="cal-cell${isT?' today':''}">${i}</div>`;
  }
  const rem=(first+dim)%7; for(let i=1;i<=(rem?7-rem:0);i++) cells+=`<div class="cal-cell other">${i}</div>`;
  return `
    <div class="calendar-nav">
      <button class="cal-nav" data-action="prev-month">‹</button>
      <span class="cal-month-label">${m[mo]} ${y}</span>
      <button class="cal-nav" data-action="next-month">›</button>
    </div>
    <div class="calendar-grid">${cells}</div>`;
}

function rExchange() {
  if (!S.exchange) return `<div class="card-loading"><div class="spinner"></div>${t('loading')}</div>`;
  const currencies=[{c:'EUR',f:'🇪🇺'},{c:'GBP',f:'🇬🇧'},{c:'JPY',f:'🇯🇵'},{c:'TRY',f:'🇹🇷'},{c:'CNY',f:'🇨🇳'},{c:'AUD',f:'🇦🇺'},{c:'CAD',f:'🇨🇦'},{c:'RUB',f:'🇷🇺'}];
  return `<div class="exchange-label">${t('usd')}</div><div class="exchange-list">${
    currencies.map(({c,f})=>{
      const r=S.exchange[c]; if(!r) return '';
      return `<div class="exchange-item"><span class="ex-flag">${f}</span><span class="ex-code">${c}</span><span class="ex-rate">${r.toFixed(c==='JPY'||c==='RUB'?0:4)}</span></div>`;
    }).join('')}</div>`;
}

function rPomodoro() {
  const p=S.pomo, pad=n=>String(n).padStart(2,'0');
  const min=pad(Math.floor(p.left/60)), sec=pad(p.left%60);
  const prog=(p.total-p.left)/p.total, circ=2*Math.PI*36;
  return `
    <div class="pomo-wrap">
      <div class="pomo-phase" id="pomo-phase">${p.phase==='work'?t('work'):t('break_t')}</div>
      <div class="pomo-time" id="pomo-time">${min}:${sec}</div>
      <div class="pomo-ring">
        <svg viewBox="0 0 80 80">
          <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ff6b9d"/><stop offset="100%" stop-color="#ff9a6b"/></linearGradient></defs>
          <circle cx="40" cy="40" r="36" class="ring-bg"/>
          <circle cx="40" cy="40" r="36" class="ring-fill" id="pomo-fill"
            stroke="url(#pg)"
            stroke-dasharray="${circ}"
            stroke-dashoffset="${circ*(1-prog)}"/>
        </svg>
      </div>
      <div class="pomo-controls">
        <button class="pomo-btn" id="pomo-start-btn" data-action="toggle-pomo">${p.running?t('pause'):t('start')}</button>
        <button class="pomo-btn secondary" data-action="reset-pomo">${t('reset')}</button>
      </div>
    </div>`;
}

function rWorldclock() {
  const now=new Date();
  return `<div class="worldclock-list">${S.zones.map((z,i)=>{
    const ts=now.toLocaleTimeString('en-US',{timeZone:z.tz,hour12:false,hour:'2-digit',minute:'2-digit'});
    const ds=now.toLocaleDateString('en-US',{timeZone:z.tz,weekday:'short'});
    return `<div class="wc-item">
      <div class="wc-left"><span class="wc-flag">${z.flag}</span><div><span class="wc-city">${z.city}</span><span class="wc-day">${ds}</span></div></div>
      <span class="wc-time" id="wct-${i}">${ts}</span>
    </div>`;
  }).join('')}</div>`;
}

const RENDERERS = {clock:rClock,weather:rWeather,search:rSearch,links:rLinks,notes:rNotes,todo:rTodo,calendar:rCalendar,exchange:rExchange,pomodoro:rPomodoro,worldclock:rWorldclock};

// ───────────────────────────────────────────────────
// CARD MANAGER
// ───────────────────────────────────────────────────
function renderCards() {
  const container = $('cards-container');
  const activeCards = CARD_DEFS.filter(c => S.cards[c.id]);
  
  container.innerHTML = activeCards.map((c, i) => {
    const pos = S.positions[c.id] || {left: 20, top: 20};
    return `<div class="card${c.wide?' card-wide':''}" id="card-${c.id}" data-id="${c.id}" style="left: ${pos.left}px; top: ${pos.top}px;">
      <div class="card-header"><span class="card-icon">${c.icon}</span><span class="card-title">${t(c.key)}</span></div>
      <div class="card-body" id="body-${c.id}">${RENDERERS[c.id]?.()??''}</div>
    </div>`;
  }).join('');

  activeCards.forEach((c, i) => {
    const el = $(`card-${c.id}`);
    if(!el) return;
    el.style.animation=`cardIn .55s cubic-bezier(.16,1,.3,1) ${i*.04}s both`;
    
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      let dx = e.clientX - startX;
      let dy = e.clientY - startY;
      let newLeft = Math.max(-500, initialLeft + dx);
      let newTop = Math.max(-200, initialTop + dy);
      el.style.left = newLeft + 'px';
      el.style.top = newTop + 'px';
    };
    const onMouseUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      el.style.zIndex = '';
      
      S.positions[c.id] = { left: parseInt(el.style.left), top: parseInt(el.style.top) };
      save();
    };
    
    el.addEventListener('mousedown', (e) => {
      if (!document.body.classList.contains('edit-mode')) return;
      if (e.target.closest('input, textarea, button, [data-action], select')) return;
      
      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = parseInt(el.style.left) || 0;
      initialTop = parseInt(el.style.top) || 0;
      
      el.style.zIndex = '1000';
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });

  bindCardInputs();
  if (S.cards.weather) loadWeather();
  if (S.cards.exchange) loadExchange();
}

function refreshBody(id) {
  const b = $(`body-${id}`);
  if (b && RENDERERS[id]) { b.innerHTML = RENDERERS[id](); bindCardInputs(); }
}

async function loadWeather() {
  await fetchWeather(); refreshBody('weather');
}
async function loadExchange() {
  await fetchExchange(); refreshBody('exchange');
}

// ───────────────────────────────────────────────────
// EVENT BINDING (CSP compliant — no inline handlers)
// ───────────────────────────────────────────────────
function bindCardInputs() {
  // Notes autosave
  const ta = $('notes-ta');
  if (ta) ta.addEventListener('input', ()=>{ S.notes=ta.value; save(); });

  // Todo enter key
  const ti = $('todo-input');
  if (ti) ti.addEventListener('keydown', e=>{ if(e.key==='Enter') addTodo(); });

  // Search enter key
  const si = $('search-input');
  if (si) { si.addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); }); }

  // Favicon fallback
  document.querySelectorAll('.link-favicon').forEach(img=>{
    if (!img._bound) {
      img._bound = true;
      img.addEventListener('error', function(){
        const span = document.createElement('span');
        span.textContent='🔗'; span.className='link-favicon-fallback';
        this.replaceWith(span);
      });
    }
  });
}

// Global delegated click
document.addEventListener('click', e=>{
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const a = el.dataset.action;
  switch(a) {
    case 'do-search':    doSearch(); break;
    case 'set-engine':   setEngine(el.dataset.engine); break;
    case 'add-link':     addLink(); break;
    case 'del-link':     e.preventDefault(); delLink(+el.dataset.idx); break;
    case 'add-todo':     addTodo(); break;
    case 'toggle-todo':  toggleTodo(+el.dataset.idx); break;
    case 'del-todo':     delTodo(+el.dataset.idx); break;
    case 'prev-month':   changeMonth(-1); break;
    case 'next-month':   changeMonth(1); break;
    case 'toggle-pomo':  togglePomo(); break;
    case 'reset-pomo':   resetPomo(); break;
  }
});

// ───────────────────────────────────────────────────
// ACTIONS
// ───────────────────────────────────────────────────
function doSearch() {
  const q = $('search-input')?.value.trim();
  if (q) window.location.href = ENGINES[S.engine].url + encodeURIComponent(q);
}

function setEngine(k) {
  if (!ENGINES[k]) return;
  S.engine = k; save();
  document.querySelectorAll('.engine-pill').forEach(p=>p.classList.toggle('active', p.dataset.engine===k));
  document.querySelectorAll('.engine-option').forEach(o=>o.classList.toggle('active', o.dataset.engine===k));
}

function addLink() {
  const name = prompt(t('link_name')); if (!name) return;
  let url = prompt(t('link_url')); if (!url) return;
  if (!url.startsWith('http')) url='https://'+url;
  S.links.push({name:name.trim(), url}); save(); refreshBody('links');
}

function delLink(i) {
  S.links.splice(i,1); save(); refreshBody('links');
}

function addTodo() {
  const ti = $('todo-input'), text=ti?.value.trim();
  if (!text) return;
  S.todos.unshift({text, done:false}); if(ti) ti.value='';
  save(); refreshBody('todo'); $('todo-input')?.focus();
}

function toggleTodo(i) {
  if (S.todos[i]) { S.todos[i].done=!S.todos[i].done; save(); refreshBody('todo'); }
}

function delTodo(i) {
  S.todos.splice(i,1); save(); refreshBody('todo');
}

function changeMonth(d) {
  const cd=S.calDate;
  S.calDate = new Date(cd.getFullYear(), cd.getMonth()+d, 1);
  refreshBody('calendar');
}

function togglePomo() {
  const p=S.pomo;
  if (p.running) { clearInterval(p.interval); p.running=false; }
  else {
    p.running=true;
    p.interval=setInterval(()=>{
      p.left--;
      if (p.left<=0) {
        p.phase = p.phase==='work'?'break':'work';
        p.left = p.phase==='work'?25*60:5*60;
        p.total = p.left;
      }
      updatePomo();
    },1000);
  }
  setText('pomo-start-btn', p.running?t('pause'):t('start'));
}

function resetPomo() {
  const p=S.pomo; clearInterval(p.interval); p.running=false; p.phase='work'; p.left=25*60; p.total=25*60;
  refreshBody('pomodoro');
}

function updatePomo() {
  const p=S.pomo, pad=n=>String(n).padStart(2,'0');
  setText('pomo-time', `${pad(Math.floor(p.left/60))}:${pad(p.left%60)}`);
  setText('pomo-phase', p.phase==='work'?t('work'):t('break_t'));
  const fill=$('pomo-fill');
  if (fill) fill.style.strokeDashoffset = String(2*Math.PI*36*(1-(p.total-p.left)/p.total));
}

// ───────────────────────────────────────────────────
// SETTINGS
// ───────────────────────────────────────────────────
function openSettings() {
  $('settings-panel').classList.add('active');
  $('settings-overlay').classList.add('active');
  renderSettings();
}
function closeSettings() {
  $('settings-panel').classList.remove('active');
  $('settings-overlay').classList.remove('active');
}

function renderSettings() {
  setText('settings-title', t('settings_title'));
  setText('settings-lang-label', t('lang_label'));
  setText('settings-engine-label', t('engine_label'));
  setText('settings-weather-label', t('weather_label'));
  setText('settings-cards-label', t('cards_label'));
  setText('topbar-edit-label', t('edit'));
  const sb=$('save-city-btn'); if(sb) sb.textContent=t('save');

  // Language
  const lg=$('language-grid');
  if (lg) lg.innerHTML=Object.entries(I18N).map(([code,lang])=>`
    <div class="lang-option${code===S.lang?' active':''}" data-action2="set-lang" data-lang="${code}">
      <span class="lang-option-flag">${lang.flag}</span><span>${lang.name}</span>
    </div>`).join('');

  // Engines
  const eg=$('engine-grid');
  if (eg) eg.innerHTML=Object.entries(ENGINES).map(([k,v])=>`
    <div class="engine-option${k===S.engine?' active':''}" data-engine="${k}" data-action="set-engine">${v.icon} ${v.name}</div>`).join('');

  // City
  const ci=$('city-input');
  if (ci) { ci.value=S.city; ci.placeholder=t('city_ph'); }

  // Cards
  const cl=$('cards-list');
  if (cl) {
    cl.innerHTML=CARD_DEFS.map(c=>`
      <div class="card-toggle-item">
        <div class="card-toggle-info"><span>${c.icon}</span><span class="card-toggle-name">${t(c.key)}</span></div>
        <label class="toggle-switch">
          <input type="checkbox" data-card="${c.id}" ${S.cards[c.id]?'checked':''}>
          <span class="toggle-thumb"></span>
        </label>
      </div>`).join('');
    cl.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
      cb.addEventListener('change', ()=>{ S.cards[cb.dataset.card]=cb.checked; save(); renderCards(); });
    });
  }

  // Language option click — settings-local delegation
  if (lg) {
    lg.querySelectorAll('.lang-option').forEach(el=>{
      el.addEventListener('click', ()=> setLang(el.dataset.lang));
    });
  }
}

function setLang(code) {
  if (!I18N[code]) return;
  S.lang=code; save();
  document.documentElement.lang=code;
  document.documentElement.dir=I18N[code].dir??'ltr';
  renderCards(); renderSettings();
}

function saveCity() {
  const v=$('city-input')?.value.trim(); if(!v) return;
  S.city=v; S.weather=null; S.weatherTs=0; save();
  const btn=$('save-city-btn');
  if(btn){btn.textContent='✓'; setTimeout(()=>btn.textContent=t('save'),1500);}
  if(S.cards.weather) loadWeather();
}

// ───────────────────────────────────────────────────
// PARTICLES
// ───────────────────────────────────────────────────
function initParticles() {
  const canvas=$('particles-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d');
  const resize=()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;};
  resize(); window.addEventListener('resize',resize);
  const particles=Array.from({length:70},()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    r:Math.random()*1.5+.3,
    dx:(Math.random()-.5)*.25, dy:(Math.random()-.5)*.25,
    a:Math.random()*.45+.08,
  }));
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of particles){
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(180,160,255,${p.a})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>canvas.width)  p.dx*=-1;
      if(p.y<0||p.y>canvas.height) p.dy*=-1;
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ───────────────────────────────────────────────────
// INIT
// ───────────────────────────────────────────────────
async function init() {
  await loadState();

  document.documentElement.lang = S.lang;
  document.documentElement.dir  = I18N[S.lang]?.dir ?? 'ltr';

  setText('greeting', greeting());
  tick();
  setInterval(tick, 1000);

  renderCards();
  initParticles();

  // Settings btn
  $('edit-layout-btn')?.addEventListener('click', () => {
    const isEdit = document.body.classList.toggle('edit-mode');
    document.querySelectorAll('.card').forEach(c => c.draggable = isEdit);
    const lbl = $('edit-mode-label');
    if (lbl) lbl.textContent = isEdit ? t('done') : t('edit_layout');
  });
  $('settings-btn')?.addEventListener('click', openSettings);
  $('close-settings-btn')?.addEventListener('click', closeSettings);
  $('settings-overlay')?.addEventListener('click', closeSettings);
  $('save-city-btn')?.addEventListener('click', saveCity);
  $('city-input')?.addEventListener('keydown', e=>{ if(e.key==='Enter') saveCity(); });
}

document.addEventListener('DOMContentLoaded', init);
