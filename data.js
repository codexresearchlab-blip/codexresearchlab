/* Codex Research - shared data (catalog, articles, FAQ).
   Catalog = current available inventory with real prices.
   Each product: `mg` = strength, `sizes` = purchase options (single vial / 3-vial pack).
   Exposed on window.REA for every page to use. */

const PRODUCTS = [
  {
    slug: 'tirzepatide', name: 'GLP2-T', alias: 'tirzepatide', nameEs: 'Tirzepatida', altEs: ['Tirzepatide', 'GLP2-T'], cas: '2023788-19-2', tag: 'CAS # 2023788-19-2',
    mg: '20 mg', from: 149, formula: 'C225H348N48O68', weight: '4813.45 g/mol', pubchem: '156588324',
    photo: 'assets/products/tirzepatide.jpg',
    photo2: 'assets/products/tirzepatide-2.jpg',
    video: 'assets/products/tirzepatide.mp4', videoPoster: 'assets/products/tirzepatide-video.jpg',
    sizes: [
      { label: 'Single vial', price: 149 },
      { label: 'Pack · 3 vials', price: 411.24, save: '8%' },
      { label: 'Pack · 5 vials', price: 633.25, save: '15%' },
      { label: 'Pack · 10 vials', price: 1117.50, save: '25%' },
    ],
    overview: 'A dual GIP and GLP-1 receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista dual de los receptores GIP y GLP-1, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucose regulation', 'Metabolism'],
  },
  {
    slug: 'retatrutide', name: 'GLP3-R', alias: 'retatrutide', nameEs: 'Retatrutide', altEs: ['Retatrutida', 'GLP3-R'], cas: '', tag: 'Research use only',
    mg: '10 mg', from: 150, formula: 'C221H342N46O68', weight: '4731.4 g/mol', pubchem: 'N/A',
    photo: 'assets/products/retatrutide.jpg',
    photo2: 'assets/products/retatrutide-2.jpg',
    video: 'assets/products/retatrutide.mp4', videoPoster: 'assets/products/retatrutide-video.jpg',
    sizes: [
      { label: 'Single vial', price: 150 },
      { label: 'Pack · 3 vials', price: 414.00, save: '8%' },
      { label: 'Pack · 5 vials', price: 637.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 1125.00, save: '25%' },
    ],
    overview: 'A triple GIP / GLP-1 / glucagon receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista triple de los receptores GIP / GLP-1 / glucagón, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucagon signaling', 'Metabolism'],
  },
  {
    slug: 'retatrutide-20mg', name: 'GLP3-R', alias: 'retatrutide', nameEs: 'Retatrutide', altEs: ['Retatrutida', 'GLP3-R'], cas: '', tag: 'Research use only',
    mg: '20 mg', from: 194, formula: 'C221H342N46O68', weight: '4731.4 g/mol', pubchem: 'N/A',
    photo: 'assets/products/retatrutide-20mg.jpg', outOfStock: true,
    photo2: 'assets/products/retatrutide-20mg-2.jpg',
    video: 'assets/products/retatrutide-20mg.mp4', videoPoster: 'assets/products/retatrutide-20mg-video.jpg',
    sizes: [
      { label: 'Single vial', price: 194 },
      { label: 'Pack · 3 vials', price: 535.44, save: '8%' },
      { label: 'Pack · 5 vials', price: 824.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 1455.00, save: '25%' },
    ],
    overview: 'A triple GIP / GLP-1 / glucagon receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista triple de los receptores GIP / GLP-1 / glucagón, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucagon signaling', 'Metabolism'],
  },
  {
    slug: 'retatrutide-30mg', name: 'GLP3-R', alias: 'retatrutide', nameEs: 'Retatrutide', altEs: ['Retatrutida', 'GLP3-R'], cas: '', tag: 'Research use only',
    mg: '30 mg', from: 214, formula: 'C221H342N46O68', weight: '4731.4 g/mol', pubchem: 'N/A',
    photo: 'assets/products/retatrutide-30mg.jpg', outOfStock: true,
    photo2: 'assets/products/retatrutide-30mg-2.jpg',
    video: 'assets/products/retatrutide-30mg.mp4', videoPoster: 'assets/products/retatrutide-30mg-video.jpg',
    sizes: [
      { label: 'Single vial', price: 214 },
      { label: 'Pack · 3 vials', price: 590.64, save: '8%' },
      { label: 'Pack · 5 vials', price: 909.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 1605.00, save: '25%' },
    ],
    overview: 'A triple GIP / GLP-1 / glucagon receptor agonist studied in models of metabolic signaling, glucose regulation and energy balance.',
    overviewEs: 'Agonista triple de los receptores GIP / GLP-1 / glucagón, estudiado en modelos de señalización metabólica, regulación de la glucosa y balance energético.',
    research: ['GIP signaling', 'GLP-1 signaling', 'Glucagon signaling', 'Metabolism'],
  },
  {
    slug: 'bpc-157', name: 'BPC-157', cas: '137525-51-0', tag: 'CAS # 137525-51-0',
    mg: '10 mg', from: 79, formula: 'C62H98N16O22', weight: '1419.53 g/mol', pubchem: '9941957',
    photo: 'assets/products/bpc-157.jpg',
    photo2: 'assets/products/bpc-157-2.jpg',
    video: 'assets/products/bpc-157.mp4', videoPoster: 'assets/products/bpc-157-video.jpg',
    sizes: [
      { label: 'Single vial', price: 79 },
      { label: 'Pack · 3 vials', price: 218.04, save: '8%' },
      { label: 'Pack · 5 vials', price: 335.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 592.50, save: '25%' },
    ],
    overview: 'BPC-157 is a pentadecapeptide derived from a protective protein found in gastric juice. In research settings it has been studied for its interaction with signaling pathways associated with tissue repair and angiogenesis.',
    overviewEs: 'BPC-157 es un pentadecapéptido derivado de una proteína protectora presente en el jugo gástrico. En investigación se ha estudiado por su interacción con vías de señalización asociadas a la reparación de tejidos y a la angiogénesis.',
    research: ['Tissue repair', 'Angiogenesis', 'Nitric oxide signaling', 'Gastrointestinal integrity'],
  },
  {
    slug: 'mots-c', name: 'MOTS-c', cas: '1627580-64-6', tag: 'CAS # 1627580-64-6',
    mg: '10 mg', from: 85, formula: 'C101H152N28O22S2', weight: '2174.6 g/mol', pubchem: '146675088',
    photo: 'assets/products/mots-c.jpg',
    photo2: 'assets/products/mots-c-2.jpg',
    video: 'assets/products/mots-c.mp4', videoPoster: 'assets/products/mots-c-video.jpg',
    sizes: [
      { label: 'Single vial', price: 85 },
      { label: 'Pack · 3 vials', price: 234.60, save: '8%' },
      { label: 'Pack · 5 vials', price: 361.25, save: '15%' },
      { label: 'Pack · 10 vials', price: 637.50, save: '25%' },
    ],
    overview: 'MOTS-c is a mitochondrial-derived peptide studied in models of metabolic homeostasis and cell signaling.',
    overviewEs: 'MOTS-c es un péptido de origen mitocondrial estudiado en modelos de homeostasis metabólica y señalización celular.',
    research: ['Metabolic homeostasis', 'Mitochondrial function', 'Cell signaling'],
  },
  {
    slug: 'ipamorelin', name: 'Ipamorelin', nameEs: 'Ipamorelina', cas: '170851-70-4', tag: 'CAS # 170851-70-4',
    mg: '10 mg', from: 135, formula: 'C38H49N9O5', weight: '711.86 g/mol', pubchem: '9831659',
    photo: 'assets/products/ipamorelin.jpg',
    photo2: 'assets/products/ipamorelin-2.jpg',
    video: 'assets/products/ipamorelin.mp4', videoPoster: 'assets/products/ipamorelin-video.jpg',
    sizes: [
      { label: 'Single vial', price: 135 },
      { label: 'Pack · 3 vials', price: 372.60, save: '8%' },
      { label: 'Pack · 5 vials', price: 573.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 1012.50, save: '25%' },
    ],
    overview: 'Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist studied in models of growth hormone regulation.',
    overviewEs: 'Ipamorelina es un secretagogo selectivo de hormona de crecimiento y agonista del receptor de grelina, estudiado en modelos de regulación de la hormona de crecimiento.',
    research: ['GH secretagogues', 'Ghrelin receptor', 'Endocrine regulation'],
  },
  {
    slug: 'ghk-cu', name: 'GHK-Cu', cas: '89030-95-5', tag: 'CAS # 89030-95-5',
    mg: '100 mg', from: 95, formula: 'C14H24CuN6O4', weight: '403.9 g/mol', pubchem: 'N/A',
    photo: 'assets/products/ghk-cu.jpg',
    photo2: 'assets/products/ghk-cu-2.jpg',
    // Video 3D del vial (4:5, 6 s, sin audio). Va primero en la galería de la ficha.
    video: 'assets/products/ghk-cu.mp4', videoPoster: 'assets/products/ghk-cu-video.jpg',
    sizes: [
      { label: 'Single vial', price: 95 },
      { label: 'Pack · 3 vials', price: 262.20, save: '8%' },
      { label: 'Pack · 5 vials', price: 403.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 712.50, save: '25%' },
    ],
    overview: 'GHK-Cu (copper tripeptide-1, Gly-His-Lys-copper) is a naturally occurring copper-binding peptide studied in models of tissue remodeling, collagen synthesis and wound repair.',
    overviewEs: 'GHK-Cu (tripéptido de cobre-1, Gli-His-Lis-cobre) es un péptido natural con afinidad por el cobre, estudiado en modelos de remodelación de tejidos, síntesis de colágeno y reparación de heridas.',
    research: ['Tissue remodeling', 'Collagen synthesis', 'Wound repair', 'Skin biology'],
  },
  {
    slug: 'ghk-cu-50mg', name: 'GHK-Cu', cas: '89030-95-5', tag: 'CAS # 89030-95-5',
    mg: '50 mg', from: 64, formula: 'C14H24CuN6O4', weight: '403.9 g/mol', pubchem: 'N/A',
    photo: 'assets/products/ghk-cu-50mg.jpg', outOfStock: true,
    photo2: 'assets/products/ghk-cu-50mg-2.jpg',
    video: 'assets/products/ghk-cu-50mg.mp4', videoPoster: 'assets/products/ghk-cu-50mg-video.jpg',
    sizes: [
      { label: 'Single vial', price: 64 },
      { label: 'Pack · 3 vials', price: 176.64, save: '8%' },
      { label: 'Pack · 5 vials', price: 272.00, save: '15%' },
      { label: 'Pack · 10 vials', price: 480.00, save: '25%' },
    ],
    overview: 'GHK-Cu (copper tripeptide-1, Gly-His-Lys-copper) is a naturally occurring copper-binding peptide studied in models of tissue remodeling, collagen synthesis and wound repair.',
    overviewEs: 'GHK-Cu (tripéptido de cobre-1, Gli-His-Lis-cobre) es un péptido natural con afinidad por el cobre, estudiado en modelos de remodelación de tejidos, síntesis de colágeno y reparación de heridas.',
    research: ['Tissue remodeling', 'Collagen synthesis', 'Wound repair', 'Skin biology'],
  },
  {
    slug: 'pt-141', name: 'PT-141', cas: '189691-06-3', tag: 'CAS # 189691-06-3',
    mg: '10 mg', from: 85, formula: 'C50H68N14O10', weight: '1025.16 g/mol', pubchem: '9941379',
    photo: 'assets/products/pt-141.jpg',
    photo2: 'assets/products/pt-141-2.jpg',
    video: 'assets/products/pt-141.mp4', videoPoster: 'assets/products/pt-141-video.jpg',
    sizes: [
      { label: 'Single vial', price: 85 },
      { label: 'Pack · 3 vials', price: 234.60, save: '8%' },
      { label: 'Pack · 5 vials', price: 361.25, save: '15%' },
      { label: 'Pack · 10 vials', price: 637.50, save: '25%' },
    ],
    overview: 'PT-141 (bremelanotide) is a melanocortin receptor agonist studied in models of receptor signaling and neurobehavioral pathways.',
    overviewEs: 'PT-141 (bremelanotida) es un agonista de los receptores de melanocortina, estudiado en modelos de señalización de receptores y vías neuroconductuales.',
    research: ['Melanocortin signaling', 'Receptor binding', 'Neurobehavioral models'],
  },
  {
    slug: 'nad-plus', name: 'NAD+', cas: '53-84-9', tag: 'CAS # 53-84-9',
    mg: '1000 mg', from: 130, formula: 'C21H27N7O14P2', weight: '663.43 g/mol', pubchem: '5892',
    photo: 'assets/products/nad-plus.jpg',
    video: 'assets/products/nad-plus.mp4', videoPoster: 'assets/products/nad-plus-video.jpg',
    sizes: [
      { label: 'Single vial', price: 130 },
      { label: 'Pack · 3 vials', price: 358.80, save: '8%' },
      { label: 'Pack · 5 vials', price: 552.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 975.00, save: '25%' },
    ],
    overview: 'NAD+ (nicotinamide adenine dinucleotide) is an essential coenzyme studied in models of cellular metabolism, mitochondrial function and sirtuin signaling.',
    overviewEs: 'NAD+ (nicotinamida adenina dinucleótido) es una coenzima esencial estudiada en modelos de metabolismo celular, función mitocondrial y señalización de sirtuinas.',
    research: ['Cellular metabolism', 'Mitochondrial function', 'Sirtuin signaling'],
  },
  {
    slug: 'ahk-cu', name: 'AHK-Cu', cas: '682809-81-0', tag: 'CAS # 682809-81-0',
    mg: '50 mg', from: 120, formula: 'N/A', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/ahk-cu.jpg',
    photo2: 'assets/products/ahk-cu-2.jpg',
    video: 'assets/products/ahk-cu.mp4', videoPoster: 'assets/products/ahk-cu-video.jpg',
    sizes: [
      { label: 'Single vial', price: 120 },
    ],
    overview: 'AHK-Cu (copper tripeptide-3, Ala-His-Lys-copper) is a copper-binding peptide studied in models of dermal cell proliferation, collagen deposition and hair follicle biology.',
    overviewEs: 'AHK-Cu (tripéptido de cobre-3, Ala-His-Lis-cobre) es un péptido con afinidad por el cobre, estudiado en modelos de proliferación de células dérmicas, depósito de colágeno y biología del folículo piloso.',
    research: ['Dermal proliferation', 'Collagen deposition', 'Hair follicle biology', 'Tissue repair'],
  },
  {
    slug: 'tesamorelin', name: 'Tesamorelin', nameEs: 'Tesamorelina', cas: '218949-48-5', tag: 'CAS # 218949-48-5',
    mg: '10 mg', from: 164, formula: 'C221H366N72O67S', weight: '5135.9 g/mol', pubchem: '16137828',
    photo: 'assets/products/tesamorelin.jpg', outOfStock: true,
    photo2: 'assets/products/tesamorelin-2.jpg',
    video: 'assets/products/tesamorelin.mp4', videoPoster: 'assets/products/tesamorelin-video.jpg',
    sizes: [
      { label: 'Single vial', price: 164 },
      { label: 'Pack · 3 vials', price: 452.64, save: '8%' },
      { label: 'Pack · 5 vials', price: 697.00, save: '15%' },
      { label: 'Pack · 10 vials', price: 1230.00, save: '25%' },
    ],
    overview: 'Tesamorelin is a synthetic analog of growth hormone-releasing hormone (GHRH 1-44) carrying an N-terminal trans-3-hexenoyl group. It is studied in models of GHRH receptor signaling and growth hormone regulation.',
    overviewEs: 'Tesamorelina es un análogo sintético de la hormona liberadora de hormona de crecimiento (GHRH 1-44) con un grupo trans-3-hexenoilo en el extremo N-terminal. Se estudia en modelos de señalización del receptor de GHRH y regulación de la hormona de crecimiento.',
    research: ['GHRH receptor', 'GH regulation', 'Endocrine regulation'],
  },
  {
    slug: 'tesamorelin-20mg', name: 'Tesamorelin', nameEs: 'Tesamorelina', cas: '218949-48-5', tag: 'CAS # 218949-48-5',
    mg: '20 mg', from: 279, formula: 'C221H366N72O67S', weight: '5135.9 g/mol', pubchem: '16137828',
    photo: 'assets/products/tesamorelin-20mg.jpg', outOfStock: true,
    photo2: 'assets/products/tesamorelin-20mg-2.jpg',
    video: 'assets/products/tesamorelin-20mg.mp4', videoPoster: 'assets/products/tesamorelin-20mg-video.jpg',
    sizes: [
      { label: 'Single vial', price: 279 },
      { label: 'Pack · 3 vials', price: 770.04, save: '8%' },
      { label: 'Pack · 5 vials', price: 1185.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 2092.50, save: '25%' },
    ],
    overview: 'Tesamorelin is a synthetic analog of growth hormone-releasing hormone (GHRH 1-44) carrying an N-terminal trans-3-hexenoyl group. It is studied in models of GHRH receptor signaling and growth hormone regulation.',
    overviewEs: 'Tesamorelina es un análogo sintético de la hormona liberadora de hormona de crecimiento (GHRH 1-44) con un grupo trans-3-hexenoilo en el extremo N-terminal. Se estudia en modelos de señalización del receptor de GHRH y regulación de la hormona de crecimiento.',
    research: ['GHRH receptor', 'GH regulation', 'Endocrine regulation'],
  },
  {
    slug: 'cjc-1295-no-dac', name: 'CJC-1295 no DAC', nameEs: 'CJC-1295 sin DAC', cas: '863288-34-0', tag: 'CAS # 863288-34-0',
    mg: '10 mg', from: 129, formula: 'C152H252N44O42', weight: '3367.9 g/mol', pubchem: 'N/A',
    photo: 'assets/products/cjc-1295-no-dac.jpg', outOfStock: true,
    photo2: 'assets/products/cjc-1295-no-dac-2.jpg',
    video: 'assets/products/cjc-1295-no-dac.mp4', videoPoster: 'assets/products/cjc-1295-no-dac-video.jpg',
    sizes: [
      { label: 'Single vial', price: 129 },
      { label: 'Pack · 3 vials', price: 356.04, save: '8%' },
      { label: 'Pack · 5 vials', price: 548.25, save: '15%' },
      { label: 'Pack · 10 vials', price: 967.50, save: '25%' },
    ],
    overview: 'CJC-1295 without DAC (modified GRF 1-29) is a tetrasubstituted analog of the first 29 amino acids of growth hormone-releasing hormone, studied in models of GHRH receptor signaling and growth hormone regulation.',
    overviewEs: 'CJC-1295 sin DAC (GRF 1-29 modificado) es un análogo con cuatro sustituciones de los primeros 29 aminoácidos de la hormona liberadora de hormona de crecimiento, estudiado en modelos de señalización del receptor de GHRH y regulación de la hormona de crecimiento.',
    research: ['GHRH receptor', 'GH secretagogues', 'Endocrine regulation'],
  },
  {
    // El CAS 946870-92-4 que figuraba aquí resuelve en PubChem (CID 168009904) a un
    // lípido ionizable sin relación con IGF-1. Pasa el dígito de control, que es
    // justo lo que /tools/cas-number-check/ advierte: la comprobación nunca ve el
    // nombre. Se retira hasta tener uno verificable. [REVISAR HUMANO]
    slug: 'igf-1-lr3', name: 'IGF-1 LR3', cas: '', tag: 'Research use only',
    mg: '1 mg', from: 159, formula: 'N/A', weight: '9111 g/mol', pubchem: 'N/A',
    photo: 'assets/products/igf-1-lr3.jpg', outOfStock: true,
    photo2: 'assets/products/igf-1-lr3-2.jpg',
    video: 'assets/products/igf-1-lr3.mp4', videoPoster: 'assets/products/igf-1-lr3-video.jpg',
    sizes: [
      { label: 'Single vial', price: 159 },
      { label: 'Pack · 3 vials', price: 438.84, save: '8%' },
      { label: 'Pack · 5 vials', price: 675.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 1192.50, save: '25%' },
    ],
    overview: 'IGF-1 LR3 is a recombinant analog of insulin-like growth factor 1 with an arginine substitution at position 3 and a 13-amino-acid N-terminal extension, which lowers its affinity for IGF-binding proteins. It is studied in cell culture and in models of IGF-1 receptor signaling.',
    overviewEs: 'IGF-1 LR3 es un análogo recombinante del factor de crecimiento similar a la insulina tipo 1, con una arginina en la posición 3 y una extensión N-terminal de 13 aminoácidos que reduce su afinidad por las proteínas de unión a IGF. Se estudia en cultivo celular y en modelos de señalización del receptor de IGF-1.',
    research: ['IGF-1 receptor', 'Cell proliferation', 'Cell culture'],
  },
  {
    slug: 'tb-500', name: 'TB-500', cas: 'N/A', tag: 'Research use only',
    mg: '10 mg', from: 119, formula: 'N/A', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/tb-500.jpg',
    photo2: 'assets/products/tb-500-2.jpg',
    video: 'assets/products/tb-500.mp4', videoPoster: 'assets/products/tb-500-video.jpg',
    sizes: [
      { label: 'Single vial', price: 119 },
      { label: 'Pack · 3 vials', price: 328.44, save: '8%' },
      { label: 'Pack · 5 vials', price: 505.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 892.50, save: '25%' },
    ],
    overview: 'TB-500 is a synthetic peptide derived from thymosin beta-4, an actin-sequestering protein. It is studied in models of actin regulation, cell migration and tissue repair.',
    overviewEs: 'TB-500 es un péptido sintético derivado de la timosina beta-4, una proteína que secuestra actina. Se estudia en modelos de regulación de la actina, migración celular y reparación de tejidos.',
    research: ['Actin regulation', 'Cell migration', 'Tissue repair'],
  },
  {
    slug: 'ss-31', name: 'SS-31', cas: '736992-21-5', tag: 'CAS # 736992-21-5',
    mg: '10 mg', from: 99, formula: 'C32H49N9O5', weight: '639.8 g/mol', pubchem: 'N/A',
    photo: 'assets/products/ss-31.jpg', outOfStock: true,
    photo2: 'assets/products/ss-31-2.jpg',
    video: 'assets/products/ss-31.mp4', videoPoster: 'assets/products/ss-31-video.jpg',
    sizes: [
      { label: 'Single vial', price: 99 },
      { label: 'Pack · 3 vials', price: 273.24, save: '8%' },
      { label: 'Pack · 5 vials', price: 420.75, save: '15%' },
      { label: 'Pack · 10 vials', price: 742.50, save: '25%' },
    ],
    overview: 'SS-31 (elamipretide) is a mitochondria-targeted tetrapeptide that associates with cardiolipin in the inner mitochondrial membrane. It is studied in models of mitochondrial function and oxidative stress.',
    overviewEs: 'SS-31 (elamipretida) es un tetrapéptido dirigido a la mitocondria que se asocia a la cardiolipina de la membrana mitocondrial interna. Se estudia en modelos de función mitocondrial y estrés oxidativo.',
    research: ['Mitochondrial function', 'Cardiolipin', 'Oxidative stress'],
  },
  {
    slug: 'epithalon', name: 'Epithalon', nameEs: 'Epitalón', cas: '307297-39-8', tag: 'CAS # 307297-39-8',
    mg: '10 mg', from: 74, formula: 'C14H22N4O9', weight: '390.35 g/mol', pubchem: 'N/A',
    photo: 'assets/products/epithalon.jpg', outOfStock: true,
    photo2: 'assets/products/epithalon-2.jpg',
    video: 'assets/products/epithalon.mp4', videoPoster: 'assets/products/epithalon-video.jpg',
    sizes: [
      { label: 'Single vial', price: 74 },
      { label: 'Pack · 3 vials', price: 204.24, save: '8%' },
      { label: 'Pack · 5 vials', price: 314.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 555.00, save: '25%' },
    ],
    overview: 'Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide modeled on epithalamin, a pineal gland extract. It is studied in models of telomerase activity and cellular aging.',
    overviewEs: 'Epithalon (Ala-Glu-Asp-Gli) es un tetrapéptido sintético basado en la epitalamina, un extracto de la glándula pineal. Se estudia en modelos de actividad de la telomerasa y envejecimiento celular.',
    research: ['Telomerase', 'Pineal biology', 'Cellular aging'],
  },
  {
    slug: 'kisspeptin', name: 'Kisspeptin-10', nameEs: 'Kisspeptina-10', cas: '374675-21-5', tag: 'CAS # 374675-21-5',
    mg: '10 mg', from: 94, formula: 'C63H83N17O14', weight: '1302.4 g/mol', pubchem: 'N/A',
    photo: 'assets/products/kisspeptin.jpg', outOfStock: true,
    photo2: 'assets/products/kisspeptin-2.jpg',
    video: 'assets/products/kisspeptin.mp4', videoPoster: 'assets/products/kisspeptin-video.jpg',
    sizes: [
      { label: 'Single vial', price: 94 },
      { label: 'Pack · 3 vials', price: 259.44, save: '8%' },
      { label: 'Pack · 5 vials', price: 399.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 705.00, save: '25%' },
    ],
    overview: 'Kisspeptin-10 is the C-terminal decapeptide of kisspeptin and an agonist of the KISS1 receptor (GPR54). It is studied in models of hypothalamic-pituitary-gonadal signaling.',
    overviewEs: 'Kisspeptina-10 es el decapéptido C-terminal de la kisspeptina y agonista del receptor KISS1 (GPR54). Se estudia en modelos de señalización del eje hipotálamo-hipófisis-gónadas.',
    research: ['KISS1R signaling', 'GnRH regulation', 'Neuroendocrine models'],
  },
  {
    slug: 'bac-water', name: 'Bacteriostatic Water', nameEs: 'Agua bacteriostática', cas: 'N/A', tag: 'Laboratory diluent · 3 ml',
    mg: '3 ml', from: 10, formula: 'Water + 0.9% benzyl alcohol', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/bac-water.jpg',
    video: 'assets/products/bac-water.mp4', videoPoster: 'assets/products/bac-water-video.jpg',
    sizes: [
      { label: 'Single vial', price: 10 },
      { label: 'Pack · 3 vials', price: 27.60, save: '8%' },
      { label: 'Pack · 5 vials', price: 42.50, save: '15%' },
      { label: 'Pack · 10 vials', price: 75.00, save: '25%' },
    ],
    overview: 'Bacteriostatic water is sterile, nonpyrogenic water with 0.9% benzyl alcohol added as a preservative, to USP specification. It is supplied as a general laboratory diluent; the label states its composition, pH and storage conditions.',
    overviewEs: 'El agua bacteriostática es agua estéril y apirógena con alcohol bencílico al 0,9% como conservante, según la especificación USP. Se suministra como diluyente general de laboratorio; la etiqueta indica su composición, pH y condiciones de almacenamiento.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'USP specification'],
  },
  {
    slug: 'bac-water-10ml', name: 'Bacteriostatic Water', nameEs: 'Agua bacteriostática', cas: 'N/A', tag: 'Laboratory diluent · 10 ml',
    mg: '10 ml', from: 17, formula: 'Water + 0.9% benzyl alcohol', weight: 'N/A', pubchem: 'N/A',
    photo: 'assets/products/bac-water-10ml.jpg',
    video: 'assets/products/bac-water-10ml.mp4', videoPoster: 'assets/products/bac-water-10ml-video.jpg',
    sizes: [
      { label: 'Single vial', price: 17 },
      { label: 'Pack · 3 vials', price: 46.92, save: '8%' },
      { label: 'Pack · 5 vials', price: 72.25, save: '15%' },
      { label: 'Pack · 10 vials', price: 127.50, save: '25%' },
    ],
    overview: 'Bacteriostatic water is sterile, nonpyrogenic water with 0.9% benzyl alcohol added as a preservative, to USP specification. It is supplied as a general laboratory diluent; the label states its composition, pH and storage conditions. This is the 10 ml presentation.',
    overviewEs: 'El agua bacteriostática es agua estéril y apirógena con alcohol bencílico al 0,9% como conservante, según la especificación USP. Se suministra como diluyente general de laboratorio; la etiqueta indica su composición, pH y condiciones de almacenamiento. Es la presentación de 10 ml.',
    research: ['Sterile diluent', '0.9% benzyl alcohol', 'USP specification'],
  },
];


