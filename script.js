// ========== BANCO DE DADOS DAS ERVAS (IMAGENS LOCAIS) ==========
const IMAGEM_FALLBACK = 'imagens/placeholder.jpg';

const ervas = [
    {
        id: 'alecrim',
        nome: 'Alecrim',
        cientifico: 'Rosmarinus officinalis',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/alecrim.jpg',
        origem: 'Originário da região mediterrânea, o alecrim é utilizado desde a antiguidade por gregos, romanos e egípcios. Seu nome deriva do latim "ros marinus", que significa "orvalho do mar", pois crescia espontaneamente nas costas rochosas banhadas pelo Mediterrâneo. Era considerado símbolo de memória, fidelidade e proteção, sendo usado em cerimônias religiosas, casamentos e funerais. Na Idade Média, acreditava-se que afastava maus espíritos e protegia contra pragas. Atualmente é amplamente cultivado em todo o mundo, inclusive no Brasil, tanto para fins culinários quanto medicinais e espirituais.',
        medicinais: 'O alecrim possui propriedades antioxidantes, anti-inflamatórias e antimicrobianas, atribuídas principalmente ao ácido rosmarínico e ao óleo essencial rico em cineol e cânfora. Estudos científicos indicam que pode melhorar a digestão, estimular a circulação sanguínea, auxiliar na memória e concentração, e aliviar dores musculares e articulares. Também é utilizado como tônico geral, no combate ao estresse oxidativo e como coadjuvante no tratamento de distúrbios hepáticos. Seu consumo moderado é seguro, porém deve ser evitado por gestantes e pessoas com epilepsia, devido ao potencial convulsivante do óleo essencial em altas doses.',
        espirituais: 'Na Umbanda, o alecrim é classificado como erva morna ou equilibradora, associado principalmente a Oxalá, Oxóssi e Iemanjá. É utilizado em banhos de limpeza e harmonização, defumações para purificar ambientes e atrair boas energias. Promove equilíbrio emocional, clareza mental e paz espiritual, sendo recomendado para momentos de transição, antes de rituais importantes e para acalmar a mente. Também é empregado em amacis e na consagração de objetos sagrados. Por ser uma erva solar e masculina, auxilia na firmeza de pensamento e na conexão com a ancestralidade.',
        cha: 'Medidas: 1 colher de sopa de folhas frescas (ou 1 colher de chá de folhas secas) para 200 ml de água. Preparo: Ferver a água, desligar o fogo e adicionar as folhas. Tampar e deixar em infusão por 5 a 10 minutos. Coar e consumir. Dose recomendada: até 3 xícaras ao dia, de preferência após as refeições. Contraindicações: não recomendado para gestantes, lactantes e pessoas com epilepsia. O chá pode ser usado também para bochechos em caso de inflamações na gengiva.',
        banho: 'Quantidade: 7 ramos de alecrim fresco (ou 2 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Macerar levemente os ramos com as mãos para liberar os óleos essenciais, mentalizando equilíbrio e purificação. Colocar em uma bacia com água morna (não fervente) e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar o conteúdo do pescoço para baixo, sem esfregar. Não enxaguar. Secar-se naturalmente ou com toalha limpa. Indicado para dias de cansaço mental e para atrair energias de paz.'
    },
    {
        id: 'manjericao',
        nome: 'Manjericão',
        cientifico: 'Ocimum basilicum',
        classificacao: 'Erva Morna / Fixadora',
        imagem: 'imagens/manjericao.jpg',
        origem: 'Originário da Índia e de regiões tropicais da Ásia, o manjericão é cultivado há mais de 5.000 anos. Na Índia, a variedade sagrada conhecida como Tulsi é venerada no hinduísmo e considerada uma manifestação da deusa Lakshmi, sendo plantada em templos e residências para proteção. A planta chegou à Europa na Idade Média, onde passou a ser associada à proteção contra energias negativas e utilizada em rituais de prosperidade. Seu nome deriva do grego "basileus", que significa "rei", indicando sua importância. No Brasil, é amplamente utilizado na culinária e em práticas espirituais.',
        medicinais: 'O manjericão contém eugenol, flavonoides e óleos essenciais com propriedades anti-inflamatórias, antioxidantes e antibacterianas. Pesquisas sugerem que pode auxiliar na redução do estresse e da ansiedade, melhorar a digestão, fortalecer o sistema imunológico e contribuir para a saúde cardiovascular. Também possui leve efeito calmante e pode auxiliar no combate a radicais livres. É rico em vitamina K, importante para a coagulação sanguínea. O consumo regular é seguro para a maioria das pessoas, mas deve ser evitado em grandes quantidades por gestantes, pois pode estimular contrações uterinas.',
        espirituais: 'Na Umbanda, o manjericão é classificado como erva morna ou fixadora, associado principalmente a Oxum, Iansã e Oxalá. É amplamente utilizado em banhos e defumações para atrair prosperidade, amor, união e boas vibrações. Por ser uma erva fixadora, ajuda a "fixar" as energias positivas no ambiente e na pessoa, potencializando trabalhos espirituais e pedidos de harmonia. Também é empregado em rituais de abertura de caminhos e para fortalecer a intuição. Suas folhas são usadas em patuás e amuletos de proteção.',
        cha: 'Medidas: 10 a 12 folhas frescas (ou 1 colher de sopa de folhas secas) para 200 ml de água. Preparo: Ferver a água, desligar o fogo e adicionar as folhas. Tampar e deixar em infusão por 5 a 7 minutos. Coar e consumir. Dose recomendada: 1 a 2 xícaras ao dia, preferencialmente pela manhã ou após situações de estresse. Pode ser adoçado com mel. Contraindicado para gestantes e pessoas com hipotensão arterial grave.',
        banho: 'Quantidade: 9 ramos de manjericão fresco (ou 3 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Macerar suavemente as folhas com as mãos, mentalizando prosperidade e harmonia. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito uma vez por semana para manter as energias fixadas. Ideal para antes de encontros importantes ou para atrair amor e boas oportunidades.'
    },
    {
        id: 'arruda',
        nome: 'Arruda',
        cientifico: 'Ruta graveolens',
        classificacao: 'Erva Quente / Descarrego Pesado',
        imagem: 'imagens/arruda.jpg',
        origem: 'A arruda é originária do Mediterrâneo e da Ásia Menor, conhecida desde a antiguidade por suas propriedades protetoras e medicinais. Gregos e romanos a utilizavam para afastar o mau-olhado e como antídoto contra venenos. Na Idade Média, era plantada próxima às casas para proteção contra pragas e feitiçarias. Seu nome científico "Ruta" deriva do grego "reuo", que significa "salvar". No Brasil, tornou-se uma das ervas mais populares em rituais de descarrego e proteção, sendo comum vê-la em vasos na entrada das residências.',
        medicinais: 'A arruda possui propriedades anti-inflamatórias, antiespasmódicas e antimicrobianas, mas deve ser usada com extrema cautela. É considerada tóxica quando ingerida em doses elevadas, podendo causar irritação gastrointestinal, dores abdominais, vômitos e, em gestantes, risco de aborto. Seu uso é recomendado principalmente de forma externa, em compressas, escalda-pés ou banhos. Estudos indicam ação contra bactérias e fungos, mas a toxicidade limita seu uso terapêutico. Nunca deve ser utilizada por crianças, gestantes ou lactantes.',
        espirituais: 'Na Umbanda, a arruda é classificada como erva quente ou de descarrego pesado, associada a Ogum, Exu, Iansã e Xangô. É utilizada em banhos de limpeza profunda, quebra de demandas e proteção contra inveja, mau-olhado e energias densas. Por ser uma erva quente, deve ser manuseada com respeito e usada apenas em situações de real necessidade, nunca de forma rotineira. Em defumações, é queimada sobre brasas para purificar ambientes carregados. Muitos terreiros a utilizam em sacudimentos e trabalhos de descarrego, sempre com orientação de um dirigente espiritual.',
        cha: 'ATENÇÃO: O chá de arruda NÃO deve ser ingerido devido à toxicidade. Medidas (para uso externo): 1 colher de chá de folhas secas (ou 3 folhas frescas) para 200 ml de água fervente. Preparo: Infusionar por 5 minutos, coar e utilizar apenas em compressas, escalda-pés ou banhos de assento. Nunca beber. Contraindicações absolutas: gestação, lactação, crianças e pessoas com problemas hepáticos ou renais.',
        banho: 'Quantidade: 3 a 5 ramos de arruda fresca (ou 2 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Macerar bem as folhas com as mãos (pode-se amassar levemente com um pilão, mas não é necessário moer totalmente). Misturar na água morna, mentalizando a quebra de energias negativas. Regra rígida de aplicação: Aplicar apenas do pescoço para baixo, após o banho normal, sem enxaguar. NUNCA aplicar na cabeça. Contraindicado para crianças, gestantes, lactantes e pessoas debilitadas. Usar somente em situações de descarrego necessário, espaçadamente (no máximo uma vez por mês).'
    },
    {
        id: 'guine',
        nome: 'Guiné',
        cientifico: 'Petiveria alliacea',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/guine.jpg',
        origem: 'A guiné é uma planta nativa da América tropical, especialmente da região amazônica e do Caribe. Foi amplamente utilizada por povos indígenas e africanos escravizados no Brasil para fins medicinais e rituais. Seu nome popular deriva do termo "guiné", referindo-se à região da África Ocidental, de onde vieram muitos escravos que trouxeram o conhecimento sobre a planta. É considerada uma erva de poder, ligada à proteção espiritual e à limpeza de ambientes. Cresce espontaneamente em áreas sombreadas e úmidas, sendo comum em quintais e terreiros.',
        medicinais: 'A guiné possui propriedades analgésicas, anti-inflamatórias, diuréticas e antirreumáticas, devido à presença de compostos sulfurados e alcaloides. É usada popularmente no tratamento de dores articulares, inflamações e problemas urinários. No entanto, seu uso interno deve ser feito com extrema cautela, pois pode ser tóxica em doses elevadas, causando náuseas e distúrbios neurológicos. O uso externo é mais seguro, em compressas e banhos. Estudos científicos têm investigado seu potencial imunomodulador e antitumoral, mas ainda são preliminares.',
        espirituais: 'Na Umbanda, a guiné é classificada como erva quente ou de descarrego, associada a Ogum, Exu e Iansã. É utilizada em banhos de limpeza pesada, para afastar espíritos obsessores, quebrar demandas e proteger contra energias negativas. Também é empregada em defumações para purificar ambientes e em sacudimentos. Por ser uma erva de poder, deve ser usada com orientação e respeito, pois pode potencializar a ação de outras ervas quentes. Em algumas casas, é plantada na entrada para proteção do terreiro.',
        cha: 'O chá de guiné não é recomendado para ingestão, devido à toxicidade. Para uso externo: 1 colher de chá de folhas secas para 200 ml de água fervente. Infusão por 5 minutos. Utilizar apenas em compressas ou escalda-pés. Nunca beber. Contraindicado para gestantes, lactantes e crianças.',
        banho: 'Quantidade: 5 ramos de guiné fresco (ou 2 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando a limpeza e a quebra de energias densas. Misturar na água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Não aplicar na cabeça. Usar apenas em casos de real necessidade de descarrego, com intervalo mínimo de 15 dias.'
    },
    {
        id: 'espada-de-sao-jorge',
        nome: 'Espada-de-São-Jorge',
        cientifico: 'Sansevieria trifasciata',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/espada-de-sao-jorge.jpg',
        origem: 'A espada-de-são-jorge é uma planta originária da África tropical, amplamente cultivada em todo o mundo como planta ornamental. No Brasil, tornou-se símbolo de proteção doméstica, sendo comum encontrá-la em vasos na entrada das casas e terreiros. Seu nome popular faz referência a São Jorge, o santo guerreiro, associado a Ogum no sincretismo religioso. A planta é conhecida por sua resistência e capacidade de sobreviver em condições adversas, o que reforça sua fama de guardiã do lar.',
        medicinais: 'A espada-de-são-jorge possui propriedades anti-inflamatórias e cicatrizantes, sendo utilizada topicamente no tratamento de feridas, queimaduras e picadas de insetos. No entanto, sua ingestão não é recomendada, pois contém saponinas que podem causar irritação gastrointestinal. O gel das folhas é aplicado sobre a pele para acelerar a cicatrização. Estudos indicam que a planta também tem capacidade de purificar o ar, removendo toxinas como formaldeído e benzeno, o que a torna benéfica em ambientes internos.',
        espirituais: 'Na Umbanda, a espada-de-são-jorge é classificada como erva quente ou de descarrego, associada a Ogum e Exu. É utilizada em banhos e defumações para corte de energias negativas, proteção do lar e afastamento de inimigos espirituais. Suas folhas em formato de lança simbolizam a luta contra o mal. É comum colocá-la na entrada do terreiro ou da casa para impedir a entrada de espíritos perturbadores. Em banhos, deve ser usada com moderação, pois é uma erva muito quente.',
        cha: 'A espada-de-são-jorge não deve ser ingerida. Para uso tópico: decocção de 1 folha picada em 200 ml de água por 10 minutos. Utilizar como compressa sobre feridas ou inflamações. Nunca beber. Em caso de ingestão acidental, procurar atendimento médico imediatamente.',
        banho: 'Quantidade: 3 folhas de espada-de-são-jorge picadas para 2 litros de água. Preparo litúrgico: Ferver as folhas picadas em água por 5 minutos, deixar amornar naturalmente. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Não aplicar na cabeça. Usar apenas em situações de limpeza pesada, com intervalo mínimo de 30 dias. Evitar o contato com os olhos e mucosas.'
    },
    {
        id: 'aroeira',
        nome: 'Aroeira',
        cientifico: 'Schinus terebinthifolia',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/aroeira.jpg',
        origem: 'A aroeira é uma árvore nativa da América do Sul, especialmente do Brasil, onde ocorre em diversos biomas, como Mata Atlântica e Cerrado. É conhecida desde os tempos pré-coloniais pelos povos indígenas, que a utilizavam para fins medicinais e rituais. O nome "aroeira" deriva do tupi "arary", que significa "árvore que arde", em referência às propriedades urticantes de algumas espécies. Na Umbanda, é uma das ervas mais importantes para descarrego e proteção, sendo amplamente utilizada em banhos e defumações.',
        medicinais: 'A aroeira possui propriedades antimicrobianas, anti-inflamatórias e cicatrizantes, atribuídas à presença de taninos e óleos essenciais. É usada popularmente no tratamento de feridas, úlceras, inflamações de garganta e problemas ginecológicos, como vaginites. Seu uso interno deve ser cauteloso, pois pode causar irritação gástrica em doses elevadas. O chá da casca é utilizado para gargarejos e banhos de assento. Estudos científicos confirmam sua ação contra bactérias e fungos, como Candida albicans.',
        espirituais: 'Na Umbanda, a aroeira é classificada como erva quente ou de descarrego, associada a Ogum e Xangô. É utilizada em banhos de limpeza profunda, para quebrar demandas, afastar inimigos espirituais e proteger contra energias densas. Também é empregada em defumações para purificar ambientes e em sacudimentos. Por ser uma erva muito quente, deve ser usada com moderação e em situações de real necessidade. É comum a combinação com outras ervas quentes, como arruda e guiné, em trabalhos de descarrego.',
        cha: 'O chá de aroeira pode ser usado internamente com cautela: 1 colher de sopa de folhas secas (ou casca) para 200 ml de água. Decocção por 10 minutos. Dose recomendada: 1 xícara 2 vezes ao dia, por no máximo 7 dias. Contraindicado para gestantes, lactantes e pessoas com gastrite. Para uso externo (gargarejos e banhos de assento), usar a mesma preparação.',
        banho: 'Quantidade: 5 ramos de aroeira fresca (ou 3 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Ferver os ramos em água por 10 minutos, deixar amornar e coar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Não aplicar na cabeça. Usar apenas em casos de descarrego, com intervalo mínimo de 21 dias.'
    },
    {
        id: 'peregun',
        nome: 'Peregun (Folha de Iansã)',
        cientifico: 'Dracaena fragrans',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/peregun.jpg',
        origem: 'O peregun, também conhecido como dracena ou pau-d\'água, é uma planta originária da África tropical, de grande importância nos cultos afro-brasileiros. Seu nome científico deriva do grego "drakaina", que significa "dragão fêmea", em referência à seiva avermelhada de algumas espécies. No Brasil, é amplamente cultivada em terreiros de Umbanda e Candomblé, onde é considerada sagrada para Iansã, a orixá dos ventos e tempestades. A planta é utilizada em rituais de movimentação de energias e limpeza espiritual.',
        medicinais: 'O peregun tem pouco uso medicinal documentado, sendo mais conhecido por suas propriedades espirituais. Algumas espécies do gênero Dracaena possuem seiva com propriedades anti-inflamatórias e cicatrizantes, mas seu uso não é difundido na medicina popular. Não deve ser ingerido, pois pode causar irritação gastrointestinal. É uma planta ornamental comum, também valorizada por sua capacidade de purificar o ar.',
        espirituais: 'Na Umbanda, o peregun é classificado como erva quente ou de descarrego, associado exclusivamente a Iansã. É utilizado em banhos e rituais para movimentar energias estagnadas, promover mudanças, limpar o campo espiritual e trazer coragem. Suas folhas em forma de lança simbolizam o poder dos ventos e das tempestades. É comum em defumações para afastar espíritos perturbadores e quebrar demandas. Também é plantado nos terreiros para atrair a proteção de Iansã.',
        cha: 'O peregun não é utilizado como chá. Seu uso é exclusivamente ritualístico, em banhos e defumações. Não deve ser ingerido.',
        banho: 'Quantidade: 7 folhas frescas de peregun para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando movimento, coragem e limpeza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser usado quando se deseja mudanças na vida ou para quebrar estagnação. Intervalo de 15 dias entre os banhos.'
    },
    {
        id: 'urtiga',
        nome: 'Urtiga',
        cientifico: 'Urtica dioica',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/urtiga.jpg',
        origem: 'A urtiga é uma planta herbácea originária da Europa, Ásia e América do Norte, mas atualmente naturalizada em várias regiões do Brasil, especialmente em áreas de clima temperado. É conhecida por seus pelos urticantes, que causam ardência ao contato. Desde a antiguidade, é utilizada como planta medicinal e alimentícia, rica em nutrientes. Na Europa medieval, era usada em rituais de proteção e para afastar feitiçarias. No Brasil, seu uso espiritual é menos difundido, mas ainda presente em algumas tradições.',
        medicinais: 'A urtiga é rica em vitaminas (A, C, K), minerais (ferro, cálcio, magnésio) e compostos bioativos como flavonoides e ácido silícico. Possui propriedades anti-inflamatórias, antialérgicas, diuréticas e anti-histamínicas, sendo utilizada no tratamento de artrite, rinite alérgica e retenção de líquidos. Estudos confirmam sua eficácia no alívio de dores articulares e na melhora da circulação. O consumo deve ser evitado por gestantes e pessoas com problemas renais, devido ao seu efeito diurético.',
        espirituais: 'Na Umbanda, a urtiga é classificada como erva quente ou de descarrego, associada a Iansã e Ogum. É utilizada em banhos para quebra de demandas, descarrego e ativação energética. Apesar de não ser uma erva tradicional da Umbanda brasileira, seu uso tem crescido devido à sua força e capacidade de "queimar" energias negativas. Também é empregada em defumações para limpeza de ambientes. Deve ser manipulada com luvas para evitar irritação na pele.',
        cha: '1 colher de chá de folhas secas de urtiga para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Pode ser adoçado com mel. Contraindicações: gestantes, lactantes, pessoas com insuficiência renal ou cardíaca. O chá também pode ser usado para compressas em articulações doloridas.',
        banho: 'Quantidade: 5 ramos de urtiga fresca (manusear com luvas) ou 2 colheres de sopa de folhas secas para 2 litros de água. Preparo litúrgico: Amassar as folhas com um pilão ou com as mãos protegidas, mentalizando quebra de energias densas. Misturar na água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Usar apenas em situações de descarrego, com intervalo mínimo de 30 dias. Evitar contato com os olhos.'
    },
    {
        id: 'canela',
        nome: 'Canela',
        cientifico: 'Cinnamomum verum',
        classificacao: 'Erva Quente / Estimulante',
        imagem: 'imagens/canela.jpg',
        origem: 'A canela é uma especiaria obtida da casca interna de árvores do gênero Cinnamomum, originárias do Sri Lanka (antigo Ceilão) e de outras regiões da Ásia tropical. É utilizada desde a antiguidade, sendo mencionada em textos chineses, egípcios e bíblicos. No Egito antigo, era usada no processo de mumificação e como perfume. Na Idade Média, era um produto de luxo na Europa. No Brasil, é amplamente utilizada na culinária, na medicina popular e em rituais espirituais, especialmente para atrair prosperidade e proteção.',
        medicinais: 'A canela possui propriedades antioxidantes, anti-inflamatórias, antimicrobianas e termogênicas, devido ao cinamaldeído, seu principal composto ativo. Estudos indicam que pode auxiliar no controle da glicemia, melhorar a sensibilidade à insulina, reduzir o colesterol e triglicerídeos, além de ter efeito neuroprotetor. É utilizada como digestivo, carminativo e estimulante circulatório. O consumo moderado é seguro, porém o excesso pode sobrecarregar o fígado devido à cumarina. Gestantes devem evitar o chá em grandes quantidades.',
        espirituais: 'Na Umbanda, a canela é classificada como erva quente ou estimulante, associada a Exu, Iansã e Xangô. É utilizada em banhos e defumações para atrair prosperidade, energização, proteção e quebra de bloqueios. Seu aroma adocicado é considerado agradável aos orixás. Em pó, é usada em oferendas e trabalhos de abertura de caminhos. Também é comum em banhos de descarrego suave, combinada com outras ervas quentes, para trazer ânimo e coragem.',
        cha: '1 pau de canela (ou 1 colher de chá de canela em pó) para 200 ml de água. Decocção por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes, lactantes e pessoas com úlcera gástrica. Pode ser adoçado com mel. O chá também é usado como estimulante digestivo após refeições pesadas.',
        banho: 'Quantidade: 3 paus de canela (ou 2 colheres de sopa de canela em pó) para 2 litros de água. Preparo litúrgico: Ferver os paus de canela em água por 5 minutos, deixar amornar. Se usar pó, dissolver bem. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair prosperidade, coragem e energias positivas. Pode ser feito semanalmente.'
    },
    {
        id: 'cravo-da-india',
        nome: 'Cravo-da-Índia',
        cientifico: 'Syzygium aromaticum',
        classificacao: 'Erva Quente / Estimulante',
        imagem: 'imagens/cravo-da-india.jpg',
        origem: 'O cravo-da-índia é originário das Ilhas Molucas, na Indonésia, e é utilizado há mais de 2.000 anos como especiaria e medicinal. Na antiguidade, era um produto valioso, disputado por impérios e comerciantes. Os chineses o usavam para perfumar o hálito e como antisséptico. Na Europa medieval, era usado para conservar alimentos e como remédio. No Brasil, é amplamente utilizado na culinária, em remédios caseiros e em rituais espirituais, especialmente para proteção e estimulação energética.',
        medicinais: 'O cravo-da-índia possui propriedades anestésicas, antibacterianas, antifúngicas, antioxidantes e digestivas, devido ao eugenol, seu principal composto ativo. É utilizado para aliviar dores de dente (aplicado topicamente), melhorar a digestão, combater infecções e reduzir inflamações. Estudos mostram sua eficácia contra bactérias bucais e como antioxidante. O consumo interno é seguro em pequenas quantidades, mas o óleo essencial puro é tóxico e não deve ser ingerido. Gestantes devem evitar.',
        espirituais: 'Na Umbanda, o cravo-da-índia é classificado como erva quente ou estimulante, associado a Exu e Ogum. É utilizado em banhos e defumações para estimulação, proteção e quebra de demandas. Seu aroma intenso é considerado poderoso para afastar energias negativas e fortalecer o campo espiritual. Também é usado em oferendas e trabalhos de abertura de caminhos. Em pó ou inteiro, é comum em patuás e amuletos de proteção.',
        cha: '3 cravos-da-índia para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia, após as refeições. Contraindicado para gestantes, lactantes e pessoas com úlcera gástrica. O chá pode ser usado como antisséptico bucal (bochechos) e para aliviar náuseas.',
        banho: 'Quantidade: 10 cravos-da-índia para 2 litros de água. Preparo litúrgico: Ferver os cravos em água por 3 minutos, deixar amornar e coar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Usado para energizar e proteger contra energias densas. Pode ser feito a cada 15 dias.'
    },
    {
        id: 'gengibre',
        nome: 'Gengibre',
        cientifico: 'Zingiber officinale',
        classificacao: 'Erva Quente / Estimulante',
        imagem: 'imagens/gengibre.jpg',
        origem: 'O gengibre é uma planta herbácea originária da Ásia tropical, cultivada há mais de 5.000 anos na China e na Índia. É uma das especiarias mais antigas e valorizadas do mundo, utilizada tanto na culinária quanto na medicina tradicional. Na China antiga, era usado para tratar náuseas, resfriados e dores. Os romanos o importavam da Índia, e na Idade Média era usado para combater a peste. No Brasil, é amplamente consumido como chá, tempero e em rituais espirituais.',
        medicinais: 'O gengibre possui propriedades anti-inflamatórias, antioxidantes, digestivas e termogênicas, devido aos gingeróis e shogaóis. É eficaz no tratamento de náuseas, enjoos de movimento e vômitos, inclusive os da gravidez (em doses moderadas). Estudos mostram que pode reduzir dores musculares e articulares, melhorar a circulação e auxiliar no controle do colesterol e da glicemia. É usado como expectorante e no alívio de sintomas de gripes e resfriados. O consumo excessivo pode causar irritação gástrica.',
        espirituais: 'Na Umbanda, o gengibre é classificado como erva quente ou estimulante, associado a Iansã e Xangô. É utilizado em banhos e defumações para energização, quebra de bloqueios e movimento. É considerado uma raiz de força, que ativa a coragem e a determinação. Também é usado em oferendas e em banhos para atrair prosperidade. Por ser uma erva quente, deve ser usado com moderação, combinado com ervas equilibrantes.',
        cha: '3 fatias finas de gengibre fresco (ou 1 colher de chá de gengibre em pó) para 200 ml de água. Decocção por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para pessoas com úlcera gástrica, cálculos biliares e uso de anticoagulantes. Pode ser adoçado com mel. O chá é excelente para aquecer o corpo e aliviar sintomas de resfriado.',
        banho: 'Quantidade: 5 fatias de gengibre fresco para 2 litros de água. Preparo litúrgico: Ferver as fatias em água por 3 minutos, deixar amornar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Usado para ativar energias, trazer ânimo e quebrar bloqueios. Pode ser feito semanalmente, mas evitar em dias de muito calor.'
    },
    {
        id: 'pimenta',
        nome: 'Pimenta',
        cientifico: 'Capsicum spp.',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/pimenta.jpg',
        especies: [
            'Capsicum frutescens – Malagueta',
            'Capsicum baccatum – Dedo-de-moça e Cumari',
            'Capsicum chinense – Pimenta-de-cheiro e Habanero',
            'Capsicum annuum – Pimentão e Jalapeño'
        ],
        origem: 'As pimentas do gênero Capsicum são originárias das Américas, cultivadas há milhares de anos por povos indígenas. Foram levadas para a Europa por Cristóvão Colombo e rapidamente se espalharam pelo mundo. No Brasil, existem inúmeras variedades, como malagueta, dedo-de-moça e cumari. Além do uso culinário, as pimentas sempre tiveram importância ritualística, sendo associadas à proteção e ao afastamento de energias negativas.',
        medicinais: 'A pimenta contém capsaicina, composto com propriedades analgésicas, termogênicas e anti-inflamatórias. É utilizada topicamente em pomadas para aliviar dores musculares e neuropáticas. O consumo interno estimula a circulação, acelera o metabolismo e promove a liberação de endorfinas. Estudos indicam que pode auxiliar na redução do apetite e no controle da obesidade. Deve ser evitada por pessoas com gastrite, úlcera ou sensibilidade digestiva.',
        espirituais: 'Na Umbanda, a pimenta é classificada como erva quente ou de descarrego, associada a Exu e Ogum. É utilizada em banhos e rituais para afastar energias densas, quebrar demandas e proteger contra inimigos espirituais. Em algumas casas, é colocada inteira em locais estratégicos do terreiro para proteção. Também é usada em defumações e em oferendas. Por ser extremamente quente, deve ser usada com muito cuidado e apenas por pessoas experientes.',
        cha: 'A pimenta não é recomendada para ingestão como chá. Para uso tópico: 1 pimenta vermelha pequena amassada em 200 ml de água morna, aplicar como compressa (evitar contato com olhos e mucosas). Nunca beber. Contraindicado para crianças, gestantes e pessoas com pele sensível.',
        banho: 'Quantidade: 1 pimenta vermelha pequena amassada para 2 litros de água. Preparo litúrgico: Amassar a pimenta com as mãos (usar luvas) ou com um pilão, mentalizando a quebra de energias negativas. Deixar em infusão na água morna por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Evitar contato com os olhos e mucosas. Usar somente em casos extremos de descarrego, com intervalo mínimo de 60 dias.'
    },
    {
        id: 'levante',
        nome: 'Levante',
        cientifico: 'Mentha sp.',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/levante.jpg',
        especies: [
            'Mentha spicata – Hortelã-verde (mais comum)',
            'Mentha piperita – Hortelã-pimenta',
            'Outros híbridos do gênero Mentha'
        ],
        origem: 'O levante é uma variedade de hortelã de aroma suave, muito comum no Brasil. Seu nome popular vem da crença de que ajuda a "levantar" as energias e o astral. É amplamente cultivada em hortas caseiras e utilizada em banhos de descarrego leve e harmonização. Embora não seja nativa, adaptou-se bem ao clima brasileiro e tornou-se uma das ervas mais queridas na Umbanda.',
        medicinais: 'O levante possui propriedades digestivas, calmantes e analgésicas, semelhantes à hortelã comum. É utilizado para aliviar dores de cabeça, cólicas e problemas digestivos. Seu chá é leve e refrescante, podendo ser consumido diariamente. Contém mentol, que proporciona sensação de frescor e auxilia na respiração. É seguro para a maioria das pessoas, inclusive crianças (em doses moderadas).',
        espirituais: 'Na Umbanda, o levante é classificado como erva morna ou equilibradora, associado a Oxalá e Iemanjá. É utilizado em banhos de limpeza suave, para harmonizar o campo energético, acalmar a mente e renovar as energias. É uma erva muito versátil, que pode ser combinada com outras ervas em banhos de descarrego leve. Também é usada em defumações para purificar ambientes e trazer sensação de paz.',
        cha: '1 colher de sopa de folhas frescas de levante para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Pode ser adoçado com mel. Indicado após as refeições ou em momentos de estresse.',
        banho: 'Quantidade: 7 ramos de levante fresco para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando limpeza e renovação. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito semanalmente para manter o equilíbrio energético.'
    },
    {
        id: 'erva-doce',
        nome: 'Erva-Doce',
        cientifico: 'Pimpinella anisum',
        classificacao: 'Erva Morna / Fixadora',
        imagem: 'imagens/erva-doce.jpg',
        origem: 'A erva-doce, também conhecida como anis, é originária do Oriente Médio e da bacia do Mediterrâneo. É cultivada há milhares de anos, sendo mencionada em textos egípcios e romanos. Na antiguidade, era usada como planta medicinal e aromática, além de ser considerada um símbolo de prosperidade. No Brasil, é amplamente utilizada na culinária, em chás calmantes e em rituais espirituais para atrair boas energias.',
        medicinais: 'A erva-doce possui propriedades digestivas, carminativas, relaxantes e levemente sedativas, devido ao anetol, seu principal composto ativo. É utilizada para aliviar cólicas, gases, má digestão e insônia. Também tem ação expectorante e antisséptica suave. O chá é seguro para a maioria das pessoas, incluindo crianças e idosos, mas deve ser evitado em excesso por gestantes.',
        espirituais: 'Na Umbanda, a erva-doce é classificada como erva morna ou fixadora, associada a Oxum e Iansã. É utilizada em banhos e defumações para atrair prosperidade, fixar energias positivas e promover harmonia nos relacionamentos. Seu aroma adocicado agrada aos orixás femininos. Também é usada em amacis e em trabalhos de união e amor. Pode ser combinada com manjericão e alfazema em banhos de fixação.',
        cha: '1 colher de chá de sementes de erva-doce para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia, preferencialmente após as refeições. Pode ser adoçado com mel. Contraindicado em excesso para gestantes.',
        banho: 'Quantidade: 2 colheres de sopa de sementes de erva-doce amassadas para 2 litros de água. Preparo litúrgico: Amassar levemente as sementes com um pilão, mentalizando prosperidade e fixação. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair abundância e estabilizar energias positivas.'
    },
    {
        id: 'hortela',
        nome: 'Hortelã',
        cientifico: 'Mentha sp.',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/hortela.jpg',
        especies: [
            'Mentha spicata – Hortelã-verde',
            'Mentha piperita – Hortelã-pimenta',
            'Mentha arvensis – Hortelã-japonesa',
            'Híbridos como Mentha × gracilis'
        ],
        origem: 'A hortelã é uma planta herbácea originária da Europa e da Ásia, mas naturalizada em todo o mundo. Existem diversas espécies e híbridos, como a hortelã-pimenta e a hortelã-verde. É cultivada desde a antiguidade por suas propriedades aromáticas e medicinais. No Brasil, é uma das ervas mais populares em hortas caseiras, utilizada tanto na culinária quanto em remédios caseiros e rituais espirituais.',
        medicinais: 'A hortelã possui propriedades digestivas, analgésicas, refrescantes e antissépticas, devido ao mentol. É utilizada para aliviar dores de cabeça, enxaquecas, cólicas, má digestão e sintomas de resfriados. O chá é seguro para a maioria das pessoas, mas deve ser evitado por pessoas com refluxo gastroesofágico, pois pode relaxar o esfíncter esofágico. Também é usada topicamente para aliviar dores musculares.',
        espirituais: 'Na Umbanda, a hortelã é classificada como erva morna ou equilibradora, associada a Oxalá e Iansã. É utilizada em banhos e defumações para clareza mental, harmonização e limpeza energética suave. Ajuda a acalmar os pensamentos e a trazer frescor espiritual. Também é empregada em rituais de abertura de caminhos, combinada com outras ervas mornas.',
        cha: '1 colher de sopa de folhas frescas de hortelã para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Pode ser consumido quente ou gelado. Evitar à noite se houver tendência a refluxo.',
        banho: 'Quantidade: 7 ramos de hortelã fresca para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando clareza e renovação. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito sempre que houver necessidade de clarear a mente.'
    },
    {
        id: 'capim-limao',
        nome: 'Capim-Limão',
        cientifico: 'Cymbopogon citratus',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/capim-limao.jpg',
        origem: 'O capim-limão, também conhecido como erva-cidreira, é originário da Ásia tropical, sendo amplamente cultivado em regiões tropicais e subtropicais, incluindo o Brasil. É utilizado há séculos na medicina tradicional asiática e africana. Seu aroma cítrico e refrescante o torna popular em chás e banhos. No Brasil, é uma das ervas mais comuns em quintais e hortas.',
        medicinais: 'O capim-limão possui propriedades calmantes, digestivas, analgésicas e antiespasmódicas, devido ao citral, seu principal composto ativo. É utilizado para aliviar ansiedade, insônia, cólicas e dores de cabeça. Estudos mostram que pode ter efeito anti-inflamatório e antifúngico. O chá é seguro para a maioria das pessoas, mas deve ser evitado em excesso por gestantes, pois pode estimular contrações.',
        espirituais: 'Na Umbanda, o capim-limão é classificado como erva morna ou equilibradora, associado a Oxalá e Iemanjá. É utilizado em banhos de limpeza energética suave, para tranquilizar e harmonizar o campo espiritual. Também é empregado em defumações para purificar ambientes e atrair boas energias. Por ser uma erva equilibradora, pode ser combinada com outras ervas sem risco de desequilíbrio.',
        cha: '1 colher de sopa de folhas picadas de capim-limão para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Pode ser adoçado com mel. Indicado para momentos de estresse ou antes de dormir.',
        banho: 'Quantidade: 5 folhas de capim-limão frescas para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando paz e limpeza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito semanalmente para manter o equilíbrio.'
    },
    {
        id: 'saiao',
        nome: 'Saião',
        cientifico: 'Kalanchoe pinnata',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/saiao.jpg',
        origem: 'O saião, também conhecido como folha-da-fortuna ou coirama, é uma planta suculenta originária da África tropical, mas amplamente naturalizada no Brasil. É cultivada em jardins e hortas caseiras, sendo uma das plantas medicinais mais populares do país. Seu uso é registrado desde o período colonial, tanto na medicina popular quanto em rituais de proteção e prosperidade.',
        medicinais: 'O saião possui propriedades cicatrizantes, anti-inflamatórias, antimicrobianas e antitumorais, devido a compostos como flavonoides e bufadienolídeos. É utilizado no tratamento de feridas, queimaduras, gastrite, úlceras e inflamações em geral. O suco das folhas é aplicado topicamente ou ingerido diluído. Estudos científicos têm demonstrado seu potencial no tratamento de lesões gástricas e na cicatrização de tecidos. Deve ser evitado por gestantes, pois pode estimular contrações uterinas.',
        espirituais: 'Na Umbanda, o saião é classificado como erva morna ou equilibradora, associado a Oxalá e Oxóssi. É utilizado em banhos de limpeza e harmonização, para vitalidade e renovação energética. Também é plantado em casas e terreiros para atrair prosperidade e proteção. Suas folhas são usadas em rituais de cura e em amacis. É uma erva de fácil cultivo, o que a torna acessível para uso cotidiano.',
        cha: '3 folhas frescas de saião picadas para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes. Pode ser usado para aliviar dores de estômago e inflamações.',
        banho: 'Quantidade: 5 folhas de saião frescas para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando vitalidade e limpeza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para renovar as energias e promover bem-estar.'
    },
    {
        id: 'manjerona',
        nome: 'Manjerona',
        cientifico: 'Origanum majorana',
        classificacao: 'Erva Morna / Fixadora',
        imagem: 'imagens/manjerona.jpg',
        origem: 'A manjerona é uma erva aromática originária do Mediterrâneo e do Oriente Médio, cultivada desde a antiguidade. Na Grécia antiga, era símbolo de felicidade e paz, sendo usada em coroas de casamento. Os romanos a consideravam afrodisíaca. No Brasil, é menos comum que outras ervas, mas ainda é utilizada em rituais espirituais e na culinária. É parente do orégano, porém de sabor mais suave e adocicado.',
        medicinais: 'A manjerona possui propriedades calmantes, digestivas, antiespasmódicas e antioxidantes, devido à presença de terpenos e flavonoides. É utilizada para aliviar ansiedade, insônia, cólicas e dores de cabeça. Também tem ação expectorante e antisséptica. O chá é seguro para a maioria das pessoas, mas deve ser evitado por gestantes em grandes quantidades.',
        espirituais: 'Na Umbanda, a manjerona é classificada como erva morna ou fixadora, associada a Oxum e Iemanjá. É utilizada em banhos e defumações para atrair amor, união, equilíbrio emocional e paz. Ajuda a fortalecer laços afetivos e a harmonizar o ambiente familiar. Também é usada em rituais de prosperidade e proteção do lar.',
        cha: '1 colher de chá de folhas secas de manjerona para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Pode ser adoçado com mel. Contraindicado para gestantes.',
        banho: 'Quantidade: 5 ramos de manjerona fresca para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando amor e harmonia. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para fortalecer relacionamentos e atrair boas companhias.'
    },
    {
        id: 'salvia',
        nome: 'Sálvia',
        cientifico: 'Salvia officinalis',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/salvia.jpg',
        origem: 'A sálvia é uma planta aromática originária do Mediterrâneo, cultivada há milhares de anos. Seu nome deriva do latim "salvare", que significa "salvar" ou "curar", refletindo sua reputação medicinal. Na antiguidade, era usada em rituais de purificação e proteção. Na Europa medieval, era considerada uma erva sagrada, capaz de afastar espíritos malignos. No Brasil, é cultivada principalmente para fins culinários e medicinais, e também tem uso espiritual em algumas tradições.',
        medicinais: 'A sálvia possui propriedades anti-inflamatórias, antissépticas, digestivas e antioxidantes, devido a compostos como ácido rosmarínico e cineol. É utilizada para aliviar dores de garganta, inflamações na boca, problemas digestivos e sintomas da menopausa, como ondas de calor. Estudos mostram que pode melhorar a memória e a função cognitiva. Deve ser evitada por gestantes e lactantes, pois pode reduzir a produção de leite.',
        espirituais: 'Na Umbanda, a sálvia é classificada como erva morna ou equilibradora, associada a Oxalá e Iansã. É utilizada em banhos e defumações para purificação, sabedoria e limpeza espiritual. Ajuda a afastar energias negativas e a trazer clareza mental. Também é usada em rituais de consagração de objetos e ambientes sagrados. Por ser uma erva solar, fortalece a intuição e a conexão com o divino.',
        cha: '1 colher de chá de folhas secas de sálvia para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes, lactantes e pessoas com pressão alta. Pode ser usado para gargarejos em caso de inflamação na garganta.',
        banho: 'Quantidade: 5 ramos de sálvia fresca para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando purificação e sabedoria. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para momentos de confusão mental ou antes de rituais importantes.'
    },
    {
        id: 'tomilho',
        nome: 'Tomilho',
        cientifico: 'Thymus vulgaris',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/tomilho.jpg',
        origem: 'O tomilho é uma erva aromática originária do Mediterrâneo, utilizada desde a antiguidade como tempero e planta medicinal. Os egípcios o usavam no embalsamamento; os gregos o queimavam como incenso em templos. Na Idade Média, era associado à coragem e à proteção. No Brasil, é cultivado principalmente para uso culinário, mas também tem aplicações espirituais e medicinais.',
        medicinais: 'O tomilho possui propriedades antissépticas, expectorantes, digestivas e antioxidantes, devido ao timol e carvacrol. É utilizado no tratamento de infecções respiratórias, tosse, bronquite e dores de garganta. Estudos mostram sua eficácia contra bactérias e fungos. O chá é seguro para a maioria das pessoas, mas deve ser evitado por gestantes e lactantes em grandes quantidades.',
        espirituais: 'Na Umbanda, o tomilho é classificado como erva morna ou equilibradora, associado a Oxóssi e Iansã. É utilizado em banhos e defumações para proteção, limpeza e vitalidade. Ajuda a fortalecer o campo energético e a atrair boas influências. Também é empregado em rituais de cura e em defumações de ambientes.',
        cha: '1 colher de chá de folhas secas de tomilho para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes. Pode ser adoçado com mel, especialmente para tosse.',
        banho: 'Quantidade: 5 ramos de tomilho fresco para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando proteção e limpeza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser usado semanalmente para fortalecer a energia.'
    },
    {
        id: 'oregano',
        nome: 'Orégano',
        cientifico: 'Origanum vulgare',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/oregano.jpg',
        origem: 'O orégano é uma erva aromática originária da Europa e da Ásia, naturalizada em várias regiões do Brasil. É conhecido desde a antiguidade, sendo usado pelos gregos como símbolo de alegria e pelos romanos como tempero. Seu nome deriva do grego "oros" (montanha) e "ganos" (alegria), ou seja, "alegria da montanha". No Brasil, é mais comum na culinária, mas também tem aplicações medicinais e espirituais.',
        medicinais: 'O orégano possui propriedades antibacterianas, antifúngicas, antioxidantes e digestivas, devido ao carvacrol e timol. É utilizado para aliviar problemas digestivos, cólicas e infecções leves. Estudos mostram sua eficácia contra bactérias como Escherichia coli e fungos como Candida. O chá é seguro para a maioria das pessoas, mas gestantes devem evitar o consumo excessivo.',
        espirituais: 'Na Umbanda, o orégano é classificado como erva morna ou equilibradora, associado a Oxóssi e Oxalá. É utilizado em banhos e defumações para proteção, harmonização e limpeza energética. Ajuda a afastar energias negativas e a promover equilíbrio. Também é usado em rituais de prosperidade e em defumações de ambientes.',
        cha: '1 colher de chá de folhas secas de orégano para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes. Pode ser adoçado com mel.',
        banho: 'Quantidade: 5 ramos de orégano fresco para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando proteção e harmonia. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito semanalmente.'
    },
    {
        id: 'folha-de-louro',
        nome: 'Folha de Louro',
        cientifico: 'Laurus nobilis',
        classificacao: 'Erva Morna / Fixadora',
        imagem: 'imagens/folha-de-louro.jpg',
        origem: 'O louro é uma árvore originária do Mediterrâneo, cultivada desde a antiguidade. Na Grécia antiga, era símbolo de vitória e sabedoria, sendo usada para coroar heróis e atletas. Os romanos a consideravam sagrada, associada a Apolo. No Brasil, é amplamente utilizada como tempero e em rituais espirituais para atrair prosperidade e proteção.',
        medicinais: 'A folha de louro possui propriedades digestivas, anti-inflamatórias, diuréticas e antioxidantes, devido a compostos como cineol e eugenol. É utilizada para aliviar problemas digestivos, gases e inflamações. O chá é seguro em pequenas quantidades, mas o consumo excessivo pode causar sonolência. Gestantes devem evitar, pois pode estimular o útero.',
        espirituais: 'Na Umbanda, a folha de louro é classificada como erva morna ou fixadora, associada a Oxóssi e Oxalá. É utilizada em banhos e defumações para atrair prosperidade, sabedoria e fixação de energias positivas. Também é usada em trabalhos de abertura de caminhos e para fortalecer a intuição. Suas folhas são queimadas em defumações para purificar ambientes.',
        cha: '2 folhas de louro secas para 200 ml de água. Decocção por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes e lactantes. Pode ser usado para melhorar a digestão.',
        banho: 'Quantidade: 7 folhas de louro para 2 litros de água. Preparo litúrgico: Ferver as folhas em água por 5 minutos, deixar amornar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair prosperidade e fixar energias de sucesso.'
    },
    {
        id: 'eucalipto',
        nome: 'Eucalipto',
        cientifico: 'Eucalyptus globulus',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/eucalipto.jpg',
        origem: 'O eucalipto é uma árvore originária da Austrália, introduzida no Brasil no século XIX para produção de madeira e celulose. Adaptou-se muito bem ao clima brasileiro, tornando-se uma das espécies mais cultivadas. Suas folhas são ricas em óleos essenciais com propriedades medicinais, amplamente utilizadas na medicina popular e na aromaterapia.',
        medicinais: 'O eucalipto possui propriedades expectorantes, antissépticas, descongestionantes e anti-inflamatórias, devido ao eucaliptol (1,8-cineol). É utilizado no tratamento de gripes, resfriados, sinusites, bronquites e asma. O vapor do chá é inalado para descongestionar as vias respiratórias. O uso interno deve ser moderado, pois altas doses podem ser tóxicas. Gestantes, lactantes e crianças pequenas devem evitar.',
        espirituais: 'Na Umbanda, o eucalipto é classificado como erva morna ou equilibradora, associado a Oxóssi e Iansã. É utilizado em banhos e defumações para limpeza respiratória, energização e purificação de ambientes. Ajuda a renovar as energias e a trazer vitalidade. Também é usado em rituais de cura e em banhos de descarrego suave.',
        cha: '5 folhas de eucalipto para 200 ml de água. Infusão por 5 a 10 minutos. Dose recomendada: até 2 xícaras ao dia, de preferência inalando o vapor antes de beber. Contraindicado para gestantes, lactantes e crianças menores de 6 anos.',
        banho: 'Quantidade: 7 folhas de eucalipto para 2 litros de água. Preparo litúrgico: Ferver levemente as folhas em água por 3 minutos, deixar amornar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para limpar as vias respiratórias e energizar o corpo.'
    },
    {
        id: 'colonia',
        nome: 'Colônia',
        cientifico: 'Alpinia speciosa',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/colonia.jpg',
        origem: 'A colônia é uma planta herbácea originária da Ásia tropical, amplamente cultivada em jardins tropicais, incluindo o Brasil. É conhecida por suas flores perfumadas e folhas aromáticas, utilizadas em banhos e defumações. Seu nome popular vem do aroma agradável, semelhante a perfumes coloniais. Na Umbanda, é uma das ervas mais utilizadas em banhos de paz e tranquilidade.',
        medicinais: 'A colônia possui propriedades calmantes, anti-inflamatórias e digestivas suaves. É utilizada popularmente para aliviar ansiedade, insônia e dores de cabeça. O chá das folhas ou flores é leve e aromático. Não há contraindicações significativas, mas gestantes devem consumir com moderação.',
        espirituais: 'Na Umbanda, a colônia é classificada como erva fria ou acalmadora, associada a Iemanjá e Oxum. É utilizada em banhos de paz, tranquilidade e para atrair boas energias. Ajuda a acalmar o emocional e a harmonizar o ambiente. Também é empregada em defumações para purificação suave e em rituais de amor e união.',
        cha: '1 colher de sopa de flores ou folhas frescas de colônia para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Pode ser adoçado com mel.',
        banho: 'Quantidade: 3 colheres de sopa de pétalas ou folhas frescas de colônia para 2 litros de água. Preparo litúrgico: Macerar levemente as folhas ou pétalas, mentalizando paz e tranquilidade. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e atrair boas vibrações.'
    },
    {
        id: 'alfazema',
        nome: 'Alfazema (Lavanda)',
        cientifico: 'Lavandula angustifolia',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/alfazema.jpg',
        origem: 'A alfazema, também conhecida como lavanda, é originária da região do Mediterrâneo. É cultivada há milhares de anos por seu aroma e propriedades medicinais. Os romanos a usavam em banhos e para perfumar roupas; seu nome deriva do latim "lavare", que significa "lavar". No Brasil, é cultivada em regiões serranas e utilizada amplamente em aromaterapia, cosméticos e rituais espirituais.',
        medicinais: 'A alfazema possui propriedades calmantes, sedativas, analgésicas e anti-inflamatórias, devido ao linalol e acetato de linalila. É utilizada para tratar ansiedade, insônia, depressão leve e dores de cabeça. O chá das flores é relaxante e seguro. Também é usada topicamente em compressas para aliviar dores musculares. Contraindicada em altas doses para gestantes.',
        espirituais: 'Na Umbanda, a alfazema é classificada como erva fria ou acalmadora, associada a Iemanjá e Oxum. É utilizada em banhos de limpeza suave, harmonização e paz. Ajuda a acalmar o emocional, atrair boas energias e promover o equilíbrio. Também é empregada em defumações para purificar ambientes e em rituais de amor e união.',
        cha: '1 colher de chá de flores secas de alfazema para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes e lactantes em grandes quantidades.',
        banho: 'Quantidade: 2 colheres de sopa de flores secas de alfazema para 2 litros de água. Preparo litúrgico: Colocar as flores em água morna e deixar em infusão por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e trazer paz interior.'
    },
    {
        id: 'camomila',
        nome: 'Camomila',
        cientifico: 'Matricaria chamomilla',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/camomila.jpg',
        origem: 'A camomila é uma planta herbácea originária da Europa e da Ásia, cultivada há séculos por suas propriedades medicinais. É uma das ervas mais populares do mundo, conhecida por seu efeito calmante e digestivo. No Brasil, é amplamente utilizada em chás, cosméticos e rituais espirituais de limpeza suave.',
        medicinais: 'A camomila possui propriedades calmantes, anti-inflamatórias, digestivas e antiespasmódicas, devido a compostos como apigenina e bisabolol. É utilizada para tratar ansiedade, insônia, cólicas, má digestão e inflamações da pele. O chá é seguro para a maioria das pessoas, incluindo crianças e idosos. Pode ser usado topicamente em compressas para irritações cutâneas.',
        espirituais: 'Na Umbanda, a camomila é classificada como erva fria ou acalmadora, associada a Iemanjá e Oxum. É utilizada em banhos de limpeza suave, para acalmar, harmonizar e atrair paz. Também é empregada em defumações e em rituais de amor e união. É uma erva feminina, ligada à energia da lua.',
        cha: '1 colher de chá de flores secas de camomila para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Pode ser adoçado com mel. Seguro para crianças em doses menores.',
        banho: 'Quantidade: 2 colheres de sopa de flores secas de camomila para 2 litros de água. Preparo litúrgico: Colocar as flores em água morna e deixar em infusão por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e suavizar as energias.'
    },
    {
        id: 'melissa',
        nome: 'Melissa (Erva-Cidreira Verdadeira)',
        cientifico: 'Melissa officinalis',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/melissa.jpg',
        origem: 'A melissa, também conhecida como erva-cidreira verdadeira, é originária do Mediterrâneo e da Ásia Ocidental. É cultivada desde a antiguidade, sendo mencionada por Dioscórides e Plínio. Seu nome deriva do grego "melissa", que significa "abelha", pois suas flores atraem abelhas. No Brasil, é utilizada como calmante e digestivo.',
        medicinais: 'A melissa possui propriedades calmantes, sedativas, antivirais e digestivas, devido a compostos como ácido rosmarínico e citral. É utilizada no tratamento de ansiedade, insônia, herpes labial e problemas digestivos. Estudos mostram que pode melhorar o humor e a função cognitiva. O chá é seguro para a maioria das pessoas, mas deve ser evitado por gestantes.',
        espirituais: 'Na Umbanda, a melissa é classificada como erva fria ou acalmadora, associada a Iemanjá e Oxum. É utilizada em banhos de paz, para acalmar a mente e harmonizar o emocional. Também é empregada em defumações para atrair tranquilidade e em rituais de amor.',
        cha: '1 colher de sopa de folhas frescas de melissa para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 5 ramos de melissa fresca para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando paz e tranquilidade. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e harmonizar.'
    },
    {
        id: 'jasmim',
        nome: 'Jasmim',
        cientifico: 'Jasminum officinale',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/jasmim.jpg',
        origem: 'O jasmim é um arbusto trepador originário da Ásia tropical, especialmente da região do Himalaia. É cultivado há séculos por seu perfume intenso e agradável. Na Índia, é associado ao amor e à sensualidade. No Brasil, é comum em jardins e utilizado em rituais espirituais de amor e paz.',
        medicinais: 'O jasmim possui propriedades calmantes, relaxantes e levemente afrodisíacas. O chá das flores é utilizado para aliviar ansiedade, insônia e dores de cabeça. Também é usado em aromaterapia para melhorar o humor. Não há contraindicações significativas, mas deve ser consumido com moderação por gestantes.',
        espirituais: 'Na Umbanda, o jasmim é classificado como erva fria ou acalmadora, associado a Oxum e Iemanjá. É utilizado em banhos de amor, sensualidade e paz. Ajuda a atrair boas energias nos relacionamentos e a harmonizar o ambiente. Também é empregado em defumações para purificação suave.',
        cha: '1 colher de chá de flores secas de jasmim para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Pode ser adoçado com mel.',
        banho: 'Quantidade: 2 colheres de sopa de flores secas de jasmim para 2 litros de água. Preparo litúrgico: Colocar as flores em água morna e deixar em infusão por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair amor e harmonia.'
    },
    {
        id: 'rosa-branca',
        nome: 'Rosa Branca',
        cientifico: 'Rosa alba',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/rosa-branca.jpg',
        origem: 'A rosa branca é uma das flores mais antigas e cultivadas do mundo, originária da Ásia. Na antiguidade, era símbolo de pureza, amor e silêncio. No Império Romano, era usada em cerimônias religiosas e banquetes. No Brasil, é cultivada como ornamental e utilizada em rituais espirituais de amor e paz.',
        medicinais: 'As pétalas de rosa branca possuem propriedades calmantes, antioxidantes e adstringentes. O chá é utilizado para aliviar ansiedade, insônia e dores de garganta. Também é usado topicamente em compressas para irritações na pele. É seguro para a maioria das pessoas, mas deve ser evitado por gestantes em grandes quantidades.',
        espirituais: 'Na Umbanda, a rosa branca é classificada como erva fria ou acalmadora, associada a Oxum e Iemanjá. É utilizada em banhos de amor puro, harmonia e limpeza espiritual. Ajuda a atrair boas energias e a promover a paz. Também é empregada em oferendas e em rituais de união.',
        cha: 'Pétalas de 1 rosa branca para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Pode ser adoçado com mel.',
        banho: 'Quantidade: Pétalas de 3 rosas brancas para 2 litros de água. Preparo litúrgico: Colocar as pétalas em água morna e deixar em infusão por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para harmonizar e atrair energias de amor e paz.'
    },
    {
        id: 'folha-de-laranjeira',
        nome: 'Folha de Laranjeira',
        cientifico: 'Citrus sinensis',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/folha-de-laranjeira.jpg',
        origem: 'A laranjeira é uma árvore originária da Ásia, introduzida no Brasil no período colonial. Suas folhas e flores são utilizadas desde a antiguidade para fins medicinais e aromáticos. No Brasil, a folha de laranjeira é comum em banhos de paz e tranquilidade na Umbanda, associada à energia feminina e acolhedora.',
        medicinais: 'As folhas de laranjeira possuem propriedades calmantes, digestivas e sedativas suaves, devido a compostos como linalol e limoneno. O chá é utilizado para aliviar ansiedade, insônia, cólicas e problemas digestivos. É seguro para a maioria das pessoas, incluindo crianças. Gestantes devem consumir com moderação.',
        espirituais: 'Na Umbanda, a folha de laranjeira é classificada como erva fria ou acalmadora, associada a Oxum e Iemanjá. É utilizada em banhos de paz, harmonia e limpeza espiritual suave. Ajuda a acalmar o emocional e a atrair boas energias. Também é empregada em defumações para purificar ambientes.',
        cha: '5 folhas frescas de laranjeira para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Pode ser adoçado com mel.',
        banho: 'Quantidade: 10 folhas de laranjeira para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando paz e harmonia. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e harmonizar o lar.'
    },
    {
        id: 'folha-de-bambu',
        nome: 'Folha de Bambu',
        cientifico: 'Bambusa vulgaris',
        classificacao: 'Erva Fria / Acalmadora',
        imagem: 'imagens/folha-de-bambu.jpg',
        origem: 'O bambu é uma planta originária da Ásia, amplamente cultivada em regiões tropicais, incluindo o Brasil. É conhecido por sua flexibilidade e resistência, simbolizando resiliência e paz. Na cultura oriental, é associado à prosperidade e à longevidade. Na Umbanda, suas folhas são usadas em banhos de limpeza suave e harmonização.',
        medicinais: 'As folhas de bambu possuem propriedades antioxidantes e remineralizantes, devido à presença de sílica e flavonoides. O chá é utilizado como diurético suave e para fortalecer cabelos e unhas. É seguro para a maioria das pessoas, mas deve ser consumido com moderação por gestantes.',
        espirituais: 'Na Umbanda, a folha de bambu é classificada como erva fria ou acalmadora, associada a Iemanjá e Oxalá. É utilizada em banhos de paz, flexibilidade e limpeza suave. Ajuda a promover a calma e a resiliência diante das dificuldades. Também é usada em defumações para harmonizar ambientes.',
        cha: '1 colher de sopa de folhas picadas de bambu para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 5 folhas de bambu para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando paz e flexibilidade. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para acalmar e trazer serenidade.'
    },
    {
        id: 'babosa',
        nome: 'Babosa',
        cientifico: 'Aloe vera',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/babosa.jpg',
        origem: 'A babosa é uma planta suculenta originária da África e da Península Arábica, cultivada há milhares de anos por suas propriedades medicinais. No Egito antigo, era chamada de "planta da imortalidade" e usada em rituais de beleza e embalsamamento. No Brasil, é amplamente utilizada na medicina popular e em rituais espirituais de proteção e cura.',
        medicinais: 'A babosa possui propriedades cicatrizantes, anti-inflamatórias, hidratantes e imunomoduladoras, devido a compostos como aloína e polissacarídeos. O gel é usado topicamente para tratar queimaduras, feridas, psoríase e inflamações. O suco interno é consumido com cautela, pois pode causar irritação gastrointestinal. Gestantes e lactantes devem evitar o uso interno.',
        espirituais: 'Na Umbanda, a babosa é classificada como erva morna ou equilibradora, associada a Oxalá e Oxum. É utilizada em banhos de cura, regeneração e proteção energética. Ajuda a renovar as energias e a promover o bem-estar. Também é plantada em casas e terreiros para proteção contra energias negativas.',
        cha: 'O chá de babosa não é comum. Para uso interno, recomenda-se o gel diluído: 1 colher de sopa de gel de babosa em 200 ml de água. Agitar bem e consumir 1 vez ao dia. Contraindicado para gestantes, lactantes e pessoas com problemas intestinais. Uso tópico é mais seguro.',
        banho: 'Quantidade: Gel de 1 folha de babosa diluído em 2 litros de água. Preparo litúrgico: Extrair o gel da folha e bater no liquidificador com um pouco de água. Misturar na água morna. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para renovação energética e proteção.'
    },
    {
        id: 'folha-de-manga',
        nome: 'Folha de Manga',
        cientifico: 'Mangifera indica',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/folha-de-manga.jpg',
        origem: 'A mangueira é uma árvore originária da Índia, cultivada há mais de 4.000 anos. É considerada sagrada no hinduísmo e simboliza prosperidade e fertilidade. No Brasil, foi introduzida no período colonial e tornou-se uma das árvores frutíferas mais comuns. Suas folhas são utilizadas em rituais de prosperidade e limpeza espiritual.',
        medicinais: 'As folhas de manga possuem propriedades antidiabéticas, anti-inflamatórias e antioxidantes, devido a compostos como mangiferina e taninos. O chá é utilizado para auxiliar no controle da glicemia e no tratamento de inflamações. É seguro para a maioria das pessoas, mas deve ser consumido com moderação por gestantes.',
        espirituais: 'Na Umbanda, a folha de manga é classificada como erva morna ou equilibradora, associada a Oxóssi e Oxalá. É utilizada em banhos de prosperidade, fartura e limpeza. Ajuda a atrair boas energias e a harmonizar o ambiente. Também é empregada em rituais de abertura de caminhos.',
        cha: '5 folhas de manga para 200 ml de água. Decocção por 5 minutos. Dose recomendada: até 2 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 7 folhas de manga para 2 litros de água. Preparo litúrgico: Ferver as folhas em água por 5 minutos, deixar amornar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair prosperidade e fartura.'
    },
    {
        id: 'folha-de-pitanga',
        nome: 'Folha de Pitanga',
        cientifico: 'Eugenia uniflora',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/folha-de-pitanga.jpg',
        origem: 'A pitangueira é uma árvore nativa da Mata Atlântica brasileira, encontrada em todo o litoral do país. É conhecida por seus frutos vermelhos e saborosos, além de suas folhas aromáticas. Os povos indígenas já utilizavam suas folhas para fins medicinais. Na Umbanda, é uma erva de uso comum em banhos de purificação e harmonização.',
        medicinais: 'As folhas de pitanga possuem propriedades anti-inflamatórias, antissépticas e digestivas, devido a compostos como taninos e óleos essenciais. O chá é utilizado para tratar diarreias, inflamações e problemas digestivos. É seguro para a maioria das pessoas, mas deve ser evitado por gestantes em grandes quantidades.',
        espirituais: 'Na Umbanda, a folha de pitanga é classificada como erva morna ou equilibradora, associada a Oxum e Iemanjá. É utilizada em banhos de purificação, harmonização e limpeza energética. Ajuda a equilibrar as emoções e a atrair boas energias. Também é empregada em defumações para purificar ambientes.',
        cha: '5 folhas de pitanga para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 7 folhas de pitanga para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando purificação e harmonia. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Pode ser feito semanalmente.'
    },
    {
        id: 'folha-de-amora',
        nome: 'Folha de Amora',
        cientifico: 'Morus nigra',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/folha-de-amora.jpg',
        origem: 'A amoreira é uma árvore originária da Ásia, cultivada no Brasil principalmente para produção de frutos e folhas para o bicho-da-seda. Suas folhas são utilizadas na medicina popular e em rituais espirituais de reposição energética e limpeza.',
        medicinais: 'As folhas de amora possuem propriedades antioxidantes, antidiabéticas e anti-inflamatórias, devido a compostos como flavonoides e alcaloides. O chá é utilizado para auxiliar no controle da glicemia, reduzir o colesterol e aliviar sintomas da menopausa. É seguro para a maioria das pessoas, mas deve ser consumido com moderação por gestantes.',
        espirituais: 'Na Umbanda, a folha de amora é classificada como erva morna ou equilibradora, associada a Oxalá e Iemanjá. É utilizada em banhos de reposição de energias, limpeza e harmonização. Ajuda a renovar o campo energético e a trazer vitalidade. Também é empregada em defumações para purificação.',
        cha: '5 folhas de amora para 200 ml de água quente. Infusão por 5 a 10 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 7 folhas de amora para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando renovação e limpeza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para repor energias após períodos de cansaço.'
    },
    {
        id: 'folha-de-goiabeira',
        nome: 'Folha de Goiabeira',
        cientifico: 'Psidium guajava',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/folha-de-goiabeira.jpg',
        origem: 'A goiabeira é uma árvore nativa da América tropical, amplamente cultivada no Brasil. Suas folhas são utilizadas desde os tempos pré-coloniais pelos povos indígenas para tratar diarreias e inflamações. Na Umbanda, é uma erva de uso comum em banhos de limpeza suave e harmonização.',
        medicinais: 'As folhas de goiabeira possuem propriedades antidiarreicas, anti-inflamatórias e antimicrobianas, devido a compostos como taninos e flavonoides. O chá é utilizado para tratar diarreias, cólicas e inflamações na boca e garganta. É seguro para a maioria das pessoas, inclusive crianças. Gestantes devem consumir com moderação.',
        espirituais: 'Na Umbanda, a folha de goiabeira é classificada como erva morna ou equilibradora, associada a Oxalá e Oxóssi. É utilizada em banhos de limpeza suave, harmonização e cura. Ajuda a equilibrar as energias e a promover o bem-estar. Também é empregada em rituais de proteção do lar.',
        cha: '5 folhas de goiabeira para 200 ml de água. Decocção por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes em excesso.',
        banho: 'Quantidade: 7 folhas de goiabeira para 2 litros de água. Preparo litúrgico: Ferver as folhas em água por 5 minutos, deixar amornar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para harmonizar e proteger o ambiente.'
    },
    {
        id: 'folha-de-cafe',
        nome: 'Folha de Café',
        cientifico: 'Coffea arabica',
        classificacao: 'Erva Morna / Equilibradora',
        imagem: 'imagens/folha-de-cafe.jpg',
        origem: 'O café é originário da Etiópia, mas foi no Brasil que se tornou um dos maiores produtores mundiais. As folhas do cafeeiro, embora menos conhecidas que os grãos, também possuem propriedades medicinais e são utilizadas em rituais espirituais de limpeza e harmonização.',
        medicinais: 'As folhas de café possuem propriedades estimulantes, antioxidantes e diuréticas, devido à presença de cafeína e polifenóis. O chá é utilizado como estimulante suave e para auxiliar na digestão. Deve ser evitado por pessoas sensíveis à cafeína e por gestantes. O consumo à noite pode atrapalhar o sono.',
        espirituais: 'Na Umbanda, a folha de café é classificada como erva morna ou equilibradora, associada a Oxalá e Iansã. É utilizada em banhos de limpeza e harmonização, para trazer clareza mental e disposição. Também é empregada em defumações para purificar ambientes. É uma erva de uso menos comum, mas presente em algumas tradições.',
        cha: '5 folhas de café para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 2 xícaras ao dia, de preferência pela manhã. Contraindicado para gestantes, lactantes e pessoas com ansiedade.',
        banho: 'Quantidade: 7 folhas de café para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando limpeza e clareza. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para despertar a energia e clarear a mente.'
    },
    {
        id: 'cipo-cheiroso',
        nome: 'Cipó-Cheiroso (Guaco)',
        cientifico: 'Mikania glomerata',
        classificacao: 'Erva Morna / Fixadora',
        imagem: 'imagens/cipo-cheiroso.jpg',
        especies: [
            'Mikania glomerata – Guaco, cipó-cheiroso, erva-de-sapo',
            'Mikania laevigata – Guaco-do-mato, cipó-cheiroso'
        ],
        origem: 'O cipó-cheiroso, também conhecido como guaco, é uma planta trepadeira nativa da América do Sul, especialmente do Brasil. É amplamente utilizado na medicina popular como expectorante e broncodilatador. Na Umbanda, é associado a Oxum e Iemanjá, sendo usado em banhos de atração amorosa e fixação.',
        medicinais: 'O cipó-cheiroso possui propriedades expectorantes, broncodilatadoras e anti-inflamatórias, devido a compostos como cumarina e flavonoides. É utilizado no tratamento de tosses, bronquite e asma. O chá é seguro para a maioria das pessoas, mas deve ser evitado por gestantes, pois pode estimular contrações uterinas.',
        espirituais: 'Na Umbanda, o cipó-cheiroso é classificado como erva morna ou fixadora, associado a Oxum e Iemanjá. É utilizado em banhos de atração amorosa, fixação de relacionamentos e harmonização. Ajuda a fortalecer laços afetivos e a atrair boas companhias. Também é usado em rituais de união e prosperidade.',
        cha: '1 colher de sopa de folhas secas de cipó-cheiroso para 200 ml de água quente. Infusão por 5 minutos. Dose recomendada: até 3 xícaras ao dia. Contraindicado para gestantes.',
        banho: 'Quantidade: 5 ramos de cipó-cheiroso fresco para 2 litros de água. Preparo litúrgico: Macerar as folhas com as mãos, mentalizando amor e união. Colocar em água morna e deixar descansar por 10 minutos. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Indicado para atrair e fixar energias amorosas.'
    },
    {
        id: 'danda-da-costa',
        nome: 'Dandá-da-Costa',
        cientifico: 'Schinus terebinthifolia',
        classificacao: 'Erva Quente / Descarrego',
        imagem: 'imagens/danda-da-costa.jpg',
        origem: 'O dandá-da-costa, também conhecido como aroeira-vermelha, é nativo da América do Sul. É amplamente utilizado em rituais afro-brasileiros, especialmente na Umbanda e no Candomblé, como erva de descarrego profundo e proteção. Seu nome remete à Costa da África, de onde vieram muitos escravos que trouxeram o conhecimento sobre a planta.',
        medicinais: 'O dandá-da-costa possui propriedades anti-inflamatórias, antimicrobianas e cicatrizantes, semelhantes à aroeira comum. É utilizado externamente para tratar feridas, inflamações e dores reumáticas. O uso interno não é recomendado devido à toxicidade em altas doses. Gestantes e lactantes devem evitar completamente.',
        espirituais: 'Na Umbanda, o dandá-da-costa é classificado como erva quente ou de descarrego, associado a Exu e Ogum. É utilizado em banhos e defumações para descarrego profundo, quebra de demandas e proteção contra inimigos espirituais. É uma erva de poder, que deve ser usada com respeito e orientação. Também é empregada em sacudimentos e trabalhos de limpeza pesada.',
        cha: 'O chá de dandá-da-costa é de uso externo apenas. 1 colher de sopa de folhas secas para 200 ml de água fervente. Decocção por 5 minutos. Utilizar como compressa ou em escalda-pés. Nunca beber. Contraindicado para gestantes, lactantes e crianças.',
        banho: 'Quantidade: 5 ramos de dandá-da-costa fresco (ou 2 colheres de sopa de folhas secas) para 2 litros de água. Preparo litúrgico: Ferver levemente os ramos em água por 5 minutos, deixar amornar e coar. Aplicação: Após o banho normal, despejar do pescoço para baixo, sem enxaguar. Usar somente em casos de descarrego profundo, com intervalo mínimo de 30 dias. Não aplicar na cabeça.'
    }
];

