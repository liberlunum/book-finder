const bookCards = [
    {
        title: 'Мара и Морок',
        author: 'Лия Арден',
        annotation:'Таких, как я, называют Марами – отмеченными самой богиней смерти Мораной. Когда-то у меня и моих шести сестер был свой путь. Тогда люди нас уважали и просили о милосердии. Они приносили нам подношения и молились нам. Но 200 лет назад все изменилось, когда принц Серата осмелился поднять руку на одну из нас. Я пыталась отомстить, но погибли мы все. Теперь правители Аракена, погрязшие в длительной войне со своим соседом Сератом, решили вернуть меня к жизни. Дать второй шанс на месть и свободу, привязав меня к тому, против кого я никогда не пойду. Таких, как он, называют Морок, и их боятся абсолютно все.',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/50/576850/cover.jpg',
        id: 1

    },
    {
        title: 'Мара и Морок. Особенная Тень',
        author: 'Лия Арден',
        annotation:'После предательства Морока Мара живой попадает в руки потомков своего врага. Ей придётся лицом к лицу встретиться с Северином – нынешним королём Серата – и узнать, какую судьбу он приготовил для неё. Ей предстоит разобраться в том, как много лжи таится в её прошлом и настоящем. Ей необходимо найти способ завершить свою давнюю месть. Однако Мара не единственная, кому нужно принять решение. Морок должен сделать выбор, который он больше не может откладывать.',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/93/586593/cover.jpg',
        id: 2

    },
    {
        title: 'Мара и Морок. 500 лет назад',
        author: 'Лия Арден',
        annotation:'В прежние времена персонажи из сказок были реальны и встречались смертным едва ли не каждый день.Я много путешествовал, собирая легенды, слухи и даже откровенные небылицы о Марах и Мороках. Однажды я наткнулся на историю одной Мары, которая жила приблизительно за три сотни лет до исчезновения всех служительниц богини Смерти. Её настоящее имя намеренно скрывали, и я уверен, что эта история вышла особенной потому, что семья девочки не смогла выполнить главное правило – покинуть родные места.',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/41/623741/cover.jpg',
        id: 3

    },
    {
        title: 'Жестокий принц',
        author: 'Холли Блэк',
        annotation:'Джуд ненавидит фейри и одновременно преклоняется перед ними. Когда ей было семь, ее родителей хладнокровно убили. Девушку воспитали фейри. Она выросла при дворе одного из самых могущественных и жестоких генералов армии Верховного короля фейри. У него она научилась превосходно владеть мечом. Но чтобы избежать постоянных насмешек со стороны волшебных обитателей страны, которые презирают людей, ей нужно гораздо больше. Джуд нужна власть. Но для этого придется сразиться с Карданом, самым вероломным и коварным принцем Фейриленда.',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/57/557057/cover.jpg',
        id: 4

    },
    {
        title: 'Злой король',
        author: 'Холли Блэк',
        annotation:'Джуд связала Кардана обещанием подчиняться ей, обещанием, которое продлится ровно год и один день. Теперь она главная фигура за троном, которая дергает за ниточки и умело манипулирует королем. Но Джуд ввязалась в опасную игру фейри, не имея ни друзей, ни союзников. Подстегиваемая амбициями и целью выжить во что бы то ни стало, она плетет интриги и наносит молниеносные удары. Однако когда Джуд выясняет, что среди тех, кому она безоговорочно доверяла, появился предатель, а ее близким грозит опасность, ей приходится предпринять важный шаг и возможно даже изменить все правила игры. Тем более, что Кардан оказался вовсе не таким слабым и безвольным королем, как думали все обитатели Фейриленда...',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/4/546404/cover.jpg',
        id: 5

    },
    {
        title: 'Королева ничего',
        author: 'Холли Блэк',
        annotation:'Власть легче завоевать, чем удержать. Джуд, Верховная королева Эльфхейма, лишена власти, но не сломлена. Даже находясь в изгнании, она не оставляет надежды вернуться ко Двору фейри. Отринув свои чувства к Кардану, Джуд спешит на помощь сестре, которая попала в беду в Фейриленде. Но знакомого Эльфхейма больше нет. Война на пороге. И Джуд должна собрать все свои силы, чтобы спасти то, что осталось. И даже возможно стать настоящей королевой монстров, если потребуется...',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/69/578569/cover.jpg',
        id: 6

    },
    {
        title: 'Только монстр',
        author: 'Ванесса Лен',
        annotation:'Джоанне шестнадцать. Она гостит в Лондоне у эксцентричных родственников, подрабатывает в музее и влюблена в обаятельного коллегу Ника. Всё меняется, когда девушке открывается пугающая истина: её семья и она сама – монстры. Они способны путешествовать во времени, и для этого крадут жизни других людей. А Ник – не просто милый парень: он легендарный убийца монстров. Чтобы уничтожить ненавистных чудовищ, он готов на всё.Желая спасти себя и свою семью, девушка объединяется с красивым и безжалостным Аароном Оливером, наследником другой семьи монстров. Но куда важнее принять саму себя. Ведь в этой истории она – не герой…',
        category: 'Фэнтези',
        img: 'http://flibusta.is/i/82/704782/cover.jpg',
        id: 7

    },
    {
        title: 'Принц Ардена',
        author: 'Софи Анри',
        annotation:'Сотни лет назад королевство Арден захватили южане. Кровь лилась рекой, пока правители не достигли соглашения: Хранителем Ардена станет принц-бастард Рэндалл. Ни король-отец, ни сводные братья никогда не жаловали Рэндалла, но тот жаждет справедливости. Чтобы укрепить позиции и спасти брата Уилла от нежеланного брака, Рэндалл решает взять в жены княжну Севера. Аврора – гордая и своевольная, она не собирается выходить за чужеземца и покидать родную страну. Скрепить брачный союз Рэндаллу может помочь особый обряд единения душ, известный в Ардене с древних времен. Но согласится ли на него Аврора, если узнает, кем является ее жених на самом деле? Любовь, ненависть, интриги и кровавые ритуалы. В Ардене выбор прост: либо спасение, либо отчаянный шаг в пропасть.',
        category: 'Исторические любовные романы, Исторические приключения, Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/76/732176/cover.jpg',
        id: 8

    },
    {
        title: 'Двойник Запада',
        author: 'Лия Арден',
        annotation:'Ее взяли в незнакомый дом и назвали чужим именем. Сказали, что она должна говорить, как ходить и что любить. Старый закон императора сделал ее безликим двойником дочери наместницы Запада, чья единственная задача – ценой своей свободы спасти жизнь той, кто важнее, ценнее, богаче. Ей осталось всего полгода до конца притворства, до возвращения в храм Западного Дракона – единственное место, которое она может назвать домом. Все меняется в одночасье, небо затягивают тучи, а истины прошлого оказываются ложью. Есть ли у нее хоть шанс на свободу или же старая цель незначительна в свете открывшейся правды?',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/68/705668/cover.jpg',
        id: 9
    },
    {
        title: 'Пятый Дракон',
        author: 'Лия Арден',
        annotation:'Истинная причина ненависти Пятого Дракона куда страшнее, чем Аша предполагала. Открытие переворачивает её представление о полученных знаниях в храме и повергает в пучину сомнений. Сможет ли она доверять своему дракону, как прежде?\n' +
            'Раян и Наён собирают остальных хранителей и союзников, чтобы освободить захваченные земли, но им не обойтись без помощи императора Кхорина, который видит немалую выгоду в падении провинции Запада.\n' +
            'Единственный способ остановить Пятого Дракона – это убить его настоящее тело. Однако сумеют ли его братья пойти на такой отчаянный шаг, ведь в действительности только он способен помочь им вернуть утраченное.\n' +
            'Грандиозная кульминация азиатской дилогии «Четыре дракона» Лии Арден, автора суперпопулярного цикла о Марах и Мороках, сказки для взрослых «Невесты Ноября» и тетралогии «Потомки Первых».\n' +
            'Совокупный тираж книг Лии Арден приближается к 800 000 экземпляров.\n' +
            'Ложь и предательство, дружба и любовь – где правда, где обман и кому можно верить? Аше придется разобраться во всем самой.\n' +
            'Могучие драконы, воплотившиеся в хранителях – кто они, всесильные богоподобные существа или заложники ситуации и своей недальновидности? Есть ли им дело до жизней простых смертных или они преследуют собственные цели, используя людей?\n' +
            'Битва за судьбу родины, за честь имени и за тех, кто дорог, за настоящие чувства, прошедшие испытания тяготами и лишениями – все сплетается в новой книге Лии Арден, доказывающей, что настоящая сила духа способна противостоять любым врагам.',
        category: 'Любовное фэнтези, любовно-фантастические романы',
        img: 'http://flibusta.is/i/25/742525/cover.jpg',
        id: 10

    },
]

export default bookCards