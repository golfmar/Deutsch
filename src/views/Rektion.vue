<template lang="pug">
.container
  .page-title 
    h2 Die Rektion der Verben
  .page-block
    .lokal-area
      h3 Dativ 
      p mit - nach - aus- zu - von - bei - ab - seit - außer - entgegen - gegenüber
    .lokal-area
      h3 Akkusativ
      p um - durch - antlang - gegen - für - bis - ohne - wider
    .lokal-area
      h3 Akkusativ oder Dativ
      p in - an - auf - neben - hinten - über - vor - unter - zwischen
  .page-block.blue-grey-4
    .page-title--small 
      h2 Akkusativ ohne Präposition
    TabsTraining( title='' :SlotData='SlotAkkusativohnePräposition' )
  .page-block.blue-grey-4
    .page-title--small 
      h2 Akkusativ mit Präposition
    TabsTraining( title='' :SlotData='SlotAkkusativmitPräposition' )

  .page-block.blue-grey-4
    .page-title--small 
      h2 Dativ ohne Präposition
    TabsTraining( title='' :SlotData='SlotDativohnePräposition' )
  .page-block.blue-grey-4
    .page-title--small 
      h2 Dativ mit Präposition
    TabsTraining( title='' :SlotData='SlotDativmitPräposition' )
  .page-block.blue-grey-4
    .page-title--small 
      h2 Doppelt gesteuerte Verben
    TabsTraining( title='A + A' :SlotData='SlotDoppeltAA' )
    TabsTraining( title='D + D' :SlotData='SlotDoppeltDD' )
    TabsTraining( title='D + A' :SlotData='SlotDoppeltDA' )
    TabsTraining( title='A + D' :SlotData='SlotDoppeltAD' )
    TabsTraining( title='A + G' :SlotData='SlotDoppeltAG' )

</template>
<script setup>
import Tabs from '@/components/Tabs.vue';
import TabsTraining from '@/components/TabsTraining.vue';

