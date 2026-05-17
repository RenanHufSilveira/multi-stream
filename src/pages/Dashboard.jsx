import { useState } from 'react';
import { Button, Divider, Input, Select, Space, Form, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import StreamGrid from '../components/StreamGrid';

const { Title } = Typography;

const PLATFORMS = [
    { value: 'youtube', label: 'YouTube' },
    { value: 'twitch',  label: 'Twitch'  },
    { value: 'kick',    label: 'Kick'    },
];

const PLACEHOLDERS = {
    youtube: 'https://www.youtube.com/watch?v=...',
    twitch:  'https://twitch.tv/nome_do_canal',
    kick:    'https://kick.com/nome_do_canal',
};

const Dashboard = () => {
    const [streams, setStreams] = useState([]);
    const [platform, setPlatform] = useState('youtube');
    const [url, setUrl] = useState('');

    const handleAdd = () => {
        const trimmed = url.trim();
        if (!trimmed) return;

        setStreams((prev) => [
            ...prev,
            { id: Date.now(), platform, url: trimmed },
        ]);
        setUrl('');
    };

    const handleRemove = (id) => {
        setStreams((prev) => prev.filter((s) => s.id !== id));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Seletor de stream */}
            <div>
                <Title level={5} style={{ marginBottom: 8 }}>Adicionar stream</Title>
                <Space.Compact style={{ width: '100%' }}>
                    <Select
                        value={platform}
                        onChange={(val) => { setPlatform(val); setUrl(''); }}
                        options={PLATFORMS}
                        style={{ width: 130 }}
                    />
                    <Input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onPressEnter={handleAdd}
                        placeholder={PLACEHOLDERS[platform]}
                        style={{ flex: 1 }}
                    />
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAdd}
                        disabled={!url.trim()}
                    >
                        Adicionar
                    </Button>
                </Space.Compact>
            </div>

            <Divider style={{ margin: '4px 0' }} />

            {/* Grade de streams */}
            <StreamGrid streams={streams} onRemove={handleRemove} />
        </div>
    );
};

export default Dashboard;