const FAQS = [
  { q: 'Are your products verified?', a: 'Yes. Every batch comes with a certificate of analysis (COA) from an independent lab, with HPLC and mass spectrometry testing. Your vial’s batch number can be checked at codexresearchlab.com/verify/, and the full COA is available on request, before you order if you want to see it first.' },
  { q: 'Where do you ship from and how long does it take?', a: 'Orders ship from local stock in each country. Panamá: $4 shipping, delivered in 1-2 hours in Panama City (interior cities like David, Chitré and Colón: next business day via Fergunson transport). United States: $20 shipping from our U.S. stock, delivered in 48-72 hours. Free shipping over $100 (Panamá) or $250 (U.S.). Always in sealed, protective packaging.' },
  { q: 'Are these products for human consumption?', a: 'No. All products are sold strictly for research and development purposes and are not intended for human or animal consumption.' },
  { q: 'Who can buy from Codex Research?', a: 'Adults 21 or older buying for laboratory research. At checkout you confirm that the order is for research use only and not for human or animal consumption. We do not sell for personal use, and we cancel any order that refers to human use, dosing or administration.' },
  { q: 'Do you ship internationally?', a: 'Message us on WhatsApp with your destination country and we’ll confirm coverage, timing and cost before you pay.' },
  { q: 'What payment methods do you accept?', a: 'Panamá: Yappy or crypto (USDC or USDT on Ethereum). United States: Zelle or crypto. Crypto is paid on our own checkout from your wallet. With Yappy or Zelle you place the order on the site and we send you the payment details (Yappy on WhatsApp, Zelle by email); the order ships once the payment is confirmed.' },
  { q: 'How should I store the products?', a: 'Lyophilized vials are stored cool and protected from light, and kept refrigerated (2-8 °C) once in solution. Every vial label shows its storage conditions.' },
];