const SlotDoppeltAA = [

  {
    t0: 'пристраивать что-л к чему-л-----------anbauen',
    t1: 'anbauen',
    t2: 'A',
    t3: 'an',
    t4: 'A',
  },
  {
    t0: 'напомнить кому-л о чём-л----------mahnen',
    t1: 'mahnen',
    t2: 'A',
    t3: 'an',
    t4: 'A',
  },
  {
    t0: 'завидовать кому-л в чём-л-----------beneiden',
    t1: 'beneiden',
    t2: 'A',
    t3: 'um',
    t4: 'A',
  },
  {
    t0: 'просить (у) кого-л что-л, о чём-л',
    t1: 'bitten',
    t2: 'A',
    t3: 'um',
    t4: 'A',
  },
  {
    t0: 'принимать, считать кого-л кем-л, за кого-л--------halten',
    t1: 'halten',
    t2: 'A',
    t3: 'für',
    t4: 'A',
  },
  {
    t0: 'голосовать за кого-л, что-л против кого-л, чего-л--------stimmen',
    t1: 'stimmen',
    t2: 'für',
    t3: 'A',
    t4: 'gegen',
    t4: 'A',
  },

]
const SlotDoppeltDD = [

  {
    t0: 'наводить справки, осведомляться у кого-л, где-л о ком-л, чём-л----------erkundigen',
    t1: 'erkundigen',
    t2: 'sich',
    t3: 'bei',
    t4: 'D',
    t5: 'nach',
    t6: 'D',
  },
  {
    t0: 'рассказ(ыв)ать кому-л о чём-л',
    t1: 'erzählen',
    t2: 'D',
    t3: 'von',
    t4: 'D',
  },
  {
    t0: 'не хватать, недоставать кому-л чего-л------------fehlen',
    t1: 'fehlen',
    t2: 'D',
    t3: 'an',
    t4: 'D',
  },
  {
    t0: 'помогать кому-л в чем-л',
    t1: 'helfen',
    t2: 'D',
    t3: 'bei',
    t4: 'D',
  },
  {
    t0: 'поздравлять кого-л с чем-л',
    t1: 'gratulieren',
    t2: 'D',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'говорить с кем-л о ком-л',
    t1: 'sprechen',
    t2: 'mit',
    t3: 'D',
    t4: 'von',
    t5: 'D',
  },
  {
    t0: 'требовать от кого-л чего-л------------verlangen',
    t1: 'verlangen D',
    t2: 'von',
    t3: 'D',
    t4: 'nach',
    t5: 'D',
  },

]
const SlotDoppeltDA = [

  {
    t0: 'благодарить кого-л за что-л ----------------bedanken',
    t1: 'bedanken',
    t2: 'sich',
    t3: 'bei',
    t4: 'D',
    t5: 'für',
    t5: 'A',
  },
  {
    t0: 'пожаловаться кому-л, куда-л на кого-л, что-л ------------------beklagen',
    t1: 'beklagen',
    t2: 'sich',
    t3: 'bei',
    t4: 'D',
    t5: 'über',
    t6: 'A',
  },
  {
    t0: '(по)жаловаться кому-л, во что-л на кого-л, что-л',
    t1: 'beschweren',
    t2: 'sich',
    t3: 'bei',
    t4: 'D',
    t5: 'über',
    t6: 'A',
  },
  {
    t0: 'благодарить кого-л за что-л',
    t1: 'danken',
    t2: 'D',
    t3: 'für',
    t4: 'A',
  },
  {
    t0: 'узнать от кого-л о чём-л',
    t1: 'erfahren',
    t2: 'durch',
    t3: 'D',
    t4: 'über',
    t5: 'A',
  },
  {
    t0: 'говорить с кем-л о чём-л',
    t1: 'sprechen',
    t2: 'mit',
    t3: 'D',
    t4: 'über',
    t5: 'A',
  },
  {
    t0: 'мстить кому-л за что-л------------rächen',
    t1: 'rächen',
    t2: 'an',
    t3: 'D',
    t4: 'für',
    t5: 'A',
  },
  {
    t0: 'переводить с какого-л языка на какой-л язык',
    t1: 'übersetzen',
    t2: 'aus',
    t3: 'D',
    t4: 'in',
    t5: 'A',
  },
  {
    t0: 'беседовать, разговаривать с кем-л о ком-л, чём-л------------unterhalten',
    t1: 'unterhalten',
    t2: 'sich',
    t3: 'mit',
    t4: 'D',
    t5: 'über',
    t6: 'A',
  },

]
const SlotDoppeltAD = [

  {
    t0: 'отвлекать кого-л от чего-л abziehen ',
    t1: 'abziehen',
    t2: 'A',
    t3: 'von',
    t4: 'D',
  },
  {
    t0: 'поручать кому-л что-л beauftragen',
    t1: 'beauftragen',
    t2: 'A',
    t3: 'mit',
    t4: 'D',
  },
  {
    t0: 'поздравлять кого-л с чем-л beglückwünschen',
    t1: 'beglückwünschen',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'давать/предоставлять право кому-л на что-л berechtigen',
    t1: 'berechtigen',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'оберегать кого-л от чего-л behüten',
    t1: 'behüten',
    t2: 'A',
    t3: 'vor',
    t4: 'D',
  },
  {
    t0: '(со)хранить, (у)беречь что-л от чего-л bewahren',
    t1: 'bewahren',
    t2: 'A',
    t3: 'vor',
    t4: 'D',
  },
  {
    t0: 'приглашать кого-л на что-л',
    t1: 'einladen',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'отнимать кого-л, что-л у кого-л entziehen',
    t1: 'entziehen',
    t2: 'A',
    t3: '+',
    t4: 'D',
  },
  {
    t0: 'узнать, опознать кого-л, что-л по чему-л',
    t1: 'erkennen',
    t2: 'A',
    t3: 'an',
    t4: 'D',
  },
  {
    t0: 'назначить кого-л.кем-л, на какую-л должность ernennen',
    t1: 'ernennen',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'воспитать кого-л кем-л, каким-л, в духе чего-л erziehen',
    t1: 'erziehen',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'препятствовать кому-л в чём-л hindern',
    t1: 'hindern',
    t2: 'A',
    t3: 'an',
    t4: 'D',
  },
  {
    t0: 'схватить кого-л за что-л greifen',
    t1: 'greifen',
    t2: 'A',
    t3: 'nach',
    t4: 'D',
  },
  {
    t0: 'мешать кому-л в чем-л',
    t1: 'stören',
    t2: 'A',
    t3: 'bei',
    t4: 'D',
  },
  {
    t0: 'уговорить, упросить, уломать кого-л на что-л überreden',
    t1: 'überreden',
    t2: 'A',
    t3: 'zu',
    t4: 'D',
  },
  {
    t0: 'предупреждать кого-л о чем-л warnen',
    t1: 'warnen',
    t2: 'A',
    t3: 'vor',
    t4: 'D',
  },


]
const SlotDoppeltAG = [

  {
    t0: 'обвинять кого-л в чём-л beschuldigen',
    t1: 'beschuldigen',
    t2: 'A',
    t3: '+',
    t4: 'G',
  },
  {
    t0: 'смещать кого-л с какого-л поста, какой-л Должности entsetzen',
    t1: 'entsetzen',
    t2: 'A',
    t3: '+',
    t4: 'G',
  },

]

