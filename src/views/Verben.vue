<template lang="pug">
.container
  Loader(v-if="isLoading")
  ImgLoader(@imgFertig='imgFertig()' url='i4')
  .page
    h2 Verben
    .page-block.blue-grey-4
      .block__top
        span
        span Präsens
        span Präteritum
        span Pat. 2
      .block(v-for="item in Slot" :key="index")
        .block__content
          h3 {{item.t0}}
          p {{item.t1}}
          p {{item.t2}}
          p {{item.t3}}
 
</template>
<script setup>


const Slot = [
  {
    t0: 'backen (./.,../..)',
    t1: 'bäckt/backt',
    t2: 'buk/backte',
    t3: 'hat gebacken',
  },
  {
    t0: 'befehlen  приказывать',
    t1: 'befiehlt',
    t2: 'befahl',
    t3: 'hat befohlen',
  },
  {
    t0: 'beginnen',
    t1: 'beginnt',
    t2: 'begann',
    t3: 'hat begonnen',
  },
  {
    t0: 'beißen',
    t1: 'beißt',
    t2: 'biß',
    t3: 'hat gebissen',
  },
  {
    t0: 'bergen спасать укрывать',
    t1: 'birgt',
    t2: 'barg',
    t3: 'hat geborgen',
  },
  {
    t0: 'bersten лопнуть',
    t1: 'birst',
    t2: 'barst',
    t3: 'ist geborsten',
  },
  {
    t0: 'betrügen обманывать',
    t1: 'betrügt',
    t2: 'betrog',
    t3: 'hat betrogen',
  },
  {
    t0: 'biegen  гнуть',
    t1: 'biegt',
    t2: 'bog',
    t3: 'hat gebogen',
  },
  {
    t0: 'bewegen',
    t1: 'bewegt',
    t2: 'bewog',
    t3: 'hat bewogen',
  },

  {
    t0: 'bieten предлагать',
    t1: 'bietet',
    t2: 'bot',
    t3: 'hat geboten',
  },
  {
    t0: 'binden',
    t1: 'bindet',
    t2: 'band',
    t3: 'hat gebunden',
  },
  {
    t0: 'bitten просить',
    t1: 'bittet',
    t2: 'bat',
    t3: 'hat gebeten',
  },
  {
    t0: 'blasen дуть',
    t1: 'bläst',
    t2: 'blies',
    t3: 'hat geblasen',
  },
  {
    t0: 'bleiben',
    t1: 'bleibt',
    t2: 'blieb',
    t3: 'ist geblieben',
  },
  {
    t0: 'braten жарить',
    t1: 'brät',
    t2: 'briet',
    t3: 'hat gebraten',
  },
  {
    t0: 'brechen (.../...) ломать',
    t1: 'bricht',
    t2: 'brach',
    t3: 'hat/ist gebrochen',
  },
  {
    t0: 'brennen',
    t1: 'brennt',
    t2: 'brannte',
    t3: 'hat gebrannt',
  },
  {
    t0: 'bringen',
    t1: 'bringt',
    t2: 'brachte',
    t3: 'hat gebracht',
  },
  {
    t0: 'denken',
    t1: 'denkt',
    t2: 'dachte',
    t3: 'hat gedacht',
  },
  {
    t0: 'dreschen молотить',
    t1: 'drischt',
    t2: 'drosch',
    t3: 'hat gedroschen',
  },
  {
    t0: 'dringen (.../...) проникать',
    t1: 'dringt',
    t2: 'drang',
    t3: 'hat/ist gedrungen',
  },
  {
    t0: 'dürfen',
    t1: 'darf',
    t2: 'durfte',
    t3: 'hat gedurft',
  },
  {
    t0: 'empfangen принимать',
    t1: 'empfängt',
    t2: 'empfing',
    t3: 'hat empfangen',
  },
  {
    t0: 'empfehlen рекомендовать',
    t1: 'empfiehlt',
    t2: 'empfahl',
    t3: 'hat empfohlen',
  },
  {
    t0: 'empfinden чувствовать',
    t1: 'empfindet',
    t2: 'empfand',
    t3: 'hat empfunden',
  },
  {
    t0: 'erklimmen взбираться',
    t1: 'erklimmt',
    t2: 'erklomm',
    t3: 'hat erklommen',
  },

  {
    t0: 'erlöschen потухать, прекращаться',
    t1: 'erlischt',
    t2: 'erlosch',
    t3: 'ist erloschen',
  },
  {
    t0: 'erschallen звучать',
    t1: 'erschallt',
    t2: 'erscholl',
    t3: 'ist erschollen',
  },

  {
    t0: 'erschrecken',
    t1: 'erschrickt',
    t2: 'erschrak',
    t3: 'ist erschrocken',
  },
  {
    t0: 'erwägen учитывать',
    t1: 'erwägt',
    t2: 'erwog',
    t3: 'hat erwogen',
  },

  {
    t0: 'essen',
    t1: 'isst',
    t2: 'aß',
    t3: 'hat gegessen',
  },
  {
    t0: 'fahren (.../...)',
    t1: 'fährt',
    t2: 'fuhr',
    t3: 'hat/ist gefahren',
  },
  {
    t0: 'fallen',
    t1: 'fällt',
    t2: 'fiel',
    t3: 'ist gefallen',
  },
  {
    t0: 'fangen ловить',
    t1: 'fängt',
    t2: 'fing',
    t3: 'hat gefangen',
  },
  {
    t0: 'fechten фехтовать',
    t1: 'ficht',
    t2: 'focht',
    t3: 'hat gefochten',
  },
  {
    t0: 'finden',
    t1: 'findet',
    t2: 'fand',
    t3: 'hat gefunden',
  },
  {
    t0: 'flechten плести',
    t1: 'flicht',
    t2: 'flocht',
    t3: 'hat geflochten',
  },
  {
    t0: 'fliegen (.../...)',
    t1: 'fliegt',
    t2: 'flog',
    t3: 'hat/ist geflogen',
  },
  {
    t0: 'fliehen убегать, удирать',
    t1: 'flieht',
    t2: 'floh',
    t3: 'ist geflohen',
  },
  {
    t0: 'fließen',
    t1: 'fließt',
    t2: 'floss',
    t3: 'ist geflossen',
  },
  {
    t0: 'fressen',
    t1: 'frisst',
    t2: 'fraß',
    t3: 'hat gefressen',
  },
  {
    t0: 'frieren замерзать',
    t1: 'friert',
    t2: 'fror',
    t3: 'hat gefroren',
  },
  {
    t0: 'gären бродить',
    t1: 'gärt',
    t2: 'gor',
    t3: 'ist gegoren',
  },
  {
    t0: 'gebären (./.,.../...) родить',
    t1: 'gebärt/gebiert',
    t2: 'gebar',
    t3: 'hat/ist geboren',
  },
  {
    t0: 'geben',
    t1: 'gibt',
    t2: 'gab',
    t3: 'hat gegeben',
  },
  {
    t0: 'gedeihen расти, преуспевать',
    t1: 'gedeiht',
    t2: 'gedieh',
    t3: 'ist gediehen',
  },
  {
    t0: 'gehen',
    t1: 'geht',
    t2: 'ging',
    t3: 'ist gegangen',
  },
  {
    t0: 'gelingen удаваться',
    t1: 'gelingt',
    t2: 'gelang',
    t3: 'ist gelungen',
  },
  {
    t0: 'gelten стоить, цениться',
    t1: 'gilt',
    t2: 'galt',
    t3: 'hat gegolten',
  },
  {
    t0: 'genesen выздоравливать',
    t1: 'genest',
    t2: 'genas',
    t3: 'ist genesen',
  },
  {
    t0: 'genießen',
    t1: 'genießt',
    t2: 'genoss',
    t3: 'hat genossen',
  },
  {
    t0: 'geraten',
    t1: 'gerät',
    t2: 'geriet',
    t3: 'ist geraten',
  },

  {
    t0: 'geschehen происходить',
    t1: 'geschieht',
    t2: 'geschah',
    t3: 'ist geschehen',
  },
  {
    t0: 'gewinnen',
    t1: 'gewinnt',
    t2: 'gewann',
    t3: 'hat gewonnen',
  },
  {
    t0: 'gießen лить, наливать',
    t1: 'gießt',
    t2: 'goss',
    t3: 'hat gegossen',
  },
  {
    t0: 'gleichen выравнивать',
    t1: 'gleicht',
    t2: 'glich',
    t3: 'hat geglichen',
  },
  {
    t0: 'gleiten скользить',
    t1: 'gleitet',
    t2: 'glitt',
    t3: 'ist geglitten',
  },
  {
    t0: 'glimmen',
    t1: 'glimmt',
    t2: 'glomm/glimmte',
    t3: 'hat geglommen/geglimmt',
  },

  {
    t0: 'graben копать',
    t1: 'gräbt',
    t2: 'grub',
    t3: 'hat gegraben',
  },
  {
    t0: 'greifen браться (за что-л.)',
    t1: 'greift',
    t2: 'griff',
    t3: 'hat gegriffen',
  },
  {
    t0: 'haben',
    t1: 'hat',
    t2: 'hatte',
    t3: 'hat gehabt',
  },
  {
    t0: 'halten держать',
    t1: 'hält',
    t2: 'hielt',
    t3: 'hat gehalten',
  },
  {
    t0: 'hängen висеть',
    t1: 'hängt',
    t2: 'hing',
    t3: 'hat gehangen',
  },
  {
    t0: 'hauen (../..,.../...) рубить',
    t1: 'haut',
    t2: 'haute/hieb',
    t3: 'hat/ist gehauen',
  },
  {
    t0: 'heben поднимать',
    t1: 'hebt',
    t2: 'hob',
    t3: 'hat gehoben',
  },
  {
    t0: 'heißen называть',
    t1: 'heißt',
    t2: 'hieß',
    t3: 'hat geheißen',
  },
  {
    t0: 'helfen',
    t1: 'hilft',
    t2: 'half',
    t3: 'hat geholfen',
  },
  {
    t0: 'kennen',
    t1: 'kennt',
    t2: 'kannte',
    t3: 'hat gekannt',
  },
  {
    t0: 'klingen',
    t1: 'klingt',
    t2: 'klang',
    t3: 'hat geklungen',
  },
  {
    t0: 'kneifen щипать',
    t1: 'kneift',
    t2: 'kniff',
    t3: 'hat gekniffen',
  },
  {
    t0: 'kommen',
    t1: 'kommt',
    t2: 'kam',
    t3: 'ist gekommen',
  },
  {
    t0: 'können',
    t1: 'kann',
    t2: 'konnte',
    t3: 'hat gekonnt',
  },
  {
    t0: 'kriechen',
    t1: 'kriecht',
    t2: 'kroch',
    t3: 'ist gekrochen',
  },
  {
    t0: 'laden грузить, приглашать',
    t1: 'lädt',
    t2: 'lud',
    t3: 'hat geladen',
  },
  {
    t0: 'lassen',
    t1: 'lässt',
    t2: 'ließ',
    t3: 'hat gelassen',
  },
  {
    t0: 'laufen',
    t1: 'läuft',
    t2: 'lief',
    t3: 'hat gelitten',
  },
  {
    t0: 'leiden',
    t1: 'leidet',
    t2: 'litt',
    t3: 'hat gelitten',
  },

  {
    t0: 'leihen одалживать',
    t1: 'leiht',
    t2: 'lieh',
    t3: 'hat geliehen',
  },
  {
    t0: 'lesen',
    t1: 'liest',
    t2: 'las',
    t3: 'hat gelesen',
  },
  {
    t0: 'liegen',
    t1: 'liegt',
    t2: 'lag',
    t3: 'hat gelegen',
  },
  {
    t0: 'löschen тушить, стирать',
    t1: 'löscht',
    t2: 'losch',
    t3: 'hat geloschen',
  },
  {
    t0: 'lügen',
    t1: 'lügt',
    t2: 'log',
    t3: 'hat gelogen',
  },
  {
    t0: 'mahlen молоть',
    t1: 'mahlt',
    t2: 'mahlte',
    t3: 'hat gemahlen',
  },
  {
    t0: 'meiden избегать',
    t1: 'meidet',
    t2: 'mied',
    t3: 'hat gemieden',
  },
  {
    t0: 'melken (.../...) доить',
    t1: 'melkt',
    t2: 'melkte',
    t3: 'hat gemolken/gemelkt',
  },
  {
    t0: 'messen',
    t1: 'misst',
    t2: 'maß',
    t3: 'hat gemessen',
  },
  {
    t0: 'mißlingen не удаваться',
    t1: 'mißlingt',
    t2: 'mißlang',
    t3: 'ist mißlungen',
  },
  {
    t0: 'mögen',
    t1: 'mag',
    t2: 'mochte',
    t3: 'hat gemocht',
  },
  {
    t0: 'müssen',
    t1: 'muss',
    t2: 'musste',
    t3: 'hat gemusst',
  },
  {
    t0: 'nehmen брать',
    t1: 'nimmt',
    t2: 'nahm',
    t3: 'hat genommen',
  },
  {
    t0: 'nennen называть',
    t1: 'nennt',
    t2: 'nannte',
    t3: 'hat genannt',
  },
  {
    t0: 'pfeifen свистеть',
    t1: 'pfeift',
    t2: 'pfiff',
    t3: 'hat gepfiffen',
  },
  {
    t0: 'preisen хвалить',
    t1: 'preist',
    t2: 'pries',
    t3: 'hat gepriesen',
  },
  {
    t0: 'quellen бить ключом',
    t1: 'quillt',
    t2: 'quoll',
    t3: 'ist gequollen',
  },
  {
    t0: 'raten',
    t1: 'rät',
    t2: 'riet',
    t3: 'hat geraten',
  },
  {
    t0: 'reiben тереть',
    t1: 'reibt',
    t2: 'rieb',
    t3: 'hat gerieben',
  },
  {
    t0: 'reißen (.../...) рвать',
    t1: 'reißt',
    t2: 'riss',
    t3: 'hat/ist gerissen',
  },
  {
    t0: 'reiten (.../...) ездить верхом',
    t1: 'reitet',
    t2: 'ritt',
    t3: 'hat/ist geritten',
  },
  {
    t0: 'rennen бежать',
    t1: 'rennt',
    t2: 'rannte',
    t3: 'ist gerannt',
  },
  {
    t0: 'riechen нюхать',
    t1: 'riecht',
    t2: 'roch',
    t3: 'hat gerochen',
  },
  {
    t0: 'ringen бороться, добиваться',
    t1: 'ringt',
    t2: 'rang',
    t3: 'hat gerungen',
  },
  {
    t0: 'rinnen течь',
    t1: 'rinnt',
    t2: 'rann',
    t3: 'ist geronnen',
  },
  {
    t0: 'rufen кричать, звать',
    t1: 'ruft',
    t2: 'rief',
    t3: 'hat gerufen',
  },
  {
    t0: 'salzen (.../...) солить',
    t1: 'salzt',
    t2: 'salzte',
    t3: 'hat gesalzen/gesalzt',
  },
  {
    t0: 'saufen пить, пьянствовать',
    t1: 'säuft',
    t2: 'soff',
    t3: 'hat gesoffen',
  },
  {
    t0: 'saugen (../..,.../...)  сосать',
    t1: 'saugt',
    t2: 'saugt/saugte',
    t3: 'hat gesogen/gesaugt',
  },
  {
    t0: 'schaffen создавать, творить',
    t1: 'schafft',
    t2: 'schuf',
    t3: 'hat geschaffen',
  },
  {
    t0: 'scheiden (.../...) разводиться',
    t1: 'scheidet',
    t2: 'schied',
    t3: 'hat/ist geschieden',
  },
  {
    t0: 'scheinen казаться',
    t1: 'scheint',
    t2: 'schien',
    t3: 'hat geschienen',
  },
  {
    t0: 'schelten бранить',
    t1: 'schilt',
    t2: 'schalt',
    t3: 'hat gescholten',
  },
  {
    t0: 'scheren стричь',
    t1: 'schiert',
    t2: 'schor',
    t3: 'hat geschoren',
  },
  {
    t0: 'schieben двигать, толкать',
    t1: 'schiebt',
    t2: 'schob',
    t3: 'hat geschoben',
  },
  {
    t0: 'schießen стрелять',
    t1: 'schießt',
    t2: 'schoss',
    t3: 'hat geschossen',
  },
  {
    t0: 'schlafen',
    t1: 'schläft',
    t2: 'schlief',
    t3: 'hat geschlafen',
  },
  {
    t0: 'schlagen',
    t1: 'schlägt',
    t2: 'schlug',
    t3: 'hat geschlagen',
  },
  {
    t0: 'schleichen  красться',
    t1: 'schleicht',
    t2: 'schlich',
    t3: 'ist geschlichen',
  },
  {
    t0: 'schleifen точить',
    t1: 'schleift',
    t2: 'schliff',
    t3: 'hat geschliffen',
  },
  {
    t0: 'schließen',
    t1: 'schließt',
    t2: 'schloss',
    t3: 'hat geschlossen',
  },
  {
    t0: 'schlingen обвивать',
    t1: 'schlingt',
    t2: 'schlang',
    t3: 'hat geschlungen',
  },
  {
    t0: 'schmeißen',
    t1: 'schmeißt',
    t2: 'schmiss',
    t3: 'hat geschmissen',
  },
  {
    t0: 'schmelzen (.../...)',
    t1: 'schmilzt',
    t2: 'schmolz',
    t3: 'hat/ist geschmolzen',
  },
  {
    t0: 'schneiden',
    t1: 'schneidet',
    t2: 'schnitt',
    t3: 'hat geschnitten',
  },
  {
    t0: 'schreiben',
    t1: 'schreibt',
    t2: 'schrieb',
    t3: 'hat geschrieben',
  },
  {
    t0: 'schreien',
    t1: 'schreit',
    t2: 'schrie',
    t3: 'hat geschrien',
  },
  {
    t0: 'schreiten шагать',
    t1: 'schreitet',
    t2: 'schritt',
    t3: 'ist geschritten',
  },
  {
    t0: 'schweigen молчать',
    t1: 'schweigt',
    t2: 'schwieg',
    t3: 'hat geschwiegen',
  },
  {
    t0: 'schwellen пухнуть',
    t1: 'schwillt',
    t2: 'schwoll',
    t3: 'ist geschwollen',
  },
  {
    t0: 'schwimmen',
    t1: 'schwimmt',
    t2: 'schwamm',
    t3: 'ist geschwommen',
  },
  {
    t0: 'schwinden убывать, исчезать',
    t1: 'schwindet',
    t2: 'schwand',
    t3: 'ist geschwunden',
  },
  {
    t0: 'schwingen махать, размахивать',
    t1: 'schwingt',
    t2: 'schwang',
    t3: 'hat geschwungen',
  },
  {
    t0: 'schwören (../..) клясться',
    t1: 'schwört',
    t2: 'schwor/schwur',
    t3: 'hat geschworen',
  },
  {
    t0: 'sehen',
    t1: 'sieht',
    t2: 'sah',
    t3: 'hat gesehen',
  },
  {
    t0: 'senden',
    t1: 'sendet',
    t2: 'sandte',
    t3: 'hat gesandt',
  },
  {
    t0: 'singen',
    t1: 'singt',
    t2: 'sang',
    t3: 'hat gesungen',
  },
  {
    t0: 'sinken опускаться, погружаться',
    t1: 'sinkt',
    t2: 'sank',
    t3: 'ist gesunken',
  },
  {
    t0: 'sinnen думать, размышлять',
    t1: 'sinnt',
    t2: 'sann',
    t3: 'hat gesonnen',
  },
  {
    t0: 'sitzen',
    t1: 'sitzt',
    t2: 'saß',
    t3: 'hat gesessen',
  },
  {
    t0: 'sollen',
    t1: 'soll',
    t2: 'sollte',
    t3: 'hat gesollt',
  },
  {
    t0: 'speien выплёвывать',
    t1: 'speit',
    t2: 'spie',
    t3: 'hat gespien',
  },
  {
    t0: 'spinnen прясть',
    t1: 'spinnt',
    t2: 'spann',
    t3: 'hat gesponnen',
  },
  {
    t0: 'sprechen',
    t1: 'spricht',
    t2: 'sprach',
    t3: 'hat gesprochen',
  },
  {
    t0: 'sprießen пускать ростки, почки',
    t1: 'sprießt',
    t2: 'spross',
    t3: 'ist gesprossen',
  },
  {
    t0: 'springen',
    t1: 'springt',
    t2: 'sprang',
    t3: 'ist gesprungen',
  },
  {
    t0: 'stechen колоть',
    t1: 'sticht',
    t2: 'stach',
    t3: 'hat gestochen',
  },
  {
    t0: 'stehen',
    t1: 'steht',
    t2: 'stand',
    t3: 'hat gestanden',
  },
  {
    t0: 'stehlen',
    t1: 'steigt',
    t2: 'stieg',
    t3: 'ist gestiegen',
  },
  {
    t0: 'steigen подниматься',
    t1: 'steigt',
    t2: 'stieg',
    t3: 'ist gestiegen',
  },

  {
    t0: 'sterben',
    t1: 'stirbt',
    t2: 'starb',
    t3: 'ist gestorben',
  },
  {
    t0: 'stinken вонять',
    t1: 'stinkt',
    t2: 'stank',
    t3: 'hat gestunken',
  },
  {
    t0: 'stoßen (.../...) столкнуться',
    t1: 'stößt',
    t2: 'stieß',
    t3: 'hat/ist gestoßen',
  },
  {
    t0: 'streichen гладить',
    t1: 'streicht',
    t2: 'strich',
    t3: 'hat gestrichen',
  },
  {
    t0: 'streiten',
    t1: 'streitet',
    t2: 'stritt',
    t3: 'hat gestritten',
  },
  {
    t0: 'tragen',
    t1: 'trägt',
    t2: 'trug',
    t3: 'hat getragen',
  },
  {
    t0: 'treffen',
    t1: 'trifft',
    t2: 'traf',
    t3: 'hat getroffen',
  },
  {
    t0: 'treiben (.../...) гнать',
    t1: 'treibt',
    t2: 'trieb',
    t3: 'hat/ist getrieben',
  },
  {
    t0: 'treten (.../...) ступать',
    t1: 'tritt',
    t2: 'trat',
    t3: 'hat/ist getreten',
  },
  {
    t0: 'trinken',
    t1: 'trinkt',
    t2: 'trank',
    t3: 'hat getrunken',
  },
  {
    t0: 'trügen обманывать',
    t1: 'trügt',
    t2: 'trog',
    t3: 'hat getrogen',
  },
  {
    t0: 'tun',
    t1: 'tut',
    t2: 'tat',
    t3: 'hat getan',
  },
  {
    t0: 'verderben (.../...) портить',
    t1: 'verdirbt',
    t2: 'verdarb',
    t3: 'hat/ist verdorben',
  },
  {
    t0: 'verdrießen сердить, досаждать',
    t1: 'verdrießt',
    t2: 'verdross',
    t3: 'hat verdrossen',
  },
  {
    t0: 'vergessen',
    t1: 'vergisst',
    t2: 'vergaß',
    t3: 'hat vergessen',
  },
  {
    t0: 'verlieren',
    t1: 'verliert',
    t2: 'verlor',
    t3: 'hat verloren',
  },
  {
    t0: 'verzeihen прощать',
    t1: 'verzeiht',
    t2: 'verzieh',
    t3: 'hat verziehen',
  },
  {
    t0: 'wachsen',
    t1: 'wächst',
    t2: 'wuchs',
    t3: 'ist gewachsen',
  },
  {
    t0: 'wägen взвешивать',
    t1: 'wägt',
    t2: 'wog',
    t3: 'hat gewogen',
  },
  {
    t0: 'waschen',
    t1: 'wäscht',
    t2: 'wusch',
    t3: 'hat gewaschen',
  },
  {
    t0: 'weben плести',
    t1: 'webt',
    t2: 'wob',
    t3: 'hat gewoben',
  },

  {
    t0: 'weichen уклоняться, уворачиваться',
    t1: 'weicht',
    t2: 'wich',
    t3: 'ist gewichen',
  },
  {
    t0: 'weisen указывать',
    t1: 'weist',
    t2: 'wies',
    t3: 'hat gewiesen',
  },
  {
    t0: 'wenden (../..,.../...) поворачивать',
    t1: 'wendet',
    t2: 'wandte/wendete',
    t3: 'hat gewandt/gewendet',
  },
  {
    t0: 'werben рекламировать',
    t1: 'wirbt',
    t2: 'warb',
    t3: 'hat geworben',
  },
  {
    t0: 'werden',
    t1: 'wird',
    t2: 'wurde',
    t3: 'ist geworden',
  },
  {
    t0: 'werfen',
    t1: 'wirft',
    t2: 'warf',
    t3: 'hat geworfen',
  },
  {
    t0: 'wiegen качать, весить',
    t1: 'wiegt',
    t2: 'wog',
    t3: 'hat gewogen',
  },
  {
    t0: 'winden мотать',
    t1: 'windet',
    t2: 'wand',
    t3: 'hat gewunden',
  },
  {
    t0: 'wissen',
    t1: 'weiß',
    t2: 'wusste',
    t3: 'hat gewusst',
  },
  {
    t0: 'wollen',
    t1: 'will',
    t2: 'wollte',
    t3: 'hat gewollt',
  },
  {
    t0: 'ziehen (.../...) тащить',
    t1: 'zieht',
    t2: 'zog',
    t3: 'hat/ist gezogen',
  },
  {
    t0: 'zwingen принуждать',
    t1: 'zwingt',
    t2: 'zwang',
    t3: 'hat gezwungen',
  },

]
// --------------------------
import { ref } from 'vue'
import Loader from "@/components/Loader.vue";
import ImgLoader from "@/components/ImgLoader.vue";
var isLoading = ref(true);
const imgFertig = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
};

</script>

<style lang="scss" scoped>
.block {
  outline: 3px solid white;
  border-radius: 4px;
  background: rgba(214, 210, 208, 0.6588235294);


  &__top {
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    column-gap: 5px;
    row-gap: 15px;

    @media (max-width: 800px) {
      display: none;
    }

    span {
      padding: 3px;
      font-family: 'HouschkaPro-DemiBold', sans-serif;
      font-size: 18px;
      color: #eb2f2f;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    column-gap: 5px;
    align-items: center;
    padding: 3px 0;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    p,
    h3 {
      padding: 3px;
    }
  }
}
</style>