import { CloseOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import YoutubePlayer from './players/YouTubePlayer';
import TwitchPlayer from './players/TwitchPlayer';
import KickPlayer from './players/KickPlayer';

const platformColors = {
    youtube: 'red',
    twitch: 'purple',
    kick: 'green',
};

const StreamCard = ({ id, platform, url, onRemove }) => {
    const renderPlayer = () => {
        switch (platform) {
            case 'youtube': return <YoutubePlayer url={url} />;
            case 'twitch':  return <TwitchPlayer url={url} />;
            case 'kick':    return <KickPlayer url={url} />;
            default:        return null;
        }
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: 8,
            overflow: 'hidden',
            background: '#000',
        }}>
            {/* player ocupa todo o espaço */}
            <div style={{ width: '100%', height: '100%' }}>
                {renderPlayer()}
            </div>

            {/* barra superior com plataforma + botão remover */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4px 8px',
                background: 'rgba(0,0,0,0.55)',
            }}>
                <Tag color={platformColors[platform]} style={{ margin: 0, textTransform: 'capitalize' }}>
                    {platform}
                </Tag>
                <Button
                    type="text"
                    size="small"
                    icon={<CloseOutlined />}
                    onClick={() => onRemove(id)}
                    style={{ color: '#fff' }}
                />
            </div>
        </div>
    );
};

export default StreamCard;
