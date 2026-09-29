/************************ 
 * Auditory_Naming *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'auditory_naming';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_1RoutineBegin());
flowScheduler.add(consent_1RoutineEachFrame());
flowScheduler.add(consent_1RoutineEnd());
flowScheduler.add(consent_2RoutineBegin());
flowScheduler.add(consent_2RoutineEachFrame());
flowScheduler.add(consent_2RoutineEnd());
flowScheduler.add(consent_3RoutineBegin());
flowScheduler.add(consent_3RoutineEachFrame());
flowScheduler.add(consent_3RoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(demographic_infoRoutineBegin());
flowScheduler.add(demographic_infoRoutineEachFrame());
flowScheduler.add(demographic_infoRoutineEnd());
flowScheduler.add(practice_1RoutineBegin());
flowScheduler.add(practice_1RoutineEachFrame());
flowScheduler.add(practice_1RoutineEnd());
flowScheduler.add(practice_transitionRoutineBegin());
flowScheduler.add(practice_transitionRoutineEachFrame());
flowScheduler.add(practice_transitionRoutineEnd());
flowScheduler.add(practice_2RoutineBegin());
flowScheduler.add(practice_2RoutineEachFrame());
flowScheduler.add(practice_2RoutineEnd());
flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const aud_namLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(aud_namLoopBegin(aud_namLoopScheduler));
flowScheduler.add(aud_namLoopScheduler);
flowScheduler.add(aud_namLoopEnd);



flowScheduler.add(finalRoutineBegin());
flowScheduler.add(finalRoutineEachFrame());
flowScheduler.add(finalRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // libraries:
    {'surveyLibrary': true},
    // resources:
    {'surveyId': '#25e8f1da-740f-438d-9188-7f1f81bd137d'},
    {'name': 'chuva.mp3', 'path': 'chuva.mp3'},
    {'name': 'chuva.mp3', 'path': 'chuva.mp3'},
    {'name': 'stimuli_A.csv', 'path': 'stimuli_A.csv'},
    {'name': 'stimuli_B.csv', 'path': 'stimuli_B.csv'},
    {'name': 'stimuli_C.csv', 'path': 'stimuli_C.csv'},
    {'name': 'banco.mp3', 'path': 'banco.mp3'},
    {'name': 'bengala.mp3', 'path': 'bengala.mp3'},
    {'name': 'biblioteca.mp3', 'path': 'biblioteca.mp3'},
    {'name': 'bruxa.mp3', 'path': 'bruxa.mp3'},
    {'name': 'joelho.mp3', 'path': 'joelho.mp3'},
    {'name': 'médico.mp3', 'path': 'médico.mp3'},
    {'name': 'perna.mp3', 'path': 'perna.mp3'},
    {'name': 'praia.mp3', 'path': 'praia.mp3'},
    {'name': 'árvore.mp3', 'path': 'árvore.mp3'},
    {'name': 'avião.mp3', 'path': 'avião.mp3'},
    {'name': 'balança.mp3', 'path': 'balança.mp3'},
    {'name': 'balão.mp3', 'path': 'balão.mp3'},
    {'name': 'botão.mp3', 'path': 'botão.mp3'},
    {'name': 'câmera.mp3', 'path': 'câmera.mp3'},
    {'name': 'cardápio.mp3', 'path': 'cardápio.mp3'},
    {'name': 'coração.mp3', 'path': 'coração.mp3'},
    {'name': 'cozinha.mp3', 'path': 'cozinha.mp3'},
    {'name': 'dedão.mp3', 'path': 'dedão.mp3'},
    {'name': 'dicionário.mp3', 'path': 'dicionário.mp3'},
    {'name': 'gema.mp3', 'path': 'gema.mp3'},
    {'name': 'gilete.mp3', 'path': 'gilete.mp3'},
    {'name': 'lápis.mp3', 'path': 'lápis.mp3'},
    {'name': 'mangas.mp3', 'path': 'mangas.mp3'},
    {'name': 'mosquito.mp3', 'path': 'mosquito.mp3'},
    {'name': 'óculos.mp3', 'path': 'óculos.mp3'},
    {'name': 'ônibus.mp3', 'path': 'ônibus.mp3'},
    {'name': 'pão.mp3', 'path': 'pão.mp3'},
    {'name': 'piloto.mp3', 'path': 'piloto.mp3'},
    {'name': 'poço.mp3', 'path': 'poço.mp3'},
    {'name': 'raiz.mp3', 'path': 'raiz.mp3'},
    {'name': 'relógio.mp3', 'path': 'relógio.mp3'},
    {'name': 'sofá.mp3', 'path': 'sofá.mp3'},
    {'name': 'submarino.mp3', 'path': 'submarino.mp3'},
    {'name': 'tartaruga.mp3', 'path': 'tartaruga.mp3'},
    {'name': 'tatuagem.mp3', 'path': 'tatuagem.mp3'},
    {'name': 'termômetro.mp3', 'path': 'termômetro.mp3'},
    {'name': 'terra.mp3', 'path': 'terra.mp3'},
    {'name': 'uvas.mp3', 'path': 'uvas.mp3'},
    {'name': 'ventilador.mp3', 'path': 'ventilador.mp3'},
    {'name': 'violino.mp3', 'path': 'violino.mp3'},
    {'name': 'vaso.mp3', 'path': 'vaso.mp3'},
    {'name': 'guarda-chuva.mp3', 'path': 'guarda-chuva.mp3'},
    {'name': 'mesa.mp3', 'path': 'mesa.mp3'},
    {'name': 'meias.mp3', 'path': 'meias.mp3'},
    {'name': 'ovelha.mp3', 'path': 'ovelha.mp3'},
    {'name': 'nariz.mp3', 'path': 'nariz.mp3'},
    {'name': 'tartaruga.mp3', 'path': 'tartaruga.mp3'},
    {'name': 'rato.mp3', 'path': 'rato.mp3'},
    {'name': 'lua.mp3', 'path': 'lua.mp3'},
    {'name': 'escada.mp3', 'path': 'escada.mp3'},
    {'name': 'faca.mp3', 'path': 'faca.mp3'},
    {'name': 'pipa.mp3', 'path': 'pipa.mp3'},
    {'name': 'chave.mp3', 'path': 'chave.mp3'},
    {'name': 'casa.mp3', 'path': 'casa.mp3'},
    {'name': 'martelo.mp3', 'path': 'martelo.mp3'},
    {'name': 'luvas.mp3', 'path': 'luvas.mp3'},
    {'name': 'garfo.mp3', 'path': 'garfo.mp3'},
    {'name': 'bandeira.mp3', 'path': 'bandeira.mp3'},
    {'name': 'pato.mp3', 'path': 'pato.mp3'},
    {'name': 'bateria.mp3', 'path': 'bateria.mp3'},
    {'name': 'coroa.mp3', 'path': 'coroa.mp3'},
    {'name': 'vaca.mp3', 'path': 'vaca.mp3'},
    {'name': 'gato.mp3', 'path': 'gato.mp3'},
    {'name': 'bolo.mp3', 'path': 'bolo.mp3'},
    {'name': 'sino.mp3', 'path': 'sino.mp3'},
    {'name': 'abelha.mp3', 'path': 'abelha.mp3'},
    {'name': 'bola.mp3', 'path': 'bola.mp3'},
    {'name': 'professor.mp3', 'path': 'professor.mp3'},
    {'name': 'vassoura.mp3', 'path': 'vassoura.mp3'},
    {'name': 'prato.mp3', 'path': 'prato.mp3'},
    {'name': 'morcego.mp3', 'path': 'morcego.mp3'},
    {'name': 'sorvete.mp3', 'path': 'sorvete.mp3'},
    {'name': 'cama.mp3', 'path': 'cama.mp3'},
    {'name': 'papagaio.mp3', 'path': 'papagaio.mp3'},
    {'name': 'elefante.mp3', 'path': 'elefante.mp3'},
    {'name': 'cachorro.mp3', 'path': 'cachorro.mp3'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var consent_1Clock;
var consentimento;
var concordo;
var consent_2Clock;
var consentimento_2;
var concordo_2;
var consent_3Clock;
var consentimento_3;
var concordo_3;
var instructionsClock;
var instrucoes;
var key_resp;
var files;
var idx;
var useFile;
var practice_1Clock;
var practice_audio_1;
var practice_write_1;
var practice_respostas_1;
var key_resp_3;
var practice_transitionClock;
var pract_transition;
var concordo_4;
var practice_2Clock;
var practice_audio_2;
var practice_write_2;
var practice_respostas_2;
var key_resp_4;
var practice_endClock;
var pract_transition_2;
var concordo_5;
var trialsClock;
var stim_audio;
var stim_write;
var respostas;
var key_resp_2;
var cruzClock;
var polygon;
var finalClock;
var agradecimento;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent_1"
  consent_1Clock = new util.Clock();
  consentimento = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentimento',
    text: 'TESTE DE NOMEAÇÃO AUDITIVA EM PORTUGUÊS BRASILEIRO\nPesquisadores Executantes: Analía Arévalo, PhD, Dra. Telma Pantano;\nPesquisador Responsável: Prof. Dr. Guilherme Lepski;\nPesquisadores associados: Sonia Lopes, Giovanna de Oliveira Santos e Souza, Drª Patrícia Silva de Camargo, Adam Morgan, PhD, Marcia Nunes, Profa. Dra. Marije Soto, Profa. Dra. Juliana Gomes, Profa. Dra. Aniela Improta França.\nDepartamento de Neurologia da Faculdade de Medicina da Universidade de São Paulo\n\nEsta pesquisa visa validar um teste de nomeação auditiva de uma bateria de palavras. Você irá ouvir uma série de perguntas de adivinhação e terá que responder o que está sendo descrito. O teste tem duração de aproximadamente 15 minutos.\n\nAPERTE A BARRA DE ESPAÇO PARA CONTINUAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  concordo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_2"
  consent_2Clock = new util.Clock();
  consentimento_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentimento_2',
    text: 'Este teste não deve causar nenhum dano a sua saúde - afinal é só um áudio que você vai ouvir. Mas um possível risco é o cansaço mental, apesar de se tratar de um teste rápido. Portanto, é garantido ao participante a plena liberdade de recusa ou retirada de seu consentimento em qualquer fase da pesquisa sem penalização alguma, de sigilo e privacidade.\n\nOs seus dados serão tratados de forma anônima. Isso significa que seu nome não vai aparecer junto às respostas que você deu. Todos os dados e respostas dos participantes estarão protegidos na plataforma PsychoPy, cujo acesso se dá mediante login e senha do pesquisador. Ademais, os dados serão analisados de maneira sigilosa e só serão divulgados em blocos de análise estatística, sem menção aos nomes dos participantes ou quaisquer outras informações que possibilitem sua identificação. O ambiente virtual, no entanto, não é totalmente seguro, havendo potencial risco de violação de dados, por ações ilegais. Todo cuidado possível será tomado no sentido de garantir total confidencialidade dos dados.\n\nAPERTE A BARRA DE ESPAÇO PARA CONTINUAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  concordo_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_3"
  consent_3Clock = new util.Clock();
  consentimento_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentimento_3',
    text: 'Em qualquer etapa do estudo, você terá acesso aos profissionais responsáveis pela pesquisa para esclarecimento de dúvidas. O principal investigador é o Dr. Guilherme Lepski que pode ser encontrado no endereço Rua Ovídio Pires de Campos, 225 – 1º andar, telefone: 2661-6402, e-mail: g.lepski@hc.fm.usp.br. Se você tiver alguma consideração ou dúvida sobre a ética da pesquisa, entre em contato com o Comitê de Ética em Pesquisa (CEP) – Rua Ovídio Pires de Campos, 225 – 5º andar – tel: (11) 2661-7585, (11) 2661-1548, (11) 2661-1549, das 7 às 16h de segunda a sexta-feira ou por e-mail: cappesq.adm@hc.fm.usp.br\n\nAo consentir, você declara estar suficientemente informado a respeito do presente estudo. Uma via deste Termo de Consentimento Livre e Esclarecido (TCLE) poderá ser encaminhada mediante solicitação ao seu e-mail.\n\nAPERTE A BARRA DE ESPAÇO PARA CONCORDAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  concordo_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instrucoes = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrucoes',
    text: 'INSTRUÇÕES\n\nNeste teste, você irá escutar uma definição de uma palavra -- como em um jogo de adivinha -- e deverá escrever qual é esta palavra com o seu teclado. O áudio só será tocado uma vez, então ouça com atenção. Uma vez que tenha dado sua resposta, aperte o ENTER (ou RETURN) para passar para a próxima palavra. Entre cada tentativa, você verá brevemente uma pequena cruz no centro da tela -- ela serve para te dar o tempo para se preparar para o novo áudio. \n\nNo total, o teste leva em torno de 15 minutos. Tente responder de forma acertada cada um dos áudios. Você pode editar suas respostas se cometer algum erro ou mudar de ideia.\n\nAgora, você responderá a algumas perguntas demográficas e depois fará UM TREINO. Em seguida, iniciará o teste. \n\nAPERTE A BARRA DE ESPAÇO PARA PASSAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from split_groups
  files = ["stimuli_A.csv", "stimuli_B.csv", "stimuli_C.csv"];
  idx = util.randint(0, 3);
  useFile = files[idx];
  
  // Initialize components for Routine "practice_1"
  practice_1Clock = new util.Clock();
  practice_audio_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  practice_audio_1.setVolume(1.0);
  practice_audio_1.isPlaying = false;
  practice_audio_1.isFinished = false;
  practice_write_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_write_1',
    text: 'Água que cai do céu quando está nublado',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: -1.0 
  });
  
  practice_respostas_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_respostas_1',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: [-1.0000, -1.0000, -1.0000], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_transition"
  practice_transitionClock = new util.Clock();
  pract_transition = new visual.TextStim({
    win: psychoJS.window,
    name: 'pract_transition',
    text: 'Muito bem! A resposta correta é CHUVA\n\nRepare que dessa vez você viu a frase escrita na tela. No teste de verdade, você NÃO vai ver nada escrito — só vai ouvir o áudio, como no próximo exemplo.\n\nAPERTE A BARRA DE ESPAÇO PARA CONTINUAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  concordo_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_2"
  practice_2Clock = new util.Clock();
  practice_audio_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  practice_audio_2.setVolume(1.0);
  practice_audio_2.isPlaying = false;
  practice_audio_2.isFinished = false;
  practice_write_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_write_2',
    text: 'Água que cai do céu quando está nublado',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1, 1, 1]),  opacity: undefined,
    depth: -1.0 
  });
  
  practice_respostas_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_respostas_2',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: [-1.0000, -1.0000, -1.0000], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  pract_transition_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pract_transition_2',
    text: 'Muito bem! A resposta correta é CHUVA\n\nAgora você irá começar o teste. Lembre-se de escrever a palavra que vem à sua cabeça quando ouve a frase. Aperte ENTER ou RETURN para passar para a próxima palavra. \n\nAPERTE A BARRA DE ESPAÇO PARA COMEÇAR',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  concordo_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials"
  trialsClock = new util.Clock();
  stim_audio = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  stim_audio.setVolume(1.0);
  stim_audio.isPlaying = false;
  stim_audio.isFinished = false;
  stim_write = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_write',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1, 1, 1]),  opacity: undefined,
    depth: -1.0 
  });
  
  respostas = new visual.TextBox({
    win: psychoJS.window,
    name: 'respostas',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: [-1.0000, -1.0000, -1.0000], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cruz"
  cruzClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([-1, -1, -1]), 
    fillColor: new util.Color([-1, -1, -1]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  agradecimento = new visual.TextStim({
    win: psychoJS.window,
    name: 'agradecimento',
    text: 'Obrigada!\nAguarde a mensagem para fechar a tela.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var consent_1MaxDurationReached;
var _concordo_allKeys;
var consent_1MaxDuration;
var consent_1Components;
function consent_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_1Clock.reset();
    routineTimer.reset();
    consent_1MaxDurationReached = false;
    // update component parameters for each repeat
    concordo.keys = undefined;
    concordo.rt = undefined;
    _concordo_allKeys = [];
    psychoJS.experiment.addData('consent_1.started', globalClock.getTime());
    consent_1MaxDuration = null
    // keep track of which components have finished
    consent_1Components = [];
    consent_1Components.push(consentimento);
    consent_1Components.push(concordo);
    
    for (const thisComponent of consent_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_1' ---
    // get current time
    t = consent_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentimento* updates
    if (t >= 0.0 && consentimento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentimento.tStart = t;  // (not accounting for frame time here)
      consentimento.frameNStart = frameN;  // exact frame index
      
      consentimento.setAutoDraw(true);
    }
    
    
    // if consentimento is active this frame...
    if (consentimento.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *concordo* updates
    if (t >= 0.0 && concordo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concordo.tStart = t;  // (not accounting for frame time here)
      concordo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { concordo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { concordo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { concordo.clearEvents(); });
    }
    
    // if concordo is active this frame...
    if (concordo.status === PsychoJS.Status.STARTED) {
      let theseKeys = concordo.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _concordo_allKeys = _concordo_allKeys.concat(theseKeys);
      if (_concordo_allKeys.length > 0) {
        concordo.keys = _concordo_allKeys[_concordo_allKeys.length - 1].name;  // just the last key pressed
        concordo.rt = _concordo_allKeys[_concordo_allKeys.length - 1].rt;
        concordo.duration = _concordo_allKeys[_concordo_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_1' ---
    for (const thisComponent of consent_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(concordo.corr, level);
    }
    psychoJS.experiment.addData('concordo.keys', concordo.keys);
    if (typeof concordo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('concordo.rt', concordo.rt);
        psychoJS.experiment.addData('concordo.duration', concordo.duration);
        routineTimer.reset();
        }
    
    concordo.stop();
    // the Routine "consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_2MaxDurationReached;
var _concordo_2_allKeys;
var consent_2MaxDuration;
var consent_2Components;
function consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_2Clock.reset();
    routineTimer.reset();
    consent_2MaxDurationReached = false;
    // update component parameters for each repeat
    concordo_2.keys = undefined;
    concordo_2.rt = undefined;
    _concordo_2_allKeys = [];
    psychoJS.experiment.addData('consent_2.started', globalClock.getTime());
    consent_2MaxDuration = null
    // keep track of which components have finished
    consent_2Components = [];
    consent_2Components.push(consentimento_2);
    consent_2Components.push(concordo_2);
    
    for (const thisComponent of consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_2' ---
    // get current time
    t = consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentimento_2* updates
    if (t >= 0.0 && consentimento_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentimento_2.tStart = t;  // (not accounting for frame time here)
      consentimento_2.frameNStart = frameN;  // exact frame index
      
      consentimento_2.setAutoDraw(true);
    }
    
    
    // if consentimento_2 is active this frame...
    if (consentimento_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *concordo_2* updates
    if (t >= 0.0 && concordo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concordo_2.tStart = t;  // (not accounting for frame time here)
      concordo_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { concordo_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { concordo_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { concordo_2.clearEvents(); });
    }
    
    // if concordo_2 is active this frame...
    if (concordo_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = concordo_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _concordo_2_allKeys = _concordo_2_allKeys.concat(theseKeys);
      if (_concordo_2_allKeys.length > 0) {
        concordo_2.keys = _concordo_2_allKeys[_concordo_2_allKeys.length - 1].name;  // just the last key pressed
        concordo_2.rt = _concordo_2_allKeys[_concordo_2_allKeys.length - 1].rt;
        concordo_2.duration = _concordo_2_allKeys[_concordo_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_2' ---
    for (const thisComponent of consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(concordo_2.corr, level);
    }
    psychoJS.experiment.addData('concordo_2.keys', concordo_2.keys);
    if (typeof concordo_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('concordo_2.rt', concordo_2.rt);
        psychoJS.experiment.addData('concordo_2.duration', concordo_2.duration);
        routineTimer.reset();
        }
    
    concordo_2.stop();
    // the Routine "consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_3MaxDurationReached;
var _concordo_3_allKeys;
var consent_3MaxDuration;
var consent_3Components;
function consent_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_3Clock.reset();
    routineTimer.reset();
    consent_3MaxDurationReached = false;
    // update component parameters for each repeat
    concordo_3.keys = undefined;
    concordo_3.rt = undefined;
    _concordo_3_allKeys = [];
    psychoJS.experiment.addData('consent_3.started', globalClock.getTime());
    consent_3MaxDuration = null
    // keep track of which components have finished
    consent_3Components = [];
    consent_3Components.push(consentimento_3);
    consent_3Components.push(concordo_3);
    
    for (const thisComponent of consent_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_3' ---
    // get current time
    t = consent_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentimento_3* updates
    if (t >= 0.0 && consentimento_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentimento_3.tStart = t;  // (not accounting for frame time here)
      consentimento_3.frameNStart = frameN;  // exact frame index
      
      consentimento_3.setAutoDraw(true);
    }
    
    
    // if consentimento_3 is active this frame...
    if (consentimento_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *concordo_3* updates
    if (t >= 0.0 && concordo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concordo_3.tStart = t;  // (not accounting for frame time here)
      concordo_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { concordo_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { concordo_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { concordo_3.clearEvents(); });
    }
    
    // if concordo_3 is active this frame...
    if (concordo_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = concordo_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _concordo_3_allKeys = _concordo_3_allKeys.concat(theseKeys);
      if (_concordo_3_allKeys.length > 0) {
        concordo_3.keys = _concordo_3_allKeys[_concordo_3_allKeys.length - 1].name;  // just the last key pressed
        concordo_3.rt = _concordo_3_allKeys[_concordo_3_allKeys.length - 1].rt;
        concordo_3.duration = _concordo_3_allKeys[_concordo_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_3' ---
    for (const thisComponent of consent_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(concordo_3.corr, level);
    }
    psychoJS.experiment.addData('concordo_3.keys', concordo_3.keys);
    if (typeof concordo_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('concordo_3.rt', concordo_3.rt);
        psychoJS.experiment.addData('concordo_3.duration', concordo_3.duration);
        routineTimer.reset();
        }
    
    concordo_3.stop();
    // the Routine "consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _key_resp_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instrucoes);
    instructionsComponents.push(key_resp);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrucoes* updates
    if (t >= 0.0 && instrucoes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrucoes.tStart = t;  // (not accounting for frame time here)
      instrucoes.frameNStart = frameN;  // exact frame index
      
      instrucoes.setAutoDraw(true);
    }
    
    
    // if instrucoes is active this frame...
    if (instrucoes.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographic_info;
var demographic_infoClock;
function demographic_infoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographic_info' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'demographic_info' ---
    demographic_info = new visual.Survey({
        win: psychoJS.window,
        name: 'demographic_info',
        surveyId: '#25e8f1da-740f-438d-9188-7f1f81bd137d',
    });
    demographic_infoClock = new util.Clock();
    demographic_info.setAutoDraw(true);
    demographic_info.status = PsychoJS.Status.STARTED;
    demographic_info.isFinished = false;
    demographic_info.tStart = t;  // (not accounting for frame time here)
    demographic_info.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function demographic_infoRoutineEachFrame() {
  return async function () {
    t = demographic_infoClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if demographic_info is completed, move on
    if (demographic_info.isFinished) {
      demographic_info.setAutoDraw(false);
      demographic_info.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function demographic_infoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographic_info' ---
    // get data from demographic_info
    const demographic_infoResponse =  demographic_info.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(demographic_infoResponse, 'demographic_info');
    await demographic_info.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_1MaxDurationReached;
var _key_resp_3_allKeys;
var key_history;
var previous_text;
var practice_1MaxDuration;
var practice_1Components;
function practice_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_1Clock.reset();
    routineTimer.reset();
    practice_1MaxDurationReached = false;
    // update component parameters for each repeat
    practice_audio_1.isFinished = false;
    practice_audio_1.setValue('chuva.mp3');
    practice_audio_1.setVolume(1.0);
    practice_respostas_1.setText('');
    practice_respostas_1.refresh();
    practice_respostas_1.setPlaceholder('');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // Run 'Begin Routine' code from key_logging_2
    key_history = [];
    previous_text = "";
    
    psychoJS.experiment.addData('practice_1.started', globalClock.getTime());
    practice_1MaxDuration = null
    // keep track of which components have finished
    practice_1Components = [];
    practice_1Components.push(practice_audio_1);
    practice_1Components.push(practice_write_1);
    practice_1Components.push(practice_respostas_1);
    practice_1Components.push(key_resp_3);
    
    for (const thisComponent of practice_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var added_char;
var current_text;
function practice_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_1' ---
    // get current time
    t = practice_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (practice_audio_1.status === STARTED) {
        practice_audio_1.isPlaying = true;
        if (t >= (practice_audio_1.getDuration() + practice_audio_1.tStart)) {
            practice_audio_1.isFinished = true;
        }
    }
    // start/stop practice_audio_1
    if (t >= 0.1 && practice_audio_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_audio_1.tStart = t;  // (not accounting for frame time here)
      practice_audio_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ practice_audio_1.play(); });  // screen flip
      practice_audio_1.status = PsychoJS.Status.STARTED;
    }
    if (practice_audio_1.status === PsychoJS.Status.STARTED && Boolean(false) || practice_audio_1.isFinished) {
      // keep track of stop time/frame for later
      practice_audio_1.tStop = t;  // not accounting for scr refresh
      practice_audio_1.frameNStop = frameN;  // exact frame index
      // update status
      practice_audio_1.status = PsychoJS.Status.FINISHED;
      // stop playback
      practice_audio_1.stop();
    }
    
    // *practice_write_1* updates
    if (t >= 0.0 && practice_write_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_write_1.tStart = t;  // (not accounting for frame time here)
      practice_write_1.frameNStart = frameN;  // exact frame index
      
      practice_write_1.setAutoDraw(true);
    }
    
    
    // if practice_write_1 is active this frame...
    if (practice_write_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_respostas_1* updates
    if (t >= 0.0 && practice_respostas_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_respostas_1.tStart = t;  // (not accounting for frame time here)
      practice_respostas_1.frameNStart = frameN;  // exact frame index
      
      practice_respostas_1.setAutoDraw(true);
    }
    
    
    // if practice_respostas_1 is active this frame...
    if (practice_respostas_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'return' === 'string' ? ['return'] : 'return', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from key_logging_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    added_char = null;
    current_text = respostas.text;
    current_text = current_text.replace("\u00b4\u00e1", "\u00e1");
    current_text = current_text.replace("\u00b4\u00e9", "\u00e9");
    current_text = current_text.replace("\u00b4\u00ed", "\u00ed");
    current_text = current_text.replace("\u00b4\u00f3", "\u00f3");
    current_text = current_text.replace("\u00b4\u00fa", "\u00fa");
    current_text = current_text.replace("`\u00e0", "\u00e0");
    current_text = current_text.replace("^\u00e2", "\u00e2");
    current_text = current_text.replace("^\u00ea", "\u00ea");
    current_text = current_text.replace("^\u00f4", "\u00f4");
    current_text = current_text.replace("~\u00e3", "\u00e3");
    current_text = current_text.replace("~\u00f5", "\u00f5");
    current_text = current_text.replace("\u00b4\u00c1", "\u00c1");
    current_text = current_text.replace("\u00b4\u00c9", "\u00c9");
    current_text = current_text.replace("\u00b4\u00cd", "\u00cd");
    current_text = current_text.replace("\u00b4\u00d3", "\u00d3");
    current_text = current_text.replace("\u00b4\u00da", "\u00da");
    current_text = current_text.replace("`\u00c0", "\u00c0");
    current_text = current_text.replace("^\u00c2", "\u00c2");
    current_text = current_text.replace("^\u00ca", "\u00ca");
    current_text = current_text.replace("^\u00d4", "\u00d4");
    current_text = current_text.replace("~\u00c3", "\u00c3");
    current_text = current_text.replace("~\u00d5", "\u00d5");
    current_text = current_text.replace("\u00b4a", "\u00e1");
    current_text = current_text.replace("\u00b4e", "\u00e9");
    current_text = current_text.replace("\u00b4i", "\u00ed");
    current_text = current_text.replace("\u00b4o", "\u00f3");
    current_text = current_text.replace("\u00b4u", "\u00fa");
    current_text = current_text.replace("`a", "\u00e0");
    current_text = current_text.replace("^a", "\u00e2");
    current_text = current_text.replace("^e", "\u00ea");
    current_text = current_text.replace("^o", "\u00f4");
    current_text = current_text.replace("~a", "\u00e3");
    current_text = current_text.replace("~o", "\u00f5");
    current_text = current_text.replace("\u00b4A", "\u00c1");
    current_text = current_text.replace("\u00b4E", "\u00c9");
    current_text = current_text.replace("\u00b4I", "\u00cd");
    current_text = current_text.replace("\u00b4O", "\u00d3");
    current_text = current_text.replace("\u00b4U", "\u00da");
    current_text = current_text.replace("`A", "\u00c0");
    current_text = current_text.replace("^A", "\u00c2");
    current_text = current_text.replace("^E", "\u00ca");
    current_text = current_text.replace("^O", "\u00d4");
    current_text = current_text.replace("~A", "\u00c3");
    current_text = current_text.replace("~O", "\u00d5");
    if ((current_text !== respostas.text)) {
        respostas.text = current_text;
    }
    if (_pj.in_es6("\n", current_text)) {
        key_history.push("return");
        respostas.text = current_text.replace("\n", "");
        continueRoutine = false;
    } else {
        if ((current_text !== previous_text)) {
            if ((current_text.length > previous_text.length)) {
                added_char = current_text.slice((- 1))[0];
                if ((added_char === " ")) {
                    key_history.push("space");
                } else {
                    key_history.push(added_char);
                }
            } else {
                if ((current_text.length < previous_text.length)) {
                    key_history.push("backspace");
                } else {
                    key_history.push("edit");
                }
            }
            previous_text = current_text;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_1' ---
    for (const thisComponent of practice_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_1.stopped', globalClock.getTime());
    practice_audio_1.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('practice_respostas_1.text',practice_respostas_1.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // Run 'End Routine' code from key_logging_2
    psychoJS.experiment.addData("key_history", key_history.join("|"));
    
    // the Routine "practice_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_transitionMaxDurationReached;
var _concordo_4_allKeys;
var practice_transitionMaxDuration;
var practice_transitionComponents;
function practice_transitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_transition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_transitionClock.reset();
    routineTimer.reset();
    practice_transitionMaxDurationReached = false;
    // update component parameters for each repeat
    concordo_4.keys = undefined;
    concordo_4.rt = undefined;
    _concordo_4_allKeys = [];
    psychoJS.experiment.addData('practice_transition.started', globalClock.getTime());
    practice_transitionMaxDuration = null
    // keep track of which components have finished
    practice_transitionComponents = [];
    practice_transitionComponents.push(pract_transition);
    practice_transitionComponents.push(concordo_4);
    
    for (const thisComponent of practice_transitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_transitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_transition' ---
    // get current time
    t = practice_transitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pract_transition* updates
    if (t >= 0.0 && pract_transition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_transition.tStart = t;  // (not accounting for frame time here)
      pract_transition.frameNStart = frameN;  // exact frame index
      
      pract_transition.setAutoDraw(true);
    }
    
    
    // if pract_transition is active this frame...
    if (pract_transition.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *concordo_4* updates
    if (t >= 0.0 && concordo_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concordo_4.tStart = t;  // (not accounting for frame time here)
      concordo_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { concordo_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { concordo_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { concordo_4.clearEvents(); });
    }
    
    // if concordo_4 is active this frame...
    if (concordo_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = concordo_4.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _concordo_4_allKeys = _concordo_4_allKeys.concat(theseKeys);
      if (_concordo_4_allKeys.length > 0) {
        concordo_4.keys = _concordo_4_allKeys[_concordo_4_allKeys.length - 1].name;  // just the last key pressed
        concordo_4.rt = _concordo_4_allKeys[_concordo_4_allKeys.length - 1].rt;
        concordo_4.duration = _concordo_4_allKeys[_concordo_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_transitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_transitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_transition' ---
    for (const thisComponent of practice_transitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_transition.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(concordo_4.corr, level);
    }
    psychoJS.experiment.addData('concordo_4.keys', concordo_4.keys);
    if (typeof concordo_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('concordo_4.rt', concordo_4.rt);
        psychoJS.experiment.addData('concordo_4.duration', concordo_4.duration);
        routineTimer.reset();
        }
    
    concordo_4.stop();
    // the Routine "practice_transition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_2MaxDurationReached;
var _key_resp_4_allKeys;
var practice_2MaxDuration;
var practice_2Components;
function practice_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_2Clock.reset();
    routineTimer.reset();
    practice_2MaxDurationReached = false;
    // update component parameters for each repeat
    practice_audio_2.isFinished = false;
    practice_audio_2.setValue('chuva.mp3');
    practice_audio_2.setVolume(1.0);
    practice_respostas_2.setText('');
    practice_respostas_2.refresh();
    practice_respostas_2.setPlaceholder('');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // Run 'Begin Routine' code from key_logging_3
    key_history = [];
    previous_text = "";
    
    psychoJS.experiment.addData('practice_2.started', globalClock.getTime());
    practice_2MaxDuration = null
    // keep track of which components have finished
    practice_2Components = [];
    practice_2Components.push(practice_audio_2);
    practice_2Components.push(practice_write_2);
    practice_2Components.push(practice_respostas_2);
    practice_2Components.push(key_resp_4);
    
    for (const thisComponent of practice_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_2' ---
    // get current time
    t = practice_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (practice_audio_2.status === STARTED) {
        practice_audio_2.isPlaying = true;
        if (t >= (practice_audio_2.getDuration() + practice_audio_2.tStart)) {
            practice_audio_2.isFinished = true;
        }
    }
    // start/stop practice_audio_2
    if (t >= 0.1 && practice_audio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_audio_2.tStart = t;  // (not accounting for frame time here)
      practice_audio_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ practice_audio_2.play(); });  // screen flip
      practice_audio_2.status = PsychoJS.Status.STARTED;
    }
    if (practice_audio_2.status === PsychoJS.Status.STARTED && Boolean(false) || practice_audio_2.isFinished) {
      // keep track of stop time/frame for later
      practice_audio_2.tStop = t;  // not accounting for scr refresh
      practice_audio_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_audio_2.status = PsychoJS.Status.FINISHED;
      // stop playback
      practice_audio_2.stop();
    }
    
    // *practice_write_2* updates
    if (t >= 0.0 && practice_write_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_write_2.tStart = t;  // (not accounting for frame time here)
      practice_write_2.frameNStart = frameN;  // exact frame index
      
      practice_write_2.setAutoDraw(true);
    }
    
    
    // if practice_write_2 is active this frame...
    if (practice_write_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_respostas_2* updates
    if (t >= 0.0 && practice_respostas_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_respostas_2.tStart = t;  // (not accounting for frame time here)
      practice_respostas_2.frameNStart = frameN;  // exact frame index
      
      practice_respostas_2.setAutoDraw(true);
    }
    
    
    // if practice_respostas_2 is active this frame...
    if (practice_respostas_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof 'return' === 'string' ? ['return'] : 'return', 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from key_logging_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    added_char = null;
    current_text = respostas.text;
    current_text = current_text.replace("\u00b4\u00e1", "\u00e1");
    current_text = current_text.replace("\u00b4\u00e9", "\u00e9");
    current_text = current_text.replace("\u00b4\u00ed", "\u00ed");
    current_text = current_text.replace("\u00b4\u00f3", "\u00f3");
    current_text = current_text.replace("\u00b4\u00fa", "\u00fa");
    current_text = current_text.replace("`\u00e0", "\u00e0");
    current_text = current_text.replace("^\u00e2", "\u00e2");
    current_text = current_text.replace("^\u00ea", "\u00ea");
    current_text = current_text.replace("^\u00f4", "\u00f4");
    current_text = current_text.replace("~\u00e3", "\u00e3");
    current_text = current_text.replace("~\u00f5", "\u00f5");
    current_text = current_text.replace("\u00b4\u00c1", "\u00c1");
    current_text = current_text.replace("\u00b4\u00c9", "\u00c9");
    current_text = current_text.replace("\u00b4\u00cd", "\u00cd");
    current_text = current_text.replace("\u00b4\u00d3", "\u00d3");
    current_text = current_text.replace("\u00b4\u00da", "\u00da");
    current_text = current_text.replace("`\u00c0", "\u00c0");
    current_text = current_text.replace("^\u00c2", "\u00c2");
    current_text = current_text.replace("^\u00ca", "\u00ca");
    current_text = current_text.replace("^\u00d4", "\u00d4");
    current_text = current_text.replace("~\u00c3", "\u00c3");
    current_text = current_text.replace("~\u00d5", "\u00d5");
    current_text = current_text.replace("\u00b4a", "\u00e1");
    current_text = current_text.replace("\u00b4e", "\u00e9");
    current_text = current_text.replace("\u00b4i", "\u00ed");
    current_text = current_text.replace("\u00b4o", "\u00f3");
    current_text = current_text.replace("\u00b4u", "\u00fa");
    current_text = current_text.replace("`a", "\u00e0");
    current_text = current_text.replace("^a", "\u00e2");
    current_text = current_text.replace("^e", "\u00ea");
    current_text = current_text.replace("^o", "\u00f4");
    current_text = current_text.replace("~a", "\u00e3");
    current_text = current_text.replace("~o", "\u00f5");
    current_text = current_text.replace("\u00b4A", "\u00c1");
    current_text = current_text.replace("\u00b4E", "\u00c9");
    current_text = current_text.replace("\u00b4I", "\u00cd");
    current_text = current_text.replace("\u00b4O", "\u00d3");
    current_text = current_text.replace("\u00b4U", "\u00da");
    current_text = current_text.replace("`A", "\u00c0");
    current_text = current_text.replace("^A", "\u00c2");
    current_text = current_text.replace("^E", "\u00ca");
    current_text = current_text.replace("^O", "\u00d4");
    current_text = current_text.replace("~A", "\u00c3");
    current_text = current_text.replace("~O", "\u00d5");
    if ((current_text !== respostas.text)) {
        respostas.text = current_text;
    }
    if (_pj.in_es6("\n", current_text)) {
        key_history.push("return");
        respostas.text = current_text.replace("\n", "");
        continueRoutine = false;
    } else {
        if ((current_text !== previous_text)) {
            if ((current_text.length > previous_text.length)) {
                added_char = current_text.slice((- 1))[0];
                if ((added_char === " ")) {
                    key_history.push("space");
                } else {
                    key_history.push(added_char);
                }
            } else {
                if ((current_text.length < previous_text.length)) {
                    key_history.push("backspace");
                } else {
                    key_history.push("edit");
                }
            }
            previous_text = current_text;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_2' ---
    for (const thisComponent of practice_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_2.stopped', globalClock.getTime());
    practice_audio_2.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('practice_respostas_2.text',practice_respostas_2.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // Run 'End Routine' code from key_logging_3
    psychoJS.experiment.addData("key_history", key_history.join("|"));
    
    // the Routine "practice_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_endMaxDurationReached;
var _concordo_5_allKeys;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_endClock.reset();
    routineTimer.reset();
    practice_endMaxDurationReached = false;
    // update component parameters for each repeat
    concordo_5.keys = undefined;
    concordo_5.rt = undefined;
    _concordo_5_allKeys = [];
    psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
    practice_endMaxDuration = null
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(pract_transition_2);
    practice_endComponents.push(concordo_5);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pract_transition_2* updates
    if (t >= 0.0 && pract_transition_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_transition_2.tStart = t;  // (not accounting for frame time here)
      pract_transition_2.frameNStart = frameN;  // exact frame index
      
      pract_transition_2.setAutoDraw(true);
    }
    
    
    // if pract_transition_2 is active this frame...
    if (pract_transition_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *concordo_5* updates
    if (t >= 0.0 && concordo_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concordo_5.tStart = t;  // (not accounting for frame time here)
      concordo_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { concordo_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { concordo_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { concordo_5.clearEvents(); });
    }
    
    // if concordo_5 is active this frame...
    if (concordo_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = concordo_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _concordo_5_allKeys = _concordo_5_allKeys.concat(theseKeys);
      if (_concordo_5_allKeys.length > 0) {
        concordo_5.keys = _concordo_5_allKeys[_concordo_5_allKeys.length - 1].name;  // just the last key pressed
        concordo_5.rt = _concordo_5_allKeys[_concordo_5_allKeys.length - 1].rt;
        concordo_5.duration = _concordo_5_allKeys[_concordo_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_end' ---
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(concordo_5.corr, level);
    }
    psychoJS.experiment.addData('concordo_5.keys', concordo_5.keys);
    if (typeof concordo_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('concordo_5.rt', concordo_5.rt);
        psychoJS.experiment.addData('concordo_5.duration', concordo_5.duration);
        routineTimer.reset();
        }
    
    concordo_5.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var aud_nam;
function aud_namLoopBegin(aud_namLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    aud_nam = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: useFile,
      seed: undefined, name: 'aud_nam'
    });
    psychoJS.experiment.addLoop(aud_nam); // add the loop to the experiment
    currentLoop = aud_nam;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAud_nam of aud_nam) {
      snapshot = aud_nam.getSnapshot();
      aud_namLoopScheduler.add(importConditions(snapshot));
      aud_namLoopScheduler.add(trialsRoutineBegin(snapshot));
      aud_namLoopScheduler.add(trialsRoutineEachFrame());
      aud_namLoopScheduler.add(trialsRoutineEnd(snapshot));
      aud_namLoopScheduler.add(cruzRoutineBegin(snapshot));
      aud_namLoopScheduler.add(cruzRoutineEachFrame());
      aud_namLoopScheduler.add(cruzRoutineEnd(snapshot));
      aud_namLoopScheduler.add(aud_namLoopEndIteration(aud_namLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function aud_namLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(aud_nam);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function aud_namLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialsMaxDurationReached;
var _key_resp_2_allKeys;
var trialsMaxDuration;
var trialsComponents;
function trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialsClock.reset();
    routineTimer.reset();
    trialsMaxDurationReached = false;
    // update component parameters for each repeat
    stim_audio.isFinished = false;
    stim_audio.setValue(audio_file);
    stim_audio.setVolume(1.0);
    stim_write.setText(stimuli);
    respostas.setText('');
    respostas.refresh();
    respostas.setPlaceholder('');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // Run 'Begin Routine' code from key_logging
    key_history = [];
    previous_text = "";
    
    psychoJS.experiment.addData('trials.started', globalClock.getTime());
    trialsMaxDuration = null
    // keep track of which components have finished
    trialsComponents = [];
    trialsComponents.push(stim_audio);
    trialsComponents.push(stim_write);
    trialsComponents.push(respostas);
    trialsComponents.push(key_resp_2);
    
    for (const thisComponent of trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trials' ---
    // get current time
    t = trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (stim_audio.status === STARTED) {
        stim_audio.isPlaying = true;
        if (t >= (stim_audio.getDuration() + stim_audio.tStart)) {
            stim_audio.isFinished = true;
        }
    }
    // start/stop stim_audio
    if (t >= 0.1 && stim_audio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_audio.tStart = t;  // (not accounting for frame time here)
      stim_audio.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stim_audio.play(); });  // screen flip
      stim_audio.status = PsychoJS.Status.STARTED;
    }
    if (stim_audio.status === PsychoJS.Status.STARTED && Boolean(false) || stim_audio.isFinished) {
      // keep track of stop time/frame for later
      stim_audio.tStop = t;  // not accounting for scr refresh
      stim_audio.frameNStop = frameN;  // exact frame index
      // update status
      stim_audio.status = PsychoJS.Status.FINISHED;
      // stop playback
      stim_audio.stop();
    }
    
    // *stim_write* updates
    if (t >= 0.0 && stim_write.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_write.tStart = t;  // (not accounting for frame time here)
      stim_write.frameNStart = frameN;  // exact frame index
      
      stim_write.setAutoDraw(true);
    }
    
    
    // if stim_write is active this frame...
    if (stim_write.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *respostas* updates
    if (t >= 0.0 && respostas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respostas.tStart = t;  // (not accounting for frame time here)
      respostas.frameNStart = frameN;  // exact frame index
      
      respostas.setAutoDraw(true);
    }
    
    
    // if respostas is active this frame...
    if (respostas.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'return' === 'string' ? ['return'] : 'return', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from key_logging
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    added_char = null;
    current_text = respostas.text;
    current_text = current_text.replace("\u00b4\u00e1", "\u00e1");
    current_text = current_text.replace("\u00b4\u00e9", "\u00e9");
    current_text = current_text.replace("\u00b4\u00ed", "\u00ed");
    current_text = current_text.replace("\u00b4\u00f3", "\u00f3");
    current_text = current_text.replace("\u00b4\u00fa", "\u00fa");
    current_text = current_text.replace("`\u00e0", "\u00e0");
    current_text = current_text.replace("^\u00e2", "\u00e2");
    current_text = current_text.replace("^\u00ea", "\u00ea");
    current_text = current_text.replace("^\u00f4", "\u00f4");
    current_text = current_text.replace("~\u00e3", "\u00e3");
    current_text = current_text.replace("~\u00f5", "\u00f5");
    current_text = current_text.replace("\u00b4\u00c1", "\u00c1");
    current_text = current_text.replace("\u00b4\u00c9", "\u00c9");
    current_text = current_text.replace("\u00b4\u00cd", "\u00cd");
    current_text = current_text.replace("\u00b4\u00d3", "\u00d3");
    current_text = current_text.replace("\u00b4\u00da", "\u00da");
    current_text = current_text.replace("`\u00c0", "\u00c0");
    current_text = current_text.replace("^\u00c2", "\u00c2");
    current_text = current_text.replace("^\u00ca", "\u00ca");
    current_text = current_text.replace("^\u00d4", "\u00d4");
    current_text = current_text.replace("~\u00c3", "\u00c3");
    current_text = current_text.replace("~\u00d5", "\u00d5");
    current_text = current_text.replace("\u00b4a", "\u00e1");
    current_text = current_text.replace("\u00b4e", "\u00e9");
    current_text = current_text.replace("\u00b4i", "\u00ed");
    current_text = current_text.replace("\u00b4o", "\u00f3");
    current_text = current_text.replace("\u00b4u", "\u00fa");
    current_text = current_text.replace("`a", "\u00e0");
    current_text = current_text.replace("^a", "\u00e2");
    current_text = current_text.replace("^e", "\u00ea");
    current_text = current_text.replace("^o", "\u00f4");
    current_text = current_text.replace("~a", "\u00e3");
    current_text = current_text.replace("~o", "\u00f5");
    current_text = current_text.replace("\u00b4A", "\u00c1");
    current_text = current_text.replace("\u00b4E", "\u00c9");
    current_text = current_text.replace("\u00b4I", "\u00cd");
    current_text = current_text.replace("\u00b4O", "\u00d3");
    current_text = current_text.replace("\u00b4U", "\u00da");
    current_text = current_text.replace("`A", "\u00c0");
    current_text = current_text.replace("^A", "\u00c2");
    current_text = current_text.replace("^E", "\u00ca");
    current_text = current_text.replace("^O", "\u00d4");
    current_text = current_text.replace("~A", "\u00c3");
    current_text = current_text.replace("~O", "\u00d5");
    if ((current_text !== respostas.text)) {
        respostas.text = current_text;
    }
    if (_pj.in_es6("\n", current_text)) {
        key_history.push("return");
        respostas.text = current_text.replace("\n", "");
        continueRoutine = false;
    } else {
        if ((current_text !== previous_text)) {
            if ((current_text.length > previous_text.length)) {
                added_char = current_text.slice((- 1))[0];
                if ((added_char === " ")) {
                    key_history.push("space");
                } else {
                    key_history.push(added_char);
                }
            } else {
                if ((current_text.length < previous_text.length)) {
                    key_history.push("backspace");
                } else {
                    key_history.push("edit");
                }
            }
            previous_text = current_text;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trials' ---
    for (const thisComponent of trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trials.stopped', globalClock.getTime());
    stim_audio.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('respostas.text',respostas.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // Run 'End Routine' code from key_logging
    psychoJS.experiment.addData("key_history", key_history.join("|"));
    
    // the Routine "trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cruzMaxDurationReached;
var cruzMaxDuration;
var cruzComponents;
function cruzRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cruz' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cruzClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    cruzMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('cruz.started', globalClock.getTime());
    cruzMaxDuration = null
    // keep track of which components have finished
    cruzComponents = [];
    cruzComponents.push(polygon);
    
    for (const thisComponent of cruzComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function cruzRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cruz' ---
    // get current time
    t = cruzClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cruzComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cruzRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cruz' ---
    for (const thisComponent of cruzComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cruz.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (cruzMaxDurationReached) {
        cruzClock.add(cruzMaxDuration);
    } else {
        cruzClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finalMaxDurationReached;
var finalMaxDuration;
var finalComponents;
function finalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'final' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finalClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    finalMaxDurationReached = false;
    // update component parameters for each repeat
    function randomID(){
      const length = 10;
      let result = "";
      const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
      for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    }
    
    const filename = `${randomID()}-data.json`;
    const dataJSON = JSON.stringify(psychoJS.experiment._trialsData);
    
    fetch("https://pipe.jspsych.org/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        experimentID: "ykrF9Jc6M62q",
        filename: filename,
        data: dataJSON,
      }),
    });
    psychoJS.experiment.addData('final.started', globalClock.getTime());
    finalMaxDuration = null
    // keep track of which components have finished
    finalComponents = [];
    finalComponents.push(agradecimento);
    
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'final' ---
    // get current time
    t = finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *agradecimento* updates
    if (t >= 0.0 && agradecimento.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agradecimento.tStart = t;  // (not accounting for frame time here)
      agradecimento.frameNStart = frameN;  // exact frame index
      
      agradecimento.setAutoDraw(true);
    }
    
    
    // if agradecimento is active this frame...
    if (agradecimento.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (agradecimento.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      agradecimento.tStop = t;  // not accounting for scr refresh
      agradecimento.frameNStop = frameN;  // exact frame index
      // update status
      agradecimento.status = PsychoJS.Status.FINISHED;
      agradecimento.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'final' ---
    for (const thisComponent of finalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('final.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (finalMaxDurationReached) {
        finalClock.add(finalMaxDuration);
    } else {
        finalClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
