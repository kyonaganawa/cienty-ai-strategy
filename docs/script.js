// Survey Data Analysis - Cienty AI Usage Survey
// January 2026 - 16 respondents

// Respondent data mapped to their responses
const respondents = {
    tools: {
        'ChatGPT': ['Luciano', 'Weslei', 'Guilherme', 'Diego', 'Henrique', 'Bruna', 'Yovany', 'Lucas', 'Daniel', 'Edson', 'Luiza', 'Gustavo'],
        'Google Gemini': ['Luciano', 'Weslei', 'Mara', 'Diego', 'Henrique', 'Daniel', 'Luiza', 'Gustavo'],
        'Cursor': ['Luciano', 'Yovany', 'Lucas', 'Andrew', 'Daniel', 'Bernardo', 'Mara'],
        'Claude': ['Luciano', 'Weslei', 'Yovany', 'Bernardo'],
        'MS Copilot': ['Mara'],
        'Transcrição': ['Weslei', 'Guilherme'],
        'DeepSeek': ['Bruna'],
        'Notion AI': ['Gustavo'],
        'Grammarly': ['Bernardo']
    },
    comfort: {
        'Muito Confortável': ['Luciano', 'Weslei', 'Mara', 'Yovany', 'Andrew', 'Bernardo'],
        'Confortável': ['Guilherme', 'Diego', 'Henrique', 'Bruna', 'Lucas', 'Daniel', 'Luiza', 'Gustavo'],
        'Neutro': ['Edson']
    },
    time: {
        '+10 horas': ['Luciano', 'Weslei', 'Andrew', 'Bernardo'],
        '3-5 horas': ['Mara', 'Bruna', 'Daniel', 'Yovany'],
        '1-3 horas': ['Guilherme', 'Diego', 'Henrique', 'Edson', 'Luiza', 'Gustavo'],
        '<1 hora': ['Lucas', 'Gustavo']
    },
    barriers: {
        'Falta de tempo para aprender': ['Luciano', 'Mara', 'Guilherme', 'Diego', 'Henrique', 'Edson', 'Luiza'],
        'Não sei quais ferramentas estão disponíveis': ['Guilherme', 'Henrique', 'Lucas', 'Luiza', 'Gustavo'],
        'Não sei como usá-las efetivamente': ['Guilherme', 'Daniel', 'Edson', 'Luiza', 'Gustavo'],
        'Preocupações com privacidade/segurança': ['Mara', 'Henrique', 'Bernardo', 'Luiza'],
        'Nada me impede': ['Weslei', 'Bruna', 'Yovany', 'Andrew', 'Bernardo'],
        'Resultados não são bons o suficiente': ['Diego'],
        'Não confio na precisão dos resultados': ['Bernardo'],
        'Empresa não fornece ferramentas/treinamento': ['Henrique']
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    animateOnScroll();
});

// Custom tooltip that shows users
function createUserTooltip(dataMap) {
    return {
        callbacks: {
            label: function(context) {
                const label = context.label || context.dataset.label || '';
                const value = context.raw;
                const percentage = Math.round((value / 16) * 100);
                return `${value} pessoas (${percentage}%)`;
            },
            afterLabel: function(context) {
                const labels = Object.keys(dataMap);
                const label = context.label || labels[context.dataIndex];
                const users = dataMap[label] || [];
                if (users.length > 0) {
                    return '\n' + users.join(', ');
                }
                return '';
            }
        },
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 12,
        boxPadding: 6,
        multiKeyBackground: 'transparent'
    };
}

