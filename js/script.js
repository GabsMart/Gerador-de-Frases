let button = document.getElementById('button');
let frase = document.getElementById('frase');

let frases = [
    'As coisas só mudam quando nós as mudamos. Mas você tem que fazer isso.',
    'O bem e o mal são uma questão de perspectiva.',
    'Há coisas lá fora que nossas pequenas mentes nunca compreenderão.',
    'Todos enfrentamos o mesmo fim.',
    'No final, todos nós teremos exatamente o que merecemos.',
    'O medo é o pior inimigo do progresso.',
    'Sua dor define quem você é, mas não tem mais poder sobre você.',
    'Se agora eu mudar meu passado, mudarei quem sou agora.',
    'Não há nada além de caos lá fora.',
    'A vida não passa de uma espiral de dor.',
    'Espero que amanhã já seja diferente de hoje.',
    'Não somos livres no que fazemos, porque não somos livres no que queremos.',
    'O que sabemos é uma gota. O que não conhecemos… é um oceano.',
    'Mas no final, cada morte é apenas um novo começo.',
    'A vida é um labirinto. Alguns vagam até a morte em busca de uma saída.',
    'Mas você tem que fazer isso com habilidade, em segredo. Então parece mágica.',
    'Mas de vez em quando é bom questionar quem nos faz questionar as coisas.',
    'Se agora eu mudar meu passado, mudarei quem sou agora.',
    'Não somos livres no que fazemos, porque não somos livres no que queremos.',
    'Não podemos superar o que está dentro de nós.',
    'Existem coisas por aí que nossas pequenas mentes nunca compreenderão.',
    'Todos enfrentamos o mesmo fim. Aqueles acima há muito se esqueceram de nós.',
    'Eles não nos julgam. Na morte estou sozinho, e meu único juiz… sou eu.',
    'E se tudo que veio do passado fosse influenciado pelo futuro.',
    'A morte é incompreensível. Mas pode-se reconciliar-se com isso.',
    'Tudo é causa e efeito.',
    'Toda dor nos leva a agir, forma nossa vontade.',
    'A vida é um presente… para quem sabe usá-la.',
    'O inferno está vazio e todos os demônios estão aqui.',
    'Mas tudo o que uma vez viveu, vive para sempre. Na eternidade do tempo.',
    'E se tudo que veio do passado foi influenciado pelo futuro?',
    'Nosso pensamento é moldado pelo dualismo. Entrada, saída.',
    'Preto branco. Bem, mal. Tudo aparece como pares opostos. Mas isso está errado.',
    'O fim é o começo, e o começo é o fim.',
    'Deus não tem um plano. Não há plano algum. Não há nada além de caos lá fora. ',
    'Dor… e caos! As pessoas são ruins. Malicioso, maligno. ',
    'Somente quando você estiver disposto a sacrificar o que você mais ama.',
    'A dor é seu vaso, deseje sua bússola. É tudo de que o homem é capaz.',
    'Somos andarilhos na escuridão.',
    'No final, todos teremos exatamente o que merecemos.',
    'Talvez o Big Bang não seja nada mais do que o ato de criação de Deus.',
    'As coisas grandes e as pequenas não seguem as mesmas regras.',
    'Os sonhos mudam. Outras coisas se tornam importantes.',
    'Sua dor define quem você é, mas não tem mais poder sobre você.',
    'Não conhecemos nem metade dos mistérios deste mundo. Somos andarilhos na escuridão.',
    'Enquanto a tempestade rugir dentro dele, ele não poderá encontrar paz.',
    'O homem é uma criatura estranha. Todas as suas ações são motivadas pelo desejo, seu caráter forjado pela dor.',
    'Por mais que tente suprimir essa dor, reprimir o desejo, não pode libertar-se da eterna servidão aos seus sentimentos.',
    'Nem na vida, nem na morte. E assim ele fará o que deve, dia após dia. A dor é seu vaso, o desejo sua bússola. É tudo de que o homem é capaz.',
    'Há momentos em que devemos entender que as decisões que tomamos influenciam mais do que apenas nossos próprios destinos.',
    'Sou apenas uma pequena parte de um enorme tumor que é muito maior do que qualquer um de nós pode imaginar.',
    'A morte é sempre inevitável. O destino nada mais é do que a conexão de causa e efeito. Na luz, na sombra.',
    'Ontem, hoje e amanhã não são consecutivos, eles estão conectados em um círculo sem fim. Tudo está conectado.',
    'Agora acordei e não sei mais se sou uma pessoa que sonhou que é uma borboleta ou se sou uma borboleta que está sonhando que é uma pessoa.’',
    'Os buracos negros são considerados as bocas do inferno do universo. Aqueles que caem dentro desaparecem. Para todo sempre. Mas para onde? ',
    'O que está por trás de um buraco negro? Junto com as coisas, o espaço e o tempo também desaparecem ali? ',
    'Ou o espaço e o tempo estariam ligados e fariam parte de um ciclo sem fim? E se tudo que veio do passado fosse influenciado pelo futuro?',
    'Podemos nos sentir distantes de nossas famílias e não entender o que elas fazem. E ainda assim, no final, faremos qualquer coisa por eles.',
    'Um homem vive três vidas. A primeira termina com a perda da ingenuidade, a segunda, com a perda da inocência e a terceira… com a perda da própria vida. ',
    'Há momentos em que devemos entender que as decisões que tomamos influenciam mais do que apenas nossos próprios destinos.',
    'A verdade é uma coisa estranha. Você pode tentar suprimi-la, mas ela sempre encontrará o caminho para a superfície. ',
    'Nós fazemos uma mentira em nossa verdade para sobreviver. Tentamos esquecer, até não podermos mais.',
    'Em suma, o deus que a humanidade rezou por milhares de anos ao deus com o qual tudo está vinculado, esse deus existe como nada além do próprio tempo.',
    'O mundo está cheio de tais paradoxos que simplesmente escolhemos ignorá-los na maioria das vezes.',
    'Algumas pessoas vagam a vida inteira procurando uma saída, mas só há um caminho e ele te leva cada vez mais fundo.',
    'Não poderemos mudar o grande esquema das coisas, mas os detalhes. Mudamos um grão de areia e, com isso, o mundo inteiro.',
    'Meu único objetivo é tirar muitas vidas. Quanto mais, melhor eu me sinto.',
    'E se Deus não souber o que está fazendo? Se o plano está errado? Se Deus está errado?',
    'Que tudo está se repetindo Que tudo isso já aconteceu antes Como um déjó vu maciço.',
    'A distinção entre passado, presente e futuro é apenas uma ilusão teimosamente persistente.',
    'A maioria das pessoas não passa de peões em um tabuleiro de xadrez liderado por uma mão desconhecida.',
    'Ontem, hoje e amanhã não são consecutivos, estão conectados em um círculo sem fim. Tudo está conectado.',
    'A maioria das pessoas não passa de peões em um tabuleiro de xadrez liderado por uma mão desconhecida.',
    'Havia essa tristeza nos olhos dele. Do tipo que você às vezes vê naqueles que querem morrer, mas a vida não deixa.',
    'O medo é o pior inimigo do progresso.',
    'Todos nós estamos cheios de pecado. Nenhum ser humano puro existe.',
    'Mas não importa o que façamos, nunca caímos mais do que nas mãos de Deus.',
    'O bem e o mal são uma questão de perspectiva.',
    'Há dois dias beijei minha tia!',
    'Não somos livres no que fazemos porque não somos livres no que queremos.',
    'Não podemos superar o que está dentro de nós.',
    'Acreditamos que o tempo é linear. Que prossiga eternamente, uniformemente.',
    'Ao infinito. Mas a distinção entre passado, presente e futuro não passa de uma ilusão. ',
    'A vida não passa de uma espiral de dor. E o mundo está condenado a ser destruído.',
    'Não importa o quanto lutemos, estamos conectados pelo nosso sangue. ',
    'O que sabemos é uma gota. O que não conhecemos é um oceano.',
    'Não existe mágica, apenas ilusão. As coisas só mudam quando as mudamos.',
    'É inevitável que passemos por todas as três etapas.',
    'Deus tem um plano para cada ser humano.',
    'Somente quando nos libertamos da emoção podemos ser verdadeiramente livres.'
];

button.addEventListener('click', function () {
    let random = Math.floor(Math.random()*89);
    frase.innerHTML = frases[random];
    frase.style.color = '#fff';
});