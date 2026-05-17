import StreamCard from './StreamCard';

// Calcula quantas colunas usar baseado na quantidade de streams
const getColSpan = (count) => {
    if (count === 1) return 24;      // 1 stream  → largura total
    if (count <= 4) return 12;       // 2–4 streams → 2 por linha
    return 8;                        // 5+ streams  → 3 por linha
};

const StreamGrid = ({ streams, onRemove }) => {
    if (!streams || streams.length === 0) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                color: '#999',
                fontSize: 16,
            }}>
                Nenhuma stream adicionada. Use o seletor acima para começar.
            </div>
        );
    }

    // Altura do card: mais alto quando há poucas streams
    const cardHeight = streams.length <= 2 ? 420 : streams.length <= 4 ? 320 : 260;
    const colPercent = getColSpan(streams.length) / 24 * 100;

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
        }}>
            {streams.map((stream) => (
                <div
                    key={stream.id}
                    style={{
                        // flex-basis calculado pelo span, descontando o gap
                        flexBasis: `calc(${colPercent}% - 12px)`,
                        flexGrow: 1,
                        minWidth: 280,
                        height: cardHeight,
                    }}
                >
                    <StreamCard
                        id={stream.id}
                        platform={stream.platform}
                        url={stream.url}
                        onRemove={onRemove}
                    />
                </div>
            ))}
        </div>
    );
};

export default StreamGrid;