// Mismo FAQ en español. Las dos listas tienen que decir lo mismo: el JSON-LD
// FAQPage de cada portada declara justo estas preguntas.
const FAQS_ES = [
  { q: '¿Sus productos están verificados?', a: 'Sí. Cada lote viene con un certificado de análisis (COA) de un laboratorio independiente, con pruebas de HPLC y espectrometría de masas. El número de lote de tu vial se puede comprobar en codexresearchlab.com/verify/, y el COA completo está disponible si lo pides, también antes de comprar.' },
  { q: '¿Desde dónde envían y cuánto tarda?', a: 'Los pedidos salen de stock local en cada país. Panamá: $4 de envío, entrega en 1-2 horas en Ciudad de Panamá (interior como David, Chitré y Colón: siguiente día hábil por transporte Fergunson). Estados Unidos: $20 de envío desde nuestro stock en EE.UU., entrega en 48-72 horas. Envío gratis sobre $100 (Panamá) o $250 (EE.UU.). Siempre en empaque sellado y protegido.' },
  { q: '¿Estos productos son para consumo humano?', a: 'No. Todos los productos se venden estrictamente para fines de investigación y desarrollo, y no están destinados al consumo humano ni animal.' },
  { q: '¿Quién puede comprar en Codex Research?', a: 'Mayores de 21 años que compran para investigación de laboratorio. Al finalizar la compra confirmas que el pedido es solo para uso en investigación y no para consumo humano ni animal. No vendemos para uso personal y cancelamos cualquier pedido que hable de uso humano, dosis o administración.' },
  { q: '¿Hacen envíos internacionales?', a: 'Escríbenos por WhatsApp con tu país de destino y te confirmamos cobertura, tiempo y costo antes de que pagues.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Panamá: Yappy o cripto (USDC o USDT en Ethereum). Estados Unidos: Zelle o cripto. La cripto se paga en nuestro propio checkout desde tu wallet. Con Yappy o Zelle haces el pedido en el sitio y te mandamos los datos de pago (Yappy por WhatsApp, Zelle por correo); el pedido sale en cuanto se confirma el pago.' },
  { q: '¿Cómo debo almacenar los productos?', a: 'Los viales liofilizados se guardan en un lugar fresco y protegidos de la luz, y refrigerados (2-8 °C) una vez en disolución. La etiqueta de cada vial indica sus condiciones de almacenamiento.' },
];


// Existencias reales POR BODEGA. Panamá y Estados Unidos son almacenes
// distintos: un vial en Panamá no sirve para despachar un pedido de Miami.
//
// GENERADO desde el panel de inventario (inventory.php → "Llevar estos
// números a la tienda"). No editar a mano: lo que aquí se escriba se pierde
// en la siguiente copia, y peor, dejaría de coincidir con lo que el servidor
// permite cobrar.
//
// Con menos de 10 se muestra "Only N left" y la cantidad no puede pasar de
// ahí. Con cero, el producto queda agotado para ese país.
const STOCK_BY_COUNTRY = {
  PA: { 'ahk-cu': 1, 'bac-water': 5, 'bac-water-10ml': 59, 'bpc-157': 0, 'ghk-cu': 21, 'ipamorelin': 11, 'mots-c': 13, 'nad-plus': 9, 'pt-141': 19, 'retatrutide': 5, 'tb-500': 17, 'tirzepatide': 0 },
  US: { 'ahk-cu': 0, 'bac-water': 140, 'bac-water-10ml': 0, 'bpc-157': 20, 'ghk-cu': 30, 'ipamorelin': 0, 'mots-c': 30, 'nad-plus': 0, 'pt-141': 0, 'retatrutide': 80, 'retatrutide-30mg': 0, 'tb-500': 0, 'tirzepatide': 0 },
};

// Lo que el inventario todavía no controla sigue como antes, con 25: un
// producto ausente de la tabla no debe quedar bloqueado por omisión.
const STOCK_DEFAULT = 25;

/* Las páginas de producto y los artículos son los MISMOS para los dos países
   (build-seo.js genera un solo HTML). Para ese marcado vale el mejor caso:
   algo con existencias en cualquier bodega está disponible. Quien decide de
   verdad es el servidor cuando se va a cobrar. */
STOCK_BY_COUNTRY.ANY = PRODUCTS.reduce((acc, p) => {
  const pa = STOCK_BY_COUNTRY.PA[p.slug], us = STOCK_BY_COUNTRY.US[p.slug];
  if (pa != null || us != null) acc[p.slug] = Math.max(pa || 0, us || 0);
  return acc;
}, {});

// El catálogo puede marcar un producto agotado a mano (outOfStock en el
// producto). Esa decisión manda siempre sobre el conteo.
PRODUCTS.forEach((p) => { p.catalogOut = !!p.outOfStock; });

/* Aplica las existencias de una bodega. Se llama al cargar y cada vez que el
   visitante cambia de país, desde country.js. Además de p.stock ajusta
   p.outOfStock, que es lo que ya respetan el catálogo, la ficha y el carrito:
   así un cero en la bodega bloquea la compra sin tocar cada vista. */
function applyStock(code) {
  const tabla = STOCK_BY_COUNTRY[code] || STOCK_BY_COUNTRY.ANY || {};
  PRODUCTS.forEach((p) => {
    const n = tabla[p.slug];
    p.stock = n != null ? n : STOCK_DEFAULT;
    p.outOfStock = p.catalogOut || p.stock === 0;
  });
}

/* Reemplaza la tabla de existencias con la que manda el servidor.
   La de arriba es una foto del día en que se publicó el sitio; esta es la de
   ahora. Solo entra si trae las dos bodegas: media tabla haría desaparecer
   productos que sí hay. El país lo vuelve a aplicar quien llama. */
function setStock(tabla) {
  if (!tabla || !tabla.PA || !tabla.US) return false;
  STOCK_BY_COUNTRY.PA = tabla.PA;
  STOCK_BY_COUNTRY.US = tabla.US;
  STOCK_BY_COUNTRY.ANY = PRODUCTS.reduce((acc, p) => {
    const pa = tabla.PA[p.slug], us = tabla.US[p.slug];
    if (pa != null || us != null) acc[p.slug] = Math.max(pa || 0, us || 0);
    return acc;
  }, {});
  return true;
}

// Base hasta que country.js diga cuál es el país: el mejor caso, para que una
// página que se pinta antes de resolver el país no marque nada agotado de más.
applyStock('ANY');

// ---------------------------------------------------------------------------
// REBAJA GENERAL DE LA TIENDA
// ---------------------------------------------------------------------------
// Para APAGAR la oferta: `active: false`. Los precios vuelven solos a los de
// lista, sin tener que tocar ningún producto.
//
// El descuento se aplica UNA sola vez, aquí: cada presentación guarda su precio
// de lista en `list` y `price` pasa a ser el precio rebajado. Todo lo demás
// (tarjetas, página de producto, carrito, checkout y el prices.json que usa el
// servidor para cotizar los pagos en cripto) sigue leyendo `price` sin
// enterarse de que hay oferta. Es importante que sea así: si el navegador y el
// servidor calcularan el descuento por separado, un centavo de diferencia
// tumbaría el pago en cripto.
// `until` es la fecha en que termina (inclusive). Solo se usa para el texto
// que ve el cliente: la oferta NO se apaga sola, hay que poner active en
// false, re-generar prices.json y volver a subirlo a Hostinger.
const SALE = { active: false, percent: 20, until: '2026-08-20', label: '20% OFF everything' };

const salePrice = (list) => Math.round(list * (100 - SALE.percent)) / 100;

if (SALE.active) {
  PRODUCTS.forEach((p) => {
    p.listFrom = p.from;
    p.from = salePrice(p.from);
    p.sizes.forEach((s) => { s.list = s.price; s.price = salePrice(s.price); });
  });
}

// Per-country config: shipping, delivery promise and payment methods.
// Both countries use USD, product prices are identical.
const COUNTRIES = {
  US: {
    code: 'US', label: 'United States', flag: '🇺🇸',
    shipping: { flat: 20, freeThreshold: 250 },
    eta: 'Delivery in 48-72 h', etaShort: '48-72 h',
    etaFigure: '48-72 h', etaFigureLabel: 'Delivery in the U.S.',
    payments: [
      { id: 'zelle', label: 'Zelle' },
      { id: 'crypto', label: 'Crypto · USDC or USDT (Ethereum)' },
    ],
  },
  PA: {
    code: 'PA', label: 'Panamá', flag: '🇵🇦',
    shipping: { flat: 4, freeThreshold: 100 },
    eta: 'Panama City: 1-2 h · Interior: next-day', etaShort: '1-2 h in Panama City',
    etaFigure: '1-2 h', etaFigureLabel: 'Delivery in Panama City',
    payments: [
      { id: 'yappy', label: 'Yappy' },
      { id: 'crypto', label: 'Crypto · USDC or USDT (Ethereum)' },
    ],
  },
};

/* Datos para pagar con Zelle (US) o Yappy (PA). Son pagos manuales: el pedido
   se registra en el sitio y se confirma a mano al ver el dinero. Si se rellenan,
   la confirmación del pedido los enseña; vacíos, dice que se mandan por
   WhatsApp (Yappy) o por correo (Zelle). No hay procesador de tarjeta desde el 2026-10-17 (Stripe bloqueó la
   cuenta). */
const MANUAL_PAY = {
  zelle: { to: '', name: '' },   // correo o teléfono de Zelle, y a nombre de quién
  yappy: { to: '', name: '' },   // número de Yappy (o @directorio), y a nombre de quién
};

const COUPONS = {
  // packs: false → el % sólo se aplica a viales sueltos (los packs ya llevan
  // su descuento; sin esto un pack de 10 + WELCOME10 quedaba en 32,5%).
  // Lo lee también el servidor: va en prices.json (quote-lib.php).
  WELCOME10: { type: 'percent', value: 10, label: '10% off', packs: false },
  FREESHIP: { type: 'freeship', label: 'Free shipping' },
};

// Lotes válidos (/verify/). Clave = número de lote. Valor = datos del producto
// (o null para un lote genérico/universal). Agrega o actualiza aquí.
/* Lotes reales en registro. Cada entrada admite además tres campos OPCIONALES
   copiados del certificado real: `purity` ('99.1%'), `date` ('Jul 10, 2026') y
   `lab` (nombre del laboratorio). La ficha los muestra solo si existen: sin
   ellos enseña la especificación de compra, nunca un resultado inventado. */
const BATCHES = {
  'CDX-2607-001': { product: 'Retatrutide', slug: 'retatrutide', mg: '10 mg' },
  'CDX-2607-002': { product: 'BPC-157',     slug: 'bpc-157',     mg: '10 mg' },
  'CDX-2607-003': { product: 'GHK-Cu',      slug: 'ghk-cu',      mg: '100 mg' },
  'CDX-2607-004': { product: 'AHK-Cu',      slug: 'ahk-cu',      mg: '50 mg' },
  'CDX-2607-005': { product: 'Tirzepatide', slug: 'tirzepatide', mg: '20 mg' },
  'CDX-2607-006': { product: 'MOTS-c',      slug: 'mots-c',      mg: '10 mg' },
  'CDX-2607-007': { product: 'Ipamorelin',  slug: 'ipamorelin',  mg: '10 mg' },
  'CDX-2607-008': { product: 'PT-141',      slug: 'pt-141',      mg: '10 mg' },
  'CDX-2607-009': { product: 'Retatrutide', slug: 'retatrutide', mg: '30 mg' },
  // Lote universal: aplica a todos los productos. El COA en cambio es por
  // compuesto, así que los resultados van por slug en `results` y la ficha solo
  // pinta los del producto que los tiene; los demás siguen con la especificación.
  'CDX-1017': {
    results: {
      retatrutide: {
        purity: '99.777%', content: '10.33 mg', date: 'Oct 2, 2026', lab: 'Janoshik',
        labKey: '9UIDR6QE68DG', coa: 'assets/coa/cdx-1017-retatrutide-10mg.webp',
      },
      tirzepatide: {
        purity: '99.660%', content: '19.10 mg', date: 'Nov 10, 2026', lab: 'Janoshik',
        labKey: 'BTPWYJX55835', coa: 'assets/coa/cdx-1017-tirzepatide-20mg.webp',
      },
      'tesamorelin-20mg': {
        purity: '97.851%', content: '20.15 mg', date: 'Nov 10, 2026', lab: 'Janoshik',
        labKey: 'DPLC1HX8HFRR', coa: 'assets/coa/cdx-1017-tesamorelin-20mg.webp',
      },
    },
  },
};

/* Lote vigente que muestran TODAS las fichas. Los CDX-2607-* de arriba quedan
   solo como registro para que /verify/ siga validando viales ya entregados.
   Vacío ('') = volver a mostrar el lote propio de cada producto. */
const CURRENT_BATCH = 'CDX-1017';

/* Lote en stock de un producto, para que la ficha muestre un número que el
   visitante puede comprobar en /verify/ sin escribirle a nadie. Empareja por
   concentración cuando hay más de uno (retatrutide tiene 10 y 30 mg). */
function batchFor(slug, mg) {
  if (CURRENT_BATCH) {
    const b = BATCHES[CURRENT_BATCH] || {};
    return Object.assign({ code: CURRENT_BATCH }, (b.results && b.results[slug]) || {});
  }
  const hits = Object.keys(BATCHES).filter((c) => BATCHES[c] && BATCHES[c].slug === slug);
  if (!hits.length) return null;
  const code = (mg && hits.find((c) => BATCHES[c].mg === mg)) || hits[0];
  return Object.assign({ code }, BATCHES[code]);
}

