import { Button, MenuItem } from "@mui/material";
import { useState } from "react";
import CustomLabel from "../../FormControls/Label/index";
import CustomSelect from "../../FormControls/Select/index";

const ProfileSettingsForm = () => {
  const [onlineSetting, setOnlineSetting] = useState("0");
  const [defaultSort, setDefaultSort] = useState("0");
  const [sortType, setSortType] = useState("0");
  const [showPosts, setShowPosts] = useState("0");
  const [adult, setAdult] = useState("0");

  return (
    <form>
      <div>
        <CustomLabel title="Статус онлайн" />
        <CustomSelect
          value={onlineSetting}
          onChange={(e) => setOnlineSetting(e.target.value)}
        >
          <MenuItem value={0}>Показывать когда я онлайн</MenuItem>
          <MenuItem value={1}>Скрыть от всех</MenuItem>
        </CustomSelect>
      </div>
      <div>
        <CustomLabel title="Лента по умолчанию" />
        <CustomSelect
          value={defaultSort}
          onChange={(e) => setDefaultSort(e.target.value)}
        >
          <MenuItem value={0}>Популярное</MenuItem>
          <MenuItem value={1}>Свежее</MenuItem>
          <MenuItem value={2}>Моя лента</MenuItem>
        </CustomSelect>
      </div>
      <div>
        <CustomLabel title={`Сортировка "Моей ленты"`} />
        <CustomSelect
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <MenuItem value={0}>По популярности</MenuItem>
          <MenuItem value={1}>По дате</MenuItem>
        </CustomSelect>
      </div>
      <div>
        <CustomLabel title="Записи в блоге" />
        <CustomSelect
          value={showPosts}
          onChange={(e) => setShowPosts(e.target.value)}
        >
          <MenuItem value={0}>Показывать всем</MenuItem>
          <MenuItem value={1}>Показывать только подписчикам</MenuItem>
        </CustomSelect>
      </div>
      <div>
        <CustomLabel title="Контент для взрослых" />
        <CustomSelect value={adult} onChange={(e) => setAdult(e.target.value)}>
          <MenuItem value={0}>Блюрить записи 18+ в ленте</MenuItem>
          <MenuItem value={1}>Показать всё</MenuItem>
        </CustomSelect>
      </div>
      <Button color="primary" variant="outlined">
        Сохранить
      </Button>
    </form>
  );
};

export default ProfileSettingsForm;