const SlotDativmitPräposition = [

  {
    t0: 'начинать с чего-л',
    t1: 'anfangen',
    t2: 'mit',
  },

  {
    t0: 'прекратить, прервать что-л aufhören',
    t1: 'aufhören',
    t2: 'mit',
  },

  {
    t0: 'заниматься чем-л befassen',
    t1: 'befassen',
    t2: 'sich',
    t3: 'mit',
  },

  {
    t0: 'обоснов(ыв)ать чем-л begründen',
    t1: 'begründen',
    t2: 'mit',
  },

  {
    t0: 'заниматься чем-л beschäftigen',
    t1: 'beschäftigen',
    t2: 'sich',
    t3: 'mit',
  },

  {
    t0: 'начинать с чего-л.',
    t1: 'beginnen',
    t2: 'mit',
  },

  {
    t0: 'подготовить (что-то) fertig',
    t1: 'fertig',
    t2: 'sein',
    t3: 'mit',
  },

  {
    t0: 'случиться с кем-то geschehen',
    t1: 'geschehen',
    t2: 'mit',
  },

  {
    t0: 'торговать чем-л, с кем-л handeln',
    t1: 'handeln',
    t2: 'mit',
  },
  {
    t0: 'считаться с чем-л; учитывать, принимать во внимание что-л rechnen',
    t1: 'rechnen',
    t2: 'mit',
  },
  {
    t0: 'писать кому-л.',
    t1: 'schreiben',
    t2: 'mit',
  },
  {
    t0: 'переписываться с кем-л',
    t1: 'schreiben',
    t2: 'sich',
    t3: 'mit',
  },
  {
    t0: 'браниться с кем-л schimpfen',
    t1: 'schimpfen',
    t2: 'mit',
  },
  {
    t0: 'встречаться с кем-л',
    t1: 'treffen',
    t2: 'sich',
    t3: 'mit',
  },
  {
    t0: 'разговаривать по телефону с кем-л',
    t1: 'telefonieren',
    t2: 'mit',
  },
  {
    t0: 'женить на ком-л',
    t1: 'verheiraten',
    t2: 'mit',
  },
  {
    t0: 'способствовать чему-л beitragen',
    t1: 'beitragen',
    t2: 'zu',
  },
  {
    t0: 'решиться на что-л entschließen',
    t1: 'entschließen',
    t2: 'sich',
    t3: 'zu',
  },
  {
    t0: 'принадлежать к кому-л',
    t1: 'gehören',
    t2: 'zu',
  },
  {
    t0: 'годиться на что-л taugen',
    t1: 'taugen',
    t2: 'zu',
  },
  {
    t0: 'проклясть, приговорить к чему-л verdammen',
    t1: 'verdammen',
    t2: 'zu',
  },
  {
    t0: 'опоздать к чему-л, на что-л verspäten',
    t1: 'verspäten',
    t2: 'sich',
    t3: 'zu',
  },
  {
    t0: 'избирать кем-л wählen',
    t1: 'wählen',
    t2: 'zu',
  },
  {
    t0: 'становиться кем-то',
    t1: 'werden',
    t2: 'zu',
  },
  {
    t0: 'сходить, выгружаться (с чего-л.) aussteigen',
    t1: 'aussteigen',
    t2: 'aus',
  },
  {
    t0: 'состоять из чего-л',
    t1: 'bestehen',
    t2: 'aus',
  },
  {
    t0: 'исследовать что-л forschen',
    t1: 'forschen',
    t2: 'nach',
  },
  {
    t0: 'гнаться, охотиться за кем-л, чем-л jagen',
    t1: 'jagen',
    t2: 'nach',
  },
  {
    t0: 'руководствоваться чем-л richten',
    t1: 'richten',
    t2: 'sich',
    t3: 'nach',
  },
  {
    t0: 'пахнуть чем-л riechen',
    t1: 'riechen',
    t2: 'nach',
  },
  {
    t0: 'звать кого-л',
    t1: 'rufen',
    t2: 'nach',
  },
  {
    t0: 'иметь вкус чего-л',
    t1: 'schmecken',
    t2: 'nach',
  },
  {
    t0: 'тосковать по кому-л, чему-л sehnen',
    t1: 'sehnen',
    t2: 'sich',
    t3: 'nach',
  },
  {
    t0: 'стремиться к чему-л streben',
    t1: 'streben',
    t2: 'nach',
  },
  {
    t0: 'ощупывать что-л',
    t1: 'tasten',
    t2: 'nach',
  },
  {
    t0: 'целиться в кого-л, во что-л',
    t1: 'zielen',
    t2: 'nach',
  },
  {
    t0: 'зависеть от чего-л, кого-л abhängen',
    t1: 'abhängen',
    t2: 'von',
  },
  {
    t0: 'отказываться от чего-л absagen',
    t1: 'absagen',
    t2: 'von',
  },
  {
    t0: 'питаться, прокармливаться, добывать себе пропитание чем-л ernähren',
    t1: 'ernähren',
    t2: 'sich',
    t3: 'von',
  },
  {
    t0: 'быть какого-л мнения о ком, о чем-л halten',
    t1: 'halten',
    t2: 'von',
  },
  {
    t0: 'отказываться от кого, чего-л lassen',
    t1: 'lassen',
    t2: 'von',
  },
  {
    t0: 'извлекать выгоду/прибыль из чего-л, пользоваться чем-л, наживаться на чём-л profitieren',
    t1: 'profitieren',
    t2: 'von',
  },
  {
    t0: 'говорить о чём-л',
    t1: 'reden',
    t2: 'von',
  },
  {
    t0: 'бредить о ком-л schwärmen',
    t1: 'schwärmen',
    t2: 'von',
  },
  {
    t0: 'молчать о чём-л schweigen',
    t1: 'schweigen',
    t2: 'von',
  },
  {
    t0: 'мечтать о чём-л träumen',
    t1: 'träumen',
    t2: 'von',
  },
  {
    t0: 'убеждаться в чём-л überzeugen',
    t1: 'überzeugen',
    t2: 'sich',
    t3: 'von',
  },
  {
    t0: 'прощаться с кем-л verabschieden',
    t1: 'verabschieden',
    t2: 'sich',
    t3: 'von',
  },
  {
    t0: 'знать о чём-л',
    t1: 'wissen',
    t2: 'von',
  },
  {
    t0: 'свидетельствовать о чём-л zeugen',
    t1: 'zeugen',
    t2: 'von',
  },
  {
    t0: 'прибывать, приезжать куда-л ankommen',
    t1: 'ankommen',
    t2: 'in',
  },
  {
    t0: 'состоять, заключаться в чем-л bestehen',
    t1: 'bestehen',
    t2: 'in',
  },
  {
    t0: 'перелистывать что-л blättern',
    t1: 'blättern',
    t2: 'in',
  },
  {
    t0: 'провалиться, потерпеть неудачу в чем-л durchfallen',
    t1: 'durchfallen',
    t2: 'in',
  },
  {
    t0: 'работать (над чем-л.)',
    t1: 'arbeiten',
    t2: 'an',
  },
  {
    t0: 'участвовать в чем-л beteiligen',
    t1: 'beteiligen',
    t2: 'sich',
    t3: 'an',
  },

  {
    t0: 'заболеть чем-л erkranken',
    t1: 'erkranken',
    t2: 'an',
  },
  {
    t0: 'клеиться, приклеиваться, приставать к кому-л, чему-л kleben',
    t1: 'kleben',
    t2: 'an',
  },
  {
    t0: 'звонить (куда-л(в дверь) klingeln',
    t1: 'klingeln',
    t2: 'an',
  },
  {
    t0: 'болеть чем-л',
    t1: 'krank',
    t2: 'sein',
    t3: 'an',
  },
  {
    t0: 'страдать(болеть) чем-л.',
    t1: 'leiden',
    t2: 'an',
  },
  {
    t0: 'зависеть от чего-л, определяться чем-л. liegen',
    t1: 'liegen',
    t2: 'an',
  },

  {
    t0: 'недоставать кому-л чего-л mangeln',
    t1: 'mangeln',
    t2: 'an',
  },
  {
    t0: 'грызть что-л nagen',
    t1: 'nagen',
    t2: 'an',
  },
  {
    t0: 'дотрагиваться до чего-л, прикасаться к чему-л rühren',
    t1: 'rühren',
    t2: 'an',
  },
  {
    t0: 'быть виноватым в чём-л schuld',
    t1: 'schuld',
    t2: 'sein',
    t3: 'an',
  },
  {
    t0: 'умереть от чего-л',
    t1: 'sterben',
    t2: 'an',
  },
  {
    t0: 'принимать участие в чем-л',
    t1: 'teilnehmen',
    t2: 'an',
  },

  {
    t0: 'превосходить в чём-л überlegen',
    t1: 'überlegen',
    t2: 'sein',
    t3: 'an',
  },
  {
    t0: 'отчаиваться в чём-л verzweifeln',
    t1: 'verzweifeln',
    t2: 'an',
  },
  {
    t0: 'проезжать мимо чего-л vorbeifahren',
    t1: 'vorbeifahren',
    t2: 'an',
  },
  {
    t0: 'проходить мимо чего-л vorbeigehen',
    t1: 'vorbeigehen',
    t2: 'an',
  },
  {
    t0: 'сомневаться в чём-л, подвергать сомнению что-л zweifeln',
    t1: 'zweifeln',
    t2: 'an',
  },
  {
    t0: 'настаивать на чем-л bestehen',
    t1: 'bestehen',
    t2: 'auf',
  },


]
const SlotDativohnePräposition = [
  {
    t0: 'избегать чего-л, кого-л ausweichen',
    t1: 'ausweichen',
  },
  {
    t0: 'встречать кого-л begegnen',
    t1: 'begegnen',
  },
  {
    t0: 'вступать во что-л beitreten',
    t1: 'beitreten',
  },
  {
    t0: 'присутствовать на чём-л beiwohnen',
    t1: 'beiwohnen',
  },
  {
    t0: 'отнимать, забирать у кого-л benehmen',
    t1: 'benehmen',
  },
  {
    t0: 'следовать за кем/чем-л',
    t1: 'folgen',
  },
  {
    t0: 'нравиться кому-л',
    t1: 'gefallen',
  },
  {
    t0: 'слушаться кого-л, повиноваться кому-л gehorchen',
    t1: 'gehorchen',
  },
  {
    t0: 'получаться (у кого-л ) gelingen',
    t1: 'gelingen',
  },
  {
    t0: 'быть похожим на кого/что-л gleichen',
    t1: 'gleichen',
  },
  {
    t0: 'избегать чего-л entgehen',
    t1: 'entgehen',
  },
  {
    t0: 'убегать от кого-л, чего-л entlaufen',
    t1: 'entlaufen',
  },
  {
    t0: 'заимствовать у кого-л, из чего-л entnehmen',
    t1: 'entnehmen',
  },
  {
    t0: 'отнимать у кого-л entziehen',
    t1: 'entziehen',
  },
  {
    t0: 'увольнять кого-л',
    t1: 'kündigen',
  },
  {
    t0: '(по)следовать за кем-л, чем-л nachfolgen',
    t1: 'nachfolgen',
  },
  {
    t0: 'идти следом за кем-л, чем-л nachgehen',
    t1: 'nachgehen',
  },
  {
    t0: 'приближаться к чему-л nähern',
    t1: 'nähern',
    t2: 'sich',
  },
  {
    t0: 'случиться (с кем-л)',
    t1: 'passieren',
  },
  {
    t0: 'предотвращать что-л verbeugen',
    t1: 'verbeugen',
  },
  {
    t0: 'быть обреченным на что-л verfallen',
    t1: 'verfallen',
  },
  {
    t0: 'представляться (кому-л)',
    t1: 'vorstellen',
    t2: 'sich',
  },
  {
    t0: 'предотвращать, предупреждать что-л vorbeugen',
    t1: 'vorbeugen',
  },
  {
    t0: 'слушать кого-л',
    t1: 'zuhören',
  },
  {
    t0: 'уговаривать кого-л zureden',
    t1: 'zureden',
  },
  {
    t0: 'сердиться на кого-л, что-л zürnen',
    t1: 'zürnen',
  },
  {
    t0: 'глядеть на кого-л, что-л',
    t1: 'zusehen',
  },
  {
    t0: 'соглашаться с кем-л, чем-л',
    t1: 'zustimmen',
  },
  {
    t0: 'случиться с кем-л, чем-л zustoßen',
    t1: 'zustoßen',
  },


]