const SHIPPING_LINE_ES = 'Los pedidos salen de stock local en cada país. Panamá: $4 de envío, entrega en 1-2 horas en ' +
  'Ciudad de Panamá (interior como David, Chitré y Colón: siguiente día hábil por transporte Fergunson). ' +
  'Estados Unidos: $20 desde nuestro stock en EE.UU., 48-72 horas. Envío gratis sobre $100 (Panamá) o $250 (EE.UU.). ' +
  'Siempre en empaque sellado y protegido, con cada vial etiquetado con su compuesto, concentración y número de lote.';

/* Bloque «[Producto] en Panamá» de la ficha en español. Lo hornea build-seo.js y
   lo repinta product.js al hidratar: un solo texto para los dos, o Google vería
   uno distinto en el HTML crudo y en la página renderizada. Solo datos que ya
   están en este archivo (envío, pago, lote), nada que no se pueda comprobar. */
const nameEs = (p) => p.nameEs || p.name;
// La otra grafía con la que también se busca el compuesto («ipamorelin» además de
// «ipamorelina»). `altEs` la fija a mano cuando hay más de una: los GLP se buscan en
// Panamá por el compuesto («tirzepatida», «retatrutide») y la tienda los vende como
// GLP2-T / GLP3-R; nombrarlos en la ficha ES lo decidió el dueño el 2026-10-18.
const altNamesEs = (p) => p.altEs || (p.nameEs && p.nameEs !== p.name && !/^bac-water/.test(p.slug) ? [p.name] : []);
function panamaBlockEs(p) {
  const n = nameEs(p);
  const from = Math.min(...p.sizes.map((z) => z.price)).toFixed(2);
  const water = /^bac-water/.test(p.slug);
  const batch = !water && batchFor(p.slug, p.mg);
  return `<h2>Entrega y pago en Panamá</h2>
<p>Los pedidos de ${n} ${p.mg} en Panamá salen de nuestro inventario local. En Ciudad de Panamá
la entrega tarda de 1 a 2 horas; en el interior (David, Chitré, Colón y otras ciudades), llega
el siguiente día hábil por transporte Fergunson. El envío cuesta $4 y es gratis en pedidos sobre
$100. El precio es el mismo en todo el país, desde $${from} USD, y se paga con Yappy o con
cripto.</p>
<p>${batch ? `Cada vial lleva impreso su número de lote (el vigente es ${batch.code}) y se puede
comprobar en la <a href="es/verify/">página de verificación</a>, con el certificado de análisis
de un laboratorio independiente disponible antes de comprar. ` : ''}Solo para uso de
investigación en laboratorio. Más detalles en <a href="es/comprar-peptidos-panama/">cómo comprar
péptidos de investigación en Panamá</a>.</p>`;
}

/* EE. UU. en las fichas en inglés (SEO EE. UU., 2026-11-04). Tres estados según la
   bodega de EE. UU.: 'us' si hay stock declarado allá, 'pa' si la tabla dice 0 (solo
   sale de Panamá) y '' si el producto no está en la tabla (no se sabe: se deja el texto
   de siempre). Los GLP-1 no entran: la Fase 0 del análisis de EE. UU. (26-sep) los saca
   de cualquier empuje allí, y su ficha se queda como estaba. */
const US_SEO_SKIP = /^(retatrutide|tirzepatide)/;
function usShipping(p) {
  if (US_SEO_SKIP.test(p.slug)) return '';
  const n = STOCK_BY_COUNTRY.US && STOCK_BY_COUNTRY.US[p.slug];
  if (n == null) return '';
  return n > 0 ? 'us' : 'pa';
}

/* Bloque «Shipping and payment in the U.S.»: solo productos con stock en EE. UU. y sin
   el agua (la Fase 0 la saca del empuje en EE. UU.). Lo hornea build-seo.js y lo
   repinta product.js con el stock en vivo, así que desaparece si la bodega se vacía. */
function usBlockEn(p) {
  if (usShipping(p) !== 'us' || /^bac-water/.test(p.slug)) return '';
  const from = Math.min(...p.sizes.map((z) => z.price)).toFixed(2);
  const s = COUNTRIES.US.shipping;
  const batch = batchFor(p.slug, p.mg);
  return `<h2>Shipping and payment in the U.S.</h2>
<p>U.S. orders of ${p.name} ${p.mg} ship from our stock inside the United States and arrive
in 48-72 hours. Shipping is $${s.flat} and free on orders over $${s.freeThreshold}. The price is
the same as in Panama, from $${from} USD. You can pay by Zelle (we email you the payment details
after you order, and the order ships once the payment is confirmed) or with USDC or USDT.</p>
<p>${batch ? `Each vial is printed with its batch number (the current one is ${batch.code}), which you
can look up on the <a href="verify/">verification page</a> to read the independent lab certificate
before you buy. ` : ''}For laboratory research use only. More in <a href="article/buy-research-peptides-usa/">how
to buy research peptides in the U.S.</a></p>`;
}

/* Ficha ES ampliada (E1 de estrategia-posicionamiento-panama-2026-10-26.md). Solo en
   las fichas principales que aparecen aquí: las variantes de otra concentración no la
   llevan para no duplicar texto entre URLs. Igual que panamaBlockEs, la hornea
   build-seo.js y la repinta product.js. Todo dato sale de PubChem o de la referencia
   citada (verificado el 2026-10-26); masas en g/mol. Nada de efectos, usos ni dosis. */
