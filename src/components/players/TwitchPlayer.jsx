// Aceita URL completa (https://twitch.tv/channel) ou só o nome do canal
const extractTwitchChannel = (url) => {
    try {
        const u = new URL(url);
        return u.pathname.replace('/', '');
    } catch {
        return url; // assume que já é o nome do canal
    }
};

const TwitchPlayer = ({ url }) => {
    const channel = extractTwitchChannel(url);
    const parent = window.location.hostname;
    return (
        <iframe
            style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
            src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}`}
            allowFullScreen
        />
    );
};

export default TwitchPlayer;
