// breadcrumbs.js
document.addEventListener('DOMContentLoaded', (event) => {
    const breadcrumbElementId = 'breadcrumbs'; // ID of the breadcrumb element
    const breadcrumbContainer = document.getElementById(breadcrumbElementId);
    if (!breadcrumbContainer) return;

    const pathnames = window.location.pathname.split('/').filter(Boolean);
    let breadcrumbInnerHTML = '<a href="/">Home</a>'; // Starting with 'Home' link

    let path = '';
    for (let i = 0; i < pathnames.length; i++) {
        const segment = pathnames[i];
        if (segment.toLowerCase() === 'index.html') {
            continue; // Skip 'index.html'
        }

        // Construct the path incrementally
        path += `/${segment}`;

        // Decode URI components to get a readable format and remove file extension
        const readableSegment = decodeURIComponent(segment.replace(/\.\w+$/, ''));

        // Check if this is the last segment
        if (i === pathnames.length - 1) {
            // Last item is active and not a link
            breadcrumbInnerHTML += ` <span class="breadcrumb-item active" aria-current="page">${readableSegment}</span>`;
        } else {
            // Add a space and a slash before each segment after 'Home'
            breadcrumbInnerHTML += ` / <a href="${path}/" class="breadcrumb-item">${readableSegment}</a>`;
        }
    }

    breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb" class="breadcrumb">${breadcrumbInnerHTML}</nav>`;
});
