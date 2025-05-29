// 检查是否是本地开发环境
const isLocalDev = window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1';

// 设置基础路径
const basePath = isLocalDev ? '' : '/cv';

// 动态更新资源路径
function updatePaths() {
    // 更新所有带有 data-src 属性的元素
    document.querySelectorAll('[data-src]').forEach(element => {
        const path = element.getAttribute('data-src');
        element.setAttribute('href', `${basePath}${path}`);
    });
} 
