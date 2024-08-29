import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="quicksand-500 ">
        Weather Flash ☀️ | Mis Favoritos 👉
        <IconButton onClick={() => navigate("/mis-favoritos")}>
          <FavoriteBorderOutlinedIcon color="primary" />
        </IconButton>
      </h1>
    </div>
  );
}

export default Title;
