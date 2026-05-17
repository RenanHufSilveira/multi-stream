// Extrai o video ID de URLs como:
// https://www.youtube.com/watch?v=XXXX
// https://youtu.be/XXXX
// https://www.youtube.com/live/XXXX
const extractYouTubeId = (url) => {
    try {
        const u = new URL(url);
        if (u.hostname === 'youtu.be') return u.pathname.slice(1);
        return u.searchParams.get('v') || u.pathname.split('/').pop();
    } catch {
        return url; // assume que já é o ID
    }
};

const YoutubePlayer = ({ url }) => {
    const videoId = extractYouTubeId(url);
    return (
        <iframe
            style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default YoutubePlayer;