const SlotAkkusativmitPräposition = [
  {
    t0: 'просить о чём-л ansprechen',
    t1: 'ansprechen',
    t2: 'um',
  }, {
    t0: 'трудиться, корпеть над чем-л bemühen sich',
    t1: 'bemühen',
    t2: 'sich',
    t3: 'um',
  }, {
    t0: 'пода(ва)ть заявление о чем-л, претендовать на что-л, добиваться чего-л bewerben sich',
    t1: 'bewerben',
    t2: 'sich',
    t3: 'um',
  }, {
    t0: 'умолять о чём-л flehen',
    t1: 'flehen',
    t2: 'um',
  }, {
    t0: 'говориться, речь идёт о ком-л, чём-л handeln',
    t1: 'handeln',
    t2: 'sich',
    t3: 'um',

  },
  {
    t0: 'заботиться, беспокоиться о ком-л, чём-л',
    t1: 'kümmern',
    t2: 'sich',
    t3: 'um',
  },
  {
    t0: 'играть на что-л, ставить что-л на кон',
    t1: 'spielen',
    t2: 'um',
  },
  {
    t0: 'спорить, держать пари на что-л wetten',
    t1: 'wetten',
    t2: 'um',
  },
  {
    t0: 'тратить, расходовать на что-л ausgeben',
    t1: 'ausgeben',
    t2: 'für',
  },
  {
    t0: 'вдохновляться, восхищаться кем-л, чем-л begeistern',
    t1: 'begeistern',
    t2: 'sich',
    t3: 'für',
  },
  {
    t0: 'решиться на что-л ',
    t1: 'entscheiden',
    t2: 'sich',
    t3: 'für',
  },
  {
    t0: 'интересоваться чем-л',
    t1: 'interessieren',
    t2: 'sich',
    t3: 'für',
  },
  {
    t0: 'заботиться о ком-л, чем-л',
    t1: 'sorgen',
    t2: 'für',
  },
  {
    t0: 'бороться с кем/чем-л, против кого/чего-л',
    t1: 'kämpfen',
    t2: 'gegen',
  },
  {
    t0: 'нарушить что-л, согрешить против чего-л verstoßen',
    t1: 'verstoßen',
    t2: 'gegen',
  },

  {
    t0: 'обращать внимание на кого-л., что-л; внимательно следить за кем-л, чем-л',
    t1: 'achten',
    t2: 'auf',
  },
  {
    t0: 'зависеть от чего-л ankommen',
    t1: 'ankommen',
    t2: 'auf',
  },
  {
    t0: 'отвечать на что-л',
    t1: 'antworten',
    t2: 'auf',
  },
  {
    t0: 'следить, присматривать, наблюдать за чем-л aufpassen',
    t1: 'aufpassen',
    t2: 'auf',
  },
  {
    t0: 'ограничиваться чем-л beschränken sich',
    t1: 'beschränken',
    t2: 'sich',
    t3: 'auf',
  },

  {
    t0: 'настаивать на чём-л bestehen',
    t1: 'bestehen',
    t2: 'auf',
  },
  {
    t0: 'ссылаться на что-л, затрагивать что-л beziehen',
    t1: 'beziehen',
    t2: 'sich',
    t3: 'auf',
  },
  {
    t0: 'указывать, намекать на что-л; предвещать, сулить что-л deuten',
    t1: 'deuten',
    t2: 'auf',
  },
  {
    t0: 'согласиться, пойти на что-л eingehen',
    t1: 'eingehen',
    t2: 'auf',
  },
  {
    t0: 'уговорить, убедить кого-л einreden',
    t1: 'einreden',
    t2: 'auf',
  },
  {
    t0: 'радоваться чему-л (предстоящему)',
    t1: 'freuen',
    t2: 'sich',
    t3: 'auf',
  },
  {
    t0: 'указывать на что-л hinweisen',
    t1: 'hinweisen',
    t2: 'auf',
  },
  {
    t0: 'надеяться на что-л, кого-л',
    t1: 'hoffen',
    t2: 'auf',
  },
  {
    t0: 'придавать значение чему-л halten',
    t1: 'halten',
    t2: 'auf',
  },
  {
    t0: 'поджидать, подкарауливать кого-л lauern',
    t1: 'lauern',
    t2: 'auf',
  },
  {
    t0: 'сосредоточи(ва)ться, (с)концентрироваться на чём-л, ком-л',
    t1: 'konzentrieren',
    t2: 'sich',
    t3: 'auf',
  },
  {
    t0: 'рассчитывать на что-л, кого-л rechnen',
    t1: 'rechnen',
    t2: 'auf',
  },
  {
    t0: 'быть гордым чем-л, кем-л',
    t1: 'stolz',
    t2: 'sein',
    t3: 'auf',
  },
  {
    t0: 'сталкиваться с чем-л, наталкиваться на что-л stoßen',
    t1: 'stoßen',
    t2: 'auf',
  },
  {
    t0: 'бранить, проклинать кого-л schelten',
    t1: 'schelten',
    t2: 'auf',
  },
  {
    t0: 'стрелять в кого-л schießen',
    t1: 'schießen',
    t2: 'auf',
  },
  {
    t0: '(вы)пить за что-л, кого-л',
    t1: 'trinken',
    t2: 'auf',
  },
  {
    t0: 'положиться на что-л, кого-л verlassen',
    t1: 'verlassen',
    t2: 'sich',
    t3: 'auf',
  },
  {
    t0: 'доверять чему-л, кому-л vertrauen',
    t1: 'vertrauen',
    t2: 'auf',
  },
  {
    t0: 'отказаться от чего-л, пожертвовать, поступиться чем-л verzichten',
    t1: 'verzichten',
    t2: 'auf',
  },
  {
    t0: 'готовиться к чему-л',
    t1: 'vorbereiten',
    t2: 'sich',
    t3: 'auf',
  },
  {
    t0: 'ждать кого-л, чего-л',
    t1: 'warten',
    t2: 'auf',
  },
  {
    t0: 'подходить к кому-л; вступать в контакт, налаживать общение с кем-л zugehen',
    t1: 'zugehen',
    t2: 'auf',
  },
  {
    t0: 'заде(ва)ть за что-л., натолкнуться на что-л anstoßen',
    t1: 'anstoßen',
    t2: 'an',
  },
  {
    t0: 'работать над чем-л',
    t1: 'arbeiten',
    t2: 'an',
  },
  {
    t0: 'думать о чём-л, ком-л',
    t1: 'denken',
    t2: 'an',
  },
  {
    t0: 'вспоминать о ком-л, чём-л',
    t1: 'erinnern',
    t2: 'sich',
    t3: 'an',
  },
  {
    t0: 'привыкать к чему-л, кому-л',
    t1: 'gewöhnen',
    t2: 'sich',
    t3: 'an',
  },
  {
    t0: 'верить во что-л',
    t1: 'glauben',
    t2: 'an',
  },
  {
    t0: 'граничить с чем-л',
    t1: 'grenzen',
    t2: 'an',
  },
  {
    t0: 'придерживаться чего-л halten',
    t1: 'halten',
    t2: 'sich',
    t3: 'an',
  },
  {
    t0: 'обращаться к кому-л richten',
    t1: 'richten',
    t2: 'sich',
    t3: 'an',
  },
  {
    t0: 'писать к',
    t1: 'schreiben',
    t2: 'an',
  },
  {
    t0: 'поворачиваться к wenden',
    t1: 'wenden',
    t2: 'sich',
    t3: 'an',
  },
  {
    t0: 'развлекаться чем-л amüsieren',
    t1: 'amüsieren',
    t2: 'sich',
    t3: 'über',

  },
  {
    t0: 'злиться, сердиться на кого/что-л, из-за чего-л',
    t1: 'ärgern',
    t2: 'sich',
    t3: 'über',

  },
  {
    t0: 'волноваться, беспокоиться из-за чего-л, кого-л aufregen',
    t1: 'aufregen',
    t2: 'sich',
    t3: 'über',

  },
  {
    t0: 'сообщать, докладывать, рапортовать о чём-л berichten',
    t1: 'berichten',
    t2: 'über',

  },
  {
    t0: 'дискутировать о чём-л, обсуждать что-л',
    t1: 'diskutieren',
    t2: 'über',

  },
  {
    t0: 'радоваться чему-л (свершившемуся)',
    t1: 'freuen',
    t2: 'sich',
    t3: 'über',

  },
  {
    t0: 'сообщать что-л, информировать о чём-л',
    t1: 'informieren',
    t2: 'über',
  },
  {
    t0: 'собирать информацию, справляться о чём-л; узнавать, выяснять что-л',
    t1: 'informieren',
    t2: 'sich',
    t3: 'über',
  },
  {
    t0: 'жаловаться на кого-л, что-л',
    t1: 'klagen',
    t2: 'über',
  },
  {
    t0: 'смеяться над кем-л, чем-л',
    t1: 'lachen',
    t2: 'über',
  },
  {
    t0: 'думать, размышлять о ком-л, чём-л',
    t1: 'nachdenken',
    t2: 'über',
  },
  {
    t0: 'говорить о ком-л',
    t1: 'reden',
    t2: 'über',
  },
  {
    t0: 'победить кого/что-л, выиграть у кого-л siegen',
    t1: 'siegen',
    t2: 'über',
  },
  {
    t0: 'поражаться чему-л staunen',
    t1: 'staunen',
    t2: 'über',
  },
  {
    t0: 'переводить, перевозить, переправлять; перешагнуть; переключать что-л',
    t1: 'übersetzen',
    t2: 'über',
  },
  {
    t0: 'распоряжаться чем-л verfügen',
    t1: 'verfügen',
    t2: 'über',
  },
  {
    t0: 'удивляться чему-л',
    t1: 'wundern',
    t2: 'sich',
    t3: 'über',
  },
  {
    t0: 'щипать за что-л kneifen',
    t1: 'kneifen',
    t2: 'in',

  }

]

