import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/rickAndMorty/actions";
import { useSelector } from "react-redux";
import { List, Card } from "antd";

const RandM = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const data = useSelector((state) => state.rickAndMorty);

  return (
    <div style={{ margin: "10px 0px" }}>
      {"data" in data ? (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data.data.results}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={item.name}
                hoverable
                style={{ width: 240 }}
                cover={<img src={item.image}></img>}
              ></Card>
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
};

export default RandM;
