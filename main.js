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







// Kada se stranica učita
$(document).ready(function() {
    
     $('#citySearch').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        if (searchTerm.length === 0) {
            // Prikaži sve
            $('.city-group').show();
            $('.city-items li').show();
        } else {
            // Prvo sakrij sve grupe
            $('.city-group').hide();
            
            // Prođi kroz sve linkove gradova
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
    
    // FILTRIRANJE PO REGIONU (opciono – sklopive grupe)
    $('.group-title').click(function() {
        $(this).next('.city-items').slideToggle(300);
        $(this).toggleClass('collapsed');
    });
    
    // PRIKAŽI UKUPAN BROJ GRADOVA
    const totalCities = $('.city-link').length;
    $('#totalCities').text(totalCities + '+');
    
    // URL HASH SUPPORT (opciono – preusmeravanje sa stare hash adrese)
    if (window.location.hash) {
        const cityFromHash = window.location.hash.substring(1);
        const cityLink = $(`.city-link[data-city="${cityFromHash}"]`);
        if (cityLink.length) {
            // Preusmeri na odgovarajuću HTML stranicu
            window.location.href = cityLink.attr('href');
        }
    }























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
    'images/galerija/trubaci-vencanje-svecano.webp',
    // 17 novih slika za SEO
    'images/galerija/trubaci-svadbena-povorka.webp',
    'images/galerija/trubaci-kumovi-kolo.webp',
    'images/galerija/trubaci-vencanje-crkva-ulaz.webp',
    'images/galerija/trubaci-sala-ples-gosti.webp',
    'images/galerija/trubaci-buđenje-mladenaca.webp',
    'images/galerija/trubaci-nazdravlje-čaše.webp',
    'images/galerija/trubaci-folklor-igra.webp',
    'images/galerija/trubaci-venac-bacanje.webp',
    'images/galerija/trubaci-kola-u-prirodi.webp',
    'images/galerija/trubaci-restoran-balkon.webp',
    'images/galerija/trubaci-proslava-godisnjica.webp',
    'images/galerija/trubaci-muzika-za-ples.webp',
    'images/galerija/trubaci-zabava-gosti.webp',
    'images/galerija/trubaci-iznenadjenje-mlada.webp',
    'images/galerija/trubaci-zavrsno-kolo.webp',
    'images/galerija/trubaci-dekoracija-svece.webp',
    'images/galerija/trubaci-porodicno-okupljanje.webp'
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
    "Svečano raspoloženje na venčanju uz trubače",
    // 17 novih alt tekstova za SEO
    "Svadbena povorka kroz grad uz trubače i goste",
    "Kumovi i kume igraju kolo uz trubački orkestar",
    "Mladenci ulaze u crkvu uz svirku trubača",
    "Gosti plešu u sali dok trubači sviraju uživo",
    "Buđenje mladenaca uz jutarnju trubačku serenadu",
    "Podizanje čaša u nazdravlje uz zvuke trube",
    "Folklorne igre uz pratnju trubačkog orkestra",
    "Bacanje venčanog venca uz trubače na svadbi",
    "Kolo u prirodi uz trubače na seoskom veselju",
    "Nastup trubača na balkonu restorana sa pogledom",
    "Proslava godišnjice braka uz trubače i tortu",
    "Romantični ples mladenaca uz trubačku muziku",
    "Zabava gostiju do kasno u noć uz trubače",
    "Iznenadni nastup trubača za mladu na venčanju",
    "Završno kolo na svadbi uz trubače i baklje",
    "Trubači ispred svečane dekoracije sa svećama",
    "Porodično okupljanje uz trubače na velikom slavlju"
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



     setTimeout(function() {
        $('#floatingPhone .phone-icon').css('transition', 'all 0.5s ease');
    }, 500);
}
