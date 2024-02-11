// breadcrumbs.js
document.addEventListener('DOMContentLoaded', (event) => {
    const breadcrumbElementId = 'breadcrumbs'; // ID of the breadcrumb element
    const breadcrumbContainer = document.getElementById(breadcrumbElementId);
    if (!breadcrumbContainer) return;

    const homeLink = 'https://jiho98.github.io/Metrics/'; // URL for 'Home'
    const pathnames = window.location.pathname.split('/').filter(Boolean);
    let breadcrumbInnerHTML = `<a href="${homeLink}">Home</a>`; // Starting with 'Home' link

    let path = homeLink; // Initialize path with homeLink
    for (let i = 1; i < pathnames.length; i++) { // Start loop from 1 to skip 'Metrics' in the path
        const segment = pathnames[i];
        if (segment.toLowerCase() === 'index.html' || segment.toLowerCase() === 'metrics') {
            continue; // Skip 'index.html' and 'Metrics'
        }

        // Construct the path incrementally, if not the first segment after 'Home'
        if (i > 1) {
            path += '/' + segment;
        }

        // Decode URI components to get a readable format and remove file extension
        const readableSegment = decodeURIComponent(segment.replace(/\.\w+$/, ''));

        // Check if this is the last segment
        if (i === pathnames.length - 1) {
            // Last item is active and not a link
            breadcrumbInnerHTML += ` <span class="breadcrumb-item active" aria-current="page">${readableSegment}</span>`;
        } else {
            // Add a slash before each segment after 'Home'
            breadcrumbInnerHTML += ` / <a href="${path}" class="breadcrumb-item">${readableSegment}</a>`;
        }
    }

    breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb" class="breadcrumb">${breadcrumbInnerHTML}</nav>`;
});
