
/**
 * Visual Effects for Portfolio
 * 1. Interactive Grid Background (Canvas)
 * 2. Smart Tooltips for Skills and Projects
 */

export function initGridBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'grid-background';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height, particles;

    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 100, 100, 0.3)'; 
            ctx.fill();
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.floor((width * height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(150, 150, 150, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            if (mouse.x !== null) {
                const mdx = particles[i].x - mouse.x;
                const mdy = particles[i].y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mdist < mouse.radius) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mdist / mouse.radius})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

export function initTooltips() {
    const skillDescriptions = {
        'Python': 'The core language for all my backend services',
        'FastAPI': 'Modern, high-performance web framework for building APIs',
        'PostgreSQL': 'Reliable relational database for structured data',
        'SQL': 'Standard language for managing database queries',
        'Telegram боты': 'Interactive bots for automation and notifications',
        'Telegram bots': 'Interactive bots for automation and notifications',
        'REST API': 'Standard architectural style for networked applications',
        'Docker': 'Containerization for consistent deployment across environments',
        'SQLAlchemy': 'Powerful SQL toolkit and ORM for Python',
        'Аутентификация': 'Secure user access and session management',
        'Authentication': 'Secure user access and session management',
        'Webhooks': 'Real-time event-driven communication between services',
        'Cloudflare': 'Edge computing and infrastructure security'
    };

    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.style.position = 'fixed';
    tooltip.style.padding = '6px 12px';
    tooltip.style.background = 'var(--ink)';
    tooltip.style.color = 'var(--paper)';
    tooltip.style.fontSize = '12px';
    tooltip.style.fontWeight = '500';
    tooltip.style.borderRadius = '6px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.zIndex = '10000';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.2s ease';
    tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    document.body.appendChild(tooltip);

    const targets = document.querySelectorAll('.skill-list span, .project');

    targets.forEach(target => {
        target.addEventListener('mouseenter', (e) => {
            const text = target.innerText.trim();
            const description = skillDescriptions[text] || 'Project detail: Click for architecture';
            
            tooltip.innerText = description;
            tooltip.style.opacity = '1';
        });

        target.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        });

        target.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}
