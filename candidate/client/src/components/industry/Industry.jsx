import { Card, Typography } from "antd";

const { Title, Text } = Typography;

function Industry({ title, description, image }) {
  return (
    <Card
      hoverable
      style={{
        width: "265px",
        height: "250px",
        borderRadius: "5px",
        border: "solid 1px #dddcdc",
        margin: "10px auto",
      }}
      cover={
        <img
          style={{
            width: "97%",
            height: "128px",
            margin: "5px auto",
            borderRadius: "5px",
          }}
          alt="example"
          src={image}
        />
      }
    >
      <Title level={5}>{title}</Title>
      <Text >{description}</Text>
    </Card>
  );
}

export default Industry;
