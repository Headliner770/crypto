import { Select, Space } from "antd";
import { useState } from "react";

export default function AddAssetForm() {
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{ width: 200 }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value="press / to open"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 30 }}
              src={option.data.icon}
              alt={option.data.label}
            />{" "}
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  return <form>FORM ASSET</form>;
}
