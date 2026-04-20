// ============================================
// PAGKA SITE — SHARED JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ---- Mobile Navigation ----
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      const spans = mobileToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // ---- Product Switcher (Bonsai-style tabs) ----
  const switcherBtns = document.querySelectorAll('.product-switcher-btn');
  const productPanels = document.querySelectorAll('.product-panel');
  
  switcherBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const target = this.dataset.target;
      
      // Update buttons
      switcherBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update panels
      productPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.dataset.panel === target) {
          panel.classList.add('active');
        }
      });
    });
  });
  
  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        
        // Close all others (optional accordion behavior)
        // faqItems.forEach(i => i.classList.remove('open'));
        
        // Toggle current
        if (isOpen) {
          item.classList.remove('open');
        } else {
          item.classList.add('open');
        }
      });
    }
  });
  
  // ---- Scroll-Triggered Reveals ----
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // ---- Navbar scroll effect ----
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      nav.style.boxShadow = '0 4px 20px rgba(10, 37, 64, 0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ---- Active nav link highlighting ----
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('./', '').replace('.html', ''))) {
      link.style.color = 'var(--navy-900)';
      link.style.fontWeight = '600';
    }
  });
  
});
