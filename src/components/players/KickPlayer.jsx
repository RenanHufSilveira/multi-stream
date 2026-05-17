// Aceita URL completa (https://kick.com/channel) ou só o nome do canal
const extractKickChannel = (url) => {
    try {
        const u = new URL(url);
        return u.pathname.replace('/', '');
    } catch {
        return url; // assume que já é o nome do canal
    }
};

const KickPlayer = ({ url }) => {
    const channel = extractKickChannel(url);
    return (
        <iframe
            style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
            src={`https://player.kick.com/${channel}`}
            allowFullScreen
        />
    );
};

export default KickPlayer;
