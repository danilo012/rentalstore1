function templateArticle(...article) {
    let [title, articleUrl, ogUrl, source, sourceIconUrl] = article;
    if (title.length > 2) {
        title = title.slice(0, 2);
        title += '...';
    }
    return `
        <div class="news-item me-2">
            <img width="240" height="160" src="${ogUrl}" alt="News Image">
            <p class="news-title">
                <a href="${articleUrl}" class="plain-link" title="${title}" target="_blank">
                    ${title}
                </a>
            </p>
            <div class="bg-light-gray">
                <img width="16" height="16" class="icon" src="${sourceIconUrl}" alt="news-icon" />
                ${source}
            </div>
        </div>`;
}

function templateRow(sectionName, articles) {
    return `
    <div class="row mt-5 mb-4">
        <div class="col-1">
          &emsp;
        </div>
        <div class="col-10 bg-lighter-gray">
            <h5 class="mt-2 text-primary">
                ${sectionName}
            </h5>
            <div class="news-feed" style="overflow-y: hidden;">
                ${articles}
            </div>
        </div>
        <div class="col-1">
          &emsp;
        </div>
    </div>`;
}

function setNewsSection(newsSections) {
    const sections = [
        'World',
        'US',
        'Business',
        'Technology',
        'Entertainment',
        'Sports',
        'Science',
        'Health',
    ];

    let sectionHtml = '';
    for (const section of sections) {
        let sectionEntries = '';
        for (const article of newsSections[section]) {
            sectionEntries += templateArticle(
                article['title'],
                article['link'],
                article['og'],
                article['source'],
                article['source_icon'],
            );
        }
        sectionHtml += templateRow(section, sectionEntries);
    }
    document.getElementById('news').innerHTML = sectionHtml;
}

async function setNews(url) {
    fetch(url).then((res) => {
        if (!res.ok) {
            throw Error('could not fetch data for that resource');
        }
        return res.json();
    }).then((data) => {
        setNewsSection(data);
    }).catch((err) => {
        console.log(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://ok.surf/api/v1/cors/news-feed';
    setNews(url).catch((err) => {
        console.log(err);
    });
});