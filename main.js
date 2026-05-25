const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5, // Kada je 20% elementa vidljivo
    rootMargin: '0px 0px -50px 0px' // Malo ranije pokreni
});

// Primeni na sve naslove
document.querySelectorAll('.title').forEach(title => {
    observer.observe(title);
});









document.addEventListener('DOMContentLoaded', function() {
    // Elementi za animaciju
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    // Opcije za observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Kada je 15% elementa vidljivo
    };
    
    // Callback funkcija
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj klasu 'animate' kada element uđe u viewport
                entry.target.classList.add('animate');
                
                // Opciono: prestani da posmatraš element kada je već animiran
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Kreiraj observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Počni da posmatraš sve elemente
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Dodatno: animiraj sve elemente odmah ako su već u viewport-u
    // Ovo je korisno kada se stranica učita direktno na sekciju
    function checkInitialView() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isInView = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
            );
            
            if (isInView) {
                element.classList.add('animate');
            }
        });
    }
    
    // Proveri inicijalno stanje
    setTimeout(checkInitialView, 100);
});





const citiesData = {
    'beograd': {
        name: 'Beograd',
        region: 'Srbija',
        description: 'Truba je simbol svakog velikog slavlja - od kraljevskih ceremonija do porodičnih veselja. Kroz generacije, postala je sinonim za najlepše trenutke.',
        content:'Sa preko 30 godina iskustva, Džipsi Trik je najtraženiji trubački orkestar u Beogradu. Sastavljen od majstora trube koji vole svoj posao, donosimo energiju na svaku proslavu.',
        
        stats: {
            performances: 120,
            weddings: 85,
            events: 35,
            since: 1995
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoja veselja','<b>Prepoznatljiv zvuk</b> - Beograd zna: kada svíra Džipsi Trik, slavlje je posebno'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Beogradu'],
        image: ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svadba-veselje.webp','trubac-truba-detalj.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubači sviraju na svadbi, gosti se vesele','Krupni kadar trubača sa zlatnom trubom']
    },
    'novi-sad': {
        name: 'Novi Sad',
        region: 'Srbija',
        description: 'Novosađani vole veselje i dobar provod, a Džipsi Trik je tu da svako slavlje pretvori u nezaboravno iskustvo.',
        content:'Orkestar Miloša i Peđe Stojilkovića prenosi atmosferu Guče direktno na vaše slavlje. Sa preko 30 godina iskustva, nastupamo na svim vrstama proslava u Novom Sadu i okolini.',
        stats: {
            performances: 65,
            weddings: 45,
            events: 20,
            since: 1998
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Novi Sad zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Novom Sadu'],
        image: ['ples-sa-gostima.webp', 'trubaci-dzipsi-trik-nastup.webp','trubaci-novi-sad-igra.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubački orkestar Džipsi Trik na nastupu','Gosti igraju kolo uz trubače u Novom Sadu']
    },
    'valjevo': {
        name: 'Valjevo',
        region: 'Srbija',
        description: 'Truba je, tokom čitave istorije, pratila svečane i radosne trenutke – od kraljevskih dvora do porodičnih veselja. I danas, njen zvuk označava najlepše proslave.',
        content:'Sa preko 30 godina iskustva, Džipsi Trik je najtraženiji trubački orkestar u Valjevu i široj okolini. Sastavljen od majstora trube koji vole svoj posao, donosimo energiju i nezaboravne trenutke na svako slavlje.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Valjevo zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Valjevu'],
        image: ['ples-sa-gostima.webp', 'trubaci-dzipsi-trik-nastup.webp','trubaci-valjevo-igra.webp'],
        alt:['Gosti igraju uz trubače u Valjevu','Trubački orkestar Džipsi Trik na nastupu','Vesela atmosfera na slavlju u Valjevu']
    },
     'pozarevac': {
        name: 'Požarevac',
        region: 'Srbija',
        description: 'Kada govore trube Džipsi Trik, slavlje je zagarantovano. Već dve decenije, naš zvuk je sinonim za vrhunsku zabavu i nezaboravne trenutke na svim vrstama proslava u Požarevcu.',
        content:'Sa preko 20 godina iskustva, Džipsi Trik je orkestar koji Požarevac preporučuje. Nastupili smo na hiljadama slavlja, sa estradnim zvezdama i za najzahtevnije domaćine – uvek sa istim kvalitetom i energijom.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Požarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Požarevcu'],
        image: ['trubac-truba-detalj.webp', 'trubaci-pozarevac-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Krupni kadar trubača sa zlatnom trubom','Trubački orkestar Džipsi Trik u Požarevcu','Trubači sviraju na svadbi, gosti se vesele']
    },
    'pancevo': {
        name: 'Pančevo',
        region: 'Srbija',
        description: 'Pančevo je prepoznalo najbolje – naš orkestar je taj o kome se priča i koji osvaja srca. Kada nastupa Džipsi Trik, slavlje postaje nezaboravan događaj, a video snimci i fotografije dele se hiljadama puta.',
        content:'Sa decenijama iskustva, nastupima sa estradnim zvezdama i na glamuroznim proslavama, mi smo prvi izbor za one koji žele garantovan provod i vrhunsku atmosферu.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Pančevo zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Pančevu'],
        image: ['trubaci-pancevo-orkestar.webp', 'trubac-truba-detalj.webp','trubaci-pancevo-svadba.webp'],
        alt: ['Trubački orkestar Džipsi Trik u Pančevu','Krupni kadar trubača sa zlatnom trubom','Trubači sviraju na svadbi u Pančevu']
    },
    'vrsac': {
        name: 'Vršac',
        region: 'Srbija',
        description: 'Kada želite najbolje slavlje, lepota trubačke muzike i zvuk koji oduševljava – Vršac zna da je odgovor upravo u našem orkestru. Već više od dve decenije, mi smo taj koji pretproslave u nezaboravne trenutke.',
        content:'Sa preko 20 godina iskustva, nastupima na televiziji i sa vrhunskim estradnim umetnicima, Džipsi Trik je sinonim za provod bez kompromisa. Naša ljubav prema trubi i tradicija koju nosimo čine svako slavlje posebnim.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Vršac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Vršcu'],
        image: ['trubaci-vrsac-orkestar.webp', 'trubaci-vrsac-veselje.webp','trubaci-vrsac-torta.webp'],
        alt: ['Trubački orkestar Džipsi Trik u Vršcu','Gosti se vesele uz trubače u Vršcu','Svečano iznošenje torte uz trubače']
    },
    'belacrkva': {
        name: 'Bela Crkva',
        region: 'Srbija',
        description: 'Kada želite da se prodoran zvuk truba čuje celim krajem, da atmosfera na vašem slavlju dostigne vrhunac i da gosti oduševljeno priseću vašeg dana – poziv našeg orkestra je siguran izbor. Mi smo trubači koje Bela Crkva preporučuje.',
        content:'Sa iskustvom stečenim na hiljadama slavlja, nagradama i nastupima sa estradnim zvezdama, Džipsi Trik donosi vrhunsku energiju i muzičku lepotu na svaku proslavu.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Bela Crkva zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Beloj Crkvi'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svadba-veselje.webp','trubac-truba-detalj.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubači sviraju na svadbi, gosti se vesele','Krupni kadar trubača sa zlatnom trubom']
    },
    'sid': {
        name: 'Šid',
        region: 'Srbija',
        description: 'Na svakom veselju u Šidu, kada se čuje naš zvuk – zna se da je provod zagarantovan. Mi donosimo energiju, tradiciju i vrhunsku trubačku umetnost koja će vaš dan učiniti nezaboravnim.',
        content:'Sa decenijama iskustva, nastupima za poznate ličnosti i medijsku pažnju, Džipsi Trik je sinonim za najbolju muzičku zabavu na svim vrstama slavlja.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Šid zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Šidu'],
        image :['trubaci-dzipsi-trik-nastup.webp', 'trubac-truba-detalj.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Krupni kadar trubača sa zlatnom trubom','Trubači sviraju na svadbi, gosti se vesele']
    },
    'lazarevac': {
        name: 'Lazarevac',
        region: 'Srbija',
        description: 'Kada u Lazarevcu pravite vaše najbolje slavlje, naš zvuk je garancija nezaboravnog provoda koji traje do kasno u noć i postaje priča celog grada.',
        content:'Sa decenijama iskustva, nastupima širom Srbije i Evrope, Džipsi Trik je sinonim za vrhunsku trubačku zabavu na svim vrstama proslava.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Lazarevcu'],
        image :['trubaci-dzipsi-trik-nastup.webp', 'trubaci-lazarevac-orkestar.webp','trubaci-lazarevac-svadba.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubački orkestar Džipsi Trik u Lazarevcu','Svadbeno veselje u Lazarevcu uz trubače']
    },
    'ub': {
        name: 'Ub',
        region: 'Srbija',
        description: 'Kada pravite veselje na Ubu, najvažnije je da gosti budu zadovoljni, a oni će to biti tek kada čuju vrhunske zvuke našeg orkestra, koji garantuje provod do kasnih sati.',
        content:'Sa hiljadama nastupa širom Srbije i Evrope, bogatim repertoarom od preko 2.000 pesama i tradicijom koja seže decenijama unazad, Džipsi Trik je sinonim za nezaboravno slavlje i radost koju gosti pamte godinama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Ubu'],
        image :['trubaci-ub-orkestar.webp', 'trubaci-ub-veselje.webp','trubac-truba-detalj.webp'],
        alt:['Trubački orkestar Džipsi Trik na Ubu','Atmosfera veselja u Ubu uz trubače','Krupni kadar trubača sa zlatnom trubom']
    },
    'sabac': {
        name: 'Šabac',
        region: 'Srbija',
        description: 'Veseljima nema kraja kada na njima nastupi naš orkestar – gosti uživaju uz zvuke nenadmašnog trubačkog sastava, a vaše slavlje postaje centralna tema čitavog grada.',
        content:'Sa hiljadama nastupa širom Srbije i Evrope, bogatim repertoarom od preko 2.000 pesama i tradicijom koja seže decenijama unazad, Džipsi Trik je sinonim za nezaboravno slavlje i radost koju gosti pamte godinama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Šabcu'],
        image :['trubaci-dzipsi-trik-nastup.webp', 'trubaci-sabac-orkestar.webp','trubaci-sabac-svadba.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubački orkestar Džipsi Trik u Šapcu','Trubači sviraju na svadbi u Šapcu']
    },

    'kragujevac': {
        name: 'Kragujevac',
        region: 'Srbija',
        description: 'Trubači Kragujevac su orkestar poznat po mnogobrojnim nastupima sa najpopularnijim estradnim umetnicima i glamuroznim privatnim veseljima – kada želite vrhunski provod i sigurnost da će svi gosti uživati, naš orkestar je najbolji izbor.',
        content:'Sa članovima koji potiču iz trubačkih porodica i trubu sviraju od najranijeg detinjstva, bogatim nastupima na televizijama, festivalima i koncertima širom inostranstva, te mogućnošću nastupa u narodnoj nošnji, svečanim odelima ili ležernoj uniformi – Džipsi Trik donosi dušu, tradiciju i nezaboravnu atmosferu na svako vaše slavlje.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Kragujevcu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svadba-veselje.webp','trubaci-kragujevac-orkestar.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubači sviraju na svadbi, gosti se vesele','Orkestar Džipsi Trik u Kragujevcu']
    },
    'veliko-gradiste': {
        name: 'Veliko Gradište',
        region: 'Srbija',
        description: 'Orkestar koji je tu da na vašim važnim događajima – od veridbi, rođenja dece, punoletstava do matura i diplomiranja – najboljom muzikom ulepša svako slavlje i ostavi trenutke za pamćenje.',
        content:'Sa 10 majstora trube, repertoarom od preko 2.000 pesama i kola, nastupima sa najvećim estradnim umetnicima i medijskim ličnostima, te ljubavlju prema trubi koja se prenosi kroz generacije trubačkih porodica – Džipsi Trik garantuje vrhunsku atmosferu, provod i more lajkova na društvenim mrežama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Velikom Gradištu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-veliko-gradiste-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Velikom Gradištu','Trubači sviraju na svadbi, gosti se vesele']
    },
 'smederevo': {
        name: 'Smederevo',
        region: 'Srbija',
        description: 'Od davnih vremena, još iz doba Rima, trube su najavljivale svečanosti, pobede i mir – a danas u Smederevu, naš orkestar nastavlja tu tradiciju, donoseći vrhunsku zabavu i atmosferu o kojoj priča ceo grad.',
        content:'Sa članovima koji sviraju od najmlađih dana, decenijama iskustva, nastupima sa estradnim umetnicima, javnim ličnostima i sportistima, te repertoarom od preko 2.000 pesama i kola – Džipsi Trik je orkestar čiji snimci obilaze društvene mreže, a svako veselje pretvara u događaj o kome se priča.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Smederevu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-smederevo-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Smederevu','Trubači sviraju na svadbi, gosti se vesele']
    },
    'negotin': {
        name: 'Negotin',
        region: 'Srbija',
        description: 'Odlično znaju šta vaši gosti vole – uz pesme, najlepše hitove i kola po vašem izboru, naš orkestar stvara atmosferu o kojoj svi pričaju, a snimci sa veselja postaju hitovi na društvenim mrežama.',
        content:'Sa 10 vrhunskih majstora trube koji potiču iz trubačkih porodica, decenijama iskustva, nastupima sa estradnim zvezdama i na glamuroznim slavljima, te repertoarom koji obuhvata sve od izvorne, starogradske i folk muzike do džeza, filmske i klasične – Džipsi Trik garantuje nezaboravan provod i veselje koje se pamti godinama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferу','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Negotinu'],
        image:  ['trubac-truba-detalj.webp', 'trubaci-negotin-orkestar.webp','trubaci-negotin-veselje.webp'],
        alt:['Krupni kadar trubača sa zlatnom trubom','Orkestar Džipsi Trik u Negotinu','Vesela atmosfera na slavlju u Negotinu']
    },

     'bor': {
        name: 'Bor',
        region: 'Srbija',
        description: 'Najbolji izbor za sve vaše srećne događaje – od rođenja, krštenja i veridbi do venčanja, rođendana i punoletstava – uz nas svaki trenutak postaje nezaboravan, a vaši gosti odlaze oduševljeni.',
        content:'Sa 10 majstora trube, repertoarom od preko 2.000 pesama i kola, nastupima sa estradnim zvezdama i snimcima koji imaju najviše lajkova na društvenim mrežama – Džipsi Trik dolazi u svečanim odelima, ležernoj uniformi ili narodnoj nošnji, po vašoj želji, i garantuje provod o kome će se pričati godinama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Boru'],
        image:  ['trubaci-svadba-veselje.webp', 'trubaci-bor-orkestar.webp','trubaci-dzipsi-trik-nastup.webp'],
        alt:['Trubači sviraju na svadbi, gosti se vesele','Orkestar Džipsi Trik u Boru','Trubački orkestar Džipsi Trik na nastupu']
    },



      'kladovo': {
        name: 'Kladovo',
        region: 'Srbija',
        description: 'Svaki dan u godini razlog je za slavlje – a u Kladovu se na slavlje najradije poziva naš trubački orkestar, koji svira sve vrste pesama i kola i garantuje da će svi gosti biti zadovoljni.',
        content:'Sa više od 20 godina iskustva, preko 2.000 numera na repertoaru, nastupima na festivalima, televizijskim emisijama i koncertima sa estradnim umetnicima, te 10 majstora trube koji na vaše slavlje dolaze u svečanim odelima, ležernoj uniformi ili narodnoj nošnji – Džipsi Trik je orkestar čiji snimci imaju hiljade pregleda, a vaše veselje pretvara u događaj o kome se priča.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Kladovu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svadba-veselje.webp','trubac-truba-detalj.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubači sviraju na svadbi, gosti se vesele','Krupni kadar trubača sa zlatnom trubom']
    },

      'zajecar': {
        name: 'Zaječar',
        region: 'Srbija',
        description: 'Iz godine u godinu, na slavljima, venčanjima i svečanostima, naši trubači priređuju odličan provod – jer još od starih vremena, truba je instrument koji se najradije koristi na svakoj veridbi, venčanju, krštenju i punoletstvu.',
        content:'Sa 10 majstora trube, repertoarom od preko 2.000 pesama i kola, nastupima sa estradnim zvezdama, gostovanjima na TV emisijama i pobedama na festivalima trubačke muzike – Džipsi Trik je orkestar koji prepoznaje emocije gostiju i prilagođava ritam i pesme vašem slavlju, garantujući nezaboravan provod.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Zaječaru'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svadba-veselje.webp','trubac-truba-detalj.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Trubači sviraju na svadbi, gosti se vesele','Krupni kadar trubača sa zlatnom trubom']
    },

    'svilajnac': {
        name: 'Svilajnac',
        region: 'Srbija',
        description: 'Uz najbolje zvuke trube, svako veselje može da počne – a kada pravite slavlje u Svilajncu, naš orkestar vam je na raspolaganju za rođendane, punoletstva, veridbe, venčanja, godišnjice braka i sve druge srećne događaje.',
        content:'Sa dugogodišnjim iskustvom, repertoarom od preko 2.000 pesama i kola (od izvorne, starogradske i estradne muzike do najnovijih folk hitova, džeza, filmske i klasične muzike), te stotinama hiljada zadovoljnih gostiju i domaćina koji nas iz godine u godinu preporučuju – Džipsi Trik garantuje nezaboravan provod, snimke koji se rado dele na društvenim mrežama i atmosferu u kojoj se i najpovučeniji hvataju u kolo.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Svilajncu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-svilajnac-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Svilajncu','Trubači sviraju na svadbi, gosti se vesele']
    },

        'petrovac-na-mlavi': {
        name: 'Petrovac na mlavi',
        region: 'Srbija',
        description: 'Kada poželite vrhunski provod na vašem slavlju, da se vaši gosti vesele, opuste i budu srećni – naš orkestar je tu, jer u Petrovcu na Mlavi trubačka muzika se često čuje, a mi smo majstori koji toj tradiciji daju najlepši zvuk.',
        content:'Sa članovima koji potiču iz trubačkih porodica i za koje truba nije instrument već način života, repertoarom od preko 2.000 pesama i kola, nastupima sa estradnim umetnicima i medijskim ličnostima, te snimcima koji postaju hitovi sa najvećim brojem lajkova na društvenim mrežama – Džipsi Trik donosi emociju, sviranje iz srca i garanciju da će vaše veselje biti događaj o kome se priča.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Petrovcu na Mlavu'],
        image:  ['trubaci-petrovac-na-mlavi-orkestar.webp', 'trubaci-petrovac-na-mlavi-kolo.webp','trubaci-petrovac-na-mlavi-torta.webp'],
        alt:['Orkestar Džipsi Trik u Petrovcu na Mlavi','Gosti igraju kolo uz trubače na slavlju','Svečano iznošenje torte uz trubače u Petrovcu na Mlavi']
    },

    'podgorica': {
        name: 'Podgorica',
        region: 'Crna Gora',
        description: 'Najbolji domaćini ostaju upamćeni po nezaboravnom provodu – obradujte sebe, familiju, prijatelje i sve najmilije uz trubače o kojima priča cela Crna Gora, sa repertoarom od preko 2.000 numera i garancijom da će vaše veselje biti događaj za pamćenje.',
        content:'Sa nastupima na svim vrstama slavlja – od rođenja dece, krštenja, punoletstava, veridbi do venčanja – i podrškom najvećim estradnim umetnicima na koncertima, Džipsi Trik svira sve vrste muzike: od najstarije izvorne do najnovijih hitova, narodnu, zabavnu, pop, rok, džez, filmsku i valcere, garantujući vrhunsku atmosferu i zahvalne goste koji će vam čestitati na sjajnom provodu.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Podgorici'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-podgorica-orkestar.webp','trubaci-podgorica-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Podgorici','Veselje u Podgorici uz trubače Džipsi Trik']
    },

    'budva': {
        name: 'Budva',
        region: 'Crna Gora',
        description: 'Na svakom veselju, naš orkestar vrhunskih trubačkih umetnika spreman je da svojim nastupom ukrasi sve važne trenutke – od dočeka kumova, rodbine i gostiju, do podizanja čaše i nazdravljanja, jer su iskusni trubači Budva sinonim za proslavu koja se pamti.',
        content:'Sa 10 majstora trube koji sviraju od najranijeg detinjstva i potiču iz trubačkih porodica, godinama nastupa u Crnoj Gori i regionu, te pozivima od estradnih umetnika – Džipsi Trik dolazi u svečanim odelima ili narodnoj nošnji, po vašem izboru, i svečano najavljuje iznošenje torte, prati svatove, nastupa kod opštine i crkve, garantujući da će vaše slavlje biti događaj o kome se priča godinama.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Budvi'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-budva-orkestar.webp','trubaci-budva-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Budvi','Trubači sviraju na proslavi u Budvi']
    },

    'kotor': {
        name: 'Kotor',
        region: 'Crna Gora',
        description: 'Na vašem slavlju u Kotoru, naš orkestar dolazi da vama, vašim gostima, porodici i prijateljima priredi nezaboravan provod – u bilo kom trenutku, bilo kog dana u godini, uz najlepše pesme i kola koja podižu atmosferu do usijanja.',
        content:'Sa repertoarom od preko 2.000 numera koji obuhvata sve od izvorne, starogradske i novokomponovane muzike, preko filmskih hitova i džeza, do valcera i estradnih hitova – Džipsi Trik svira sve što vi i vaši gosti poželite, a godinama iskustva, nastupi sa estradnim umetnicima i javnim ličnostima, te svečano najavljivanje iznošenja torte i praćenje svatova od kuće do crkve i opštine, čine nas orkestrom koji garantuje nezaboravno slavlje i zahvalne goste koji će tražiti vaš kontakt.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Kotoru'],
        image:  ['trubaci-kotor-orkestar.webp', 'trubaci-svadba-veselje.webp','trubaci-kotor-veselje.webp'],
        alt:['Orkestar Džipsi Trik u Kotoru','Trubači sviraju na svadbi, gosti se vesele','Atmosfera veselja u Kotoru uz trubače']
    },
    'herceg-novi': {
        name: 'Herceg Novi',
        region: 'Crna Gora',
        description: 'Bilo da pravite veselje povodom rođenja deteta, krštenja, punoletstva, veridbe ili venčanja – uz naš orkestar vaši gosti će uživati u vrhunskom nastupu i najboljem izboru pesama i kola, onih koje najviše želite na vašem slavlju.',
        content:'Sa više od 20 godina iskustva, članovima koji potiču iz trubačkih porodica i trubu sviraju od najranijeg detinjstva, repertoarom od preko 2.000 pesama i kola (od izvorne, starogradske i narodne muzike do estradnih hitova, džeza, filmske, klasične muzike i valcera) – Džipsi Trik je majstor trubačke umetnosti koji svečano najavljuje tortu, ispunjava svaku želju domaćina i garantuje provod o kome će svi pričati.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Hercegu Novom'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-herceg-novi-orkestar.webp','trubaci-herceg-novi-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Herceg Novom','Veselje u Herceg Novom uz trubače']
    },
    'tivat': {
        name: 'Tivat',
        region: 'Crna Gora',
        description: 'Još od davnih vremena uz trubu se veselilo i slavilo – a kada u Tivtu želite da vaše slavlje bude događaj o kome se priča, naš orkestar od 10 vrhunskih umetnika majstora trube svira sve pesme i kola koje vi i vaši gosti najviše volite.',
        content:'Sa repertoarom koji obuhvata sve vrste muzike, nastupima na televiziji u pratnji najvećih estradnih umetnika, tradicijom koja seže iz porodica u kojima se truba neguje generacijama, te mogućnošću dolaska u svečanim odelima ili narodnoj nošnji po vašem izboru – Džipsi Trik garantuje da će vaši gosti već od prvog tona zaigrati kolo, a domaćini nas iznova pozivati na sve proslave.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Tivotu'],
        image:  ['trubaci-tivat-orkestar.webp', 'trubac-truba-detalj.webp','trubaci-svadba-veselje.webp'],
        alt:['Orkestar Džipsi Trik u Tivtu','Krupni kadar trubača sa zlatnom trubom','Trubači sviraju na svadbi, gosti se vesele']
    },

     

     'bar': {
        name: 'Bar',
        region: 'Crna Gora',
        description: 'Kada gledamo najbolje pevače iz celog regiona, često nismo ni svesni da sa njima slušamo i naš orkestar – jer pod vođstvom Miloša i Peđe Stojilkovića, Džipsi Trik je godinama prisutan na televizijama i kao pratnja poznatim estradnim umetnicima, postavši najpopularnije trubačko ime na medijskom nebu celog regiona.',
        content:'Sa repertoarom koji obuhvata sve vrste muzike, nastupima na televiziji u pratnji najvećih estradnih umetnika, tradicijom koja seže iz porodica u kojima se truba neguje generacijama, te mogućnošću dolaska u svečanim odelima ili narodnoj nošnji po vašem izboru – Džipsi Trik garantuje da će vaši gosti već od prvog tona zaigrati kolo, a domaćini nas iznova pozivati na sve proslave.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Baru'],
        image:  ['trubaci-bar-orkestar.webp', 'trubaci-bar-veselje.webp','trubaci-svadba-veselje.webp'],
        alt:['Orkestar Džipsi Trik u Baru','Veselje u Baru uz trubače','Trubači sviraju na svadbi, gosti se vesele']
    },

    'niksic': {
        name: 'Nikšić',
        region: 'Crna Gora',
        description: 'Svi u Nikšiću vole dobru muziku i dobru svirku – a truba i trubačka muzika poznati su još od starih vremena kao najavljivači srećnih događaja. Bez obzira da li pravite svadbu, punoletstvo, godišnjicu braka ili slavite nekim drugim povodom, naš orkestar dolazi da sjajnom trubačkom muzikom podigne atmosferu na vašem slavlju.',
        content:'Sa majstorima trube koji potiču iz porodica u kojima se znanje i ljubav prema instrumentu prenose s kolena na koleno, repertoarom koji obuhvata sve od izvorne, starogradske i narodne muzike do najmodernijih estradnih hitova, te nastupima sa estradnim umetnicima na televizijama i festivalima – Džipsi Trik svečano najavljuje iznošenje torte i garantuje da će vaše veselje biti događaj o kome se priča.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Nikšiću'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-niksic-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Nikšiću','Trubači sviraju na svadbi, gosti se vesele']
    },

     'petrovac': {
        name: 'Petrovac',
        region: 'Crna Gora',
        description: 'Kad naš orkestar najboljih umetnika nastupi na vašem veselju, događaj će biti zapamćen kao najbolje slavlje u celom mestu – jer rođenje deteta, rođendan, punoletstvo, veridba, venčanje i sva druga slavlja zaslužuju provod do jutra uz vrhunsku trubačku muziku.',
        content:'Sa 10 majstora trube koji potiču iz trubačkih porodica i za koje je truba više od instrumenta – nastavak porodične tradicije, repertoarom od preko 2.000 numera (od izvorne, narodne i starogradske muzike do najnovijih estradnih hitova, popa, roka, džeza, stranih pesama i filmske muzike), te nastupima sa estradnim umetnicima kao njihova muzička pratnja – Džipsi Trik dolazi tačno u dogovoreno vreme, svečano najavljuje iznošenje torte i garantuje da ćete kao domaćin ostati upamćeni po savršenoj proslavi o kojoj će svi pričati.',
        stats: {
            performances: 42,
            weddings: 30,
            events: 12,
            since: 2000
        },
        offers: ['<b>Najširi repertoar</b> - 2.000+ pesama (narodna, moderna, strana, džez, filmska, klasična)', '<b>Sve vrste događaja</b> - venčanja, krštenja, rođendani, korporativne proslave, dočecí, svečanosti', '<b>Prilagođavanje</b> - svíramo sve po vašoj želji, bilo da je u ležernoj uniformi, svečanom odelu ili narodnoj nošnji'],
        brag:['<b>Iskustvo</b> - tri decenije na sceni, nastupi u Srbiji i inostranstvu','<b>Kvalitet</b> - vrhunski trubački umetnici, precizno izvođenje','<b>Preporuke</b> -  preporučuju nas domaćini, prijatelji, a često i medijske ličnosti','<b>Atmosfera</b> - podižemo raspoloženje do neba, gosti pevaju i igraju od prvih taktova'],
        gains:['Gosti koji se vesele uz naše trube','Fotografije i snimke koje gosti rado dele na društvenim mrežama','Atmosferu pravog srpskog veselja u vašoj prostoriji ili na otvorenom','Komentare prijatelja: "Odličan izbor trubača!"'],
        advantages:['<b>Ponavljajuće rezervacije</b>- domaćini nas zovu i za sledeća slavlja','<b>Gosti traže naše kontakte</b> - čuju kako svíramo i žele nas za svoја veselja','<b>Prepoznatljiv zvuk</b> - Lazarevac zna: kada svíra Džipsi Trik, slavlje je posebno','Svečano iznošenje torte, doček mladenaca, muzika kod crkve, opštine, restorana – sve obeležavamo nezaboravnim zvukom trube'],
        conclusion:['Vrhunsku muziku','Nezaboravnu atmosferu','Zadovoljne goste','Ponovno pozivanje'],
        sname:['Petrovcu'],
        image:  ['trubaci-dzipsi-trik-nastup.webp', 'trubaci-petrovac-orkestar.webp','trubaci-svadba-veselje.webp'],
        alt:['Trubački orkestar Džipsi Trik na nastupu','Orkestar Džipsi Trik u Petrovcu','Trubači sviraju na svadbi, gosti se vesele']
    },



};

