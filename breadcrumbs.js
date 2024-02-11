// breadcrumbs.js
document.addEventListener('DOMContentLoaded', (event) => {
    const breadcrumbElementId = 'breadcrumbs'; // ID of the breadcrumb element
    const breadcrumbContainer = document.getElementById(breadcrumbElementId);
    if (!breadcrumbContainer) return;

    const homeLink = 'https://jiho98.github.io/Metrics/'; // Updated URL for 'Home'
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
        } else {
            path += segment;
        }

        // Add a breadcrumb for the current segment
        breadcrumbInnerHTML += ` &gt; <a href="${path}">${decodeURIComponent(segment)}</a>`;
    }

    // Set the innerHTML of the breadcrumb container
    breadcrumbContainer.innerHTML = breadcrumbInnerHTML;
});
