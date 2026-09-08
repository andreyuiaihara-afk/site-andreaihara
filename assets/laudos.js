/* ---------------------------------------------------------------------------
   BIBLIOTECA DE LAUDOS E FRASES
   ---------------------------------------------------------------------------
   Este é o único arquivo que precisa ser editado para acrescentar conteúdo.
   A página /laudos/ se monta sozinha a partir daqui: filtros, busca e botão
   de copiar são gerados pelos campos abaixo.

   Para acrescentar um item, copie um bloco inteiro (de "{" até "},") e edite.

   Campos:
     tipo    "laudo"  → modelo de laudo completo
             "frase"  → frase avulsa para achado específico
     regiao  Joelho | Ombro | Coluna | Quadril | Punho e mão | Pé e tornozelo | Cotovelo
     metodo  RM | TC | US | RX
     titulo  o que aparece em destaque
     nota    linha curta de contexto (opcional; deixe "" se não quiser)
     texto   o conteúdo que o botão copia. Use \n para quebrar linha.
   --------------------------------------------------------------------------- */

window.BIBLIOTECA = [

  {
    tipo: "laudo",
    regiao: "Joelho",
    metodo: "RM",
    titulo: "RM do joelho — exame normal",
    nota: "Modelo inicial, para revisão",
    texto:
"TÉCNICA: Sequências multiplanares ponderadas em T1, DP com supressão de gordura e T2.\n\n" +
"ANÁLISE:\n" +
"Ossos com sinal medular preservado, sem lesões focais, fraturas ou edema.\n" +
"Cartilagens articulares femorotibiais e femoropatelar com espessura e sinal preservados.\n" +
"Meniscos medial e lateral com morfologia e sinal habituais, sem sinais de rotura.\n" +
"Ligamentos cruzados anterior e posterior íntegros, com fibras contínuas e sinal normal.\n" +
"Ligamentos colaterais medial e lateral íntegros.\n" +
"Aparelho extensor íntegro. Tendões quadricipital e patelar com espessura e sinal preservados.\n" +
"Ausência de derrame articular significativo.\n" +
"Partes moles periarticulares sem alterações.\n\n" +
"CONCLUSÃO:\n" +
"Exame dentro dos limites da normalidade."
  },

  {
    tipo: "laudo",
    regiao: "Ombro",
    metodo: "RM",
    titulo: "RM do ombro — exame normal",
    nota: "Modelo inicial, para revisão",
    texto:
"TÉCNICA: Sequências multiplanares ponderadas em T1, DP com supressão de gordura e T2.\n\n" +
"ANÁLISE:\n" +
"Ossos com sinal medular preservado, sem lesões focais ou edema.\n" +
"Manguito rotador íntegro: tendões supraespinal, infraespinal, subescapular e redondo menor com espessura e sinal preservados, sem sinais de tendinopatia ou rotura.\n" +
"Cabo do manguito e intervalo rotador sem alterações.\n" +
"Tendão da cabeça longa do bíceps tópico, íntegro, sem tenossinovite.\n" +
"Lábrum glenoidal com morfologia e sinal habituais, sem sinais de rotura.\n" +
"Cartilagens glenoumerais preservadas.\n" +
"Articulação acromioclavicular sem alterações degenerativas significativas.\n" +
"Ausência de bursite subacromial-subdeltóidea.\n" +
"Musculatura periarticular com trofismo e sinal preservados, sem infiltração gordurosa.\n\n" +
"CONCLUSÃO:\n" +
"Exame dentro dos limites da normalidade."
  },

  {
    tipo: "laudo",
    regiao: "Coluna",
    metodo: "TC",
    titulo: "TC de coluna — fratura vertebral com características patológicas",
    nota: "Estrutura do laudo; ajustar níveis e achados",
    texto:
"ANÁLISE:\n" +
"Lesão osteolítica acometendo o corpo vertebral de [nível], com destruição cortical e margens mal definidas.\n" +
"A lesão estende-se aos elementos posteriores, com comprometimento do pedículo, do processo transverso e do processo articular à [direita/esquerda].\n" +
"Há componente de partes moles paravertebral à [direita/esquerda], medindo aproximadamente [__] cm.\n" +
"Perda de altura do corpo vertebral de aproximadamente [__]%, com [abaulamento convexo / retropulsão] do muro posterior e redução de [__]% do diâmetro anteroposterior do canal vertebral.\n" +
"[Descrever ou afastar componente epidural e repercussão sobre estruturas neurais.]\n" +
"Demais níveis: [descrever outras fraturas e lesões].\n\n" +
"CONCLUSÃO:\n" +
"Fratura do corpo vertebral de [nível] com características de fratura patológica — acometimento dos elementos posteriores e componente de partes moles paravertebral.\n" +
"Sugere-se ressonância magnética para melhor caracterização da extensão epidural e da repercussão sobre o canal vertebral."
  },

  {
    tipo: "frase",
    regiao: "Coluna",
    metodo: "TC",
    titulo: "Fratura vertebral com características benignas",
    nota: "",
    texto:
"Fratura do corpo vertebral de [nível] com acentuação da concavidade do platô [superior/inferior], banda de impactação subcondral com esclerose e trabeculado remanescente preservado. Pedículos e elementos posteriores íntegros, sem componente de partes moles paravertebral. Achados que favorecem fratura por insuficiência óssea."
  },

  {
    tipo: "frase",
    regiao: "Joelho",
    metodo: "RM",
    titulo: "Depósito com baixo sinal em T2 — suspeita de gota",
    nota: "",
    texto:
"Material com sinal intermediário a baixo nas sequências ponderadas em T2, de contornos irregulares, junto a [estrutura], com erosão óssea adjacente de margens escleróticas e borda óssea saliente. Os achados favorecem depósito de cristais (tofo gotoso). A ressonância magnética não é específica para este diagnóstico; sugere-se ultrassonografia ou tomografia computadorizada de dupla energia para confirmação."
  }

];
