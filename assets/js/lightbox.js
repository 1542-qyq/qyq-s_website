/* ========================================
   图片查看器（Lightbox）功能
   ======================================== */
function initLightbox() {
    const images = document.querySelectorAll('.gallery-item img, .image-container img, .wireframe-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox || !lightboxImg || !lightboxCaption) {
        return;
    }

    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            let caption = '';
            const figure = this.closest('figure');
            if (figure && figure.querySelector('figcaption')) {
                caption = figure.querySelector('figcaption').textContent;
            } else {
                const div = this.closest('.wireframe-item');
                if (div && div.querySelector('figcaption')) {
                    caption = div.querySelector('figcaption').textContent;
                }
            }
            
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', initLightbox);