function initCharts() {
    // Tools Chart
    const toolsCtx = document.getElementById('toolsChart');
    if (toolsCtx) {
        new Chart(toolsCtx, {
            type: 'bar',
            data: {
                labels: ['ChatGPT', 'Google Gemini', 'Cursor', 'Claude', 'MS Copilot', 'Transcrição', 'DeepSeek', 'Notion AI', 'Grammarly'],
                datasets: [{
                    label: 'Usuários',
                    data: [12, 8, 7, 4, 1, 2, 1, 1, 1],
                    backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(124, 58, 237, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(139, 92, 246, 0.6)',
                        'rgba(34, 197, 94, 0.6)',
                        'rgba(251, 191, 36, 0.6)'
                    ],
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.raw;
                                const percentage = Math.round((value / 16) * 100);
                                return `${value} usuários (${percentage}%)`;
                            },
                            afterLabel: function(context) {
                                const label = context.label;
                                const users = respondents.tools[label] || [];
                                if (users.length > 0) {
                                    return '\nUsuários: ' + users.join(', ');
                                }
                                return '';
                            }
                        },
                        titleFont: { size: 14, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        boxPadding: 6
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 16,
                        ticks: {
                            stepSize: 4
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Comfort Level Chart
    const comfortCtx = document.getElementById('comfortChart');
    if (comfortCtx) {
        new Chart(comfortCtx, {
            type: 'doughnut',
            data: {
                labels: ['Muito Confortável', 'Confortável', 'Neutro'],
                datasets: [{
                    data: [6, 9, 1],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#f59e0b'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.raw;
                                const percentage = Math.round((value / 16) * 100);
                                return `${value} pessoas (${percentage}%)`;
                            },
                            afterLabel: function(context) {
                                const label = context.label;
                                const users = respondents.comfort[label] || [];
                                if (users.length > 0) {
                                    return '\nUsuários: ' + users.join(', ');
                                }
                                return '';
                            }
                        },
                        titleFont: { size: 14, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        boxPadding: 6
                    }
                }
            }
        });
    }

    // Time Spent Chart
    const timeCtx = document.getElementById('timeChart');
    if (timeCtx) {
        new Chart(timeCtx, {
            type: 'doughnut',
            data: {
                labels: ['+10 horas', '3-5 horas', '1-3 horas', '<1 hora'],
                datasets: [{
                    data: [4, 4, 6, 2],
                    backgroundColor: [
                        '#8b5cf6',
                        '#3b82f6',
                        '#10b981',
                        '#ef4444'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.raw;
                                const percentage = Math.round((value / 16) * 100);
                                return `${value} pessoas (${percentage}%)`;
                            },
                            afterLabel: function(context) {
                                const label = context.label;
                                const users = respondents.time[label] || [];
                                if (users.length > 0) {
                                    return '\nUsuários: ' + users.join(', ');
                                }
                                return '';
                            }
                        },
                        titleFont: { size: 14, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        boxPadding: 6
                    }
                }
            }
        });
    }

    // Barriers Chart
    const barriersCtx = document.getElementById('barriersChart');
    if (barriersCtx) {
        const barrierLabels = [
            'Falta de tempo para aprender',
            'Não sei quais ferramentas estão disponíveis',
            'Não sei como usá-las efetivamente',
            'Preocupações com privacidade/segurança',
            'Nada me impede',
            'Resultados não são bons o suficiente',
            'Não confio na precisão dos resultados',
            'Empresa não fornece ferramentas/treinamento'
        ];

        new Chart(barriersCtx, {
            type: 'bar',
            data: {
                labels: barrierLabels,
                datasets: [{
                    label: 'Respostas',
                    data: [7, 5, 5, 4, 5, 1, 1, 1],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(245, 158, 11, 0.7)',
                        'rgba(239, 68, 68, 0.7)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(156, 163, 175, 0.7)',
                        'rgba(156, 163, 175, 0.6)',
                        'rgba(156, 163, 175, 0.5)'
                    ],
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.raw;
                                const percentage = Math.round((value / 16) * 100);
                                return `${value} respostas (${percentage}%)`;
                            },
                            afterLabel: function(context) {
                                const label = context.label;
                                const users = respondents.barriers[label] || [];
                                if (users.length > 0) {
                                    return '\nUsuários: ' + users.join(', ');
                                }
                                return '';
                            }
                        },
                        titleFont: { size: 14, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        boxPadding: 6
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 10,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Animate progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.tool-progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Call animation after page load
window.addEventListener('load', animateProgressBars);