// ========== FUNÇÕES AUXILIARES ==========
function getErvaById(id) {
    return ervas.find(e => e.id === id);
}

function renderizarCards() {
    const catalogo = document.getElementById('catalogo');
    if (!catalogo) return;
    
    ervas.forEach(erva => {
        const link = document.createElement('a');
        link.href = `detalhes.html?id=${erva.id}`;
        link.className = 'card';
        link.innerHTML = `
            <div class="card-imagem-container">
                <img src="${erva.imagem}" alt="Foto de ${erva.nome}" class="card-imagem" 
                     onerror="this.src='${IMAGEM_FALLBACK}'; this.alt='Imagem padrão'">
            </div>
            <div class="card-corpo">
                <h3 class="card-nome">${erva.nome}</h3>
                <p class="card-cientifico">${erva.cientifico}</p>
                <span class="card-classificacao">${erva.classificacao}</span>
            </div>
        `;
        catalogo.appendChild(link);
    });
}

function renderizarDetalhes() {
    const container = document.getElementById('detalhe-erva');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const erva = id ? getErvaById(id) : null;

    if (!erva) {
        container.innerHTML = '<p>Erva não encontrada. <a href="index.html">Voltar ao catálogo</a></p>';
        return;
    }

    document.title = `${erva.nome} – Detalhes`;

    const especiesHTML = erva.especies ? `
        <div class="detalhe-especies">
            <strong>Espécies/Variedades conhecidas:</strong>
            <ul>
                ${erva.especies.map(especie => `<li>${especie}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    container.innerHTML = `
        <img src="${erva.imagem}" alt="Foto de ${erva.nome}" class="detalhe-imagem"
             onerror="this.src='${IMAGEM_FALLBACK}'; this.alt='Imagem padrão'">
        <div class="detalhe-conteudo">
            <div class="detalhe-cabecalho">
                <h2 class="detalhe-titulo">${erva.nome}</h2>
                <p class="detalhe-cientifico"><em>${erva.cientifico}</em></p>
                <span class="detalhe-classificacao">${erva.classificacao}</span>
                ${especiesHTML}
            </div>

            <div class="detalhe-secao">
                <h2>Origem Histórica</h2>
                <p>${erva.origem}</p>
            </div>

            <div class="detalhe-secao">
                <h2>Usos Medicinais</h2>
                <p>${erva.medicinais}</p>
            </div>

            <div class="detalhe-secao">
                <h2>Usos Espirituais na Umbanda</h2>
                <p>${erva.espirituais}</p>
            </div>

            <div class="detalhe-secao">
                <h2>Como Preparar o Chá</h2>
                <div class="destaque-medida">
                    <p>${erva.cha.replace(/\n/g, '<br>')}</p>
                </div>
                ${erva.id === 'arruda' || erva.id === 'espada-de-sao-jorge' || erva.id === 'pimenta' || erva.id === 'guine' || erva.id === 'danda-da-costa' ? '<div class="destaque-aviso"><strong>⚠️ ATENÇÃO:</strong> Uso externo apenas. Não ingerir.</div>' : ''}
            </div>

            <div class="detalhe-secao">
                <h2>Como Preparar o Banho</h2>
                <div class="destaque-medida">
                    <p>${erva.banho.replace(/\n/g, '<br>')}</p>
                </div>
                ${erva.id === 'arruda' || erva.id === 'espada-de-sao-jorge' || erva.id === 'urtiga' || erva.id === 'danda-da-costa' ? '<div class="destaque-aviso"><strong>⚠️ REGRA RÍGIDA:</strong> Não aplicar na cabeça. Uso restrito e consciente.</div>' : ''}
            </div>
        </div>
    `;
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    renderizarCards();
    renderizarDetalhes();
});