const SlotAkkusativohnePräposition = [
  {
    t0: 'заходить за кем-л  (Когда я смогу забрать тебя?)',
    t1: 'Wann',
    t2: 'kann',
    t3: 'ich',
    t4: 'dich',
    t5: 'abholen',
    t6: '?',
  },
  {
    t0: 'звонить кому-л (Ему не обязательно было тебе звонить. musste)',
    t1: 'Er',
    t2: 'musste',
    t3: 'dich',
    t4: 'nicht',
    t5: 'anrufen',
    t6: '.',

  },
  {
    t0: 'стянуть, вынуть (вынуть ключ зажигания Zündschlüssel abziehen)',
    t1: 'den',
    t2: 'Zündschlüssel',
    t3: 'abziehen',
  },
  {
    t0: 'отвечать на что-л (ответить на приветствие Gruß)',
    t1: 'einen',
    t2: 'Gruß',
    t3: 'beantworten',
  },
  {
    t0: 'поручать кому-л (поручить кому-либо сделать что-либо--- jemanden etwas beauftragen)',
    t1: 'jemanden',
    t2: 'mit',
    t3: 'etwas',
    t4: 'beauftragen',
  },
  {
    t0: 'войти во что-л, куда-л (после морского путешествия наконец-то снова на твердую землю ступил Seereise endlich wieder festen Boden betreten)',
    t1: 'nach',
    t2: 'der',
    t3: 'Seereise',
    t4: 'endlich',
    t5: 'wieder',
    t6: 'festen',
    t7: 'Boden',
    t8: 'betreten',
  },
  {
    t0: 'нуждаться в чём-л (Мне нужно время для себя. brauche Zeit)',
    t1: 'Ich',
    t2: 'brauche',
    t3: 'Zeit',
    t4: 'für',
    t5: 'mich',
    t6: '.',
  },
  {
    t0: 'достигать чего-л (Ты не смог связаться с ним? konntest erreichen)',
    t1: 'Du',
    t2: 'konntest',
    t3: 'ihn',
    t4: 'nicht',
    t5: 'erreichen',
    t6: '?',
  },
  {
    t0: 'наслаждаться чем-л (Наслаждайтесь Вашим кексом. Genießen Cupcake)',
    t1: 'Genießen',
    t2: 'Sie',
    t3: 'Ihren',
    t4: 'Cupcake',
    t5: '.',
  },
  {
    t0: '(по)знакомиться с кем-л (Приятно познакомиться. Schön,)',
    t1: 'Schön',
    t2: ',',
    t3: 'dich',
    t4: 'kennen',
    t5: 'zu',
    t6: 'lernen',
    t7: '.',
  },
  {
    t0: 'руководить кем-л, чем-л (Я здесь, чтобы руководить вашим штабом. Ich Stab leiten)',
    t1: 'Ich',
    t2: 'bin',
    t3: 'hier',
    t4: ',',
    t5: 'um',
    t6: 'Ihren',
    t7: 'Stab',
    t8: 'zu',
    t9: 'leiten',
    t10: '.',
  },
  {
    t0: 'брать, взять, отнимать что-л (Этого у вас невозможно отнять. Das Ihnen nehmen)',
    t1: 'Das',
    t2: 'kann',
    t3: 'man',
    t4: 'Ihnen',
    t5: 'nicht',
    t6: 'nehmen',
    t7: '.',
  },
  {
    t0: 'играть во что-л, на чём-л (Давайте сыграем в игру. Spielen wir Spiel)',
    t1: 'Spielen',
    t2: 'wir',
    t3: 'ein',
    t4: 'Spiel',
    t5: '.',
  },
  {
    t0: 'мешать кому-л, беспокоить кого-л (Я уверен, нам человек не помешает. Ich sicher nicht stören)',
    t1: 'Ich',
    t2: 'bin',
    t3: 'sicher',
    t4: ',',
    t5: 'man',
    t6: 'wird',
    t7: 'uns',
    t8: 'nicht',
    t9: 'stören',
    t10: '.',
  },
  {
    t0: 'обижаться за что-л (Можешь ли ты на него обижаться? Kannst übelnehmen)',
    t1: 'Kannst',
    t2: 'du',
    t3: 'ihm',
    t4: 'das',
    t5: 'übelnehmen',
    t6: '?',
  },
  {
    t0: 'упрекать кого-л (Можешь ли ты обвинять меня? Kannst vorwerfen)',
    t1: 'Kannst',
    t2: 'du',
    t3: 'mir',
    t4: 'was',
    t5: 'vorwerfen',
    t6: '?',
  },
  {
    t0: 'предупреждать, предостерегать кого-л (Я пришел, чтобы предупредить тебя. kam warnen)',
    t1: 'Ich',
    t2: 'kam',
    t3: ',',
    t4: 'um',
    t5: 'dich',
    t6: 'zu',
    t7: 'warnen',
    t8: '.',
  }

]


</script>

<style lang="scss" scoped>
.lokal-area {
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin: 0 0 10px 0;

  p {
    margin: 0 0 0 0 !important;
  }

  &:nth-child(1) {
    p {
      color: $teal-7;
    }

  }

  &:nth-child(2) {
    p {
      color: $amber-9;
    }
  }

  &:nth-child(3) {
    p {
      color: $indigo-9;
    }
  }
}
</style>