// Kada se stranica učita
$(document).ready(function() {
    
    // 1. KLIK NA GRAD
    $('.city-link').click(function(e) {
        e.preventDefault();
        
        // Ukloni aktivnu klasu sa svih
        $('.city-link').removeClass('active');
        // Dodaj aktivnu klasu na kliknuti
        $(this).addClass('active');
        
        // Uzmi podatke o gradu
        const cityId = $(this).data('city');
        const cityData = citiesData[cityId];
        
        if (cityData) {
            // Ažuriraj zaglavlje
            $('#cityName').text(cityData.name);
            $('#citySubtitle').text(`${cityData.region} - Mesto naših nezaboravnih nastupa`);
            
            // Kreiraj HTML za grad
            const cityHTML = `
                <div class="city-info">
                    <div class="city-description">
                        <h3>${cityData.name} nastupi:</h3>
                        <p>${cityData.description}</p>
                        <h4>Džipsi trik - trubački orkestar koji oduševljava ${cityData.name} </h4>
                        <p>${cityData.content}</p>
                        
                        <h4>Šta nudimo:</h4>
                        <ul class="offer-list">
                            ${cityData.offers.map(offers => `<li>${offers}</li>`).join('')}
                        </ul>
                        <h4>Zašto smo najbolji:</h4>
                        <ol class="offer-list">
                            ${cityData.brag.map(brag => `<li>${brag}</li>`).join('')}
                        </ol>
                        <h4>Šta dobijate:</h4>
                        <ul class="offer-list">
                            ${cityData.gains.map(gains => `<li>${gains}</li>`).join('')}
                        </ul>
                        <h4>Naše prednosti:</h4>
                        <ul class="offer-list">
                            ${cityData.advantages.map(advantages => `<li>${advantages}</li>`).join('')}
                            

                        </ul>
                        <h4> Za vašu proslavu na ${cityData.sname} koja će ostati u sećanju, izaberite trubače koji garantuju:</h4>
                        <ul class="offer-list">

                            ${cityData.conclusion.map(conclusion => `<li>${conclusion}</li>`).join('')}

                        </ul>
                    </div>
                    

                   
                    
                    <div class="city-image" style="display: flex; flex-direction:column;align-items: center;justify-content:space-between;">
                         
                        
                        <img src="images/cities/${cityData.image[0]}" alt="${cityData.alt[0]}" loading="lazy" style="border-radius: 10px; margin:20px 0;" width="960" height="720" />
                       
                    
            
                        
                        <img src="images/cities/${cityData.image[1]}" alt="${cityData.alt[1]}" loading="lazy" style="border-radius: 10px; margin:20px 0;" width="960" height="720" />
                           
                    
                        

                        
                        <img src="images/cities/${cityData.image[2]}" alt="${cityData.alt[2]}" loading="lazy" style="border-radius: 10px; margin:20px 0;" width="960" height="720" />
                            
                       
                        
                        
                    </div>
                 
                    
                </div>
                
                <div class="city-stats-grid">
                    <div class="stat-box">
                        <span class="stat-number">${cityData.stats.performances}</span>
                        <span class="stat-label">Ukupno nastupa</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">${cityData.stats.weddings}</span>
                        <span class="stat-label">Venčanja</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">${cityData.stats.events}</span>
                        <span class="stat-label">Drugih događaja</span>
                    </div>
                </div>
                
                <div class="city-cta">
                    <h3>Planirate događaj u ${cityData.sname}?</h3>
                    <p>Kontaktirajte nas da proverimo dostupnost i napravimo ponudu specijalno za vaš događaj.</p>
                    <a href="kontakt.html" class="btn-city" style="display: inline-block; background: #d4af37; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-family: 'Playfair Display', serif; font-weight: 600; margin-top: 15px;">
                        <i class="fas fa-calendar-check"></i> Rezervišite termin
                    </a>
                </div>
            `;
            
            // Prikaži sadržaj
            $('#cityDetails').html(cityHTML);
            
            // Animiraj prikaz
            $('#cityDetails').hide().fadeIn(500);
            
            // Skroluj do grad sadržaja
            $('html, body').animate({
                scrollTop: $('.city-content-area').offset().top - 100
            }, 800);
        }
    });
    
    // 2. PRETRAGA GRADOVA
    $('#citySearch').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        if (searchTerm.length === 0) {
            // Prikaži sve gradove
            $('.city-group').show();
            $('.city-items li').show();
        } else {
            // Sakrij sve grupe
            $('.city-group').hide();
            
            // Proveri svaki grad
            $('.city-link').each(function() {
                const cityText = $(this).text().toLowerCase();
                const li = $(this).parent();
                const group = li.closest('.city-group');
                
                if (cityText.includes(searchTerm)) {
                    li.show();
                    group.show();
                } else {
                    li.hide();
                }
            });
        }
    });
    
    // 3. FILTRIRANJE PO REGIONU (opciono)
    $('.group-title').click(function() {
        $(this).next('.city-items').slideToggle(300);
        $(this).toggleClass('collapsed');
    });
    
    // 4. PRIKAŽI UKUPAN BROJ GRADOVA
    const totalCities = $('.city-link').length;
    $('#totalCities').text(totalCities + '+');
    
    // 5. DEFAULT KLIK NA BEOGRAD (opciono)
    setTimeout(function() {
        $('.city-link[data-city="beograd"]').click();
    }, 1000);
    
    // 6. URL HASH SUPPORT - da radi sa linkovima
    if (window.location.hash) {
        const cityFromHash = window.location.hash.substring(1);
        const cityLink = $(`.city-link[data-city="${cityFromHash}"]`);
        if (cityLink.length) {
            cityLink.click();
        }
    }
    
    // 7. UPDATE URL KADA SE KLIKNE GRAD
    $(document).on('click', '.city-link', function() {
        const cityId = $(this).data('city');
        history.pushState(null, null, `#${cityId}`);
    });























 $('.category-tab').click(function() {
                // Ukloni aktivnu klasu sa svih tabova
                $('.category-tab').removeClass('active');
                // Dodaj aktivnu klasu na kliknuti tab
                $(this).addClass('active');
                
                // Uzmi ID kategorije
                const categoryId = $(this).data('category');
                
                // Sakrij sve kategorije
                $('.category-content').removeClass('active');
                // Prikaži izabranu kategoriju
                $('#' + categoryId).addClass('active');
            });

            // Pretraga pesama
            $('#searchSongs').on('input', function() {
                const searchTerm = $(this).val().toLowerCase();
                
                if (searchTerm.length > 0) {
                    // Prolazimo kroz sve aktivne kategorije
                    $('.category-content.active .song-card').each(function() {
                        const songName = $(this).find('.song-name').text().toLowerCase();
                        const songArtist = $(this).find('.song-artist').text().toLowerCase();
                        
                        if (songName.includes(searchTerm) || songArtist.includes(searchTerm)) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                    
                    // Ako nema rezultata
                    if ($('.category-content.active .song-card:visible').length === 0) {
                        if ($('.no-results').length === 0) {
                            $('.category-content.active .songs-grid').after('<div class="no-results"><i class="fas fa-search"></i> Nema rezultata za vašu pretragu</div>');
                        }
                    } else {
                        $('.no-results').remove();
                    }
                } else {
                    // Prikaži sve pesme
                    $('.category-content.active .song-card').show();
                    $('.no-results').remove();
                }
            });

            // Smooth scroll za linkove
            $('a[href^="#"]').click(function(e) {
                e.preventDefault();
                const target = $(this).attr('href');
                if (target !== '#') {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - 100
                    }, 800);
                }
            });


















             function updateCounters() {
        $('.category-content.active').each(function() {
            const $container = $(this);
            const $items = $container.find('.song-card, .kolo-card');
            const total = $items.length;
            const visible = $items.filter(':visible').length;
            const hiddenCount = $items.filter('.hidden-song').length;
            const initiallyShown = total - hiddenCount;
            const extraShown = visible - initiallyShown;
            const shownCount = initiallyShown + extraShown;
            $container.find('.counter-text').text(`Prikazano ${shownCount} od ${total} pesama`);
        });
    }

    // --- Klik na "Vidi još" ---
        $('.load-more-btn').click(function() {
            
            const $container = $(this).closest('.category-content').find('.songs-grid, .kolo-items');
            const hiddenItems = $container.find('.hidden-song').slice(0, 10);
            hiddenItems.removeClass('hidden-song').css('display', '');
            
            if ($container.find('.hidden-song').length === 0) {
            $(this).hide();
            }
        updateCounters();

       console.log($('.category-content.active .hidden-song').length);
    });

    

    // --- Promena kategorije (tab) ---
    $('.category-tab').click(function() {
        $('.category-tab').removeClass('active');
        $(this).addClass('active');
        const categoryId = $(this).data('category');
        $('.category-content').removeClass('active');
        $('#' + categoryId).addClass('active');
        // Resetuj prikaz: sakrij sve hidden-song, prikaži ostale
        const $activeCat = $('.category-content.active');
        $activeCat.find('.song-card, .kolo-card').show(); // prvo sve prikaži
        $activeCat.find('.hidden-song').hide(); // ponovo sakrij skrivene
        $activeCat.find('.load-more-btn').show(); // prikaži dugme ako je bilo sakriveno
        updateCounters();
    });

    // --- Pretraga (modifikacija postojećeg koda) ---
    function normalizeDiacritics(str) {
    const map = {
        'š': 's', 'Š': 's',
        'č': 'c', 'Č': 'c',
        'ć': 'c', 'Ć': 'c',
        'ž': 'z', 'Ž': 'z',
        'đ': 'dj', 'Đ': 'dj'
    };
    return str.replace(/[šŠčČćĆžŽđĐ]/g, function(match) {
        return map[match];
    });
}