const FICHA_ES = {
  'ghk-cu': {
    rows: [
      ['Secuencia', 'Gli-His-Lis (GHK) con cobre(II)'],
      ['Longitud', 'Tripéptido, 3 aminoácidos'],
      ['Otros nombres', 'Tripéptido de cobre-1, prezatide copper'],
      ['Tripéptido sin cobre', 'C14H24N6O4, 340,38 g/mol (PubChem CID 73587)'],
      ['Forma', 'Polvo liofilizado de color azul, en vial sellado'],
    ],
    coa: 'En GHK-Cu la espectrometría de masas puede informar el tripéptido solo (340,4 g/mol; ion ' +
      '[M+H]+ cerca de 341,2) o el complejo con cobre (cerca de 402-404 según cómo se cuente la carga). ' +
      'Cualquiera de las dos es válida si el certificado dice cuál reporta. El color también se ' +
      'comprueba a simple vista: el complejo con cobre es azul, y un polvo blanco en un vial de GHK-Cu ' +
      'es motivo para pedir el certificado antes de abrirlo.',
    lit: 'El tripéptido GHK se aisló del suero humano en 1973, en el trabajo de Loren Pickart y Melvin ' +
      'Thaler, como un factor que prolongaba la supervivencia de células hepáticas normales en cultivo. ' +
      'Ese mismo año se publicó su síntesis. Desde entonces se estudia sobre todo unido al cobre(II), y las ' +
      'dos revisiones más citadas del complejo, de 2015 y 2018, reúnen el trabajo en modelos celulares y ' +
      'en datos de expresión génica.',
    refs: [
      ['Pickart L, Thaler MM. Tripeptide in human serum which prolongs survival of normal liver cells and stimulates growth in neoplastic liver. Nat New Biol. 1973;243(124):85-7.', 'https://pubmed.ncbi.nlm.nih.gov/4349963/'],
      ['Pickart L, Vasquez-Soltero JM, Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. Biomed Res Int. 2015.', 'https://doi.org/10.1155/2015/648108'],
      ['Pickart L, Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. Int J Mol Sci. 2018;19(7):1987.', 'https://doi.org/10.3390/ijms19071987'],
    ],
    faq: [
      { q: '¿GHK-Cu y AHK-Cu son lo mismo?',
        a: 'No. GHK-Cu es Gli-His-Lis con cobre (tripéptido de cobre-1). AHK-Cu cambia la glicina por ' +
           'alanina (Ala-His-Lis con cobre, tripéptido de cobre-3). Son compuestos distintos y cada uno tiene ' +
           'su ficha y su lote en el catálogo.' },
      { q: '¿Qué diferencia hay entre GHK-Cu de 50 mg y de 100 mg?',
        a: 'Solo la cantidad por vial. Es el mismo compuesto, con la misma fórmula y el mismo análisis por lote.' },
      { q: '¿De qué color es el GHK-Cu?',
        a: 'Azul. El color viene del cobre unido al tripéptido. Un polvo blanco en un vial de GHK-Cu es ' +
           'motivo para pedir el certificado del lote antes de abrirlo.' },
    ],
  },
  'ipamorelin': {
    rows: [
      ['Secuencia', 'Aib-His-D-2-Nal-D-Phe-Lys-NH2'],
      ['Longitud', 'Pentapéptido, C-terminal amidado'],
      ['Aminoácidos no estándar', 'Aib (ácido α-aminoisobutírico) y D-2-naftilalanina'],
      ['Masa monoisotópica', '711,39'],
      ['Código de desarrollo', 'NNC 26-0161'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En ipamorelina la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 712,4, que es la ' +
      'masa monoisotópica (711,39) más un protón. Como la secuencia lleva dos aminoácidos D, una pureza ' +
      'alta por HPLC importa más de lo normal: los isómeros con la quiralidad equivocada tienen la misma ' +
      'masa y solo los separa la cromatografía.',
    lit: 'La ipamorelina se desarrolló en Novo Nordisk y la describieron Raun y colaboradores en 1998 como el ' +
      'primer secretagogo de hormona de crecimiento selectivo. Salió de una serie de compuestos derivados de ' +
      'GHRP-1 a los que se quitó el dipéptido central Ala-Trp. En ese trabajo se caracterizó en células de ' +
      'hipófisis de rata y en cerdo, y su selectividad se definió porque, a diferencia de GHRP-6 y GHRP-2, ' +
      'no elevó ACTH ni cortisol en los modelos estudiados.',
    refs: [
      ['Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-61.', 'https://doi.org/10.1530/eje.0.1390552'],
    ],
    faq: [
      { q: '¿Qué secuencia tiene la ipamorelina?',
        a: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2: cinco aminoácidos, dos de ellos en forma D, con el extremo ' +
           'C-terminal amidado. Su fórmula es C38H49N9O5 y su peso molecular, 711,9 g/mol.' },
      { q: '¿Ipamorelina es lo mismo que GHRP-6?',
        a: 'No. Las dos actúan sobre el receptor de grelina, pero la ipamorelina es un pentapéptido que salió ' +
           'de una serie derivada de GHRP-1, y GHRP-6 es un hexapéptido. En la publicación original se ' +
           'distinguen por su selectividad en los modelos estudiados.' },
    ],
  },
  'tesamorelin': {
    rows: [
      ['Secuencia', 'Hexenoil-YADAIFTNSYRKVLGQLSARKLLQDIMSRQQGESNQERGARARL-NH2'],
      ['Longitud', '44 aminoácidos (GHRH humana 1-44), C-terminal amidado'],
      ['Modificación', 'Grupo trans-3-hexenoilo unido a la tirosina 1'],
      ['Masa monoisotópica', '5132,72'],
      ['Código de desarrollo', 'TH9507'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'Tesamorelina tiene un peso molecular de más de 5.000 g/mol, así que la espectrometría de masas no da un solo ion: da ' +
      'iones con varias cargas que se convierten en una masa reconstruida, cerca de 5.133 (monoisotópica) ' +
      'o 5.136 (promedio). El certificado debe decir cuál de las dos reporta. En un péptido de 44 ' +
      'aminoácidos las impurezas típicas son secuencias con un aminoácido de menos, que pesan poco menos ' +
      'y por eso hay que mirar la pureza por HPLC además de la masa.',
    lit: 'Tesamorelina se desarrolló en Theratechnologies con el código TH9507. Su estudio no clínico de ' +
      'referencia, publicado en 2007, la describe como la GHRH humana 1-44 con un grupo trans-3-hexenoilo ' +
      'en la tirosina 1. Esa modificación la hace resistente a la enzima dipeptidil peptidasa IV y frenó su ' +
      'degradación en plasma in vitro frente a la GHRH natural. El mismo trabajo la caracterizó en rata, ' +
      'perro y cerdo.',
    refs: [
      ['Ferdinandi ES, Brazeau P, High K, et al. Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue. Basic Clin Pharmacol Toxicol. 2007;100(1):49-58.', 'https://doi.org/10.1111/j.1742-7843.2007.00008.x'],
    ],
    faq: [
      { q: '¿Qué diferencia hay entre tesamorelina y la GHRH natural?',
        a: 'La secuencia es la misma, los 44 aminoácidos de la GHRH humana. Tesamorelina añade un grupo ' +
           'trans-3-hexenoilo en la tirosina 1, que en el estudio de referencia la hizo resistente a la ' +
           'dipeptidil peptidasa IV.' },
      { q: '¿Tesamorelina y CJC-1295 sin DAC son lo mismo?',
        a: 'No. Las dos son análogos de la GHRH, pero tesamorelina conserva los 44 aminoácidos y añade un ' +
           'grupo en la tirosina 1, y CJC-1295 sin DAC usa solo los primeros 29 con cuatro sustituciones. ' +
           'Cada una tiene su ficha en el catálogo.' },
    ],
  },
  // Los 13 compuestos restantes (2026-11-01). Fórmulas y masas de PubChem o calculadas desde la
  // secuencia; referencias comprobadas en Crossref/PubMed. Fuera las de título con promesa clínica.
  'tirzepatide': {
    rows: [
      ['Secuencia', 'Y-Aib-EGTFTSDYSI-Aib-LDKIAQ-K*-AFVQWLIAGGPSSGAPPPS-NH2 (K* = Lys20 acilada)'],
      ['Longitud', '39 aminoácidos, C-terminal amidado'],
      ['Modificaciones', 'Aib (ácido α-aminoisobutírico) en las posiciones 2 y 13; Lys20 unida a un ácido eicosanodioico (C20) a través de γ-Glu y dos unidades AEEA (ácido 8-amino-3,6-dioxaoctanoico)'],
      ['Masa monoisotópica', '4810,52'],
      ['Código de desarrollo', 'LY3298176'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'Tirzepatida pesa unos 4.813 g/mol, así que la espectrometría de masas da iones con varias cargas ' +
      '(por ejemplo [M+3H]3+ cerca de 1.605 y [M+4H]4+ cerca de 1.204) que se convierten en una masa ' +
      'reconstruida, cerca de 4.810,5 (monoisotópica) o 4.813,5 (promedio). El certificado debe decir cuál ' +
      'reporta. Una impureza propia de este compuesto es el péptido sin la cadena lipídica o con ella ' +
      'incompleta: pesa unos 743 menos si le falta entera, y por eso conviene que la pureza por HPLC venga ' +
      'junto a la masa.',
    lit: 'Tirzepatida se desarrolló en Eli Lilly con el código LY3298176, como un péptido modificado con ' +
      'un ácido graso que activa los receptores de GIP y de GLP-1. En 2020, Willard y colaboradores ' +
      'estudiaron su señalización in vitro, en líneas celulares que expresan esos receptores: en el receptor de ' +
      'GIP se comportó como la GIP natural, y en el de GLP-1 favoreció la producción de AMPc frente al ' +
      'reclutamiento de β-arrestina.',
    refs: [
      ['Willard FS, Douros JD, Gabe MB, et al. Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight. 2020;5(17):e140532.', 'https://doi.org/10.1172/jci.insight.140532'],
    ],
    faq: [
      { q: '¿GLP2-T y tirzepatida son lo mismo?',
        a: 'Sí. GLP2-T es el nombre con que el catálogo vende la tirzepatida (código de desarrollo LY3298176). ' +
           'Su fórmula es C225H348N48O68 y su peso molecular, unos 4.813 g/mol.' },
      { q: '¿Qué diferencia hay entre tirzepatida y retatrutide?',
        a: 'Las dos son péptidos de 39 aminoácidos con un ácido graso C20, pero la tirzepatida activa dos ' +
           'receptores (GIP y GLP-1) y retatrutide tres (GIP, GLP-1 y glucagón). La secuencia cambia en varias ' +
           'posiciones, retatrutide lleva una unidad AEEA en vez de dos y su masa es menor, unos 4.731 g/mol. ' +
           'Cada uno tiene su ficha y su lote en el catálogo.' },
    ],
  },
  'retatrutide': {
    rows: [
      ['Secuencia', 'Y-Aib-QGTFTSDYSI-αMeL-LDK-K*-AQ-Aib-AFIEYLLEGGPSSGAPPPS-NH2 (K* = Lys17 acilada)'],
      ['Longitud', '39 aminoácidos, C-terminal amidado'],
      ['Modificaciones', 'Aib en las posiciones 2 y 20, α-metil-L-leucina en la 13; Lys17 unida a un ácido eicosanodioico (C20) a través de γ-Glu y una unidad AEEA'],
      ['Masa monoisotópica', '4728,47'],
      ['Código de desarrollo', 'LY3437943'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'Retatrutide pesa unos 4.731 g/mol: la espectrometría de masas da iones con varias cargas ' +
      '(por ejemplo [M+3H]3+ cerca de 1.578 y [M+4H]4+ cerca de 1.184) y una masa reconstruida cerca de ' +
      '4.728,5 (monoisotópica) o 4.731,4 (promedio). Si un certificado reporta una masa cercana a 4.813, ' +
      'esa es la de la tirzepatida, no la de retatrutide. Las impurezas típicas son secuencias con un ' +
      'aminoácido de menos y el péptido sin la cadena lipídica, que pesa unos 598 menos, así que la pureza ' +
      'por HPLC importa tanto como la masa.',
    // Sin `lit` ni `refs` a propósito: la única referencia verificada (Coskun 2022) lleva
    // «weight loss» en el título, y en una ficha que vende GLP3-R eso insinúa uso humano.
    lit: '',
    refs: [],
    faq: [
      { q: '¿GLP3-R y retatrutide son lo mismo?',
        a: 'Sí. GLP3-R es el nombre con que el catálogo vende retatrutide (código de desarrollo LY3437943). ' +
           'Su fórmula es C221H342N46O68 y su peso molecular, unos 4.731 g/mol.' },
      { q: '¿Qué secuencia tiene retatrutide?',
        a: 'Y-Aib-QGTFTSDYSI-αMeL-LDKKAQ-Aib-AFIEYLLEGGPSSGAPPPS-NH2: 39 aminoácidos, tres de ellos no ' +
           'estándar (dos Aib y una α-metil-leucina), con la lisina 17 unida a un ácido graso C20 y el extremo ' +
           'C-terminal amidado.' },
      { q: '¿Qué diferencia hay entre GLP3-R de 10, 20 y 30 mg?',
        a: 'Solo la cantidad por vial. Es el mismo compuesto, con la misma fórmula y el mismo análisis por lote.' },
    ],
  },
  'cjc-1295-no-dac': {
    rows: [
      ['Secuencia', 'Y-D-Ala-DAIFTQSYRKVLAQLSARKLLQDILSR-NH2'],
      ['Longitud', '29 aminoácidos (GRF humano 1-29), C-terminal amidado'],
      ['Sustituciones', 'D-Ala2, Gln8, Ala15 y Leu27 respecto al GRF natural (Ala2, Asn8, Gly15, Met27)'],
      ['Masa monoisotópica', '3365,89'],
      ['Otros nombres', 'Mod GRF 1-29, GRF(1-29) tetrasustituido'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En CJC-1295 sin DAC la espectrometría de masas suele mostrar iones con varias cargas: [M+3H]3+ ' +
      'cerca de 1.123,0 y [M+4H]4+ cerca de 842,5, que corresponden a una masa monoisotópica de 3.365,89 ' +
      '(3.367,9 g/mol en promedio). Si la masa sale cerca de 3.647, el vial contiene la versión con DAC, ' +
      'que lleva una lisina extra con un grupo maleimida. La D-alanina de la posición 2 tiene la misma masa ' +
      'que la L-alanina, así que solo la cromatografía detecta ese error de quiralidad.',
    lit: 'El nombre CJC-1295 viene de ConjuChem, en Montreal. En 2005, Jetté y colaboradores describieron ' +
      'CJC-1295 como una forma con cuatro sustituciones del GRF humano 1-29 a la que se añade, en el extremo ' +
      'C-terminal, una lisina con un grupo maleimidopropionamida que se une a la albúmina. CJC-1295 sin DAC ' +
      'es ese mismo péptido de 29 aminoácidos sin la lisina añadida. En ese trabajo los conjugados se ' +
      'estudiaron frente a la dipeptidil peptidasa IV in vitro, en células de hipófisis anterior de rata en ' +
      'cultivo y en rata.',
    refs: [
      ['Jetté L, Léger R, Thibaudeau K, et al. Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats: identification of CJC-1295 as a long-lasting GRF analog. Endocrinology. 2005;146(7):3052-8.', 'https://doi.org/10.1210/en.2004-1286'],
    ],
    faq: [
      { q: '¿CJC-1295 sin DAC y con DAC son lo mismo?',
        a: 'No. Comparten los 29 aminoácidos con cuatro sustituciones, pero la versión con DAC añade una lisina ' +
           'con un grupo maleimidopropionamida en el extremo C-terminal. Por eso su fórmula (C165H269N47O46) y ' +
           'su peso, unos 3.647 g/mol, son mayores que los de la versión sin DAC (C152H252N44O42, 3.367,9 g/mol).' },
      { q: '¿CJC-1295 sin DAC y Mod GRF 1-29 son lo mismo?',
        a: 'Sí. Son dos nombres del mismo péptido: los primeros 29 aminoácidos del GRF humano con D-Ala2, ' +
           'Gln8, Ala15 y Leu27, y el extremo C-terminal amidado.' },
    ],
  },
  'igf-1-lr3': {
    rows: [
      ['Secuencia', 'MFPAMPLSSLFVN-GPRTLCGAELVDALQFVCGDRGFYFNKPTGYGSSSRRAPQTGIVDECCFRSCDLRRLEMYCAPLKPAKSA'],
      ['Longitud', '83 aminoácidos: extensión N-terminal de 13 más los 70 de la IGF-1 humana'],
      ['Modificaciones', 'Arg en lugar de Glu en la posición 3 de la IGF-1; tres puentes disulfuro (Cys6-Cys48, Cys18-Cys61 y Cys47-Cys52 en la numeración de la IGF-1)'],
      ['Masa monoisotópica', '9105,35'],
      ['Otros nombres', 'Long R3 IGF-I, Long [Arg3]-IGF-I'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'IGF-1 LR3 es una proteína de unos 9.111 g/mol (C400H619N111O115S9 con los tres puentes disulfuro ' +
      'cerrados), así que la espectrometría de masas da iones con muchas cargas y una masa reconstruida cerca ' +
      'de 9.111,5 en promedio. Una masa 6 unidades mayor indica que los puentes disulfuro no están cerrados. ' +
      'Tiene tres metioninas, y la oxidación de una de ellas suma 16. Las proteínas de este tamaño se suelen producir ' +
      'en bacterias y plegar después, así que el certificado debería mostrar también la pureza por HPLC, que separa las formas mal plegadas ' +
      'de la misma masa.',
    lit: 'IGF-1 LR3 salió del trabajo de Francis y colaboradores en el CSIRO de Adelaida (Australia), publicado ' +
      'en 1992. Expresaron en Escherichia coli análogos de la IGF-1 unidos a los primeros 11 aminoácidos de la ' +
      'hormona de crecimiento porcina con metionina inicial, seguidos de Val-Asn. Uno de ellos, Long [Arg3]-IGF-I, ' +
      'cambia el Glu3 de la IGF-1 humana por arginina. En mioblastos L6 de rata, estos análogos fueron más ' +
      'potentes que la IGF-1 natural para estimular la síntesis de proteínas y de ADN.',
    refs: [
      ['Francis GL, Ross M, Ballard FJ, et al. Novel recombinant fusion protein analogues of insulin-like growth factor (IGF)-I indicate the relative importance of IGF-binding protein and receptor binding for enhanced biological potency. J Mol Endocrinol. 1992;8(3):213-23.', 'https://doi.org/10.1677/jme.0.0080213'],
    ],
    faq: [
      { q: '¿IGF-1 LR3 e IGF-1 son lo mismo?',
        a: 'No. IGF-1 LR3 conserva los 70 aminoácidos de la IGF-1 humana con un cambio, arginina en lugar de ' +
           'ácido glutámico en la posición 3, y añade una extensión de 13 aminoácidos en el extremo N-terminal. ' +
           'Pesa unos 9.111 g/mol frente a unos 7.649 de la IGF-1.' },
      { q: '¿Qué significa «LR3» en IGF-1 LR3?',
        a: 'La L viene de «Long», por la extensión N-terminal de 13 aminoácidos, y R3 indica la arginina en la ' +
           'posición 3 de la secuencia de la IGF-1.' },
    ],
  },
  'bpc-157': {
    rows: [
      ['Secuencia', 'Gli-Glu-Pro-Pro-Pro-Gli-Lis-Pro-Ala-Asp-Asp-Ala-Gli-Leu-Val (GEPPPGKPADDAGLV), extremos libres'],
      ['Longitud', 'Pentadecapéptido, 15 aminoácidos'],
      ['Fórmula', 'C62H98N16O22, 1419,5 g/mol (PubChem CID 9941957)'],
      ['Masa monoisotópica', '1418,70'],
      ['Código de desarrollo / otros nombres', 'PL 14736, PLD-116, bepecina'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En BPC-157 la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 1419,7, o el ion con ' +
      'dos cargas [M+2H]2+ cerca de 710,4. La secuencia lleva tres prolinas seguidas, y en la síntesis la ' +
      'impureza típica de ese tramo es la secuencia con una prolina de menos, unos 97 de masa por debajo. ' +
      'Si el vial se vende como sal (acetato o arginato), el certificado debe decirlo, porque el contraión ' +
      'cambia el peso del polvo pero no la masa del péptido que mide el espectrómetro.',
    lit: 'BPC-157 lo describió en 1993 el grupo de Predrag Sikirić, del Departamento de Farmacología de la ' +
      'Facultad de Medicina de la Universidad de Zagreb. Partieron de una proteína del jugo gástrico de unos ' +
      '40.000 de masa a la que llamaron BPC, y caracterizaron un fragmento de 15 aminoácidos de esa ' +
      'proteína, BPC 157. Ese trabajo y los que siguieron del mismo grupo se hicieron en modelos animales de ' +
      'lesión de tejidos, en varias especies, con la rata como modelo más usado.',
    refs: [
      ['Sikirić P, Petek M, Rucman R, Seiwerth S, Grabarević Z, Rotkvić I, et al. A new gastric juice peptide, BPC. An overview of the stomach-stress-organoprotection hypothesis and beneficial effects of BPC. J Physiol Paris. 1993;87(5):313-27.', 'https://doi.org/10.1016/0928-4257(93)90038-u'],
      ['Sikiric P, Rucman R, Turkovic B, Sever M, Klicek R, Radic B, et al. Novel Cytoprotective Mediator, Stable Gastric Pentadecapeptide BPC 157. Vascular Recruitment and Gastrointestinal Tract Healing. Curr Pharm Des. 2018;24(18):1990-2001.', 'https://doi.org/10.2174/1381612824666180608101119'],
    ],
    faq: [
      { q: '¿Qué secuencia tiene BPC-157?',
        a: 'GEPPPGKPADDAGLV: quince aminoácidos estándar, todos en forma L, con los extremos libres. Su fórmula ' +
           'es C62H98N16O22 y su peso molecular, 1419,5 g/mol.' },
      { q: '¿BPC-157 y BPC son lo mismo?',
        a: 'No. BPC es la proteína del jugo gástrico, de unos 40.000 de masa, que describió el grupo de Zagreb. ' +
           'BPC-157 es un fragmento sintético de 15 aminoácidos de esa proteína, y es el que se vende y se analiza.' },
    ],
  },
  'tb-500': {
    rows: [
      ['Secuencia', 'Ac-Leu-Lis-Lis-Thr-Glu-Thr-Gln-OH (Ac-LKKTETQ), N-terminal acetilado'],
      ['Longitud', 'Heptapéptido, residuos 17-23 de la timosina β4'],
      ['Modificación', 'Grupo acetilo en el extremo N'],
      ['Masa monoisotópica', '888,49'],
      ['Otros nombres', 'TB500, fragmento 17-23 de la timosina β4 acetilado (PubChem CID 62707662)'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En TB-500 la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 889,5, o [M+2H]2+ cerca ' +
      'de 445,3. Un pico cerca de 847,5 indica el heptapéptido sin acetilar, 42 de masa por debajo: la ' +
      'acetilación no se ve en la secuencia y solo la confirma la masa. Si el certificado da una masa cerca ' +
      'de 4.963, el vial contiene la timosina β4 completa y no el fragmento, que es otro compuesto.',
    lit: 'La timosina β4 se secuenció en 1981 en el laboratorio de Allan Goldstein, a partir de timo bovino. En ' +
      '1991 Safer, Elzinga y Nachmias mostraron que es la misma molécula que el péptido Fx de las plaquetas, ' +
      'que forma un complejo 1:1 con la actina monomérica e impide su polimerización. En 2003 Philp, Kleinman ' +
      'y colaboradores, de los NIH, vieron que un motivo de siete aminoácidos de unión a actina bastaba para ' +
      'la migración de células endoteliales en cultivo y la formación de brotes en aorta de pollo. TB-500 es ' +
      'ese motivo, LKKTETQ, con el extremo N acetilado.',
    refs: [
      ['Low TL, Hu SK, Goldstein AL. Complete amino acid sequence of bovine thymosin beta 4: a thymic hormone that induces terminal deoxynucleotidyl transferase activity in thymocyte populations. Proc Natl Acad Sci U S A. 1981;78(2):1162-6.', 'https://doi.org/10.1073/pnas.78.2.1162'],
      ['Safer D, Elzinga M, Nachmias VT. Thymosin beta 4 and Fx, an actin-sequestering peptide, are indistinguishable. J Biol Chem. 1991;266(7):4029-32.', 'https://pubmed.ncbi.nlm.nih.gov/1999398/'],
      ['Philp D, Huff T, Gho YS, Hannappel E, Kleinman HK. The actin binding site on thymosin beta4 promotes angiogenesis. FASEB J. 2003;17(14):2103-5.', 'https://doi.org/10.1096/fj.03-0121fje'],
    ],
    faq: [
      { q: '¿TB-500 y timosina beta-4 son lo mismo?',
        a: 'No. La timosina β4 es una proteína de 43 aminoácidos, acetilada en el extremo N, de fórmula ' +
           'C212H350N56O78S y unos 4.963 g/mol. TB-500 es el fragmento de siete aminoácidos Ac-LKKTETQ, de ' +
           'fórmula C38H68N10O14 y unos 889 g/mol. La masa del certificado dice cuál de los dos contiene el vial.' },
      { q: '¿Qué secuencia tiene TB-500?',
        a: 'Ac-Leu-Lis-Lis-Thr-Glu-Thr-Gln-OH: siete aminoácidos, los residuos 17 a 23 de la timosina β4, con un ' +
           'grupo acetilo en el extremo N. Sin ese acetilo la masa baja 42.' },
    ],
  },
  'pt-141': {
    rows: [
      ['Secuencia', 'Ac-Nle-ciclo[Asp-His-D-Phe-Arg-Trp-Lis]-OH'],
      ['Longitud', 'Heptapéptido cíclico, C-terminal en ácido libre'],
      ['Aminoácidos no estándar', 'Norleucina (Nle) y D-fenilalanina'],
      ['Ciclación', 'Puente lactama entre la cadena lateral del Asp 2 y la de la Lis 7 (anillo de 23 átomos)'],
      ['Masa monoisotópica', '1024,52'],
      ['Otros nombres', 'Bremelanotida (PubChem CID 9941379)'],
    ],
    coa: 'En PT-141 la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 1025,5, o [M+2H]2+ cerca ' +
      'de 513,3. Un pico unos 18 por encima, cerca de 1043,5, es el heptapéptido lineal que no llegó a ' +
      'ciclarse. Melanotan II tiene el mismo anillo pero termina en amida y pesa casi 1 menos (C50H69N15O9, ' +
      'ion [M+H]+ cerca de 1024,5), así que la masa solo los separa si el certificado la da con decimales; ' +
      'la pureza por HPLC tiene que cubrir esa posibilidad.',
    lit: 'El anillo de PT-141 viene del trabajo de Fahad Al-Obeidi, Mac Hadley y Victor Hruby en la Universidad ' +
      'de Arizona, publicado en 1989. Diseñaron con dinámica molecular una serie de fragmentos cíclicos de la ' +
      'α-melanotropina cerrados por un puente lactama entre Asp y Lis, y los ensayaron en piel de rana y de ' +
      'lagarto. El de 23 átomos fue el más potente de la serie. Uno de esos compuestos, con el extremo C ' +
      'amidado, es melanotan II; PT-141 es la misma estructura con el extremo C en ácido libre.',
    refs: [
      ['Al-Obeidi F, Castrucci AM, Hadley ME, Hruby VJ. Potent and prolonged acting cyclic lactam analogues of alpha-melanotropin: design based on molecular dynamics. J Med Chem. 1989;32(12):2555-61.', 'https://doi.org/10.1021/jm00132a010'],
    ],
    faq: [
      { q: '¿PT-141 y melanotan II son lo mismo?',
        a: 'No. Comparten el anillo Ac-Nle-ciclo[Asp-His-D-Phe-Arg-Trp-Lis], pero melanotan II termina en ' +
           'amida (C50H69N15O9, 1024,2 g/mol) y PT-141 en ácido libre (C50H68N14O10, 1025,2 g/mol). Son ' +
           'compuestos distintos.' },
      { q: '¿Qué secuencia tiene PT-141?',
        a: 'Ac-Nle-ciclo[Asp-His-D-Phe-Arg-Trp-Lis]-OH: siete aminoácidos, uno de ellos norleucina y otro en ' +
           'forma D, con un puente lactama entre el Asp y la Lis que cierra el anillo.' },
    ],
  },
  'kisspeptin': {
    rows: [
      ['Secuencia', 'Tyr-Asn-Trp-Asn-Ser-Phe-Gli-Leu-Arg-Phe-NH2 (YNWNSFGLRF-NH2)'],
      ['Longitud', 'Decapéptido, C-terminal amidado'],
      ['Origen de la secuencia', 'Residuos 45-54 de la kisspeptina-54 humana (metastina)'],
      ['Masa monoisotópica', '1301,63'],
      ['Otros nombres', 'KP-10, metastina 45-54 (PubChem CID 25240297)'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En kisspeptina-10 la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 1302,6, o ' +
      '[M+2H]2+ cerca de 651,8. El extremo C amidado (el motivo RF-amida) es parte de la identidad: la ' +
      'versión en ácido libre pesa casi 1 más y la masa solo la distingue si se da con decimales, así que el ' +
      'certificado debe acompañarla de la pureza por HPLC.',
    lit: 'El gen KiSS-1 lo describieron en 1996 Lee, Welch y colaboradores como un gen supresor de metástasis ' +
      'en células de melanoma. En 2001 dos grupos identificaron sus productos como ligandos del receptor ' +
      'huérfano GPR54: el de Ohtaki, en Takeda, aisló de placenta humana un péptido de 54 aminoácidos con el ' +
      'extremo C amidado al que llamó metastina, y el de Kotani y Parmentier, en Bruselas, aisló formas de 54, ' +
      '14 y 13 aminoácidos con el mismo extremo RF-amida y las llamó kisspeptinas. Las caracterizaron en ' +
      'células CHO que expresaban el receptor y en rata. La kisspeptina-10 es el tramo C-terminal de 10 ' +
      'aminoácidos que comparten todas esas formas.',
    refs: [
      ['Lee JH, Miele ME, Hicks DJ, Phillips KK, Trent JM, Weissman BE, et al. KiSS-1, a novel human malignant melanoma metastasis-suppressor gene. J Natl Cancer Inst. 1996;88(23):1731-7.', 'https://doi.org/10.1093/jnci/88.23.1731'],
      ['Ohtaki T, Shintani Y, Honda S, Matsumoto H, Hori A, Kanehashi K, et al. Metastasis suppressor gene KiSS-1 encodes peptide ligand of a G-protein-coupled receptor. Nature. 2001;411(6837):613-7.', 'https://doi.org/10.1038/35079135'],
      ['Kotani M, Detheux M, Vandenbogaerde A, Communi D, Vanderwinden JM, Le Poul E, et al. The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54. J Biol Chem. 2001;276(37):34631-6.', 'https://doi.org/10.1074/jbc.M104847200'],
    ],
    faq: [
      { q: '¿Kisspeptina-10 y kisspeptina-54 son lo mismo?',
        a: 'No. La kisspeptina-54, también llamada metastina, es el péptido de 54 aminoácidos que se aisló de ' +
           'placenta humana. La kisspeptina-10 son sus últimos 10 aminoácidos (45-54), YNWNSFGLRF-NH2, de ' +
           'fórmula C63H83N17O14 y 1302,4 g/mol.' },
      { q: '¿Qué secuencia tiene la kisspeptina-10?',
        a: 'YNWNSFGLRF-NH2: diez aminoácidos estándar con el extremo C amidado, que es el motivo RF-amida común ' +
           'a todas las kisspeptinas. Es la secuencia humana, la del CAS 374675-21-5.' },
    ],
  },
  'epithalon': {
    rows: [
      ['Secuencia', 'Ala-Glu-Asp-Gli (AEDG), extremos libres'],
      ['Longitud', 'Tetrapéptido, 4 aminoácidos'],
      ['Fórmula', 'C14H22N4O9, 390,35 g/mol (PubChem CID 219042)'],
      ['Masa monoisotópica', '390,14'],
      ['Otros nombres', 'Epitalón, epithalone, AEDG'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En epitalón la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 391,1. La secuencia ' +
      'termina en Asp-Gli, el tramo más propenso a formar aspartimida durante la síntesis: esa impureza pesa ' +
      '18 menos (cerca de 373,1) y, al abrirse, puede dar isoaspartato, que tiene la misma masa que el ' +
      'péptido correcto. Por eso en un tetrapéptido tan corto la pureza por HPLC dice tanto como la masa.',
    lit: 'El epitalón salió del Instituto de Biorregulación y Gerontología de San Petersburgo, en el grupo de ' +
      'Vladimir Khavinson, como tetrapéptido sintético basado en la epitalamina, un extracto de glándula ' +
      'pineal. En un trabajo de 2003, Khavinson, Bondarev y Butyugov lo añadieron a un cultivo de ' +
      'fibroblastos fetales humanos sin actividad de telomerasa y describieron expresión de la subunidad ' +
      'catalítica, actividad de la enzima y alargamiento de los telómeros en esas células.',
    refs: [
      ['Khavinson VKh, Bondarev IE, Butyugov AA. Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells. Bull Exp Biol Med. 2003;135(6):590-2.', 'https://doi.org/10.1023/a:1025493705728'],
    ],
    faq: [
      { q: '¿Epitalón y epitalamina son lo mismo?',
        a: 'No. La epitalamina es un extracto de glándula pineal, una mezcla. El epitalón es un tetrapéptido ' +
           'sintético de secuencia definida, Ala-Glu-Asp-Gli, con fórmula C14H22N4O9 y 390,35 g/mol.' },
      { q: '¿Qué secuencia tiene el epitalón?',
        a: 'Ala-Glu-Asp-Gli (AEDG): cuatro aminoácidos estándar con los extremos libres. Es el mismo compuesto ' +
           'que se encuentra escrito como Epithalon, Epitalon o Epithalone.' },
    ],
  },
  'mots-c': {
    rows: [
      ['Secuencia', 'MRWQEMGYIFYPRKLR (Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg)'],
      ['Longitud', '16 aminoácidos, extremos libres (H-…-OH)'],
      ['Origen de la secuencia', 'Marco de lectura corto dentro del gen del ARNr 12S del ADN mitocondrial'],
      ['Masa monoisotópica', '2173,11'],
      ['Otros nombres', 'Mitochondrial open reading frame of the 12S rRNA-c (PubChem CID 146675088)'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'MOTS-c pesa unos 2.175 g/mol, así que la espectrometría de masas suele mostrarlo con varias ' +
      'cargas: [M+2H]2+ cerca de 1087,6 y [M+3H]3+ cerca de 725,4, que corresponden a una masa ' +
      'monoisotópica de 2173,1 (2174,6 promedio). La secuencia lleva dos metioninas, y la metionina se ' +
      'oxida con facilidad: un pico 16 unidades más pesado es la impureza típica y la pureza por HPLC debe ' +
      'separarlo. Como casi todos los péptidos de síntesis, suele entregarse como sal de trifluoroacetato, ' +
      'y el certificado debe decir si el porcentaje es de pureza o de contenido de péptido.',
    lit: 'MOTS-c lo describieron en 2015 Changhan Lee, Pinchas Cohen y colaboradores, en la Universidad del ' +
      'Sur de California, como un péptido de 16 aminoácidos codificado por un marco de lectura corto dentro ' +
      'del gen del ARNr 12S del ADN mitocondrial. De ahí sale su nombre: mitochondrial open reading frame of ' +
      'the 12S rRNA-c. En 2018 el laboratorio de Lee describió que, en células sometidas a estrés ' +
      'metabólico, el péptido pasa al núcleo y regula la expresión de genes nucleares.',
    refs: [
      ['Kim KH, Son JM, Benayoun BA, Lee C. The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress. Cell Metab. 2018;28(3):516-524.', 'https://doi.org/10.1016/j.cmet.2018.06.008'],
    ],
    faq: [
      { q: '¿MOTS-c se codifica en el ADN nuclear?',
        a: 'No. Su secuencia está en el ADN mitocondrial, dentro del gen del ARN ribosómico 12S. Por eso se ' +
           'le llama péptido de origen mitocondrial.' },
      { q: '¿MOTS-c y humanina son lo mismo?',
        a: 'No. Los dos son péptidos codificados en el ADN mitocondrial, pero la humanina sale de la región ' +
           'del ARNr 16S y MOTS-c de la del 12S. Tienen secuencias distintas y MOTS-c tiene 16 aminoácidos.' },
    ],
  },
  'ss-31': {
    rows: [
      ['Secuencia', 'D-Arg-Dmt-Lys-Phe-NH2'],
      ['Longitud', 'Tetrapéptido, C-terminal amidado'],
      ['Aminoácidos no estándar', 'D-arginina en la posición 1 y Dmt (2′,6′-dimetil-L-tirosina) en la 2'],
      ['Masa monoisotópica', '639,39'],
      ['Otros nombres', 'Elamipretida, MTP-131, Bendavia (PubChem CID 11764719)'],
      ['Forma', 'Polvo liofilizado blanco, en vial sellado'],
    ],
    coa: 'En SS-31 la espectrometría de masas debe mostrar el ion [M+H]+ cerca de 640,4 y, por las tres ' +
      'cargas positivas de la molécula, muchas veces también el [M+2H]2+ cerca de 320,7. La D-arginina de ' +
      'la posición 1 hace que la pureza por HPLC pese más de lo normal: la versión con L-arginina tiene ' +
      'exactamente la misma masa y solo la separa la cromatografía. El certificado también debe indicar ' +
      'la sal (acetato o trifluoroacetato), porque cambia el peso por vial.',
    lit: 'La serie SS, de Szeto-Schiller, salió del trabajo conjunto de Hazel Szeto, en el Weill Medical ' +
      'College de Cornell, y Peter Schiller, en Montreal: tetrapéptidos que alternan residuos aromáticos y ' +
      'básicos. En 2004 Zhao y colaboradores los describieron como antioxidantes que atraviesan la membrana ' +
      'celular y se concentran unas 1.000 veces en la membrana mitocondrial interna. La dimetiltirosina era ' +
      'la pieza que captaba las especies reactivas de oxígeno, y los análogos sin ella no lo hacían. Ese ' +
      'trabajo usó células neuronales N2A, mitocondrias aisladas y corazón aislado. En 2013 Birk y ' +
      'colaboradores, del mismo grupo, mostraron con un análogo fluorescente que SS-31 se une con alta ' +
      'afinidad a la cardiolipina, y lo estudiaron en un modelo de isquemia renal en rata.',
    refs: [
      ['Zhao K, Zhao GM, Wu D, Soong Y, Birk AV, Schiller PW, Szeto HH. Cell-permeable Peptide Antioxidants Targeted to Inner Mitochondrial Membrane inhibit Mitochondrial Swelling, Oxidative Cell Death, and Reperfusion Injury. J Biol Chem. 2004;279(33):34682-90.', 'https://doi.org/10.1074/jbc.M402999200'],
      ['Birk AV, Liu S, Soong Y, et al. The Mitochondrial-Targeted Compound SS-31 Re-Energizes Ischemic Mitochondria by Interacting with Cardiolipin. J Am Soc Nephrol. 2013;24(8):1250-61.', 'https://doi.org/10.1681/ASN.2012121216'],
    ],
    faq: [
      { q: '¿SS-31 y elamipretida son lo mismo?',
        a: 'Sí. Es la misma molécula, D-Arg-Dmt-Lys-Phe-NH2, con la fórmula C32H49N9O5. SS-31 es el nombre ' +
           'de la serie de laboratorio; elamipretida es su denominación común, y MTP-131 y Bendavia son ' +
           'códigos y nombres que tuvo durante su desarrollo.' },
      { q: '¿Qué significa «SS» en SS-31?',
        a: 'Szeto-Schiller, por Hazel Szeto y Peter Schiller, que diseñaron la serie de tetrapéptidos de la ' +
           'que sale. El número distingue cada compuesto de la serie.' },
      { q: '¿Qué es la Dmt de la secuencia?',
        a: 'La 2′,6′-dimetil-L-tirosina: una tirosina con dos grupos metilo en el anillo. No es uno de los ' +
           '20 aminoácidos estándar, así que la fórmula de SS-31 no sale de una calculadora de secuencias ' +
           'normal.' },
    ],
  },
  'nad-plus': {
    rows: [
      ['Tipo de molécula', 'Dinucleótido, no es un péptido'],
      ['Estructura', 'Nicotinamida mononucleótido y adenosina monofosfato unidos por un puente pirofosfato'],
      ['Fórmula', 'C21H27N7O14P2, 663,4 g/mol (PubChem CID 5892)'],
      ['Masa monoisotópica', '663,11'],
      ['Otros nombres', 'Nadida, β-NAD, coenzima I, difosfopiridina nucleótido (DPN), cozimasa'],
      ['Forma', 'Polvo blanco o blanquecino, en vial sellado'],
    ],
    massStep: 'La identidad coincide con la masa esperada (663,11 monoisotópica) o con el tiempo de ' +
      'retención de un patrón de referencia por HPLC.',
    coa: 'NAD+ es una molécula pequeña, así que la identidad se comprueba por HPLC frente a un patrón de ' +
      'referencia (mismo tiempo de retención) y por espectrometría de masas: [M+H]+ cerca de 664,1 en modo ' +
      'positivo o [M-H]- cerca de 662,1 en negativo. Las impurezas típicas son sus productos de hidrólisis, ' +
      'nicotinamida y ADP-ribosa, y la forma reducida, NADH, que absorbe a 340 nm y NAD+ no. El certificado ' +
      'debe decir si el producto es el ácido libre (CAS 53-84-9) o una sal.',
    lit: 'En 1906 Arthur Harden y William John Young vieron que el jugo de levadura dejaba de fermentar ' +
      'después de dializarlo y que recuperaba esa capacidad al añadirle el dializado hervido. Había un ' +
      'factor pequeño y estable al calor, que llamaron co-ferment y que después se conoció como cozimasa. ' +
      'Hans von Euler-Chelpin estableció su naturaleza de nucleótido, y Harden y él compartieron el Nobel de ' +
      'Química de 1929. Hoy se estudia en modelos celulares y animales como coenzima de reacciones redox y ' +
      'como sustrato de enzimas que lo consumen, como las sirtuinas; la revisión de Cantó, Menzies y Auwerx ' +
      '(2015) reúne ese trabajo.',
    refs: [
      ['Harden A, Young WJ. The alcoholic ferment of yeast-juice. Proc R Soc Lond B. 1906;77(519):405-20.', 'https://doi.org/10.1098/rspb.1906.0029'],
      ['Cantó C, Menzies KJ, Auwerx J. NAD+ Metabolism and the Control of Energy Homeostasis: A Balancing Act between Mitochondria and the Nucleus. Cell Metab. 2015;22(1):31-53.', 'https://doi.org/10.1016/j.cmet.2015.05.023'],
    ],
    faq: [
      { q: '¿NAD+ es un péptido?',
        a: 'No. Es un dinucleótido: dos nucleótidos, uno con nicotinamida y otro con adenina, unidos por sus ' +
           'grupos fosfato. No tiene aminoácidos ni enlaces peptídicos. Está en el catálogo junto a los ' +
           'péptidos porque se estudia en los mismos modelos de función mitocondrial.' },
      { q: '¿NAD+ y NADH son lo mismo?',
        a: 'No. Son las dos formas del mismo par redox: NAD+ es la oxidada y NADH la reducida, que lleva un ' +
           'ion hidruro más. Se distinguen en el laboratorio porque NADH absorbe luz a 340 nm y NAD+ no.' },
    ],
  },
  'ahk-cu': {
    rows: [
      ['Secuencia', 'Ala-His-Lis (AHK) con cobre(II)'],
      ['Longitud', 'Tripéptido, 3 aminoácidos'],
      ['Diferencia con GHK-Cu', 'Alanina en lugar de glicina en la posición 1: un grupo metilo más (+14,02)'],
      ['Tripéptido sin cobre', 'C15H26N6O4, 354,41 g/mol (PubChem CID 7408502)'],
      ['Otros nombres', 'L-alanil-L-histidil-L-lisina-cobre(II)'],
      ['Forma', 'Polvo liofilizado de color azul, en vial sellado'],
    ],
    coa: 'En AHK-Cu la espectrometría de masas puede informar el tripéptido solo (monoisotópica 354,20; ion ' +
      '[M+H]+ cerca de 355,2) o el complejo con cobre (cerca de 416,1 con cobre-63 y 418,1 con cobre-65). ' +
      'Esos valores quedan 14 unidades por encima de los de GHK-Cu, y esa diferencia es la forma de ' +
      'confirmar que el vial no es el otro tripéptido. El CAS 682809-81-0 corresponde en PubChem a la sal ' +
      'monoclorhidrato del complejo, así que el certificado debe decir qué forma pesó.',
    lit: 'AHK-Cu tiene mucha menos literatura que GHK-Cu, y casi todo lo publicado sobre complejos de ' +
      'cobre de tripéptidos trata del segundo. La secuencia AHK es la de las posiciones 2 a 4 del extremo ' +
      'N-terminal de la albúmina humana (Asp-Ala-His-Lys), un sitio de unión de cobre que se ha estudiado por ' +
      'separado: en 2001 Bar-Or y colaboradores describieron in vitro que un análogo de ese tramo, DAHK, ' +
      'impedía la formación de especies reactivas de oxígeno inducida por cobre.',
    refs: [
      ['Bar-Or D, Rael LT, Lau EP, et al. An Analog of the Human Albumin N-Terminus (Asp-Ala-His-Lys) Prevents Formation of Copper-Induced Reactive Oxygen Species. Biochem Biophys Res Commun. 2001;284(3):856-62.', 'https://doi.org/10.1006/bbrc.2001.5042'],
    ],
    faq: [
      { q: '¿Qué diferencia hay entre AHK-Cu y GHK-Cu?',
        a: 'Un aminoácido. GHK-Cu empieza por glicina y AHK-Cu por alanina, que tiene un grupo metilo más. ' +
           'Por eso el tripéptido sin cobre pesa 354,4 g/mol en AHK frente a 340,4 en GHK, y en el análisis ' +
           'de masas todos los iones salen 14 unidades más arriba. En los dos la histidina está en la ' +
           'posición 2.' },
      { q: '¿Qué relación tiene AHK con la albúmina?',
        a: 'La albúmina humana empieza por Asp-Ala-His-Lys (DAHK), y AHK son sus posiciones 2 a 4. En DAHK la ' +
           'histidina queda en la posición 3, que es el motivo clásico de unión de cobre de la albúmina; en ' +
           'AHK, como en GHK, queda en la 2. No son el mismo sitio de unión.' },
    ],
  },
  // El agua no es un péptido: no lleva COA de pureza, así que en vez de «qué revisar
  // en el certificado» va «qué revisar en el vial». Los datos son los del etiquetado
  // USP publicado en DailyMed (verificado el 2026-10-27), no los de nuestra etiqueta.
  // Sin «inyección», reconstitución ni plazos de uso tras abrir: la etiqueta de
  // referencia no da días y la regla de compliance lo prohíbe.
  'bac-water-10ml': {
    rows: [
      ['Composición', 'Agua estéril con alcohol bencílico al 0,9 % (9 mg/mL)'],
      ['Conservante', 'Alcohol bencílico. Es bacteriostático: frena el crecimiento bacteriano, no esteriliza'],
      ['pH de referencia', '5,7 (rango 4,5 a 7,0), según el etiquetado USP'],
      ['Calidad', 'Estéril y apirógena, grado USP'],
      ['Envase', 'De uso múltiple, vial sellado de 3 ml o 10 ml'],
      ['Otros aditivos', 'Ninguno'],
    ],
    checkHead: 'Qué revisar en el vial',
    checkIntro: 'El agua bacteriostática no lleva certificado de pureza como un péptido. Lo que se comprueba ' +
      'es que el vial sea lo que dice la etiqueta y que llegue intacto:',
    check: [
      'La etiqueta dice agua bacteriostática, no agua estéril ni destilada, y su volumen: 3 o 10 ml.',
      'La tapa y el precinto llegan intactos.',
      'El líquido es transparente e incoloro, sin partículas ni turbidez.',
    ],
    checkMore: 'Qué significa cada dato de la etiqueta, y por qué el pH y el conservante importan, está en ' +
      '<a href="es/article/bacteriostatic-water-usp-specification/">agua bacteriostática: alcohol bencílico, ' +
      'pH y la norma USP</a>.',
    lit: 'El alcohol bencílico es el conservante antimicrobiano más usado en formulaciones de proteínas ' +
      'de uso múltiple, y su interacción con las moléculas disueltas está estudiada: favorece el desplegamiento parcial ' +
      'y, con él, la agregación. En una comparación publicada quedó en la mitad del rango, por detrás del ' +
      'm-cresol y el fenol y por delante del fenoxietanol y el clorobutanol. Por eso el agua presente forma ' +
      'parte de la condición experimental y no es un fondo neutro.',
    refs: [
      ['Bacteriostatic Water for Injection, USP: etiquetado del producto. DailyMed, Biblioteca Nacional de Medicina de EE. UU.',
        'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=69485218-9343-952d-e053-2a91aa0ad4e8'],
      ['Hutchings RL, Singh SM, Cabello-Villegas J, Mallela KMG. Effect of antimicrobial preservatives on partial ' +
        'protein unfolding and aggregation. Journal of Pharmaceutical Sciences, 2013;102(2):365-376.',
        'https://pmc.ncbi.nlm.nih.gov/articles/PMC3990441/'],
      ['Shi M, McHugh KJ. Strategies for overcoming protein and peptide instability in biodegradable drug ' +
        'delivery systems. Advanced Drug Delivery Reviews, 2023;199:114904.',
        'https://pmc.ncbi.nlm.nih.gov/articles/PMC10526705/'],
    ],
    // Las preguntas que Google muestra en «agua bacteriostatica panama» (gl=pa, 2026-10-27).
    faq: [
      { q: '¿Es lo mismo el agua bacteriostática que el agua estéril?',
        a: 'No. Las dos son estériles, pero el agua estéril no lleva nada añadido y se presenta para un solo ' +
           'uso. El agua bacteriostática lleva alcohol bencílico al 0,9 %, que frena el crecimiento bacteriano, ' +
           'y por eso se presenta en envase de uso múltiple.' },
      { q: '¿Se consigue agua bacteriostática en farmacias?',
        a: 'No toda el agua de laboratorio es bacteriostática: el agua estéril, la destilada y la bidestilada ' +
           'no llevan conservante y son otros productos. Compres donde compres, revisa que la etiqueta diga agua ' +
           'bacteriostática y alcohol bencílico al 0,9 %. En Codex se pide en línea y en Ciudad de Panamá llega ' +
           'en 1 a 2 horas.' },
      { q: '¿Cuánto dura el agua bacteriostática?',
        a: 'La fecha de caducidad impresa vale para el envase cerrado y en las condiciones de su etiqueta. Una ' +
           'vez abierto, el alcohol bencílico es volátil y el envase pierde conservante con el tiempo, así que se ' +
           'mantiene cerrado mientras no se usa y se anota la fecha en que se abrió por primera vez.' },
      { q: '¿Qué diferencia hay entre la de 3 ml y la de 10 ml?',
        a: 'Solo el volumen. Las dos tienen la misma composición, alcohol bencílico al 0,9 % y grado USP. La de ' +
           '10 ml sale más barata por mililitro.' },
    ],
  },
};

function fichaExtraEs(p) {
  const f = FICHA_ES[p.slug];
  if (!f) return '';
  const n = nameEs(p);
  // El agua: especificación + revisión del vial, sin certificado ni lote.
  if (f.check) {
    const pres = PRODUCTS.filter((x) => x.name === p.name);
    return `<h2>Especificación de ${n.toLowerCase()}</h2>
<dl class="pd-specs pd-tech">${f.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
<h2>${f.checkHead}</h2>
<p>${f.checkIntro}</p>
<ol>${f.check.map((c) => `<li>${c}</li>`).join('')}</ol>
<p>${f.checkMore}</p>
<h2>Presentaciones de ${n.toLowerCase()} en Panamá</h2>
<ul>${pres.map((x) => `<li><a href="es/product/${x.slug}/">${n} ${x.mg}</a>: ${x.sizes.map((z) => `${SIZE_ES[z.label] || z.label} $${z.price.toFixed(2)}`).join(', ')}${x.outOfStock ? '. Agotado por ahora' : ''}.</li>`).join('')}</ul>
<h2>El conservante en la literatura científica</h2>
<p>${f.lit}</p>
<ol class="pd-refs">${f.refs.map(([t, u]) => `<li>${t} <a href="${u}" rel="nofollow noopener" target="_blank">Ver publicación</a></li>`).join('')}</ol>`;
  }
  const row = ([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`;
  const rows = [
    ...(altNamesEs(p).length ? [['También como', altNamesEs(p).join(', ')]] : []),
    ...f.rows,
  ];
  // Todas las concentraciones del compuesto, con su estado: la ficha principal es
  // la que compite en «[producto] panamá» y tiene que mostrar lo que hay.
  const pres = PRODUCTS.filter((x) => x.name === p.name);
  const batch = batchFor(p.slug, p.mg);
  return `<h2>Ficha técnica de ${n}</h2>
<dl class="pd-specs pd-tech">${rows.map(row).join('')}</dl>
<h2>Qué revisar en el certificado de ${n}</h2>
<p>${f.coa}</p>
<ol>
<li>El número de lote del certificado es el mismo que trae impreso el vial${batch ? ` (el vigente es ${batch.code})` : ''}. Se comprueba en la <a href="es/verify/">página de verificación</a>.</li>
<li>${f.massStep || 'La identidad por espectrometría de masas coincide con la masa esperada. Puedes calcularla desde la secuencia con la <a href="es/tools/peptide-molecular-weight/">calculadora de peso molecular</a>.'}</li>
<li>La pureza por HPLC aparece como porcentaje del pico principal. Nuestra especificación de compra es de 99 % o más.</li>
</ol>
<p>La lista completa de lo que debe traer un certificado está en el <a href="es/tools/coa-checklist/">checklist del COA</a>.</p>
<h2>Presentaciones de ${n} en Panamá</h2>
<ul>${pres.map((x) => `<li><a href="es/product/${x.slug}/">${n} ${x.mg}</a>: ${x.sizes.map((z) => `${SIZE_ES[z.label] || z.label} $${z.price.toFixed(2)}`).join(', ')}${x.outOfStock ? '. Agotado por ahora' : ''}.</li>`).join('')}</ul>
${f.lit ? `<h2>${n} en la literatura científica</h2>
<p>${f.lit}</p>
<ol class="pd-refs">${f.refs.map(([t, u]) => `<li>${t} <a href="${u}" rel="nofollow noopener" target="_blank">Ver publicación</a></li>`).join('')}</ol>` : ''}`;
}

/* Envío y pagos: un solo origen para el FAQ de producto, pricing.md y llms-full.txt. */
const SHIPPING_LINE = 'Panama City: same-day delivery in 1-2 hours, $4 flat. Interior cities ' +
  '(David, Chitre, Colon and more): next business day via Fergunson transport. United States: ' +
  '$20 from U.S. stock, 48-72 hours. Free shipping over $100 (Panama) or $250 (U.S.). ' +
  'Always in sealed, protective packaging, with each vial labeled with its compound, strength and batch number.';
const PAYMENT_LINE = 'Panama: Yappy or crypto (USDC or USDT on Ethereum). United States: Zelle or ' +
  'crypto. Crypto is paid on our own checkout from your wallet. With Yappy or Zelle the order is ' +
  'placed on the site and the payment details are sent afterwards (Yappy on WhatsApp, Zelle by ' +
  'email); the order ships once the payment is confirmed.';

/* FAQ por producto, derivado del propio producto: build-seo.js lo hornea en el HTML
   y en el JSON-LD, y product.js lo pinta al hidratar. Vive aquí para que las dos
   versiones digan lo mismo — un FAQPage que declara preguntas que la página no
   muestra es justo lo que Google penaliza (ya pasó con el FAQ de la portada).
   Solo datos de tienda y de ficha: nada clínico ni de dosis. */
/* El agua bacteriostática no es un péptido: no es liofilizada ni se analiza por
   HPLC. Antes heredaba las respuestas de los péptidos y la ficha afirmaba las dos
   cosas (2026-10-02). */
const isDiluent = (p) => /^bac-water/.test(p.slug);

function productFaq(p) {
  if (esLang()) return productFaqEs(p);
  const list = p.sizes.map((z) => `${z.label}: $${z.price.toFixed(2)} USD`).join('. ');
  const who = { q: `Who can buy ${p.name}?`,
    a: 'Adults 21 or older buying for laboratory research. At checkout the buyer confirms the order is ' +
       'for research use only and not for human or animal consumption. We do not sell for personal use.' };
  if (isDiluent(p)) {
    return [
      { q: `What is ${p.name}?`,
        a: `${p.overview} It is sold in a sealed ${p.mg} container for laboratory use only.` },
      { q: `How much does ${p.name} cost?`,
        a: `${list}. Prices are in USD${p.outOfStock ? '. This presentation is currently out of stock' : ''}.` },
      { q: `How is ${p.name} shipped and how long does delivery take?`, a: SHIPPING_LINE },
      { q: `How should ${p.name} be stored?`, a: 'As stated on its label. Keep the container closed when not in use.' },
      { q: `Is ${p.name} intended for human use?`,
        a: `No. ${p.name} is sold as a laboratory diluent for research and development. It is not for human ` +
           'or animal use.' },
      who,
    ];
  }
  return [
    { q: `What is ${p.name}?`,
      a: `${p.overview} It is supplied as a lyophilized ${p.mg} vial for laboratory research use only.` },
    { q: `How much does ${p.name} cost?`,
      a: `${list}. Prices are in USD${p.outOfStock ? '. This presentation is currently out of stock' : ''}.` },
    { q: `Is ${p.name} tested, and do you provide a certificate of analysis?`,
      a: 'Yes. Every batch is tested at 99% purity by HPLC and mass spectrometry. The certificate of ' +
         'analysis is available on request, before you order if you want to see it first, and any ' +
         'vial\'s batch number can be checked at https://codexresearchlab.com/verify/.' },
    { q: `How is ${p.name} shipped and how long does delivery take?`, a: SHIPPING_LINE },
    { q: `How should ${p.name} be stored?`,
      a: 'Lyophilized vials are kept cool and protected from light. Once in solution they are kept ' +
         'refrigerated at 2-8 degrees Celsius. Every vial label shows its storage conditions.' },
    { q: `Is ${p.name} intended for human use?`,
      a: `No. ${p.name} is sold strictly for laboratory research and development. It is not for human ` +
         'or animal consumption and is not intended to diagnose, treat, cure or prevent any disease.' },
    who,
  ];
}

// El idioma se lee en el momento de usarlo: data.js carga antes que i18n.js.
function esLang() {
  // build-seo.js evalúa este archivo en Node con un document simulado: ahí no
  // hay idioma de página y el generador llama a las versiones ES a propósito.
  const el = typeof document !== 'undefined' && document.documentElement;
  return !!el && (el.getAttribute('lang') || 'en').slice(0, 2) === 'es';
}

const SIZE_ES = { 'Single vial': 'Vial individual', 'Pack · 3 vials': 'Pack · 3 viales', 'Pack · 5 vials': 'Pack · 5 viales', 'Pack · 10 vials': 'Pack · 10 viales' };

function productFaqEs(p) {
  const name = nameEs(p);
  // El agua lleva artículo («¿Qué es el agua bacteriostática?»); un péptido no.
  const the = isDiluent(p) ? `el ${name.toLowerCase()}` : name;
  const The = isDiluent(p) ? `El ${name.toLowerCase()}` : name;
  const alt = altNamesEs(p);
  // Responde a «comprar [producto] panamá» con lo que de verdad pasa al comprar.
  const where = { q: `¿Dónde comprar ${the} en Panamá?`,
    a: `En Codex Research (codexresearchlab.com). ${The} se agrega al carrito en el sitio y se paga con ` +
       'Yappy o con cripto. El pedido sale del inventario local: en Ciudad de Panamá llega en 1 a 2 horas y ' +
       'al interior (David, Chitré, Colón) al día hábil siguiente.' +
       (isDiluent(p) ? '' : ' Cada vial lleva su número de lote, que se puede comprobar antes de abrirlo.') };
  const list = p.sizes.map((z) => `${SIZE_ES[z.label] || z.label}: $${z.price.toFixed(2)} USD`).join('. ');
  const who = { q: `¿Quién puede comprar ${the}?`,
    a: 'Mayores de 21 años que compran para investigación de laboratorio. Al finalizar la compra se confirma ' +
       'que el pedido es solo para uso en investigación y no para consumo humano ni animal. No vendemos para ' +
       'uso personal.' };
  if (isDiluent(p)) {
    return [
      { q: `¿Qué es ${the}?`,
        a: `${p.overviewEs || p.overview} Se vende en un envase sellado de ${p.mg}, solo para uso de laboratorio.` },
      { q: `¿Cuánto cuesta ${the} en Panamá?`,
        a: `${list}. Precios en dólares${p.outOfStock ? '. Esta presentación está agotada por ahora' : ''}.` },
      where,
      { q: `¿Cómo se envía ${the} y cuánto tarda la entrega?`, a: SHIPPING_LINE_ES },
      { q: `¿Cómo se debe almacenar ${the}?`, a: 'Como indica su etiqueta. Mantén el envase cerrado mientras no se usa.' },
      { q: `¿${The} es para uso humano?`,
        a: `No. ${The} se vende como diluyente de laboratorio para investigación y desarrollo. No es para ` +
           'uso humano ni animal.' },
      ...((FICHA_ES[p.slug] && FICHA_ES[p.slug].faq) || []),
      who,
    ];
  }
  return [
    { q: `¿Qué es ${name}?`,
      a: `${p.overviewEs || p.overview} Se suministra como vial liofilizado de ${p.mg}, solo para uso en investigación de laboratorio.` +
         (alt.length ? ` También se escribe ${alt.join(' o ')}.` : '') },
    { q: `¿Cuánto cuesta ${name} en Panamá?`,
      a: `${list}. Precios en dólares${p.outOfStock ? '. Esta presentación está agotada por ahora' : ''}.` },
    where,
    { q: `¿${name} tiene análisis de laboratorio? ¿Entregan certificado?`,
      a: 'Sí. Cada lote se analiza al 99% de pureza por HPLC y espectrometría de masas. El certificado de ' +
         'análisis está disponible si lo pides, también antes de comprar, y el número de lote de cualquier ' +
         'vial se puede comprobar en https://codexresearchlab.com/verify/.' },
    { q: `¿Cómo se envía ${name} y cuánto tarda la entrega?`, a: SHIPPING_LINE_ES },
    { q: `¿Cómo se debe almacenar ${name}?`,
      a: 'Los viales liofilizados se mantienen frescos y protegidos de la luz. Una vez en disolución se ' +
         'guardan refrigerados entre 2 y 8 grados Celsius. La etiqueta de cada vial indica sus condiciones ' +
         'de almacenamiento.' },
    { q: `¿${name} es para uso humano?`,
      a: `No. ${name} se vende estrictamente para investigación y desarrollo de laboratorio. No es para ` +
         'consumo humano ni animal, y no pretende diagnosticar, tratar, curar ni prevenir ninguna enfermedad.' },
    // Preguntas propias del compuesto (FICHA_ES): van en el HTML, al hidratar y en el FAQPage.
    ...((FICHA_ES[p.slug] && FICHA_ES[p.slug].faq) || []),
    who,
  ];
}

// Contenido según el idioma de la página. Las vistas llaman a estos, no a las
// listas sueltas, para que /es/ y / no se desincronicen.
const faqs = () => (esLang() ? FAQS_ES : FAQS);
const overview = (p) => (esLang() && p.overviewEs ? p.overviewEs : p.overview);

/* Identidad legal del negocio. Va en el footer de todas las páginas: los
   procesadores de pago (Stripe) la buscan y su ausencia se lee como opacidad.
   RELLENAR legalName y address con los datos reales de la LLC; mientras estén
   vacíos, el footer simplemente no pinta esa línea. */
const BUSINESS = {
  legalName: 'Codex Research LLC',
  address: '30 N Gould St, Sheridan, WY 82801, United States',
  email: 'sales@codexresearchlab.com',
  phone: '+507 6774-9282',
};

/* Productos retirados del catálogo: no se venden, no salen en catálogo, sitemap
   ni prices.json, y sus URLs redirigen al catálogo (build-seo.js). Tirzepatide y
   retatrutide estuvieron aquí del 2026-10-02 (revisión de Stripe) al 2026-10-18,
   cuando volvieron a PRODUCTS. */
const RETIRED_PRODUCTS = [];

/* Áreas de investigación: las tarjetas de la portada y las categorías del
   catálogo (catalog/?area=<key>). Un producto va en una sola área, para que
   los contadores sumen el catálogo. Sólo nombran el campo de estudio; nada de
   efectos ni usos (ver la regla de compliance). Producto nuevo = añadir su slug
   aquí, o sólo saldrá en «All». */
const AREAS = [
  { key: 'metabolic', label: 'Metabolic', slugs: ['tirzepatide', 'retatrutide', 'retatrutide-20mg', 'retatrutide-30mg', 'mots-c'] },
  { key: 'tissue', label: 'Tissue models', slugs: ['bpc-157', 'tb-500'] },
  { key: 'copper', label: 'Copper peptides', slugs: ['ghk-cu', 'ghk-cu-50mg', 'ahk-cu'] },
  { key: 'gh-axis', label: 'GH axis', slugs: ['ipamorelin', 'cjc-1295-no-dac', 'tesamorelin', 'tesamorelin-20mg', 'igf-1-lr3'] },
  { key: 'mitochondrial', label: 'Mitochondrial', slugs: ['nad-plus', 'ss-31'] },
  { key: 'neuroendocrine', label: 'Neuroendocrine', slugs: ['kisspeptin', 'pt-141', 'epithalon'] },
  { key: 'supplies', label: 'Laboratory supplies', slugs: ['bac-water', 'bac-water-10ml'] },
];

window.REA = { PRODUCTS, RETIRED_PRODUCTS, AREAS, FAQS, FAQS_ES, BUSINESS, COUNTRIES, MANUAL_PAY, COUPONS, BATCHES, batchFor, SALE,
  STOCK_BY_COUNTRY, applyStock, setStock,
  WHATSAPP: '50767749282', productFaq, productFaqEs, nameEs, altNamesEs, panamaBlockEs, fichaExtraEs, usShipping, usBlockEn, SHIPPING_LINE, SHIPPING_LINE_ES, PAYMENT_LINE,
  faqs, overview };
