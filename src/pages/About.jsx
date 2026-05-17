import { Typography, Card, Divider, Tag, Space } from 'antd';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 0' }}>
      <Typography>
        <Title level={2}>About Multi-Stream</Title>
        <Paragraph>
          Multi-Stream is a dashboard for monitoring and managing multiple live
          streams from a single interface. Built with React and Ant Design, it
          aims to give streamers and viewers a unified, distraction-free
          experience.
        </Paragraph>

        <Divider />

        <Title level={4}>Tech Stack</Title>
        <Space wrap style={{ marginBottom: 24 }}>
          <Tag color="blue">React 19</Tag>
          <Tag color="purple">Ant Design 6</Tag>
          <Tag color="orange">Vite 8</Tag>
          <Tag color="green">React Router 7</Tag>
        </Space>

        <Divider />

        <Title level={4}>Version</Title>
        <Paragraph>
          <Text code>0.0.0</Text> — early development
        </Paragraph>
      </Typography>
    </div>
  );
};

export default About;
