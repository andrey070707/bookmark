let apiProducts = [
    {
        id: 1660,
        name: "Amazon. От офиса в гараже до $10 млрд годового дохода",
        image: "amazon-ot-ofisa-v-garazhe-do-10-mlrd-godovogo-dokhoda-876.jpg",
        price: 399.9,
        body: `Розничная торговля переживает переходный период. Одни назовут это апокалипсисом, другие - цифровой трансформацией. В условиях, когда традиционные бизнес-модели вытесняются с рынка, офлайн магазины повально закрываются, и все больше розничных сетей объявляют о банкротстве, Amazon только наращивает обороты. В чем стратегия успеха компании, чья история началась с компьютера в гараже? Какое будущее ждет ритейл в условиях цифровой трансформации? Как обеспечить бизнесу финансовую неуязвимость? Ответы на эти вопросы вы найдете внутри.`,
    },
    {
        id: 1709,
        name: "Как работает Google",
        image: "kak-rabotaet-google-223.jpg",
        price: 399.9,
        body: `В эпоху, когда все меняется быстрее, чем успеваешь это заметить, лучший выход - привлечь умных, творческих людей и создать для них среду, в которой они могли бы придумывать новые идеи и развиваться.<br>"Как работает Google" расскажет, как этого добиться. Страница за страницей председатель совета директоров Эрик Шмидт и вице-президент Джонатан Розенберг раскрывают секреты, как им удалось построить великую компанию. Вы узнаете, как в Google развивают корпоративную культуру, привлекают талантливых специалистов, придумывают инновации, решают неразрешимые задачи, и все с многочисленными историями из жизни Google, которые публикуются впервые.`,
    },
    {
        id: 253,
        name: "Богатый Папа, Бедный Папа",
        image: "bogatyy-papa-bednyy-papa-941.jpg",
        price: 249.9,
        body: `Роберт Кийосаки убежден, что в школе наши дети не получают нужных финансовых знаний и потом всю жизнь работают ради денег, вместо того чтобы заставить деньги работать на себя. Он порадовал читателей новым изданием ставшей уже культовой книги — с изменениями и дополнениями для сегодняшнего мира, сегодняшних рыночных условий и 9 новыми разделами. К сожалению, в сфере образования мало что поменялось — школа до сих пор не дает подрастающему поколению финансовых азов. Научите детей обращаться с деньгами раньше, чем они столкнутся с материальными трудностями в нашем нестабильном мире!`,
    },
    {
        id: 1707,
        name: "Alibaba: The House That Jack Ma Built",
        image: "alibaba-the-house-that-jack-ma-built-116.jpg",
        price: 149.9,
        body: `An engrossing, insider’s account of how a teacher built one of the world’s most valuable companies—rivaling Walmart & Amazon—and forever reshaped the global economy.<br>In just a decade and half Jack Ma, a man from modest beginnings who started out as an English teacher, founded and built Alibaba into one of the world’s largest companies, an e-commerce empire on which hundreds of millions of Chinese consumers depend. Alibaba’s $25 billion IPO in 2014 was the largest global IPO ever. A Rockefeller of his age who is courted by CEOs and Presidents around the world, Jack is an icon for China’s booming private sector and the gatekeeper to hundreds of millions of middle class consumers.<br>Duncan Clark first met Jack in 1999 in the small apartment where Jack founded Alibaba. Granted unprecedented access to a wealth of new material including exclusive interviews, Clark draws on his own experience as an early advisor to Alibaba and two decades in China chronicling the Internet’s impact on the country to create an authoritative, compelling narrative account of Alibaba’s rise.`,
    },
    {
        id: 1650,
        name: "Продавец обуви. История компании Nike, рассказанная ее основателем",
        image: "prodavets-obuvi-istoriya-kompanii-nike-rasskazannaya-ee-osnovatelem-980.jpg",
        price: 499.9,
        body: `Nike - один из самых узнаваемых мировых брендов. Создатель компании - Фил Найт - один из богатейших людей, хотя еще в юности он не мог себе позволить купить кроссовки Adidas.<br>50 лет назад студент Орегонского университета и бегун на средние дистанции Фил Найт занял у отца 50 баксов и начал перепродавать кроссовки из Японии. Сегодня годовой оборот компании Nike составляет 30 миллиардов долларов. А пара найков найдется в шкафу у каждого - от президента до подростка.<br>Фил Найт - человек-загадка, он редко дает интервью. Эта книга - исповедь о создании компании, которой удалось подарить мечту миллионам людей.<br>Nike давно перестала ассоциироваться только с кроссовками. Это идеология, образ жизни, система ценностей. Эта книга расскажет, как все начиналось:<br>Что стало с официанткой, нарисовавшей логотип за 30 долларов?<br>Как авиаинженер из NASA придумал знаменитые Air Max?<br>Какова связь между вафельницей и инновационной рифлёной подошвой?<br>И сотни других грустных, поучительных, порой дурацких и невероятно откровенных рассказов из жизни компании, покорившей мир.`,
    },
];

let main = document.getElementById('main');
let sidebar = document.getElementById('sidebar');
let mainProduct = apiProducts[4];

function showMain() {
    main.innerHTML = `
    <div class="row g-2 my-3">
        <div class="col-4">
            <img src="img/${mainProduct['image']}" alt="" class="img-fluid border rounded-3">
        </div>
        <div class="col">
            <div class="h6">${mainProduct['name']}</div>
            <div class="h6">${mainProduct['price']} <small>TMT</small></div>
            <div class="small">${mainProduct['body']} <small>TMT</small></div>
        </div>
    </div>`;
}

function showSidebar() {
    sidebar.innerHTML = '';
    for (let i = 0; i < apiProducts.length; i++) {
        const product = apiProducts[i];
        if (mainProduct['id'] != product['id']) {
            sidebar.innerHTML += `
            <div class="row g-2 my-3">
                <div class="col-4">
                    <img src="img/${product['image']}" alt="" class="img-fluid border rounded-3">
                </div>
                <div class="col">
                    <div class="h6">${product['name']}</div>
                    <div class="h6">${product['price']} <small>TMT</small></div>
                    <button class="btn btn-secondary btn-sm" value="${i}">Show</button>
                </div>
            </div>`;
        }
    }
    showButton();
}

function showButton() {
    let btns = document.getElementsByClassName('btn');
    for (const btn of btns) {
        btn.addEventListener('click', function () {
            mainProduct = apiProducts[this.value];
            showMain();
            showSidebar();
        })
    }
}

showMain();
showSidebar();