$('#searchSongs').on('input', function() {
    const searchTerm = $(this).val().toLowerCase().trim();
    // Normalizuj termin pretrage
    const searchNorm = normalizeDiacritics(searchTerm);
    
    const $activeCat = $('.category-content.active');
    const $allItems = $activeCat.find('.song-card, .kolo-card');
    
    if (searchTerm === '') {
        $allItems.show();
        $allItems.filter('.hidden-song').hide();
        $activeCat.find('.load-more-btn').show();
    } else {
        $allItems.each(function() {
            // Normalizuj tekst trenutnog elementa
            const textNorm = normalizeDiacritics($(this).text().toLowerCase());
            if (textNorm.includes(searchNorm)) {
                $('.no-results').remove();
                $(this).show().removeClass('hidden-song');
            } else {
                $(this).hide();
            }
        });
        $activeCat.find('.load-more-btn').hide();
    }
    updateCounters();
});

    // Inicijalno postavi brojače
    updateCounters();





 let currentVideoIndex = 0;
            const videoCards = $('.video-card');
            const totalVideos = videoCards.length;

            function openLightbox(index) {
                if (index < 0 || index >= totalVideos) return;
                
                currentVideoIndex = index;
                const $card = $(videoCards[index]);
                const videoId = $card.data('video-id');
                
                $('#lightboxIframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
                $('#videoLightbox').addClass('active');
            }

            function closeLightbox() {
                $('#lightboxIframe').attr('src', '');
                $('#videoLightbox').removeClass('active');
            }

            // Klik na video karticu
            $('.video-card').click(function() {
                const index = videoCards.index(this);
                openLightbox(index);
            });

            // Dugmad za navigaciju
            $('.lightbox-prev').click(function(e) {
                e.stopPropagation();
                if (totalVideos === 0) return;
                let newIndex = currentVideoIndex - 1;
                if (newIndex < 0) newIndex = totalVideos - 1;
                openLightbox(newIndex);
            });

            $('.lightbox-next').click(function(e) {
                e.stopPropagation();
                if (totalVideos === 0) return;
                let newIndex = currentVideoIndex + 1;
                if (newIndex >= totalVideos) newIndex = 0;
                openLightbox(newIndex);
            });

            // Zatvaranje lightbox-a
            $('.close-lightbox').click(closeLightbox);
            
            // Zatvaranje na klik van iframe-a
            $('#videoLightbox').click(function(e) {
                if (!$(e.target).closest('.lightbox-content, .lightbox-prev, .lightbox-next').length) {
                    closeLightbox();
                }
            });

            // Tasteri na tastaturi
            $(document).keydown(function(e) {
                if (!$('#videoLightbox').hasClass('active')) return;
                
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    $('.lightbox-prev').click();
                } else if (e.key === 'ArrowRight') {
                    $('.lightbox-next').click();
                }
            });

            // Fallback za slike koje se ne učitaju
            $('.video-thumbnail img').on('error', function() {
                $(this).attr('src', 'https://img.youtube.com/vi/' + $(this).closest('.video-card').data('video-id') + '/hqdefault.jpg');
            });







































 const images = [
    'images/galerija/trubaci-zajednicka-grupna.webp',
    'images/galerija/trubaci-sviraju-truba-detalj.webp',
    'images/galerija/trubaci-gosti-kolo.webp',
    'images/galerija/trubaci-torta-iznosenje.webp',
    'images/galerija/trubaci-svadba-prvi-ples.webp',
    'images/galerija/trubaci-bina-festival.webp',
    'images/galerija/trubaci-harmonika-blizina.webp',
    'images/galerija/trubaci-narodna-nosnja.webp',
    'images/galerija/trubaci-bubnjar-ritam.webp',
    'images/galerija/trubaci-gosti-vatromet.webp',
    'images/galerija/trubaci-kafana-drustvo.webp',
    'images/galerija/trubaci-rodjendan-svecanost.webp',
    'images/galerija/trubaci-koncert-raspolozenje.webp',
    'images/galerija/trubaci-detalj-instrumenti.webp',
    'images/galerija/trubaci-zlatna-truba-rukav.webp',
    'images/galerija/trubaci-kumovi-nazdravljanje.webp',
    'images/galerija/trubaci-svatovi-povorka.webp',
    'images/galerija/trubaci-crkva-vencanje.webp',
    'images/galerija/trubaci-opstina-svecano.webp',
    'images/galerija/trubaci-gosti-podizanje-case.webp',
    'images/galerija/trubaci-mlada-mladozenja.webp',
    'images/galerija/trubaci-stariji-gosti.webp',
    'images/galerija/trubaci-dete-truba.webp',
    'images/galerija/trubaci-veselje-zastava.webp',
    'images/galerija/trubaci-kolo-veliko.webp',
    'images/galerija/trubaci-sala-stolovi.webp',
    'images/galerija/trubaci-firma-proslava.webp',
    'images/galerija/trubaci-sala-dekoracija.webp',
    'images/galerija/trubaci-balkon-nastup.webp',
    'images/galerija/trubaci-zora-svadba.webp',
    'images/galerija/trubaci-motorcikli-gosti.webp',
    'images/galerija/trubaci-bazen-proslava.webp',
    'images/galerija/trubaci-livada-piknik.webp',
    'images/galerija/trubaci-zima-sneg.webp',
    'images/galerija/trubaci-more-obala.webp',
    'images/galerija/trubaci-automobil-oldtajmer.webp',
    'images/galerija/trubaci-familija-grupna.webp',
    'images/galerija/trubaci-smeh-radost.webp',
    'images/galerija/trubaci-igra-mlada.webp',
    'images/galerija/trubaci-cvetni-aranzman.webp',
    'images/galerija/trubaci-restoran-terasa.webp',
    'images/galerija/trubaci-kameni-zid.webp',
    'images/galerija/trubaci-luster-svecanost.webp',
    'images/galerija/trubaci-zahvalnica-poklon.webp',
    'images/galerija/trubaci-pogled-odozgo.webp',
    'images/galerija/trubaci-kisobran-kisa.webp',
    'images/galerija/trubaci-starogradska-pesma.webp',
    'images/galerija/trubaci-crno-bela-fotografija.webp',
    'images/galerija/trubaci-koncert-zavesa.webp',
    'images/galerija/trubaci-publika-ovacije.webp',
    'images/galerija/trubaci-rasvetljena-bina.webp',
    'images/galerija/trubaci-folklor-grupa.webp',
    'images/galerija/trubaci-koncert-reflektor.webp',
    'images/galerija/trubaci-poklon-cvece.webp',
    'images/galerija/trubaci-vencanje-svecano.webp'
];



