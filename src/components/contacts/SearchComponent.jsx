import React from "react";
import { Input } from "antd";
import { getSearch, getData } from "../../store/contacts/actions";
import { useDispatch } from "react-redux";

const { Search } = Input;

const SearchComponent = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value === "") {
      dispatch(getData());
    } else {
      dispatch(getSearch(value));
    }
  };

  return (
    <div>
      <Search
        placeholder="введите имя контакта"
        allowClear
        enterButton="Поиск"
        onSearch={onSearch}
      />
    </div>
  );
};
export default SearchComponent;