const alt = [
    "Trubački orkestar Džipsi Trik – zajednička grupna fotografija",
    "Krupni kadar trubača sa zlatnom trubom",
    "Gosti igraju kolo uz trubače na svadbi",
    "Svečano iznošenje torte uz trubački orkestar",
    "Mladenci igraju prvi ples uz zvuke trube",
    "Nastup trubačkog orkestra na festivalskoj bini",
    "Harmonikaš i trubač sviraju rame uz rame",
    "Članovi orkestra u tradicionalnim narodnim nošnjama",
    "Bubnjar orkestra Džipsi Trik daje ritam",
    "Trubači sviraju pored vatrometa na otvorenom",
    "Orkestar u kafani okružen gostima",
    "Proslava rođendana uz trubače",
    "Koncert trubačkog orkestra – podignuta atmosfera u sali",
    "Detalj trube i harmonike na suncu",
    "Ruka trubača na zlatnoj trubi",
    "Kumovi nazdravljaju uz trubače",
    "Svatovi u povorci predvođeni trubačima",
    "Trubači sviraju ispred crkve posle venčanja",
    "Svečano ispraćanje iz opštine uz trube",
    "Gosti podižu čaše dok trubači sviraju",
    "Mlada i mladoženja uživaju u svirci",
    "Stariji gosti pevaju uz trubače",
    "Dete pokušava da svira trubu pored muzičara",
    "Veselje uz srpsku zastavu i trubače",
    "Veliko kolo predvodi trubački orkestar",
    "Trubači sviraju među svadbenim stolovima",
    "Proslava godišnjice firme uz trubače",
    "Elegantna sala sa dekoracijom i trubačima",
    "Trubači nastupaju na balkonu restorana",
    "Svadbeno jutro – trubači sviraju u zoru",
    "Gosti na motorciklima uz trubače",
    "Proslava pored bazena uz trubački orkestar",
    "Trubači na piknik proslavi u prirodi",
    "Trubači sviraju na snegu – zimska svadba",
    "Trubači na obali mora tokom letnje proslave",
    "Mladenci u oldtajmer automobilu uz trubače",
    "Čitava familija pozira sa orkestrom",
    "Radost i smeh tokom svirke",
    "Mlada igra kolo sa trubačima",
    "Trubači pored cvetnog aranžmana na svadbi",
    "Nastup na restoranskoj terasi sa pogledom",
    "Trubači ispred kamenog zida – rustična svadba",
    "Svečani luster i trubači u sali",
    "Domaćini uručuju zahvalnicu orkestru",
    "Pogled odozgo na trubače i goste",
    "Trubači sviraju pod kišobranima po kiši",
    "Izvode starogradsku pesmu uz trubače",
    "Crno-bela fotografija trubača u akciji",
    "Pogled iza kulisa – trubači pred izlazak",
    "Publika daje ovacije trubačkom orkestru",
    "Rasvetljena bina sa trubačima",
    "Trubači nastupaju pored folklorne grupe",
    "Trubač pod reflektorom na koncertu",
    "Trubači primaju cveće od gostiju",
    "Svečano raspoloženje na venčanju uz trubače"
];

            let currentIndex = 0;
            const totalImages = images.length;

            // Elementi
            const $currentImage = $('#currentImage');
            const $thumbnails = $('.thumbnail');
            const $dotsContainer = $('#slideDots');
            const $lightbox = $('#lightbox');
            const $lightboxImg = $('#lightboxImg');

            // Kreiraj tačkice
            for (let i = 0; i < totalImages; i++) {
                const $dot = $('<div class="dot"></div>');
                $dot.data('index', i);
                $dotsContainer.append($dot);
            }
            const $dots = $('.dot');

            // Funkcija za ažuriranje prikaza
            function updateGallery(index) {
                if (index < 0) index = totalImages - 1;
                if (index >= totalImages) index = 0;
                currentIndex = index;

                // Promeni glavnu sliku
                $currentImage.attr('src', images[currentIndex]);

                // Aktiviraj odgovarajući thumbnail
                $thumbnails.removeClass('active');
                $thumbnails.eq(currentIndex).addClass('active');

                // Aktiviraj tačkicu
                $dots.removeClass('active');
                $dots.eq(currentIndex).addClass('active');
            }

            // Eventi za dugmad
         $('#prevSlide, #nextSlide').click(function(e) {
            e.stopPropagation(); // Sprečava da se klik prenese na .main-image
    
            if ($(this).is('#prevSlide')) {
                updateGallery(currentIndex - 1);
            } else {
                updateGallery(currentIndex + 1);
            }
});

            // Klik na thumbnail
            $thumbnails.click(function() {
                const index = $thumbnails.index(this);
                updateGallery(index);
            });

            // Klik na tačkicu
            $dots.click(function() {
                const index = $(this).data('index');
                updateGallery(index);
            });

            // Lightbox
            $('.main-image').click(function() {
                 if ($(this.target).closest('.slide-nav').length) {
                    return;
                    }
               
                $lightboxImg.attr('src', images[currentIndex]);
                $lightboxImg.attr('alt', alt[currentIndex]);
                $lightbox.addClass('active');
               
            });

            $('.close-lightbox').click(function() {
                $lightbox.removeClass('active');
            });

            // Navigacija u lightbox-u
            $('.lightbox-prev').click(function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                $lightboxImg.attr('src', images[currentIndex]);
                $lightboxImg.attr('alt', alt[currentIndex]);
                updateGallery(currentIndex); // ažurira i glavni prikaz
            });

            $('.lightbox-next').click(function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % totalImages;
                $lightboxImg.attr('src', images[currentIndex]);
                $lightboxImg.attr('alt', alt[currentIndex]);
                updateGallery(currentIndex);
            });

            // Zatvaranje lightbox-a klikom van slike
            $lightbox.click(function(e) {
                if (!$(e.target).closest('.lightbox-gallery-content, .lightbox-prev, .lightbox-next, .close-lightbox').length) {
                    $lightbox.removeClass('active');
                }
            });

            // Tasteri na tastaturi
            $(document).keydown(function(e) {
                if ($lightbox.hasClass('active')) {
                    if (e.key === 'Escape') {
                        $lightbox.removeClass('active');
                    } else if (e.key === 'ArrowLeft') {
                        $('.lightbox-prev').click();
                    } else if (e.key === 'ArrowRight') {
                        $('.lightbox-next').click();
                    }
                } else {
                    if (e.key === 'ArrowLeft') {
                        updateGallery(currentIndex - 1);
                    } else if (e.key === 'ArrowRight') {
                        updateGallery(currentIndex + 1);
                    }
                }
            });

            // Automatsko listanje (opciono) – pauza na hover
            let autoSlide = setInterval(function() {
                updateGallery(currentIndex + 1);
            }, 5000);

            $('.gallery-slider').hover(
                function() { clearInterval(autoSlide); },
                function() { autoSlide = setInterval(function() { updateGallery(currentIndex + 1); }, 5000); }
            );

            // Inicijalno postavi prvu sliku
            updateGallery(0);
      
            




});






const menuToggle = document.querySelector('.menu-toggle');
    const navBottom = document.querySelector('.nav-bottom');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navBottom.classList.toggle('active');
        });
    }

    // Zatvaranje menija kada se klikne na link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navBottom.classList.remove('active');
        });
    });



let broj1=document.getElementById("broj1");
let broj2= document.getElementById("broj2");
if(broj1 && broj2){
 let b1 = "063 81 14 223";
  let b2 = "068 103 659";
  document.getElementById("broj1").innerText = b1;
  document.getElementById("broj2").innerText = b2;


   var emailLink = document.getElementById('email-link');
    if (emailLink) {
        var user = 'trubacidzipsitrik';
        var domain = 'gmail.com';
        emailLink.href = 'mailto:' + user + '@' + domain;
    }

}